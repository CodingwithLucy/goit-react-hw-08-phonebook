"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{5665:function(e,r,a){a.r(r),a.d(r,{default:function(){return u}});a(2791);var s=a(5705),n=a(4420),i=a(8007),l=a(9273),t=a(184),o={name:"",email:"",password:""},d=i.Ry().shape({name:i.Z_().min(3,"to short, min: 3").max(20,"to long, max: 20").required("Username is required"),email:i.Z_().email("Email must be a valid email address").required("Email is required"),password:i.Z_().required("No password provided.").min(7,"Password is too short - should be 8 chars minimum.")}),m=function(){var e=(0,n.I0)(),r=(0,s.TA)({initialValues:o,onSubmit:function(r,a){var s=a.resetForm;e((0,l.z2)(r)),s()},validationSchema:d}),a=!(r.isValid&&r.dirty);return(0,t.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:r.handleSubmit,children:[(0,t.jsx)("h3",{style:{marginBottom:"30px",textAlign:"center",textTransform:"uppercase"},children:"REGISTER"}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:["USERNAME",(0,t.jsx)("input",{required:!0,type:"text",name:"name",onChange:r.handleChange,value:r.values.name,placeholder:"3-20 characters"}),r.errors.name&&r.touched.name?(0,t.jsx)("span",{children:r.errors.name}):null]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:["EMAIL",(0,t.jsx)("input",{required:!0,type:"text",name:"email",onChange:r.handleChange,value:r.values.email,placeholder:"ex. contact@mail.com"}),r.errors.email&&r.touched.email?(0,t.jsx)("span",{children:r.errors.email}):null]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:["PASSWORD",(0,t.jsx)("input",{required:!0,type:"password",autoComplete:"current-password",name:"password",onChange:r.handleChange,value:r.values.password,placeholder:"min. 8 characters"}),r.errors.password&&r.touched.password?(0,t.jsx)("span",{children:r.errors.password}):null]})}),(0,t.jsx)("center",{children:(0,t.jsx)("button",{type:"submit",disabled:a,children:"SUBMIT"})})]})},u=function(){return(0,t.jsx)("section",{children:(0,t.jsx)("div",{children:(0,t.jsx)(m,{})})})}}}]);
//# sourceMappingURL=665.ac63ae1a.chunk.js.map