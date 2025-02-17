---
title: Read storage
---

Many important variables are available through the storage API. This example shows how to call a few of those APIs.

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');
const { typesBundleForPolkadot } = require('@crustio/type-definitions');

// Our address for Alice on the dev chain
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create({
            provider: new WsProvider('ws://127.0.0.1:9944'),
            typesBundle: typesBundleForPolkadot
        });

  // Make our basic chain state/storage queries, all in one go
  const [{ nonce: accountNonce }, now, validators] = await Promise.all([
    api.query.system.account(ALICE),
    api.query.timestamp.now(),
    api.query.session.validators()
  ]);

  console.log(`accountNonce(${ALICE}) ${accountNonce}`);
  console.log(`last block timestamp ${now.toNumber()}`);

  if (validators && validators.length > 0) {
    // Retrieve the balances for all validators
    const validatorBalances = await Promise.all(
      validators.map((authorityId) =>
        api.query.system.account(authorityId)
      )
    );

    // Print out the authorityIds and balances of all validators
    console.log('validators', validators.map((authorityId, index) => ({
      address: authorityId.toString(),
      balance: validatorBalances[index].data.free.toHuman(),
      nonce: validatorBalances[index].nonce.toHuman()
    })));
  }
}

main().catch(console.error).finally(() => process.exit());
```
