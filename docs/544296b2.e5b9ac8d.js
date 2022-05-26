(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),o=(n(0),n(186)),r={title:"TS type generation"},s={unversionedId:"api/examples/promise/typegen",id:"api/examples/promise/typegen",isDocsHomePage:!1,title:"TS type generation",description:"This is a sample TypeScript project with full source & config on GithHub, that uses @polkadot/typegen to generate type definitions that can be used to decorate the @polkadot/api. It uses both types defined for the specific chain as well as the chain metadata to generate TypeScript interfaces. This means that interfaces such as api.query., api.tx. and api.consts.* will be decorated based on chain-specific information, instead of an un-augmented catch-all definition.",source:"@site/docs/api/examples/promise/typegen.md",slug:"/api/examples/promise/typegen",permalink:"/api/examples/promise/typegen",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/examples/promise/typegen.md",version:"current",sidebar:"reference",previous:{title:"Chain upgrade",permalink:"/api/examples/promise/upgrade-chain"},next:{title:"Get chain information",permalink:"/api/examples/promise/chain-info"}},p=[{value:"Packages",id:"packages",children:[]},{value:"Metadata setup",id:"metadata-setup",children:[]},{value:"Types setup",id:"types-setup",children:[]},{value:"Generating",id:"generating",children:[]},{value:"Peering at the output",id:"peering-at-the-output",children:[]},{value:"TypeScript config",id:"typescript-config",children:[]},{value:"Usage",id:"usage",children:[]},{value:"And that is a ...",id:"and-that-is-a-",children:[]}],l={toc:p};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a sample TypeScript project ",Object(o.b)("a",{parentName:"p",href:"https://github.com/polkadot-js/docs/tree/master/docs/api/examples/promise/typegen"},"with full source & config on GithHub"),", that uses ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/typegen")," to generate type definitions that can be used to decorate the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/api"),". It uses both types defined for the specific chain as well as the chain metadata to generate TypeScript interfaces. This means that interfaces such as ",Object(o.b)("inlineCode",{parentName:"p"},"api.query.*"),", ",Object(o.b)("inlineCode",{parentName:"p"},"api.tx.*")," and ",Object(o.b)("inlineCode",{parentName:"p"},"api.consts.*")," will be decorated based on chain-specific information, instead of an un-augmented catch-all definition."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," This is built using the updates in the ",Object(o.b)("inlineCode",{parentName:"p"},"1.4.0")," api track and as such it uses the latest (at the time of writing) ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/api 1.4.0"),". If you want to play on your own, it is also suggested that you use the ",Object(o.b)("inlineCode",{parentName:"p"},"1.4+")," series since some generation types have moved around internally, making it easier to augment."),Object(o.b)("h2",{id:"packages"},"Packages"),Object(o.b)("p",null,"For the packages we need from the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/*")," we have added ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/api")," (we want to do API stuff) and ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/typegen")," (to generate the actual interfaces). So our scripts and dependencies inside ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," contain the following -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build": "yarn generate:defs && yarn generate:meta",\n    "generate:defs": "ts-node --skip-project node_modules/.bin/polkadot-types-from-defs --package sample-polkadotjs-typegen/interfaces --input ./src/interfaces",\n    "generate:meta": "ts-node --skip-project node_modules/.bin/polkadot-types-from-chain --package sample-polkadotjs-typegen/interfaces --endpoint ./edgeware.json --output ./src/interfaces",\n    "lint": "tsc --noEmit --pretty"\n  },\n  "dependencies": {\n    "@polkadot/api": "^2.3.1"\n  },\n  "devDependencies": {\n    "@polkadot/typegen": "^2.3.1",\n    "ts-node": "^8.6.2",\n    "typescript": "^4.0.2"\n  }\n}\n')),Object(o.b)("p",null,"We will delve into the setup and running the scripts and what they do in a short bit, but as of now just notice that we are running the scripts via ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node"),". Since we supply our definitions as ",Object(o.b)("inlineCode",{parentName:"p"},"*.ts")," files, this is important otherwise they will not be parsable. ",Object(o.b)("inlineCode",{parentName:"p"},"build")," will just run both the types and meta generators (in that order, so metadata can use the types) and we have a ",Object(o.b)("inlineCode",{parentName:"p"},"lint")," that can just check that everything is as it is meant to be."),Object(o.b)("h2",{id:"metadata-setup"},"Metadata setup"),Object(o.b)("p",null,"The idea here is to use the actual chain metadata to generate the actual api augmented endpoints. The metadata we are adding here (in addition to the user types), is from the Edgeware Berlin testnet. So this is a real-world example of configuring the API for a specific substrate chain. For the metadata retrieval, we just ran a simple curl command to get it from the node -"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'curl -H "Content-Type: application/json" -d \'{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}\' http://localhost:9933')),Object(o.b)("p",null,"And then add the full JSONPC output as received to the ",Object(o.b)("inlineCode",{parentName:"p"},"edgeware.json")," file as specified by the generation command. A trimmed version would look like -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{"jsonrpc":"2.0","result":"0x6d6574610b6c185379737....","id":29}\n')),Object(o.b)("p",null,"The generator can also use a ",Object(o.b)("inlineCode",{parentName:"p"},"wss://")," as an ",Object(o.b)("inlineCode",{parentName:"p"},"--endpoint")," param as part of the generation, but in most cases you would want a static metadata to work from in development, hence we are actually adding it here."),Object(o.b)("h2",{id:"types-setup"},"Types setup"),Object(o.b)("p",null,"The types are defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/interfaces")," folder. While this repo contains a number of generated files in there as well, you basically only need to manually add the following -"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/interfaces/definitions.ts")," - this just exports all the sub-folder definitions in one go"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/interfaces/<module>/definitions.ts")," - type definitions for a specific module")),Object(o.b)("p",null,"This structure fully matches what is available in the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/type/interfaces")," folder, so the structure is setup based on the convention used in the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/types")," library. The generating scripts will expect something matching this since the same underlying code is actually used inside ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/types")," as well. The top-level ",Object(o.b)("inlineCode",{parentName:"p"},"interfaces/")," folder can be name anything, however the internal content structure need to match what is defined above."),Object(o.b)("p",null,"For the top-level the definition file has the following contents -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"export { default as signaling } from './signaling/definitions';\nexport { default as treasuryRewards } from './treasuryRewards/definitions';\nexport { default as voting } from './voting/definitions';\n")),Object(o.b)("p",null,"As explained above, it really is just a re-export of the definitions, so they are all easily accessible to the outside, i.e. we will use this import inside our own code to use the definitions in API initialization. The generation scripts will load this file to determine which types it needs to import. By the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/types")," convention, match the export names with the folders (preferably your runtime module names), the generation scripts will use these names to find the correct folders to output the generated ",Object(o.b)("inlineCode",{parentName:"p"},"types.ts")," to."),Object(o.b)("p",null,"For each of the folders, ",Object(o.b)("inlineCode",{parentName:"p"},"signaling"),", ",Object(o.b)("inlineCode",{parentName:"p"},"treasuryRewards")," and ",Object(o.b)("inlineCode",{parentName:"p"},"voting")," another ",Object(o.b)("inlineCode",{parentName:"p"},"definitions.ts")," file is contained within. Looking at the one from ",Object(o.b)("inlineCode",{parentName:"p"},"signaling"),", it contains this -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"export default {\n  types: {\n    ProposalRecord: {\n      index: 'u32',\n      author: 'AccountId',\n      stage: 'VoteStage',\n      transition_time: 'u32',\n      title: 'Text',\n      contents: 'Text',\n      vote_id: 'u64'\n    },\n    ProposalContents: 'Vec<u8>',\n    ProposalTitle: 'Vec<u8>'\n  }\n}\n")),Object(o.b)("p",null,"Just the type definitions (the structure of which you should be familiar with), nested inside a ",Object(o.b)("inlineCode",{parentName:"p"},"types: {...}")," container. This allows us future extension points, i.e. there is some work to expose the custom RPC types alongside, so that would become another key on a per-module basis."),Object(o.b)("p",null,"In the above, you will note that the ",Object(o.b)("inlineCode",{parentName:"p"},"ProposalRecord")," references a type for ",Object(o.b)("inlineCode",{parentName:"p"},"voting"),", i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"VoteStage"),". The type generation and resolution will determine where the type comes from, and provide the required imports on generation."),Object(o.b)("p",null,"Looking at the example in this repo, it also has ",Object(o.b)("inlineCode",{parentName:"p"},"augment*"),", ",Object(o.b)("inlineCode",{parentName:"p"},"index.ts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"types.ts")," files in the interfaces folder. These are all generated, and will be re-generated when the generator is run - so all edits to these files will be lost. The only requirement for user-edits are the ",Object(o.b)("inlineCode",{parentName:"p"},"definitions.ts")," files."),Object(o.b)("h2",{id:"generating"},"Generating"),Object(o.b)("p",null,"Now that both the metadata and types setup is completed, we just run the build command via ",Object(o.b)("inlineCode",{parentName:"p"},"yarn build")," and magically (assuming you didn't have the ",Object(o.b)("inlineCode",{parentName:"p"},"augment*")," and other generated files), these files will be added. When running this command, the console should display something like -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"> yarn build\n$ yarn generate:defs && yarn generate:meta\n$ ts-node --skip-project \\\n  node_modules/.bin/polkadot-types-from-defs \\\n    --package sample-polkadotjs-typegen/interfaces \\\n    --input ./src/interfaces\n\nsample-polkadotjs-typegen/src/interfaces/types.ts\n    Generating\n    Extracting interfaces for signaling\n    ...\n    Writing\n\nsample-polkadotjs-typegen/src/interfaces/augment-types.ts\n    Generating\n    Writing\n\n$ ts-node --skip-project \\\n  node_modules/.bin/polkadot-types-from-chain \\\n    --package sample-polkadotjs-typegen/interfaces \\\n    --endpoint ./edgeware.json \\\n    --output ./src/interfaces\n\nGenerating from metadata, 81,267 bytes\n    ...\n\nsample-polkadotjs-typegen/src/interfaces/augment-api.ts\n    Generating\n    Writing\n\n\u2728  Done in 4.04s.\n")),Object(o.b)("p",null,"Now if we check the actual output against the source via ",Object(o.b)("inlineCode",{parentName:"p"},"yarn lint"),", we would see that valid output has been generated -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"> yarn lint\n$ tsc --noEmit --pretty\n\u2728  Done in 2.28s.\n")),Object(o.b)("h2",{id:"peering-at-the-output"},"Peering at the output"),Object(o.b)("p",null,"We are ready to use all these generated types this after some TS config. If you take a look at the generated ",Object(o.b)("inlineCode",{parentName:"p"},"src/signaling/types.ts"),", you would see generated TS interfaces, such as -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Struct } from '@polkadot/types/codec';\nimport { Bytes, Text, u32, u64 } from '@polkadot/types/primitive';\nimport { AccountId } from '@polkadot/types/interfaces/runtime';\nimport { VoteStage } from 'sample-polkadotjs-typegen/interfaces/voting';\n\n/** @name ProposalContents */\nexport interface ProposalContents extends Bytes {}\n\n/** @name ProposalRecord */\nexport interface ProposalRecord extends Struct {\n  readonly index: u32;\n  readonly author: AccountId;\n  readonly stage: VoteStage;\n  readonly transition_time: u32;\n  readonly title: Text;\n  readonly contents: Text;\n  readonly vote_id: u64;\n}\n\n/** @name ProposalTitle */\nexport interface ProposalTitle extends Bytes {}\n")),Object(o.b)("p",null,"As mentioned earlier, here you will notice the ",Object(o.b)("inlineCode",{parentName:"p"},"import { VoteStage }"),", the generator has determined that ",Object(o.b)("inlineCode",{parentName:"p"},"voting")," exports that interface and has added the required imports."),Object(o.b)("h2",{id:"typescript-config"},"TypeScript config"),Object(o.b)("p",null,"Now that we have files generated, it is time to make TypeScript aware of the types and add an explicit override into out ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". After some changes, the paths in the config looks as follow (comments are in the actual config file here) -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "paths": {\n      "sample-polkadotjs-typegen/*": ["src/*"],\n      "@polkadot/api/augment": ["src/interfaces/augment-api.ts"],\n      "@polkadot/types/augment": ["src/interfaces/augment-types.ts"]\n    }\n  }\n}\n')),Object(o.b)("p",null,"Effectively what we do above is tell the TypeScript compiler to not use the built-in API augmentation, but rather to replace it with our version. This means that all types from these are injected not by the substrate-latest-master version, but rather with what we have defined above."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"For simple usage, we have added the ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts")," file that show how the metadata and types actually decorate the API. In addition, we also have setup instructions included here."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// We need to import the augmented definitions \"somewhere\" in our project, however since we have\n// it in tsconfig as an override and the api/types has imports, it is not strictly required here.\n// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'\nimport './interfaces/augment-api';\nimport './interfaces/augment-types';\n\n// all type stuff, the only one we are using here\nimport type { VoteRecord } from './interfaces';\n\n// external imports\nimport { ApiPromise } from '@polkadot/api';\nimport { createType } from '@polkadot/types';\n\n// our local stuff\nimport * as definitions from './interfaces/definitions';\n\nasync function main (): Promise<void> {\n  // extract all types from definitions - fast and dirty approach, flatted on 'types'\n  const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});\n\n  const api = await ApiPromise.create({\n    types: {\n      ...types,\n      // aliases that don't do well as part of interfaces\n      'voting::VoteType': 'VoteType',\n      'voting::TallyType': 'TallyType',\n      // chain-specific overrides\n      Keys: 'SessionKeys4'\n    }\n  });\n\n  // get a query\n  const recordOpt = await api.query.voting.voteRecords(123);\n\n  // the types match with what we expect here\n  let firstRecord: VoteRecord | null = recordOpt.unwrapOr(null);\n  console.log(firstRecord?.toHuman());\n\n  // it even does work for arrays & subscriptions\n  api.query.signaling.activeProposals((results): void => {\n    results.forEach(([hash, blockNumber]): void => {\n      console.log(hash.toHex(), ':', blockNumber.toNumber());\n    });\n  });\n\n  // even createType works, allowing for our types to be used\n  console.log(`Balance2 bitLength:`, [\n    api.createType('Balance2').bitLength(),\n    api.registry.createType('Balance2').bitLength(),\n    createType(api.registry, 'Balance2').bitLength()\n  ]);\n}\n\nawait main();\n")),Object(o.b)("h2",{id:"and-that-is-a-"},"And that is a ..."),Object(o.b)("p",null,"... wrap. Just a really simple walk-through to customizing the API TypeScript definitions for your chain."))}c.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);