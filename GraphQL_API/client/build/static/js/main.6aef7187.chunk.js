(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var n,c,s,a,r,l=i(4),d=i.n(l),j=i(26),o=i.n(j),b=(i(35),i(22)),h=i(6),u=i(12),O=i(46),p=i(13),x=i(25),g=Object(x.a)(n||(n=Object(p.a)(["\n{\n  tasks{\n    title\n    id\n  }\n}\n"]))),v=Object(x.a)(c||(c=Object(p.a)(["\n{\n  projects{\n    title\n    id\n  }\n}\n"]))),f=Object(x.a)(s||(s=Object(p.a)(["\nmutation($title: String!, $weight:Int!, $description: String!, $projectId: ID!) {\n  addTask(title: $title, weight: $weight, description: $description, projectId: $projectId){\n    title\n    id\n    }\n }\n "]))),m=Object(x.a)(a||(a=Object(p.a)(["\n mutation($title: String!, $weight: Int!, $description: String!) {\n   addProject(title: $title, weight: $weight, description: $description){\n     title\n     id\n     }\n  }\n  "]))),w=Object(x.a)(r||(r=Object(p.a)(["\n   query($id: ID){\n     task(id: $id){\n     id\n     title\n     weight\n     description\n     project{\n       id\n       title\n       weight\n       description\n       tasks{\n        title\n        weight\n        id\n       }\n     }\n   }}\n "]))),k=i(3);var I=Object(O.a)(w,{options:function(e){return{variables:{id:e.taskId}}}})((function(e){return console.log(e),Object(k.jsx)("div",{id:"task-details",children:function(){var t=e.data.task;return t?Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:t.title}),Object(k.jsx)("p",{children:t.weight}),Object(k.jsx)("p",{children:t.project.title}),Object(k.jsx)("p",{children:"All tasks of the project:"}),Object(k.jsx)("ul",{className:"other-tasks",children:t.project.tasks.map((function(e){return Object(k.jsx)("li",{children:e.title},e.id)}))})]}):Object(k.jsx)("div",{children:"No task selected..."})}()})}));var $=Object(O.a)(g)((function(e){var t=Object(l.useState)({selected:null}),i=Object(u.a)(t,2),n=i[0],c=i[1];return Object(k.jsxs)("div",{children:[Object(k.jsxs)("ul",{id:"task-list",children:[" ",function(){console.log(e.data);var t=e.data;return t.loading?Object(k.jsx)("div",{children:" Looading tasks... "}):t.tasks.map((function(e){return Object(k.jsxs)("li",{onClick:function(t){c({selected:e.id})},children:[" ",e.title," "]},e.id)}))}()," "]})," ",Object(k.jsx)(I,{taskId:n.selected})," "]})})),y=i(20),S=i(19);var N=Object(S.flowRight)(Object(O.a)(v,{name:"getProjectsQuery"}),Object(O.a)(f,{name:"addTaskMutation"}))((function(e){var t=Object(l.useState)({title:"",weight:1,description:"",projectId:""}),i=Object(u.a)(t,2),n=i[0],c=i[1],s=function(e){var t=Object(y.a)({},n);t[e.target.name]=e.target.value,c(t)};return Object(k.jsxs)("form",{class:"task",id:"add-task",onSubmit:function(t){t.preventDefault(),console.log(f),e.addTaskMutation({variables:{title:n.title,weight:parseInt(n.weight),description:n.description,projectId:n.projectId},refetchQueries:[{query:g}]})},children:[Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" Task title: "})," ",Object(k.jsx)("input",{type:"text",name:"title",onChange:s,value:n.title,required:!0})," "]})," ",Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" Weight: "})," ",Object(k.jsx)("input",{type:"number",name:"weight",onChange:s,value:n.weight,required:!0})," "]}),Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" description: "})," ",Object(k.jsx)("textarea",{name:"description",onChange:s,value:n.description,required:!0})," "]}),Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" Project: "})," ",Object(k.jsxs)("select",{name:"projectId",onChange:s,value:n.projectId,required:!0,children:[" ",Object(k.jsx)("option",{value:"",selected:"selected",disabled:"disabled",children:" Select project "})," ",function(){var t=e.getProjectsQuery;return t.loading?Object(k.jsx)("option",{children:" Loading projects... "}):t.projects.map((function(e){return Object(k.jsxs)("option",{value:e.id,children:[" ",e.title," "]},e.id)}))}()," "]})," "]}),Object(k.jsx)("button",{children:" + "})," "]})}));var q=Object(S.flowRight)(Object(O.a)(v,{name:"getProjectsQuery"}),Object(O.a)(m,{name:"addProjectMutation"}))((function(e){var t=Object(l.useState)({title:"",weight:1,description:""}),i=Object(u.a)(t,2),n=i[0],c=i[1],s=function(e){var t=Object(y.a)({},n);t[e.target.name]=e.target.value,c(t)};return Object(k.jsxs)("form",{class:"project",id:"add-project",onSubmit:function(t){t.preventDefault(),console.log(m),e.addProjectMutation({variables:{title:n.title,weight:parseInt(n.weight),description:n.description},refetchQueries:[{query:v}]})},children:[Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" Project title: "})," ",Object(k.jsx)("input",{type:"text",name:"title",onChange:s,value:n.title})," "]})," ",Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" Weight: "})," ",Object(k.jsx)("input",{type:"number",name:"weight",onChange:s,value:n.weight})," "]}),Object(k.jsxs)("div",{className:"field",children:[Object(k.jsx)("label",{children:" description: "})," ",Object(k.jsx)("textarea",{name:"description",onChange:s,value:n.description})," "]}),Object(k.jsx)("button",{children:" + "})," "]})})),C=new b.a({uri:"http://localhost:4000/graphql"});var P=function(){return Object(k.jsxs)(h.b,{client:C,children:[Object(k.jsxs)("div",{id:"main",children:[Object(k.jsx)("div",{id:"bg"}),Object(k.jsx)("h1",{children:" Ninja 's Reading List"})," ",Object(k.jsx)($,{}),Object(k.jsx)(q,{}),Object(k.jsx)(N,{})]})," "]})};o.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6aef7187.chunk.js.map