---
title: Read storage, at a specific blockhash
---

In addition to querying the latest storage, you can make storage queries at a specific blockhash. Be aware that the node applies a pruning strategy and typically only keeps the last 256 blocks, unless run in archive mode.

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');
const { typesBundleForPolkadot } = require('@crustio/type-definitions');

// Our address for Alice on the dev chain
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create({
            provider: new WsProvider('ws://127.0.0.1:9944'),
            typesBundle: typesBundleForPolkadot
        });

  // Retrieve the last block header, extracting the hash and parentHash
  const { hash, parentHash } = await api.rpc.chain.getHeader();

  console.log(`last header hash ${hash.toHex()}`);

  // Retrieve the balance at the preceding block for Alice. For at queries
  // the format is always `.at(<blockhash>, ...params)`
  const balance = await api.query.system.account.at(parentHash, ALICE);

  console.log(`Alice's balance at ${parentHash.toHex()} was ${balance.data.free}`);

  // Now perform a multi query, returning multiple balances at once
  const balances = await api.query.system.account.multi([ALICE, BOB]);

  console.log(`Current balances for Alice and Bob are ${balances[0].data.free} and ${balances[1].data.free}`);
}

main().catch(console.error).finally(() => process.exit());
```
