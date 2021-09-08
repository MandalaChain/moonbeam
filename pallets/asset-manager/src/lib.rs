// Copyright 2019-2021 PureStake Inc.
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

use frame_support::pallet;
pub use pallet::*;
#[cfg(test)]
pub mod mock;
#[cfg(test)]
pub mod tests;

#[pallet]
pub mod pallet {

	use frame_support::{pallet_prelude::*, PalletId};
	use frame_system::{ensure_root, pallet_prelude::*};
	use parity_scale_codec::HasCompact;
	use sp_runtime::traits::AtLeast32BitUnsigned;

	#[pallet::pallet]
	pub struct Pallet<T>(PhantomData<T>);

	// The registrar trait. We need to comply with this
	pub trait AssetRegistrar<T: Config> {
		// How to create an asset
		fn create_asset(
			asset: T::AssetId,
			min_balance: T::Balance,
			metadata: T::AssetMetaData,
		) -> DispatchResult;
	}

	// We implement this trait to be able to get the AssetType and units per second registered
	impl<T: Config> xcm_primitives::AssetTypeGetter<T::AssetId, T::AssetType> for Pallet<T> {
		fn get_asset_type(asset_id: T::AssetId) -> Option<T::AssetType> {
			AssetIdType::<T>::get(asset_id)
		}
	}

	impl<T: Config> xcm_primitives::UnitsPerSecondGetter<T::AssetId> for Pallet<T> {
		fn get_units_per_second(asset_id: T::AssetId) -> Option<u128> {
			AssetIdUnitsPerSecond::<T>::get(asset_id)
		}
	}

	#[pallet::config]
	pub trait Config: frame_system::Config {
		type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

		/// The Asset Id. This will be used to register the asset in Assets
		type AssetId: Member + Parameter + Default + Copy + HasCompact + MaxEncodedLen;

		/// The Asset Metadata we want to store
		type AssetMetaData: Member + Parameter;

		/// The Asset Kind.
		type AssetType: Parameter + Member + Ord + PartialOrd + Into<Self::AssetId> + Default;

		/// The units in which we record balances.
		type Balance: Member + Parameter + AtLeast32BitUnsigned + Default + Copy + MaxEncodedLen;

		/// The trait we use to register Assets
		type AssetRegistrar: AssetRegistrar<Self>;

		/// The AssetManagers's pallet id
		#[pallet::constant]
		type PalletId: Get<PalletId>;
	}

	/// An error that can occur while executing the mapping pallet's logic.
	#[pallet::error]
	pub enum Error<T> {
		ErrorCreatingAsset,
		AssetAlreadyExists,
		AssetDoesNotExist,
	}

	#[pallet::event]
	#[pallet::generate_deposit(pub(crate) fn deposit_event)]
	pub enum Event<T: Config> {
		AssetRegistered(T::AssetId, T::AssetType, T::AssetMetaData),
		UnitsPerSecondChanged(T::AssetId, u128),
	}

	// Stores the asset TYPE
	#[pallet::storage]
	#[pallet::getter(fn asset_id_type)]
	pub type AssetIdType<T: Config> = StorageMap<_, Blake2_128Concat, T::AssetId, T::AssetType>;

	// Stores the units per second. Not all assets might contain units per second, hence the
	// different storage
	#[pallet::storage]
	#[pallet::getter(fn asset_id_units_per_second)]
	pub type AssetIdUnitsPerSecond<T: Config> = StorageMap<_, Blake2_128Concat, T::AssetId, u128>;

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Register new asset with the asset manager
		#[pallet::weight(0)]
		pub fn asset_register(
			origin: OriginFor<T>,
			asset: T::AssetType,
			metadata: T::AssetMetaData,
			min_amount: T::Balance,
		) -> DispatchResult {
			ensure_root(origin)?;
			let asset_id: T::AssetId = asset.clone().into();
			ensure!(
				AssetIdType::<T>::get(&asset_id).is_none(),
				Error::<T>::AssetAlreadyExists
			);
			T::AssetRegistrar::create_asset(asset_id, min_amount, metadata.clone())
				.map_err(|_| Error::<T>::ErrorCreatingAsset)?;

			AssetIdType::<T>::insert(&asset_id, &asset);

			Self::deposit_event(Event::AssetRegistered(asset_id, asset, metadata));
			Ok(())
		}

		/// Change the units per second for a given AssetId
		#[pallet::weight(0)]
		pub fn asset_set_units_per_second(
			origin: OriginFor<T>,
			asset_id: T::AssetId,
			units_per_second: u128,
		) -> DispatchResult {
			ensure_root(origin)?;

			ensure!(
				AssetIdType::<T>::get(&asset_id).is_some(),
				Error::<T>::AssetDoesNotExist
			);

			AssetIdUnitsPerSecond::<T>::insert(&asset_id, &units_per_second);

			Self::deposit_event(Event::UnitsPerSecondChanged(asset_id, units_per_second));
			Ok(())
		}
	}
}
