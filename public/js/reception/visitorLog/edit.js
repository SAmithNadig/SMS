(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{awYS:function(t,e,i){"use strict";var o={components:{},data:function(){return{visitorLogForm:new Form({name:"",company_name:"",relation_with_student:"",contact_number:"",address:"",type:"parent",student_id:"",visiting_purpose_id:"",employee_id:"",visitor_count:1,date_of_visit:"",entry_time:"",exit_time:"",remarks:""}),loaded:!1,entry_time:{hour:"",minute:"",meridiem:"am"},exit_time:{hour:"",minute:"",meridiem:""},visiting_purposes:[],selected_visiting_purpose:null,students:[],selected_student:null,employees:[],selected_employee:null}},props:["uuid"],mounted:function(){helper.hasPermission("create-visitor-log")||helper.hasPermission("edit-visitor-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid&&this.get(),this.getPreRequisite()},methods:{timePadding:function(t){return helper.formatWithPadding(t,2)},proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/visitor/log/pre-requisite").then((function(i){t.visiting_purposes=i.visiting_purposes,t.students=i.students,t.employees=i.employees,t.visitorLogForm.date_of_visit=helper.today(),t.uuid||(t.loaded=!0),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},store:function(){var t=this;this.visitorLogForm.entry_time=this.entry_time.hour&&this.entry_time.minute?helper.formatWithPadding(this.entry_time.hour,2)+":"+helper.formatWithPadding(this.entry_time.minute,2)+" "+this.entry_time.meridiem:"";var e=this.$loading.show();this.visitorLogForm.post("/api/visitor/log").then((function(i){toastr.success(i.message),t.selected_visiting_purpose=null,t.selected_student=null,t.selected_employee=null,t.entry_time.hour="",t.entry_time.minute="",t.entry_time.meridiem="am",t.visitorLogForm.type="parent",t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/visitor/log/"+this.uuid).then((function(i){t.visitorLogForm.type=i.visitor_log.type,t.visitorLogForm.name=i.visitor_log.name,t.visitorLogForm.company_name=i.visitor_log.company_name,t.visitorLogForm.contact_number=i.visitor_log.contact_number,t.visitorLogForm.address=i.visitor_log.address,t.visitorLogForm.student_id=i.visitor_log.student_id,t.selected_student=i.selected_student,t.visitorLogForm.relation_with_student=i.visitor_log.relation_with_student,t.visitorLogForm.visiting_purpose_id=i.visitor_log.visiting_purpose_id,t.selected_visiting_purpose=i.selected_visiting_purpose,t.visitorLogForm.employee_id=i.visitor_log.employee_id,t.selected_employee=i.selected_employee,t.visitorLogForm.remarks=i.visitor_log.remarks,t.visitorLogForm.date_of_visit=i.visitor_log.date_of_visit,t.entry_time.hour=i.entry_time.hour,t.entry_time.minute=i.entry_time.minute,t.entry_time.meridiem=i.entry_time.meridiem,i.visitor_log.exit_time&&(t.exit_time.hour=i.exit_time.hour,t.exit_time.minute=i.exit_time.minute,t.exit_time.meridiem=i.exit_time.meridiem),t.loaded=!0,e.hide()})).catch((function(i){e.hide(),helper.showErrorMsg(i),t.$router.push("/reception/visitor/log")}))},update:function(){var t=this;this.visitorLogForm.entry_time=this.entry_time.hour&&this.entry_time.minute?helper.formatWithPadding(this.entry_time.hour,2)+":"+helper.formatWithPadding(this.entry_time.minute,2)+" "+this.entry_time.meridiem:"",this.visitorLogForm.exit_time=this.exit_time.hour&&this.exit_time.minute?helper.formatWithPadding(this.exit_time.hour,2)+":"+helper.formatWithPadding(this.exit_time.minute,2)+" "+this.exit_time.meridiem:"";var e=this.$loading.show();this.visitorLogForm.patch("/api/visitor/log/"+this.uuid).then((function(i){toastr.success(i.message),e.hide(),t.$router.push("/reception/visitor/log")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onVisitingPurposeSelect:function(t){return this.visitorLogForm.visiting_purpose_id=t.id},onStudentSelect:function(t){return this.visitorLogForm.student_id=t.id},onEmployeeSelect:function(t){return this.visitorLogForm.employee_id=t.id}}},r=i("KHd+"),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.visitorLogForm.errors.clear(e.target.name)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.name,expression:"visitorLogForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("reception.visitor_name")},domProps:{value:t.visitorLogForm.name},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"name",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"name"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"radio radio-success m-t-20"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.type,expression:"visitorLogForm.type"}],attrs:{type:"radio",value:"parent",id:"type_parent",name:"type"},domProps:{checked:"parent"==t.visitorLogForm.type,checked:t._q(t.visitorLogForm.type,"parent")},on:{click:function(e){return t.visitorLogForm.errors.clear("type")},change:function(e){return t.$set(t.visitorLogForm,"type","parent")}}}),t._v(" "),i("label",{attrs:{for:"type_parent"}},[t._v(t._s(t.trans("reception.visitor_type_parent")))])]),t._v(" "),i("div",{staticClass:"col-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.type,expression:"visitorLogForm.type"}],attrs:{type:"radio",value:"other",id:"type_other",name:"type"},domProps:{checked:"other"==t.visitorLogForm.type,checked:t._q(t.visitorLogForm.type,"other")},on:{click:function(e){return t.visitorLogForm.errors.clear("type")},change:function(e){return t.$set(t.visitorLogForm,"type","other")}}}),t._v(" "),i("label",{attrs:{for:"type_other"}},[t._v(t._s(t.trans("reception.visitor_type_other")))])])])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"type"}})],1)]),t._v(" "),"parent"==t.visitorLogForm.type?[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.student")))]),t._v(" "),i("v-select",{attrs:{label:"name",name:"student_id",id:"student_id",options:t.students,placeholder:t.trans("student.select_student")},on:{select:t.onStudentSelect,close:function(e){return t.visitorLogForm.errors.clear("student_id")},remove:function(e){t.visitorLogForm.student_id=""}},model:{value:t.selected_student,callback:function(e){t.selected_student=e},expression:"selected_student"}},[t.students.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                "+t._s(t.trans("general.no_option_found"))+"\n                            ")])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"student_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.relation_with_student")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.relation_with_student,expression:"visitorLogForm.relation_with_student"}],staticClass:"form-control",attrs:{type:"text",name:"relation_with_student",placeholder:t.trans("reception.relation_with_student")},domProps:{value:t.visitorLogForm.relation_with_student},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"relation_with_student",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"relation_with_student"}})],1)])]:t._e(),t._v(" "),"other"==t.visitorLogForm.type?[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_company_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.company_name,expression:"visitorLogForm.company_name"}],staticClass:"form-control",attrs:{type:"text",name:"company_name",placeholder:t.trans("reception.visitor_company_name")},domProps:{value:t.visitorLogForm.company_name},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"company_name",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"company_name"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_contact_number")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.contact_number,expression:"visitorLogForm.contact_number"}],staticClass:"form-control",attrs:{type:"text",name:"contact_number",placeholder:t.trans("reception.visitor_contact_number")},domProps:{value:t.visitorLogForm.contact_number},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"contact_number",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"contact_number"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_address")))]),t._v(" "),i("autosize-textarea",{attrs:{rows:"1",name:"addres",placeholder:t.trans("reception.visitor_address")},model:{value:t.visitorLogForm.address,callback:function(e){t.$set(t.visitorLogForm,"address",e)},expression:"visitorLogForm.address"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"address"}})],1)])]:t._e(),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_count")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.visitor_count,expression:"visitorLogForm.visitor_count"}],staticClass:"form-control",attrs:{type:"text",name:"visitor_count",placeholder:t.trans("reception.visitor_count")},domProps:{value:t.visitorLogForm.visitor_count},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"visitor_count",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"visitor_count"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visiting_purpose")))]),t._v(" "),i("v-select",{attrs:{label:"name",name:"visiting_purpose_id",id:"visiting_purpose_id",options:t.visiting_purposes,placeholder:t.trans("reception.select_visiting_purpose")},on:{select:t.onVisitingPurposeSelect,close:function(e){return t.visitorLogForm.errors.clear("visiting_purpose_id")},remove:function(e){t.visitorLogForm.visiting_purpose_id=""}},model:{value:t.selected_visiting_purpose,callback:function(e){t.selected_visiting_purpose=e},expression:"selected_visiting_purpose"}},[t.visiting_purposes.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"visiting_purpose_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.whom_to_meet")))]),t._v(" "),i("v-select",{attrs:{label:"name",name:"employee_id",id:"employee_id",options:t.employees,placeholder:t.trans("employee.select_employee")},on:{select:t.onEmployeeSelect,close:function(e){return t.visitorLogForm.errors.clear("employee_id")},remove:function(e){t.visitorLogForm.employee_id=""}},model:{value:t.selected_employee,callback:function(e){t.selected_employee=e},expression:"selected_employee"}},[t.employees.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"employee_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.date_of_visit")))]),t._v(" "),i("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("reception.date_of_visit")},on:{selected:function(e){return t.visitorLogForm.errors.clear("date_of_visit")}},model:{value:t.visitorLogForm.date_of_visit,callback:function(e){t.$set(t.visitorLogForm,"date_of_visit",e)},expression:"visitorLogForm.date_of_visit"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"date_of_visit"}})],1)]),t._v(" "),t.loaded?i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.entry_time")))]),t._v(" "),i("timepicker",{attrs:{hour:t.entry_time.hour,minute:t.entry_time.minute,meridiem:t.entry_time.meridiem},on:{"update:hour":function(e){return t.$set(t.entry_time,"hour",e)},"update:minute":function(e){return t.$set(t.entry_time,"minute",e)},"update:meridiem":function(e){return t.$set(t.entry_time,"meridiem",e)}}})],1)]):t._e(),t._v(" "),t.uuid?i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.exit_time")))]),t._v(" "),i("timepicker",{attrs:{hour:t.exit_time.hour,minute:t.exit_time.minute,meridiem:t.exit_time.meridiem},on:{"update:hour":function(e){return t.$set(t.exit_time,"hour",e)},"update:minute":function(e){return t.$set(t.exit_time,"minute",e)},"update:meridiem":function(e){return t.$set(t.exit_time,"meridiem",e)}}})],1)]):t._e(),t._v(" "),i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_remarks")))]),t._v(" "),i("autosize-textarea",{attrs:{rows:"1",name:"remarks",placeholder:t.trans("reception.visitor_remarks")},model:{value:t.visitorLogForm.remarks,callback:function(e){t.$set(t.visitorLogForm,"remarks",e)},expression:"visitorLogForm.remarks"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"remarks"}})],1)])],2),t._v(" "),i("div",{staticClass:"card-footer text-right"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/reception/visitor/log"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():i("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?i("span",[t._v(t._s(t.trans("general.update")))]):i("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=s.exports},pCUx:function(t,e,i){"use strict";i.r(e);var o={components:{visitorLogForm:i("awYS").a},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-visitor-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},r=i("KHd+"),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("reception.edit_visitor_log")))])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[i("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/reception/visitor/log")}}},[i("i",{staticClass:"fas fa-list"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("reception.visitor_log")))])])])])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body p-t-20"},[i("visitor-log-form",{attrs:{uuid:t.uuid}})],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);
//# sourceMappingURL=edit.js.map?id=2f7659bc48d83d8ec373