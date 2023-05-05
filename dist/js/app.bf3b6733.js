(function(){"use strict";var e={185:function(e,t,r){var s=r(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:{name:"home"}}},[e._v("Home")]),e._v(" |  "),""!=e.$store.state.token?t("router-link",{attrs:{to:{name:"logout"}}},[e._v("Logout")]):e._e()],1),t("router-view")],1)},a=[],n=r(1001),i={},u=(0,n.Z)(i,o,a,!1,null,null,null),l=u.exports,m=r(2631),d=function(){var e=this;e._self._c;return e._m(0)},p=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("h1",[e._v("Home")]),t("p",[e._v("You must be authenticated to see this")])])}],c={name:"home-page"},v=c,f=(0,n.Z)(v,d,p,!1,null,null,null),g=f.exports,h=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login-page"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("h1",[e._v("Please Sign In")]),e.invalidCredentials?t("div",{attrs:{role:"alert"}},[e._v(" Invalid username and password! ")]):e._e(),this.$route.query.registration?t("div",{attrs:{role:"alert"}},[e._v(" Thank you for registering, please sign in. ")]):e._e(),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",id:"username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("Sign in")]),t("p",[t("router-link",{attrs:{to:{name:"register-page"}}},[e._v("Need an account? Sign up.")])],1)])])},w=[],_=(r(7658),r(4161)),b={login(e){return _.Z.post("/login",e)},register(e){return _.Z.post("/users",e)}},P={name:"login-page",components:{},data(){return{user:{username:"",password:""},invalidCredentials:!1}},methods:{login(){b.login(this.user).then((e=>{200==e.status&&(this.$store.commit("SET_AUTH_TOKEN",e.data.token),this.$store.commit("SET_USER",e.data.user),this.$router.push("/home"))})).catch((e=>{const t=e.response;401===t.status&&(this.invalidCredentials=!0)}))}}},N=P,y=(0,n.Z)(N,h,w,!1,null,"dc94400a",null),x=y.exports,E=function(){var e=this,t=e._self._c;return t("h1",[e._v("Logout")])},k=[],C={created(){this.$store.commit("LOGOUT"),this.$router.push("/login")}},O=C,Z=(0,n.Z)(O,E,k,!1,null,null,null),$=Z.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center",attrs:{id:"register"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[t("h1",[e._v("Create Account")]),e.registrationErrors?t("div",{attrs:{role:"alert"}},[e._v(" "+e._s(e.registrationErrorMsg)+" ")]):e._e(),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",id:"username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"confirmPassword"}},[e._v("Confirm Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",id:"confirmPassword",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}})]),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"firstName"}},[e._v("First Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],attrs:{type:"text",id:"firstName",required:""},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"lastName"}},[e._v("Last Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],attrs:{type:"text",id:"lastName",required:""},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}})]),t("div",{staticClass:"form-input-group"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",id:"email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("Create Account")]),t("p",[t("router-link",{attrs:{to:{name:"login"}}},[e._v("Already have an account? Log in.")])],1)])])},q=[],T={name:"register-page",data(){return{user:{username:"",password:"",confirmPassword:"",firstName:"",lastName:"",email:"",role:"user"},registrationErrorMsg:"There were problems registering this user."}},methods:{register(){this.user.password!=this.user.confirmPassword?(this.registrationErrors=!0,this.registrationErrorMsg="Password & Confirm Password do not match."):b.register(this.user).then((e=>{201==e.status&&this.$router.push({path:"/login",query:{registration:"success"}})})).catch((e=>{const t=e.response;this.registrationErrors=!0,400===t.status&&(this.registrationErrorMsg="Bad Request: Validation Errors")}))},clearErrors(){this.registrationErrors=!1,this.registrationErrorMsg="There were problems registering this user."}}},A=T,U=(0,n.Z)(A,S,q,!1,null,"0cb4e01e",null),I=U.exports,L=r(3822);s.ZP.use(L.ZP);const j=localStorage.getItem("token"),M=JSON.parse(localStorage.getItem("user"));null!=j&&(_.Z.defaults.headers.common.Authorization=`Bearer ${j}`);var H=new L.ZP.Store({state:{token:j||"",user:M||{}},mutations:{SET_AUTH_TOKEN(e,t){e.token=t,localStorage.setItem("token",t),_.Z.defaults.headers.common.Authorization=`Bearer ${t}`},SET_USER(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},LOGOUT(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},_.Z.defaults.headers.common={}}}});s.ZP.use(m.ZP);const R=new m.ZP({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:x,meta:{requiresAuth:!1}},{path:"/logout",name:"logout",component:$,meta:{requiresAuth:!1}},{path:"/register",name:"register-page",component:I,meta:{requiresAuth:!1}}]});R.beforeEach(((e,t,r)=>{const s=e.matched.some((e=>e.meta.requiresAuth));s&&""===H.state.token?r("/login"):r()}));var B=R;s.ZP.config.productionTip=!1,_.Z.defaults.baseURL="http://localhost:9000",new s.ZP({router:B,store:H,render:e=>e(l)}).$mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,s,o,a){if(!s){var n=1/0;for(m=0;m<e.length;m++){s=e[m][0],o=e[m][1],a=e[m][2];for(var i=!0,u=0;u<s.length;u++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[u])}))?s.splice(u--,1):(i=!1,a<n&&(n=a));if(i){e.splice(m--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[s,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,n=s[0],i=s[1],u=s[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var m=u(r)}for(t&&t(s);l<n.length;l++)a=n[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},s=self["webpackChunkdailyfoodintake_ui"]=self["webpackChunkdailyfoodintake_ui"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(185)}));s=r.O(s)})();
//# sourceMappingURL=app.bf3b6733.js.map