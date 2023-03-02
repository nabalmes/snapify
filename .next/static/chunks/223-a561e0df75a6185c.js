"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[223],{3300:function(e,t){t.Z={src:"/_next/static/media/logo.5c3355f5.svg",height:29,width:130}},8745:function(e,t,s){s.d(t,{Z:function(){return P}});var a=s(5893),n=s(7294),l=s(1664),r=s.n(l),i=s(1163),c=s(9583),o=s(6893);function x(e){let{className:t,trending:s,setDisplayMenu:l}=e,x=(0,n.useRef)(),u=(0,i.useRouter)(),[d,m]=(0,n.useState)(!0);(0,n.useEffect)(()=>{m(!1)},[s]);let h=e=>{e.preventDefault(),u.push("/search?value=".concat(x.current.value)),l(!1)};return(0,a.jsxs)("section",{className:t+" rounded-xl lg:mb-0",children:[(0,a.jsxs)("form",{onSubmit:h,className:"border justify-between flex items-center rounded-lg px-3 border-gray-300 focus-within:ring-[2px] focus-within:ring-blue-600 transition overflow-hidden mb-8",children:[(0,a.jsx)("input",{ref:x,type:"text",size:"1",placeholder:"Search user, topics, etc.",className:"p-3 w-full outline-none text-sm bg-transparent"}),(0,a.jsx)("button",{type:"submit",className:"rounded-md flex w-10 hover:bg-gray-100 aspect-square",children:(0,a.jsx)(o.jRj,{className:"text-blue-600 m-auto text-lg"})})]}),s.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,a.jsx)(c.NcA,{className:"text-blue-600 text-xl"}),(0,a.jsx)("h2",{className:"font-bold mt-1 md:text-lg",children:"Hot topics"})]}),(0,a.jsxs)("ul",{children:[d&&(0,a.jsx)("p",{children:"Loading..."}),s.map(e=>(0,a.jsx)("li",{className:"mb-2 group",children:(0,a.jsxs)(r(),{href:"/search?value=".concat(e.name),children:[(0,a.jsxs)("p",{className:"font-semibold group-hover:text-blue-600 transition-colors text-gray-700 text-sm md:text-[15px]",children:["#",e.name]}),(0,a.jsxs)("span",{className:"text-gray-500 text-sm",children:[e.quantity," topic",e.quantity>1&&"s"]})]})},e.name))]})]})]})}var u=s(3854),d=s(3299),m=s(5675),h=s.n(m),p=s(3300),g=s(8193),f=s(3750);function b(e){let{session:t}=e,s={link:"group flex items-center gap-2",icon:"text-xl text-gray-400 transition-colors group-hover:text-blue-600",text:"text-gray-600 transition-colors group-hover:text-blue-600 font-medium text-sm md:text-[15px]"};return(0,a.jsx)("ul",{className:"flex flex-col items-start gap-2",children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsxs)(r(),{href:"/user/".concat(t.username),className:s.link,children:[(0,a.jsx)(g.nf1,{className:s.icon}),(0,a.jsx)("span",{className:s.text,children:"Profile"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(r(),{href:"/settings",className:s.link,children:[(0,a.jsx)(f.FBj,{className:s.icon}),(0,a.jsx)("span",{className:s.text,children:"Settings"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{type:"button",onClick:()=>(0,d.signOut)(),className:s.link,children:[(0,a.jsx)(g.Mqe,{className:s.icon}),(0,a.jsx)("span",{className:s.text,children:"Sign out"})]})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/signup",className:s.link,children:(0,a.jsx)("span",{className:s.text,children:"Register"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/signin",className:s.link,children:(0,a.jsx)("span",{className:s.text,children:"Sign in"})})})]})})}function j(e){let{className:t,setDisplayNew:s,trending:n,setDisplayMenu:l}=e,{data:c}=(0,d.useSession)(),o=(0,i.useRouter)();return(0,a.jsxs)("aside",{className:t+" flex-col gap-12 flex",children:[(0,a.jsx)(r(),{href:"/",children:(0,a.jsx)(h(),{src:p.Z,alt:"Snapify logo",className:"w-[120px]",width:"50",height:"50",priority:!0})}),(0,a.jsx)(x,{className:"xl:hidden",trending:n,setDisplayMenu:l}),(0,a.jsx)(b,{session:c}),(0,a.jsxs)("button",{type:"button",onClick:()=>{if(!c)return o.push("/signin");s(e=>!e)},className:"bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-600 transition-colors focus:ring outline-none p-4 flex items-center gap-2 justify-center rounded-xl shadow-sm",children:[(0,a.jsx)(u.bnh,{className:"mb-[2px] text-xl text-white/[.6]"}),(0,a.jsx)("span",{className:"font-semibold text-sm md:text-[15px]",children:"Post a snap"})]})]})}var N=s(1649),y=s(6501),v=s(8945);function w(e){let{index:t,image:s,handleRemoveImage:n}=e;return(0,a.jsxs)("div",{className:"w-[60px] aspect-square rounded-lg overflow-hidden border border-gray-300 relative",children:[(0,a.jsx)("button",{type:"button",onClick:()=>n(t),className:"opacity-0 hover:opacity-100 transition-opacity absolute inset-0 flex bg-black/[.25]",children:(0,a.jsx)(N.QAE,{className:"text-white m-auto text-2xl"})}),(0,a.jsx)(h(),{src:URL.createObjectURL(s),alt:s.name,width:"60",height:"60",className:"h-full w-full object-contain"})]},t)}function k(e){let{className:t,setDisplayNew:s}=e,l=(0,n.useRef)(null),r=(0,n.useRef)(null),i=(0,n.useRef)(null),[c,o]=(0,n.useState)(!1),[x,u]=(0,n.useState)([]),{handleSubmit:d,handleAddImage:m,handleRemoveImage:h}=function(e){let{captionRef:t,topicsRef:s,imageFiles:a,setImageFiles:n,setLoading:l,maximumFile:r,setDisplayNew:i}=e,c=async e=>{try{if(e.preventDefault(),!a.length){y.ZP.error("Please select one or more files");return}y.ZP.loading("Posting..."),l(!0);let{value:r}=t.current,{value:c}=s.current,o=c.trim()?c.split(" ").join("").split(","):[],x=await Promise.all(a.map(e=>new Promise(t=>{let s="",a=new FileReader;a.readAsDataURL(e),a.onload=()=>{s=a.result,t(s)}}))),u=await v.Z.post("/api/post/",{caption:r,topics:o,images:x});l(!1),y.ZP.dismiss();let{success:d,message:m}=u.data;d?(y.ZP.success(m),t.current.value="",s.current.value="",n([]),i(!1)):y.ZP.error(m)}catch(h){y.ZP.error("There was an error"),console.error(h.message)}},o=e=>{let{files:t}=e.currentTarget,s=a.length+t.length>r;if(s){y.ZP.error("Maximum of ".concat(r," images only"));return}n([...a,...t])},x=e=>{let t=a.filter((t,s)=>s!==e);n([...t])};return{handleSubmit:c,handleAddImage:o,handleRemoveImage:x}}({captionRef:r,topicsRef:i,imageFiles:x,setImageFiles:u,setLoading:o,maximumFile:5,setDisplayNew:s});return(0,n.useEffect)(()=>{l.current.value=""},[x]),(0,a.jsx)("div",{className:t+" z-40 fixed inset-0 bg-black/[.35] items-center justify-center py-6",children:(0,a.jsx)("main",{className:"max-h-full p-7 bg-white w-[90%] max-w-[500px] rounded-lg overflow-auto ",children:(0,a.jsxs)("form",{onSubmit:d,children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsx)("h2",{className:"font-bold text-xl tracking-tight",children:"Post snap"}),(0,a.jsx)("button",{type:"button",onClick:()=>s(e=>!e),className:"border border-gray-300 p-2 rounded-lg hover:bg-gray-100 active:bg-transparent transition-colors",children:(0,a.jsx)(N.QAE,{className:"text-gray-500 text-lg"})})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 mb-4",children:[(0,a.jsx)("label",{htmlFor:"caption",className:"text-gray-700 text-sm",children:"Caption (max. 500 characters)"}),(0,a.jsx)("textarea",{ref:r,name:"caption",id:"caption",rows:"4",maxLength:"500",title:"Must be 500 characters only",placeholder:"Enter you caption",className:"border border-gray-300 focus:ring-1 focus:ring-blue-600 transition outline-none p-3 rounded-md text-sm"})]}),(0,a.jsxs)("div",{className:"flex flex-col mb-4 gap-1",children:[(0,a.jsxs)("label",{htmlFor:"images",className:"text-gray-700 text-sm",children:["Attach image (max. ",5,")"]}),(0,a.jsx)("div",{className:"flex item-center gap-1 flex-wrap",children:0!==x&&x.map((e,t)=>(0,a.jsx)(w,{index:t,image:e,handleRemoveImage:h},t))}),(0,a.jsxs)("div",{className:" border relative focus-within:ring-1 focus-within:ring-blue-600 transition border-gray-300 rounded-md items-center justify-center h-[150px] ".concat(x.length<5?"flex":"hidden"),children:[(0,a.jsx)("input",{type:"file",name:"images",accept:"image/*",multiple:!0,ref:l,onChange:m,className:"absolute inset-0 opacity-0 outline-none "}),(0,a.jsxs)("div",{children:[(0,a.jsx)(g.Lfi,{className:"text-blue-600 mx-auto"}),(0,a.jsx)("span",{className:"text-sm text-gray-700",children:"Upload an image"})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-col mb-6 gap-1",children:[(0,a.jsx)("label",{htmlFor:"topics",className:"text-gray-700 text-sm",children:"Topics (comma separated)"}),(0,a.jsx)("input",{ref:i,type:"text",id:"topics",name:"topics",placeholder:"developer, programming",pattern:"^([a-zA-Z0-9]+[,\\s]*){1,20}$",title:"Comma separated, maximum of 20 topics",className:"border border-gray-300 p-2 focus:ring-1 focus:ring-blue-600 transition outline-none rounded-md text-sm"})]}),(0,a.jsx)("button",{type:"submit",className:"".concat(c?"pointer-events-none bg-gray-100 text-gray-400":"pointer-events-auto bg-blue-600 text-white"," flex items-center gap-2 justify-center rounded-full py-2 px-6 transition-colors focus:ring outline-none  w-full max-w-[200px] hover:bg-blue-700 text-sm"),disabled:c,children:(0,a.jsx)("span",{className:"text-semibold",children:"Post snap"})})]})})})}function P(e){let{children:t}=e,[s,l]=(0,n.useState)(!1),[r,i]=(0,n.useState)(!1),[c,o]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=async()=>{try{let e=await v.Z.get("/api/trending");o(e.data)}catch(t){console.error(t)}};e()},[]),(0,a.jsxs)("div",{className:"min-h-screen grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] items-start w-[95%] relative max-w-[1100px] mx-auto gap-12",children:[(0,a.jsx)(y.x7,{}),(0,a.jsx)("button",{type:"button",className:"rounded-full fixed md:hidden bg-blue-600 text-white flex items-center justify-center p-3 aspect-square bottom-8 right-8 z-40 outline-none focus:ring hover:bg-blue-700 active:bg-blue-600 shadow-lg",onClick:()=>l(!s),children:(0,a.jsx)(u.umT,{className:"text-2xl"})}),(0,a.jsx)(k,{className:r?"flex":"hidden",setDisplayNew:i}),(0,a.jsx)(j,{className:"hidden md:flex sticky top-8 h-[80vh] overflow-auto",setDisplayNew:i,trending:c,setDisplayMenu:l}),(0,a.jsx)(j,{className:"".concat(s?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none","  bg-white p-7 transition-opacity md:hidden fixed z-30 left-1/2 top-4 bottom-4 overflow-auto -translate-x-1/2 w-[90%] shadow-2xl rounded-lg"),setDisplayNew:i,trending:c,setDisplayMenu:l}),(0,a.jsx)("main",{className:"w-full rounded-lg mb-12",children:t}),(0,a.jsx)("aside",{className:"hidden lg:hidden xl:flex flex-col gap-4 sticky top-8",children:(0,a.jsx)(x,{className:"hidden lg:block",trending:c,setDisplayMenu:l})})]})}},5459:function(e,t,s){s.d(t,{Z:function(){return n}});var a=s(5893);function n(){return(0,a.jsx)("div",{className:"h-[20px] md:h-[32px] bg-gray-100 sticky top-0 z-20"})}},5149:function(e,t){t.Z="https://res.cloudinary.com/snapify/image/upload/"}}]);