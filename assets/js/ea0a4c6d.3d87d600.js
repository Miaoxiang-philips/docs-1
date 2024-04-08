"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[791],{5648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(5893),r=t(1151);const a={title:"High Availability External DB",weight:30},o=void 0,i={id:"datastore/ha",title:"High Availability External DB",description:"This section describes how to install a high-availability K3s cluster with an external database.",source:"@site/docs/datastore/ha.md",sourceDirName:"datastore",slug:"/datastore/ha",permalink:"/datastore/ha",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha.md",tags:[],version:"current",lastUpdatedAt:171259479e4,frontMatter:{title:"High Availability External DB",weight:30},sidebar:"mySidebar",previous:{title:"High Availability Embedded etcd",permalink:"/datastore/ha-embedded"},next:{title:"Cluster Load Balancer",permalink:"/datastore/cluster-loadbalancer"}},d={},l=[{value:"Installation Outline",id:"installation-outline",level:2},{value:"1. Create an External Datastore",id:"1-create-an-external-datastore",level:3},{value:"2. Launch Server Nodes",id:"2-launch-server-nodes",level:3},{value:"3. Optional: Join Additional Server Nodes",id:"3-optional-join-additional-server-nodes",level:3},{value:"4. Optional: Configure a Fixed Registration Address",id:"4-optional-configure-a-fixed-registration-address",level:3},{value:"5. Optional: Join Agent Nodes",id:"5-optional-join-agent-nodes",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This section describes how to install a high-availability K3s cluster with an external database."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To rapidly deploy large HA clusters, see ",(0,s.jsx)(n.a,{href:"/related-projects",children:"Related Projects"})]})}),"\n",(0,s.jsx)(n.p,{children:"Single server clusters can meet a variety of use cases, but for environments where uptime of the Kubernetes control plane is critical, you can run K3s in an HA configuration. An HA K3s cluster is composed of:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Two or more ",(0,s.jsx)(n.strong,{children:"server nodes"})," that will serve the Kubernetes API and run other control plane services"]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.strong,{children:"external datastore"})," (as opposed to the embedded SQLite datastore used in single-server setups)"]}),"\n",(0,s.jsxs)(n.li,{children:["Optional: Zero or more ",(0,s.jsx)(n.strong,{children:"agent nodes"})," that are designated to run your apps and services"]}),"\n",(0,s.jsxs)(n.li,{children:["Optional: A ",(0,s.jsx)(n.strong,{children:"fixed registration address"})," for agent nodes to register with the cluster"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more details on how these components work together, refer to the ",(0,s.jsx)(n.a,{href:"/architecture#high-availability-k3s",children:"architecture section."})]}),"\n",(0,s.jsx)(n.h2,{id:"installation-outline",children:"Installation Outline"}),"\n",(0,s.jsx)(n.p,{children:"Setting up an HA cluster requires the following steps:"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-an-external-datastore",children:"1. Create an External Datastore"}),"\n",(0,s.jsxs)(n.p,{children:["You will first need to create an external datastore for the cluster. See the ",(0,s.jsx)(n.a,{href:"/datastore/",children:"Cluster Datastore Options"})," documentation for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"2-launch-server-nodes",children:"2. Launch Server Nodes"}),"\n",(0,s.jsxs)(n.p,{children:["K3s requires two or more server nodes for this HA configuration. See the ",(0,s.jsx)(n.a,{href:"/installation/requirements",children:"Requirements"})," guide for minimum machine requirements."]}),"\n",(0,s.jsxs)(n.p,{children:["When running the ",(0,s.jsx)(n.code,{children:"k3s server"})," command on these nodes, you must set the ",(0,s.jsx)(n.code,{children:"datastore-endpoint"})," parameter so that K3s knows how to connect to the external datastore. The ",(0,s.jsx)(n.code,{children:"token"})," parameter can also be used to set a deterministic token when adding nodes. When empty, this token will be generated automatically for further use."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, a command like the following could be used to install the K3s server with a MySQL database as the external datastore and ",(0,s.jsx)(n.a,{href:"/cli/server#cluster-options",children:"set a token"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n  --tls-san=<FIXED_IP> # Optional, needed if using a fixed registration address\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The datastore endpoint format differs based on the database type. For details, refer to the section on ",(0,s.jsx)(n.a,{href:"/datastore/#datastore-endpoint-format-and-functionality",children:"datastore endpoint formats."})]}),"\n",(0,s.jsxs)(n.p,{children:["To configure TLS certificates when launching server nodes, refer to the ",(0,s.jsx)(n.a,{href:"/datastore/#external-datastore-configuration-parameters",children:"datastore configuration guide."})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The same installation options available to single-server installs are also available for high-availability installs. For more details, see the ",(0,s.jsx)(n.a,{href:"/installation/configuration",children:"Configuration Options"})," documentation."]})}),"\n",(0,s.jsxs)(n.p,{children:["By default, server nodes will be schedulable and thus your workloads can get launched on them. If you wish to have a dedicated control plane where no user workloads will run, you can use taints. The ",(0,s.jsx)(n.code,{children:"node-taint"})," parameter will allow you to configure nodes with taints, for example ",(0,s.jsx)(n.code,{children:"--node-taint CriticalAddonsOnly=true:NoExecute"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Once you've launched the ",(0,s.jsx)(n.code,{children:"k3s server"})," process on all server nodes, ensure that the cluster has come up properly with ",(0,s.jsx)(n.code,{children:"k3s kubectl get nodes"}),". You should see your server nodes in the Ready state."]}),"\n",(0,s.jsx)(n.h3,{id:"3-optional-join-additional-server-nodes",children:"3. Optional: Join Additional Server Nodes"}),"\n",(0,s.jsx)(n.p,{children:"The same example command in Step 2 can be used to join additional server nodes, where the token from the first node needs to be used."}),"\n",(0,s.jsxs)(n.p,{children:["If the first server node was started without the ",(0,s.jsx)(n.code,{children:"--token"})," CLI flag or ",(0,s.jsx)(n.code,{children:"K3S_TOKEN"})," variable, the token value can be retrieved from any server already joined to the cluster:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Additional server nodes can then be added ",(0,s.jsx)(n.a,{href:"/cli/server#cluster-options",children:"using the token"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})}),"\n",(0,s.jsx)(n.p,{children:"There are a few config flags that must be the same in all server nodes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Network related flags: ",(0,s.jsx)(n.code,{children:"--cluster-dns"}),", ",(0,s.jsx)(n.code,{children:"--cluster-domain"}),", ",(0,s.jsx)(n.code,{children:"--cluster-cidr"}),", ",(0,s.jsx)(n.code,{children:"--service-cidr"})]}),"\n",(0,s.jsxs)(n.li,{children:["Flags controlling the deployment of certain components: ",(0,s.jsx)(n.code,{children:"--disable-helm-controller"}),", ",(0,s.jsx)(n.code,{children:"--disable-kube-proxy"}),", ",(0,s.jsx)(n.code,{children:"--disable-network-policy"})," and any component passed to ",(0,s.jsx)(n.code,{children:"--disable"})]}),"\n",(0,s.jsxs)(n.li,{children:["Feature related flags: ",(0,s.jsx)(n.code,{children:"--secrets-encryption"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Ensure that you retain a copy of this token as it is required when restoring from backup and adding nodes. Previously, K3s did not enforce the use of a token when using external SQL datastores."})}),"\n",(0,s.jsx)(n.h3,{id:"4-optional-configure-a-fixed-registration-address",children:"4. Optional: Configure a Fixed Registration Address"}),"\n",(0,s.jsx)(n.p,{children:"Agent nodes need a URL to register against. This can be the IP or hostname of any server node, but in many cases those may change over time. For example, if running your cluster in a cloud that supports scaling groups, nodes may be created and destroyed over time, changing to different IPs from the initial set of server nodes. It would be best to have a stable endpoint in front of the server nodes that will not change over time. This endpoint can be set up using any number approaches, such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A layer-4 (TCP) load balancer"}),"\n",(0,s.jsx)(n.li,{children:"Round-robin DNS"}),"\n",(0,s.jsx)(n.li,{children:"Virtual or elastic IP addresses"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/datastore/cluster-loadbalancer",children:"Cluster Loadbalancer"})," for example configurations."]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint can also be used for accessing the Kubernetes API. So you can, for example, modify your ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"})," file to point to it instead of a specific node."]}),"\n",(0,s.jsxs)(n.p,{children:["To avoid certificate errors in such a configuration, you should configure the server with the ",(0,s.jsx)(n.code,{children:"--tls-san YOUR_IP_OR_HOSTNAME_HERE"})," option. This option adds an additional hostname or IP as a Subject Alternative Name in the TLS cert, and it can be specified multiple times if you would like to access via both the IP and the hostname."]}),"\n",(0,s.jsx)(n.h3,{id:"5-optional-join-agent-nodes",children:"5. Optional: Join Agent Nodes"}),"\n",(0,s.jsx)(n.p,{children:"Because K3s server nodes are schedulable by default, agent nodes are not required for a HA K3s cluster. However, you may wish to have dedicated agent nodes to run your apps and services."}),"\n",(0,s.jsx)(n.p,{children:"Joining agent nodes in an HA cluster is the same as joining agent nodes in a single server cluster. You just need to specify the URL the agent should register to (either one of the server IPs or a fixed registration address) and the token it should use."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"K3S_TOKEN=SECRET k3s agent --server https://server-or-fixed-registration-address:6443\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(7294);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);