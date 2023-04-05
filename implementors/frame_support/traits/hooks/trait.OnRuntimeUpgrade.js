(function() {var implementors = {
"moonbase_runtime":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"moonbase_runtime/governance/custom_origins/trait.Config.html\" title=\"trait moonbase_runtime::governance::custom_origins::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"moonbase_runtime/governance/custom_origins/struct.Pallet.html\" title=\"struct moonbase_runtime::governance::custom_origins::Pallet\">Pallet</a>&lt;T&gt;"],["impl OnRuntimeUpgrade for <a class=\"struct\" href=\"moonbase_runtime/struct.MaintenanceHooks.html\" title=\"struct moonbase_runtime::MaintenanceHooks\">MaintenanceHooks</a>"]],
"moonbeam_runtime":[["impl OnRuntimeUpgrade for <a class=\"struct\" href=\"moonbeam_runtime/struct.MaintenanceHooks.html\" title=\"struct moonbeam_runtime::MaintenanceHooks\">MaintenanceHooks</a>"]],
"moonriver_runtime":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"moonriver_runtime/governance/custom_origins/trait.Config.html\" title=\"trait moonriver_runtime::governance::custom_origins::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"moonriver_runtime/governance/custom_origins/struct.Pallet.html\" title=\"struct moonriver_runtime::governance::custom_origins::Pallet\">Pallet</a>&lt;T&gt;"],["impl OnRuntimeUpgrade for <a class=\"struct\" href=\"moonriver_runtime/struct.MaintenanceHooks.html\" title=\"struct moonriver_runtime::MaintenanceHooks\">MaintenanceHooks</a>"]],
"pallet_asset_manager":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.UnitsWithAssetType.html\" title=\"struct pallet_asset_manager::migrations::UnitsWithAssetType\">UnitsWithAssetType</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.PopulateAssetTypeIdStorage.html\" title=\"struct pallet_asset_manager::migrations::PopulateAssetTypeIdStorage\">PopulateAssetTypeIdStorage</a>&lt;T&gt;"],["impl&lt;T, StatemineParaIdInfo, StatemineAssetsInstanceInfo&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.ChangeStateminePrefixes.html\" title=\"struct pallet_asset_manager::migrations::ChangeStateminePrefixes\">ChangeStateminePrefixes</a>&lt;T, StatemineParaIdInfo, StatemineAssetsInstanceInfo&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineParaIdInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.2/std/primitive.u32.html\">u32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineAssetsInstanceInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.2/std/primitive.u8.html\">u8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_asset_manager/pallet/trait.Config.html#associatedtype.ForeignAssetType\" title=\"type pallet_asset_manager::pallet::Config::ForeignAssetType\">ForeignAssetType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.68.2/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MultiLocation&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt;,</span>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.PopulateSupportedFeePaymentAssets.html\" title=\"struct pallet_asset_manager::migrations::PopulateSupportedFeePaymentAssets\">PopulateSupportedFeePaymentAssets</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.XcmV2ToV3AssetManager.html\" title=\"struct pallet_asset_manager::migrations::XcmV2ToV3AssetManager\">XcmV2ToV3AssetManager</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"pallet_asset_manager/pallet/trait.Config.html#associatedtype.ForeignAssetType\" title=\"type pallet_asset_manager::pallet::Config::ForeignAssetType\">ForeignAssetType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt;,</span>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/pallet/struct.Pallet.html\" title=\"struct pallet_asset_manager::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_author_mapping":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_author_mapping/migrations/struct.AddAccountIdToNimbusLookup.html\" title=\"struct pallet_author_mapping::migrations::AddAccountIdToNimbusLookup\">AddAccountIdToNimbusLookup</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_author_mapping/migrations/struct.AddKeysToRegistrationInfo.html\" title=\"struct pallet_author_mapping::migrations::AddKeysToRegistrationInfo\">AddKeysToRegistrationInfo</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_author_mapping/pallet/struct.Pallet.html\" title=\"struct pallet_author_mapping::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_erc20_xcm_bridge":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_erc20_xcm_bridge/pallet/trait.Config.html\" title=\"trait pallet_erc20_xcm_bridge::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_erc20_xcm_bridge/pallet/struct.Pallet.html\" title=\"struct pallet_erc20_xcm_bridge::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_ethereum_chain_id":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_ethereum_chain_id/pallet/trait.Config.html\" title=\"trait pallet_ethereum_chain_id::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_ethereum_chain_id/pallet/struct.Pallet.html\" title=\"struct pallet_ethereum_chain_id::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_ethereum_xcm":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_ethereum_xcm/pallet/trait.Config.html\" title=\"trait pallet_ethereum_xcm::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_ethereum_xcm/pallet/struct.Pallet.html\" title=\"struct pallet_ethereum_xcm::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_maintenance_mode":[["impl&lt;T&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_maintenance_mode/struct.ExecutiveHooks.html\" title=\"struct pallet_maintenance_mode::ExecutiveHooks\">ExecutiveHooks</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_maintenance_mode/pallet/trait.Config.html\" title=\"trait pallet_maintenance_mode::pallet::Config\">Config</a>,</span>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_maintenance_mode/pallet/trait.Config.html\" title=\"trait pallet_maintenance_mode::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_maintenance_mode/pallet/struct.Pallet.html\" title=\"struct pallet_maintenance_mode::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_migrations":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_migrations/pallet/trait.Config.html\" title=\"trait pallet_migrations::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_migrations/pallet/struct.Pallet.html\" title=\"struct pallet_migrations::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_moonbeam_orbiters":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_moonbeam_orbiters/pallet/trait.Config.html\" title=\"trait pallet_moonbeam_orbiters::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_moonbeam_orbiters/pallet/struct.Pallet.html\" title=\"struct pallet_moonbeam_orbiters::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_parachain_staking":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_parachain_staking/pallet/trait.Config.html\" title=\"trait pallet_parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_parachain_staking/migrations/struct.MigrateAtStakeAutoCompound.html\" title=\"struct pallet_parachain_staking::migrations::MigrateAtStakeAutoCompound\">MigrateAtStakeAutoCompound</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_parachain_staking/pallet/trait.Config.html\" title=\"trait pallet_parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_parachain_staking/pallet/struct.Pallet.html\" title=\"struct pallet_parachain_staking::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_proxy_genesis_companion":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_proxy_genesis_companion/pallet/trait.Config.html\" title=\"trait pallet_proxy_genesis_companion::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_proxy_genesis_companion/pallet/struct.Pallet.html\" title=\"struct pallet_proxy_genesis_companion::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_randomness":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_randomness/pallet/trait.Config.html\" title=\"trait pallet_randomness::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_randomness/pallet/struct.Pallet.html\" title=\"struct pallet_randomness::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"pallet_xcm_transactor":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_xcm_transactor/pallet/trait.Config.html\" title=\"trait pallet_xcm_transactor::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_xcm_transactor/migrations/struct.XcmV2ToV3XcmTransactor.html\" title=\"struct pallet_xcm_transactor::migrations::XcmV2ToV3XcmTransactor\">XcmV2ToV3XcmTransactor</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_xcm_transactor/pallet/trait.Config.html\" title=\"trait pallet_xcm_transactor::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_xcm_transactor/pallet/struct.Pallet.html\" title=\"struct pallet_xcm_transactor::pallet::Pallet\">Pallet</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()