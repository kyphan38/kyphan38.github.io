"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[9501],{5741:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"master/vault - 7 8 9/introduction-to-vault","title":"introduction to vault","description":"What Is Vault?","source":"@site/assets/docs/master/vault - 7 8 9/1-introduction-to-vault.md","sourceDirName":"master/vault - 7 8 9","slug":"/master/vault - 7 8 9/introduction-to-vault","permalink":"/master/vault - 7 8 9/introduction-to-vault","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744760709000,"sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"conclusion","permalink":"/master/soft skills/c"},"next":{"title":"learning the vault architecture","permalink":"/master/vault - 7 8 9/learning-the-vault-architecture"}}');var l=i(4848),t=i(8453);const r={},a="introduction to vault",c={},d=[{value:"What Is Vault?",id:"what-is-vault",level:2},{value:"How Vault Works?",id:"how-vault-works",level:2},{value:"Why Organizations Choose Vault?",id:"why-organizations-choose-vault",level:2},{value:"Benefits and Use Cases Vault",id:"benefits-and-use-cases-vault",level:2},{value:"Comparing Versions of Vault",id:"comparing-versions-of-vault",level:2}];function o(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"introduction-to-vault",children:"introduction to vault"})}),"\n",(0,l.jsx)(n.h2,{id:"what-is-vault",children:"What Is Vault?"}),"\n",(0,l.jsx)(n.p,{children:"Hashicorp offers all open-source"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Included enterprise version: Terraform, vault, Consul, and Nomad"}),"\n",(0,l.jsx)(n.li,{children:"Open-source only: Boundary, Packer, Vagrant, and Waypoint"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"What?"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Manage secrets and protect sensitive data"}),"\n",(0,l.jsx)(n.li,{children:"Provides a single source of secrets for both humans and machines"}),"\n",(0,l.jsxs)(n.li,{children:["Provides complete lifecycle management for secrets","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Eliminates secret sprawl"}),"\n",(0,l.jsx)(n.li,{children:"Securely store any secret"}),"\n",(0,l.jsx)(n.li,{children:"Provide governance for access to secrets"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Secrets?","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Anything your org deems sensitive","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Usernames and passwords"}),"\n",(0,l.jsx)(n.li,{children:"Certificates"}),"\n",(0,l.jsx)(n.li,{children:"API keys"}),"\n",(0,l.jsx)(n.li,{children:"Encryption keys"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"how-vault-works",children:"How Vault Works?"}),"\n",(0,l.jsx)(n.p,{children:"Vault interfaces"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CLI (machines or humans)"}),"\n",(0,l.jsx)(n.li,{children:"API (machines)"}),"\n",(0,l.jsx)(n.li,{children:"UI (humans)"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Token generation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A human user authenticates with Vault using username and password, RoleID and SecretID, TLS certificate, integrated cloud credentials"}),"\n",(0,l.jsxs)(n.li,{children:["Vault generates a token","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Has a defined TTL (Time To Live) (valid for a specific number of hours)"}),"\n",(0,l.jsx)(n.li,{children:"Is scoped to specific Vault paths with associated capabilities (read/write/delete/list)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Token usage"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The application presents a token to Vault and requests data from a specific path (e.g., kv/apps/secret)"}),"\n",(0,l.jsxs)(n.li,{children:["Vault validates the token","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Is the token valid?"}),"\n",(0,l.jsx)(n.li,{children:"Has the token expired?"}),"\n",(0,l.jsx)(n.li,{children:"Does the token have permission to access the requested path?"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["If validation succeeds, Vault returns the requested data","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"username: abc"}),"\n",(0,l.jsx)(n.li,{children:"password: abc123"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"The application presents the token, it does not need to re-authenticate after the token is issued"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"why-organizations-choose-vault",children:"Why Organizations Choose Vault?"}),"\n",(0,l.jsx)(n.p,{children:"Organizations typically manage multiple identity providers (IDPs) across environments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"On-premises: Active Directory"}),"\n",(0,l.jsx)(n.li,{children:"AWS: AWS IAM"}),"\n",(0,l.jsx)(n.li,{children:"Azure: Azure Active Directory (Azure AD)"}),"\n",(0,l.jsx)(n.li,{children:"GCP: Google Cloud IAM"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Drawbacks of this multi-IDP setup"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fragmented authentication mechanisms"}),"\n",(0,l.jsx)(n.li,{children:"Increased complexity in access control"}),"\n",(0,l.jsx)(n.li,{children:"No unified source of truth for identity and access management"}),"\n",(0,l.jsx)(n.li,{children:"Difficulty in scaling secure practices across hybrid or multi-cloud environments"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Vault solves these problem"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Applications running in on-premises, AWS, Azure, and GCP environments can authenticate directly with Vault"}),"\n",(0,l.jsx)(n.li,{children:"On the backend, Vault integrates seamlessly with identity providers like: Active Directory, AWS IAM, Auzre AD, Google Cloud IAM"}),"\n",(0,l.jsx)(n.li,{children:"Vault becomes the single source of truth for authentication, policy enforcement, and access control across all environments and identity systems"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"benefits-and-use-cases-vault",children:"Benefits and Use Cases Vault"}),"\n",(0,l.jsx)(n.p,{children:"Benefits"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Store long-lived, static secrets"}),"\n",(0,l.jsx)(n.li,{children:"Dynamically generate secrets, upon request"}),"\n",(0,l.jsx)(n.li,{children:"Fully-featured API"}),"\n",(0,l.jsx)(n.li,{children:"Identity-based access control across clouds and systems"}),"\n",(0,l.jsx)(n.li,{children:"Provide encryption as a service"}),"\n",(0,l.jsx)(n.li,{children:"Act as a root or intermediate certificate authority"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Use cases"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Centralize the storage of secrets"}),"\n",(0,l.jsx)(n.li,{children:"Migrate to dynamically generated secrets"}),"\n",(0,l.jsx)(n.li,{children:"Secure data with a centralized workflow for encryption operations"}),"\n",(0,l.jsx)(n.li,{children:"Automate the generation of X.509 certificates"}),"\n",(0,l.jsx)(n.li,{children:"Migrate to identity-based access"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Use case 1: Storage of secrets"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Consolidate the storage of secrets across your organization into a unified platform"}),"\n",(0,l.jsx)(n.li,{children:"Systems like Chef (data bags), Jenkins (credentials), AWS Secrets Manager, and Azure Key Vault can retrieve secrets from Vault"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Use case 2: Migrate to dynamic credentials"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Static credential (not recommended)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Always validate 24/7/365"}),"\n",(0,l.jsx)(n.li,{children:"Long-lived"}),"\n",(0,l.jsx)(n.li,{children:"Require manual rotation"}),"\n",(0,l.jsx)(n.li,{children:"Often reused across systems"}),"\n",(0,l.jsx)(n.li,{children:"Risk of being hardcoded into source code or repositories"}),"\n",(0,l.jsx)(n.li,{children:"Frequently overprivileged"}),"\n",(0,l.jsx)(n.li,{children:"Typically created and managed manually"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Dynamic credentials (recommended)","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Short-lived by design"}),"\n",(0,l.jsx)(n.li,{children:"Enforce the principle of least privilege"}),"\n",(0,l.jsx)(n.li,{children:"Automatically revoked after lease expiration"}),"\n",(0,l.jsx)(n.li,{children:"Each system receives unique credentials"}),"\n",(0,l.jsx)(n.li,{children:"Retrieved programmatically"}),"\n",(0,l.jsx)(n.li,{children:"No human interaction required"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Use case 3: Encryption data"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Vault enables centralized encryption workflows for both data at rest and in transit"}),"\n",(0,l.jsx)(n.li,{children:"Example: When multiple applications with different backends need access to a database, Vault can handle the encryption and key management centrally, regardless of the application design"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Use case 4: Automate X.209 certificates"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Before Vault","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Manually generate a CSR (Certificate Signing Request)"}),"\n",(0,l.jsx)(n.li,{children:"Submit a ticket to the security or PKI team"}),"\n",(0,l.jsx)(n.li,{children:"Wait for the CA to sign and return the certificate"}),"\n",(0,l.jsx)(n.li,{children:"Retrieve and upload the certificate and private key manually"}),"\n",(0,l.jsx)(n.li,{children:"Repeat the process for renewals"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["With Vault","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Applications integrate directly with Vault using the PKI secrets engine"}),"\n",(0,l.jsx)(n.li,{children:"They can automatically request certificates, and Vault returns the certificate and private key on demand"}),"\n",(0,l.jsx)(n.li,{children:"No manual intervention required"}),"\n",(0,l.jsx)(n.li,{children:"Renewal is also automated"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Use case 5: Migrate to identity-based access"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Traditional method","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Applications authenticate to Vault using IP address, username, and password"}),"\n",(0,l.jsx)(n.li,{children:"Requires opening firewalls, managing static credentials, and manual provisioning"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["With identity-based access","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Applications authenticate using trusted identities (e.g., IAM roles, Service Accounts)"}),"\n",(0,l.jsx)(n.li,{children:"Vault validates these credentials against trusted IDPs like AWS, Azure, or GCP"}),"\n",(0,l.jsx)(n.li,{children:"Upon successful validation, Vault issues a token with access to defined paths"}),"\n",(0,l.jsx)(n.li,{children:"No need to manage static secrets or IP-based firewall rules"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"comparing-versions-of-vault",children:"Comparing Versions of Vault"}),"\n",(0,l.jsx)(n.p,{children:"Open source"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Includes","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Incredible number of features and integrations"}),"\n",(0,l.jsx)(n.li,{children:"Local high-availability by way of clustering"}),"\n",(0,l.jsx)(n.li,{children:"Almost all secrets engines and auth methods"}),"\n",(0,l.jsx)(n.li,{children:"Can easily integrate with any application using a fully-featured API"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Does not include","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"No Replication capabilities - single datacenter/cloud deployment"}),"\n",(0,l.jsx)(n.li,{children:"Does not include access to Enterprise integrations (MFA, HSM, Automated Backups)"}),"\n",(0,l.jsx)(n.li,{children:"Limited scalability"}),"\n",(0,l.jsx)(n.li,{children:"Automated Backups, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Enterprise"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Includes","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Access to all features and functions Vault offers"}),"\n",(0,l.jsx)(n.li,{children:"Replication capabilities to other Vault clusters across datacenters/clouds"}),"\n",(0,l.jsx)(n.li,{children:"All secrets engines and auth methods"}),"\n",(0,l.jsx)(n.li,{children:"Can easily integrate with any application using a fully-featured API"}),"\n",(0,l.jsx)(n.li,{children:"Namespaces for multi-tenancy solution"}),"\n",(0,l.jsx)(n.li,{children:"Policy as Code using Sentinel"}),"\n",(0,l.jsx)(n.li,{children:"Easily scale local reads using performance standbys"}),"\n",(0,l.jsx)(n.li,{children:"Access to the Raft/Consul snapshot agent for automated disaster recovery solution"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Does not include","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Self-managed - not hosted or managed by HashiCorp"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"HashiCorp Cloud Platform (HCP)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Includes","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"All features of Vault enterprise"}),"\n",(0,l.jsx)(n.li,{children:"Fully-managed solution"}),"\n",(0,l.jsx)(n.li,{children:"Click button deployment"}),"\n",(0,l.jsx)(n.li,{children:"HashiCorp team of Vault experts manages and upgrades your cluster(s)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(6540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);