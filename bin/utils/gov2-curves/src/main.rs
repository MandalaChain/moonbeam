// Copyright 2022 Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot. If not, see <http://www.gnu.org/licenses/>.

// 0. collect curve info using moonbase runtime config
// 1. 0 -> print it out
// 2. 0 -> write to csv?
// 3. 0 -> display?
use moonbase_runtime::{governance::TracksInfo as MoonbaseTracks, Balance, BlockNumber, DAYS};
use pallet_referenda::TracksInfo;

fn print_moonbase_track_info() {
	for (track_id, track) in <MoonbaseTracks as TracksInfo<Balance, BlockNumber>>::tracks() {
		println!("{} TRACK, ID # {}", track.name, track_id);
		let decision_period_days = track.decision_period / DAYS;
		println!(
			"{} DECISION PERIOD: {} days",
			track.name, decision_period_days
		);
		println!("{} MIN APPROVAL:", track.name);
		track.min_approval.info(decision_period_days, track.name);
		println!("{} MIN SUPPORT:", track.name);
		track.min_support.info(decision_period_days, track.name);
	}
}

fn main() {
	print_moonbase_track_info();
}