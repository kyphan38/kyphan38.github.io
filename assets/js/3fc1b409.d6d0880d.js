"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[5367],{5476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"how to/implement-a-bash-script-from-anywhere","title":"implement a bash script from anywhere","description":"Context","source":"@site/assets/docs/how to/implement-a-bash-script-from-anywhere.md","sourceDirName":"how to","slug":"/how to/implement-a-bash-script-from-anywhere","permalink":"/how to/implement-a-bash-script-from-anywhere","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744760709000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"authorize github","permalink":"/how to/authorize-github"},"next":{"title":"implement file encryption","permalink":"/how to/implement-file-encryption"}}');var a=t(4848),r=t(8453);const i={},o="implement a bash script from anywhere",c={},l=[{value:"Context",id:"context",level:2},{value:"What Is $PATH?",id:"what-is-path",level:2},{value:"Solution",id:"solution",level:2},{value:"Step 1: Create the Script",id:"step-1-create-the-script",level:3},{value:"Step 2: Run the Script From Anywhere",id:"step-2-run-the-script-from-anywhere",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"implement-a-bash-script-from-anywhere",children:"implement a bash script from anywhere"})}),"\n",(0,a.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes, you want to create a custom bash script and be able to run it from any location in the terminal just like a regular command"}),"\n",(0,a.jsxs)(n.p,{children:["To do this, you can place your script in a directory that is part of the system's ",(0,a.jsx)(n.code,{children:"$PATH"}),". One command and safe choice is ",(0,a.jsx)(n.code,{children:"/usr/local/bin"})]}),"\n",(0,a.jsx)(n.h2,{id:"what-is-path",children:"What Is $PATH?"}),"\n",(0,a.jsx)(n.p,{children:"It is an environment variable that tells the shells where to look for executables (like programs, tools, and scripts) when you run a command"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo $PATH\n---\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Each path is separated by a ",(0,a.jsx)(n.code,{children:":"}),". When you run a command (like ",(0,a.jsx)(n.code,{children:"getDatabaseName.sh"}),"), the shell checks each of these directories in order until it finds a match"]}),"\n",(0,a.jsxs)(n.p,{children:["By placing your script in ",(0,a.jsx)(n.code,{children:"/usr/local/bin/"}),", which is already in ",(0,a.jsx)(n.code,{children:"$PATH"}),", your script becomes globally accessible"]}),"\n",(0,a.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,a.jsx)(n.h3,{id:"step-1-create-the-script",children:"Step 1: Create the Script"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate to ",(0,a.jsx)(n.code,{children:"/usr/local/bin/"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd /usr/local/bin\nsudo vim getDataBaseName.sh\n"})}),"\n",(0,a.jsx)(n.p,{children:"Paste this sample script"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\necho "Database name is Andy"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Make the script executable"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo chmod +x ./getDatabaseName.sh\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-2-run-the-script-from-anywhere",children:"Step 2: Run the Script From Anywhere"}),"\n",(0,a.jsx)(n.p,{children:"Now, you can run script from any folder and it will work"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"getDatabaseName.sh\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);