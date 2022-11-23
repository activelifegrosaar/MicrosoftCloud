"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"3. Dynamically Create a Microsoft Teams Meeting using Microsoft Graph",sidebar_position:3},o="Exercise 3",l={unversionedId:"ACS-to-Teams-Meeting/Create-Teams-Meeting",id:"ACS-to-Teams-Meeting/Create-Teams-Meeting",title:"3. Dynamically Create a Microsoft Teams Meeting using Microsoft Graph",description:"Dynamically Create a Microsoft Teams Meeting using Microsoft Graph",source:"@site/docs/ACS-to-Teams-Meeting/03-Create-Teams-Meeting.md",sourceDirName:"ACS-to-Teams-Meeting",slug:"/ACS-to-Teams-Meeting/Create-Teams-Meeting",permalink:"/MicrosoftCloud/tutorials/docs/ACS-to-Teams-Meeting/Create-Teams-Meeting",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Dynamically Create a Microsoft Teams Meeting using Microsoft Graph",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Integrate Azure Communication Services Calling into a React App",permalink:"/MicrosoftCloud/tutorials/docs/ACS-to-Teams-Meeting/Integrate-ACS-React"},next:{title:"4. Dynamically Create an Azure Communication Services Identity and Token",permalink:"/MicrosoftCloud/tutorials/docs/ACS-to-Teams-Meeting/Create-ACS-Identity-Token"}},s={},p=[{value:"Dynamically Create a Microsoft Teams Meeting using Microsoft Graph",id:"dynamically-create-a-microsoft-teams-meeting-using-microsoft-graph",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercise-3"},"Exercise 3"),(0,i.kt)("h2",{id:"dynamically-create-a-microsoft-teams-meeting-using-microsoft-graph"},"Dynamically Create a Microsoft Teams Meeting using Microsoft Graph"),(0,i.kt)("p",null,"In this exercise, you'll automate the process of creating a Microsoft Teams meeting link and passing to the ACS by using Azure Functions and Microsoft Graph."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Teams Meeting",src:n(2835).Z,title:"Create Teams Meeting",width:"1379",height:"611"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You'll need to create an Azure Active Directory (AAD) app for Deamon app authentication. In this step, authentication will be handled in the backgroud with ",(0,i.kt)("inlineCode",{parentName:"p"},"app credentials"),", and AAD app will use Application Permissions to make Microsoft Graph API calls. Microsoft Graph will be used to dynamically create a Microsoft Teams meeting and return the Teams meeting URL.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Perform the following steps to create an AAD app:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal")," and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Azure Active Directory"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"App registration")," tab followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"+ New registration"),"."),(0,i.kt)("li",{parentName:"ol"},"Fill in the new app registration form details as shown below and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Register"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("em",{parentName:"li"},"ACS Teams Interop App")),(0,i.kt)("li",{parentName:"ul"},"Supported account types: ",(0,i.kt)("em",{parentName:"li"},"Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)")),(0,i.kt)("li",{parentName:"ul"},"Redirect URI: leave this blank"))),(0,i.kt)("li",{parentName:"ol"},"After the app is registered, go to ",(0,i.kt)("inlineCode",{parentName:"li"},"API permissions")," and select ",(0,i.kt)("inlineCode",{parentName:"li"},"+ Add a permission"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft Graph")," followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"Application permissions"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Calendars.ReadWrite")," permission and then select ",(0,i.kt)("inlineCode",{parentName:"li"},"Add"),"."),(0,i.kt)("li",{parentName:"ol"},"After adding the permissions, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Grant admin consent for <your organization name>"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Certificates & secrets")," tab, select ",(0,i.kt)("inlineCode",{parentName:"li"},"+ New client secret"),", and then select ",(0,i.kt)("inlineCode",{parentName:"li"},"Add"),". "),(0,i.kt)("li",{parentName:"ol"},"Copy the value of the secret into a local file. You'll use the value later in this exercise."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Overview")," tab and copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"Application (client) ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Directory (tenant) ID")," values into the same local file that you used in the previous step."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-video-to-teams-meeting/server/typescript")," project folder in Visual Studio Code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TeamsMeetingFunction")," folder and create a ",(0,i.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file with the following values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the values you copied into the local file to update the ",(0,i.kt)("inlineCode",{parentName:"li"},"TENANT_ID"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"CLIENT_SECRET")," values."),(0,i.kt)("li",{parentName:"ul"},"Define ",(0,i.kt)("inlineCode",{parentName:"li"},"USER_ID")," with the user id that you'd like to create a Microsoft Teams Meeting. ")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can get your User ID from ",(0,i.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal"),". Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Azure Active Directory")," and navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Users")," tab on the side bar. Search for your user name and select it to see the user details. Inside the user details, Object ID represents the User ID. Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Object ID")," value and use it for the ",(0,i.kt)("inlineCode",{parentName:"p"},"USER_ID")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"local.settings.json"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Getting User ID from Azure Active Directory",src:n(8956).Z,title:"Getting User ID from Azure Active Directory",width:"4400",height:"2369"}))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "IsEncrypted": false,\n    "Values": {\n        "FUNCTIONS_WORKER_RUNTIME": "node",\n        "TENANT_ID": "",\n        "CLIENT_ID": "",\n        "CLIENT_SECRET": "",\n        "USER_ID": "",\n        "ACS_CONNECTION_STRING": ""\n    },\n    "Host": {\n        "LocalHttpPort": 7071,\n        "CORS": "*",\n        "CORSCredentials": false\n    },\n    "watchDirectories": [\n        "Shared"\n    ]\n}\n')),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ACS_CONNECTION_STRING")," will be used in the next exercise so you don't need to update it yet."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file in VS Code and note that the following Microsoft Graph and Identity packages are included:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"@azure/communication-identity\n@azure/identity\n@microsoft/microsoft-graph-client\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a terminal window in the ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," folder and run the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," command to install the application dependencies.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"Shared/graph.ts")," and take a moment to expore the imports at the top of the file. This code handles importing authentication and client symbols that will be used in the Azure Function to call Microsoft Graph."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescipt"},"import {startDateTimeAsync, endDateTimeAsync} from './dateTimeFormat';\nimport {ClientSecretCredential} from '@azure/identity';\nimport {Client} from '@microsoft/microsoft-graph-client';\nimport {TokenCredentialAuthenticationProvider} from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';\nimport 'isomorphic-fetch';\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You'll also see imports from ",(0,i.kt)("inlineCode",{parentName:"p"},"dateTimeFormat.ts")," which will be used later in this exercise. ",(0,i.kt)("inlineCode",{parentName:"p"},"startDateTimeAsync")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endDateTimeAsync")," will be used while creating a Microsoft Teams meeting link to define start date and end date for the meeting."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take a moment to examine ",(0,i.kt)("inlineCode",{parentName:"p"},"clientSecretCredential")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"appGraphClient"),", they will be used later in the authentication process and when calling the Microsoft Graph API:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let clientSecretCredential;\nlet appGraphClient;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"ensureGraphForAppOnlyAuth")," function:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClientSecretCredential")," uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tenant Id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Client Id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Client Secret")," values from the Azure Active Directory app."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"authProvider")," object is defined as an Azure Active Directory app that will authenticate in the background and use app-only permissions (such as ",(0,i.kt)("strong",{parentName:"li"},"Calendars.ReadWrite"),") to make Microsoft Graph API calls.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function ensureGraphForAppOnlyAuth() {\n    if (!clientSecretCredential) {\n        clientSecretCredential = new ClientSecretCredential(\n            process.env.TENANT_ID,\n            process.env.CLIENT_ID,\n            process.env.CLIENT_SECRET\n        );\n    }\n\n    if (!appGraphClient) {\n        const authProvider = new TokenCredentialAuthenticationProvider(\n        clientSecretCredential, {\n            scopes: [ 'https://graph.microsoft.com/.default' ]\n        });\n\n        appGraphClient = Client.initWithMiddleware({\n            authProvider: authProvider\n        });\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take a moment to explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"createNewMeetingAsync")," function. It posts data to the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/graph/api/calendar-post-events?view=graph-rest-1.0&tabs=http"},"Microsoft Graph Calendar Events API")," which dynamically creates an event in a user's calendar and returns the new event details:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"async function createNewMeetingAsync(userId) {\n    ensureGraphForAppOnlyAuth();\n    let startTime = await startDateTimeAsync();\n    let endTime = await endDateTimeAsync();\n    const newMeeting = `/users/${userId}/calendar/events`;\n    \n    const event = {\n    subject: 'Customer Service Meeting',\n    start: {\n        dateTime: startTime,\n        timeZone: 'UTC'\n    },\n    end: {\n        dateTime: endTime,\n        timeZone: 'UTC'\n    },\n    isOnlineMeeting: true\n    };\n    \n    const newEvent = await appGraphClient.api(newMeeting).post(event);    \n    return newEvent;     \n}\n\nexport default createNewMeetingAsync;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"TeamsMeetingFunction/index.ts")," and explore the Http Trigger function:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createNewMeetingAsync")," is imported from ",(0,i.kt)("inlineCode",{parentName:"li"},"graph.ts"),". It handles creating and retrieving new event details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userId")," is retrieved from ",(0,i.kt)("inlineCode",{parentName:"li"},"local.settings.json")," inside the Http Trigger function. This is done by accessing the ",(0,i.kt)("inlineCode",{parentName:"li"},"USER_ID")," environment variable by using ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env.USER_ID"),"."),(0,i.kt)("li",{parentName:"ul"},"When the function is triggered, it calls ",(0,i.kt)("inlineCode",{parentName:"li"},"createNewMeetingAsync")," with the defined user id and returns the new event details in ",(0,i.kt)("inlineCode",{parentName:"li"},"teamMeetingLink")," parameter."),(0,i.kt)("li",{parentName:"ul"},"The function accesses the Teams meeting join URL by calling ",(0,i.kt)("inlineCode",{parentName:"li"},"meeting.onlineMeeting.joinUrl")," and returns the value in the body of the response.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AzureFunction, Context, HttpRequest } from "@azure/functions";\nimport createNewMeetingAsync from \'../Shared/graph\';\n\nlet teamsMeetingLink;\n\nconst httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest){\n    context.log("Request received");\n    const userId = process.env.USER_ID;\n    context.log(\'UserId\', userId);\n    \n    teamsMeetingLink = await createNewMeetingAsync(userId);\n    const body = JSON.stringify(teamsMeetingLink);\n    const meeting = JSON.parse(body);\n    context.log("meeting:", meeting);\n    \n    context.res = {\n        // status: 200, /* Defaults to 200 */\n        body: meeting.onlineMeeting.joinUrl\n    }    \n};\n\nexport default httpTrigger;\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use a terminal window to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-video-to-teams-meeting/server/typescript")," folder to run the function locally. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now that the ",(0,i.kt)("inlineCode",{parentName:"p"},"TeamsMeetingFunction")," is ready to use, let's call the function from the React app.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-to-teams-meeting/client/react")," folder in VS Code. Add a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file into the folder with the following values:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"REACT_APP_TEAMS_MEETING_FUNCTION=http://localhost:7071/api/TeamsMeetingFunction\n\nREACT_APP_ACS_USER_FUNCTION=http://localhost:7071/api/ACSTokenFunction\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"These values will be passed into React as it builds so that you can easily change them as needed during the build process.\n")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-to-teams-meeting/client/react/App.tsx")," file in VS Code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"teamsMeetingLink")," state variable in the component. Remove the hardcoded teams link and replace it with empty quotes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," function and change it to look like the following. This handles calling the Azure Function you looked at earlier which creates a Teams meeting and returns the meeting join link:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"useEffect(() => {\n    const init = async () => {\n        /* Commenting out for now\n        setMessage('Getting ACS user');\n        //Call Azure Function to get the ACS user identity and token\n        let res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);\n        let user = await res.json();\n        setUserId(user.userId);\n        setToken(user.token);\n        */\n        \n        setMessage('Getting Teams meeting link...');\n        //Call Azure Function to get the meeting link\n        res = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);\n        let link = await res.text();\n        setTeamsMeetingLink(link);\n        setMessage('');\n        console.log('Teams meeting link', link);\n\n    }\n    init();\n\n}, []);\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the file before continuing.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open another terminal window, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," folder, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," to build and run the application. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the application builds, you should see the ACS calling UI displayed and can then call into the Teams meeting that was dynamically created by Microsoft Graph.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop both of the terminal processes (React and Azure Functions) by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl + c")," in each terminal window."))))}m.isMDXComponent=!0},2835:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-create-teams-meeting-link-b61076d87a802ebdf4e6cd020ba4303d.png"},8956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aad-user-id-d10db42799c4a5bf322af9a01a49aef0.png"}}]);