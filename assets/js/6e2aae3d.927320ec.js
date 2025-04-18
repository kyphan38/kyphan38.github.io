"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[1832],{7610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"master/aws - ongoing/fundamentals - tech/networking","title":"networking","description":"OSI Model","source":"@site/assets/docs/master/aws - ongoing/fundamentals - tech/4_networking.md","sourceDirName":"master/aws - ongoing/fundamentals - tech","slug":"/master/aws - ongoing/fundamentals - tech/networking","permalink":"/master/aws - ongoing/fundamentals - tech/networking","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744979749000,"sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"encryption and security","permalink":"/master/aws - ongoing/fundamentals - tech/cryptography and security"},"next":{"title":"disaster recovery","permalink":"/master/aws - ongoing/fundamentals - tech/disaster recovery"}}');var t=s(4848),a=s(8453);const r={},d="networking",l={},c=[{value:"OSI Model",id:"osi-model",level:2},{value:"Layer 1 - Physical - Bit",id:"layer-1---physical---bit",level:3},{value:"Layer 2 - Data Link - Frame",id:"layer-2---data-link---frame",level:3},{value:"Layer 3 - Network - Packet",id:"layer-3---network---packet",level:3},{value:"Layer 4 - Transport - Segment - Continue Here 0033",id:"layer-4---transport---segment---continue-here-0033",level:3},{value:"Layer 5 - Session",id:"layer-5---session",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"networking",children:"networking"})}),"\n",(0,t.jsx)(n.h2,{id:"osi-model",children:"OSI Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(1405).A+"",width:"1578",height:"734"})}),"\n",(0,t.jsx)(n.p,{children:"Components"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local networking - Ethernet"}),"\n",(0,t.jsx)(n.li,{children:"Routing"}),"\n",(0,t.jsx)(n.li,{children:"Segmenting, ports and sessions"}),"\n",(0,t.jsx)(n.li,{children:"Applications"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Key features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Higher layer built on lower layer, adding features and capabilities"}),"\n",(0,t.jsx)(n.li,{children:"This bottom-up approach illustrates the limitations of each lower layer and how each subsequent upper layer was developed to address and overcome those limitations"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"layer-1---physical---bit",children:"Layer 1 - Physical - Bit"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(1546).A+"",width:"1486",height:"379"})}),"\n",(0,t.jsx)(n.p,{children:"Key features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Layer 1 (Physical) specifications define the transmission and reception of raw bit streams between a device and a shared physical medium"}),"\n",(0,t.jsx)(n.li,{children:"It defines things like voltage levels, timing, rates, distances, modulation, and connectors"}),"\n",(0,t.jsx)(n.li,{children:"Physical medium can be copper (electrical), fibre (light), or wifi (RF)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Physical HUB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connects two more devices"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(9123).A+"",width:"1573",height:"702"})}),"\n",(0,t.jsx)(n.p,{children:"Combinations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We can mix and match multiple components depending on the network's needs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cables and NICs"}),"\n",(0,t.jsx)(n.li,{children:"Cables and transceivers"}),"\n",(0,t.jsx)(n.li,{children:"Cables and repeaters and hubs"}),"\n",(0,t.jsx)(n.li,{children:"Cables and wireless access points"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Physical shared medium"}),"\n",(0,t.jsx)(n.li,{children:"Standards for transmitting onto the medium"}),"\n",(0,t.jsx)(n.li,{children:"Standards for receiving from the medium"}),"\n",(0,t.jsx)(n.li,{children:"No access control"}),"\n",(0,t.jsx)(n.li,{children:"No uniquely identified devices"}),"\n",(0,t.jsx)(n.li,{children:"No devices \u2192 Device communications"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"layer-2---data-link---frame",children:"Layer 2 - Data Link - Frame"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(2051).A+"",width:"1592",height:"766"})}),"\n",(0,t.jsx)(n.p,{children:"Components on frame"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Preamble and SFD: Define the start of the frame"}),"\n",(0,t.jsx)(n.li,{children:"MAC header: Contains the destination and source MAC addresses and the EtherType field (layer 3 protocol)"}),"\n",(0,t.jsx)(n.li,{children:"Payload: The data encapsulated within the frame"}),"\n",(0,t.jsx)(n.li,{children:"FCS: Check to detect any transmission errors"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"CSMA/CD - Carrier-sense Multiple Access / Collision Detection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Challenge"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(2218).A+"",width:"1671",height:"757"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(2113).A+"",width:"1692",height:"784"})}),"\n",(0,t.jsx)(n.p,{children:"Switch - Layer 2 device"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The NIC handles the conversion of a structured frame (Layer 2) into raw bits encoded as physical signals (Layer 1) for transmission"}),"\n",(0,t.jsx)(n.li,{children:"Problem"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(72).A+"",width:"1591",height:"784"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(9687).A+"",width:"1634",height:"772"})}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Identifiable devices"}),"\n",(0,t.jsx)(n.li,{children:"Media access control (sharing)"}),"\n",(0,t.jsx)(n.li,{children:"Collision detection"}),"\n",(0,t.jsx)(n.li,{children:"Unicast 1:1"}),"\n",(0,t.jsxs)(n.li,{children:["Broadcast 1",":ALL"]}),"\n",(0,t.jsx)(n.li,{children:"Switches - Like Hubs with Super powers (Layer 2)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"layer-3---network---packet",children:"Layer 3 - Network - Packet"}),"\n",(0,t.jsx)(n.p,{children:"Decimal and binary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Human vs computer"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(7550).A+"",width:"1615",height:"718"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Conversion: Decimal to binary"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(4277).A+"",width:"1643",height:"794"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(2652).A+"",width:"1664",height:"801"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Conversion: Binary to decimal"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(6667).A+"",width:"1645",height:"781"})}),"\n",(0,t.jsx)(n.p,{children:"Layer 3"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(5122).A+"",width:"1693",height:"800"})}),"\n",(0,t.jsx)(n.p,{children:"IPv4 and IPv6"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(5096).A+"",width:"1580",height:"805"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IPv4"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(7809).A+"",width:"1670",height:"732"})}),"\n",(0,t.jsx)(n.p,{children:"Subnet mask"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"/16 in CIDR notation means the first 16 bits of an IP address are the network portion"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(8826).A+"",width:"1689",height:"782"})}),"\n",(0,t.jsx)(n.p,{children:"Route tables and routes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each router typically has a single routing table"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(9587).A+"",width:"1629",height:"760"})}),"\n",(0,t.jsx)(n.p,{children:"Address resolution protocol (ARP)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(3599).A+"",width:"1672",height:"779"})}),"\n",(0,t.jsx)(n.p,{children:"How routing works?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"During routing, the IP packet's core content (source/destination IP, payload) typically remains unchanged, but fields like TTL and checksum are modified"}),"\n",(0,t.jsx)(n.li,{children:"Routers work at layer 3 but need MACs for layer 2"}),"\n",(0,t.jsx)(n.li,{children:"MAC address is in frame header, not packet"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(3493).A+"",width:"1670",height:"790"})}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IP addresses (IPv4/IPv6) enable cross-network addressing"}),"\n",(0,t.jsx)(n.li,{children:"ARP maps an IP address to its corresponding MAC address"}),"\n",(0,t.jsx)(n.li,{children:"A route determines where to forward a packet"}),"\n",(0,t.jsx)(n.li,{children:"Routing tables store multiple routes for packet forwarding"}),"\n",(0,t.jsx)(n.li,{children:"Routers move packets, encapsulated in Layer 2 frames"}),"\n",(0,t.jsx)(n.li,{children:"Devices communicate over the Internet using IP addresses"}),"\n",(0,t.jsx)(n.li,{children:"IP uses source and destination IP addresses for communication"}),"\n",(0,t.jsx)(n.li,{children:"IP packets may be delivered out of order"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"layer-4---transport---segment---continue-here-0033",children:"Layer 4 - Transport - Segment - Continue Here 0033"}),"\n",(0,t.jsx)(n.p,{children:"Problems"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(4718).A+"",width:"1679",height:"787"})}),"\n",(0,t.jsx)(n.p,{children:"TCP and UDP"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(4711).A+"",width:"1555",height:"721"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TCP segments"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(880).A+"",width:"1695",height:"805"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TCP"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(6633).A+"",width:"1614",height:"739"})}),"\n",(0,t.jsx)(n.h3,{id:"layer-5---session",children:"Layer 5 - Session"}),"\n",(0,t.jsx)(n.p,{children:"TCP connection 3-way handshake"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(6569).A+"",width:"1647",height:"756"})}),"\n",(0,t.jsx)(n.p,{children:"Session and state"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(5392).A+"",width:"1680",height:"797"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1405:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/17-72ae6352a765c784b2d759eff4e0708e.png"},1546:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/18-f99c917936675ef123c808786a9e5b70.png"},9123:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/19-1d77fd8c7b8b21e9a95a459e6c5f6a31.png"},2051:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/20-7dfe39ba077d7b6c9960dfefc9c09bcd.png"},2218:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/21-7cb1466d8356f4af52ded2a6c456c6f0.png"},2113:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/22-c58258e5c97a005d0e45cc200bc47027.png"},72:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/23-f798221b6b7e028b34a138e249d246ce.png"},9687:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/24-46249602f45a809900cf4bf465eafaf0.png"},7550:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/25-4bcd57a0f368268eeba83deddb0e9c0b.png"},4277:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/26-144623b1b4a89412fbd9392def9de254.png"},2652:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/27-c439c94be746a3c18f118b3246768d87.png"},6667:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/28-0c4497728c3b9a640339c02c8c145299.png"},5122:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/29-e8da8292e61fdd31df4cf8a98d54c66e.png"},5096:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/30-a3339be2bf30893b5087f1958326174f.png"},7809:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/31-a7d035ff5c1e8d92dcfb7fc076940b0d.png"},8826:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/32-63d5bd9ada8d40955d4a8605556c30f1.png"},9587:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/33-acc49d85fe1e4c44c728d92e32f84538.png"},3599:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/34-f4bee5bb45fc677b494e27af4d7cbafc.png"},3493:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/35-e257d55ab2c63dd98b2e0927c219b6a4.png"},4718:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/36-0316240d78d54bcb758a6100548d894e.png"},4711:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/37-d2dd7542be9781e124322950392d2fe3.png"},880:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/38-ea8859515bd49ea979ef9069d5c90b35.png"},6633:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/39-d4e16eec302706d97cb4f8e29008e1a3.png"},6569:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/40-86646d4c80a8ce2627a916aa1c44c20f.png"},5392:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/41-61879ee506283a085eba1febe09f3cee.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);