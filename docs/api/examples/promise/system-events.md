---
title: Traverse events
---

Query the system events and extract information from them. This example runs until exited via Ctrl-C

```javascript
// Import the API
const { ApiPromise } = require('@polkadot/api');
const { typesBundleForPolkadot } = require('@crustio/type-definitions');

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create({
            provider: new WsProvider('ws://127.0.0.1:9944'),
            typesBundle: typesBundleForPolkadot
        });

  // Subscribe to system events via storage
  api.query.system.events((events) => {
    console.log(`\nReceived ${events.length} events:`);

    // Loop through the Vec<EventRecord>
    events.forEach((record) => {
      // Extract the phase, event and the event types
      const { event, phase } = record;
      const types = event.typeDef;

      // Show what we are busy with
      console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
      console.log(`\t\t${event.meta.documentation.toString()}`);

      // Loop through each of the parameters, displaying the type and data
      event.data.forEach((data, index) => {
        console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
      });
    });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
```
