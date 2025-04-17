"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[4368],{7807:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"how to/upgrade-tls","title":"upgrade tls","description":"Information","source":"@site/assets/docs/how to/upgrade-tls.md","sourceDirName":"how to","slug":"/how to/upgrade-tls","permalink":"/how to/upgrade-tls","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744849790000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"upgrade jenkins","permalink":"/how to/upgrade-jenkins"},"next":{"title":"upgrade tomcat","permalink":"/how to/upgrade-tomcat"}}');var i=s(4848),a=s(8453);const r={},c="upgrade tls",t={},d=[{value:"Information",id:"information",level:2},{value:"Setup TLS 1.0",id:"setup-tls-10",level:2},{value:"Backup TLS",id:"backup-tls",level:2},{value:"Disable TLS 1.0 and Enable TLS 1.2",id:"disable-tls-10-and-enable-tls-12",level:2},{value:"Rollback TLS",id:"rollback-tls",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"upgrade-tls",children:"upgrade tls"})}),"\n",(0,i.jsx)(e.h2,{id:"information",children:"Information"}),"\n",(0,i.jsx)(e.p,{children:"Prerequisites"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"System: Ubuntu Server with root or sudo access and network connectivity"}),"\n",(0,i.jsx)(e.li,{children:"Tools: Nginx, OpenSSL"}),"\n",(0,i.jsx)(e.li,{children:"Server IP: 192.168.64.9"}),"\n",(0,i.jsx)(e.li,{children:"Firewall: Ensure port 443 (HTTPS) is allowed"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Technology"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"In-place upgrade"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"setup-tls-10",children:"Setup TLS 1.0"}),"\n",(0,i.jsx)(e.p,{children:"Update system packages"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade -y\n"})}),"\n",(0,i.jsx)(e.p,{children:"Install, enable, and start Nginx"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install nginx -y\n\nsudo systemctl enable nginx\nsudo systemctl start nginx\nsudo systemctl status nginx\n"})}),"\n",(0,i.jsx)(e.p,{children:"Configure firewall"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo ufw allow 'Nginx Full'\nsudo ufw status\n"})}),"\n",(0,i.jsx)(e.p,{children:"Create SSL directory"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo mkdir -p /etc/nginx/ssl\n"})}),"\n",(0,i.jsx)(e.p,{children:"Generate the certificate and private key"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\\n  -keyout /etc/nginx/ssl/nginx-selfsigned.key \\\n  -out /etc/nginx/ssl/nginx-selfsigned.crt \\\n  -subj "/C=US/ST=California/L=SanFrancisco/O=MyCompany/OU=IT/CN=192.168.64.9"\n'})}),"\n",(0,i.jsx)(e.p,{children:"Generate Diffie-Hellman parameters"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048\n"})}),"\n",(0,i.jsx)(e.p,{children:"Modify the default Nginx site configuration file"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo rm -f /etc/nginx/sites-enabled/default\n\nsudo vim /etc/nginx/sites-available/default\n---\nserver {\n  listen 80 default_server;\n  listen [::]:80 default_server;\n    server_name _;\n\n  root /var/www/html;\n  index index.html index.htm index.nginx-debian.html;\n  location / {\n    try_files $uri $uri/ =404;\n  }\n}\n\nserver {\n  listen 443 ssl default_server;\n  listen [::]:443 ssl default_server;\n  server_name 192.168.64.9;\n  \n  ssl_certificate /etc/nginx/ssl/nginx-selfsigned.crt;\n  ssl_certificate_key /etc/nginx/ssl/nginx-selfsigned.key;\n  ssl_dhparam /etc/nginx/ssl/dhparam.pem;\n  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;\n  ssl_prefer_server_ciphers off;\n\n  root /var/www/html;\n  index index.html index.htm index.nginx-debian.html;\n  \n  location / {\n    try_files $uri $uri/ =404;\n  }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"Link the configure files"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default\n"})}),"\n",(0,i.jsx)(e.p,{children:"Test Nginx configuration syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,i.jsx)(e.p,{children:"Modify OpenSSL configuration file to enable lower TLS version"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"openssl version -d\n\nsudo vim /etc/ssl/openssl.cnf\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"At the very top of the file, adding"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"openssl_conf = default_conf\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"At the very bottom of the file, adding"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"[ default_conf ]\n\nssl_conf = ssl_sect\n\n[ssl_sect]\n\nsystem_default = system_default_sect\n\n[system_default_sect]\nMinProtocol = TLSv1\nCipherString = DEFAULT:@SECLEVEL=1\n"})}),"\n",(0,i.jsx)(e.p,{children:"Restart Nginx to apply OpenSSL changes"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,i.jsx)(e.p,{children:"Verify TLS 1.0"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"openssl s_client -connect 192.168.64.9:443 -tls1\n"})}),"\n",(0,i.jsx)(e.h2,{id:"backup-tls",children:"Backup TLS"}),"\n",(0,i.jsx)(e.p,{children:"Create a timestamped backup directory"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'TIMESTAMP=$(date +%Y%m%d%H%M%S)\nBACKUP_DIR="/home/ubuntu/config_backups/tls1_setup_$TIMESTAMP"\nmkdir -p "$BACKUP_DIR/nginx"\nmkdir -p "$BACKUP_DIR/ssl_configs"\nmkdir -p "$BACKUP_DIR/nginx_certs"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Backup Nginx site configuration"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo cp /etc/nginx/sites-available/default "$BACKUP_DIR/nginx/"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Backup OpenSSL configuration file"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo cp /etc/ssl/openssl.cnf "$BACKUP_DIR/ssl_configs/"\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Backup Nginx SSL certificates files"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo cp -a /etc/nginx/ssl/* "$BACKUP_DIR/nginx_certs/"\n'})}),"\n",(0,i.jsx)(e.h2,{id:"disable-tls-10-and-enable-tls-12",children:"Disable TLS 1.0 and Enable TLS 1.2"}),"\n",(0,i.jsx)(e.p,{children:"Modify OpenSSL configuration"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo vim /etc/ssl/openssl.cnf\n---\nMinProtocol = TLSv1.2\n"})}),"\n",(0,i.jsx)(e.p,{children:"Modify Nginx site configuration"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo vim /etc/nginx/sites-available/default\n---\nssl_protocols TLSv1.2 TLSv1.3;\nssl_prefer_server_ciphers on;\n"})}),"\n",(0,i.jsx)(e.p,{children:"Test Nginx configuration syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,i.jsx)(e.p,{children:"Restart Nginx to apply all changes"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,i.jsx)(e.p,{children:"Verify TLS 1.0 and 1.2"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"openssl s_client -connect 192.168.64.9:443 -tls1    # Not working\n\nopenssl s_client -connect 192.168.64.9:443 -tls1_2  # Working\n"})}),"\n",(0,i.jsx)(e.h2,{id:"rollback-tls",children:"Rollback TLS"}),"\n",(0,i.jsx)(e.p,{children:"Identify backup directory path"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'export BACKUP_DIR_PATH="/home/ubuntu/config_backups/tls1_setup_20250415223857"\n'})}),"\n",(0,i.jsx)(e.p,{children:"Stop Nginx service"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo systemctl stop nginx\n"})}),"\n",(0,i.jsx)(e.p,{children:"Restore configurations from backup"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Restore Nginx site configuration"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo cp "$BACKUP_DIR_PATH/nginx/default" /etc/nginx/sites-available/default\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Restore OpenSSL configuration"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo cp "$BACKUP_DIR_PATH/ssl_configs/openssl.cnf" /etc/ssl/openssl.cnf\n'})}),"\n",(0,i.jsx)(e.p,{children:"Test Nginx configuration syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,i.jsx)(e.p,{children:"Restart Nginx to apply all changes"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,i.jsx)(e.p,{children:"Verify TLS 1.0 and 1.2"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"openssl s_client -connect 192.168.64.9:443 -tls1    # Working\n\nopenssl s_client -connect 192.168.64.9:443 -tls1_2  # Working\n"})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var l=s(6540);const i={},a=l.createContext(i);function r(n){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);