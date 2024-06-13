"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[836],{9665:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=s(5893),r=s(1151);const t={title:"FAQ"},o=void 0,a={id:"faq",title:"FAQ",description:"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1718296555e3,frontMatter:{title:"FAQ"},sidebar:"mySidebar",previous:{title:"Known Issues",permalink:"/known-issues"}},l={},d=[{value:"Is K3s a suitable replacement for Kubernetes?",id:"is-k3s-a-suitable-replacement-for-kubernetes",level:3},{value:"How can I use my own Ingress instead of Traefik?",id:"how-can-i-use-my-own-ingress-instead-of-traefik",level:3},{value:"Does K3s support Windows?",id:"does-k3s-support-windows",level:3},{value:"What exactly are Servers and Agents?",id:"what-exactly-are-servers-and-agents",level:3},{value:"How can I build from source?",id:"how-can-i-build-from-source",level:3},{value:"Where are the K3s logs?",id:"where-are-the-k3s-logs",level:3},{value:"Can I run K3s in Docker?",id:"can-i-run-k3s-in-docker",level:3},{value:"What is the difference between K3s Server and Agent Tokens?",id:"what-is-the-difference-between-k3s-server-and-agent-tokens",level:3},{value:"How compatible are different versions of K3s?",id:"how-compatible-are-different-versions-of-k3s",level:3},{value:"I&#39;m having an issue, where can I get help?",id:"im-having-an-issue-where-can-i-get-help",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s."}),"\n",(0,i.jsx)(n.h3,{id:"is-k3s-a-suitable-replacement-for-kubernetes",children:"Is K3s a suitable replacement for Kubernetes?"}),"\n",(0,i.jsxs)(n.p,{children:["K3s is a CNCF-certified Kubernetes distribution, and can do everything required of a standard Kubernetes cluster. It is just a more lightweight version. See the ",(0,i.jsx)(n.a,{href:"/",children:"main"})," docs page for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"how-can-i-use-my-own-ingress-instead-of-traefik",children:"How can I use my own Ingress instead of Traefik?"}),"\n",(0,i.jsxs)(n.p,{children:["Simply start K3s server with ",(0,i.jsx)(n.code,{children:"--disable=traefik"})," and deploy your ingress."]}),"\n",(0,i.jsx)(n.h3,{id:"does-k3s-support-windows",children:"Does K3s support Windows?"}),"\n",(0,i.jsx)(n.p,{children:"At this time K3s does not natively support Windows, however we are open to the idea in the future."}),"\n",(0,i.jsx)(n.h3,{id:"what-exactly-are-servers-and-agents",children:"What exactly are Servers and Agents?"}),"\n",(0,i.jsxs)(n.p,{children:["For a breakdown on the components that make up a server and agent, see the ",(0,i.jsx)(n.a,{href:"/architecture",children:"Architecture page"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"how-can-i-build-from-source",children:"How can I build from source?"}),"\n",(0,i.jsxs)(n.p,{children:["Please reference the K3s ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/blob/master/BUILDING.md",children:"BUILDING.md"})," with instructions."]}),"\n",(0,i.jsx)(n.h3,{id:"where-are-the-k3s-logs",children:"Where are the K3s logs?"}),"\n",(0,i.jsx)(n.p,{children:"The location of K3s logs will vary depending on how you run K3s and the node's OS."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When run from the command line, logs are sent to stdout and stderr."}),"\n",(0,i.jsxs)(n.li,{children:["When running under openrc, logs will be created at ",(0,i.jsx)(n.code,{children:"/var/log/k3s.log"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When running under Systemd, logs will be sent to Journald and can be viewed using ",(0,i.jsx)(n.code,{children:"journalctl -u k3s"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Pod logs can be found at ",(0,i.jsx)(n.code,{children:"/var/log/pods"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Containerd logs can be found at ",(0,i.jsx)(n.code,{children:"/var/lib/rancher/k3s/agent/containerd/containerd.log"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can generate more detailed logs by using the ",(0,i.jsx)(n.code,{children:"--debug"})," flag when starting K3s (or ",(0,i.jsx)(n.code,{children:"debug: true"})," in the configuration file)."]}),"\n",(0,i.jsxs)(n.p,{children:["Kubernetes uses a logging framework known as ",(0,i.jsx)(n.code,{children:"klog"}),", which uses a single logging configuration for all components within a process.\nSince K3s runs all Kubernetes components within a single process, it is not possible to configure different log levels or destinations for individual Kubernetes components.\nUse of the ",(0,i.jsx)(n.code,{children:"-v=<level>"})," or ",(0,i.jsx)(n.code,{children:"--vmodule=<module>=<level>"})," component args will likely not have the desired effect."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/advanced#additional-logging-sources",children:"Additional Logging Sources"})," for even more log options."]}),"\n",(0,i.jsx)(n.h3,{id:"can-i-run-k3s-in-docker",children:"Can I run K3s in Docker?"}),"\n",(0,i.jsxs)(n.p,{children:["Yes, there are multiple ways to run K3s in Docker. See ",(0,i.jsx)(n.a,{href:"/advanced#running-k3s-in-docker",children:"Advanced Options"})," for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"what-is-the-difference-between-k3s-server-and-agent-tokens",children:"What is the difference between K3s Server and Agent Tokens?"}),"\n",(0,i.jsxs)(n.p,{children:["For more information on managing K3s join tokens, see the ",(0,i.jsxs)(n.a,{href:"/cli/token",children:[(0,i.jsx)(n.code,{children:"k3s token"})," command documentation"]}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"how-compatible-are-different-versions-of-k3s",children:"How compatible are different versions of K3s?"}),"\n",(0,i.jsxs)(n.p,{children:["In general, the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/",children:"Kubernetes version skew policy"})," applies."]}),"\n",(0,i.jsx)(n.p,{children:"In short, servers can be newer than agents, but agents cannot be newer than servers."}),"\n",(0,i.jsx)(n.h3,{id:"im-having-an-issue-where-can-i-get-help",children:"I'm having an issue, where can I get help?"}),"\n",(0,i.jsx)(n.p,{children:"If you are having an issue with deploying K3s, you should:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"/known-issues",children:"Known Issues"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check that you have resolved any ",(0,i.jsx)(n.a,{href:"/installation/requirements#operating-systems",children:"Additional OS Preparation"}),". Run ",(0,i.jsx)(n.code,{children:"k3s check-config"})," and ensure that it passes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Search the K3s ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/issues",children:"Issues"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/discussions",children:"Discussions"})," for one that matches your problem."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Join the ",(0,i.jsx)(n.a,{href:"https://slack.rancher.io/",children:"Rancher Slack"})," K3s channel to get help."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Submit a ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/issues/new/choose",children:"New Issue"})," on the K3s Github describing your setup and the issue you are experiencing."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);