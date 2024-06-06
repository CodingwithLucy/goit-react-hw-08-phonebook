"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{46:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(2791);var r=t(9439),i=t(7603),a=t(5705),s=t(8007),o=t(184),l={name:"",number:""},d=s.Ry().shape({name:s.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name must be a string").min(3,"Too short, minimum length: 3").max(20,"Too long, maximum length: 20").required(),number:s.Rx().typeError().moreThan(12).required()}),u=function(){var e=(0,i.wY)().data,n=(0,i.Tn)(),t=(0,r.Z)(n,2),s=t[0],u=t[1].isLoading,c=(0,a.TA)({initialValues:l,onSubmit:function(n,t){var r,i,a=t.resetForm;r=e,i=n.name,(!r.some((function(e){return e.name===i}))||(alert("".concat(i," is already in contacts")),0))&&(s({name:n.name.trim(),number:n.number.trim()}),a())},validationSchema:d}),h=!(c.isValid&&c.dirty);return(0,o.jsxs)("form",{onSubmit:c.handleSubmit,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{autoComplete:"off",placeholder:"Name",type:"text",name:"name",onChange:c.handleChange,value:c.values.name,required:!0}),c.errors.name&&c.touched.name?(0,o.jsx)("span",{children:c.errors.name}):null]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{autoComplete:"off",placeholder:"Phone",type:"tel",name:"number",onChange:c.handleChange,value:c.values.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"}),c.errors.number&&c.touched.number?(0,o.jsx)("span",{children:c.errors.number}):null]}),(0,o.jsx)("button",{type:"submit",disabled:h,children:u?"Adding contact...":"Add contact"})]})},c=function(e){return e.filter},h=t(4420),m="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",x=function(){var e=(0,h.v9)(c),n=(0,i.wY)(),t=n.data,r=n.isLoading,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").toLowerCase();return e.filter((function(e){var t=e.name,r=e.number;return t.toLowerCase().includes(n)||r.includes(n)}))}(t,e);return r?(0,o.jsx)("h2",{style:{textAlign:"center"},children:"loading..."}):(0,o.jsxs)(o.Fragment,{children:[r&&(0,o.jsx)("h2",{children:"loading..."}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Name:"}),(0,o.jsx)("span",{children:"Phone:"})]}),(0,o.jsx)("ul",{children:a.map((function(e){e.id;var n=e.name,t=e.number;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("span",{children:[n,":"]}),(0,o.jsx)("span",{children:t})]},function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;)n+=m[63&t[e]];return n}())}))})]})},j=t(4808),p=function(){var e=(0,h.v9)(c),n=(0,h.I0)();return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Find your contact"}),(0,o.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){n((0,j.T)(e.target.value))}})]})},v=function(){var e=(0,i.wY)(),n=e.data,t=void 0===n?[]:n,r=e.isFetching;return t.length<=0?(0,o.jsx)("div",{style:{width:"45%",border:"none"},children:(0,o.jsx)("h2",{children:"Contacts here"})}):(0,o.jsxs)("div",{style:{minWidth:"600px",maxWidth:"45%"},children:[(0,o.jsx)(p,{}),(0,o.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,o.jsx)("h2",{children:"Contacts"}),(0,o.jsxs)("div",{style:{position:"absolute",top:10,right:0},children:[t.length," contacts"]}),r&&(0,o.jsx)("div",{style:{color:"grey",position:"absolute",right:"50%",transform:"translate(50%,30%)"},children:"Loading..."})]}),(0,o.jsx)(x,{})]})},f=function(){return(0,o.jsx)("section",{children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,o.jsx)(u,{}),(0,o.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=46.6e6cfee0.chunk.js.map