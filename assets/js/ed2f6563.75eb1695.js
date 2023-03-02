"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7287],{83396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=i(87462),a=(i(67294),i(3905)),o=i(5270);const l={sidebar_position:2,slug:"/interacting/transactional-writes",description:"Updating multiple relationship tuples in a single transaction"},s="Transactional Writes",r={unversionedId:"content/interacting/transactional-writes",id:"content/interacting/transactional-writes",title:"Transactional Writes",description:"Updating multiple relationship tuples in a single transaction",source:"@site/docs/content/interacting/transactional-writes.mdx",sourceDirName:"content/interacting",slug:"/interacting/transactional-writes",permalink:"/docs/interacting/transactional-writes",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/transactional-writes.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/interacting/transactional-writes",description:"Updating multiple relationship tuples in a single transaction"},sidebar:"docs",previous:{title:"Managing Relationships Between Objects",permalink:"/docs/interacting/managing-relationships-between-objects"},next:{title:"Relationship Queries: Check, Read, Expand, and ListObjects",permalink:"/docs/interacting/relationship-queries"}},p={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"Modeling Public Access",id:"modeling-public-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Adding And Removing Relationship Tuples In The Same Transaction",id:"01-adding-and-removing-relationship-tuples-in-the-same-transaction",level:3},{value:"02. Adding Multiple Related Relationship Tuples In The Same Transaction",id:"02-adding-multiple-related-relationship-tuples-in-the-same-transaction",level:3},{value:"Related Sections",id:"related-sections",level:2}],c={toc:d},u="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transactional-writes"},"Transactional Writes"),(0,a.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,a.kt)("p",null,"In this guide you will learn how to update multiple ",(0,a.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"})," in a single transaction."),(0,a.kt)(o.S1,{title:"When to use",appearance:"filled",description:(0,a.kt)("div",null,(0,a.kt)("p",null,"Updating multiple relationship tuples is useful to keep system state consistent.")),mdxType:"CardBox"}),(0,a.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,a.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,a.kt)(o.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("p",null,"Assume that you have the following ",(0,a.kt)(o.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,a.kt)("br",null),"\nYou have a ",(0,a.kt)(o.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,a.kt)("inlineCode",{parentName:"p"},"tweet")," that can have a ",(0,a.kt)("inlineCode",{parentName:"p"},"reader"),".\nYou have another type called ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," that can have a ",(0,a.kt)("inlineCode",{parentName:"p"},"follower")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"followed_by")," relationship.")),(0,a.kt)(o.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"tweet",relations:{viewer:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}},{type:"user",relation:"follower"}]}}}},{type:"user",relations:{follower:{this:{}},followed_by:{this:{}}},metadata:{relations:{follower:{directly_related_user_types:[{type:"user"}]},followed_by:{directly_related_user_types:[{type:"user"}]}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In addition, you will need to know the following:"),(0,a.kt)("h3",{id:"direct-access"},"Direct Access"),(0,a.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,a.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,a.kt)("h3",{id:"modeling-public-access"},"Modeling Public Access"),(0,a.kt)("p",null,"You need to know how to grant public access to an object. ",(0,a.kt)("a",{parentName:"p",href:"/docs/modeling/public-access"},"Learn more \u2192")),(0,a.kt)("h3",{id:"-concepts"},(0,a.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)(o.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)(o.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,a.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})))),(0,a.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,a.kt)("h3",{id:"01-adding-and-removing-relationship-tuples-in-the-same-transaction"},"01. Adding And Removing Relationship Tuples In The Same Transaction"),(0,a.kt)("p",null,"When you need to add or delete tuples in your store, you can do so by calling the Write API. For example, if you want to make ",(0,a.kt)("inlineCode",{parentName:"p"},"tweet:1")," public by making everyone a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewer"),", you write one tuple:"),(0,a.kt)(o.Gb,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"tweet:1"}],mdxType:"WriteRequestViewer"}),(0,a.kt)("p",null,"And if you want to convert this ",(0,a.kt)("inlineCode",{parentName:"p"},"tweet")," to private, you would need to delete that tuple:"),(0,a.kt)(o.Gb,{deleteRelationshipTuples:[{user:"user:*",relation:"viewer",object:"tweet:1"}],mdxType:"WriteRequestViewer"}),(0,a.kt)("p",null,"By removing the tuple, we made the tweet visible to no-one, which may not be what we want."),(0,a.kt)("p",null,"The Write API allows you to send up to 10 unique tuples in the request. (This limit applies to the sum of both writes and deletes in that request). This means we can submit one API call that converts the ",(0,a.kt)("inlineCode",{parentName:"p"},"tweet")," from public to visible to only the ",(0,a.kt)("inlineCode",{parentName:"p"},"user"),"'s followers."),(0,a.kt)(o.Gb,{relationshipTuples:[{_description:"Anne's followers can view tweet:1",user:"user:anne#follower",relation:"viewer",object:"tweet:1"}],deleteRelationshipTuples:[{_description:"tweet:1 is no longer viewable by everyone (*)",user:"user:*",relation:"viewer",object:"tweet:1"}],mdxType:"WriteRequestViewer"}),(0,a.kt)("h3",{id:"02-adding-multiple-related-relationship-tuples-in-the-same-transaction"},"02. Adding Multiple Related Relationship Tuples In The Same Transaction"),(0,a.kt)("p",null,"Having the ability to send multiple tuples per request is also useful when you want to maintain consistency. For example, if ",(0,a.kt)("inlineCode",{parentName:"p"},"anne")," starts following ",(0,a.kt)("inlineCode",{parentName:"p"},"becky"),", we want to be able to save the following two tuples, or neither of them:"),(0,a.kt)(o.Wz,{relationshipTuples:[{_description:"Anne is a follower of Becky",user:"user:anne",relation:"follower",object:"user:becky"},{_description:"Becky is followed by Anne",user:"user:becky",relation:"followed_by",object:"user:anne"}],mdxType:"RelationshipTuplesViewer"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We have a type called user in this case because users can be related to each other, so the users now are a type in the system")),(0,a.kt)("p",null,"The ",(0,a.kt)(o.rZ,{format:o.v7.LongForm,mdxType:"ProductName"})," service will attempt to perform all the changes sent in a single Write API call in one transaction. If it can't (for example, if any of the requested changes fails), it will reject all of the changes."),(0,a.kt)("h2",{id:"related-sections"},"Related Sections"),(0,a.kt)(o.$q,{description:"Check the following sections for more on how to update tuples.",relatedLinks:[{title:"Update relationship tuples in SDK",description:"Learn about how to update relationship tuples in SDK.",link:"../getting-started/update-tuples",id:"../getting-started/update-tuples"},{title:"{ProductName} API",description:"Details on the write API in the {ProductName} reference guide.",link:"/api/service#Relationship%20Tuples/Write"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);