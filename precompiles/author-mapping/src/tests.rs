// Copyright 2019-2022 PureStake Inc.
// This file is part of Moonbeam.

// Moonbeam is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Moonbeam is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Moonbeam.  If not, see <http://www.gnu.org/licenses/>.

use crate::mock::{
	events,
	Account::{Alice, Precompile},
	ExtBuilder, PCall, Precompiles, PrecompilesValue, Runtime, RuntimeCall, RuntimeOrigin,
};
use frame_support::{assert_ok, dispatch::Dispatchable};
use nimbus_primitives::NimbusId;
use pallet_author_mapping::{keys_wrapper, Call as AuthorMappingCall, Event as AuthorMappingEvent};
use pallet_balances::Event as BalancesEvent;
use pallet_evm::{Call as EvmCall, Event as EvmEvent};
use precompile_utils::{prelude::*, solidity, testing::*};
use sp_core::crypto::UncheckedFrom;
use sp_core::{H256, U256};

fn precompiles() -> Precompiles<Runtime> {
	PrecompilesValue::get()
}

fn evm_call(input: Vec<u8>) -> EvmCall<Runtime> {
	EvmCall::call {
		source: Alice.into(),
		target: Precompile.into(),
		input,
		value: U256::zero(), // No value sent in EVM
		gas_limit: u64::max_value(),
		max_fee_per_gas: 0.into(),
		max_priority_fee_per_gas: Some(U256::zero()),
		nonce: None, // Use the next nonce
		access_list: Vec::new(),
	}
}

#[test]
fn selector_less_than_four_bytes() {
	ExtBuilder::default().build().execute_with(|| {
		// This selector is only three bytes long when four are required.
		precompiles()
			.prepare_test(Alice, Precompile, vec![1u8, 2u8, 3u8])
			.execute_reverts(|output| output == b"Tried to read selector out of bounds");
	});
}

#[test]
fn no_selector_exists_but_length_is_right() {
	ExtBuilder::default().build().execute_with(|| {
		precompiles()
			.prepare_test(Alice, Precompile, vec![1u8, 2u8, 3u8, 4u8])
			.execute_reverts(|output| output == b"Unknown selector");
	});
}

#[test]
fn selectors() {
	assert!(PCall::add_association_selectors().contains(&0xef8b6cd8));
	assert!(PCall::update_association_selectors().contains(&0x25a39da5));
	assert!(PCall::clear_association_selectors().contains(&0x448b54d6));
	assert!(PCall::remove_keys_selectors().contains(&0xa36fee17));
	assert!(PCall::set_keys_selectors().contains(&0xf1ec919c));
}

#[test]
fn modifiers() {
	ExtBuilder::default().build().execute_with(|| {
		let mut tester = PrecompilesModifierTester::new(precompiles(), Alice, Precompile);

		tester.test_default_modifier(PCall::add_association_selectors());
		tester.test_default_modifier(PCall::update_association_selectors());
		tester.test_default_modifier(PCall::clear_association_selectors());
		tester.test_default_modifier(PCall::remove_keys_selectors());
		tester.test_default_modifier(PCall::set_keys_selectors());
	});
}

#[test]
fn add_association_works() {
	ExtBuilder::default()
		.with_balances(vec![(Alice, 1000)])
		.build()
		.execute_with(|| {
			let expected_nimbus_id: NimbusId =
				sp_core::sr25519::Public::unchecked_from([1u8; 32]).into();

			let input = PCall::add_association {
				nimbus_id: H256::from([1u8; 32]),
			}
			.into();

			// Make sure the call goes through successfully
			assert_ok!(RuntimeCall::Evm(evm_call(input)).dispatch(RuntimeOrigin::root()));

			// Assert that the events are as expected
			assert_eq!(
				events(),
				vec![
					BalancesEvent::Reserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRegistered {
						nimbus_id: expected_nimbus_id.clone(),
						account_id: Alice,
						keys: expected_nimbus_id.into(),
					}
					.into(),
					EvmEvent::Executed {
						address: Precompile.into()
					}
					.into(),
				]
			);
		})
}

#[test]
fn update_association_works() {
	ExtBuilder::default()
		.with_balances(vec![(Alice, 1000)])
		.build()
		.execute_with(|| {
			let first_nimbus_id: NimbusId =
				sp_core::sr25519::Public::unchecked_from([1u8; 32]).into();
			let second_nimbus_id: NimbusId =
				sp_core::sr25519::Public::unchecked_from([2u8; 32]).into();

			assert_ok!(
				RuntimeCall::AuthorMapping(AuthorMappingCall::add_association {
					nimbus_id: first_nimbus_id.clone(),
				})
				.dispatch(RuntimeOrigin::signed(Alice))
			);

			let input = PCall::update_association {
				old_nimbus_id: H256::from([1u8; 32]),
				new_nimbus_id: H256::from([2u8; 32]),
			}
			.into();

			// Make sure the call goes through successfully
			assert_ok!(RuntimeCall::Evm(evm_call(input)).dispatch(RuntimeOrigin::root()));

			// Assert that the events are as expected
			assert_eq!(
				events(),
				vec![
					BalancesEvent::Reserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRegistered {
						nimbus_id: first_nimbus_id.clone(),
						account_id: Alice,
						keys: first_nimbus_id.into(),
					}
					.into(),
					AuthorMappingEvent::KeysRotated {
						new_nimbus_id: second_nimbus_id.clone(),
						account_id: Alice,
						new_keys: second_nimbus_id.into(),
					}
					.into(),
					EvmEvent::Executed {
						address: Precompile.into()
					}
					.into(),
				]
			);
		})
}

