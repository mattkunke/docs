"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},l="Oracle Operator Manual",i={unversionedId:"guides/oracle-operator-manual",id:"guides/oracle-operator-manual",title:"Oracle Operator Manual",description:"This document is intended for those who wish to participate in the Lido protocol as entity that runs - an entity who runs a daemons synchronizing state from Beacon Layer to Execution Layer of the protocol.",source:"@site/docs/guides/oracle-operator-manual.md",sourceDirName:"guides",slug:"/guides/oracle-operator-manual",permalink:"/guides/oracle-operator-manual",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/oracle-operator-manual.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Tooling Setup & Configuration",permalink:"/guides/node-operators/exits/tooling-setup"},next:{title:"Deposit Security Committee manual",permalink:"/guides/deposit-security-manual"}},s=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[{value:"Execution Client Node",id:"execution-client-node",children:[],level:3},{value:"Consensus Client Node",id:"consensus-client-node",children:[],level:3},{value:"Keys API Service",id:"keys-api-service",children:[],level:3}],level:2},{value:"The oracle daemon",id:"the-oracle-daemon",children:[{value:"Environment variables",id:"environment-variables",children:[],level:3},{value:"Lido Locator address",id:"lido-locator-address",children:[],level:3},{value:"Running the daemon",id:"running-the-daemon",children:[],level:3},{value:"Metrics and Alerts",id:"metrics-and-alerts",children:[],level:3}],level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oracle-operator-manual"},"Oracle Operator Manual"),(0,r.kt)("p",null,"This document is intended for those who wish to participate in the Lido protocol as entity that runs - an entity who runs a daemons synchronizing state from Beacon Layer to Execution Layer of the protocol.\nDue to the lack of native communication between these two networks, Lido employs a network of oracles to synchronize the system at regular intervals."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate an Ethereum address."),(0,r.kt)("li",{parentName:"ol"},"Launch and sync an ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/#archive-node"},"archive")," (archive data for at least 2 weeks) Execution Layer node with JSON-RPC endpoint enabled."),(0,r.kt)("li",{parentName:"ol"},"Launch and sync an ",(0,r.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/#archive-node"},"archive")," Consensus Layer node with API endpoint enabled."),(0,r.kt)("li",{parentName:"ol"},"Launch and sync a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-keys-api"},"Keys API Service"),"."),(0,r.kt)("li",{parentName:"ol"},"Launch the accounting and ejector modules of Oracle."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Optional"),"]"," Add alerts to Oracle's Prometheus metrics."),(0,r.kt)("li",{parentName:"ol"},"In case of mainnet share your address and intention to join the Oracle set with public. You need to publish it on Twitter and also write a message with a twitter link under Onboarding post on ",(0,r.kt)("a",{parentName:"li",href:"https://research.lido.fi/"},"the Research forum"),"."),(0,r.kt)("li",{parentName:"ol"},"Propose your Oracle's ethereum address to Lido Team to vote on your address being added to the Oracle Members.")),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"The Lido Oracle mechanism comprises three main components. The first component is the Oracle smart-contract suite, which receives update reports from the oracles and passes them on to the Lido contract to execute the necessary actions based on the reported changes. The second component is the off-chain oracle daemon, run by each oracle node and responsible for monitoring the protocol state and generating update reports. The third component is the network of computer nodes that run by oracle member, which collectively provide the necessary information to the Oracle smart contract to calculate the new state of the protocol."),(0,r.kt)("p",null,"Based on the update reports received from the oracles, the Lido smart contract performs state transitions such as updating user balances, processing withdrawal requests, and distributing rewards to node operators. Thus, the Lido Oracle mechanism acts as a synchronization device that bridges the protocol across the execution and consensus layers. It ensures that the protocol is updated in a timely and accurate manner and allows for smooth and efficient operation of the entire Lido system."),(0,r.kt)("p",null,"The two core contracts in the Lido Oracle suite are called AccountingOracle and ValidatorsExitBus. Together, these contracts collect information submitted by oracles about the state of validators and their balances, the amount of funds accumulated on protocol vaults, and the number of withdrawal requests the protocol is able to process. This information is then used for these crucial processes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rebasing user balances,"),(0,r.kt)("li",{parentName:"ul"},"distributing node operator rewards,"),(0,r.kt)("li",{parentName:"ul"},"processing withdrawal requests,"),(0,r.kt)("li",{parentName:"ul"},"making decision which validators should initiate voluntary exit,"),(0,r.kt)("li",{parentName:"ul"},"distributing stake,"),(0,r.kt)("li",{parentName:"ul"},"putting the protocol into the bunker mode.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"execution-client-node"},"Execution Client Node"),(0,r.kt)("p",null,"To prepare the report, Oracle fetches up to 10 days old events, makes historical requests for balance data and makes simulated reports on historical blocks. This requires an ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/#archive-node"},"archive")," execution node.\nOracle needs two weeks of archived data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Client"),(0,r.kt)("th",{parentName:"tr",align:null},"Tested"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://geth.ethereum.org/"},"Geth")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--gcmode=archive")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--syncmode=snap")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"OR",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--gcmode=archive"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--syncmode=full"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nethermind.io/"},"Nethermind")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Not tested yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://besu.hyperledger.org/en/stable/"},"Besu")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--rpc-max-logs-range=100000")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--sync-mode=FULL")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},'--data-storage-format="FOREST"')," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--pruning-enabled")," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--pruning-blocks-retained=100000")," ",(0,r.kt)("br",null)," params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ledgerwatch/erigon"},"Erigon")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--prune=htc")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--prune.h.before=100000")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--prune.t.before=100000")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--prune.c.before=100000")," ",(0,r.kt)("br",null)," params")))),(0,r.kt)("h3",{id:"consensus-client-node"},"Consensus Client Node"),(0,r.kt)("p",null,"To calculate some metrics for bunker mode Oracle needs ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/nodes-and-clients/#archive-node"},"archive")," consensus node."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Client"),(0,r.kt)("th",{parentName:"tr",align:null},"Tested"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lighthouse.sigmaprime.io/"},"Lighthouse")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"--reconstruct-historic-states")," param")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nethermind.io/"},"Lodestar")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Not tested yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://besu.hyperledger.org/en/stable/"},"Nimbus")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Not tested yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ledgerwatch/erigon"},"Prysm")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--grpc-max-msg-size=104857600")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--enable-historical-state-representation=true")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--slots-per-archive-point=1024")," ",(0,r.kt)("br",null)," params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.teku.consensys.net"},"Teku")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--data-storage-mode=archive")," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--data-storage-archive-frequency=1024"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"--reconstruct-historic-states=true"),(0,r.kt)("br",null)," params")))),(0,r.kt)("h3",{id:"keys-api-service"},"Keys API Service"),(0,r.kt)("p",null,"This is a separate service that uses Execution Client to fetch all lido keys. It stores the latest state of lido keys in database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-keys-api"},"Lido Keys API repository.")),(0,r.kt)("h2",{id:"the-oracle-daemon"},"The oracle daemon"),(0,r.kt)("p",null,"The Oracle daemon is a Python application that contains two modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accounting module"),(0,r.kt)("li",{parentName:"ul"},"Ejector module")),(0,r.kt)("p",null,"The oracle source code is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-oracle"},"https://github.com/lidofinance/lido-oracle"),"."),(0,r.kt)("p",null,"Modules fetch the reportable slot, and if this slot is finalized, calculate and send the report to AccountingOracle and ExitBusOracle smart contracts."),(0,r.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"The oracle daemon requires the following environment variables:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Required")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EXECUTION_CLIENT_URI")," - list of Execution Client uris separated with comma. The second and next uris will be used as fallback."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONSENSUS_CLIENT_URI")," - list of Consensus Client uris separated with comma. The second and next uris will be used as fallback."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KEYS_API_URI")," - list of Key API client uris separated with comma. The second and next uris will be used as fallback."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LIDO_LOCATOR_ADDRESS")," - Lido Locator smart contract address.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"One of:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEMBER_PRIV_KEY")," - Private key of the Oracle member account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEMBER_PRIV_KEY_FILE")," - A path to the file contained the private key of the Oracle member account.")),(0,r.kt)("p",null,"Full list could be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-oracle#env-variables"},"here"),"."),(0,r.kt)("h3",{id:"lido-locator-address"},"Lido Locator address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mainnet"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://etherscan.io/address/0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb"},"0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goerli"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://goerli.etherscan.io/address/0x1eDf09b5023DC86737b59dE68a8130De878984f5"},"0x1eDf09b5023DC86737b59dE68a8130De878984f5"))),(0,r.kt)("h3",{id:"running-the-daemon"},"Running the daemon"),(0,r.kt)("p",null,"Startup accounting module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -d --name lido-oracle-accounting \\\n  --env "EXECUTION_CLIENT_URI=$EXECUTION_CLIENT_URI" \\\n  --env "CONSENSUS_CLIENT_URI=$CONSENSUS_CLIENT_URI" \\\n  --env "KEYS_API_URI=$KEYS_API_URI" \\\n  --env "LIDO_LOCATOR_ADDRESS=$LOCATOR_ADDRESS" \\\n  --env "MEMBER_PRIV_KEY=$MEMBER_PRIV_KEY" \\\n  lidofinance/oracle@<image-hash> accounting\n')),(0,r.kt)("p",null,"Startup ejector module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -d --name lido-oracle-ejector \\\n  --env "EXECUTION_CLIENT_URI=$EXECUTION_CLIENT_URI" \\\n  --env "CONSENSUS_CLIENT_URI=$CONSENSUS_CLIENT_URI" \\\n  --env "KEYS_API_URI=$KEYS_API_URI" \\\n  --env "LIDO_LOCATOR_ADDRESS=$LOCATOR_ADDRESS" \\\n  --env "MEMBER_PRIV_KEY=$MEMBER_PRIV_KEY" \\\n  lidofinance/oracle@<image-hash> ejector\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Latest image hash"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.lido.fi/guides/tooling/#oracle"},"https://docs.lido.fi/guides/tooling/#oracle")),(0,r.kt)("p",null,"This will start the oracle in daemon mode. You can also run it in a one-off mode, for example if you\u2019d prefer to trigger oracle execution as a ",(0,r.kt)("inlineCode",{parentName:"p"},"cron")," job. In this case, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"DAEMON")," environment variable to 0."),(0,r.kt)("h3",{id:"metrics-and-alerts"},"Metrics and Alerts"),(0,r.kt)("p",null,"How to set up alerts and details about metrics could be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-oracle#alerts"},"here"),"."))}c.isMDXComponent=!0}}]);