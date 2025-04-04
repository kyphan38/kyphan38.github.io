"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[4074],{3316:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"study/vault/install-vault","title":"install vault","description":"Installing Vault Server","source":"@site/assets/docs/study/vault/3-install-vault.md","sourceDirName":"study/vault","slug":"/study/vault/install-vault","permalink":"/study/vault/install-vault","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1743787715000,"sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"learning the vault architecture","permalink":"/study/vault/learning-the-vault-architecture"},"next":{"title":"compare authentication methods","permalink":"/study/vault/compare-authentication-methods"}}');var t=l(4848),a=l(8453);const i={},r="install vault",c={},u=[{value:"Installing Vault Server",id:"installing-vault-server",level:2},{value:"Running Vault Dev Server",id:"running-vault-dev-server",level:2},{value:"Running Vault Server in Production",id:"running-vault-server-in-production",level:2},{value:"Configuring the Consul Storage Backend",id:"configuring-the-consul-storage-backend",level:2},{value:"Configuring the Integrated Storage Backend",id:"configuring-the-integrated-storage-backend",level:2},{value:"Demo",id:"demo",level:2},{value:"Installing Vault Using Packer",id:"installing-vault-using-packer",level:3},{value:"Manually Installing Vault",id:"manually-installing-vault",level:3},{value:"Running Vault Dev Server",id:"running-vault-dev-server-1",level:3},{value:"Running Vault in Production",id:"running-vault-in-production",level:3},{value:"Lab",id:"lab",level:2},{value:"Running Vault Dev Server",id:"running-vault-dev-server-2",level:3},{value:"Running Vault Server",id:"running-vault-server",level:3},{value:"Configuring Integrated Storage Manually",id:"configuring-integrated-storage-manually",level:3},{value:"Configuring Auto Unseal",id:"configuring-auto-unseal",level:3}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"install-vault",children:"install vault"})}),"\n",(0,t.jsx)(e.h2,{id:"installing-vault-server",children:"Installing Vault Server"}),"\n",(0,t.jsx)(e.p,{children:"Installing Vault"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Vault is a platform-agnostic tool, meaning it can operate on a variety of underlying platforms, including","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Kubernetes"}),"\n",(0,t.jsx)(e.li,{children:"Cloud-based machines (e.g., AWS instances, Azure virtual machines)"}),"\n",(0,t.jsx)(e.li,{children:"VMware virtual machines"}),"\n",(0,t.jsx)(e.li,{children:"Physical servers"}),"\n",(0,t.jsx)(e.li,{children:"Laptops"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Vault is also compatible with multiple operating systems, such as: macOS, Windows, Linux, FreeBSD, NetBSD, OpenBSD, Solaris, etc."}),"\n",(0,t.jsxs)(e.li,{children:["To install and set up Vault, follow this order of operations","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Install Vault"}),"\n",(0,t.jsx)(e.li,{children:"Create a configuration file"}),"\n",(0,t.jsx)(e.li,{children:"Initialize Vault"}),"\n",(0,t.jsx)(e.li,{children:"Unseal Vault"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Where to download Vault","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"vaultproject.io"}),"\n",(0,t.jsx)(e.li,{children:"releases.hashicorp.com/vault"}),"\n",(0,t.jsx)(e.li,{children:"Alternatively, use your preferred package manager (e.g., apt, yum, or even homebrew\u2014community-supported)"}),"\n",(0,t.jsx)(e.li,{children:"For Kubernetes, use the Vault Helm Chart to install and configure Vault"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Installation steps","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Download Vault"}),"\n",(0,t.jsx)(e.li,{children:"Unpackage Vault"}),"\n",(0,t.jsx)(e.li,{children:"Set the Path"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"running-vault-dev-server",children:"Running Vault Dev Server"}),"\n",(0,t.jsx)(e.p,{children:"Running Vault dev server"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Key features","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Requires no configuration"}),"\n",(0,t.jsx)(e.li,{children:"Automatically initializes and unseals Vault"}),"\n",(0,t.jsx)(e.li,{children:"Enables the user interface (UI), accessible at localhost"}),"\n",(0,t.jsx)(e.li,{children:"Provides an unseal key"}),"\n",(0,t.jsx)(e.li,{children:"Automatically logs in as the root user"}),"\n",(0,t.jsx)(e.li,{children:"Runs in non-persistent mode (data is stored in memory only)"}),"\n",(0,t.jsx)(e.li,{children:"Operates without TLS (insecure)"}),"\n",(0,t.jsx)(e.li,{children:"Sets the listener to 127.0.0.1:8200"}),"\n",(0,t.jsx)(e.li,{children:"Mounts a Key/Value (K/V) version 2 secret engine"}),"\n",(0,t.jsx)(e.li,{children:"Generates a root token"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"Never use the dev server mode in a production environment due to its lack of persistence and security"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Uses cases","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Proof-of-concept projects"}),"\n",(0,t.jsx)(e.li,{children:"Developing and testing new integrations"}),"\n",(0,t.jsx)(e.li,{children:"Exploring and testing Vault's new features"}),"\n",(0,t.jsx)(e.li,{children:"Experimenting with Vault functionality"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"To start the Vault dev server, use the following command"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"vault server -dev\n"})}),"\n",(0,t.jsx)(e.h2,{id:"running-vault-server-in-production",children:"Running Vault Server in Production"}),"\n",(0,t.jsx)(e.p,{children:"Guidelines"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Deploy one or more persistent Vault nodes using a configuration file"}),"\n",(0,t.jsx)(e.li,{children:"Select a storage backend that meets Vault's requirements (e.g., Consul, integrated storage, or other supported options)"}),"\n",(0,t.jsx)(e.li,{children:"Configure multiple Vault nodes to form a cluster"}),"\n",(0,t.jsx)(e.li,{children:"Deploy Vault nodes close to your applications to minimize latency"}),"\n",(0,t.jsx)(e.li,{children:"Automate Vault provisioning for efficiency in most production scenarios"}),"\n",(0,t.jsx)(e.li,{children:"Start the Vault server with the command"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"vault server -config=<file>\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use a service manager (e.g., systemctl on Linux, Windows Service Manager) to execute and manage the Vault service in a production environment"}),"\n",(0,t.jsx)(e.li,{children:"For Linux systems, create a systemd service file to manage Vault (and Consul, if applicable)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"System configuration files"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Vault Service: ",(0,t.jsx)(e.a,{href:"https://github.com/btkrausen/hashicorp/blob/master/vault/config_files/vault.service",children:"vault.service"})]}),"\n",(0,t.jsxs)(e.li,{children:["Consul Server: ",(0,t.jsx)(e.a,{href:"https://github.com/btkrausen/hashicorp/blob/master/consul/consul.service",children:"vault.service"})]}),"\n",(0,t.jsxs)(e.li,{children:["Consul Client (running on the Vault node): ",(0,t.jsx)(e.a,{href:"https://github.com/btkrausen/hashicorp/blob/master/vault/config_files/consul-client.json",children:"vault.service"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Deployment architecture"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(9222).A+"",width:"349",height:"318"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Single node","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"No redundancy"}),"\n",(0,t.jsx)(e.li,{children:"No scalability"}),"\n",(0,t.jsx)(e.li,{children:"Not suitable for production use"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(767).A+"",width:"589",height:"320"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Multi-Node Vault cluster (with integrated storage)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(9300).A+"",width:"589",height:"396"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Multi-Node Vault cluster (with external storage backend)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Step-by-step manual installation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Download Vault"}),"\n",(0,t.jsx)(e.li,{children:"Unpackage Vault"}),"\n",(0,t.jsx)(e.li,{children:"Set the path"}),"\n",(0,t.jsx)(e.li,{children:"Add and customize configuration file"}),"\n",(0,t.jsx)(e.li,{children:"Create a systemd service file"}),"\n",(0,t.jsx)(e.li,{children:"Download Consul"}),"\n",(0,t.jsx)(e.li,{children:"Configure and join Consul cluster"}),"\n",(0,t.jsx)(e.li,{children:"Launch Vault service"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"configuring-the-consul-storage-backend",children:"Configuring the Consul Storage Backend"}),"\n",(0,t.jsx)(e.p,{children:"Key features"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Provides durable key/value (K/V) storage for Vault data"}),"\n",(0,t.jsx)(e.li,{children:"Allows independent scaling of the backend"}),"\n",(0,t.jsx)(e.li,{children:"Simplifies automation"}),"\n",(0,t.jsx)(e.li,{children:"Features built-in integration between Consul and Vault"}),"\n",(0,t.jsx)(e.li,{children:"Supports high availability"}),"\n",(0,t.jsx)(e.li,{children:"Operates as a distributed system"}),"\n",(0,t.jsx)(e.li,{children:"Includes built-in snapshots for data retention"}),"\n",(0,t.jsx)(e.li,{children:"Supported by HashiCorp"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Consul cluster configuration"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Deploy Consul across multiple nodes, configured as a cluster"}),"\n",(0,t.jsx)(e.li,{children:"Use an odd number of nodes (e.g., 3, 5, 7) to ensure a majority for leader election"}),"\n",(0,t.jsx)(e.li,{children:"Replicate all data across every node in the cluster"}),"\n",(0,t.jsx)(e.li,{children:"Conduct a leader election to designate one Consul node as the leader"}),"\n",(0,t.jsx)(e.li,{children:"The leader accepts new log entries and replicates them to all other nodes"}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"In a production environment, avoid using the Consul cluster for both Vault storage and other Consul functions"})}),"\n",(0,t.jsx)(e.p,{children:"Architecture diagram"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(429).A+"",width:"721",height:"418"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Consul storage backend communication"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(5058).A+"",width:"861",height:"416"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Visualization of Consul cluster"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Example configuration files"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Vault configuration file (with Consul storage backend)"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'storage "consul" {\n  address = "127.0.0.1:8500"\n  path    = "vault/"\n  token   = "1a2b3c4d-1234-abdc-1234-1a2b3c4d5e6a"\n}\n\nlistener "tcp" {\n  address                  = "0.0.0.0:8200"\n  cluster_address          = "0.0.0.0:8201"\n  tls_disable              = 0\n  tls_cert_file            = "/etc/vault.d/client.pem"\n  tls_key_file             = "/etc/vault.d/cert.key"\n  tls_disable_client_certs = "true"\n}\n\nseal "awskms" {\n  region     = "us-east-1"\n  kms_key_id = "12345678-abcd-1234-abcd-123456789101"\n  endpoint   = "example.kms.us-east-1.vpce.amazonaws.com"\n}\n\napi_addr     = "https://vault-us-east-1.example.com:8200"\ncluster_addr = "https://node-a-us-east-1.example.com:8201"\ncluster_name = "vault-prod-us-east-1"\nui           = true\nlog_level    = "INFO"\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Consul server configuration file in Consul node"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'{\n  "log_level": "INFO",\n  "server": true,\n  "key_file": "/etc/consul.d/cert.key",\n  "cert_file": "/etc/consul.d/client.pem",\n  "ca_file": "/etc/consul.d/chain.pem",\n  "verify_incoming": true,\n  "verify_outgoing": true,\n  "verify_server_hostname": true,\n  "ui": true,\n  "encrypt": "xxxxxxxxxxxxxx",\n  "leave_on_terminate": true,\n  "data_dir": "/opt/consul/data",\n  "datacenter": "us-east-1",\n  "client_addr": "0.0.0.0",\n  "bind_addr": "10.11.11.11",\n  "advertise_addr": "10.11.11.11",\n  "bootstrap_expect": 5,\n  "retry_join": ["provider=aws tag_key=Environment-Name tag_value=consul-cluster region=us-east-1"],\n  "enable_syslog": true,\n  "acl": {\n    "enabled": true,\n    "default_policy": "deny",\n    "down_policy": "extend-cache",\n    "tokens": {\n      "agent": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\n    }\n  },\n  "performance": {\n    "raft_multiplier": 1\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"configuring-the-integrated-storage-backend",children:"Configuring the Integrated Storage Backend"}),"\n",(0,t.jsx)(e.p,{children:"Key features"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Serves as Vault's internal storage option"}),"\n",(0,t.jsx)(e.li,{children:"Utilizes the Raft consensus protocol"}),"\n",(0,t.jsx)(e.li,{children:"Ensures all Vault nodes maintain a copy of Vault's data"}),"\n",(0,t.jsx)(e.li,{children:"Eliminates the network hop required by Consul"}),"\n",(0,t.jsx)(e.li,{children:"Supports high availability"}),"\n",(0,t.jsx)(e.li,{children:"Simplifies troubleshooting by focusing solely on Vault"}),"\n",(0,t.jsx)(e.li,{children:"Provides built-in snapshots for data retention"}),"\n",(0,t.jsx)(e.li,{children:"Supported by HashiCorp"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Integrated storage (Raft) configuration"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Integrated Storage, also known as Raft, enables Vault nodes to manage their own replicated storage within a cluster","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Define a local path to store replicatedltu data"}),"\n",(0,t.jsx)(e.li,{children:"Replicate all data across every node in the cluster"}),"\n",(0,t.jsx)(e.li,{children:"Remove the need to deploy and manage a separate Consul cluster"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Architecture diagram"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(9211).A+"",width:"597",height:"455"})}),"\n",(0,t.jsx)(e.p,{children:"Example Vault Server Configuration File"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'storage "raft" {\n  path    = "/opt/vault/data"\n  node_id = "node-a-us-east-1.example.com"\n  retry_join {\n    auto_join = "provider=aws region=us-east-1 tag_key=vault tag_value=us-east-1"\n  }\n}\n\nlistener "tcp" {\n  address                  = "0.0.0.0:8200"\n  cluster_address          = "0.0.0.0:8201"\n  tls_disable              = 0\n  tls_cert_file            = "/etc/vault.d/client.pem"\n  tls_key_file             = "/etc/vault.d/cert.key"\n  tls_disable_client_certs = "true"\n}\n\nseal "awskms" {\n  region     = "us-east-1"\n  kms_key_id = "12345678-abcd-1234-abcd-123456789101"\n  endpoint   = "example.kms.us-east-1.vpce.amazonaws.com"\n}\n\napi_addr     = "https://vault-us-east-1.example.com:8200"\ncluster_addr = "https://node-a-us-east-1.example.com:8201"\ncluster_name = "vault-prod-us-east-1"\nui           = true\nlog_level    = "INFO"\n'})}),"\n",(0,t.jsx)(e.p,{children:"Managing the cluster"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img",src:l(5392).A+"",width:"1179",height:"393"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Manually joining standby nodes"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"vault operator raft join https://active_node.example.com:8200\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Listing cluster members"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"vault operator raft list-peers\n---\nNode       Address            State     Voter\n----       -------            -----     -----\nvault_1    10.0.101.22:8201   leader    true\nvault_2    10.0.101.23:8201   follower  true\nvault_3    10.0.101.24:8201   follower  true\nvault_4    10.0.101.25:8201   follower  true\nvault_5    10.0.101.26:8201   follower  true\n"})}),"\n",(0,t.jsx)(e.h2,{id:"demo",children:"Demo"}),"\n",(0,t.jsx)(e.h3,{id:"installing-vault-using-packer",children:"Installing Vault Using Packer"}),"\n",(0,t.jsxs)(e.p,{children:["Refer to this ",(0,t.jsx)(e.a,{href:"https://github.com/btkrausen/hashicorp/tree/master/vault/packer",children:"btkrausen/vault/packer"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"packer validate vault.pkr.hcl\n\npacker build vault.pkr.hcl\n"})}),"\n",(0,t.jsx)(e.p,{children:"Launch built new AMI from AWS"}),"\n",(0,t.jsx)(e.p,{children:"SSH to Vault instance"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo unzip vault.zip\n\nls -l\n\nsudo mv vault /usr/local/bin\n\ncd /usr/local/bin\n\nls -l\n\nvault\n\nvault version\n"})}),"\n",(0,t.jsx)(e.h3,{id:"manually-installing-vault",children:"Manually Installing Vault"}),"\n",(0,t.jsx)(e.p,{children:"Using APT Repository"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Downloads HashiCorp's GPG key, converts it to binary, and saves it to /usr/share/keyrings/ for APT verification"}),"\n",(0,t.jsx)(e.li,{children:"Adds HashiCorp's APT repository to your system's sources, specifying architecture (e.g., arm64) and Ubuntu version (e.g., focal), signed by the GPG key"}),"\n",(0,t.jsx)(e.li,{children:"Updates the package list and installs the latest vault package from HashiCorp's repository"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# Install\nwget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg\n\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list\n\nsudo apt update && sudo apt install vault\n\n# Uninstall\nsudo apt remove vault\n\nsudo apt autoclean && sudo apt autoremove\n'})}),"\n",(0,t.jsx)(e.p,{children:"Install with binary"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"uname -m\n---\naarch64\n\ncurl -sLo /tmp/vault.zip https://releases.hashicorp.com/vault/1.19.0/vault_1.19.0_linux_arm64.zip\n\nunzip /tmp/vault.zip -d /tmp/\n\nmv /tmp/vault /usr/local/bin/\n\nchmod +x /usr/local/bin/vault\n\nvault --version\n"})}),"\n",(0,t.jsx)(e.h3,{id:"running-vault-dev-server-1",children:"Running Vault Dev Server"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'export VAULT_ADDR="http://127.0.0.1:8200"\n\nvault server -dev\n\nvault status\n\nvault secrets list\n\nvault kv put secret/vaultcourse/kyphan kyphan=kyphan1\n\nvault kv get secret/vaultcourse/kyphan\n'})}),"\n",(0,t.jsx)(e.h3,{id:"running-vault-in-production",children:"Running Vault in Production"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Step 1 - Binary\nmv /tmp/vault /usr/local/bin/\n\n# Step 2 - Service file\nsudo vim /etc/systemd/system/vault.service\n\n# Step 3 - Configuration file\nsudo vim /etc/vault.d/vault.hcl\n\n# Start service\nsudo systemctl start vault\n\nvault status\n\nsudo systemctl status vault\n\nsudo journalctl -u vault  \n"})}),"\n",(0,t.jsx)(e.h2,{id:"lab",children:"Lab"}),"\n",(0,t.jsx)(e.h3,{id:"running-vault-dev-server-2",children:"Running Vault Dev Server"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"vault version\n\ncat /etc/vault.d/vault.hcl\n\nvault status\n\nvault server -dev &\n\nexport VAULT_ADDR='http://127.0.0.1:8200'\n\necho \"<token>\" > /home/kyphan/vault-token\n\nvault status\n\nvault login <token>\n\nvault secrets list\n\nps -aux | grep vault\n\nkill -9 <pid>\n"})}),"\n",(0,t.jsx)(e.h3,{id:"running-vault-server",children:"Running Vault Server"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"vault version\n\ncat /etc/vault.d/vault.hcl\n\nls -lah /opt/vault/\n\njournalctl -u vault.service -b\n\nvim /lib/systemd/system/vault.service\n\nsudo vim /lib/systemd/system/vault.service\n---\nExecStart=/usr/bin/vault server -config=/etc/vault.d/vault.hcl\n\nsudo systemctl daemon-reload\n\nsudo systemctl start vault\n\nsudo systemctl status vault\n\necho 'export VAULT_ADDR=http://127.0.0.1:8200' >> /home/kyphan/.bashrc\n\nsource /home/kyphan/.bashrc\n\nsudo systemctl restart vault\n\nsudo systemctl stop vault\n"})}),"\n",(0,t.jsx)(e.h3,{id:"configuring-integrated-storage-manually",children:"Configuring Integrated Storage Manually"}),"\n",(0,t.jsx)(e.p,{children:"Later"}),"\n",(0,t.jsx)(e.h3,{id:"configuring-auto-unseal",children:"Configuring Auto Unseal"}),"\n",(0,t.jsx)(e.p,{children:"Later"})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},9222:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/10-9084a7c5816f77c57243d6e4a4f590af.png"},767:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/11-3ccf14290ac4312c37449fff364a2a15.png"},9300:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/12-27d4631f093dd7d33284ebd44a89a093.png"},429:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/13-aa818fdb3789348f1f8b9b553cd26e68.png"},5058:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/14-97b9ffbd990da89a6a47b88fa30a71f4.png"},9211:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/15-e338c1220f4ac60d623135c58c8c4e64.png"},5392:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/16-ad28444add3248fabac356a920c48a97.png"},8453:(n,e,l)=>{l.d(e,{R:()=>i,x:()=>r});var s=l(6540);const t={},a=s.createContext(t);function i(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);