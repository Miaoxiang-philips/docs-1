"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7563],{8984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(5893),r=t(1151);const i={title:"Requirements"},d=void 0,l={id:"installation/requirements",title:"Requirements",description:"K3s is very lightweight, but has some minimum requirements as outlined below.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/requirements.md",sourceDirName:"installation",slug:"/installation/requirements",permalink:"/kr/installation/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/requirements.md",tags:[],version:"current",lastUpdatedAt:1718296555e3,frontMatter:{title:"Requirements"},sidebar:"mySidebar",previous:{title:"Installation",permalink:"/kr/installation/"},next:{title:"Configuration Options",permalink:"/kr/installation/configuration"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Operating Systems",id:"operating-systems",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Disks",id:"disks",level:4},{value:"Networking",id:"networking",level:2},{value:"Inbound Rules for K3s Nodes",id:"inbound-rules-for-k3s-nodes",level:3},{value:"Large Clusters",id:"large-clusters",level:2},{value:"CPU and Memory",id:"cpu-and-memory",level:3},{value:"Disks",id:"disks-1",level:3},{value:"Network",id:"network",level:3},{value:"Database",id:"database",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TabItem:t,Tabs:i}=n;return t||u("TabItem",!0),i||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"K3s is very lightweight, but has some minimum requirements as outlined below."}),"\n",(0,s.jsx)(n.p,{children:"Whether you're configuring K3s to run in a container or as a native Linux service, each node running K3s should meet the following minimum requirements. These requirements are baseline for K3s and its packaged components, and do not include resources consumed by the workload itself."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Two nodes cannot have the same hostname."}),"\n",(0,s.jsxs)(n.p,{children:["If multiple nodes will have the same hostname, or if hostnames may be reused by an automated provisioning system, use the ",(0,s.jsx)(n.code,{children:"--with-node-id"})," option to append a random suffix for each node, or devise a unique name to pass with ",(0,s.jsx)(n.code,{children:"--node-name"})," or ",(0,s.jsx)(n.code,{children:"$K3S_NODE_NAME"})," for each node you add to the cluster."]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:"K3s is available for the following architectures:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"x86_64"}),"\n",(0,s.jsx)(n.li,{children:"armhf"}),"\n",(0,s.jsx)(n.li,{children:"arm64/aarch64"}),"\n",(0,s.jsx)(n.li,{children:"s390x"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"ARM64 Page Size",type:"warning",children:(0,s.jsxs)(n.p,{children:["Prior to May 2023 releases (v1.24.14+k3s1, v1.25.10+k3s1, v1.26.5+k3s1, v1.27.2+k3s1), on ",(0,s.jsx)(n.code,{children:"aarch64/arm64"})," systems, the kernel must use 4k pages. ",(0,s.jsx)(n.strong,{children:"RHEL9"}),", ",(0,s.jsx)(n.strong,{children:"Ubuntu"}),", ",(0,s.jsx)(n.strong,{children:"Raspberry PI OS"}),", and ",(0,s.jsx)(n.strong,{children:"SLES"})," all meet this requirement."]})}),"\n",(0,s.jsx)(n.h2,{id:"operating-systems",children:"Operating Systems"}),"\n",(0,s.jsx)(n.p,{children:"K3s is expected to work on most modern Linux systems."}),"\n",(0,s.jsx)(n.p,{children:"Some OSs have additional setup requirements:"}),"\n",(0,s.jsxs)(i,{queryString:"os",children:[(0,s.jsxs)(t,{value:"rhel",label:"Red Hat Enterprise Linux / CentOS / Fedora",children:[(0,s.jsx)(n.p,{children:"It is recommended to turn off firewalld:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl disable firewalld --now\n"})}),(0,s.jsx)(n.p,{children:"If you wish to keep firewalld enabled, by default, the following rules are required:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --permanent --add-port=6443/tcp #apiserver\nfirewall-cmd --permanent --zone=trusted --add-source=10.42.0.0/16 #pods\nfirewall-cmd --permanent --zone=trusted --add-source=10.43.0.0/16 #services\nfirewall-cmd --reload\n"})}),(0,s.jsxs)(n.p,{children:["Additional ports may need to be opened depending on your setup. See ",(0,s.jsx)(n.a,{href:"#inbound-rules-for-k3s-nodes",children:"Inbound Rules"})," for more information. If you change the default CIDR for pods or services, you will need to update the firewall rules accordingly."]}),(0,s.jsx)(n.p,{children:"If enabled, it is required to disable nm-cloud-setup and reboot the node:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl disable nm-cloud-setup.service nm-cloud-setup.timer\nreboot\n"})})]}),(0,s.jsxs)(t,{value:"debian",label:"Ubuntu / Debian",children:[(0,s.jsxs)(n.p,{children:["Older Debian release may suffer from a known iptables bug. See ",(0,s.jsx)(n.a,{href:"/kr/known-issues#iptables",children:"Known Issues"}),"."]}),(0,s.jsx)(n.p,{children:"It is recommended to turn off ufw (uncomplicated firewall):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ufw disable\n"})}),(0,s.jsx)(n.p,{children:"If you wish to keep ufw enabled, by default, the following rules are required:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ufw allow 6443/tcp #apiserver\nufw allow from 10.42.0.0/16 to any #pods\nufw allow from 10.43.0.0/16 to any #services\n"})}),(0,s.jsxs)(n.p,{children:["Additional ports may need to be opened depending on your setup. See ",(0,s.jsx)(n.a,{href:"#inbound-rules-for-k3s-nodes",children:"Inbound Rules"})," for more information. If you change the default CIDR for pods or services, you will need to update the firewall rules accordingly."]})]}),(0,s.jsxs)(t,{value:"pi",label:"Raspberry Pi",children:[(0,s.jsxs)(n.p,{children:["Raspberry Pi OS is Debian based, and may suffer from a known iptables bug. See ",(0,s.jsx)(n.a,{href:"/kr/known-issues#iptables",children:"Known Issues"}),"."]}),(0,s.jsxs)(n.p,{children:["Standard Raspberry Pi OS installations do not start with ",(0,s.jsx)(n.code,{children:"cgroups"})," enabled. ",(0,s.jsx)(n.strong,{children:"K3S"})," needs ",(0,s.jsx)(n.code,{children:"cgroups"})," to start the systemd service. ",(0,s.jsx)(n.code,{children:"cgroups"}),"can be enabled by appending ",(0,s.jsx)(n.code,{children:"cgroup_memory=1 cgroup_enable=memory"})," to ",(0,s.jsx)(n.code,{children:"/boot/cmdline.txt"}),"."]}),(0,s.jsx)(n.p,{children:"Example cmdline.txt:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"console=serial0,115200 console=tty1 root=PARTUUID=58b06195-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait cgroup_memory=1 cgroup_enable=memory\n"})}),(0,s.jsx)(n.p,{children:"Starting with Ubuntu 21.10, vxlan support on Raspberry Pi has been moved into a separate kernel module."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install linux-modules-extra-raspi\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on which OSs were tested with Rancher managed K3s clusters, refer to the ",(0,s.jsx)(n.a,{href:"https://rancher.com/support-maintenance-terms/",children:"Rancher support and maintenance terms."})]}),"\n",(0,s.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(n.p,{children:"Hardware requirements scale based on the size of your deployments. Minimum recommendations are outlined here."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Spec"}),(0,s.jsx)(n.th,{children:"Minimum"}),(0,s.jsx)(n.th,{children:"Recommended"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPU"}),(0,s.jsx)(n.td,{children:"1 core"}),(0,s.jsx)(n.td,{children:"2 cores"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RAM"}),(0,s.jsx)(n.td,{children:"512 MB"}),(0,s.jsx)(n.td,{children:"1 GB"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/kr/reference/resource-profiling",children:"Resource Profiling"})," captures the results of tests to determine minimum resource requirements for the K3s agent, the K3s server with a workload, and the K3s server with one agent. It also contains analysis about what has the biggest impact on K3s server and agent utilization, and how the cluster datastore can be protected from interference from agents and workloads."]}),"\n",(0,s.jsx)(n.admonition,{title:"Raspberry Pi and embedded etcd",type:"info",children:(0,s.jsx)(n.p,{children:"If deploying K3s with embedded etcd on a Raspberry Pi, it is recommended that you use an external SSD. etcd is write intensive, and SD cards cannot handle the IO load."})}),"\n",(0,s.jsx)(n.h4,{id:"disks",children:"Disks"}),"\n",(0,s.jsx)(n.p,{children:"K3s performance depends on the performance of the database. To ensure optimal speed, we recommend using an SSD when possible. Disk performance will vary on ARM devices utilizing an SD card or eMMC."}),"\n",(0,s.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,s.jsx)(n.p,{children:"The K3s server needs port 6443 to be accessible by all nodes."}),"\n",(0,s.jsx)(n.p,{children:"The nodes need to be able to reach other nodes over UDP port 8472 when using the Flannel VXLAN backend, or over UDP port 51820 (and 51821 if IPv6 is used) when using the Flannel WireGuard backend. The node should not listen on any other port. K3s uses reverse tunneling such that the nodes make outbound connections to the server and all kubelet traffic runs through that tunnel. However, if you do not use Flannel and provide your own custom CNI, then the ports needed by Flannel are not needed by K3s."}),"\n",(0,s.jsx)(n.p,{children:"If you wish to utilize the metrics server, all nodes must be accessible to each other on port 10250."}),"\n",(0,s.jsx)(n.p,{children:"If you plan on achieving high availability with embedded etcd, server nodes must be accessible to each other on ports 2379 and 2380."}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"tip",children:(0,s.jsx)(n.p,{children:"The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472."})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Flannel relies on the ",(0,s.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/main/bridge/",children:"Bridge CNI plugin"})," to create a L2 network that switches traffic. Rogue pods with ",(0,s.jsx)(n.code,{children:"NET_RAW"})," capabilities can abuse that L2 network to launch attacks such as ",(0,s.jsx)(n.a,{href:"https://static.sched.com/hosted_files/kccncna19/72/ARP%20DNS%20spoof.pdf",children:"ARP spoofing"}),". Therefore, as documented in the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"Kubernetes docs"}),", please set a restricted profile that disables ",(0,s.jsx)(n.code,{children:"NET_RAW"})," on non-trustable pods."]})}),"\n",(0,s.jsx)(n.h3,{id:"inbound-rules-for-k3s-nodes",children:"Inbound Rules for K3s Nodes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Port"}),(0,s.jsx)(n.th,{children:"Source"}),(0,s.jsx)(n.th,{children:"Destination"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"2379-2380"}),(0,s.jsx)(n.td,{children:"Servers"}),(0,s.jsx)(n.td,{children:"Servers"}),(0,s.jsx)(n.td,{children:"Required only for HA with embedded etcd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"6443"}),(0,s.jsx)(n.td,{children:"Agents"}),(0,s.jsx)(n.td,{children:"Servers"}),(0,s.jsx)(n.td,{children:"K3s supervisor and Kubernetes API Server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"8472"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Required only for Flannel VXLAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"10250"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Kubelet metrics"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"51820"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Required only for Flannel Wireguard with IPv4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"51821"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Required only for Flannel Wireguard with IPv6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"5001"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Required only for embedded distributed registry (Spegel)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"6443"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Required only for embedded distributed registry (Spegel)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Typically, all outbound traffic is allowed."}),"\n",(0,s.jsx)(n.p,{children:"Additional changes to the firewall may be required depending on the OS used."}),"\n",(0,s.jsx)(n.h2,{id:"large-clusters",children:"Large Clusters"}),"\n",(0,s.jsx)(n.p,{children:"Hardware requirements are based on the size of your K3s cluster. For production and large clusters, we recommend using a high-availability setup with an external database. The following options are recommended for the external database in production:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MySQL"}),"\n",(0,s.jsx)(n.li,{children:"PostgreSQL"}),"\n",(0,s.jsx)(n.li,{children:"etcd"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cpu-and-memory",children:"CPU and Memory"}),"\n",(0,s.jsx)(n.p,{children:"The following are the minimum CPU and memory requirements for nodes in a high-availability K3s server:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Deployment Size"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Nodes"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"VCPUS"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"RAM"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Small"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 10"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Medium"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 100"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"8 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Large"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 250"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X-Large"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 500"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"16"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"32 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"XX-Large"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"500+"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"32"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"64 GB"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"disks-1",children:"Disks"}),"\n",(0,s.jsx)(n.p,{children:"The cluster performance depends on database performance. To ensure optimal speed, we recommend always using SSD disks to back your K3s cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS."}),"\n",(0,s.jsx)(n.h3,{id:"network",children:"Network"}),"\n",(0,s.jsxs)(n.p,{children:["You should consider increasing the subnet size for the cluster CIDR so that you don't run out of IPs for the pods. You can do that by passing the ",(0,s.jsx)(n.code,{children:"--cluster-cidr"})," option to K3s server upon starting."]}),"\n",(0,s.jsx)(n.h3,{id:"database",children:"Database"}),"\n",(0,s.jsxs)(n.p,{children:["K3s supports different databases including MySQL, PostgreSQL, MariaDB, and etcd.  See ",(0,s.jsx)(n.a,{href:"/kr/datastore/",children:"Cluster Datastore"})," for more info."]}),"\n",(0,s.jsx)(n.p,{children:"The following is a sizing guide for the database resources you need to run large clusters:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Deployment Size"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Nodes"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"VCPUS"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"RAM"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Small"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 10"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Medium"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 100"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"8 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Large"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 250"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"X-Large"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Up to 500"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"32 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"XX-Large"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"500+"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"16"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"64 GB"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var s=t(7294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);