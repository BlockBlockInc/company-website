(this["webpackJsonpblockblock-company-site"]=this["webpackJsonpblockblock-company-site"]||[]).push([[0],{32:function(e,t,i){},33:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),o=i(25),r=i.n(o),c=(i(32),i(17)),s=i.p+"static/media/logoWhiteStacked.d59063ee.webp",d=i.p+"static/media/discordLogo.68e2fcb9.webp",l=(i(33),i(2));function b(){return Object(l.jsxs)("header",{id:"header",children:[Object(l.jsx)("div",{className:"block-logo-column",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("div",{className:"block-logo",children:Object(l.jsx)("img",{src:s,width:"104",height:"45",alt:"Block::Block logo"})})})}),Object(l.jsx)("div",{className:"separator"}),Object(l.jsx)("div",{className:"discord-button-column",children:Object(l.jsx)("a",{href:"https://discord.com/invite/Fe3WYFxQ",target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("div",{className:"discord-button",children:[Object(l.jsx)("div",{className:"discord-button-text",children:"Join us on"}),Object(l.jsx)("div",{className:"discord-logo",children:Object(l.jsx)("img",{src:d,width:"82",height:"23",alt:"Block::Block logo"})})]})})})]})}var h=i(3),m=i.p+"static/media/heroBackground.e775e5d4.webp",p=i.p+"static/media/blocks10x.f2dd0971.webp",g=i.p+"static/media/logoBlackStacked.f5a6ebcf.webp",u=i.p+"static/media/floatingPunk.1e5ff8e6.webp",j=i.p+"static/media/blocks2-10x.2c0f8eb5.webp",f=(i(36),i(59)),x=i(60),w=i.p+"static/media/menschBackground.a8441976.webp",O=i.p+"static/media/kryptosignBackground.902856af.webp";function v(e){var t=e.activeProject,i=e.translate;return Object(l.jsx)("div",{id:"projects-hero",className:Object(h.b)(k.container),style:{transform:"translate3d(0px, ".concat(i,"px, 0px)")},children:Object(l.jsx)(x.a,{children:function(){switch(t){case"meebitsdao":return Object(l.jsx)(f.a.div,{className:Object(h.b)(k.meebitsdaoBackground),transition:{duration:.5,type:"tween",ease:"easeInOut"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(l.jsx)(f.a.video,{id:"meebits-video",className:Object(h.b)(k.meebitBattle)+" projects-background",src:"https://d198suc4pour3z.cloudfront.net/meebits_fastmov.mp4",type:"video/mp4",width:"1023",height:"640",alt:"Meebits Battle",loop:!0,autoPlay:!0,muted:!0},"https://d198suc4pour3z.cloudfront.net/meebits_fastmov.mp4")});case"menschmaschine":return Object(l.jsx)(f.a.img,{className:Object(h.b)(k.imageBackground),src:w,width:2048,height:1296,transition:{duration:.5,type:"tween"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},"menschmaschine-animation");case"kryptosign":return Object(l.jsx)(f.a.img,{className:Object(h.b)(k.imageBackground),src:O,width:2048,height:1296,transition:{duration:.5,type:"tween"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},"kryptosign-animation");default:return null}}()})})}var k=h.a.create({container:{position:"absolute",height:"100%",width:"100%",background:"#000","@media only screen and (min-width: 768px)":{top:800},"@media only screen and (min-width: 1024px)":{top:800},"@media only screen and (max-width: 767px)":{minHeight:"115vh",top:780}},meebitBattle:{width:"100%",height:"105vh",objectFit:"cover","@media only screen and (max-width: 767px)":{minHeight:"115vh"}},meebitsdaoBackground:{position:"relative",width:"100%"},meebitsdaoBlocks:{width:"100%",position:"absolute",top:0,left:0,right:0,bottom:0},imageBackground:{height:"100%",width:"100%",minHeight:"105vh",objectFit:"cover",zIndex:1}});function y(e){var t=e.activeProject,i=Object(n.useState)("blocks"),a=Object(c.a)(i,2),o=a[0],r=a[1],s=Object(n.useState)(0),d=Object(c.a)(s,2),b=d[0],f=d[1];return Object(n.useEffect)((function(){var e=function(e){document.getElementById("who-section").getBoundingClientRect().top>=0?"blocks"!==o&&r("blocks"):"projects"!==o&&r("projects"),f(-window.pageYOffset/1.8)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[o,b]),Object(l.jsxs)("div",{className:Object(h.b)(B.heroContainer),children:[Object(l.jsxs)("div",{className:Object(h.b)(B.background),id:"hero-area",children:["blocks"===o?Object(l.jsx)("img",{className:Object(h.b)(B.blocksBackground)+" hero-background",id:"blocks-background",src:m,width:"1023",height:"640",alt:"yellow background with small squares of various colors peppered throughout"}):null,Object(l.jsx)(v,{activeProject:t,translate:b})]}),Object(l.jsx)("div",{id:"hero-area-overlay",children:Object(l.jsxs)("div",{className:Object(h.b)(B.card),children:[Object(l.jsx)("img",{className:Object(h.b)(B.blocks10x),src:p,width:"395",height:"520",alt:"yellow background with small squares of various colors peppered throughout"}),Object(l.jsx)("img",{className:Object(h.b)(B.logo),src:g,width:"257",height:"111",alt:"Block::Block logo"}),Object(l.jsxs)("div",{className:Object(h.b)(B.textbox)+" white-text-box",children:[Object(l.jsx)("p",{className:Object(h.b)(B.text),children:"We are a\xa0Creative Blockchain Lab working in DAOs, NFTs, and building the creator economy. Also the Metaverse. We microfund entrepreneurs and artists each month.\xa0"}),Object(l.jsx)("p",{className:"paragraph",children:"Banter, brainstorm, build with us."}),Object(l.jsx)("a",{className:"link",href:"https://discord.gg/FjVH5UpEgC",target:"_blank",rel:"noreferrer",children:"Join the Discord"})]}),Object(l.jsx)("img",{className:Object(h.b)(B.floatingPunk),src:u,width:"218",height:"249",alt:"punk"}),Object(l.jsx)("img",{className:Object(h.b)(B.twoBlocks),src:j,width:"98",height:"53",alt:"2 blocks side by side"})]})})]})}var B=h.a.create({heroContainer:{position:"relative",height:"calc(100vh)",maxHeight:800,paddingTop:100,minHeight:550,display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (max-width: 767px)":{overflow:"hidden"}},blocksBackground:{maxHeight:800},background:{position:"fixed",top:0,zIndex:-1},blocks10x:{position:"absolute",bottom:-185,zIndex:-1},card:{position:"relative"},logo:{position:"absolute",left:-35,top:-58,zIndex:2,"@media only screen and (max-width: 767px)":{left:"5%",top:-112}},floatingPunk:{position:"absolute",right:-107,bottom:-72,zIndex:2,"@media only screen and (max-width: 767px)":{right:-70,bottom:-142}},textbox:{fontSize:18,fontWeight:400,"@media only screen and (max-width: 767px)":{width:"90%",margin:"0 auto",height:"unset",padding:16,boxSizing:"border-box"}},text:{"@media only screen and (max-width: 767px)":{marginTop:0}},twoBlocks:{position:"absolute",top:-184,right:130}}),N=i(23);i(37);function M(e){var t=e.img,i=e.name,n=e.description;return Object(l.jsxs)("div",{className:Object(h.b)(T.container),children:[Object(l.jsx)("div",{className:Object(h.b)(T.imgSection),children:Object(l.jsx)("img",{height:90,width:90,className:Object(h.b)(T.avatar),src:t,alt:i})}),Object(l.jsx)("div",{className:Object(h.b)(T.name),children:i}),Object(l.jsx)("div",{className:Object(h.b)(T.description),children:n}),Object(l.jsx)("div",{className:Object(h.b)(T.bottomBar)})]})}var T=h.a.create({container:{margin:"0 auto",width:290,height:360,background:"#000",padding:16,boxSizing:"border-box",color:"#fff",borderRadius:8,display:"flex",flexDirection:"column",":hover":{},"@media only screen and (max-width: 767px)":{width:"100%"}},avatar:{borderRadius:8,width:90,height:90,objectFit:"cover",objectPosition:"top"},name:{fontWeight:500,fontSize:22,marginTop:12,marginBottom:12},description:{color:"#999999",fontSize:15,lineHeight:1.2},bottomBar:{background:"#3F3F3F",marginTop:"auto",height:3}}),S=i(26),z=i.n(S),F=(i(53),i(54),[{name:"Bart",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Co-founder. Bart built 25 #1 App Store hits & ran smartphone games for Disney. He co-founded the Mozilla Builders incubator and headed marketing & business affairs for Firefox 1.0. He has a long track record in open source, community work and activism (incl as an Echoing Green fellow). Occasional angel investor (MUBI, Hooked)."},{name:"Mark",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Co-founder. Mark was previously Chief Product Officer for Mozilla and steward of Firefox for the Quantum launch. He served as CTO for cloud computing pioneer, Joyent, and has been the technical co-founder at multiple early startups."},{name:"Kai",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Advisor. Kai is in Experience Design at Netflix, where he works closely with content creators and product owners to create special experiences on the platform. He is the founder of the MeebitsDAO project and has spent years in the crypto world. He previously worked at Sony Pictures Entertainment."},{name:"Carly",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Chief of Staff. Carly Reilly is an entrepreneur, political commentator, and fundraiser. Carly joined Andrew Yang\u2019s 2020 presidential campaign in August 2018 and helped raise over $40 million as national finance director. She is a Washington Post contributor, a co-host of the Yang Speaks podcast, and has been featured by Bloomberg News."},{name:"Luke",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change."},{name:"Neo",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Developer. Neo is currently taking a gap year from the University of Central Florida - where he studies computer science - to work with Block::Block. He enjoys building and iterating on new ideas and is excited about jumping into the world of Web3 and crypto. In his free time, he enjoys attending hackathons and meeting new people!"},{name:"Mike",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Content & Community. Mike loves being at the breaking edge of culture, trends and consumer insight. He\u2019s fascinated by the metaverse, NFT\u2019s and the future of commerce. By day he is a senior strategist at MediaMonks advertising agency in London. By night you\u2019ll find him in our Discords! You probably know him better as Ginza / GinzaETH and he\u2019s all things content and community for BLOCK::BLOCK & MeebitsDAO."},{name:"Angele",img:"https://drive.google.com/file/d/1kA4fBJBWdkn7vHNYnRWTqGD_rQGdc3py/view?usp=sharing",description:"Intern. Angele is a Comp Sci & Stats undergrad student at McGill and recently got into the crypto/NFT space. As part of her internship with Block::Block, she is building a website that mints NFTs for social media influencers."},{name:"Ryan",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Technical Advisor. Ryan Ouyang is an engineer. A recovered hackathon addict with 10+ wins, Ryan has been a finalist at 3 ETHGlobal events and operated in and built blockchain apps for the biggest companies in Canada. He is currently working on a new NFT wearables system, as well as a new blockchain game."},{name:"Josh",img:"https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",description:"Advisor. Josh is a Web3 software engineer. He comes from a TradFi background, previously working at Capital One Labs (in-house product incubator & innovation lab) where he led crypto exploration efforts. He is now an active NFT and crypto enthusiast."}]);function C(e){var t=e.className,i=e.style,n=e.onClick;return Object(l.jsx)("div",{className:t,style:Object(N.a)({},i),onClick:n,children:Object(l.jsx)("i",{className:Object(h.b)(I.arrow)+" far fa-chevron-right"})})}function J(e){var t=e.className,i=e.style,n=e.onClick;return Object(l.jsx)("div",{className:t,style:Object(N.a)({},i),onClick:n,children:Object(l.jsx)("i",{className:Object(h.b)(I.arrow)+" far fa-chevron-left"})})}function K(){return Object(l.jsxs)("div",{id:"who-section",className:Object(h.b)(I.container),children:[Object(l.jsxs)("div",{className:Object(h.b)(I.topText),children:[Object(l.jsxs)("div",{className:Object(h.b)(I.topTextWrapper),children:[Object(l.jsxs)("h2",{className:Object(h.b)(I.whoWeAreTitle),children:["Who",Object(l.jsx)("b",{}),"we are"]}),Object(l.jsx)("div",{className:Object(h.b)(I.whoWeAreOverlay)})]}),Object(l.jsx)("p",{className:Object(h.b)(I.quote),children:"Block::Block was started when Mark and Bart, who co-led the Mozilla Builders incubator, teamed up with NFT OG Kai. We love decentralization, open source, and creators. Investors include Divergence.vc, Marc Benioff, Kevin Lin, Kun Gao and Cyan Bannister."})]}),Object(l.jsx)("div",{className:Object(h.b)(I.carouselSection),children:Object(l.jsx)(z.a,{dots:!1,infinite:!0,slidesToShow:4,adaptiveHeight:!0,nextArrow:Object(l.jsx)(C,{}),prevArrow:Object(l.jsx)(J,{}),responsive:[{breakpoint:1350,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}],children:F.map((function(e,t){return Object(l.jsx)(M,{name:e.name,img:e.img,description:e.description},e.name+"_".concat(t,"_member_card"))}))})})]})}var I=h.a.create({container:{background:"#1A1A1A","@media only screen and (min-width: 768px)":{paddingTop:100,paddingBottom:100}},topText:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative","@media only screen and (max-width: 767px)":{flexDirection:"column"}},whoWeAreOverlay:{background:"#000",position:"absolute",height:"100%",width:297,left:0,top:0,zIndex:1,"@media only screen and (max-width: 767px)":{width:"100%"}},whoWeAreTitle:{textTransform:"uppercase",maxWidth:170,fontSize:60,color:"#fff",fontWeight:500,whiteSpace:"pre-wrap",marginRight:40,zIndex:3,position:"relative",marginTop:0,marginBottom:0,display:"flex",flexDirection:"column","@media only screen and (max-width: 767px)":{fontSize:45}},carouselSection:{marginTop:50,paddingBottom:16,"@media only screen and (max-width: 767px)":{marginTop:16,paddingBottom:30}},topTextWrapper:{position:"relative",paddingLeft:29,"@media only screen and (max-width: 767px)":{width:"100%",padding:16,paddingTop:0}},quote:{color:"#fff",fontSize:20,lineHeight:"36px",fontWeight:400,maxWidth:617,position:"relative",zIndex:3,"@media only screen and (max-width: 767px)":{padding:16}},benioff:{color:"#fff",position:"absolute",bottom:-25,right:36},arrow:{color:"#aaa",fontSize:40,"@media only screen and (max-width: 767px)":{fontSize:30}}}),H=(i(55),i.p+"static/media/meebitsFloatingBlocks.77cb79eb.webp"),P=i.p+"static/media/menschFloatingBlocks.c9f32148.webp",L=i.p+"static/media/kryptosignFloatingBlocks.46bad45f.webp",A=i.p+"static/media/menschSite.7aa364a4.webp",W=i.p+"static/media/kryptosignSite.8e5f34b5.webp";function D(e){var t=e.activeProject,i=e.setActiveProject,n={meebitsdao:H,menschmaschine:P,kryptosign:L},a=[{id:"meebitsdao",name:"MeebitsDAO",description:"We are the principal sponsor and building the backend for MeebitsDAO, an independent community and development fund for the Meebits ecosystem.\n\n      ",action:Object(l.jsx)("a",{href:"https://meebitsdao.world",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{className:Object(h.b)(R.button),children:"Welcome to the Metaverse"})})},{id:"kryptosign",name:"KryptoSign",description:"Simple documents, signed with crypto wallets, with optional Twitter and Discord handles. It's used to power the MeebitsDAO, for guestbooks, and even for contracts with partners and freelancers.  ",action:Object(l.jsx)("a",{href:"https://kryptosign.io",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{className:Object(h.b)(R.button),children:"Try KryptoSign"})})},{id:"menschmaschine",name:"MenschMaschine",description:"We\u2019re generative music producers. We also love to jam analog synths and eurorack. So we built a system that's half Mensch (that\u2019s us, the producers, doing our thing) and half Maschine (the recombinator that creates unexpected music clips).  ",action:Object(l.jsx)("a",{href:"https://www.menschmaschine.io/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{className:Object(h.b)(R.button),children:"Visit MenschMaschine"})})}];return Object(l.jsx)("div",{id:"projects-section",className:Object(h.b)(R.container),children:Object(l.jsxs)("div",{className:Object(h.b)(R.inlay),children:[Object(l.jsxs)(x.a,{children:[Object(l.jsx)(f.a.img,{className:Object(h.b)(R.meebitsdaoBlocks),src:n[t],transition:{duration:.5,type:"tween"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),function(){switch(t){case"menschmaschine":return Object(l.jsx)(f.a.img,{className:Object(h.b)(R.menschPreview),src:A,transition:{duration:.5,type:"tween"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},"mensch-preview");case"kryptosign":return Object(l.jsx)(f.a.img,{className:Object(h.b)(R.kryptosignPreview),src:W,transition:{duration:.5,type:"tween"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},"kryptosign-preview");default:return null}}()]}),Object(l.jsxs)("h2",{className:Object(h.b)(R.title),children:["Our",Object(l.jsx)("br",{}),"Projects"]}),Object(l.jsx)("div",{className:Object(h.b)(R.tabs),children:a.map((function(e,n){var a=t===e.id;return Object(l.jsxs)("div",{className:Object(h.b)(R.project,a&&R.active),onClick:function(){return t=e.id,void i(t);var t},children:[Object(l.jsx)("h3",{className:Object(h.b)(R.projectTitle),children:e.name}),a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:Object(h.b)(R.projectDescription),children:e.description}),e.action?e.action:null]}):null]})}))})]})})}var R=h.a.create({container:{position:"relative",minHeight:"100vh"},active:{opacity:1},button:{background:"#000",textTransform:"uppercase",width:"100%",height:45,border:0,color:"#fff",fontSize:16,fontWeight:500,cursor:"pointer"},tabs:{marginLeft:"auto",zIndex:4,"@media only screen and (max-width: 767px)":{width:"60%",marginLeft:16},"@media only screen and (min-width: 768px)":{marginRight:80,width:250},"@media only screen and (min-width: 1024px)":{marginRight:130,width:250}},play:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"15em",color:"#fff",cursor:"pointer","@media only screen and (max-width: 767px)":{top:16,transform:"translateX(-50%)",fontSize:"12em"}},meebitsdaoBlocks:{height:"100%",width:"100%",position:"absolute",top:0,zIndex:-1,objectFit:"contain"},project:{width:"100%",padding:16,background:"#fff",opacity:.4,marginBottom:16,cursor:"pointer",zIndex:4},projectTitle:{fontSize:25,marginTop:0,marginBottom:0,fontWeight:500,"@media only screen and (max-width: 767px)":{fontSize:24}},projectDescription:{fontSize:18},inlay:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:2,"@media only screen and (max-width: 767px)":{display:"flex",flexDirection:"column"}},title:{background:"#000",maxWidth:420,fontSize:45,color:"#fff",marginLeft:"auto",padding:"16px 38px",boxSizing:"border-box",fontWeight:500,textTransform:"uppercase","@media only screen and (max-width: 767px)":{background:"transparent",paddingLeft:16,marginBottom:0,marginTop:"auto",marginLeft:0},"@media only screen and (min-width: 768px)":{width:370},"@media only screen and (min-width: 1024px)":{width:420}},menschPreview:{position:"absolute",objectFit:"contain",top:"50%",transform:"translate(-50%, -50%)","@media only screen and (max-width: 767px)":{display:"none"},"@media only screen and (min-width: 768px)":{left:"27%",maxHeight:"45vh"},"@media only screen and (min-width: 1024px)":{maxHeight:"70vh",left:"30%",height:600},"@media only screen and (min-width: 1350px)":{height:800,left:"35%"}},kryptosignPreview:{position:"absolute",objectFit:"contain",top:"50%",transform:"translate(-50%, -50%)","@media only screen and (max-width: 767px)":{display:"none"},"@media only screen and (min-width: 768px)":{maxHeight:"45vh",left:"27%"},"@media only screen and (min-width: 1024px)":{maxHeight:"70vh",left:"30%",height:600},"@media only screen and (min-width: 1350px)":{height:800,left:"35%"}}});i(56);function G(){return Object(l.jsxs)("div",{className:Object(h.b)(X.container),id:"revue-embed",children:[Object(l.jsx)("h3",{className:Object(h.b)(X.title),children:"Subscribe To Our Newsletter"}),Object(l.jsxs)("form",{action:"https://www.getrevue.co/profile/blockblock/add_subscriber",method:"post",id:"revue-form",name:"revue-form",target:"_blank",children:[Object(l.jsxs)("div",{className:Object(h.b)(X.emailGroup),children:[Object(l.jsx)("label",{className:Object(h.b)(X.label),for:"member_email",children:"Email"}),Object(l.jsx)("input",{className:Object(h.b)(X.input),placeholder:"Your email address...",type:"email",name:"member[email]",id:"member_email"})]}),Object(l.jsx)("div",{class:"revue-form-actions",children:Object(l.jsx)("input",{className:Object(h.b)(X.subscribe),type:"submit",value:"Submit",name:"member[subscribe]",id:"member_submit"})})]})]})}var X=h.a.create({container:{color:"#fff",marginLeft:50,"@media only screen and (max-width: 767px)":{display:"none"}},title:{fontSize:20},emailGroup:{display:"flex",flexDirection:"column",color:"#999999",fontSize:16},label:{marginBottom:8},input:{border:"1px solid #979797",borderRadius:8,background:"transparent",outline:"none",height:40,width:230,marginBottom:16,color:"#999",padding:16},subscribe:{border:"1px solid #979797",color:"#979797",height:34,width:85,borderRadius:8,background:"transparent",cursor:"pointer"}});function Y(){return Object(l.jsxs)("div",{id:"footer",className:Object(h.b)(E.footer),children:[Object(l.jsxs)("div",{className:Object(h.b)(E.left),children:[Object(l.jsx)("img",{src:s,width:"104",height:"45",alt:"Block::Block logo"}),Object(l.jsxs)("p",{className:Object(h.b)(E.text),children:["We are looking for one or two exceptional smart contract and web3.0 developers. But also interesting, entrepreneurial people from diverse backgrounds. Women and people of color are strongly encouraged to apply. An inclusive team is how we win the future. Hit us up at info@blockblock.io.",Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:Object(h.b)(E.socials),children:[Object(l.jsx)("div",{className:Object(h.b)(E.flexColumn)+" discord-button-column",children:Object(l.jsx)("a",{href:"https://discord.gg/FjVH5UpEgC",target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("div",{className:"discord-button",children:[Object(l.jsx)("div",{className:"discord-button-text",children:"Join us on"}),Object(l.jsx)("div",{className:"discord-logo",children:Object(l.jsx)("img",{src:d,width:"82",height:"23",alt:"Block::Block logo"})})]})})}),Object(l.jsx)("a",{href:"https://twitter.com/blockblockio",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:Object(h.b)(E.icon)+" fab fa-twitter"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/company/block-block/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:Object(h.b)(E.icon)+" fab fa-linkedin-in"})})]})]}),Object(l.jsx)("div",{className:Object(h.b)(E.right),children:Object(l.jsx)(G,{})})]})}var E=h.a.create({footer:{padding:38,display:"flex",justifyContent:"center"},text:{color:"#999999",maxWidth:390,lineHeight:1.2,fontSize:18},email:{color:"#999",textDecoration:"underline"},socials:{display:"flex",alignItems:"center"},icon:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:16,color:"#000",background:"#fff",padding:8,fontSize:"1.75em",borderRadius:"50%"},flexColumn:{flex:"unset"}});var _=function(){var e=Object(n.useState)("meebitsdao"),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(y,{activeProject:i}),Object(l.jsx)(K,{}),Object(l.jsx)(D,{activeProject:i,setActiveProject:a}),Object(l.jsx)(Y,{})]})},Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,61)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),Z()}},[[57,1,2]]]);
//# sourceMappingURL=main.b254a5cd.chunk.js.map