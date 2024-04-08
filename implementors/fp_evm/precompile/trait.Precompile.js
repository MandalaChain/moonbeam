(function() {var implementors = {
"pallet_evm_precompile_author_mapping":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_author_mapping/struct.AuthorMappingPrecompile.html\" title=\"struct pallet_evm_precompile_author_mapping::AuthorMappingPrecompile\">AuthorMappingPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    Runtime::Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;H256&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,</span>"]],
"pallet_evm_precompile_balances_erc20":[["impl&lt;Runtime, Metadata, Instance&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_balances_erc20/struct.Erc20BalancesPrecompile.html\" title=\"struct pallet_evm_precompile_balances_erc20::Erc20BalancesPrecompile\">Erc20BalancesPrecompile</a>&lt;Runtime, Metadata, Instance&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config&lt;Instance&gt; + Config,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime, Instance&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    <a class=\"type\" href=\"pallet_evm_precompile_balances_erc20/type.BalanceOf.html\" title=\"type pallet_evm_precompile_balances_erc20::BalanceOf\">BalanceOf</a>&lt;Runtime, Instance&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,\n    Metadata: <a class=\"trait\" href=\"pallet_evm_precompile_balances_erc20/trait.Erc20Metadata.html\" title=\"trait pallet_evm_precompile_balances_erc20::Erc20Metadata\">Erc20Metadata</a>,\n    Instance: <a class=\"trait\" href=\"pallet_evm_precompile_balances_erc20/trait.InstanceToPrefix.html\" title=\"trait pallet_evm_precompile_balances_erc20::InstanceToPrefix\">InstanceToPrefix</a> + 'static,</span>"]],
"pallet_evm_precompile_batch":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_batch/struct.BatchPrecompile.html\" title=\"struct pallet_evm_precompile_batch::BatchPrecompile\">BatchPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config,</span>"]],
"pallet_evm_precompile_call_permit":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_call_permit/struct.CallPermitPrecompile.html\" title=\"struct pallet_evm_precompile_call_permit::CallPermitPrecompile\">CallPermitPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config,</span>"]],
"pallet_evm_precompile_collective":[["impl&lt;Runtime, Instance&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_collective/struct.CollectivePrecompile.html\" title=\"struct pallet_evm_precompile_collective::CollectivePrecompile\">CollectivePrecompile</a>&lt;Runtime, Instance&gt;<span class=\"where fmt-newline\">where\n    Instance: 'static,\n    Runtime: Config&lt;Instance&gt; + Config,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + Decode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime, Instance&gt;&gt;,\n    &lt;Runtime as Config&lt;Instance&gt;&gt;::Proposal: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Runtime::RuntimeCall&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    H256: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Runtime as Config&gt;::Hash&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Runtime as Config&gt;::Hash&gt;,</span>"]],
"pallet_evm_precompile_conviction_voting":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_conviction_voting/struct.ConvictionVotingPrecompile.html\" title=\"struct pallet_evm_precompile_conviction_voting::ConvictionVotingPrecompile\">ConvictionVotingPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    &lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    &lt;&lt;Runtime as Config&gt;::Polls as Polling&lt;Tally&lt;&lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance, &lt;Runtime as Config&gt;::MaxTurnout&gt;&gt;&gt;::Index: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>&gt;,\n    &lt;&lt;Runtime as Config&gt;::Polls as Polling&lt;Tally&lt;&lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance, &lt;Runtime as Config&gt;::MaxTurnout&gt;&gt;&gt;::Class: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u16.html\">u16</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u16.html\">u16</a>&gt;,\n    &lt;Runtime as Config&gt;::Polls: Polling&lt;Tally&lt;&lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance, &lt;Runtime as Config&gt;::MaxTurnout&gt;&gt;,</span>"]],
"pallet_evm_precompile_crowdloan_rewards":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_crowdloan_rewards/struct.CrowdloanRewardsPrecompile.html\" title=\"struct pallet_evm_precompile_crowdloan_rewards::CrowdloanRewardsPrecompile\">CrowdloanRewardsPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    <a class=\"type\" href=\"pallet_evm_precompile_crowdloan_rewards/type.BalanceOf.html\" title=\"type pallet_evm_precompile_crowdloan_rewards::BalanceOf\">BalanceOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u128.html\">u128</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,</span>"]],
"pallet_evm_precompile_gmp":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_gmp/struct.GmpPrecompile.html\" title=\"struct pallet_evm_precompile_gmp::GmpPrecompile\">GmpPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + Config + AccountIdToCurrencyId&lt;Runtime::AccountId, <a class=\"type\" href=\"pallet_evm_precompile_gmp/type.CurrencyIdOf.html\" title=\"type pallet_evm_precompile_gmp::CurrencyIdOf\">CurrencyIdOf</a>&lt;Runtime&gt;&gt;,\n    <a class=\"type\" href=\"pallet_evm_precompile_gmp/type.SystemCallOf.html\" title=\"type pallet_evm_precompile_gmp::SystemCallOf\">SystemCallOf</a>&lt;Runtime&gt;: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + Decode + GetDispatchInfo,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::RuntimeCall: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    <a class=\"type\" href=\"pallet_evm_precompile_gmp/type.XBalanceOf.html\" title=\"type pallet_evm_precompile_gmp::XBalanceOf\">XBalanceOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"precompile_utils/solidity/codec/trait.Codec.html\" title=\"trait precompile_utils::solidity::codec::Codec\">Codec</a>,</span>"]],
"pallet_evm_precompile_identity":[["impl&lt;Runtime, MaxAdditionalFields&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_identity/struct.IdentityPrecompile.html\" title=\"struct pallet_evm_precompile_identity::IdentityPrecompile\">IdentityPrecompile</a>&lt;Runtime, MaxAdditionalFields&gt;<span class=\"where fmt-newline\">where\n    MaxAdditionalFields: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>&gt; + 'static,\n    Runtime: Config + Config&lt;IdentityInformation = IdentityInfo&lt;MaxAdditionalFields&gt;&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    Runtime::Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;H256&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"precompile_utils/solidity/codec/trait.Codec.html\" title=\"trait precompile_utils::solidity::codec::Codec\">Codec</a>,</span>"]],
"pallet_evm_precompile_parachain_staking":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_parachain_staking/struct.ParachainStakingPrecompile.html\" title=\"struct pallet_evm_precompile_parachain_staking::ParachainStakingPrecompile\">ParachainStakingPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: <a class=\"trait\" href=\"pallet_parachain_staking/pallet/trait.Config.html\" title=\"trait pallet_parachain_staking::pallet::Config\">Config</a> + Config,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_parachain_staking/pallet/enum.Call.html\" title=\"enum pallet_parachain_staking::pallet::Call\">Call</a>&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;&lt;Runtime as <a class=\"trait\" href=\"pallet_parachain_staking/pallet/trait.Config.html\" title=\"trait pallet_parachain_staking::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_parachain_staking/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_parachain_staking::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"precompile_utils/solidity/codec/trait.Codec.html\" title=\"trait precompile_utils::solidity::codec::Codec\">Codec</a>,</span>"]],
"pallet_evm_precompile_preimage":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_preimage/struct.PreimagePrecompile.html\" title=\"struct pallet_evm_precompile_preimage::PreimagePrecompile\">PreimagePrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    &lt;Runtime as Config&gt;::Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;H256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H256&gt;,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,</span>"]],
"pallet_evm_precompile_proxy":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_proxy/struct.ProxyPrecompile.html\" title=\"struct pallet_evm_precompile_proxy::ProxyPrecompile\">ProxyPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + Config,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::ProxyType: Decode + <a class=\"trait\" href=\"pallet_evm_precompile_proxy/trait.EvmProxyCallFilter.html\" title=\"trait pallet_evm_precompile_proxy::EvmProxyCallFilter\">EvmProxyCallFilter</a>,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.unit.html\">()</a>&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,</span>"]],
"pallet_evm_precompile_randomness":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_randomness/struct.RandomnessPrecompile.html\" title=\"struct pallet_evm_precompile_randomness::RandomnessPrecompile\">RandomnessPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    BlockNumberFor&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>&gt;,\n    BalanceOf&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,</span>"]],
"pallet_evm_precompile_referenda":[["impl&lt;Runtime, GovOrigin&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_referenda/struct.ReferendaPrecompile.html\" title=\"struct pallet_evm_precompile_referenda::ReferendaPrecompile\">ReferendaPrecompile</a>&lt;Runtime, GovOrigin&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    &lt;&lt;Runtime as Config&gt;::RuntimeOrigin as OriginTrait&gt;::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;GovOrigin&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H256&gt;,\n    BlockNumberFor&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,\n    &lt;&lt;Runtime as Config&gt;::Tracks as TracksInfo&lt;&lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance, BlockNumberFor&lt;Runtime&gt;&gt;&gt;::Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u16.html\">u16</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u16.html\">u16</a>&gt;,\n    &lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,\n    Runtime::Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,\n    GovOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a>,\n    H256: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Runtime as Config&gt;::Hash&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Runtime as Config&gt;::Hash&gt;,</span>"]],
"pallet_evm_precompile_registry":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_registry/struct.PrecompileRegistry.html\" title=\"struct pallet_evm_precompile_registry::PrecompileRegistry\">PrecompileRegistry</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config,\n    Runtime::PrecompilesType: <a class=\"trait\" href=\"precompile_utils/precompile_set/trait.IsActivePrecompile.html\" title=\"trait precompile_utils::precompile_set::IsActivePrecompile\">IsActivePrecompile</a>,</span>"]],
"pallet_evm_precompile_relay_encoder":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_relay_encoder/struct.RelayEncoderPrecompile.html\" title=\"struct pallet_evm_precompile_relay_encoder::RelayEncoderPrecompile\">RelayEncoderPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,</span>"]],
"pallet_evm_precompile_relay_verifier":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_relay_verifier/struct.RelayDataVerifierPrecompile.html\" title=\"struct pallet_evm_precompile_relay_verifier::RelayDataVerifierPrecompile\">RelayDataVerifierPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + <a class=\"trait\" href=\"pallet_precompile_benchmarks/pallet/trait.Config.html\" title=\"trait pallet_precompile_benchmarks::pallet::Config\">Config</a>,</span>"]],
"pallet_evm_precompile_xcm_transactor":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xcm_transactor/v3/struct.XcmTransactorPrecompileV3.html\" title=\"struct pallet_evm_precompile_xcm_transactor::v3::XcmTransactorPrecompileV3\">XcmTransactorPrecompileV3</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + AccountIdToCurrencyId&lt;Runtime::AccountId, &lt;Runtime as Config&gt;::CurrencyId&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::Transactor: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,</span>"],["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xcm_transactor/v2/struct.XcmTransactorPrecompileV2.html\" title=\"struct pallet_evm_precompile_xcm_transactor::v2::XcmTransactorPrecompileV2\">XcmTransactorPrecompileV2</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + AccountIdToCurrencyId&lt;Runtime::AccountId, &lt;Runtime as Config&gt;::CurrencyId&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::Transactor: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,</span>"],["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xcm_transactor/v1/struct.XcmTransactorPrecompileV1.html\" title=\"struct pallet_evm_precompile_xcm_transactor::v1::XcmTransactorPrecompileV1\">XcmTransactorPrecompileV1</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + AccountIdToCurrencyId&lt;Runtime::AccountId, &lt;Runtime as Config&gt;::CurrencyId&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::Transactor: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>&gt;,\n    Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,</span>"]],
"pallet_evm_precompile_xcm_utils":[["impl&lt;Runtime, XcmConfig&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xcm_utils/struct.XcmUtilsPrecompile.html\" title=\"struct pallet_evm_precompile_xcm_utils::XcmUtilsPrecompile\">XcmUtilsPrecompile</a>&lt;Runtime, XcmConfig&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    <a class=\"type\" href=\"pallet_evm_precompile_xcm_utils/type.XcmOriginOf.html\" title=\"type pallet_evm_precompile_xcm_utils::XcmOriginOf\">XcmOriginOf</a>&lt;XcmConfig&gt;: OriginTrait,\n    <a class=\"type\" href=\"pallet_evm_precompile_xcm_utils/type.XcmAccountIdOf.html\" title=\"type pallet_evm_precompile_xcm_utils::XcmAccountIdOf\">XcmAccountIdOf</a>&lt;XcmConfig&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    XcmConfig: Config,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + Decode + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,</span>"]],
"pallet_evm_precompile_xtokens":[["impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xtokens/struct.XtokensPrecompile.html\" title=\"struct pallet_evm_precompile_xtokens::XtokensPrecompile\">XtokensPrecompile</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + AccountIdToCurrencyId&lt;Runtime::AccountId, <a class=\"type\" href=\"pallet_evm_precompile_xtokens/type.CurrencyIdOf.html\" title=\"type pallet_evm_precompile_xtokens::CurrencyIdOf\">CurrencyIdOf</a>&lt;Runtime&gt;&gt;,\n    Runtime::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,\n    &lt;Runtime::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.74.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    <a class=\"type\" href=\"pallet_evm_precompile_xtokens/type.XBalanceOf.html\" title=\"type pallet_evm_precompile_xtokens::XBalanceOf\">XBalanceOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"precompile_utils/solidity/codec/trait.Codec.html\" title=\"trait precompile_utils::solidity::codec::Codec\">Codec</a>,</span>"]],
"precompile_utils":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()