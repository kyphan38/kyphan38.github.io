"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[7878],{642:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"master/os - ongoing/processes/introduction","title":"processes","description":"Processes","source":"@site/assets/docs/master/os - ongoing/1-processes/1-introduction.md","sourceDirName":"master/os - ongoing/1-processes","slug":"/master/os - ongoing/processes/introduction","permalink":"/master/os - ongoing/processes/introduction","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1745054218000,"sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"main","permalink":"/master/networking - ongoing/main"},"next":{"title":"process abstraction","permalink":"/master/os - ongoing/processes/process-abstraction"}}');var i=n(4848),t=n(8453);const o={},a="processes",c={},l=[{value:"Processes",id:"processes-1",level:2}];function d(e){const s={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"processes",children:"processes"})}),"\n",(0,i.jsx)(s.h2,{id:"processes-1",children:"Processes"}),"\n",(0,i.jsx)(s.p,{children:"What is an operating system?"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Middleware between programs and system hardware"}),"\n",(0,i.jsx)(s.li,{children:"Manages hardware: CPU, main memory, IO devices (disk, network card, mouse, keyboard, etc.)"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Key features when running a program"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'A compiler translates high level programs into an executable (".c" - source code to "a.out" - on disk)'}),"\n",(0,i.jsxs)(s.li,{children:["The executable contains","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Instructions that the CPU can understand"}),"\n",(0,i.jsx)(s.li,{children:"Data of the program (all numbered with addresses)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Instructions run on CPU: Hardware implements an Instruction Set Architecture (ISA)"}),"\n",(0,i.jsxs)(s.li,{children:["CPU also consists of a few registers","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Program Counter (PC): Points to the next instruction to be executed"}),"\n",(0,i.jsx)(s.li,{children:"Operands of instructions, memory addresses"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"What happens when you run a program? (background)"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(4583).A+"",width:"320",height:"414"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["To run an executable, CPU will","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Fetch instruction pointed at by PC from memory"}),"\n",(0,i.jsx)(s.li,{children:"Load data required by the instructions into registers"}),"\n",(0,i.jsx)(s.li,{children:"Decode and execute the instruction"}),"\n",(0,i.jsx)(s.li,{children:"Store result back to memory"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Most recently used instructions and data are in CPU caches for faster access"}),"\n",(0,i.jsx)(s.p,{children:"What does the OS do?"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["OS manages program memory","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Loads program executable (code, data) from disk to memory"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["OS manages CPU","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Initializes program counter (PC) and other registers to begin execution"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["OS manages external devices","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Reads and writes files from disk"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"How OS manages CPU?"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["OS provides the process abstraction","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Process: a running program"}),"\n",(0,i.jsx)(s.li,{children:"OS creates and manages processes"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Each process has the illusion of having the complete CPU and OS virtualizes CPU","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ant any point of time, we have many processes such as listening to music, browsing the web"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Timeshares CPU between processes"}),"\n",(0,i.jsx)(s.li,{children:"Enables coordination between processes"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"How OS manages memory?"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"OS manages the memory of the process: code, data, stack, heap, etc."}),"\n",(0,i.jsx)(s.li,{children:"Each process thinks it has a dedicated memory space for itself, numbers code and data starting from 0 (virtual addresses)"}),"\n",(0,i.jsxs)(s.li,{children:["OS abstracts out the details of the actual placement in memory, translates from virtual addresses to actual physical addresses, and returns back to the process","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Each process is not aware of how memory is implemented"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"How OS manages devices?"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Device drivers: OS has code to manage disk, network card, and other external devices"}),"\n",(0,i.jsxs)(s.li,{children:["Device driver talks the language of the hardware devices","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Issues instructions to devices (fetch data from a file)"}),"\n",(0,i.jsx)(s.li,{children:"Responds to interrupt events from devices (user has pressed a key on keyboard)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Persistent data organized as a filesystem on disk"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Design goals of an operating system"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Convenience"}),"\n",(0,i.jsx)(s.li,{children:"Abstraction of detailed hardware resources for user programs"}),"\n",(0,i.jsx)(s.li,{children:"Efficiency of using CPU, memory, etc."}),"\n",(0,i.jsx)(s.li,{children:"Isolation between multiple processes"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"History of operating systems"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Started out as a library to provide common functionality across programs to","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Abstract out the hardware that can be used across different programs"}),"\n",(0,i.jsx)(s.li,{children:"Access devices"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Later, evolved from procedure call to system call"}),"\n",(0,i.jsx)(s.li,{children:"When a system call is made to run OS code, the CPU executes at a higher privilege level"}),"\n",(0,i.jsx)(s.li,{children:"Evolved from running a single program to multiple processes concurrently"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4583:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/1-d9a818b4aa674ab946060c71e589f98d.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(6540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);