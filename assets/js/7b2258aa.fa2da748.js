"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4307],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return o?a.createElement(u,r(r({ref:t},m),{},{components:o})):a.createElement(u,r({ref:t},m))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1931:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=o(3117),n=(o(7294),o(3905));const i={},r="Guide to Easy Track",s={unversionedId:"guides/easy-track-guide",id:"guides/easy-track-guide",title:"Guide to Easy Track",description:"This document is intended for:",source:"@site/docs/guides/easy-track-guide.md",sourceDirName:"guides",slug:"/guides/easy-track-guide",permalink:"/guides/easy-track-guide",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/easy-track-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DAO voting with Etherscan",permalink:"/guides/etherscan-voting"},next:{title:"Verifying address ownership for Lido DAO ops",permalink:"/guides/address-ownership-guide"}},l={},c=[{value:"General overview",id:"general-overview",level:2},{value:"What is Easy Track Motion?",id:"what-is-easy-track-motion",level:3},{value:"Motivation behind Easy Track",id:"motivation-behind-easy-track",level:3},{value:"Easy Track use cases",id:"easy-track-use-cases",level:3},{value:"Links",id:"links",level:3},{value:"Operations HOWTO",id:"operations-howto",level:2},{value:"Node Operators guide to Easy Track",id:"node-operators-guide-to-easy-track",level:2},{value:"Conducting an Easy Track motion",id:"conducting-an-easy-track-motion",level:3},{value:"Possible motion outcomes",id:"possible-motion-outcomes",level:3},{value:"LEGO guide to Easy Track",id:"lego-guide-to-easy-track",level:2},{value:"Conducting an Easy Track motion",id:"conducting-an-easy-track-motion-1",level:3},{value:"Possible motion outcomes",id:"possible-motion-outcomes-1",level:3},{value:"Rewards Committee guide to Easy Track",id:"rewards-committee-guide-to-easy-track",level:2},{value:"Conducting an Easy Track motion",id:"conducting-an-easy-track-motion-2",level:3},{value:"Possible motion outcomes",id:"possible-motion-outcomes-2",level:3},{value:"Checking the motion details from Gnosis Multisig UI",id:"checking-the-motion-details-from-gnosis-multisig-ui",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"guide-to-easy-track"},"Guide to Easy Track"),(0,n.kt)("p",null,"This document is intended for: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the Lido Node Operators who wish to increase their staking limits within the Lido protocol;"),(0,n.kt)("li",{parentName:"ul"},"the Lido Ecosystem Grants Organisation members who wish to allocate funds into LEGO program;"),(0,n.kt)("li",{parentName:"ul"},"the Lido Rewards Committee members who wish to allocate funds into ongoing reward programs, or add a new reward program into the list of active reward programs, or remove a reward program from the list of active reward programs.")),(0,n.kt)("p",null,"The guide consists of two sections: ",(0,n.kt)("a",{parentName:"p",href:"#general-overview"},"General overview")," and ",(0,n.kt)("a",{parentName:"p",href:"#operations-howto"},"Operations HOWTO"),". If you\u2019re here for the technical details of interacting with Easy Track, feel free to skip to the latter."),(0,n.kt)("h2",{id:"general-overview"},"General overview"),(0,n.kt)("h3",{id:"what-is-easy-track-motion"},"What is Easy Track Motion?"),(0,n.kt)("p",null,"Easy Track motion is a lightweight voting process that is considered to have passed if the minimum objections threshold hasn't been reached. In contrast to regular Aragon voting, Easy Track motions are more cost-effective (as token holders only need to vote 'contra' if they have objections, rather than voting 'pro') and easier to manage (eliminating the need for broad DAO community voting on proposals that do not spark significant debate).\nTo enact an Easy Track motion, the minimum objections threshold must not be reached within 72 hours after the motion has been initiated. The threshold requires support from at least 0.5% of the total LDO supply to reject the motion."),(0,n.kt)("p",null,"To prevent motion spam, only up to 20 active motions can exist simultaneously."),(0,n.kt)("h3",{id:"motivation-behind-easy-track"},"Motivation behind Easy Track"),(0,n.kt)("p",null,"Initially, the Lido DAO governance used to rely on Aragon voting model. The DAO approved or rejected proposals by direct governance token voting. Though transparent and reliable, it is not a convenient way to make decisions only affecting small groups of Lido DAO members. Besides, direct token voting didn\u2019t exactly reflect all the decision-making processes within the Lido DAO and was often used only to adopt an existing consensus. Votings on such decisions often struggled to attract wider DAO attention and thus, to pass.\nEasy Track has been developed as a solution to problem of the DAO getting tired of governance."),(0,n.kt)("h3",{id:"easy-track-use-cases"},"Easy Track use cases"),(0,n.kt)("p",null,"There are three types of votings run periodically by the Lido DAO wrapped into the Easy Track motions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node Operators increasing staking limits"),(0,n.kt)("li",{parentName:"ul"},"Funds being allocated to LEGO program"),(0,n.kt)("li",{parentName:"ul"},"Funds being allocated into reward programs")),(0,n.kt)("h3",{id:"links"},"Links"),(0,n.kt)("p",null,"You can read more about Easy Track functionality in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-3.md"},"LIP-3"),".",(0,n.kt)("br",{parentName:"p"}),"\n","For more in-depth technical description, please read through the full project ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/easy-track/blob/master/specification.md"},"specification"),"."),(0,n.kt)("h2",{id:"operations-howto"},"Operations HOWTO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#node-operators-guide-to-easy-track"},"Node Operators guide to Easy Track")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#lego-guide-to-easy-track"},"LEGO guide to Easy Track")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rewards-committee-guide-to-easy-track"},"Rewards Committee guide to Easy Track"))),(0,n.kt)("h2",{id:"node-operators-guide-to-easy-track"},"Node Operators guide to Easy Track"),(0,n.kt)("p",null,"Before starting an Easy Track motion to increase staking limits, there are several key features to keep in mind:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Node operators can only increase staking limits for themselves.")," Before initiating a motion, ensure that you have access to the address associated with the correct node operator in the Lido Node Operators Registry. You can find the correct address in the Aragon UI (",(0,n.kt)("a",{parentName:"li",href:"https://testnet.testnet.fi/#/lido-testnet-prater/0x9d4af1ee19dad8857db3a45b0374c81c8a1c6320/"},"goerli-prater testnet"),", ",(0,n.kt)("a",{parentName:"li",href:"https://mainnet.lido.fi/#/lido-dao/0x55032650b14df07b85bf18a3a3ec8e0af2e028d5/"},"mainnet"),"). "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"A single motion can only address the staking limit of a single node operator.")," It is not possible to increase limits for multiple node operators in one motion."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"The total amount of a node operator's signing keys must be greater than or equal to the new staking limit.")," Make sure you have submitted enough valid signing keys before starting a motion.")),(0,n.kt)("h3",{id:"conducting-an-easy-track-motion"},"Conducting an Easy Track motion"),(0,n.kt)("p",null,"To initiate a staking limit Easy Track motion, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Proceed to the Easy Track UI (",(0,n.kt)("a",{parentName:"li",href:"https://easytrack.testnet.fi/"},"goerli-prater testnet"),", ",(0,n.kt)("a",{parentName:"li",href:"https://easytrack.lido.fi/"},"mainnet"),")"),(0,n.kt)("li",{parentName:"ol"},"Connect your wallet using the 'Connect wallet' button in the top right corner. Please use the address specified as your reward address in the Node Operators Registry."),(0,n.kt)("li",{parentName:"ol"},"In the header menu click 'Start motion' button. You will be directed to the motion creation interface. Look for the motion type 'Increase node operator staking limit'."),(0,n.kt)("li",{parentName:"ol"},"Fill in all fields in the form. Your node operator ID can be found in the Aragon UI (",(0,n.kt)("a",{parentName:"li",href:"https://testnet.testnet.fi/#/lido-testnet-prater/0x9d4af1ee19dad8857db3a45b0374c81c8a1c6320/"},"goerli-prater testnet"),", ",(0,n.kt)("a",{parentName:"li",href:"https://mainnet.lido.fi/#/lido-dao/0x55032650b14df07b85bf18a3a3ec8e0af2e028d5/"},"mainnet"),") \u2013 It is the number displayed to the left of your node operator name."),(0,n.kt)("li",{parentName:"ol"},"Enter the desired staking limit value in the 'New limit' field, press the 'Submit' button below the form and sign the transaction (gas costs apply).")),(0,n.kt)("p",null,"As soon as transaction is confirmed, the motion has been started and you can see it on the 'Active motions' page of Easy Track UI. Notifications will be sent out to let the DAO know about the motion. From this moment on, the LDO token holders will have 72 hours to submit their objections if they have any. Please note the motion duration may be different for testnet deployment."),(0,n.kt)("h3",{id:"possible-motion-outcomes"},"Possible motion outcomes"),(0,n.kt)("p",null,"A motion can have three possible outcomes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion passed."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply hasn't been reached, the motion is considered to have passed, and it can be enacted. This operation is permissionless, which means anyone can enact a passed motion. Please note, it is still possible to object a non-enacted motion even after 72 hours timelock. The enacted motion will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion rejected."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply has been reached, the motion is considered rejected. It will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion canceled."),"\nIn case you find out you have made a mistake when starting the motion (e.g. you don't want to increase your staking limits just yet or you've misclicked when specifying the new limit value etc.), you can cancel the motion at any moment before it has been enacted. To do so, click on the motion to see the detailed motion view and press 'Cancel' motion button top right. Please note, this is on-chain action, and you will have to sign a transaction to complete it (gas costs apply).")),(0,n.kt)("h2",{id:"lego-guide-to-easy-track"},"LEGO guide to Easy Track"),(0,n.kt)("p",null,"There are several features of LEGO Easy Track motions to keep in mind before starting one:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Only a LEGO committee member can start a motion to allocate funds to LEGO program.")," Before starting a motion, please make sure you have access to ",(0,n.kt)("a",{parentName:"li",href:"https://gnosis-safe.io/app/#/safes/0x12a43b049A7D330cB8aEAB5113032D18AE9a9030"},"the LEGO Committee Gnosis safe multi-sig"),". "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"LEGO Easy Track motions support fund allocation in one or multiple of three crypto currencies: ETH, stETH, and LDO.")," ")),(0,n.kt)("h3",{id:"conducting-an-easy-track-motion-1"},"Conducting an Easy Track motion"),(0,n.kt)("p",null,"To start a LEGO Easy Track motion, proceed to the ",(0,n.kt)("a",{parentName:"p",href:"https://easytrack.lido.fi/"},"Easy Track UI")," and click 'Connect' button top right.",(0,n.kt)("br",{parentName:"p"}),"\n","Pick 'Wallet Connect' option, you will see the QR code. Copy it by clicking 'Copy to clipboard' button under the code.",(0,n.kt)("br",{parentName:"p"}),"\n","Next, proceed to ",(0,n.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/#/safes/0x12a43b049A7D330cB8aEAB5113032D18AE9a9030"},"the LEGO Committee Gnosis safe multi-sig")," and connect your wallet by clicking 'Connect your wallet' button top right.",(0,n.kt)("br",{parentName:"p"}),"\n","Open the 'APPS' section in the drawer menu on the left and find Wallet Connect Safe app in the list.",(0,n.kt)("br",{parentName:"p"}),"\n","Paste the code into the field on the left. Now the LEGO Committee Gnosis multisig is connected to Easy Track app.  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You need to keep the Wallet Connect Safe app tab open in your browser for transactions to pop up. You will not receive transaction requests if you don't have it open.")),(0,n.kt)("p",null,"In the header menu of Easy Track UI click 'Start motion' button. You will see the motion creation interface. Motion type you are looking for is 'Top up LEGO'.\nFill in the form (all fields are required).",(0,n.kt)("br",{parentName:"p"}),"\n","Pick the token you want to top up the LEGO program with.",(0,n.kt)("br",{parentName:"p"}),"\n","Specify the amount of tokens you want to top up the LEGO program with.  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can add multiple token allocations into a single motion by clicking 'One more token' below the form.")),(0,n.kt)("p",null,"Press 'Submit' button below the form and sign the transaction on the Wallet Connect safe app page (gas costs apply).",(0,n.kt)("br",{parentName:"p"}),"\n","Next, you will need another LEGO Committee Gnosis multi-sig owner to confirm the transaction in the Gnosis Safe.",(0,n.kt)("br",{parentName:"p"}),"\n","As soon as transaction is confirmed, the motion has been started and you can see it on the 'Active motions' page of Easy Track UI. Notifications will be sent out to let the DAO know about the motion. From this moment on, the LDO token holders will have 72 hours to submit their objections if they have any."),(0,n.kt)("h3",{id:"possible-motion-outcomes-1"},"Possible motion outcomes"),(0,n.kt)("p",null,"A motion can have three possible outcomes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion passed."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply hasn't been reached, the motion is considered to have passed, and it can be enacted. This operation is permissionless, which means anyone can enact a passed motion. Please note, it is still possible to object a non-enacted motion even after 72 hours timelock. The enacted motion will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion rejected."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply has been reached, the motion is considered rejected. It will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion canceled."),"\nIn case you find out you have made a mistake when starting the motion (e.g. you don't want to top-up LEGO program just yet or you've misclicked when specifying the amount of tokens to transfer etc.), you can cancel the motion at any moment before it has been enacted. To do so, click on the motion to see the detailed motion view and press 'Cancel' motion button top right. Please note, this is on-chain action, and you will have to sign a transaction in the Gnosis safe to complete it (gas costs apply).")),(0,n.kt)("h2",{id:"rewards-committee-guide-to-easy-track"},"Rewards Committee guide to Easy Track"),(0,n.kt)("p",null,"There are several features of Rewards Committee Easy Track motions to keep in mind before starting one:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Only a Lido Rewards Committee member can start a motion to allocate funds to reward programs.")," Before starting a motion, please make sure you have access to ",(0,n.kt)("a",{parentName:"li",href:"https://gnosis-safe.io/app/eth:0x87D93d9B2C672bf9c9642d853a8682546a5012B5/balances"},"the Rewards Committee Gnosis safe multi-sig"),". "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Rewards Committee Easy Track motions support fund allocation in LDO only.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Finance Team Easy Track supports topping up multiple reward programs in a single motion.")," Though be careful, lack of consensus on one reward program will prevent the whole motion from passing."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"To top up a reward program via Easy Track motion, it should first be added into the list of active reward programs.")," This action requires a separate Easy Track motion to complete."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"When no longer active, reward program should be removed from the list of active reward programs.")," This action requires a separate Easy Track motion to complete.")),(0,n.kt)("h3",{id:"conducting-an-easy-track-motion-2"},"Conducting an Easy Track motion"),(0,n.kt)("p",null,"To start a LEGO Easy Track motion, proceed to the ",(0,n.kt)("a",{parentName:"p",href:"https://easytrack.lido.fi/"},"Easy Track UI")," and click 'Connect' button top right.",(0,n.kt)("br",{parentName:"p"}),"\n","Pick 'Wallet Connect' option, you will see the QR code. Copy it by clicking 'Copy to clipboard' button under the code.",(0,n.kt)("br",{parentName:"p"}),"\n","Next, proceed to ",(0,n.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0x87D93d9B2C672bf9c9642d853a8682546a5012B5/balances"},"the Rewards Committee Gnosis safe multi-sig")," and connect your wallet by clicking 'Connect your wallet' button top right.",(0,n.kt)("br",{parentName:"p"}),"\n","Open the APPS section in the drawer menu on the left and find Wallet Connect Safe app in the list.",(0,n.kt)("br",{parentName:"p"}),"\n","Paste the code into the field on the left. Now the Rewards Committee Gnosis multi-sig is connected to Easy Track app.  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You need to keep the Wallet Connect Safe app tab open in your browser for transactions to pop up. You will not receive transaction requests if you don't have it open.")),(0,n.kt)("p",null,"In the header menu of Easy Track UI click 'Start motion' button. You will see the motion creation interface. The motion type you are looking for is 'Add reward program'.",(0,n.kt)("br",{parentName:"p"}),"\n","Fill in the form (all fields are required).",(0,n.kt)("br",{parentName:"p"}),"\n","Title should be a human-readable description of the reward program (e.g. 'Curve ETH<",">","stETH LP incentives').",(0,n.kt)("br",{parentName:"p"}),"\n","Fill the Ethereum address of the reward program (it could be reward contract or reward manager contract depending on the specific program) in the 'Address' field."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When creating a motion to remove a reward program from the list or to top up a previously added program, you will be able to pick a program by the program title, rather than pasting Ethereum address.\nUI for topping up the rewards program takes full tokens as an input (so, the amounts are in X LDOs, not X*1e18 LDO Weis).")),(0,n.kt)("p",null,"Press 'Submit' button below the form and sign the transaction on the Wallet Connect safe app page (gas costs apply).",(0,n.kt)("br",{parentName:"p"}),"\n","Next, you will need another Rewards Committee Gnosis multi-sig owner to confirm the transaction in the Gnosis Safe.",(0,n.kt)("br",{parentName:"p"}),"\n","As soon as transaction is confirmed, the motion has been started and you can see it on the 'Active motions' page of Easy Track UI. Notifications will be sent out to let the DAO know about the motion. From this moment on, the LDO token holders will have 72 hours to submit their objections if they have any."),(0,n.kt)("h3",{id:"possible-motion-outcomes-2"},"Possible motion outcomes"),(0,n.kt)("p",null,"A motion can have three possible outcomes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion passed."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply hasn't been reached, the motion is considered to have passed, and it can be enacted. This operation is permissionless, which means anyone can enact a passed motion. Please note, it is still possible to object a non-enacted motion even after 72 hours timelock. The enacted motion will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion rejected."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply has been reached, the motion is considered rejected. It will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Motion canceled."),"\nIn case you find out you have made a mistake when starting the motion (e.g. you have added the wrong address for the new reward program or you've misclicked when specifying the amount of tokens to be allocated etc.), you can cancel the motion at any moment before it has been enacted. To do so, click on the motion to see the detailed motion view and press 'Cancel' motion button top right. Please note, this is on-chain action, and you will have to sign a transaction via WalletConnect Safe app, as well as a confirmation from another Finance Team multi-sig owner to complete it (gas costs apply).")),(0,n.kt)("h3",{id:"checking-the-motion-details-from-gnosis-multisig-ui"},"Checking the motion details from Gnosis Multisig UI"),(0,n.kt)("p",null,"The motion start txs are created by one of the multisig signers, and the others should check the addresses & data of the tx they are asked to sign."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the address the tx is being sent to \u2014 it should be ",(0,n.kt)("inlineCode",{parentName:"li"},"Easy Track")," contract listed on the ",(0,n.kt)("a",{parentName:"li",href:"/deployed-contracts#easy-track"},"Deployed Contracts page"),"."),(0,n.kt)("li",{parentName:"ol"},"The params of the ",(0,n.kt)("inlineCode",{parentName:"li"},"createMotion")," call are ",(0,n.kt)("inlineCode",{parentName:"li"},"_evmScriptFactory")," address & ",(0,n.kt)("inlineCode",{parentName:"li"},"_evmScriptCallData")," bytes string.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"_evmScriptFactory")," address should be listed on the ",(0,n.kt)("a",{parentName:"li",href:"/deployed-contracts#easy-track"},"Deployed Contracts page")," & match the type of motion is about to be started."),(0,n.kt)("li",{parentName:"ol"},"To check ",(0,n.kt)("inlineCode",{parentName:"li"},"_evmScriptCallData")," open the ",(0,n.kt)("inlineCode",{parentName:"li"},"_evmScriptFactory")," contract on the etherscan & call the ",(0,n.kt)("inlineCode",{parentName:"li"},"decodeEVMScriptCallData")," with the string from the Gnosis Safe UI to see the motion params.")))))}p.isMDXComponent=!0}}]);