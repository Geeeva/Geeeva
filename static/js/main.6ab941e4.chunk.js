(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/github.06c39faf.svg"},25:function(e,t,a){e.exports=a.p+"static/media/timeline.5e8cf350.png"},26:function(e,t,a){e.exports=a.p+"static/media/todo.86a9b673.png"},27:function(e,t,a){e.exports=a.p+"static/media/drum.f5eafc7b.png"},28:function(e,t,a){e.exports=a.p+"static/media/cryptocurrency.656562b6.png"},29:function(e,t,a){e.exports=a.p+"static/media/weather.8b80d26c.png"},30:function(e,t,a){e.exports=a.p+"static/media/film.0799c086.png"},31:function(e,t,a){e.exports=a.p+"static/media/cart.4b7d28ae.png"},32:function(e,t,a){e.exports=a.p+"static/media/recognition.dee325b5.png"},34:function(e,t,a){e.exports=a.p+"static/media/html5.99747fbd.svg"},35:function(e,t,a){e.exports=a.p+"static/media/css3.dffc63fd.svg"},36:function(e,t,a){e.exports=a.p+"static/media/sass.12ef6071.svg"},37:function(e,t,a){e.exports=a.p+"static/media/responsive.3936e505.svg"},38:function(e,t,a){e.exports=a.p+"static/media/bootstrap.376b95f8.svg"},39:function(e,t,a){e.exports=a.p+"static/media/javascript.e335794c.svg"},40:function(e,t,a){e.exports=a.p+"static/media/jquery.468cf3fe.svg"},41:function(e,t,a){e.exports=a.p+"static/media/npm.14d9c0fa.svg"},42:function(e,t,a){e.exports=a.p+"static/media/git.cd3ba31b.svg"},43:function(e,t,a){e.exports=a.p+"static/media/react.417a583d.svg"},46:function(e,t,a){e.exports=a.p+"static/media/IvanaInsta.d9f69590.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/github-icon.0833736e.svg"},48:function(e,t,a){e.exports=a.p+"static/media/linkedin-icon.0323ef29.svg"},49:function(e,t,a){e.exports=a(97)},54:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(54),a(1)),o=a(2),l=a(4),m=a(3),d=a(5),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("menu-wrapper").style.top=e>t?"0":"-150px",e=t,t>500?(document.getElementById("menu-wrapper").style.top="0",document.getElementById("menu-wrapper").style.backgroundColor="#695753"):0===t&&(document.getElementById("menu-wrapper").style.backgroundColor="rgba(105, 87, 83, 0.75)")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",id:"menu-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"name"},"Ivana Gilic"),r.a.createElement("nav",{className:"menu"},r.a.createElement("a",{href:"#about"}," About "),r.a.createElement("a",{href:"#skills"}," Skills "),r.a.createElement("a",{href:"#work"}," Work "),r.a.createElement("a",{href:"#contact"}," Contact "))))}}]),t}(n.Component),u=a(11),h=a.n(u),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(new h.a.WOW).init()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("h2",{className:"wow fadeInLeft","data-wow-duration":"1.5s"},"About me"),r.a.createElement("div",{className:"text-wrapper wow fadeInDown","data-wow-duration":"2s"},r.a.createElement("h3",null,"LET ME INTRODUCE MYSELF"),r.a.createElement("p",null,"Hi, my name is ",r.a.createElement("span",{className:"bolded"},"Ivana"),", and I'm ",r.a.createElement("span",{className:"bolded"},"Frontend developer")," focused on projects in",r.a.createElement("span",{className:"bolded"}," React")," and other newer libraries of ",r.a.createElement("span",{className:"bolded"},"JavaScript"),". Always interested in learning new things and implement them in domain of frontend development. Passionate for clean, simple and understandable code that is sustainable, with an eye for design and love for visual harmony. Next goals to master ",r.a.createElement("span",{className:"bolded"},"React Native, Angular and NodeJS."))))))}}]),t}(n.Component),f=a(24),E=a.n(f),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).newWindowOpenHandler=function(){window.open(a.props.item[3])},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wow fadeIn","data-wow-duration":"2s"},r.a.createElement("div",{className:"item-wrapper"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("h3",null,this.props.item[0]),r.a.createElement("p",null,this.props.item[2]),r.a.createElement("button",{onClick:this.newWindowOpenHandler},"Code",r.a.createElement("span",{className:"github"},r.a.createElement("img",{src:E.a,alt:""}))),r.a.createElement("div",{className:"img-wrapper-alternative"},r.a.createElement("a",{href:this.props.item[3],target:"blank"},r.a.createElement("img",{src:this.props.item[1],alt:this.props.item[1]})))),r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("a",{href:this.props.item[3],target:"blank"},r.a.createElement("img",{src:this.props.item[1],alt:this.props.item[1]})))))}}]),t}(n.Component),w=a(25),b=a.n(w),y=a(26),N=a.n(y),j=a(27),k=a.n(j),O=a(28),C=a.n(O),S=a(29),x=a.n(S),R=a(30),M=a.n(R),I=a(31),T=a.n(I),F=a(32),A=a.n(F),H=a(33),L=a.n(H),G=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[["HTML\\CSS\\ES5 Project",b.a,"Timeline project done in HTML5, CSS3 & ES5, displaying timeline with appearing items on scroll","https://github.com/Geeeva/Animated-timeline"],["React To Do List",N.a,"Project in first section shows already prepared To-do-List, in second will be created new To-do-List","https://github.com/Geeeva/To-do-list"],["React Drum",k.a,"React project demonstrates sound emition od keypress both using the virtual keyboard and real with letters","https://github.com/Geeeva/Drum"],["React Cryptocurrency ranking",C.a,"This project demonstrates connecting to cryptocurrency api Coinlore, by using Axios","https://github.com/Geeeva/Cryptocurrency-ranking-overview"],["React Weather Foreceact",x.a,"Project shows a simple Weather forecast application for the current day. It demonstrates connecting to MetaWeather api, by using fetch method for getting data from server","https://github.com/Geeeva/Weather-forecast"],["React Color Recognition",A.a,"Project demonstrate the process of connecting to Clarifai API for Color recognitions","https://geeeva.github.io/Color-recognition"],["React Film Filtering",M.a,"Project demonstrates simple application with film wish list, whereas the data between session is stored in localStorage","https://github.com/Geeeva/Film-filtering"],["React Shopping-cart",T.a,"Project with shopping process in 3 steps, entering items, selecting items and incerasing/decreasing the quantity of selected items","https://github.com/Geeeva/Shopping-cart"]].map(function(e,t){return r.a.createElement(v,{key:t,item:e})});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"work-wrapper"},r.a.createElement("h2",{className:"wow fadeInLeft","data-wow-duration":"1s"},"Works"),r.a.createElement("div",{className:"items-wrapper"},r.a.createElement("h3",{className:"intro"},"PLS. CHECK OUT SOME OF MY PROJECTS"),r.a.createElement(L.a,{dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1,prevArrow:!1,nextArrow:!1,intialSlide:0},e)))))}}]),t}(n.Component),D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"md-modal md-effect-1",id:"modal-1",style:{visibility:e.show?"visible":"hidden"}},r.a.createElement("div",{className:"md-content",style:{opacity:e.show?"1":"0",transform:e.show?"scale(1)":""}},r.a.createElement("h3",null,e.data[1]),r.a.createElement("div",null,r.a.createElement("div",null,e.data[2]),r.a.createElement("button",{className:"md-close",onClose:e.closeCallback},"Close")))),r.a.createElement("div",{class:"md-overlay",style:{opacity:e.show?"1":"0",visibility:e.show?"visible":"hidden"}}))},W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={item:a.props.item,showModal:!1},a.toggleModal=function(){a.setState({showModal:!a.state.showModal})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item-wrapper wow fadeIn","data-wow-duration":"2s",onClick:this.toggleModal},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:this.props.item[0],alt:this.props.item[0]})),r.a.createElement("h3",null,this.props.item[1])),r.a.createElement(D,{show:this.state.showModal,closeCallback:this.toggleModal,data:this.state.item})))}}]),t}(n.Component),P=a(34),q=a.n(P),B=a(35),J=a.n(B),U=a(36),Y=a.n(U),K=a(37),Q=a.n(K),V=a(38),Z=a.n(V),z=a(39),X=a.n(z),$=a(40),_=a.n($),ee=a(41),te=a.n(ee),ae=a(42),ne=a.n(ae),re=a(43),se=a.n(re),ie=function(){var e=[[q.a,"HTML5","Creating HTML structure of the web page, inserting links, videos and pictures, working with semantic elements, converting designs from Zeplin to HTML pages"],[J.a,"CSS3","Changing style, color and position of HTML elements, working with animations, working with flexbox and css grid"],[Y.a,"SCSS","Using variables and mixins, using nesting to target specific elements, structuring project in separate modules"],[Q.a,"Responsive Web Design","Adapting aplications for different screens using media queries, responsive images, mobile first and desktop first approach"],[Z.a,"Bootstrap Responsive Web Design","Using bootstrap grid system, using bootstrap components and classes"],[X.a,"JavaScript","Data types, variables, functions, loops, If/Else statements, arrays and array methods, algorithms, manipulating with DOM, objects, inheritance, ES6 features, asynchronous programming, FETCH, Async/Await"],[_.a,"jQuery","Manipulating with DOM, manipulating with CSS, working with events"],[te.a,"NPM","Working in node enviroment, using NPM packages and scripts"],[ne.a,"GIT","Good knowledge of GIT ecosystem, using command line and GIT commands, working with other developers on same project"],[se.a,"React","Single - page aplications (SPA), React 16.8.6, helpful tools for creating SPA applications, Redux"]].map(function(e,t){return r.a.createElement(W,{key:t,item:e})});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("h2",{className:"wow fadeInRight","data-wow-duration":"1s"},"Skills"),r.a.createElement("div",{className:"technics-wrapper"},e))))},ce=a(44),oe=a(12),le=a(45),me=a.n(le).a.create({baseURL:"https://geeeva-form.firebaseio.com"}),de=a(46),pe=a.n(de),ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={paragraphs:[],name:"",nameError:"",email:"",emailError:"",subject:"",message:"",messageError:"",messageSent:!1},a.changeHandler=function(e){a.setState(Object(oe.a)({},e.target.name,e.target.value))},a.validate=function(){var e=!1,t=[];return a.state.name.length<5?(e=!0,t.nameError="Requires to be at least 5 characters"):t.nameError="",-1===a.state.email.indexOf("@")?(e=!0,t.emailError="Requires a valid email address"):t.emailError="",0===a.state.message.length||a.state.message.length>1e3?(e=!0,t.messageError="Requires a message no longer than 1000 charachters"):t.messageError="",e&&a.setState(Object(ce.a)({},t)),e},a.submitHandler=function(e){e.preventDefault();var t=a.validate(),n={name:a.state.name,email:a.state.email,subject:a.state.subject,message:a.state.message};!1===t&&(a.setState({name:"",nameError:"",email:"",emailError:"",subject:"",message:"",messageError:""}),me.post("/contact.json",n).then(function(e){console.log(e.status),200===e.status&&a.setState({messageSent:"Thank you, your message has been successfully sent!"})}).catch(function(e){return console.log(e)})),a.setState({messageSent:""})},a.recaptchaLoadedHandler=function(){console.log("Recaptcha successfully loaded")},a.verifyCallbackHandler=function(e){e&&a.setState({isVerified:!0})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement("h2",{className:"wow fadeInDown","data-wow-duration":"1.5s"},"Contact"),r.a.createElement("div",{className:"contact-form-content"},r.a.createElement("div",{className:"form-wrapper wow pulse","data-wow-duration":".7s"},r.a.createElement("h3",{className:"intro"},"You can contact me by email address ivana.gilich@gmail.com or by contact form below"),r.a.createElement("h3",null,"CONTACT FORM"),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,style:{backgroundColor:"Requires to be at least 5 characters"===this.state.nameError?"#F1F1F1":""},onChange:function(t){return e.changeHandler(t)}}),r.a.createElement("div",{className:"nameError"},r.a.createElement("span",{className:"tooltiptext"+("Requires to be at least 5 characters"===this.state.nameError?" visible":"")},this.state.nameError))),r.a.createElement("div",null,r.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",value:this.state.email,style:{backgroundColor:"Requires a valid email address"===this.state.emailError?"#F1F1F1":""},onChange:function(t){return e.changeHandler(t)}}),r.a.createElement("div",{className:"emailError"},r.a.createElement("span",{className:"tooltiptext"+("Requires a valid email address"===this.state.emailError?" visible":"")},this.state.emailError))),r.a.createElement("input",{type:"text",name:"subject",placeholder:"Subject",value:this.state.subject,className:"subject",onChange:function(t){return e.changeHandler(t)}}),r.a.createElement("div",null,r.a.createElement("textarea",{name:"message",cols:"30",rows:"7",value:this.state.message,style:{backgroundColor:"Requires a message no longer than 1000 charachters"===this.state.messageError?"#F1F1F1":""},onChange:function(t){return e.changeHandler(t)}}),r.a.createElement("div",{className:"messageError"},r.a.createElement("span",{className:"tooltiptext"+("Requires a message no longer than 1000 charachters"===this.state.messageError?" visible":"")},this.state.messageError))),r.a.createElement("button",{onClick:function(t){return e.submitHandler(t)}},"Send Message"),r.a.createElement("div",{className:"message-sent"},this.state.messageSent))),r.a.createElement("div",{className:"pic-wrapper"},r.a.createElement("img",{src:pe.a,alt:"Ivana Gilic"}))))))}}]),t}(n.Component),he=a(47),ge=a.n(he),fe=a(48),Ee=a.n(fe),ve=function(){return r.a.createElement("div",{className:"container-fluid footer-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\xa9 Copyright 2019 Ivana Gilic | All Right Reserved."),r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"https://github.com/Geeeva"},r.a.createElement("img",{src:ge.a,alt:"Github"}))),r.a.createElement("div",{className:"linkedin"},r.a.createElement("a",{href:"https://www.linkedin.com/in/ivana-gili%C4%87-04620850/"},r.a.createElement("img",{src:Ee.a,alt:"Linkedin"}))))))},we=a(8),be=a.n(we),ye=(a(96),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(new h.a.WOW).init()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(p,null)),r.a.createElement("main",null,r.a.createElement(be.a,{id:"about"},r.a.createElement("div",null,r.a.createElement(g,null))),r.a.createElement(be.a,{id:"skills"},r.a.createElement("div",null,r.a.createElement(ie,null))),r.a.createElement(be.a,{id:"work"},r.a.createElement("div",null,r.a.createElement(G,null))),r.a.createElement(be.a,{id:"contact"},r.a.createElement("div",null,r.a.createElement(ue,null)))),r.a.createElement("footer",null,r.a.createElement(ve,null)))}}]),t}(n.Component));i.a.render(r.a.createElement(ye,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.6ab941e4.chunk.js.map