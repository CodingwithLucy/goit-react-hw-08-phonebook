"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{3690:function(e,r,s){s.r(r),s.d(r,{default:function(){return m}});s(2791);var a=s(5705),i=s(4420),n=s(8007),l=s(9273),o=s(184),t={email:"",password:""},d=n.Ry().shape({email:n.Z_().email("Email must be a valid email address").required("Email is required"),password:n.Z_().required("No password provided.").min(7,"Password is too short - should be 8 chars minimum.")}),u=function(){var e=(0,i.I0)(),r=(0,a.TA)({initialValues:t,onSubmit:function(r,s){var a=s.resetForm;e((0,l.x4)(r)),a()},validationSchema:d}),s=!(r.isValid&&r.dirty);return(0,o.jsxs)("form",{component:"form",noValidate:!0,autoComplete:"off",onSubmit:r.handleSubmit,children:[(0,o.jsx)("h3",{style:{marginBottom:"30px",textAlign:"center",textTransform:"uppercase"},children:"LOG IN"}),(0,o.jsx)("div",{children:(0,o.jsxs)("label",{children:["EMAIL",(0,o.jsx)("input",{required:!0,type:"email",name:"email",onChange:r.handleChange,value:r.values.email}),r.errors.email&&r.touched.email?(0,o.jsx)("span",{children:r.errors.email}):null]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("label",{children:["PASSWORD",(0,o.jsx)("input",{required:!0,type:"password",autoComplete:"current-password",name:"password",onChange:r.handleChange,value:r.values.password}),r.errors.password&&r.touched.password?(0,o.jsx)("span",{children:r.errors.password}):null]})}),(0,o.jsx)("button",{type:"submit",disabled:s,children:"Login"})]})},m=function(){return(0,o.jsx)("section",{children:(0,o.jsx)("div",{children:(0,o.jsx)(u,{})})})}}}]);
//# sourceMappingURL=690.041e1c1c.chunk.js.map