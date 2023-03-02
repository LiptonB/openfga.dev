"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[6075],{50086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=t(87462),o=(t(67294),t(3905)),i=t(5270),r=t(74866),s=t(85162);const p={title:"Setup SDK Client for Store",description:"Setting up an OpenFGA SDK client",slug:"/getting-started/setup-sdk-client"},l="Setup SDK Client for Store",d={unversionedId:"content/getting-started/setup-sdk-client",id:"content/getting-started/setup-sdk-client",title:"Setup SDK Client for Store",description:"Setting up an OpenFGA SDK client",source:"@site/docs/content/getting-started/setup-sdk-client.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/setup-sdk-client",permalink:"/docs/getting-started/setup-sdk-client",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/setup-sdk-client.mdx",tags:[],version:"current",frontMatter:{title:"Setup SDK Client for Store",description:"Setting up an OpenFGA SDK client",slug:"/getting-started/setup-sdk-client"},sidebar:"docs",previous:{title:"Create a Store",permalink:"/docs/getting-started/create-store"},next:{title:"Configure Authorization Model",permalink:"/docs/getting-started/configure-model"}},g={},u=[{value:"Using No Authentication",id:"using-no-authentication",level:2},{value:"Using Shared Key Authentication",id:"using-shared-key-authentication",level:2}],c={toc:u},f="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-sdk-client-for-store"},"Setup SDK Client for Store"),(0,o.kt)(i.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"This article explains how to build an OpenFGA client by using the SDKs."),(0,o.kt)("p",null,"The first step is to ensure that you have created a store by following ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/create-store"},"these steps"),"."),(0,o.kt)("p",null,"Next, depending on the authentication scheme you want to use, there are different ways to build the client."),(0,o.kt)("h2",{id:"using-no-authentication"},"Using No Authentication"),(0,o.kt)("p",null,"This is a simple setup but it is not recommended for production use."),(0,o.kt)(r.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:i.eU.JS_SDK,label:i.UB.get(i.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { OpenFgaApi } = require(\'@openfga/sdk\'); // OR import { OpenFgaApi } from \'@openfga/sdk\';\n\nconst openFga = new OpenFgaApi({\n    apiScheme: process.env.FGA_API_SCHEME, // Optional. Can be "http" or "https". Defaults to "https"\n    apiHost: process.env.FGA_API_HOST, // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n    storeId: process.env.FGA_STORE_ID\n});\n'))),(0,o.kt)(s.Z,{value:i.eU.GO_SDK,label:i.UB.get(i.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    openfga "github.com/openfga/go-sdk"\n    "os"\n)\n\nfunc main() {\n    configuration, err := openfga.NewConfiguration(openfga.Configuration{\n        ApiScheme:      os.Getenv("FGA_API_SCHEME"), // Optional. Can be "http" or "https". Defaults to "https"\n        ApiHost:        os.Getenv("FGA_API_HOST"), // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n        StoreId:        os.Getenv("FGA_STORE_ID"),\n    })\n\n    if err != nil {\n        // .. Handle error\n    }\n\n    apiClient := openfga.NewAPIClient(configuration)\n}\n'))),(0,o.kt)(s.Z,{value:i.eU.DOTNET_SDK,label:i.UB.get(i.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotnet"},'using OpenFga.Sdk.Api;\nusing OpenFga.Sdk.Configuration;\nusing Environment = System.Environment;\n\nnamespace ExampleApp;\n\nclass MyProgram {\n    static async Task Main() {\n        var configuration = new Configuration() {\n            ApiScheme = Environment.GetEnvironmentVariable("FGA_API_SCHEME"), // Optional. Can be "http" or "https". Defaults to "https"\n            ApiHost = Environment.GetEnvironmentVariable("FGA_API_HOST"), // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n            StoreId = Environment.GetEnvironmentVariable("FGA_STORE_ID")\n        };\n        var fgaClient = new OpenFgaApi(configuration);\n    }\n}\n'))),(0,o.kt)(s.Z,{value:i.eU.PYTHON_SDK,label:i.UB.get(i.eU.PYTHON_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport openfga_sdk\nfrom openfga_sdk.api import open_fga_api\n\nconfiguration = openfga_sdk.Configuration(\n    api_scheme = os.environ.get('FGA_API_SCHEME')\n    api_host = os.environ.get('FGA_API_HOST'),\n    store_id = os.environ.get('FGA_STORE_ID')\n)\n\n# Create an instance of the API class\nfga_client_instance = open_fga_api.OpenFgaApi(openfga_sdk.ApiClient(configuration))\n\n")))),(0,o.kt)("h2",{id:"using-shared-key-authentication"},"Using Shared Key Authentication"),(0,o.kt)("p",null,"If you want to use shared key authentication, you need to generate a random string that will work as secret and set that key when building your OpenFGA server. Then, when building the client, set it as environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"FGA_BEARER_TOKEN"),"."),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are going to use this setup in production, you should enable TLS in your OpenFGA server. Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/setup-openfga#production-recommendations"},"Production Checklist"),".")),(0,o.kt)(r.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:i.eU.JS_SDK,label:i.UB.get(i.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { CredentialsMethod, OpenFgaApi } = require('@openfga/sdk'); // OR import { CredentialsMethod, OpenFgaApi } from '@openfga/sdk';\n\nconst openFga = new OpenFgaApi({\n    apiScheme: process.env.FGA_API_SCHEME, // optional, defaults to \"https\"\n    apiHost: process.env.FGA_API_HOST, // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n    storeId: process.env.FGA_STORE_ID, // optional, not needed for `CreateStore` and `ListStores`, required before calling for all other methods\n    credentials: {\n        method: CredentialsMethod.ApiToken,\n        config: {\n            token: process.env.FGA_BEARER_TOKEN,\n        },\n    }\n});\n"))),(0,o.kt)(s.Z,{value:i.eU.GO_SDK,label:i.UB.get(i.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    openfga "github.com/openfga/go-sdk"\n    "os"\n)\n\nfunc main() {\n    configuration, err := openfga.NewConfiguration(openfga.Configuration{\n        ApiScheme:      os.Getenv("FGA_API_SCHEME"), // optional, defaults to "https"\n        ApiHost:        os.Getenv("FGA_API_HOST"), // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n        StoreId:        os.Getenv("FGA_STORE_ID"), // optional, not needed for `CreateStore` and `ListStores`, required before calling for all other methods\n        Credentials: &credentials.Credentials{\n            Method: credentials.CredentialsMethodApiToken,\n            Config: {\n                ApiToken: os.Getenv("FGA_BEARER_TOKEN"), // will be passed as the "Authorization: Bearer ${ApiToken}" request header\n            },\n        },\n    })\n\n    if err != nil {\n        // .. Handle error\n    }\n\n    apiClient := openfga.NewAPIClient(configuration)\n}\n'))),(0,o.kt)(s.Z,{value:i.eU.DOTNET_SDK,label:i.UB.get(i.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotnet"},'using OpenFga.Sdk.Api;\nusing OpenFga.Sdk.Configuration;\nusing Environment = System.Environment;\n\nnamespace ExampleApp;\n\nclass MyProgram {\n    static async Task Main() {\n        var configuration = new Configuration() {\n            ApiScheme = Environment.GetEnvironmentVariable("FGA_API_SCHEME"), // optional, defaults to "https"\n            ApiHost = Environment.GetEnvironmentVariable("FGA_API_HOST"), // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n            StoreId = Environment.GetEnvironmentVariable("FGA_STORE_ID"),  // optional, not needed for `CreateStore` and `ListStores`, required before calling for all other methods\n            Credentials = new Credentials() {\n                Method = CredentialsMethod.ApiToken,\n                Config = new CredentialsConfig() {\n                    ApiToken = Environment.GetEnvironmentVariable("FGA_BEARER_TOKEN")\n                },\n            },\n        };\n        var fgaClient = new OpenFgaApi(configuration);\n    }\n}\n'))),(0,o.kt)(s.Z,{value:i.eU.PYTHON_SDK,label:i.UB.get(i.eU.PYTHON_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport openfga_sdk\nfrom openfga_sdk.api import open_fga_api\nfrom open_fga_api.credentials import Credentials, CredentialConfiguration\n\n\ncredentials = Credentials(method='api_token',\n    configuration=CredentialConfiguration(api_token=os.environ.get(FGA_BEARER_TOKEN)))\nconfiguration = openfga_sdk.Configuration(\n    api_scheme = os.environ.get(FGA_API_SCHEME), # optional, defaults to \"https\"\n    api_host = os.environ.get(FGA_API_HOST), # required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n    store_id = os.environ.get(FGA_STORE_ID), # optional, not needed for `CreateStore` and `ListStores`, required before calling for all other methods\n    credentials = credentials)\n\n# Create an instance of the API class\nfga_client_instance = open_fga_api.OpenFgaApi(openfga_sdk.ApiClient(configuration))\n\n")))))}m.isMDXComponent=!0}}]);