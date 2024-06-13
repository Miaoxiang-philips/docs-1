"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[107],{2531:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var s=n(5893),t=n(1151);const r={title:"\ud074\ub7ec\uc2a4\ud130 \uc811\uadfc"},l=void 0,o={id:"cluster-access",title:"\ud074\ub7ec\uc2a4\ud130 \uc811\uadfc",description:"/etc/rancher/k3s/k3s.yaml\uc5d0 \uc800\uc7a5\ub41c kubeconfig \ud30c\uc77c\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uad6c\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. kubectl \ub610\ub294 helm\uacfc \uac19\uc740 \uc5c5\uc2a4\ud2b8\ub9bc Kubernetes \uba85\ub839\uc904 \ub3c4\uad6c\ub97c \uc124\uce58\ud55c \uacbd\uc6b0 \uc62c\ubc14\ub978 kubeconfig \uacbd\ub85c\ub85c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 kubeconfig \ud658\uacbd \ubcc0\uc218\ub97c \ub0b4\ubcf4\ub0b4\uac70\ub098 --kubeconfig \uba85\ub839\uc904 \ud50c\ub798\uadf8\ub97c \ud638\ucd9c\ud558\uc5ec \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798 \uc608\uc2dc\ub97c \ucc38\uace0\ud558\uc138\uc694.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cluster-access.md",sourceDirName:".",slug:"/cluster-access",permalink:"/kr/cluster-access",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cluster-access.md",tags:[],version:"current",lastUpdatedAt:1718296555e3,frontMatter:{title:"\ud074\ub7ec\uc2a4\ud130 \uc811\uadfc"},sidebar:"mySidebar",previous:{title:"\uc544\ud0a4\ud14d\ucc98",permalink:"/kr/architecture"},next:{title:"\ubcfc\ub968\uacfc \uc800\uc7a5\uc18c",permalink:"/kr/storage"}},a={},i=[{value:"\uc678\ubd80\uc5d0\uc11c kubectl\ub85c \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc811\uadfc\ud558\uae30",id:"\uc678\ubd80\uc5d0\uc11c-kubectl\ub85c-\ud074\ub7ec\uc2a4\ud130\uc5d0-\uc811\uadfc\ud558\uae30",level:3}];function u(e){const c={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"\uc5d0 \uc800\uc7a5\ub41c kubeconfig \ud30c\uc77c\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uad6c\uc131\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. kubectl \ub610\ub294 helm\uacfc \uac19\uc740 \uc5c5\uc2a4\ud2b8\ub9bc Kubernetes \uba85\ub839\uc904 \ub3c4\uad6c\ub97c \uc124\uce58\ud55c \uacbd\uc6b0 \uc62c\ubc14\ub978 kubeconfig \uacbd\ub85c\ub85c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 ",(0,s.jsx)(c.code,{children:"kubeconfig"})," \ud658\uacbd \ubcc0\uc218\ub97c \ub0b4\ubcf4\ub0b4\uac70\ub098 ",(0,s.jsx)(c.code,{children:"--kubeconfig"})," \uba85\ub839\uc904 \ud50c\ub798\uadf8\ub97c \ud638\ucd9c\ud558\uc5ec \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798 \uc608\uc2dc\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,s.jsx)(c.p,{children:"KUBECONFIG \ud658\uacbd \ubcc0\uc218\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n"})}),"\n",(0,s.jsx)(c.p,{children:"\ub610\ub294 \uba85\ub839\uc5d0 kubeconfig \ud30c\uc77c\uc758 \uc704\uce58\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/k3s/k3s.yaml ls --all-namespaces\n"})}),"\n",(0,s.jsx)(c.h3,{id:"\uc678\ubd80\uc5d0\uc11c-kubectl\ub85c-\ud074\ub7ec\uc2a4\ud130\uc5d0-\uc811\uadfc\ud558\uae30",children:"\uc678\ubd80\uc5d0\uc11c kubectl\ub85c \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc811\uadfc\ud558\uae30"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"\ud30c\uc77c\uc744 \ud074\ub7ec\uc2a4\ud130 \uc678\ubd80\uc5d0 \uc704\uce58\ud55c \uba38\uc2e0\uc758 ",(0,s.jsx)(c.code,{children:"~/.kube/config"}),"\ub85c \ubcf5\uc0ac\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,s.jsx)(c.code,{children:"server"})," \ud544\ub4dc\uc758 \uac12\uc744 K3s \uc11c\ubc84\uc758 IP \ub610\ub294 \uc774\ub984\uc73c\ub85c \ubc14\uafc9\ub2c8\ub2e4. \uc774\uc81c ",(0,s.jsx)(c.code,{children:"kubectl"}),"\uc774 K3s \ud074\ub7ec\uc2a4\ud130\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function d(e={}){const{wrapper:c}={...(0,t.a)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,c,n)=>{n.d(c,{Z:()=>o,a:()=>l});var s=n(7294);const t={},r=s.createContext(t);function l(e){const c=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:c},e.children)}}}]);