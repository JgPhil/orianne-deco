(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,function(e,a,t){},,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),s=t.n(r);t(15);const c=["btn--primary","btn--outline","btn--test"],i=["btn--medium","btn--large","btn--small"],o=e=>{let{children:a,type:t,onClick:n,buttonStyle:r,dest:s,buttonSize:o}=e;const m=c.includes(r)?r:c[0],u=i.includes(o)?o:i[0];return console.log("\ud83d\ude80 ~ checkButtonSize:",u),l.a.createElement("div",{className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(m," ").concat(u),onClick:n,type:t},a))};var m=t(2),u=t(3);t(16);var d=function(){const[e,a]=Object(n.useState)(!1),[t,r]=Object(n.useState)(!0),s=Object(m.m)(),c=()=>a(!1),i=()=>{window.innerWidth<=960?r(!1):r(!0)};Object(n.useEffect)(()=>{i()},[]);const o=e=>s.pathname===e?" active":"";return window.addEventListener("resize",i),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement(u.b,{to:"/",onClick:c,className:"navbar-brand brand-text is-nav-leaf"},l.a.createElement("img",{src:"images/leaf.png",width:"85px",className:"d-inline-block",alt:""})),l.a.createElement("ul",{className:"navbar-nav is-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/",className:"nav-link"+o("/"),onClick:c},"Accueil")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/mariage",className:"nav-link"+o("/mariage"),onClick:c},"Mariage")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/interieur",className:"nav-link"+o("/interieur"),onClick:c},"Int\xe9rieur")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/contact",className:"nav-link"+o("/contact"),onClick:c},"Contact")))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navbar-title"},"Orianne D\xe9coratrice")))};t(5),t(17),t(18);var E=()=>l.a.createElement("a",{href:"#carousel"},l.a.createElement("svg",{className:"arrows"},l.a.createElement("path",{className:"a1",d:"M0 0 L30 32 L60 0"}),l.a.createElement("path",{className:"a2",d:"M0 20 L30 52 L60 20"}),l.a.createElement("path",{className:"a3",d:"M0 40 L30 72 L60 40"})));var p=()=>l.a.createElement("div",{className:"video-player"},l.a.createElement("video",{controls:!0,autoPlay:!0,muted:!0,preload:"auto"},l.a.createElement("source",{src:"/videos/decoflorale.mp4",type:"video/mp4"}),"Votre navigateur ne prend pas en charge la lecture de la vid\xe9o."));var v=()=>l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u.b,{to:"/mariage"},l.a.createElement(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--medium"},"Mariage")),l.a.createElement(u.b,{to:"/interieur"},l.a.createElement(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--medium"},"Relooking")),l.a.createElement(E,null));var b=function(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement(p,null),l.a.createElement("br",null),l.a.createElement("h1",null,"Cr\xe9atrice de d\xe9cors personnalis\xe9s"),l.a.createElement(v,null)))};t(19);var N=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(u.b,{to:"/",className:"social-logo"},l.a.createElement("img",{src:"images/logo2.png",width:"80",height:"70",className:"d-inline-block align-top",alt:""})),l.a.createElement(u.b,{className:"text-white",to:"/mentions-legales",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("small",null,"Mentions l\xe9gales"))),l.a.createElement("small",{className:"website-rights"},"orianne decoratrice \xa9 2022"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(u.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement(u.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{className:"fab fa-linkedin"}))))))};t(20);var g=e=>{let{category:a,pics:t}=e,n=0;return l.a.createElement("div",{id:"carousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carousel","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carousel","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carousel","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},t.map(e=>(n+=1,l.a.createElement("div",{className:1===n?" carousel-item active":"carousel-item"},l.a.createElement("img",{className:"d-block w-100",src:"images/".concat(a,"/").concat(e,".jpg"),alt:"First slide"}))))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carousel",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carousel",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement("div",{className:"container"},l.a.createElement(g,{category:"mariage",pics:["2","3","10","2_champ2","2_cheese","2_print","2_tent","2_tent2","2_vint"]})),l.a.createElement(N,null))},f=t(8),S=t(6),_=t(9);t(21);var O=()=>{const{register:e,handleSubmit:a,reset:t,formState:{errors:r}}=Object(f.a)(),[s,c]=Object(n.useState)(!1);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("div",{className:"contactForm"},l.a.createElement("form",{className:"form",id:"contact-form",onSubmit:a(async e=>{const{name:a,email:n,subject:l,message:r}=e;try{c(!0);const e={name:a,email:n,subject:l,message:r};await _.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_TEMPLATE_ID,e,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_USER_ID),t(),Object(S.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),c(!1)}catch(s){console.log(s)}}),noValidate:!0},l.a.createElement("div",{className:"row formRow"},l.a.createElement("div",{className:"col-6 form-group"},l.a.createElement("input",Object.assign({type:"text",name:"name"},e("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),{className:"form-control",placeholder:"Nom"})),r.name&&l.a.createElement("span",{className:"errorMessage"},r.name.message)),l.a.createElement("div",{className:"col-6 form-group"},l.a.createElement("input",Object.assign({type:"email",name:"email"},e("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}),{className:"form-control formInput",placeholder:"Adresse email"})),r.email&&l.a.createElement("span",{className:"errorMessage"},"Adresse email"))),l.a.createElement("div",{className:"row formRow"},l.a.createElement("div",{className:"col form-group"},l.a.createElement("input",Object.assign({type:"text",name:"subject"},e("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),{className:"form-control formInput",placeholder:"Objet"})),r.subject&&l.a.createElement("span",{className:"errorMessage"},r.subject.message))),l.a.createElement("div",{className:"row formRow"},l.a.createElement("div",{className:"col form-group"},l.a.createElement("textarea",Object.assign({rows:3,name:"message"},e("message",{required:!0}),{className:"form-control formInput",placeholder:"Message"})),r.message&&l.a.createElement("span",{className:"errorMessage"},"Message"))),l.a.createElement("button",{className:"btn btn-success submit-btn",disabled:s,type:"submit"},"Envoyer"))),l.a.createElement(S.a,null))))};var w=e=>l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"section-title font-italic"},l.a.createElement("h1",{className:"display-4"},"Contactez-nous")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row ",style:{height:"200px"}},l.a.createElement("div",{className:"col  d-none d-md-block w-100"},l.a.createElement("h5",{className:"section-sub-title"},"Pr\xe9sentation"),l.a.createElement("hr",null),l.a.createElement("p",null,"Orianne Jaming"),l.a.createElement("p",null,"D\xe9coratrice diplom\xe9e apr\xe8s un parcours en Arts Appliqu\xe9s.")),l.a.createElement("div",{className:"col w-100"},l.a.createElement("h5",{className:"section-sub-title"},"Si\xe8ge"),l.a.createElement("hr",null),l.a.createElement("p",null,"15 rue du docteur Albert Schweitzer ",l.a.createElement("br",null),"67320 Drulingen Bas-Rhin ",l.a.createElement("br",null),"T\xe9l\xe9phone: ",l.a.createElement("a",{href:"tel:+33683659718"},"06 83 65 97 18"),l.a.createElement("br",null),"Mail:",l.a.createElement("a",{href:"mailto: orianne.decoratrice@gmail.com"},"orianne.decoratrice@gmail.com"))))),l.a.createElement("div",{className:"divider"})),l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("div",{className:"container mb-4",style:{marginBottom:"84px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col w-100"},l.a.createElement("p",{className:"mx-4"},"Vous souhaitez plus d'informations, utilisez ce formulaire avec les d\xe9tails de votre demande.",l.a.createElement("br",null)," Nous vous r\xe9pondrons rapidement"),l.a.createElement(O,null)),l.a.createElement("div",{className:"col d-none d-md-block w-100"},l.a.createElement("img",{src:"images/mariage/3.jpg",alt:"",className:"w-100"})))),l.a.createElement("div",{className:"container",style:{marginTop:"150px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("h6",null,"Informations entreprise"),l.a.createElement("p",null,"Siret: 518 114 376 000 24 ",l.a.createElement("br",null),"code APE: 9329Z ",l.a.createElement("br",null),"RM67 RCS SAVERNE A518 114 376 ",l.a.createElement("br",null),"Num\xe9ro TVA intracommunautaire: FR08518114376"))))),l.a.createElement(N,null));var y=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container ",style:{marginBottom:"84px"}},l.a.createElement("header",{className:"section-title font-italic "},l.a.createElement("h1",{className:"display-4"},"Mariage")),l.a.createElement("div",{className:"section-text"},l.a.createElement("div",{className:"inner-section"},l.a.createElement("div",{className:"section-sub-title font-italic"},l.a.createElement("h4",null,"D\xe9cors floraux pour votre Mariage ou R\xe9ception")),l.a.createElement("p",{className:"lead"},"Pour d\xe9corer les tables du repas : ",l.a.createElement("br",null),"Des centres de tables floraux cr\xe9\xe9s selon vos couleurs avec location de bougeoirs et accessoires d\xe9co")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"inner-section"},l.a.createElement("div",{className:"lead"},"Pour une belle harmonie Orianne D\xe9coratrice r\xe9alise \xe9galement des d\xe9cors compl\xe9mentaires : ",l.a.createElement("br",null),"Bouquet de mari\xe9e en harmonie avec votre robe ",l.a.createElement("br",null),"Boutonni\xe8re du mari\xe9 assortie ",l.a.createElement("br",null),"Housses de chaises en tissu blanc ",l.a.createElement("br",null),"Arche d\xe9cor\xe9e - D\xe9cors floraux pour la c\xe9r\xe9monie - D\xe9cors pour les buffets du vin d'honneur et c\xe9r\xe9monie en ext\xe9rieur"))),l.a.createElement(g,{category:"mariage",pics:["champ","hochberg","italie","1","2","4","5","6","7","8","9","10","11","12","2_champ2","2_cheese","2_print","2_tent","2_tent2","2_vint","14"]})),l.a.createElement(N,null));var T=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{marginBottom:"84px"}},l.a.createElement("header",{className:"section-title font-italic "},l.a.createElement("h1",{className:"display-4"},"D\xe9coration d'int\xe9rieur")),l.a.createElement("div",{className:"section-text"},l.a.createElement("div",{className:"inner-section"},l.a.createElement("div",{className:"section-sub-title font-italic"},l.a.createElement("h4",null,"Relooker votre d\xe9coration")),l.a.createElement("p",null,"Des conseils et des id\xe9es qui s'adaptent \xe0 vos besoins","\n"," Orianne vous conseille pour le choix des couleurs murales de votre int\xe9rieur")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"inner-section"},l.a.createElement("div",{className:"section-sub-title font-italic"},l.a.createElement("h4",null,"Harmoniser votre pi\xe8ce")),l.a.createElement("p",null,"Orianne vous guide pour choisir les accessoires et le mobilier")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"inner-section"},l.a.createElement("div",{className:"section-sub-title font-italic"},l.a.createElement("h4",null,"Am\xe9nager votre int\xe9rieur")),l.a.createElement("p",null,"Des id\xe9es pour am\xe9nager un int\xe9rieur pratique et agr\xe9able"))),l.a.createElement(g,{category:"interieur",pics:["2855","2858","2864"]})),l.a.createElement(N,null));var x=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Mentions l\xe9gales"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Site internet"),l.a.createElement("p",null,"Le site Orianne D\xe9coratrice est accessible \xe0 l'adresse",l.a.createElement("a",{href:" https://oriannedecoratrice.com"},"https://oriannedecoratrice.com")),l.a.createElement("h3",null,"R\xe9daction du site internet"),l.a.createElement("p",null,"Auteur: Philippe Jaming ",l.a.createElement("br",null),"Contact: 06 74 25 72 29 : jamingph@gmail.com"),l.a.createElement("h3",null,"Hebergeur du site internet"),l.a.createElement("p",null,"Le site oriannedecoaratrice.com est he\u0301berge\u0301 par HOSTINGER, dont le sie\u0300ge social est situe\u0301 HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen suivant :https://www.hostinger.fr/contact."),l.a.createElement("h3",null,"Respect de la propri\xe9t\xe9 intellectuelle"),l.a.createElement("p",null,"Toutes les marques, photographies, textes, commentaires, illustrations, images anime\u0301es ou non, se\u0301quences vide\u0301o, sons, ainsi que toutes les applications informatiques qui pourraient e\u0302tre utilise\u0301es pour faire fonctionner le Site et plus ge\u0301ne\u0301ralement tous les e\u0301le\u0301ments reproduits ou utilise\u0301s sur le Site sont prote\u0301ge\u0301s par les lois en vigueur au titre de la proprie\u0301te\u0301 intellectuelle. Ils sont la proprie\u0301te\u0301 pleine et entie\u0300re de l\u2019Editeur ou de ses partenaires, sauf mentions particulie\u0300res. Toute reproduction, repre\u0301sentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces e\u0301le\u0301ments, y compris les applications informatiques, sans l\u2019accord pre\u0301alable et e\u0301crit de l\u2019Editeur, sont strictement interdites. Le fait pour l\u2019Editeur de ne pas engager de proce\u0301dure de\u0300s la prise de connaissance de ces utilisations non autorise\u0301es ne vaut pas acceptation desdites utilisations et renonciation aux poursuites. Seule l\u2019utilisation pour un usage prive\u0301 dans un cercle de famille est autorise\u0301e et toute autre utilisation est constitutive de contrefac\u0327on et/ou d\u2019atteinte aux droits voisins, sanctionne\u0301es par Code de la proprie\u0301te\u0301 intellectuelle. La reprise de tout ou partie de ce contenu ne\u0301cessite l\u2019autorisation pre\u0301alable de l\u2019Editeur ou du titulaire des droits sur ce contenu."))};var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(d,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(h,null)}),l.a.createElement(m.a,{path:"/mariage",element:l.a.createElement(y,null)}),l.a.createElement(m.a,{path:"/interieur",element:l.a.createElement(T,null)}),l.a.createElement(m.a,{path:"/contact",element:l.a.createElement(w,null)}),l.a.createElement(m.a,{path:"/mentions-legales",element:l.a.createElement(x,null)}))))};s.a.render(l.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.797a2910.chunk.js.map