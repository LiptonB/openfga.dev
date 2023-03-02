"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[2623],{67361:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(87462),o=(i(67294),i(3905)),a=i(5270);const s={title:"Managing Tuples and Invoking API Best Practices",description:"Best Practices of Managing Tuples and Invoking APIs",sidebar_position:8,slug:"/getting-started/tuples-api-best-practices"},r="Best Practices of Managing Tuples and Invoking APIs",l={unversionedId:"content/getting-started/tuples-api-best-practices",id:"content/getting-started/tuples-api-best-practices",title:"Managing Tuples and Invoking API Best Practices",description:"Best Practices of Managing Tuples and Invoking APIs",source:"@site/docs/content/getting-started/tuples-api-best-practices.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/tuples-api-best-practices",permalink:"/docs/getting-started/tuples-api-best-practices",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/tuples-api-best-practices.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Managing Tuples and Invoking API Best Practices",description:"Best Practices of Managing Tuples and Invoking APIs",sidebar_position:8,slug:"/getting-started/tuples-api-best-practices"},sidebar:"docs",previous:{title:"Production Best Practices",permalink:"/docs/getting-started/running-in-production"},next:{title:"Modeling Guides",permalink:"/docs/modeling"}},d={},c=[{value:"Do Not Store Personal Identifiable Information in Tuples",id:"do-not-store-personal-identifiable-information-in-tuples",level:2},{value:"Always Specify Authorization Model ID Whenever Possible",id:"always-specify-authorization-model-id-whenever-possible",level:2},{value:"If Using ListObjects, Avoid Having Intersection or Exclusion in the Authorization Model",id:"if-using-listobjects-avoid-having-intersection-or-exclusion-in-the-authorization-model",level:2},{value:"Related Sections",id:"related-sections",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"best-practices-of-managing-tuples-and-invoking-apis"},"Best Practices of Managing Tuples and Invoking APIs"),(0,o.kt)(a.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"The following list outlines some guidelines and best practices for using ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"}),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not store Personal Identifiable Information in tuples"),(0,o.kt)("li",{parentName:"ul"},"Always specify authorization model ID whenever possible"),(0,o.kt)("li",{parentName:"ul"},"If using ListObjects, avoid having intersection or exclusion in the authorization model")),(0,o.kt)("h2",{id:"do-not-store-personal-identifiable-information-in-tuples"},"Do Not Store Personal Identifiable Information in Tuples"),(0,o.kt)("p",null,"You can use any string for user and object identifiers, but we strongly recommend that you do not store Personal Identifiable Information (PII) tuples for the following reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By not storing personal information, you will reduce the impact of using the product from a compliance perspective."),(0,o.kt)("li",{parentName:"ol"},"In some cases, tuple information might flow through Data Sub Processors such as ones used for logging and tracing. You\u2019ll minimize risk if you don\u2019t include sensitive data in tuples."),(0,o.kt)("li",{parentName:"ol"},"You will ensure uniqueness. For example, different users may have the same user name. Using unique opaque identifiers removes the risk of adding incorrect relationships.")),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The documentation and samples uses first names and simple ids to illustrate easy-to-follow examples.")),(0,o.kt)("h2",{id:"always-specify-authorization-model-id-whenever-possible"},"Always Specify Authorization Model ID Whenever Possible"),(0,o.kt)("p",null,"It is strongly recommended that authorization model ID be specified in your Relationship Queries (such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/perform-check"},"Check")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/interacting/relationship-queries#listobjects"},"ListObjects"),") and Relationship Commands (such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/update-tuples"},"Write"),")."),(0,o.kt)("p",null,"Specifying authorization model ID in API calls have the following advantages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Better performance as ",(0,o.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})," will not need to perform a database query to get the latest authorization model ID."),(0,o.kt)("li",{parentName:"ol"},"Allows consistent behavior in your production system until until you are ready to switch to the new model.")),(0,o.kt)("h2",{id:"if-using-listobjects-avoid-having-intersection-or-exclusion-in-the-authorization-model"},"If Using ListObjects, Avoid Having Intersection or Exclusion in the Authorization Model"),(0,o.kt)("p",null,"If you are planning to use ListObjects, avoid using ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-intersection-operator"},"intersection")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration-language#the-exclusion-operator"},"exclusion")," as it is not optimized for them yet."),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(a.$q,{description:"Check the following sections for more on recommendation for managing relations and model in production environment.",relatedLinks:[{title:"Migrating Relations",description:"Learn how to migrate relations in a production environment",link:"../modeling/migrating/migrating-relations",id:"../modeling/migrating/migrating-relations"},{title:"Migrating Schema 1.1",description:"Learn how to migrate to model schema 1.1",link:"../modeling/migrating/migrating-schema-1-1",id:"../modeling/migrating/migrating-schema-1-1"}],mdxType:"RelatedSection"}))}g.isMDXComponent=!0}}]);