#[test]
fn clear_association_works() {
	ExtBuilder::default()
		.with_balances(vec![(Alice, 1000)])
		.build()
		.execute_with(|| {
			let nimbus_id: NimbusId = sp_core::sr25519::Public::unchecked_from([1u8; 32]).into();

			assert_ok!(
				RuntimeCall::AuthorMapping(AuthorMappingCall::add_association {
					nimbus_id: nimbus_id.clone(),
				})
				.dispatch(RuntimeOrigin::signed(Alice))
			);

			let input = PCall::clear_association {
				nimbus_id: H256::from([1u8; 32]),
			}
			.into();

			// Make sure the call goes through successfully
			assert_ok!(RuntimeCall::Evm(evm_call(input)).dispatch(RuntimeOrigin::root()));

			// Assert that the events are as expected
			assert_eq!(
				events(),
				vec![
					BalancesEvent::Reserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRegistered {
						nimbus_id: nimbus_id.clone(),
						account_id: Alice,
						keys: nimbus_id.clone().into(),
					}
					.into(),
					BalancesEvent::Unreserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRemoved {
						nimbus_id: nimbus_id.clone(),
						account_id: Alice,
						keys: nimbus_id.into(),
					}
					.into(),
					EvmEvent::Executed {
						address: Precompile.into()
					}
					.into(),
				]
			);
		})
}

#[test]
fn remove_keys_works() {
	ExtBuilder::default()
		.with_balances(vec![(Alice, 1000)])
		.build()
		.execute_with(|| {
			let nimbus_id: NimbusId = sp_core::sr25519::Public::unchecked_from([1u8; 32]).into();

			assert_ok!(
				RuntimeCall::AuthorMapping(AuthorMappingCall::add_association {
					nimbus_id: nimbus_id.clone(),
				})
				.dispatch(RuntimeOrigin::signed(Alice))
			);

			let input = PCall::remove_keys {}.into();

			// Make sure the call goes through successfully
			assert_ok!(RuntimeCall::Evm(evm_call(input)).dispatch(RuntimeOrigin::root()));

			// Assert that the events are as expected
			assert_eq!(
				events(),
				vec![
					BalancesEvent::Reserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRegistered {
						nimbus_id: nimbus_id.clone(),
						account_id: Alice,
						keys: nimbus_id.clone().into(),
					}
					.into(),
					BalancesEvent::Unreserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRemoved {
						nimbus_id: nimbus_id.clone(),
						account_id: Alice,
						keys: nimbus_id.into(),
					}
					.into(),
					EvmEvent::Executed {
						address: Precompile.into()
					}
					.into(),
				]
			);
		})
}

#[test]
fn set_keys_works() {
	ExtBuilder::default()
		.with_balances(vec![(Alice, 1000)])
		.build()
		.execute_with(|| {
			let first_nimbus_id: NimbusId =
				sp_core::sr25519::Public::unchecked_from([1u8; 32]).into();
			let second_nimbus_id: NimbusId =
				sp_core::sr25519::Public::unchecked_from([2u8; 32]).into();
			let first_vrf_key: NimbusId =
				sp_core::sr25519::Public::unchecked_from([3u8; 32]).into();
			let second_vrf_key: NimbusId =
				sp_core::sr25519::Public::unchecked_from([4u8; 32]).into();

			assert_ok!(RuntimeCall::AuthorMapping(AuthorMappingCall::set_keys {
				keys: keys_wrapper::<Runtime>(first_nimbus_id.clone(), first_vrf_key.clone()),
			})
			.dispatch(RuntimeOrigin::signed(Alice)));

			// Create input with keys inside a Solidity bytes.
			let input = PCall::set_keys {
				keys: EvmDataWriter::new()
					.write(sp_core::H256::from([2u8; 32]))
					.write(sp_core::H256::from([4u8; 32]))
					.build()
					.into(),
			}
			.into();

			// Make sure the call goes through successfully
			assert_ok!(RuntimeCall::Evm(evm_call(input)).dispatch(RuntimeOrigin::root()));

			// Assert that the events are as expected
			assert_eq!(
				events(),
				vec![
					BalancesEvent::Reserved {
						who: Alice,
						amount: 10
					}
					.into(),
					AuthorMappingEvent::KeysRegistered {
						nimbus_id: first_nimbus_id.clone(),
						account_id: Alice,
						keys: first_vrf_key.into(),
					}
					.into(),
					AuthorMappingEvent::KeysRotated {
						new_nimbus_id: second_nimbus_id.clone(),
						account_id: Alice,
						new_keys: second_vrf_key.into(),
					}
					.into(),
					EvmEvent::Executed {
						address: Precompile.into()
					}
					.into(),
				]
			);
		})
}

#[test]
fn test_solidity_interface_has_all_function_selectors_documented_and_implemented() {
	for file in ["AuthorMappingInterface.sol"] {
		for solidity_fn in solidity::get_selectors(file) {
			assert_eq!(
				solidity_fn.compute_selector_hex(),
				solidity_fn.docs_selector,
				"documented selector for '{}' did not match for file '{}'",
				solidity_fn.signature(),
				file,
			);

			let selector = solidity_fn.compute_selector();
			if !PCall::supports_selector(selector) {
				panic!(
					"failed decoding selector 0x{:x} => '{}' as Action for file '{}'",
					selector,
					solidity_fn.signature(),
					file,
				)
			}
		}
	}
}

#[test]
fn test_deprecated_solidity_selectors_are_supported() {
	for deprecated_function in [
		"add_association(bytes32)",
		"update_association(bytes32,bytes32)",
		"clear_association(bytes32)",
		"remove_keys()",
		"set_keys(bytes)",
	] {
		let selector = solidity::compute_selector(deprecated_function);
		if !PCall::supports_selector(selector) {
			panic!(
				"failed decoding selector 0x{:x} => '{}' as Action",
				selector, deprecated_function,
			)
		}
	}
}
