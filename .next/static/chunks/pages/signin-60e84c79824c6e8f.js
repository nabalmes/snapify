(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{968:function(A,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n(4813)}])},3300:function(A,e){"use strict";e.Z={src:"/_next/static/media/logo.5c3355f5.svg",height:29,width:130}},3765:function(A,e,n){"use strict";n.d(e,{Z:function(){return l}});var t=n(5893),s=n(5675),r=n.n(s),i=n(3300),a={src:"/_next/static/media/background.70607f17.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKAJ/8QAGhAAAgIDAAAAAAAAAAAAAAAAAgMEEQABgv/aAAgBAQABPwAGMj7iGLCtsey6z//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5},o=n(1664),c=n.n(o);function l(A){let{children:e}=A;return(0,t.jsxs)("header",{className:"min-h-screen flex",children:[(0,t.jsxs)("section",{className:"md:mx-[5%] mx-auto w-[90%] max-w-[400px] md:min-w-[320px]",children:[(0,t.jsx)(c(),{href:"/",children:(0,t.jsx)(r(),{src:i.Z,alt:"",className:"mb-16 mt-8",priority:!0})}),e]}),(0,t.jsx)("div",{className:"grow hidden md:block",children:(0,t.jsx)(r(),{src:a,alt:"",className:"w-full h-full object-cover"})})]})}},7050:function(A,e,n){"use strict";n.d(e,{I:function(){return r},U:function(){return s}});var t=n(5893);function s(A){return(0,t.jsxs)("div",{className:"flex flex-col gap-1 mb-4",children:[(0,t.jsx)("label",{htmlFor:A.id,className:"text-sm font-semibold",children:A.label}),(0,t.jsx)(r,{...A})]})}function r(A){return(0,t.jsx)("input",{...A,className:"border text-sm text-gray-600 bg-gray-50 shadow-sm border-gray-300 px-6 py-2 rounded-md focus:ring-1 focus:ring-blue-600 transition-all outline-none"})}},4813:function(A,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return h},default:function(){return x}});var t=n(5893),s=n(1664),r=n.n(s),i=n(3765),a=n(6501),o=n(3299),c=n(7294),l=n(1163),u=n(7050),d=n(9008),g=n.n(d),h=!0;function x(){let A=(0,l.useRouter)(),[e,n]=(0,c.useState)({}),s=async n=>{try{n.preventDefault(),a.ZP.loading("Loading...");let t=await (0,o.signIn)("credentials",{redirect:!1,...e});a.ZP.dismiss();let{error:s,ok:r}=t;r?A.push("/"):a.ZP.error(s)}catch(i){console.error(i.message)}};return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(g(),{children:(0,t.jsx)("title",{children:"Sign in"})}),(0,t.jsx)(a.x7,{}),(0,t.jsxs)("form",{onSubmit:s,className:"flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"text-xl mb-4 font-bold",children:"Sign in page"}),[{id:"contact",type:"text",placeholder:"Email or phone",name:"contact",pattern:"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}|[0-9]*$",title:"Enter your email or phone number only",required:!0,onChange:A=>n({...e,contact:A.target.value})},{id:"password",type:"password",placeholder:"Password",name:"password",required:!0,onChange:A=>n({...e,password:A.target.value})}].map(A=>(0,t.jsx)(u.I,{...A},A.id)),(0,t.jsxs)("p",{className:"text-gray-700 text-sm mb-2",children:["Don't have an account? Goto"," ",(0,t.jsx)(r(),{href:"/signup",className:"text-blue-600 focus:underline outline-none",children:"sign up"})," ","page."]}),(0,t.jsx)("button",{type:"submit",className:"text-white bg-blue-600 font-medium rounded-full py-3 px-6 text-sm focus:ring hover:bg-blue-700 transition-colors outline-none",children:"Sign in"})]})]})}},9008:function(A,e,n){A.exports=n(3121)}},function(A){A.O(0,[765,774,888,179],function(){return A(A.s=968)}),_N_E=A.O()}]);