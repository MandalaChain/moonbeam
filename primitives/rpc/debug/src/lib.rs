// Copyright 2019-2020 PureStake Inc.
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

#![cfg_attr(not(feature = "std"), no_std)]

use codec::{Decode, Encode};
use ethereum::Transaction;
use ethereum_types::{H256, U256};
use sp_std::{collections::btree_map::BTreeMap, vec::Vec};

#[cfg(feature = "std")]
use serde::{ser::SerializeSeq, Serialize, Serializer};

#[derive(Eq, PartialEq, Debug, Encode, Decode)]
#[cfg_attr(feature = "std", derive(Serialize))]
#[cfg_attr(feature = "std", serde(rename_all = "camelCase"))]
pub struct TraceExecutorResponse {
	pub gas: U256,
	pub return_value: Vec<u8>,
	pub step_logs: Vec<StepLog>,
}

#[derive(Eq, PartialEq, Debug, Encode, Decode)]
#[cfg_attr(feature = "std", derive(Serialize))]
#[cfg_attr(feature = "std", serde(rename_all = "camelCase"))]
pub struct StepLog {
	#[cfg_attr(feature = "std", serde(serialize_with = "u256_serialize"))]
	pub depth: U256,

	//error: TODO

	#[cfg_attr(feature = "std", serde(serialize_with = "u256_serialize"))]
	pub gas: U256,

	#[cfg_attr(feature = "std", serde(serialize_with = "u256_serialize"))]
	pub gas_cost: U256,

	#[cfg_attr(feature = "std", serde(serialize_with = "seq_h256_serialize"))]
	pub memory: Vec<H256>,

	#[cfg_attr(feature = "std", serde(serialize_with = "opcode_serialize"))]
	pub op: Vec<u8>,

	#[cfg_attr(feature = "std", serde(serialize_with = "u256_serialize"))]
	pub pc: U256,

	#[cfg_attr(feature = "std", serde(serialize_with = "seq_h256_serialize"))]
	pub stack: Vec<H256>,
	
	pub storage: BTreeMap<H256, H256>,
}

#[cfg(feature = "std")]
fn seq_h256_serialize<S>(data: &Vec<H256>, serializer: S) -> Result<S::Ok, S::Error>
where
	S: Serializer,
{
	let mut seq = serializer.serialize_seq(Some(data.len()))?;
	for h in data {
		seq.serialize_element(&format!("{:x}", h))?;
	}
	seq.end()
}

#[cfg(feature = "std")]
fn opcode_serialize<S>(opcode: &Vec<u8>, serializer: S) -> Result<S::Ok, S::Error>
where
	S: Serializer,
{
	// TODO: how to propagate Err here (i.e. `from_utf8` fails), so the rpc requests also
	// returns an error?
	serializer.serialize_str(&format!(
		"{}",
		std::str::from_utf8(opcode).unwrap_or("").to_uppercase()
	))
}

#[cfg(feature = "std")]
fn u256_serialize<S>(data: &U256, serializer: S) -> Result<S::Ok, S::Error>
where
	S: Serializer,
{
	// TODO: how to propagate Err here (i.e. `from_utf8` fails), so the rpc requests also
	// returns an error?
	serializer.serialize_u64(data.low_u64())
}


sp_api::decl_runtime_apis! {
	pub trait DebugRuntimeApi {
		fn trace_transaction(
			extrinsics: Vec<Block::Extrinsic>,
			transaction: &Transaction
		) -> Result<TraceExecutorResponse, sp_runtime::DispatchError>;
	}
}
