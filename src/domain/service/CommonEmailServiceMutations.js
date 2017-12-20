import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createEmailTemplateSetting = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmailTemplateSetting method',
  args:{xslfoAttachScreenLocation: {type: GraphQLString},emailType: {type: GraphQLString},bodyScreenLocation: {type: GraphQLString},subject: {type: GraphQLString},description: {type: GraphQLString},fromAddress: {type: GraphQLString},bccAddress: {type: GraphQLString},emailTemplateSettingId: {type: GraphQLString},contentType: {type: GraphQLString},ccAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/createEmailTemplateSetting?xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}emailType=${args.emailType}bodyScreenLocation=${args.bodyScreenLocation}subject=${args.subject}description=${args.description}fromAddress=${args.fromAddress}bccAddress=${args.bccAddress}emailTemplateSettingId=${args.emailTemplateSettingId}contentType=${args.contentType}ccAddress=${args.ccAddress}`, null, req);
  }
};
export {createEmailTemplateSetting};


const deleteEmailTemplateSetting = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmailTemplateSetting method',
  args:{emailTemplateSettingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/deleteEmailTemplateSetting?emailTemplateSettingId=${args.emailTemplateSettingId}`, null, req);
  }
};
export {deleteEmailTemplateSetting};


const prepareNotificationInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz prepareNotificationInterface method',
  args:{templateName: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},templateData: {type: GraphQLString},authUser: {type: GraphQLString},body: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},emailType: {type: GraphQLString},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},baseUrl: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/prepareNotificationInterface?templateName=${args.templateName}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}templateData=${args.templateData}authUser=${args.authUser}body=${args.body}sendPartial=${args.sendPartial}emailType=${args.emailType}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}baseUrl=${args.baseUrl}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}`, null, req);
  }
};
export {prepareNotificationInterface};


const sendGenericNotificationEmail = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendGenericNotificationEmail method',
  args:{templateName: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},templateData: {type: GraphQLString},authUser: {type: GraphQLString},body: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},emailType: {type: GraphQLString},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},baseUrl: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendGenericNotificationEmail?templateName=${args.templateName}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}templateData=${args.templateData}authUser=${args.authUser}body=${args.body}sendPartial=${args.sendPartial}emailType=${args.emailType}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}baseUrl=${args.baseUrl}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}`, null, req);
  }
};
export {sendGenericNotificationEmail};


const sendMail = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMail method',
  args:{body: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMail?body=${args.body}sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMail};


const sendMailFromScreen = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailFromScreen method',
  args:{xslfoAttachScreenLocation: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},authUser: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},bodyText: {type: GraphQLString},emailType: {type: GraphQLString},hideInLog: {type: GraphQLBoolean},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},bodyParameters: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},attachmentName: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},bodyScreenUri: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailFromScreen?xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}authUser=${args.authUser}sendPartial=${args.sendPartial}bodyText=${args.bodyText}emailType=${args.emailType}hideInLog=${args.hideInLog}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}bodyParameters=${args.bodyParameters}xslfoAttachScreenLocationList=${args.xslfoAttachScreenLocationList}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}attachmentNameList=${args.attachmentNameList}attachmentName=${args.attachmentName}sendFailureNotification=${args.sendFailureNotification}bodyScreenUri=${args.bodyScreenUri}`, null, req);
  }
};
export {sendMailFromScreen};


const sendMailFromScreenInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailFromScreenInterface method',
  args:{xslfoAttachScreenLocation: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},authUser: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},bodyText: {type: GraphQLString},emailType: {type: GraphQLString},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},bodyParameters: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},attachmentName: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},bodyScreenUri: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailFromScreenInterface?xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}authUser=${args.authUser}sendPartial=${args.sendPartial}bodyText=${args.bodyText}emailType=${args.emailType}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}bodyParameters=${args.bodyParameters}xslfoAttachScreenLocationList=${args.xslfoAttachScreenLocationList}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}attachmentNameList=${args.attachmentNameList}attachmentName=${args.attachmentName}sendFailureNotification=${args.sendFailureNotification}bodyScreenUri=${args.bodyScreenUri}`, null, req);
  }
};
export {sendMailFromScreenInterface};


const sendMailFromTemplateSetting = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailFromTemplateSetting method',
  args:{emailTemplateSettingId: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},authUser: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},bodyText: {type: GraphQLString},emailType: {type: GraphQLString},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},bodyParameters: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyIdTo: {type: GraphQLString},attachmentName: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailFromTemplateSetting?emailTemplateSettingId=${args.emailTemplateSettingId}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}authUser=${args.authUser}sendPartial=${args.sendPartial}bodyText=${args.bodyText}emailType=${args.emailType}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}bodyParameters=${args.bodyParameters}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}partyIdTo=${args.partyIdTo}attachmentName=${args.attachmentName}sendFailureNotification=${args.sendFailureNotification}`, null, req);
  }
};
export {sendMailFromTemplateSetting};


const sendMailFromUrl = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailFromUrl method',
  args:{bodyUrl: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},bodyUrlParameters: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailFromUrl?bodyUrl=${args.bodyUrl}sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}bodyUrlParameters=${args.bodyUrlParameters}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailFromUrl};


const sendMailHiddenInLog = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailHiddenInLog method',
  args:{body: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},hideInLog: {type: GraphQLBoolean},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailHiddenInLog?body=${args.body}sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}hideInLog=${args.hideInLog}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailHiddenInLog};


const sendMailHiddenInLogFromScreen = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailHiddenInLogFromScreen method',
  args:{xslfoAttachScreenLocation: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},authUser: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},bodyText: {type: GraphQLString},emailType: {type: GraphQLString},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},bodyParameters: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},attachmentName: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},bodyScreenUri: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailHiddenInLogFromScreen?xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}authUser=${args.authUser}sendPartial=${args.sendPartial}bodyText=${args.bodyText}emailType=${args.emailType}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}bodyParameters=${args.bodyParameters}xslfoAttachScreenLocationList=${args.xslfoAttachScreenLocationList}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}attachmentNameList=${args.attachmentNameList}attachmentName=${args.attachmentName}sendFailureNotification=${args.sendFailureNotification}bodyScreenUri=${args.bodyScreenUri}`, null, req);
  }
};
export {sendMailHiddenInLogFromScreen};


const sendMailInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailInterface method',
  args:{sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailInterface?sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailInterface};


const sendMailMultiPart = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailMultiPart method',
  args:{sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailMultiPart?bodyParts=${args.bodyParts}sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailMultiPart};


const sendMailMultiPartHiddenInLog = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailMultiPartHiddenInLog method',
  args:{sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailMultiPartHiddenInLog?bodyParts=${args.bodyParts}sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailMultiPartHiddenInLog};


const sendMailMultiPartInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailMultiPartInterface method',
  args:{sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailMultiPartInterface?bodyParts=${args.bodyParts}sendTo=${args.sendTo}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}subject=${args.subject}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailMultiPartInterface};


const sendMailOnePartInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendMailOnePartInterface method',
  args:{sendTo: {type: GraphQLString},subject: {type: GraphQLString},body: {type: GraphQLString},sendVia: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},sendCc: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},authUser: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},sendPartial: {type: GraphQLBoolean},port: {type: GraphQLString},emailType: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendBcc: {type: GraphQLString},sendType: {type: GraphQLString},custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendMailOnePartInterface?sendTo=${args.sendTo}subject=${args.subject}body=${args.body}sendVia=${args.sendVia}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}socketFactoryFallback=${args.socketFactoryFallback}sendCc=${args.sendCc}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}authUser=${args.authUser}startTLSEnabled=${args.startTLSEnabled}sendPartial=${args.sendPartial}port=${args.port}emailType=${args.emailType}socketFactoryClass=${args.socketFactoryClass}sendBcc=${args.sendBcc}sendType=${args.sendType}custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {sendMailOnePartInterface};


const sendNotificationInterface = {
  type: ResopnseType,
  description: 'mutation for ofbiz sendNotificationInterface method',
  args:{templateName: {type: GraphQLString},authPass: {type: GraphQLString},orderId: {type: GraphQLString},sendFrom: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString},templateData: {type: GraphQLString},authUser: {type: GraphQLString},body: {type: GraphQLString},sendPartial: {type: GraphQLBoolean},emailType: {type: GraphQLString},sendBcc: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString},webSiteId: {type: GraphQLString},sendTo: {type: GraphQLString},sendVia: {type: GraphQLString},socketFactoryFallback: {type: GraphQLString},messageId: {type: GraphQLString},socketFactoryPort: {type: GraphQLString},startTLSEnabled: {type: GraphQLBoolean},baseUrl: {type: GraphQLString},port: {type: GraphQLString},socketFactoryClass: {type: GraphQLString},sendType: {type: GraphQLString},communicationEventId: {type: GraphQLString},sendFailureNotification: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/sendNotificationInterface?templateName=${args.templateName}authPass=${args.authPass}orderId=${args.orderId}sendFrom=${args.sendFrom}subject=${args.subject}sendCc=${args.sendCc}templateData=${args.templateData}authUser=${args.authUser}body=${args.body}sendPartial=${args.sendPartial}emailType=${args.emailType}sendBcc=${args.sendBcc}custRequestId=${args.custRequestId}partyId=${args.partyId}contentType=${args.contentType}webSiteId=${args.webSiteId}sendTo=${args.sendTo}sendVia=${args.sendVia}socketFactoryFallback=${args.socketFactoryFallback}messageId=${args.messageId}socketFactoryPort=${args.socketFactoryPort}startTLSEnabled=${args.startTLSEnabled}baseUrl=${args.baseUrl}port=${args.port}socketFactoryClass=${args.socketFactoryClass}sendType=${args.sendType}communicationEventId=${args.communicationEventId}sendFailureNotification=${args.sendFailureNotification}`, null, req);
  }
};
export {sendNotificationInterface};


const storeForwardedEmail = {
  type: ResopnseType,
  description: 'mutation for ofbiz storeForwardedEmail method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/storeForwardedEmail?messageWrapper=${args.messageWrapper}`, null, req);
  }
};
export {storeForwardedEmail};


const updateEmailTemplateSetting = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmailTemplateSetting method',
  args:{emailTemplateSettingId: {type: GraphQLString},xslfoAttachScreenLocation: {type: GraphQLString},emailType: {type: GraphQLString},bodyScreenLocation: {type: GraphQLString},subject: {type: GraphQLString},description: {type: GraphQLString},fromAddress: {type: GraphQLString},bccAddress: {type: GraphQLString},contentType: {type: GraphQLString},ccAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonEmail/updateEmailTemplateSetting?emailTemplateSettingId=${args.emailTemplateSettingId}xslfoAttachScreenLocation=${args.xslfoAttachScreenLocation}emailType=${args.emailType}bodyScreenLocation=${args.bodyScreenLocation}subject=${args.subject}description=${args.description}fromAddress=${args.fromAddress}bccAddress=${args.bccAddress}contentType=${args.contentType}ccAddress=${args.ccAddress}`, null, req);
  }
};
export {updateEmailTemplateSetting};
