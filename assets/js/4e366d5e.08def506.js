"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3595],{882:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(5893),n=s(1151);const a={title:"Upgrades"},i=void 0,o={id:"upgrades/upgrades",title:"Upgrades",description:"Upgrading your K3s cluster",source:"@site/docs/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/upgrades/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:1718296555e3,frontMatter:{title:"Upgrades"},sidebar:"mySidebar",previous:{title:"Cluster Load Balancer",permalink:"/datastore/cluster-loadbalancer"},next:{title:"Stopping K3s",permalink:"/upgrades/killall"}},l={},d=[{value:"Upgrading your K3s cluster",id:"upgrading-your-k3s-cluster",level:3},{value:"Version-specific caveats",id:"version-specific-caveats",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"upgrading-your-k3s-cluster",children:"Upgrading your K3s cluster"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/upgrades/manual",children:"Manual Upgrades"})," describes several techniques for upgrading your cluster manually. It can also be used as a basis for upgrading through third-party Infrastructure-as-Code tools like ",(0,t.jsx)(r.a,{href:"https://www.terraform.io/",children:"Terraform"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/upgrades/automated",children:"Automated Upgrades"})," describes how to perform Kubernetes-native automated upgrades using Rancher's ",(0,t.jsx)(r.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"version-specific-caveats",children:"Version-specific caveats"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Traefik:"})," If Traefik is not disabled, K3s versions 1.20 and earlier will install Traefik v1, while K3s versions 1.21 and later will install Traefik v2, if v1 is not already present. To upgrade from the older Traefik v1 to Traefik v2, please refer to the ",(0,t.jsx)(r.a,{href:"https://doc.traefik.io/traefik/migration/v1-to-v2/",children:"Traefik documentation"})," and use the ",(0,t.jsx)(r.a,{href:"https://github.com/traefik/traefik-migration-tool",children:"migration tool"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"K3s bootstrap data:"})," If you are using K3s in an HA configuration with an external SQL datastore, and your server (control-plane) nodes were not started with the ",(0,t.jsx)(r.code,{children:"--token"})," CLI flag, you will no longer be able to add additional K3s servers to the cluster without specifying the token. Ensure that you retain a copy of this token, as it is required when restoring from backup. Previously, K3s did not enforce the use of a token when using external SQL datastores."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The affected versions are <= v1.19.12+k3s1, v1.20.8+k3s1, v1.21.2+k3s1; the patched versions are v1.19.13+k3s1, v1.20.9+k3s1, v1.21.3+k3s1."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"You may retrieve the token value from any server already joined to the cluster as follows:"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>i});var t=s(7294);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);