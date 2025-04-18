"use strict";(self.webpackChunkkyphan=self.webpackChunkkyphan||[]).push([[5598],{6109:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"master/linux - ongoing/understand and use essential tools","title":"understand and use essential tool","description":"Command Line Basics","source":"@site/assets/docs/master/linux - ongoing/1-understand and use essential tools.md","sourceDirName":"master/linux - ongoing","slug":"/master/linux - ongoing/understand and use essential tools","permalink":"/master/linux - ongoing/understand and use essential tools","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1744979749000,"sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"main","permalink":"/master/kubernetes/kcsa/main"},"next":{"title":"create simple shell scripts","permalink":"/master/linux - ongoing/create simple shell scripts"}}');var r=s(4848),t=s(8453);const l={},o="understand and use essential tool",a={},d=[{value:"Command Line Basics",id:"command-line-basics",level:2},{value:"Logging in and Switching Users",id:"logging-in-and-switching-users",level:2},{value:"Using System Documentation",id:"using-system-documentation",level:2},{value:"Additional System Documentation",id:"additional-system-documentation",level:2},{value:"Working With Files and Directories",id:"working-with-files-and-directories",level:2},{value:"Working With Hard Links",id:"working-with-hard-links",level:2},{value:"Working With Soft Links",id:"working-with-soft-links",level:2},{value:"List, set, and change standard ugo/rwx permissions -- Continue",id:"list-set-and-change-standard-ugorwx-permissions----continue",level:2},{value:"Lab",id:"lab",level:2},{value:"Logging in and System Documentation",id:"logging-in-and-system-documentation",level:3},{value:"Files, Directories, Hard and Soft Links",id:"files-directories-hard-and-soft-links",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"understand-and-use-essential-tool",children:"understand and use essential tool"})}),"\n",(0,r.jsx)(n.h2,{id:"command-line-basics",children:"Command Line Basics"}),"\n",(0,r.jsx)(n.p,{children:"Login methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Local text-mode console: Log in directly on the computer using a text-based interface"}),"\n",(0,r.jsx)(n.li,{children:"Local graphical-mode console: Log in directly on the computer using a graphical interface, like a desktop"}),"\n",(0,r.jsx)(n.li,{children:"Remote text-mode login: Log in to a remote computer over a network using a text-based interface (e.g., via SSH or Telnet)"}),"\n",(0,r.jsx)(n.li,{children:"Remote graphical-mode login: Log in to a remote computer with a graphical desktop"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Old terms"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Console: The physical or main interface for interacting with a computer"}),"\n",(0,r.jsx)(n.li,{children:"Virtual terminal: A software-based text interface, like a command-line window"}),"\n",(0,r.jsx)(n.li,{children:"Terminal emulator: A program that mimics a text-based console on your screen"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"SSH"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Computer (SSH Client) \u2192 Server (SSH daemon)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh aaron@192.168.0.17\n---\naaron@192.168.0.17's password:\n"})}),"\n",(0,r.jsx)(n.h2,{id:"logging-in-and-switching-users",children:"Logging in and Switching Users"}),"\n",(0,r.jsx)(n.p,{children:"Security features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Access controls: Define who access resources and what they can do"}),"\n",(0,r.jsx)(n.li,{children:"PAM (Pluggable Authentication Modules): Handle authentication, authorization, and session management"}),"\n",(0,r.jsx)(n.li,{children:"Network security: Protect systems from network-based threats"}),"\n",(0,r.jsx)(n.li,{children:"SSH hardening: Secure the secure shell service for remote access"}),"\n",(0,r.jsx)(n.li,{children:"SELinux: Enforce stricter security policies"}),"\n",(0,r.jsx)(n.li,{children:"Others"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Account types"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Account Type"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Examples"}),(0,r.jsx)(n.th,{children:"Attributes"}),(0,r.jsx)(n.th,{children:"Typical UID Range"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User Account"}),(0,r.jsx)(n.td,{children:"Standard accounts for interactive login by humans"}),(0,r.jsx)(n.td,{children:"bob, michael, dave"}),(0,r.jsx)(n.td,{children:"Username, Password (stored securely), User ID (UID), Group ID (GID), Home Directory, Login Shell"}),(0,r.jsx)(n.td,{children:"Often starts at 1000 (>= 1000)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Superuser Account"}),(0,r.jsx)(n.td,{children:"Full administrative access to the system"}),(0,r.jsx)(n.td,{children:"root"}),(0,r.jsx)(n.td,{children:"Username: root, UID: Always 0"}),(0,r.jsx)(n.td,{children:"UID is 0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System Account"}),(0,r.jsx)(n.td,{children:"Used by system services or daemons running in the background"}),(0,r.jsx)(n.td,{children:"sshd, mail, daemon"}),(0,r.jsx)(n.td,{children:"Username, User ID (UID), Group ID (GID), Home Directory, typically no login capabilities"}),(0,r.jsx)(n.td,{children:"Reserved range, often below 1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Service Account"}),(0,r.jsx)(n.td,{children:"Dedicated accounts for specific applications or services to run under"}),(0,r.jsx)(n.td,{children:"nginx, postgres"}),(0,r.jsx)(n.td,{children:"Username, User ID (UID), Group ID (GID), Home Directory, service-specific permissions"}),(0,r.jsx)(n.td,{children:"Often within system account range or user range"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Groups"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A collection of users, primarily used to manage permissions efficiently. Users can belong to multiple groups"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Essential commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"User"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Display user account database\ncat /etc/passwd\n---\nroot:*:0:0:System Administrator:/var/root:/bin/sh\ndaemon:*:1:1:System Services:/var/root:/usr/bin/false\n\n# Display user and group identity\nid kyphan\n---\nuid=1001(kyphan) gid=1001(kyphan) groups=1001(kyphan),27(sudo)\n\n# Display currently logged-in users\nwho\n---\nkyphan   tty1         2025-04-16 09:30\nkyphan   pts/0        2025-04-16 10:15 (192.168.1.10)\n\n# Display history of last logged-in users\nlast\n---\nkyphan   pts/0        192.168.1.10     Wed Apr 16 10:15   still logged in\nkyphan   tty1                          Wed Apr 16 09:30   still logged in\nreboot   system boot  5.15.0-generic   Wed Apr 16 09:25   - 10:30  (01:05)\n\n# Search for information and home directory\ngrep -i kyphan /etc/passwd\n---\nkyphan:x:1001:1001::/home/kyphan:/bin/bash\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Group"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Display group database\ncat /etc/group\n---\nroot:x:0:\nsudo:x:27:kyphan\nkyphan:x:1001:\n"})}),"\n",(0,r.jsx)(n.p,{children:"Switch users"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"su"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Switches to another user account. If no user is specified, it defaults to root"}),"\n",(0,r.jsxs)(n.li,{children:["Requires the target user's password with ",(0,r.jsx)(n.code,{children:"su -"})]}),"\n",(0,r.jsx)(n.li,{children:"Directly using su to become root for extended periods or sharing the root password is often discouraged for security reasons"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Switch to the root user\nsu -\n---\nPassword:\n\n# Execute a single command as root\nsu -c "whoami"\n---\nPassword:\nroot\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sudo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows permitted users to execute specific commands as another user (typically root) without needing the target user's password"}),"\n",(0,r.jsx)(n.li,{children:"It requires the user's own password for authentication"}),"\n",(0,r.jsx)(n.li,{children:"Provides better accountability and allows granting specific, limited administrative privileges instead of full root access"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Execute a command with root privileges\nsudo apt-get update\n---\n[sudo] password for kyphan:\n\n# Display the sudoers configuration file\ncat /etc/sudoers\n---\nroot    ALL=(ALL:ALL) ALL\n%admin ALL=(ALL) ALL\n%sudo   ALL=(ALL:ALL) ALL\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["no-login shell","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Assigns a shell like ",(0,r.jsx)(n.code,{children:"/sbin/login"}),", ",(0,r.jsx)(n.code,{children:"/usr/sbin/nologin"}),", or ",(0,r.jsx)(n.code,{children:"/bin/false"})," to an account (often system accounts or even root on hardened systems) prevents users from logging in directly using that account"]}),"\n",(0,r.jsx)(n.li,{children:"Enhances security by forcing administrative tasks through mechanisms like sudo or requiring a switch from a standard user account"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Check the login shell for the root user\ngrep '^root:' /etc/passwd\n---\nroot:x:0:0:root:/root:/bin/bash\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-system-documentation",children:"Using System Documentation"}),"\n",(0,r.jsx)(n.p,{children:"Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--help"}),": Displays a brief summary of their usage and options"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls --help\n\n# Pager\njournalctl --help\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"man"}),": Displays a comprehensive manual pages"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"man journalctl\nman man\nman 1 printf\nman 3 printf\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"apropos"}),": Searches the names and short descriptions of all manual pages for a specific keyword"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apropos director\napropos -s 1,8 director\n\n# Update the manual page index database\nsudo mandb\n"})}),"\n",(0,r.jsx)(n.h2,{id:"additional-system-documentation",children:"Additional System Documentation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"info"}),": Access documentation in the GNU Info format"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"info bash\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/usr/share/doc"}),": Contains supplementary documentation provided by installed packages"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cd /usr/share/doc/bash\n\nless INTRO\n\ngrep "command" INTRO\n'})}),"\n",(0,r.jsx)(n.h2,{id:"working-with-files-and-directories",children:"Working With Files and Directories"}),"\n",(0,r.jsx)(n.p,{children:"List files and directories"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ls"}),": Lists the contents of a directory"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls\nls -a\nls -l /var/log\nls -lah\n"})}),"\n",(0,r.jsx)(n.p,{children:"Filesystem tree"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Current working directory"}),"\n",(0,r.jsx)(n.li,{children:"Relative path"}),"\n",(0,r.jsx)(n.li,{children:"Absolute path"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /var/log\ncd -\ncd ..\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create files"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"touch"}),": Creates an empty file if it doesn't exist, or updates the access and modification timestamps of an existing file"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"touch /home/kyphan/text.txt\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create directories"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"mkdir"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p /home/kyphan/folder\n"})}),"\n",(0,r.jsx)(n.p,{children:"Copy files and directories"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cp"}),": Copies files or entire directory structures"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp hello.text folder/\ncp hello.txt folder/hello_copy.txt\n\n# If hello does not exist, it copies only the contents, if not, it copies the entire folder/ to be hello/folder/\ncp -r folder/ hello/\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Move files"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mv"}),": Moves files/directories to a different location or renames them"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mv abc.txt hello/\nmv abc.txt abcd.txt\nmv folder/ new_folder/\n"})}),"\n",(0,r.jsx)(n.p,{children:"Delete files and directories"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mv"}),": Removes files and directories"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm abc.txt\n\nrm -r folder\n"})}),"\n",(0,r.jsx)(n.h2,{id:"working-with-hard-links",children:"Working With Hard Links"}),"\n",(0,r.jsx)(n.p,{children:"Inodes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"An inode (index node) is a data structure on Unix-like filesystems"}),"\n",(0,r.jsx)(n.li,{children:"Each file and directory on the filesystem has a unique inode"}),"\n",(0,r.jsx)(n.li,{children:"It stores metadata about the file or directory, excluding the filename and the actual file content"}),"\n",(0,r.jsx)(n.li,{children:"Key metadata includes file type, permissions, owner, file size, timestamps, link count, pointers, etc."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Create the file and write text into it\necho "Picture of Milo the dog" > Pictures/family_dog.jpg\n\n# Display detailed status information\nstat Pictures/family_dog.jpg\n---\nFile: Pictures/family_dog.jpg\nSize: 49 Blocks: 8 IO Block: 4096 regular file\nDevice: fd00h/64768d Inode: 52946177 Links: 1\nAccess: (0640/-rw-r-----) Uid: ( 1000/ aaron) Gid: ( 1005/ family)\n...\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["How it works","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When accessing a path like Pictures/family_dog.jpg, the system locates the Pictures directory"}),"\n",(0,r.jsx)(n.li,{children:"It searches the directory's contents for the entry family_dog.jpg"}),"\n",(0,r.jsx)(n.li,{children:"This entry contains the corresponding inode number"}),"\n",(0,r.jsx)(n.li,{children:"The system uses the inode number to find the inode structure itself"}),"\n",(0,r.jsx)(n.li,{children:"From the inode, it reads metadata (like permissions) and gets the pointers to the data blocks to retrieve the file's content"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Relationship","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A directory entry links a filename to an inode number"}),"\n",(0,r.jsx)(n.li,{children:"The inode stores metadata and points to the data blocks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:s(7055).A+"",width:"473",height:"640"})}),"\n",(0,r.jsx)(n.p,{children:"Hard links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A hard link is simply another directory entry (another filename, potentially in a different directory) that points to the exact same inode as the original file"}),"\n",(0,r.jsxs)(n.li,{children:["Benefit","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows multiple filenames to refer to the same file data without duplicating the data itself, thus saving storage space"}),"\n",(0,r.jsx)(n.li,{children:"Instead of having two separate copies of a large file, you have two names pointing to one set of data blocks via the shared inode"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# ln path_to_target_file path_to_link_file\n\n# Recursively copy the contents of Aaron's Pictures directory to Jane's\ncp \u2013r /home/aaron/Pictures/ /home/jane/Pictures/\n\n# Create a hard link: Jane's path now points to the same inode as Aaron's path\nln /home/aaron/Pictures/family_dog.jpg /home/jane/Pictures/family_dog.jpg\n\n# Display detailed status information\nstat Pictures/family_dog.jpg\n---\nFile: Pictures/family_dog.jpg\nSize: 49 Blocks: 8 IO Block: 4096 regular file\nDevice: fd00h/64768d Inode: 52946177 Links: 2\nAccess: (0640/-rw-r-----) Uid: ( 1000/ aaron) Gid: ( 1005/ family)\n...\n\n# The link count for inode 52946177 decreases from 2 to 1\nrm /home/aaron/Pictures/family_dog.jpg\n\n# The link count for inode 52946177 decreases from 1 to 0\nrm /home/jane/Pictures/family_dog.jpg\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Data deletion","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The actual file data (disk blocks) associated with an inode is only marked for deletion (and eventually overwritten) when its link count reaches zero"}),"\n",(0,r.jsx)(n.li,{children:"Removing a hard link (rm) just deletes that specific directory entry and decrements the inode's link count"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Limitiations and considerations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Only hardlink to files, not folders"}),"\n",(0,r.jsx)(n.li,{children:"Only hardlink to files on the same filesystem"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Add existing user 'aaron' to the supplementary group 'family'\nuseradd -a -G family aaron\n\n# Add existing user 'jane' to the supplementary group 'family'\nuseradd -a -G family jane\n\n# Change file permissions: owner=read/write, group=read/write, others=none\nchmod 660 /home/aaron/Pictures/family_dog.jpg\n"})}),"\n",(0,r.jsx)(n.h2,{id:"working-with-soft-links",children:"Working With Soft Links"}),"\n",(0,r.jsx)(n.p,{children:"Soft (symbolic) links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Unlike a hard link which points directly to an inode, a symbolic link's content is simply the pathname (text string) of another file or directory (the target)"}),"\n",(0,r.jsx)(n.li,{children:"It is used to create convenient access points, redirect paths, or link across different filesystems or partitions"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:s(4596).A+"",width:"323",height:"496"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# ln -s path_to_target_file path_to_link_file\n\n# Create a symbolic link named 'family_dog_shortcut.jpg' and points to the absolute path '/home/aaron/Pictures/family_dog.jpg'\nln \u2013s /home/aaron/Pictures/family_dog.jpg family_dog_shortcut.jpg\n\nls -l\n---\nlrwxrwxrwx. 1 aaron aaron family_dog_shortcut.jpg -> /home/aaron/Pictures..\n\nreadlink family_dog_shortcut.jpg\n---\n/home/aaron/Pictures/family_dog.jpg\n\necho \u201cTest\u201d >> fstab_shortcut\n---\nbash: fstab_shortcut: Permission denied\n\nls -l\n---\nlrwxrwxrwx. 1 aaron aaron family_dog_shortcut.jpg -> /home/aaron/Pictures..\n\nln \u2013s Pictures/family_dog.jpg relative_picture_shortcut\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the target file or directory is deleted, moved, or renamed, the symbolic link is not automatically updated or removed"}),"\n",(0,r.jsx)(n.li,{children:'It continues to point to the original path, which now leads nowhere. Such links are called "broken" or "dangling" links - "No such file or directory" error'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Limitiations and considerations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Softlink to files and folders"}),"\n",(0,r.jsx)(n.li,{children:"Softlink to files on different filesystem as well"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"list-set-and-change-standard-ugorwx-permissions----continue",children:"List, set, and change standard ugo/rwx permissions -- Continue"}),"\n",(0,r.jsx)(n.h2,{id:"lab",children:"Lab"}),"\n",(0,r.jsx)(n.h3,{id:"logging-in-and-system-documentation",children:"Logging in and System Documentation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'man ssh | grep version\nssh -V\n\napropos hostname\nhostnamectl\n\nmandb\n\nman ssh | grep verbose\nssh -v alex@localhost\n\nls -la /home/bob/data\n\nssh bob@dev-host01\ntouch myfile\n\napropos ssh\nsudo mandb\n\napropos "NFS mounts"\ntouch nfsmount.conf\n'})}),"\n",(0,r.jsx)(n.h3,{id:"files-directories-hard-and-soft-links",children:"Files, Directories, Hard and Soft Links"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p /home/bob/lfcs\n\ntouch /home/bob/lfcs/lfcs.txt\n\ncp -r /tmp/Invoice/ /home/bob/\n\ncp -a /home/bob/myfile.txt /home/bob/data/\n\ncp -r /home/bob/lfcs /home/bob/old-data\n\nrm /home/bob/lfcs/lfcs.txt\n\nmv /home/bob/lfcs/ /home/bob/new-data/\n\nrm -rf /home/bob/lfcs\n\nln -s /tmp /home/bob/link_to_tmp\n\nln /opt/hlink /home/bob/hlink\n\nmv /home/bob/new_file /home/bob/old_file\n\nmkdir -p /tmp/1/2/3/4/5/6/7/8/9\n\nls --full-time\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7055:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/1-813d5546d483d062f70e9d29eaa5b9aa.png"},4596:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2-a8ad70384abd649429c89c7227d96f67.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);