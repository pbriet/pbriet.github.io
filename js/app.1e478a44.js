(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cbd":function(e,t,n){"use strict";var a=n("a166"),i=n.n(a);i.a},"0f8b":function(e,t,n){},"1c56":function(e,t,n){"use strict";var a=n("7ebc"),i=n.n(a);i.a},"4aeb":function(e,t,n){"use strict";var a=n("93d6"),i=n.n(a);i.a},"4f16":function(e,t,n){"use strict";var a=n("c250"),i=n.n(a);i.a},5195:function(e,t,n){"use strict";var a=n("0f8b"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),i=(n("ac1f"),n("5319"),{install:function(e){e.mixin({methods:{publicPath:function(e){return"/"+e.replace(/^\/+/g,"")}}})}}),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("main-container")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"dark-template"}},[n("div",{staticClass:"d-none d-print-block",attrs:{id:"print-header"}},[e._v(" "+e._s(e.trans("SEE_CV"))+" "),n("a",{attrs:{href:"https://pbriet.github.io",target:"_blank"}},[e._v(" https://pbriet.github.io?lang="+e._s(e.lang)+" ")])]),n("div",{staticClass:"d-print-none",attrs:{id:"flags"}},e._l(e.langs,(function(t){return n("a",{key:t,attrs:{href:e.lang_href(t)}},[e._v(" "+e._s(t)+" ")])})),0),n("v-fade-transition",{attrs:{mode:"out-in",type:"animation"}},[n("v-main",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{lg10:"",sm12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{sm4:"",id:"sidebar-column"}},[n("sidebar-container",{staticClass:"fill-height"})],1),n("v-flex",{attrs:{sm8:"",id:"content-column"}},[n("content-container",{staticClass:"fill-height"})],1)],1)],1)],1)],1)],1)],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{id:"sidebar",color:"primary darken-3",dark:""}},[n("v-card-text",[n("avatar"),n("div",{staticClass:"text-sm-center mb-4 mt-3"},[n("h1",[e._v(" Pascal Briet ")]),n("span",[e._v(" "+e._s(e.trans("SUBTITLE"))+" ")])]),n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v(" Infos ")]),n("sidebar-infos",{attrs:{options:e.sections.info}})],1),n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v(" "+e._s(e.trans("PROFILE_TITLE"))+" ")]),n("sidebar-skills")],1),n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v(" "+e._s(e.trans("KEYPOINT_TITLE"))+" ")]),n("ul",[n("li",{domProps:{innerHTML:e._s(e.trans("FULLSTACK_DEVELOPER"))}}),n("li",[e._v(e._s(e.trans("SOFTWARE_ARCHITECT")))]),n("li",[e._v(e._s(e.trans("EXPERIENCE")))]),n("li",[e._v(e._s(e.trans("ENTREPRENEUR")))]),n("li",[e._v(e._s(e.trans("PRAGMATIC")))]),n("li",[e._v(e._s(e.trans("RIGOROUS")))]),n("li",[e._v(e._s(e.trans("SELFTRAINING")))])])]),n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v(" "+e._s(e.trans("HOBBIES"))+" ")]),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"leasure"},[n("v-icon",[e._v("mdi-feather")]),e._v(" "+e._s(e.trans("WRITING"))+" ")],1),n("div",{staticClass:"leasure"},[n("v-icon",[e._v("mdi-earth")]),e._v(" "+e._s(e.trans("GEOPOLITICS"))+" ")],1)]),n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"leasure"},[n("v-icon",[e._v("mdi-tennis")]),e._v(" "+e._s(e.trans("BADMINTON"))+" ")],1)])],1)],1),n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v(" "+e._s(e.trans("LANGUAGES"))+" ")]),e._v(" "+e._s(e.trans("FRENCH"))),n("br"),e._v(" "+e._s(e.trans("ENGLISH"))+" ")])],1)],1)},u=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-md-center"},[n("v-avatar",{attrs:{color:"grey lighten-4",size:"120"}},[n("img",{attrs:{src:e.publicPath("/img/avatar.jpg"),alt:"Pascal BRIET"}})])],1)},p=[],m={name:"Avatar"},v=m,h=n("2877"),g=n("6544"),f=n.n(g),b=n("8212"),E=Object(h["a"])(v,d,p,!1,null,"0e2a5002",null),y=E.exports;f()(E,{VAvatar:b["a"]});var _,S,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.options.items,(function(e,t){return n("SidebarInfoItem",{key:t,attrs:{item:e}})})),1)},R=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[e.hasIcon?n("v-flex",{attrs:{xs2:""}},[n("v-icon",[e._v(" "+e._s(e.item.icon)+" ")])],1):e._e(),n("v-flex",{attrs:{xs10:e.hasIcon,xs12:!e.hasIcon}},[n("div",[e._v(" "+e._s(e.transDict(e.item.name))+" ")]),n("p",{staticClass:"grey--text"},[e.item.text?n("span",[e._v(" "+e._s(e.transDict(e.item.text))+" ")]):e._e()])])],1)},N=[],x={computed:{lang:function(){return this.$store.state.lang}},methods:{trans:function(e){return this.translations[e][this.lang]},transDict:function(e){return e[this.lang]}}},w=x,I=Object(h["a"])(w,_,S,!1,null,null,null),F=I.exports,O={mixins:[F],name:"SidebarInfoItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},A=O,L=n("0e8f"),P=n("132d"),T=n("a722"),D=Object(h["a"])(A,C,N,!1,null,"a7edaf7a",null),j=D.exports;f()(D,{VFlex:L["a"],VIcon:P["a"],VLayout:T["a"]});var M={name:"SidebarInfos",components:{SidebarInfoItem:j},props:{options:{type:Object,default:function(){}}}},V=M,H=Object(h["a"])(V,k,R,!1,null,null,null),B=H.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},e._l(e.items,(function(t){return n("v-chip",{key:t.icon,staticClass:"ma-2",attrs:{light:"",color:"white","text-color":"secondary darken-4"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "+e._s(e.transDict(t.text))+" ")],1)})),1)},J=[],G={mixins:[F],data:function(){return{items:[{icon:"mdi-language-python",text:{FR:"Développeur backend",EN:"Backend developer"}},{icon:"mdi-cogs",text:{FR:"Architecte web",EN:"Web architect"}},{icon:"mdi-docker",text:{FR:"Devops",EN:"Devops"}}]}}},W=G,U=n("cc20"),K=Object(h["a"])(W,q,J,!1,null,null,null),Q=K.exports;f()(K,{VAvatar:b["a"],VChip:U["a"],VIcon:P["a"]});var z={name:"Sidebar",mixins:[F],components:{SidebarInfos:B,SidebarSkills:Q,Avatar:y},data:function(){return{sections:{info:{title:"INFO",items:[{name:{FR:"Annecy (Haute-savoie)",EN:"Annecy (France, Haute-savoie)"},text:{FR:"Permis A",EN:"Driving Licence"},icon:"mdi-map-marker"},{name:{FR:"13 janvier 1985",EN:"Jan 13th, 1985"},icon:"mdi-cake-variant",text:{FR:"35 ans - Français",EN:"35 years old - French"}},{name:{FR:"Disponible Octobre 2020",EN:"Available starting October 2020"},icon:"mdi-calendar"}]}},translations:{SUBTITLE:{FR:"Ingénieur web en quête de challenge",EN:"Full-stack web engineer, looking for challenge"},KEYPOINT_TITLE:{FR:"Points clés",EN:"Key points"},PROFILE_TITLE:{FR:"Profil",EN:"Main skills"},FULLSTACK_DEVELOPER:{FR:"Développeur <b>full-stack</b>",EN:"<b>Full stack</b> developer"},SOFTWARE_ARCHITECT:{FR:"Architecte logiciel",EN:"Software architect"},EXPERIENCE:{FR:"13 ans d'expérience",EN:"13 years experience"},ENTREPRENEUR:{FR:"Esprit d'entrepreneur",EN:"Entrepreneurship"},PRAGMATIC:{FR:"Pragmatique",EN:"Pragmatic"},RIGOROUS:{FR:"Rigoureux et efficace",EN:"Efficient and meticulous"},SELFTRAINING:{FR:"Auto-apprentissage",EN:"Self-learner"},HOBBIES:{FR:"Loisirs",EN:"Hobbies"},WRITING:{FR:"Ecriture",EN:"Writing"},BADMINTON:{FR:"Badminton",EN:"Badminton"},GEOPOLITICS:{FR:"Géopolitique",EN:"Geopolitics"},LANGUAGES:{FR:"Langues",EN:"Spoken languages"},FRENCH:{FR:"Français : natif",EN:"French: native"},ENGLISH:{FR:"Anglais : professionnel (1 an à Oxford)",EN:"English: professional (1 year spent in Oxford)"}}}}},$=z,Y=(n("4f16"),n("b0af")),X=n("99d9"),Z=n("62ad"),ee=n("0fd9"),te=Object(h["a"])($,c,u,!1,null,"4497d6f8",null),ne=te.exports;f()(te,{VCard:Y["a"],VCardText:X["b"],VCol:Z["a"],VIcon:P["a"],VRow:ee["a"]});var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{id:"main-container",color:"grey lighten-2",light:""}},[n("v-card-text",{attrs:{id:"main-container-card-content"}},[n("content-section",{attrs:{title:e.trans("LOOKING_FOR")}},[n("template",{slot:"short-version"},[n("div",{domProps:{innerHTML:e._s(e.trans("LOOKING_FOR_SHORT"))}})]),n("template",{slot:"long-version"},[n("div",{domProps:{innerHTML:e._s(e.trans("LOOKING_FOR_LONG"))}})])],2),n("content-section",{attrs:{id:"skills-list",title:e.trans("TECHNICAL_SKILLS"),"mono-slot":""},scopedSlots:e._u([{key:"default",fn:function(e){return[n("Techs",{attrs:{detailed:e.detailed}})]}}])}),n("content-section",{attrs:{title:e.trans("HUMAN_SKILLS")}},[n("template",{slot:"short-version"},[n("div",{domProps:{innerHTML:e._s(e.trans("HUMAN_SKILLS_SHORT"))}})]),n("template",{slot:"long-version"},[n("div",{domProps:{innerHTML:e._s(e.trans("HUMAN_SKILLS_LONG"))}})])],2),n("content-section",{attrs:{id:"experience-list",title:e.trans("EXPERIENCE"),"mono-slot":""},scopedSlots:e._u([{key:"default",fn:function(e){return[n("Experience",{attrs:{detailed:e.detailed}})]}}])})],1)],1)},ie=[],se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"content-section",attrs:{flat:""}},[n("v-card-title",[n("div",{staticClass:"title"},[n("div",{staticClass:"d-flex justify-space-between align-end"},[n("h3",{staticClass:"mb-1 primary--text text--darken-2"},[e._v(" "+e._s(e.title)+" ")]),n("v-switch",{staticClass:"title-switch d-none d-sm-flex d-print-none",attrs:{dense:"",label:e.detailed?e.trans("LONG_VERSION"):e.trans("SHORT_VERSION")},model:{value:e.detailed,callback:function(t){e.detailed=t},expression:"detailed"}})],1)]),n("v-switch",{staticClass:"title-switch title-switch-xs d-sm-none d-print-none",attrs:{dense:"",label:e.detailed?e.trans("LONG_VERSION"):e.trans("SHORT_VERSION")},model:{value:e.detailed,callback:function(t){e.detailed=t},expression:"detailed"}}),n("v-spacer"),e._t("actions")],2),n("v-card-text",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.monoSlot&&!e.detailed,expression:"!monoSlot && !detailed"}]},[e._t("short-version")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.monoSlot&&e.detailed,expression:"!monoSlot && detailed"}]},[e._t("long-version")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.monoSlot,expression:"monoSlot"}]},[e._t("default",null,{detailed:e.detailed})],2)])],1)},re=[],oe={name:"ContentSection",mixins:[F],components:{},props:{title:{type:String,default:""},monoSlot:{type:Boolean,default:!1}},data:function(){return{detailed:!1,translations:{LONG_VERSION:{FR:"Version longue",EN:"Long version"},SHORT_VERSION:{FR:"Version courte",EN:"Short version"}}}}},le=oe,ce=(n("0cbd"),n("2fa4")),ue=n("b73d"),de=Object(h["a"])(le,se,re,!1,null,null,null),pe=de.exports;f()(de,{VCard:Y["a"],VCardText:X["b"],VCardTitle:X["c"],VSpacer:ce["a"],VSwitch:ue["a"]});var me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticClass:"d-print-none",attrs:{id:"tech-filters",align:"start"}},[n("v-col",{attrs:{id:"tech-type-select-col",cols:"12",sm:"6",lg:"4"}},[n("v-select",{attrs:{items:e.trans("TECH_TYPE_CHOICES"),"item-text":"label","item-value":"value",label:"Type"},model:{value:e.techTypes,callback:function(t){e.techTypes=t},expression:"techTypes"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{multiple:"",chips:"",items:e.trans("LEVEL_CHOICES"),"item-text":"label","item-value":"value",label:e.trans("LEVEL")},model:{value:e.levels,callback:function(t){e.levels=t},expression:"levels"}})],1)],1),n("v-container",{class:{"small-techs":!e.detailed},attrs:{id:"tech-list"}},[n("transition-group",{attrs:{id:"tech-transition-group",name:"list",tag:"div"}},e._l(e.filteredTechs,(function(t){return n("div",{key:t.key,staticClass:"tech-col"},[n("v-card",{staticClass:"tech"},[n("v-card-title",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:e.nbColsIcon(e.detailed)}},[t.icon?n("v-icon",{attrs:{large:e.detailed,left:""}},[e._v(" "+e._s(t.icon)+" ")]):e._e(),t.img?n("v-img",{attrs:{src:t.img}}):e._e()],1),n("v-col",{staticClass:"text-center",attrs:{cols:e.nbColsTechTitle(e.detailed)}},[n("span",{staticClass:"tech-title"},[t.name.FR?[e._v(" "+e._s(e.transDict(t.name))+" ")]:[e._v(" "+e._s(t.name)+" ")]],2)])],1)],1),n("v-card-text",[t.experience?n("div",[n("div",{staticClass:"headline"},[e._v(" "+e._s(t.experience)+" "+e._s(e.trans("YEARS"))+" ")])]):e._e(),t.details?n("div",{staticClass:"tech-details"},[n("ul",e._l(e.transDict(t.details),(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e()])],1)],1)})),0)],1)],1)},ve=[],he=(n("caad"),n("2532"),n("b85c")),ge={name:"Techs",mixins:[F],props:["detailed"],data:function(){return{translations:{LEVEL:{FR:"Niveau",EN:"Level"},YEARS:{FR:"années",EN:"years"},TECH_TYPE_CHOICES:{FR:[{value:"all",label:"Toutes"},{value:"back",label:"Backend"},{value:"front",label:"Frontend"},{value:"devops",label:"DevOps / Système"}],EN:[{value:"all",label:"All"},{value:"back",label:"Backend"},{value:"front",label:"Frontend"},{value:"devops",label:"DevOps / Sysadmin"}]},LEVEL_CHOICES:{FR:[{value:"expert",label:"Expert"},{value:"high",label:"Avancé"},{value:"medium",label:"Moyen"}],EN:[{value:"expert",label:"Expert"},{value:"high",label:"Proficient"},{value:"medium",label:"Competent"}]}},techTypes:"all",levels:["expert","high"],techs:[{categories:["back"],icon:"mdi-language-python",name:"Python",key:"python",level:"expert",experience:13,details:{FR:["100% orienté objet","Tout l'univers du web","Bibliothèques scientifiques (numpy, matplotlib, ...)","Bonne maîtrise des mécanismes internes"],EN:["100% object-oriented","Web frameworks and libraries","Scientific libraries (numpy, matplotlib, ...)","Good knowledge of internals"]}},{categories:["back"],img:"/img/techs/django.svg",name:"Django",key:"django",level:"expert",experience:7,details:{FR:["API REST","ORM, MongoEngine, migrations, optimisation","Middlewares, widgets, templatetags, cache, ...","Celery"],EN:["REST API","ORM, MongoEngine, migrations, optimization","Middlewares, widgets, templatetags, cache, ...","Celery"]}},{categories:["devops"],icon:"mdi-docker",name:"Docker",key:"docker",level:"high",experience:4,details:{FR:["Projets multi-containers avec Docker-compose","Volumes, réseaux","Multi-stage builds, optimisations, ..."],EN:["Container orchestration with Docker-compose","Volumes, networks","Multi-stage builds, optimizations, ..."]}},{categories:["front"],icon:"mdi-vuejs",name:"VueJS",key:"vuejs",level:"high",experience:3,details:{FR:["Développement de gros projets SPA","VueX, Vuetify, Vue-router"],EN:["Large SPA projects","VueX, Vuetify, Vue-router"]}},{categories:["devops"],icon:"mdi-ansible",name:"Ansible",key:"ansible",level:"high",experience:7,details:{FR:["Déploiement de projets iso dev/staging/prod","Rôles, templates, handlers"],EN:["Multi-environment deployments (dev/staging/prod)","Roles, templates, handlers"]}},{categories:["devops"],icon:"mdi-linux",name:"Linux",key:"linux",level:"high",experience:9,details:{FR:["Administration : utilisateurs, SSH, sudoers","Gestion de paquets. Installations / Configurations.","cron, systemd, rotation de logs","Distribs : Debian, Ubuntu. Egalement : Alpine"],EN:["Users management: SSH, sudoers","Package management","cron, systemd, logs analysis","Debian, Ubuntu. A little bit of Alpine"]}},{categories:["front"],icon:"mdi-angular",name:"AngularJS",key:"angular",level:"high",experience:4,details:{FR:["Gros projet SPA","Problématiques de SEO (génération statique)"],EN:["Large SPA project","Handling of SEO issues (static serving)"]}},{categories:["devops"],icon:"mdi-kubernetes",name:"Kubernetes",key:"kubenernetes",level:"high",experience:2,details:{FR:["Configuration from scratch sur 2 projets","Google Cloud, Amazon EKS (kube2iam, ALB, external-secrets)","Skaffold, Helm, Minikube","Configs, Secrets, Jobs, Deployment, Ingress, Services","Ligne de commande"],EN:["Configuring 2 projects from scratch","Google Cloud, Amazon EKS (kube2iam, ALB, external-secrets)","Skaffold, Helm, Minikube","Configs, Secrets, Jobs, Deployment, Ingress, Services","Command line tool"]}},{categories:["devops"],icon:"mdi-source-branch",name:"GIT",key:"git",level:"high",experience:9,details:{FR:["Utilisation quotidienne","clone, checkout, commit, pull, push, logs, ...","Rarement : cherry-pick, rebase"],EN:["Daily use","clone, checkout, commit, pull, push, logs, ...","Rarely: cherry-pick, rebase"]}},{categories:["front"],icon:"mdi-webpack",name:"Webpack",key:"webpack",level:"medium",experience:2,details:{FR:["Configuration pour VueJS (via vue-cli)","Quelques customisations (configureWebpack, chainWebpack, ...)"],EN:["VueJS configurations (vue-cli)","Customizations (configureWebpack, chainWebpack, ...)"]}},{categories:["back"],icon:"mdi-database-search",name:"SQL",key:"sql",level:"high",experience:9,details:{FR:["Requêtage (direct ou via ORM)","PostgreSQL, MySQL","Administration : uniquement les bases","Optimisation de requêtes"],EN:["Queries (raw or through ORM)","PostgreSQL, MySQL","Basic administration knowledge","Query optimizations"]}},{categories:["back"],img:"/img/techs/mongo.jpeg",name:"MongoDB",key:"mongodb",level:"medium",experience:9,details:{FR:["Requêtage (direct ou via ORM)","MongoAtlas"],EN:["Queries (raw or through ORM)","MongoAtlas"]}},{categories:["back"],icon:"mdi-language-cpp",name:"C++",key:"cpp",level:"high",experience:8,details:{FR:["Utilisation avancée (méthodes templatées)","Peu manipulé ces dernières années"],EN:["Advanced usage (templated methods)","No project in recent years"]}},{categories:["front"],icon:"mdi-language-html5",name:"HTML",key:"html",level:"high",experience:14},{categories:["front"],icon:"mdi-language-javascript",name:"Javascript",key:"js",level:"high",experience:10,details:{FR:["Longue expérience (jQuery, AngularJS, VueJS, ES6)","Uniquement côté client (pas de NodeJS)"],EN:["Longtime experience (jQuery, AngularJS, VueJS, ES6)","Only client-side (no NodeJS)"]}},{categories:["back"],img:"/img/techs/flask.png",name:"Flask",key:"flask",level:"medium",experience:3,details:{FR:["API REST","Flask-cors, Flask-jwt, Flask-socketio"],EN:["API REST","Flask-cors, Flask-jwt, Flask-socketio"]}},{categories:["back"],icon:"mdi-cogs",name:{FR:"Algorithmie",EN:"Algorithms"},level:"high",key:"algo",details:{FR:["Spécialisation master","Datamining","Optimisation avec heuristique"],EN:["Datamining","Optimization with meta-heuristics"]}}]}},computed:{filteredTechs:function(){var e,t=[],n=Object(he["a"])(this.techs);try{for(n.s();!(e=n.n()).done;){var a=e.value;a=JSON.parse(JSON.stringify(a)),("all"===this.techTypes||a.categories.includes(this.techTypes))&&(this.levels.includes(a.level)&&t.push(a))}}catch(i){n.e(i)}finally{n.f()}return t}},methods:{nbColsIcon:function(e){return e?3:12},nbColsTechTitle:function(e){return e?9:12}}},fe=ge,be=(n("c9bd"),n("1c56"),n("a523")),Ee=n("adda"),ye=n("b974"),_e=Object(h["a"])(fe,me,ve,!1,null,"b8b30332",null),Se=_e.exports;f()(_e,{VCard:Y["a"],VCardText:X["b"],VCardTitle:X["c"],VCol:Z["a"],VContainer:be["a"],VIcon:P["a"],VImg:Ee["a"],VRow:ee["a"],VSelect:ye["a"]});var ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-timeline",{attrs:{dense:"","align-top":""}},e._l(e.experiences,(function(t){return n("v-timeline-item",{key:e.transDict(t.title),staticStyle:{"page-break-inside":"avoid !important"},attrs:{color:"secondary darken-4",small:!0}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(t.company)+" ")]),n("v-card-subtitle",[e._v(" "+e._s(t.date)+" ")]),n("v-card-text",[e.detailed?[n("div",[n("span",{staticClass:"exp-title"},[e._v(e._s(e.trans("THE_COMPANY"))+":")]),e._v(" "+e._s(e.transDict(t.companyDetails))+" ")]),n("div",{staticClass:"exp-section"},[n("div",{staticClass:"exp-title"},[e._v(e._s(e.trans("MY_ROLE"))+":")]),n("ul",e._l(e.transDict(t.roles),(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),t.projects?n("div",{staticClass:"exp-section"},[n("div",{staticClass:"exp-title"},[e._v(e._s(e.trans("MAIN_PROJECTS"))+":")]),n("ul",e._l(e.transDict(t.projects),(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),n("div",{staticClass:"exp-section"},[n("div",{staticClass:"exp-title"},[e._v("Technologies :")]),n("ul",e._l(e.transDict(t.techs),(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),t.links?n("div",{staticClass:"exp-section"},[n("div",{staticClass:"exp-title"},[e._v(e._s(e.trans("MORE_ABOUT"))+":")]),n("ul",e._l(t.links,(function(t){return n("li",{key:t.url},[n("a",{attrs:{target:"_blank",href:t.url}},[e._v(e._s(e.transDict(t.label)))])])})),0)]):e._e()]:[e._v(" "+e._s(e.transDict(t.shortContent))+" ")],t.tags?n("div",{staticClass:"exp-tags"},e._l(e.transDict(t.tags),(function(t){return n("v-chip",{key:t,staticClass:"ma-2"},[e._v(" "+e._s(t)+" ")])})),1):e._e()],2)],1)],1)})),1)],1)},Re=[],Ce={name:"Experience",mixins:[F],props:["detailed"],data:function(){return{translations:{THE_COMPANY:{FR:"L'entreprise ",EN:"Company"},MY_ROLE:{FR:"Mon rôle ",EN:"My role"},MAIN_PROJECTS:{FR:"Projets principaux ",EN:"Main projects"},MORE_ABOUT:{FR:"Pour en savoir plus ",EN:"More about this experience"}},experiences:[{date:"2016-2020",company:"Les Octets Libres (Quimperlé)",title:"Ingénieur full-stack/devops - Associé co-fondateur",shortContent:{FR:"Réalisation de projets sur mesure pour des TPE/PME : backoffice, API, connexion aux CRM",EN:"Building custom solutions for small businesses: backoffice, APIs, connections with CRM/ERP"},companyDetails:{FR:"Petite ESN (4 salariés) en coopérative. Développement de solutions à haute valeur ajoutée pour les entreprises. Edition d'une solution SAAS : SLEAD",EN:"Small business (4 employees). Designing custom solutions for businesses (automation, APIs, backoffice, connections with CRM/ERP). Also: editor of a SAAS solution named SLEAD."},roles:{FR:["Relation client","Architecte de solutions (choix des technologies, architecture logicielle)","Développeur backoffice","Développeur front","Devops","Stratégie d'entreprise (marketing, commercial)","Co-fondateur"],EN:["Customer relationship","Solution architect (picking the right techs, software design)","Backend development (mostly)","Frontend development","Devops","Business strategy (marketing, sales)","Co-founder"]},projects:{FR:["Outil de réalisation de devis automatisés pour les commerciaux d'une PME d'expertise comptable (lié à Salesforce)","Outil de réalisation de devis sur site public (https://www.slead.co)","Backoffice pour site de mise en relation de vétérinaire en ligne (téléphone, visio, ...)","Outil de suivi de l'entretien des bâtiments de La Défense (nettoyage, contrôle)","Renfort de l'équipe Weenat pour finalisation d'une nouvelle version (dont DevOps)"],EN:["Automated tool for sales people to build custom quotes (connected with Salesforce)","SAAS solution to build custom public quotes and gather some leads (https://www.slead.co)","Backoffice of a website that connects together vets and customers (through phone and videoconference)","Solution for supervising the maintenance of buildings (French secretary of Defense)","Joining the Weenat team to finalize a relase (mostly DevOps)"]},techs:{FR:["Python : Django, Flask","PHP : Wordpress (plus anecdotique)","JS : ES6, VueJS, Webpack, jQuery","Devops : Ansible, Docker, Kubernetes, Vagrant","Système : Linux"],EN:["Python : Django, Flask","PHP : Wordpress","JS : ES6, VueJS, Webpack, jQuery","Devops : Ansible, Docker, Kubernetes, Vagrant","Sysadmin : Linux"]},links:[{label:{FR:"Les Octets Libres",EN:"Les Octets Libres"},url:"https://www.lesoctetslibres.com"},{label:{FR:"SLEAD",EN:"SLEAD"},url:"https://www.slead.co"}],tags:{FR:["Backend","Devops","Entrepreneuriat"],EN:["Backend","Devops","Entrepreneurship"]}},{date:"2013-2016",company:"Cook&Be (Quimperlé)",title:"Président co-fondateur",shortContent:{FR:"Création d'une startup tech : du développement de la solution à la vente et au financement",EN:"Building a tech startup: from development to sales&marketing"},companyDetails:{FR:"Startup éditrice d'un planificateur de repas en ligne ultra-personnalisé. Les utilisateurs peuvent saisir leurs goûts, contraintes, objectifs, et des plannings de repas leur sont proposés sur mesure.",EN:"Startup: Higly-personnalized online meal planner. Users can define their tastes, personal constraints and targets. Cook&Be then generates custom meal plannings for the week from all these parameters."},roles:{FR:["Chef d'entreprise (création à mon initiative)","Business plan, prévisionnels","Recherche de financements","Juridique","Développeur FullStack","Marketing/commercial","Pitchs et concours"],EN:["CEO","Business plan, forecast budget","Looking for fundings","FullStack developer","Marketing/sales","Pitching and participating to startups contests"]},techs:{FR:["Python : Django","C++ : Algorithme haute performance + librairie Boost","JS : AngularJS, Grunt","Devops : Ansible, Vagrant","Système : Linux"],EN:["Python: Django","C++: Highly optimized genetic algorithm, Boost library","JS: AngularJS, Grunt","Devops: Ansible, Vagrant","Sysadmin: Linux"]},links:[{label:{FR:"Cook&Be",EN:"Cook&Be"},url:"https://www.cookandbe.com"}],tags:{FR:["FullStack","Entrepreneuriat"],EN:["FullStack","Entrepreneurship"]}},{date:"2011-2013",company:"Optimor Labs (Oxford - Angleterre)",title:"Ingénieur backend",shortContent:{FR:"Développement de solutions d'analyse de factures téléphoniques (scraping, Big data)",EN:"Development of a solution that scrapes mobile bills, and apply your usage to the others mobile offers in the market"},companyDetails:{FR:"Analyse en ligne des factures téléphoniques, et application de l'usage aux offres du marché",EN:"Online analysis of mobile bills (with scraping) by applying your usage (voice, texts, data) to the mobile offers available in the market"},roles:{FR:["Développeur Backend","Web scraping","Monitoring","Big data (réalisation d'analyses statistiques)"],EN:["Backend developer","Web scraping","Monitoring","Big data (looking for usage patterns, plotting)"]},techs:{FR:["Python","Devops : Munin","Système : Linux/MacOS"],EN:["Python","Devops: Munin","Sysadmin: Linux/MacOS"]},links:[{label:{FR:"BillMonitor",EN:"BillMonitor"},url:"https://www.billmonitor.com/"}],tags:{FR:["Backend","English spoken"],EN:["Backend","English spoken"]}},{date:"2007-2011",company:"OptimProcess (Paris)",title:"Ingénieur logiciel",shortContent:{FR:"Développement d'un logiciel Windows d'analyse de données industrielles",EN:"Development of a data analysis Windows software for the industry (understanding production defaults)"},companyDetails:{FR:"Editeur d'une solution d'analyse des défauts de production sur les chaînes de production industrielles",EN:"Editing a data analysis Windows software for the industry, that helps customers understanding their defaults in production lines."},roles:{FR:["Développeur","Scrum Master"],EN:["Developer (Software, MVC)","Scrum Master"]},techs:{FR:["Python : numpy, matplotlib, wxPython","C++ : algorithme de data mining","Système : Windows"],EN:["Python: numpy, matplotlib, wxPython","C++: data mining algorithm","Windows"]},links:[{label:{FR:"Acquisition par BearingPoint",EN:"BearingPoint acquires OptimProcess"},url:"https://www.lemondeinformatique.fr/actualites/lire-bearingpoint-s-offre-optimprocess-specialise-dans-l-optimisation-des-procedes-industriels-68193.html"}],tags:{FR:["Logiciel Windows","Scrum"],EN:["Windows software","Scrum"]}},{date:"2005",company:"Critéo (Paris)",title:"Stagiaire",shortContent:{FR:'Premier "employé" de Critéo, les tous premiers jours d\'une grande entreprise française !',EN:'First "employee". The very first days of a big European success-story!'},companyDetails:{FR:"Expert du reciblage publicitaire",EN:"Advertising platform (custom retargeting)"},roles:{FR:["Stagiaire",'Premier "employé" de Critéo, les tous premiers jours !',"Développement de la première maquette produit (PHP)"],EN:['First "employee". The very first days of a big European success-story!',"Development of the a first MVP in PHP"]},techs:{FR:["PHP","MySQL"],EN:["PHP","MySQL"]},tags:{FR:["Stage","Anecdote"],EN:["Internship","Anecdote"]}}]}}},Ne=Ce,xe=(n("bdb7"),n("4aeb"),n("8414")),we=n("1e06"),Ie=Object(h["a"])(Ne,ke,Re,!1,null,"44d9b159",null),Fe=Ie.exports;f()(Ie,{VCard:Y["a"],VCardSubtitle:X["a"],VCardText:X["b"],VCardTitle:X["c"],VChip:U["a"],VTimeline:xe["a"],VTimelineItem:we["a"]});var Oe={name:"MainContent",mixins:[F],components:{ContentSection:pe,Techs:Se,Experience:Fe},data:function(){return{translations:{TECHNICAL_SKILLS:{FR:"Compétences techniques",EN:"Technical skills"},EXPERIENCE:{FR:"Expérience",EN:"Experience"},LOOKING_FOR:{FR:"Ce que je cherche",EN:"What I'm looking for"},LOOKING_FOR_SHORT:{FR:"\n            Un nouveau défi à relever, pour évoluer techniquement et humainement.<br>\n            J'envisage notamment d'évoluer dans les domaines suivants : <b>Devops</b>, IA, management, ...",EN:"\n            A new challenge. I'd like to learn new technical and human skills.<br>\n            I'm especially attracted by the following : <b>Devops</b>, AI, management, ...\n          "},LOOKING_FOR_LONG:{FR:"\n\n            <h3>Un challenge intellectuel</h3>\n\n            Mon principal moteur est ma soif de connaissances. J'aime apprendre, me confronter à de nouveaux problèmes, les solutionner de manière élégante. J'y trouve beaucoup de satisfaction.<br><br>\n\n            Ayant désormais une bonne maîtrise de la plupart des problématiques backend/frontend, j'aimerais tendre vers une nouvelle direction : DevOPS, Intelligence Artificielle, ou autre univers connexe au développement.\n\n            <h3>Un nouvel environnement</h3>\n\n            Pendant toute ma carrière, j'ai travaillé dans des petites structures (de 1 à 11 salariés). J'ai aujourd'hui la curiosité de découvrir l'univers d'entreprises de taille plus critique.<br>\n            Je reste néanmoins ouvert à des opportunités dans de petites structures.\n\n            <h3>De l'émulation</h3>\n\n            J'aimerais rejoindre une équipe compétente et ambitieuse (au bon sens du terme). Des personnes investies dans le projet d'entreprise et bienveillantes.\n\n            <h3>Une entreprise remote-friendly</h3>\n\n            Je considère la pratique du télétravail comme étant gagnant-gagnant : moins de fatigue, moins de temps dans les transports, une meilleure productivité.<br>\n            Si j'apprécie l'ambiance de bureau et les interactions sociales avec les collègues, pouvoir se déplacer moins de 5 jours par semaine est un gros plus.\n          ",EN:"\n\n            <h3>An intellectual challenge</h3>\n\n            My main motives are: learning new things, resolving complex problems with simple and elegant solutions. It brings me high satisfaction.<br><br>\n\n            At this point of my career, I have a pretty good knowledge in 2 fields: frontend and backend development (especially the last one). I'd like to extend my expertise to new domains: DevOPS, artificial intelligence, or any intersting topic that you may suggest.\n\n            <h3>A new working environment</h3>\n\n            Until this day, I've always worked in small businesses (1 to 11 employees). I'm now curious to discover medium/large enterprises.<br>\n\n            But I'm still open to opportunities in startups, or as a freelance.\n\n            <h3>Working with top-level engineers</h3>\n\n            I wish to join a team with highly-skilled colleagues, involved in a team with benevolent leadership.\n\n            <h3>A remote-friendly employer</h3>\n\n            I think that working remotely is a win-win: less energy wasted in transports, better productivity.<br>\n            I really do like spending time with my teammates, but I will value a few days of remote work.\n          "},HUMAN_SKILLS:{FR:"Qualités humaines",EN:"Personal skills"},HUMAN_SKILLS_SHORT:{FR:"Exigeant envers moi-même, investi et pragmatique. Je ne sais pas faire les choses à moitié.<br>\n             Moteur et force de proposition, je m'épanouis dans un environnement peu conflictuel et bienveillant.",EN:"Setting myself high-standards, involved and pragmatic. My only way to work is intensely.<br>\n             Proactive, with leadership skills, I'm at my best in a peaceful and harmonious workplace."},HUMAN_SKILLS_LONG:{FR:"<h3>Entrepreneur dans l'âme</h3>\n\n            Avec 2 expériences de création de société, ma vision de l'entreprise ne se restreint pas à la technique. Je suis motivé par la finalité : satisfaction client, bénéfice commercial/marketing, automatisation de tâches administratives.\n\n            <br><br>\n\n            Ce passé d'entrepreneur m'a également démontré que j'étais avant tout un ingénieur, et non un commercial de terrain (le networking n'est pas ma tasse de thé...)\n\n            <h3>Rigoureux et efficace</h3>\n\n            J'aime que les choses soient bien faites. Je pense que la rigueur est une qualité essentielle de tout ingénieur.\n\n            <br><br>\n\n            Pour autant, je ne suis pas un perfectionniste, mais un pragmatique. Si les délais sont courts, il faut aller à l'essentiel et faire les sacrifices nécessaires.<br>\n            Quand je m'engage sur une date, je tiens toujours mes délais (peu commun dans le milieu !)\n\n            <h3>Forte capacité d'apprentissage</h3>\n\n            Je n'ai pas peur de me confronter à l'inconnu et d'apprendre de nouvelles technologies/pratiques. J'y trouve d'ailleurs un certain plaisir.<br>\n\n            Je me suis auto-formé à : Django, VueJS, Ansible, Docker, Kubernetes. Puis j'ai formé les équipes dans lesquelles je travaillais.<br><br>\n\n            Si j'apprécie certains univers (Python, Docker, ...), je suis donc parfaitement ouvert au travail dans d'autres environnements (Java, NodeJS, ...)\n\n            <h3>Leadership horizontal</h3>\n\n            Bien que d'un naturel plutôt discret, j'ai toujours naturellement pris le lead des équipes dans lesquelles j'ai été (et ce, même en télétravail). Je sais organiser, accompagner, écouter, impulser de nouvelles pratiques. J'ai une forte préférence pour les organisations peu hiérarchiques.\n          ",EN:"<h3>An entrepreneurial spirit</h3>\n\n            Having co-created 2 businesses (twice my initiative), what I see in a company is much more than the technical aspects. What I care about is customer satisfaction and cost-effectiveness. I have a good culture in sales and marketing, but what I'm good at is engineering.\n\n            <h3>Meticulous and efficient</h3>\n\n            I like things to be pretty and clean. That's the only way a project can work in the medium-term.\n\n            <br><br>\n\n            Still, I'm not a perfectionist but a pragmatic developer. If the deadline is short, I won't waste time on details.<br>\n            When I commit myself to a deadline, I always meet the expectations (which is quite rare in the world of developers!)\n\n            <h3>Self-learner</h3>\n\n            I'm not afraid to learn new technologies/methodologies. On the contrary, I really enjoy it.<br>\n\n            I have self-learned: Django, VueJS, Ansible, Docker, Kubernetes. Once I master a new technology, I also like to share it to my colleagues.<br><br>\n\n            I'm fond of some technologies that I already master (Python, Docker, ...), but I'm open to discover other environments (Java, NodeJS, ...)\n\n            <h3>Horizontal leadership</h3>\n\n            With a rather calm personality, I'm clearly not a chef. But I've always taken the lead in the teams I worked. I'm pretty good at organizing, orchestrating, communicating and introducing change."}}}}},Ae=Oe,Le=(n("6be3"),Object(h["a"])(Ae,ae,ie,!1,null,null,null)),Pe=Le.exports;f()(Le,{VCard:Y["a"],VCardText:X["b"]});var Te={name:"MainContainer",mixins:[F],components:{ContentContainer:Pe,SidebarContainer:ne},data:function(){return{langs:["FR","EN"],translations:{SEE_CV:{FR:"Retrouvez ce CV sous format interactif :",EN:"Read this CV in interactive mode:"}}}},methods:{lang_href:function(e){return"?lang="+e}}},De=Te,je=(n("5195"),n("cfe6"),n("7496")),Me=n("0789"),Ve=n("f6c4"),He=Object(h["a"])(De,o,l,!1,null,"97b3cbf2",null),Be=He.exports;f()(He,{VApp:je["a"],VContainer:be["a"],VFadeTransition:Me["d"],VFlex:L["a"],VLayout:T["a"],VMain:Ve["a"]});var qe={name:"App",components:{MainContainer:Be},data:function(){return{}}},Je=qe,Ge=Object(h["a"])(Je,s,r,!1,null,null,null),We=Ge.exports;f()(Ge,{VApp:je["a"],VMain:Ve["a"]});n("d3b7"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d");var Ue=n("2f62");a["a"].use(Ue["a"]);var Ke=new Ue["a"].Store({state:{lang:"FR"},mutations:{setLang:function(e,t){e.lang=t}},actions:{initLang:function(e){var t=new URLSearchParams(window.location.search),n=t.get("lang");n&&e.commit("setLang",n)}}}),Qe=Ke,ze=n("f309"),$e=n("18f2"),Ye=n.n($e),Xe={light:{primary:"#f45595",secondary:"#93E1D8",accent:"#f45595",info:"#8d8d8d",error:"#f45595",warning:"#065c31",light_grey:"#cccccc",dark_grey:"#444",silver:"C0C0C0",gold:"D4AF37"},dark:{primary:"#f45595",secondary:"#93E1D8",accent:"#f45595",info:"#8d8d8d",error:"#f45595",warning:"#065c31",light_grey:"#cccccc",dark_grey:"#444"}};a["a"].use(ze["a"]);var Ze=new ze["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:Xe.light,dark:Xe.dark}},lang:{locales:{fr:Ye.a},current:"fr"}});a["a"].config.productionTip=!1,a["a"].use(i),new a["a"]({vuetify:Ze,store:Qe,render:function(e){return e(We)},created:function(){this.$store.dispatch("initLang")}}).$mount("#app")},"6be3":function(e,t,n){"use strict";var a=n("ca2a"),i=n.n(a);i.a},"6d28":function(e,t,n){},"7ebc":function(e,t,n){},"93d6":function(e,t,n){},a166:function(e,t,n){},aa26:function(e,t,n){},bdb7:function(e,t,n){"use strict";var a=n("eda4"),i=n.n(a);i.a},c250:function(e,t,n){},c9bd:function(e,t,n){"use strict";var a=n("aa26"),i=n.n(a);i.a},ca2a:function(e,t,n){},cfe6:function(e,t,n){"use strict";var a=n("6d28"),i=n.n(a);i.a},eda4:function(e,t,n){}});
//# sourceMappingURL=app.1e478a44.js.map