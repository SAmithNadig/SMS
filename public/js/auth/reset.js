(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ZuF2:function(t,e,s){"use strict";var r={methods:{getConfig:function(t){return helper.getConfig(t)}}},o=s("KHd+"),a=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"text-center"},[e("small",[this._v(this._s(this.getConfig("footer_credit"))+" "+this._s(this.trans("general.version")+" "+this.getConfig("v")))])])])}),[],!1,null,null,null);e.a=a.exports},s3P2:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{resetForm:new Form({email:"",password:"",password_confirmation:"",token:""}),isTokenValidated:!1}},components:{guestFooter:s("ZuF2").a},mounted:function(){if(!helper.featureAvailable("reset_password"))return helper.featureNotAvailableMsg(),this.$router.push("/dashboard")},methods:{validate:function(){var t=this,e=this.$loading.show();axios.post("/api/auth/validate-password-reset",{token:this.resetForm.token,email:this.resetForm.email}).then((function(s){t.isTokenValidated=!0,e.hide()})).catch((function(t){helper.showErrorMsg(t),e.hide()}))},submit:function(t){var e=this,s=this.$loading.show();this.resetForm.post("/api/auth/reset").then((function(t){toastr.success(t.message),e.isTokenValidated=!1,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}},computed:{getLogo:function(){return helper.getLogo()}}},o=s("KHd+"),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"wrapper"}},[s("div",{staticClass:"login-register guest-page"},[s("div",{staticClass:"login-box card guest-box"},[s("div",{staticClass:"card-body p-4"},[s("img",{staticClass:"mx-auto d-block",staticStyle:{"max-width":"250px"},attrs:{src:t.getLogo}}),t._v(" "),s("h3",{staticClass:"box-title m-t-20 m-b-10"},[t._v(t._s(t.trans("passwords.reset_password")))]),t._v(" "),s("form",{staticClass:"form-horizontal form-material",attrs:{id:"resetform"},on:{submit:function(e){return e.preventDefault(),t.submit(e)},keydown:function(e){return t.resetForm.errors.clear(e.target.name)}}},[t.isTokenValidated?[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.resetForm.password,expression:"resetForm.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:t.trans("auth.password")},domProps:{value:t.resetForm.password},on:{input:function(e){e.target.composing||t.$set(t.resetForm,"password",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.resetForm,"prop-name":"password"}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.resetForm.password_confirmation,expression:"resetForm.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:t.trans("auth.confirm_password")},domProps:{value:t.resetForm.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.resetForm,"password_confirmation",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.resetForm,"prop-name":"password_confirmation"}})],1)]:[s("div",{staticClass:"form-group "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.resetForm.email,expression:"resetForm.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:t.trans("auth.email")},domProps:{value:t.resetForm.email},on:{input:function(e){e.target.composing||t.$set(t.resetForm,"email",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.resetForm,"prop-name":"email"}})],1),t._v(" "),s("div",{staticClass:"form-group "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.resetForm.token,expression:"resetForm.token"}],staticClass:"form-control",attrs:{type:"text",name:"token",placeholder:t.trans("passwords.reset_token")},domProps:{value:t.resetForm.token},on:{input:function(e){e.target.composing||t.$set(t.resetForm,"token",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.resetForm,"prop-name":"token"}})],1)],t._v(" "),s("div",{staticClass:"form-group text-center m-t-20"},[t.isTokenValidated?s("button",{staticClass:"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light",attrs:{type:"submit"}},[t._v(t._s(t.trans("passwords.reset_password")))]):t._e(),t._v(" "),t.isTokenValidated?t._e():s("button",{staticClass:"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light",attrs:{type:"button"},on:{click:t.validate}},[t._v(t._s(t.trans("passwords.validate_token")))])])],2),t._v(" "),s("div",{staticClass:"form-group m-b-0"},[s("div",{staticClass:"col-sm-12 text-center"},[s("p",[t._v(t._s(t.trans("auth.back_to_login?"))+" "),s("router-link",{staticClass:"text-info m-l-5",attrs:{to:"/login"}},[s("b",[t._v(t._s(t.trans("auth.sign_in")))])])],1)])])]),t._v(" "),s("guest-footer")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);
//# sourceMappingURL=reset.js.map?id=e9301e83340a392e011c