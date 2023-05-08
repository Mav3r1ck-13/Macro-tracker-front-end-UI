(function(){"use strict";var e={6104:function(e,r,t){var s=t(6369),o=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"home"}}},[e._v("Home")]),e._v(" |  "),""!=e.$store.state.token?r("router-link",{attrs:{to:{name:"logout"}}},[e._v("Logout")]):e._e()],1),r("router-view")],1)},a=[],n=t(1001),i={},u=(0,n.Z)(i,o,a,!1,null,null,null),l=u.exports,m=t(2631),d=function(){var e=this;e._self._c;return e._m(0)},p=[function(){var e=this,r=e._self._c;return r("div",{staticClass:"home"},[r("h1",[e._v("Home")]),r("p",[e._v("You must be authenticated to see this")])])}],c={name:"home-page"},v=c,f=(0,n.Z)(v,d,p,!1,null,null,null),g=f.exports,h=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"login-page"}},[r("form",{on:{submit:function(r){return r.preventDefault(),e.login.apply(null,arguments)}}},[r("h1",[e._v("Please Sign In")]),e.invalidCredentials?r("div",{attrs:{role:"alert"}},[e._v(" Invalid username and password! ")]):e._e(),this.$route.query.registration?r("div",{attrs:{role:"alert"}},[e._v(" Thank you for registering, please sign in. ")]):e._e(),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",id:"username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(r){r.target.composing||e.$set(e.user,"username",r.target.value)}}})]),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.user.password},on:{input:function(r){r.target.composing||e.$set(e.user,"password",r.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("Sign in")]),r("p",[r("router-link",{attrs:{to:{name:"register-page"}}},[e._v("Need an account? Sign up.")])],1)])])},w=[],_=(t(7658),t(4161)),b={login(e){return _.Z.post("/login",e)},register(e){return _.Z.post("/users",e)}},P={name:"login-page",components:{},data(){return{user:{username:"",password:""},invalidCredentials:!1}},methods:{login(){b.login(this.user).then((e=>{200==e.status&&(this.$store.commit("SET_AUTH_TOKEN",e.data.token),this.$store.commit("SET_USER",e.data.user),this.$router.push("/home"))})).catch((e=>{const r=e.response;401===r.status&&(this.invalidCredentials=!0)}))}}},N=P,y=(0,n.Z)(N,h,w,!1,null,"dc94400a",null),x=y.exports,E=function(){var e=this,r=e._self._c;return r("h1",[e._v("Logout")])},k=[],C={created(){this.$store.commit("LOGOUT"),this.$router.push("/login")}},O=C,$=(0,n.Z)(O,E,k,!1,null,null,null),S=$.exports,Z=function(){var e=this,r=e._self._c;return r("div",{staticClass:"text-center",attrs:{id:"register"}},[r("form",{on:{submit:function(r){return r.preventDefault(),e.register.apply(null,arguments)}}},[r("h1",[e._v("Create Account")]),e.registrationErrors?r("div",{attrs:{role:"alert"}},[e._v(" "+e._s(e.registrationErrorMsg)+" ")]):e._e(),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",id:"username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(r){r.target.composing||e.$set(e.user,"username",r.target.value)}}})]),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.user.password},on:{input:function(r){r.target.composing||e.$set(e.user,"password",r.target.value)}}})]),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"confirmPassword"}},[e._v("Confirm Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",id:"confirmPassword",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(r){r.target.composing||e.$set(e.user,"confirmPassword",r.target.value)}}})]),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"firstName"}},[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],attrs:{type:"text",id:"firstName",required:""},domProps:{value:e.user.firstName},on:{input:function(r){r.target.composing||e.$set(e.user,"firstName",r.target.value)}}})]),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"lastName"}},[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],attrs:{type:"text",id:"lastName",required:""},domProps:{value:e.user.lastName},on:{input:function(r){r.target.composing||e.$set(e.user,"lastName",r.target.value)}}})]),r("div",{staticClass:"form-input-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",id:"email",required:""},domProps:{value:e.user.email},on:{input:function(r){r.target.composing||e.$set(e.user,"email",r.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("Create Account")]),r("p",[r("router-link",{attrs:{to:{name:"login"}}},[e._v("Already have an account? Log in.")])],1)])])},q=[],T={name:"register-page",data(){return{user:{username:"",password:"",confirmPassword:"",firstName:"",lastName:"",email:"",role:"user"},registrationErrors:!1,registrationErrorMsg:"There were problems registering this user."}},methods:{register(){this.user.password!=this.user.confirmPassword?(this.registrationErrors=!0,this.registrationErrorMsg="Password & Confirm Password do not match."):b.register(this.user).then((e=>{201==e.status&&this.$router.push({path:"/login",query:{registration:"success"}})})).catch((e=>{const r=e.response;this.registrationErrors=!0,400===r.status&&(this.registrationErrorMsg="Bad Request: Validation Errors")}))},clearErrors(){this.registrationErrors=!1,this.registrationErrorMsg="There were problems registering this user."}}},A=T,I=(0,n.Z)(A,Z,q,!1,null,"7e96e2f5",null),U=I.exports,j=t(3822);s.ZP.use(j.ZP);const L=localStorage.getItem("token"),M=JSON.parse(localStorage.getItem("user"));null!=L&&(_.Z.defaults.headers.common.Authorization=`Bearer ${L}`);var H=new j.ZP.Store({state:{token:L||"",user:M||{}},mutations:{SET_AUTH_TOKEN(e,r){e.token=r,localStorage.setItem("token",r),_.Z.defaults.headers.common.Authorization=`Bearer ${r}`},SET_USER(e,r){e.user=r,localStorage.setItem("user",JSON.stringify(r))},LOGOUT(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},_.Z.defaults.headers.common={}}}});s.ZP.use(m.ZP);const B=new m.ZP({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:x,meta:{requiresAuth:!1}},{path:"/logout",name:"logout",component:S,meta:{requiresAuth:!1}},{path:"/register",name:"register-page",component:U,meta:{requiresAuth:!1}}]});B.beforeEach(((e,r,t)=>{const s=e.matched.some((e=>e.meta.requiresAuth));s&&""===H.state.token?t("/login"):t()}));var R=B;s.ZP.config.productionTip=!1,new s.ZP({router:R,store:H,render:e=>e(l)}).$mount("#app")}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var a=r[s]={exports:{}};return e[s](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(r,s,o,a){if(!s){var n=1/0;for(m=0;m<e.length;m++){s=e[m][0],o=e[m][1],a=e[m][2];for(var i=!0,u=0;u<s.length;u++)(!1&a||n>=a)&&Object.keys(t.O).every((function(e){return t.O[e](s[u])}))?s.splice(u--,1):(i=!1,a<n&&(n=a));if(i){e.splice(m--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[s,o,a]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,s){var o,a,n=s[0],i=s[1],u=s[2],l=0;if(n.some((function(r){return 0!==e[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(u)var m=u(t)}for(r&&r(s);l<n.length;l++)a=n[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(m)},s=self["webpackChunkdailyfoodintake_ui"]=self["webpackChunkdailyfoodintake_ui"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(6104)}));s=t.O(s)})();
//# sourceMappingURL=app.c04e2086.js.map