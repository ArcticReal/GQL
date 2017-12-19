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
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const accAndDecPartyInvitationPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz accAndDecPartyInvitationPermissionCheck method',
  args:{partyInvitationId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/accAndDecPartyInvitationPermissionCheck?partyInvitationId=${args.partyInvitationId}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {accAndDecPartyInvitationPermissionCheck};


const acceptPartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz acceptPartyInvitation method',
  args:{partyId: {type: GraphQLString},partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/acceptPartyInvitation?partyId=${args.partyId}partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {acceptPartyInvitation};


const cancelPartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelPartyInvitation method',
  args:{partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/cancelPartyInvitation?partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {cancelPartyInvitation};


const cancelPartyInvitationPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelPartyInvitationPermissionCheck method',
  args:{partyInvitationId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/cancelPartyInvitationPermissionCheck?partyInvitationId=${args.partyInvitationId}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {cancelPartyInvitationPermissionCheck};


const clearAddressMatchMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearAddressMatchMap method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/clearAddressMatchMap?`, null, req);
  }
};
export {clearAddressMatchMap};


const copyPartyContactMechs = {
  type: GraphQLString,
  description: 'mutation for ofbiz copyPartyContactMechs method',
  args:{partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/copyPartyContactMechs?partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}`, null, req);
  }
};
export {copyPartyContactMechs};


const createAddressMatchMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAddressMatchMap method',
  args:{mapValue: {type: GraphQLString},mapKey: {type: GraphQLString},sequenceNum: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createAddressMatchMap?mapValue=${args.mapValue}mapKey=${args.mapKey}sequenceNum=${args.sequenceNum}`, null, req);
  }
};
export {createAddressMatchMap};


const createAffiliate = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAffiliate method',
  args:{affiliateName: {type: GraphQLString},partyId: {type: GraphQLString},yearEstablished: {type: GraphQLString},affiliateDescription: {type: GraphQLString},sitePageViews: {type: GraphQLString},siteVisitors: {type: GraphQLString},siteType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createAffiliate?affiliateName=${args.affiliateName}partyId=${args.partyId}yearEstablished=${args.yearEstablished}affiliateDescription=${args.affiliateDescription}sitePageViews=${args.sitePageViews}siteVisitors=${args.siteVisitors}siteType=${args.siteType}`, null, req);
  }
};
export {createAffiliate};


const createAgreementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementAttribute method',
  args:{agreementId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createAgreementAttribute?agreementId=${args.agreementId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createAgreementAttribute};


const createAgreementItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementItemTypeAttr method',
  args:{agreementItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createAgreementItemTypeAttr?agreementItemTypeId=${args.agreementItemTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createAgreementItemTypeAttr};


const createCommEventFromEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommEventFromEmail method',
  args:{sendTo: {type: GraphQLString},subject: {type: GraphQLString},sendFrom: {type: GraphQLString},statusId: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString},contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommEventFromEmail?sendTo=${args.sendTo}subject=${args.subject}sendFrom=${args.sendFrom}statusId=${args.statusId}orderId=${args.orderId}partyId=${args.partyId}contentType=${args.contentType}`, null, req);
  }
};
export {createCommEventFromEmail};


const createCommEventWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommEventWorkEffort method',
  args:{workEffortTypeId: {type: GraphQLString},communicationEventId: {type: GraphQLString},currentStatusId: {type: GraphQLString},workEffortName: {type: GraphQLString},workEffortId: {type: GraphQLString},totalMoneyAllowed: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},revisionNumber: {type: GraphQLInt},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},tempExprId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},showAsEnumId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},accommodationMapId: {type: GraphQLString},locationDesc: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},lastStatusUpdate: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},percentComplete: {type: GraphQLInt},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},totalMilliSecondsAllowed: {type: GraphQLFloat},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},createdDate: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommEventWorkEffort?workEffortTypeId=${args.workEffortTypeId}communicationEventId=${args.communicationEventId}currentStatusId=${args.currentStatusId}workEffortName=${args.workEffortName}workEffortId=${args.workEffortId}totalMoneyAllowed=${args.totalMoneyAllowed}recurrenceInfoId=${args.recurrenceInfoId}reservPersons=${args.reservPersons}estimateCalcMethod=${args.estimateCalcMethod}revisionNumber=${args.revisionNumber}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}tempExprId=${args.tempExprId}reservNthPPPerc=${args.reservNthPPPerc}showAsEnumId=${args.showAsEnumId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}infoUrl=${args.infoUrl}universalId=${args.universalId}accommodationMapId=${args.accommodationMapId}locationDesc=${args.locationDesc}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}quantityProduced=${args.quantityProduced}createdByUserLogin=${args.createdByUserLogin}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}lastModifiedDate=${args.lastModifiedDate}estimatedStartDate=${args.estimatedStartDate}sourceReferenceId=${args.sourceReferenceId}lastStatusUpdate=${args.lastStatusUpdate}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}percentComplete=${args.percentComplete}quantityRejected=${args.quantityRejected}priority=${args.priority}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}specialTerms=${args.specialTerms}createdDate=${args.createdDate}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}reserv2ndPPPerc=${args.reserv2ndPPPerc}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {createCommEventWorkEffort};


const createCommunicationEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEvent method',
  args:{partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},orderId: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},contactListId: {type: GraphQLString},custRequestId: {type: GraphQLString},action: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},productId: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},bccString: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyIdTo: {type: GraphQLString},toString: {type: GraphQLString},fromString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEvent?partyIdFrom=${args.partyIdFrom}note=${args.note}orderId=${args.orderId}subject=${args.subject}ccString=${args.ccString}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}content=${args.content}contentMimeTypeId=${args.contentMimeTypeId}datetimeStarted=${args.datetimeStarted}contactListId=${args.contactListId}custRequestId=${args.custRequestId}action=${args.action}contactMechIdFrom=${args.contactMechIdFrom}reasonEnumId=${args.reasonEnumId}roleTypeIdTo=${args.roleTypeIdTo}productId=${args.productId}parentCommEventId=${args.parentCommEventId}entryDate=${args.entryDate}datetimeEnded=${args.datetimeEnded}origCommEventId=${args.origCommEventId}messageId=${args.messageId}roleTypeIdFrom=${args.roleTypeIdFrom}contactMechIdTo=${args.contactMechIdTo}headerString=${args.headerString}statusId=${args.statusId}bccString=${args.bccString}communicationEventId=${args.communicationEventId}partyIdTo=${args.partyIdTo}toString=${args.toString}fromString=${args.fromString}`, null, req);
  }
};
export {createCommunicationEvent};


const createCommunicationEventInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventInterface method',
  args:{partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},orderId: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},contactListId: {type: GraphQLString},custRequestId: {type: GraphQLString},action: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},productId: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},bccString: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyIdTo: {type: GraphQLString},toString: {type: GraphQLString},fromString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventInterface?partyIdFrom=${args.partyIdFrom}note=${args.note}orderId=${args.orderId}subject=${args.subject}ccString=${args.ccString}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}content=${args.content}contentMimeTypeId=${args.contentMimeTypeId}datetimeStarted=${args.datetimeStarted}contactListId=${args.contactListId}custRequestId=${args.custRequestId}action=${args.action}contactMechIdFrom=${args.contactMechIdFrom}reasonEnumId=${args.reasonEnumId}roleTypeIdTo=${args.roleTypeIdTo}productId=${args.productId}parentCommEventId=${args.parentCommEventId}entryDate=${args.entryDate}datetimeEnded=${args.datetimeEnded}origCommEventId=${args.origCommEventId}messageId=${args.messageId}roleTypeIdFrom=${args.roleTypeIdFrom}contactMechIdTo=${args.contactMechIdTo}headerString=${args.headerString}statusId=${args.statusId}bccString=${args.bccString}communicationEventId=${args.communicationEventId}partyIdTo=${args.partyIdTo}toString=${args.toString}fromString=${args.fromString}`, null, req);
  }
};
export {createCommunicationEventInterface};


const createCommunicationEventPrpTyp = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventPrpTyp method',
  args:{communicationEventPrpTypId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventPrpTyp?communicationEventPrpTypId=${args.communicationEventPrpTypId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createCommunicationEventPrpTyp};


const createCommunicationEventPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventPurpose method',
  args:{communicationEventPrpTypId: {type: GraphQLString},communicationEventId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventPurpose?communicationEventPrpTypId=${args.communicationEventPrpTypId}communicationEventId=${args.communicationEventId}description=${args.description}`, null, req);
  }
};
export {createCommunicationEventPurpose};


const createCommunicationEventRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventRole method',
  args:{roleTypeId: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyId: {type: GraphQLString},statusId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventRole?roleTypeId=${args.roleTypeId}communicationEventId=${args.communicationEventId}partyId=${args.partyId}statusId=${args.statusId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createCommunicationEventRole};


const createCommunicationEventRoleInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventRoleInterface method',
  args:{roleTypeId: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyId: {type: GraphQLString},statusId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventRoleInterface?roleTypeId=${args.roleTypeId}communicationEventId=${args.communicationEventId}partyId=${args.partyId}statusId=${args.statusId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createCommunicationEventRoleInterface};


const createCommunicationEventRoleWithoutPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventRoleWithoutPermission method',
  args:{roleTypeId: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyId: {type: GraphQLString},statusId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventRoleWithoutPermission?roleTypeId=${args.roleTypeId}communicationEventId=${args.communicationEventId}partyId=${args.partyId}statusId=${args.statusId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createCommunicationEventRoleWithoutPermission};


const createCommunicationEventWithoutPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCommunicationEventWithoutPermission method',
  args:{partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},orderId: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},contactListId: {type: GraphQLString},custRequestId: {type: GraphQLString},action: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},productId: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},bccString: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyIdTo: {type: GraphQLString},toString: {type: GraphQLString},fromString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCommunicationEventWithoutPermission?partyIdFrom=${args.partyIdFrom}note=${args.note}orderId=${args.orderId}subject=${args.subject}ccString=${args.ccString}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}content=${args.content}contentMimeTypeId=${args.contentMimeTypeId}datetimeStarted=${args.datetimeStarted}contactListId=${args.contactListId}custRequestId=${args.custRequestId}action=${args.action}contactMechIdFrom=${args.contactMechIdFrom}reasonEnumId=${args.reasonEnumId}roleTypeIdTo=${args.roleTypeIdTo}productId=${args.productId}parentCommEventId=${args.parentCommEventId}entryDate=${args.entryDate}datetimeEnded=${args.datetimeEnded}origCommEventId=${args.origCommEventId}messageId=${args.messageId}roleTypeIdFrom=${args.roleTypeIdFrom}contactMechIdTo=${args.contactMechIdTo}headerString=${args.headerString}statusId=${args.statusId}bccString=${args.bccString}communicationEventId=${args.communicationEventId}partyIdTo=${args.partyIdTo}toString=${args.toString}fromString=${args.fromString}`, null, req);
  }
};
export {createCommunicationEventWithoutPermission};


const createContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMech method',
  args:{contactMechTypeId: {type: GraphQLString},infoString: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createContactMech?contactMechTypeId=${args.contactMechTypeId}infoString=${args.infoString}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createContactMech};


const createContactMechAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechAttribute method',
  args:{fromDate: {type: GraphQLString},partyId: {type: GraphQLString},contactMechId: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createContactMechAttribute?fromDate=${args.fromDate}partyId=${args.partyId}contactMechId=${args.contactMechId}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createContactMechAttribute};


const createContactMechLink = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechLink method',
  args:{contactMechIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createContactMechLink?contactMechIdFrom=${args.contactMechIdFrom}contactMechIdTo=${args.contactMechIdTo}`, null, req);
  }
};
export {createContactMechLink};


const createCustRequestCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustRequestCommEvent method',
  args:{custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createCustRequestCommEvent?custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {createCustRequestCommEvent};


const createEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmailAddress method',
  args:{emailAddress: {type: GraphQLString},infoString: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createEmailAddress?emailAddress=${args.emailAddress}infoString=${args.infoString}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {createEmailAddress};


const createEmailAddressVerification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmailAddressVerification method',
  args:{emailAddress: {type: GraphQLString},expireDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createEmailAddressVerification?emailAddress=${args.emailAddress}expireDate=${args.expireDate}`, null, req);
  }
};
export {createEmailAddressVerification};


const createNeedType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createNeedType method',
  args:{needTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createNeedType?needTypeId=${args.needTypeId}description=${args.description}`, null, req);
  }
};
export {createNeedType};


const createPartyAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyAttribute method',
  args:{productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyAttribute?productStoreId=${args.productStoreId}partyId=${args.partyId}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createPartyAttribute};


const createPartyCarrierAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyCarrierAccount method',
  args:{fromDate: {type: GraphQLString},carrierPartyId: {type: GraphQLString},partyId: {type: GraphQLString},accountNumber: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyCarrierAccount?fromDate=${args.fromDate}carrierPartyId=${args.carrierPartyId}partyId=${args.partyId}accountNumber=${args.accountNumber}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyCarrierAccount};


const createPartyClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyClassification method',
  args:{partyClassificationGroupId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyClassification?partyClassificationGroupId=${args.partyClassificationGroupId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyClassification};


const createPartyClassificationGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyClassificationGroup method',
  args:{parentGroupId: {type: GraphQLString},description: {type: GraphQLString},partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyClassificationGroup?parentGroupId=${args.parentGroupId}description=${args.description}partyClassificationTypeId=${args.partyClassificationTypeId}`, null, req);
  }
};
export {createPartyClassificationGroup};


const createPartyContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyContactMech method',
  args:{roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},infoString: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},contactMechPurposeTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyContactMech?roleTypeId=${args.roleTypeId}extension=${args.extension}comments=${args.comments}verified=${args.verified}contactMechTypeId=${args.contactMechTypeId}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}infoString=${args.infoString}yearsWithContactMech=${args.yearsWithContactMech}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyContactMech};


const createPartyContactMechPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyContactMechPurpose method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},fromDate: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyContactMechPurpose?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechId=${args.contactMechId}fromDate=${args.fromDate}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyContactMechPurpose};


const createPartyContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyContent method',
  args:{partyContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyContent?partyContentTypeId=${args.partyContentTypeId}contentId=${args.contentId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyContent};


const createPartyDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyDataSource method',
  args:{dataSourceId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyDataSource?dataSourceId=${args.dataSourceId}partyId=${args.partyId}fromDate=${args.fromDate}`, null, req);
  }
};
export {createPartyDataSource};


const createPartyEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyEmailAddress method',
  args:{emailAddress: {type: GraphQLString},roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},infoString: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},contactMechPurposeTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyEmailAddress?emailAddress=${args.emailAddress}roleTypeId=${args.roleTypeId}extension=${args.extension}comments=${args.comments}verified=${args.verified}contactMechTypeId=${args.contactMechTypeId}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}infoString=${args.infoString}yearsWithContactMech=${args.yearsWithContactMech}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyEmailAddress};


const createPartyGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyGroup method',
  args:{groupName: {type: GraphQLString},comments: {type: GraphQLString},description: {type: GraphQLString},externalId: {type: GraphQLString},tickerSymbol: {type: GraphQLString},logoImageUrl: {type: GraphQLString},partyTypeId: {type: GraphQLString},groupNameLocal: {type: GraphQLString},numEmployees: {type: GraphQLInt},statusId: {type: GraphQLString},preferredCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},officeSiteName: {type: GraphQLString},annualRevenue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyGroup?groupName=${args.groupName}comments=${args.comments}description=${args.description}externalId=${args.externalId}tickerSymbol=${args.tickerSymbol}logoImageUrl=${args.logoImageUrl}partyTypeId=${args.partyTypeId}groupNameLocal=${args.groupNameLocal}numEmployees=${args.numEmployees}statusId=${args.statusId}preferredCurrencyUomId=${args.preferredCurrencyUomId}partyId=${args.partyId}officeSiteName=${args.officeSiteName}annualRevenue=${args.annualRevenue}`, null, req);
  }
};
export {createPartyGroup};


const createPartyIdentification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyIdentification method',
  args:{partyIdentificationTypeId: {type: GraphQLString},partyId: {type: GraphQLString},idValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyIdentification?partyIdentificationTypeId=${args.partyIdentificationTypeId}partyId=${args.partyId}idValue=${args.idValue}`, null, req);
  }
};
export {createPartyIdentification};


const createPartyIdentifications = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyIdentifications method',
  args:{partyId: {type: GraphQLString},identifications: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyIdentifications?partyId=${args.partyId}identifications=${args.identifications}`, null, req);
  }
};
export {createPartyIdentifications};


const createPartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyInvitation method',
  args:{partyIdFrom: {type: GraphQLString},emailAddress: {type: GraphQLString},statusId: {type: GraphQLString},toName: {type: GraphQLString},lastInviteDate: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyInvitation?partyIdFrom=${args.partyIdFrom}emailAddress=${args.emailAddress}statusId=${args.statusId}toName=${args.toName}lastInviteDate=${args.lastInviteDate}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyInvitation};


const createPartyInvitationGroupAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyInvitationGroupAssoc method',
  args:{partyIdTo: {type: GraphQLString},partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyInvitationGroupAssoc?partyIdTo=${args.partyIdTo}partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {createPartyInvitationGroupAssoc};


const createPartyInvitationRoleAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyInvitationRoleAssoc method',
  args:{roleTypeId: {type: GraphQLString},partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyInvitationRoleAssoc?roleTypeId=${args.roleTypeId}partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {createPartyInvitationRoleAssoc};


const createPartyNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyNote method',
  args:{partyId: {type: GraphQLString},note: {type: GraphQLString},noteName: {type: GraphQLString},noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyNote?partyId=${args.partyId}note=${args.note}noteName=${args.noteName}noteId=${args.noteId}`, null, req);
  }
};
export {createPartyNote};


const createPartyPostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyPostalAddress method',
  args:{city: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},attnName: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},partyId: {type: GraphQLString},countryGeoId: {type: GraphQLString},roleTypeId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},directions: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyPostalAddress?city=${args.city}address1=${args.address1}postalCode=${args.postalCode}houseNumberExt=${args.houseNumberExt}extension=${args.extension}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}attnName=${args.attnName}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}paymentMethodId=${args.paymentMethodId}partyId=${args.partyId}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}comments=${args.comments}address2=${args.address2}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}directions=${args.directions}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {createPartyPostalAddress};


const createPartyRelationship = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyRelationship method',
  args:{partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},partyIdFrom: {type: GraphQLString},positionTitle: {type: GraphQLString},comments: {type: GraphQLString},priorityTypeId: {type: GraphQLString},permissionsEnumId: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},relationshipName: {type: GraphQLString},securityGroupId: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyRelationship?partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}partyIdFrom=${args.partyIdFrom}positionTitle=${args.positionTitle}comments=${args.comments}priorityTypeId=${args.priorityTypeId}permissionsEnumId=${args.permissionsEnumId}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}fromDate=${args.fromDate}relationshipName=${args.relationshipName}securityGroupId=${args.securityGroupId}partyRelationshipTypeId=${args.partyRelationshipTypeId}statusId=${args.statusId}`, null, req);
  }
};
export {createPartyRelationship};


const createPartyRelationshipAndRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyRelationshipAndRole method',
  args:{partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},relationshipName: {type: GraphQLString},securityGroupId: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},positionTitle: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},priorityTypeId: {type: GraphQLString},permissionsEnumId: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyRelationshipAndRole?partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}relationshipName=${args.relationshipName}securityGroupId=${args.securityGroupId}partyRelationshipTypeId=${args.partyRelationshipTypeId}positionTitle=${args.positionTitle}comments=${args.comments}statusId=${args.statusId}priorityTypeId=${args.priorityTypeId}permissionsEnumId=${args.permissionsEnumId}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyRelationshipAndRole};


const createPartyRelationshipContactAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyRelationshipContactAccount method',
  args:{contactPartyId: {type: GraphQLString},accountPartyId: {type: GraphQLString},comments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyRelationshipContactAccount?contactPartyId=${args.contactPartyId}accountPartyId=${args.accountPartyId}comments=${args.comments}`, null, req);
  }
};
export {createPartyRelationshipContactAccount};


const createPartyRelationshipType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyRelationshipType method',
  args:{partyRelationshipName: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},roleTypeIdValidTo: {type: GraphQLString},roleTypeIdValidFrom: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyRelationshipType?partyRelationshipName=${args.partyRelationshipName}partyRelationshipTypeId=${args.partyRelationshipTypeId}roleTypeIdValidTo=${args.roleTypeIdValidTo}roleTypeIdValidFrom=${args.roleTypeIdValidFrom}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createPartyRelationshipType};


const createPartyRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyRole};


const createPartyTelecomNumber = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyTelecomNumber method',
  args:{roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},askForName: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},areaCode: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},contactMechPurposeTypeId: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyTelecomNumber?roleTypeId=${args.roleTypeId}extension=${args.extension}askForName=${args.askForName}comments=${args.comments}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}areaCode=${args.areaCode}yearsWithContactMech=${args.yearsWithContactMech}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}countryCode=${args.countryCode}contactNumber=${args.contactNumber}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyTelecomNumber};


const createPartyTextContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyTextContent method',
  args:{partyContentTypeId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPartyTextContent?partyContentTypeId=${args.partyContentTypeId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}thruDate=${args.thruDate}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}textData=${args.textData}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {createPartyTextContent};


const createPerson = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPerson method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString},yearsWithEmployer: {type: GraphQLInt},occupation: {type: GraphQLString},gender: {type: GraphQLString},employmentStatusEnumId: {type: GraphQLString},socialSecurityNumber: {type: GraphQLString},description: {type: GraphQLString},suffix: {type: GraphQLString},mothersMaidenName: {type: GraphQLString},middleNameLocal: {type: GraphQLString},existingCustomer: {type: GraphQLString},residenceStatusEnumId: {type: GraphQLString},nickname: {type: GraphQLString},preferredCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},memberId: {type: GraphQLString},height: {type: GraphQLFloat},passportNumber: {type: GraphQLString},lastNameLocal: {type: GraphQLString},comments: {type: GraphQLString},monthsWithEmployer: {type: GraphQLInt},weight: {type: GraphQLFloat},externalId: {type: GraphQLString},birthDate: {type: GraphQLString},otherLocal: {type: GraphQLString},statusId: {type: GraphQLString},cardId: {type: GraphQLString},middleName: {type: GraphQLString},firstNameLocal: {type: GraphQLString},passportExpireDate: {type: GraphQLString},salutation: {type: GraphQLString},personalTitle: {type: GraphQLString},deceasedDate: {type: GraphQLString},totalYearsWorkExperience: {type: GraphQLFloat},maritalStatus: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPerson?firstName=${args.firstName}lastName=${args.lastName}yearsWithEmployer=${args.yearsWithEmployer}occupation=${args.occupation}gender=${args.gender}employmentStatusEnumId=${args.employmentStatusEnumId}socialSecurityNumber=${args.socialSecurityNumber}description=${args.description}suffix=${args.suffix}mothersMaidenName=${args.mothersMaidenName}middleNameLocal=${args.middleNameLocal}existingCustomer=${args.existingCustomer}residenceStatusEnumId=${args.residenceStatusEnumId}nickname=${args.nickname}preferredCurrencyUomId=${args.preferredCurrencyUomId}partyId=${args.partyId}memberId=${args.memberId}height=${args.height}passportNumber=${args.passportNumber}lastNameLocal=${args.lastNameLocal}comments=${args.comments}monthsWithEmployer=${args.monthsWithEmployer}weight=${args.weight}externalId=${args.externalId}birthDate=${args.birthDate}otherLocal=${args.otherLocal}statusId=${args.statusId}cardId=${args.cardId}middleName=${args.middleName}firstNameLocal=${args.firstNameLocal}passportExpireDate=${args.passportExpireDate}salutation=${args.salutation}personalTitle=${args.personalTitle}deceasedDate=${args.deceasedDate}totalYearsWorkExperience=${args.totalYearsWorkExperience}maritalStatus=${args.maritalStatus}`, null, req);
  }
};
export {createPerson};


const createPersonAndUserLogin = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPersonAndUserLogin method',
  args:{userLoginId: {type: GraphQLString},currentPasswordVerify: {type: GraphQLString},currentPassword: {type: GraphQLString},occupation: {type: GraphQLString},passwordHint: {type: GraphQLString},suffix: {type: GraphQLString},mothersMaidenName: {type: GraphQLString},existingCustomer: {type: GraphQLString},partyTypeId: {type: GraphQLString},preferredCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},memberId: {type: GraphQLString},height: {type: GraphQLFloat},passportNumber: {type: GraphQLString},lastNameLocal: {type: GraphQLString},monthsWithEmployer: {type: GraphQLInt},weight: {type: GraphQLFloat},otherLocal: {type: GraphQLString},firstName: {type: GraphQLString},statusId: {type: GraphQLString},cardId: {type: GraphQLString},requirePasswordChange: {type: GraphQLString},salutation: {type: GraphQLString},totalYearsWorkExperience: {type: GraphQLFloat},maritalStatus: {type: GraphQLString},yearsWithEmployer: {type: GraphQLInt},lastName: {type: GraphQLString},gender: {type: GraphQLString},employmentStatusEnumId: {type: GraphQLString},securityAnswer: {type: GraphQLString},socialSecurityNumber: {type: GraphQLString},externalAuthId: {type: GraphQLString},description: {type: GraphQLString},enabled: {type: GraphQLString},middleNameLocal: {type: GraphQLString},residenceStatusEnumId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataSourceId: {type: GraphQLString},nickname: {type: GraphQLString},comments: {type: GraphQLString},securityQuestion: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},externalId: {type: GraphQLString},birthDate: {type: GraphQLString},isUnread: {type: GraphQLString},createdDate: {type: GraphQLString},middleName: {type: GraphQLString},firstNameLocal: {type: GraphQLString},passportExpireDate: {type: GraphQLString},personalTitle: {type: GraphQLString},deceasedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPersonAndUserLogin?userLoginId=${args.userLoginId}currentPasswordVerify=${args.currentPasswordVerify}currentPassword=${args.currentPassword}occupation=${args.occupation}passwordHint=${args.passwordHint}suffix=${args.suffix}mothersMaidenName=${args.mothersMaidenName}existingCustomer=${args.existingCustomer}partyTypeId=${args.partyTypeId}preferredCurrencyUomId=${args.preferredCurrencyUomId}partyId=${args.partyId}createdByUserLogin=${args.createdByUserLogin}memberId=${args.memberId}height=${args.height}passportNumber=${args.passportNumber}lastNameLocal=${args.lastNameLocal}monthsWithEmployer=${args.monthsWithEmployer}weight=${args.weight}otherLocal=${args.otherLocal}firstName=${args.firstName}statusId=${args.statusId}cardId=${args.cardId}requirePasswordChange=${args.requirePasswordChange}salutation=${args.salutation}totalYearsWorkExperience=${args.totalYearsWorkExperience}maritalStatus=${args.maritalStatus}yearsWithEmployer=${args.yearsWithEmployer}lastName=${args.lastName}gender=${args.gender}employmentStatusEnumId=${args.employmentStatusEnumId}securityAnswer=${args.securityAnswer}socialSecurityNumber=${args.socialSecurityNumber}externalAuthId=${args.externalAuthId}description=${args.description}enabled=${args.enabled}middleNameLocal=${args.middleNameLocal}residenceStatusEnumId=${args.residenceStatusEnumId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}dataSourceId=${args.dataSourceId}nickname=${args.nickname}comments=${args.comments}securityQuestion=${args.securityQuestion}lastModifiedDate=${args.lastModifiedDate}externalId=${args.externalId}birthDate=${args.birthDate}isUnread=${args.isUnread}createdDate=${args.createdDate}middleName=${args.middleName}firstNameLocal=${args.firstNameLocal}passportExpireDate=${args.passportExpireDate}personalTitle=${args.personalTitle}deceasedDate=${args.deceasedDate}`, null, req);
  }
};
export {createPersonAndUserLogin};


const createPostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPostalAddress method',
  args:{city: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},countryGeoId: {type: GraphQLString},houseNumberExt: {type: GraphQLString},address2: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},attnName: {type: GraphQLString},directions: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPostalAddress?city=${args.city}address1=${args.address1}postalCode=${args.postalCode}countryGeoId=${args.countryGeoId}houseNumberExt=${args.houseNumberExt}address2=${args.address2}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}attnName=${args.attnName}directions=${args.directions}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {createPostalAddress};


const createPostalAddressAndPurposes = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPostalAddressAndPurposes method',
  args:{houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},city: {type: GraphQLString},postalCode: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},attnName: {type: GraphQLString},setShippingPurpose: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},countryGeoId: {type: GraphQLString},roleTypeId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},address1: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},setBillingPurpose: {type: GraphQLString},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},directions: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPostalAddressAndPurposes?houseNumberExt=${args.houseNumberExt}extension=${args.extension}city=${args.city}postalCode=${args.postalCode}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}attnName=${args.attnName}setShippingPurpose=${args.setShippingPurpose}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}paymentMethodId=${args.paymentMethodId}productStoreId=${args.productStoreId}partyId=${args.partyId}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}comments=${args.comments}address2=${args.address2}address1=${args.address1}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}thruDate=${args.thruDate}fromDate=${args.fromDate}setBillingPurpose=${args.setBillingPurpose}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}directions=${args.directions}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {createPostalAddressAndPurposes};


const createPostalAddressBoundary = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPostalAddressBoundary method',
  args:{geoId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createPostalAddressBoundary?geoId=${args.geoId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createPostalAddressBoundary};


const createRoleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRoleType method',
  args:{roleTypeId: {type: GraphQLString},description: {type: GraphQLString},parentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createRoleType?roleTypeId=${args.roleTypeId}description=${args.description}parentTypeId=${args.parentTypeId}`, null, req);
  }
};
export {createRoleType};


const createRoleTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRoleTypeAttr method',
  args:{roleTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createRoleTypeAttr?roleTypeId=${args.roleTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createRoleTypeAttr};


const createTelecomNumber = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTelecomNumber method',
  args:{areaCode: {type: GraphQLString},askForName: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createTelecomNumber?areaCode=${args.areaCode}askForName=${args.askForName}countryCode=${args.countryCode}contactNumber=${args.contactNumber}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createTelecomNumber};


const createUpdatePartyEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUpdatePartyEmailAddress method',
  args:{emailAddress: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueType)},contactMechPurposeTypeId: {type: GraphQLString},partyId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createUpdatePartyEmailAddress?emailAddress=${args.emailAddress}userLogin=${args.userLogin}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}partyId=${args.partyId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createUpdatePartyEmailAddress};


const createUpdatePartyPostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUpdatePartyPostalAddress method',
  args:{city: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},partyId: {type: GraphQLString},houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},attnName: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},countryGeoId: {type: GraphQLString},roleTypeId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueType)},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},directions: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createUpdatePartyPostalAddress?city=${args.city}address1=${args.address1}postalCode=${args.postalCode}partyId=${args.partyId}houseNumberExt=${args.houseNumberExt}extension=${args.extension}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}attnName=${args.attnName}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}comments=${args.comments}address2=${args.address2}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}thruDate=${args.thruDate}fromDate=${args.fromDate}userLogin=${args.userLogin}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}directions=${args.directions}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {createUpdatePartyPostalAddress};


const createUpdatePartyRelationshipAndRoles = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUpdatePartyRelationshipAndRoles method',
  args:{roleTypeIdTo: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},relationshipName: {type: GraphQLString},securityGroupId: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},positionTitle: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},priorityTypeId: {type: GraphQLString},permissionsEnumId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createUpdatePartyRelationshipAndRoles?roleTypeIdTo=${args.roleTypeIdTo}partyIdFrom=${args.partyIdFrom}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}partyId=${args.partyId}fromDate=${args.fromDate}relationshipName=${args.relationshipName}securityGroupId=${args.securityGroupId}partyRelationshipTypeId=${args.partyRelationshipTypeId}positionTitle=${args.positionTitle}comments=${args.comments}statusId=${args.statusId}priorityTypeId=${args.priorityTypeId}permissionsEnumId=${args.permissionsEnumId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createUpdatePartyRelationshipAndRoles};


const createUpdatePartyTelecomNumber = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUpdatePartyTelecomNumber method',
  args:{partyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},askForName: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueType)},allowSolicitation: {type: GraphQLString},areaCode: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},contactMechPurposeTypeId: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createUpdatePartyTelecomNumber?partyId=${args.partyId}roleTypeId=${args.roleTypeId}extension=${args.extension}askForName=${args.askForName}comments=${args.comments}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}userLogin=${args.userLogin}allowSolicitation=${args.allowSolicitation}areaCode=${args.areaCode}yearsWithContactMech=${args.yearsWithContactMech}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}countryCode=${args.countryCode}contactNumber=${args.contactNumber}`, null, req);
  }
};
export {createUpdatePartyTelecomNumber};


const createUpdatePerson = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUpdatePerson method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString},yearsWithEmployer: {type: GraphQLInt},occupation: {type: GraphQLString},gender: {type: GraphQLString},employmentStatusEnumId: {type: GraphQLString},socialSecurityNumber: {type: GraphQLString},suffix: {type: GraphQLString},mothersMaidenName: {type: GraphQLString},middleNameLocal: {type: GraphQLString},existingCustomer: {type: GraphQLString},residenceStatusEnumId: {type: GraphQLString},nickname: {type: GraphQLString},partyId: {type: GraphQLString},memberId: {type: GraphQLString},height: {type: GraphQLFloat},passportNumber: {type: GraphQLString},lastNameLocal: {type: GraphQLString},comments: {type: GraphQLString},monthsWithEmployer: {type: GraphQLInt},weight: {type: GraphQLFloat},birthDate: {type: GraphQLString},otherLocal: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueType)},cardId: {type: GraphQLString},middleName: {type: GraphQLString},firstNameLocal: {type: GraphQLString},passportExpireDate: {type: GraphQLString},salutation: {type: GraphQLString},personalTitle: {type: GraphQLString},deceasedDate: {type: GraphQLString},totalYearsWorkExperience: {type: GraphQLFloat},maritalStatus: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createUpdatePerson?firstName=${args.firstName}lastName=${args.lastName}yearsWithEmployer=${args.yearsWithEmployer}occupation=${args.occupation}gender=${args.gender}employmentStatusEnumId=${args.employmentStatusEnumId}socialSecurityNumber=${args.socialSecurityNumber}suffix=${args.suffix}mothersMaidenName=${args.mothersMaidenName}middleNameLocal=${args.middleNameLocal}existingCustomer=${args.existingCustomer}residenceStatusEnumId=${args.residenceStatusEnumId}nickname=${args.nickname}partyId=${args.partyId}memberId=${args.memberId}height=${args.height}passportNumber=${args.passportNumber}lastNameLocal=${args.lastNameLocal}comments=${args.comments}monthsWithEmployer=${args.monthsWithEmployer}weight=${args.weight}birthDate=${args.birthDate}otherLocal=${args.otherLocal}userLogin=${args.userLogin}cardId=${args.cardId}middleName=${args.middleName}firstNameLocal=${args.firstNameLocal}passportExpireDate=${args.passportExpireDate}salutation=${args.salutation}personalTitle=${args.personalTitle}deceasedDate=${args.deceasedDate}totalYearsWorkExperience=${args.totalYearsWorkExperience}maritalStatus=${args.maritalStatus}`, null, req);
  }
};
export {createUpdatePerson};


const createVendor = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVendor method',
  args:{partyId: {type: GraphQLString},manifestCompanyTitle: {type: GraphQLString},manifestPolicies: {type: GraphQLString},manifestLogoUrl: {type: GraphQLString},manifestCompanyName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/createVendor?partyId=${args.partyId}manifestCompanyTitle=${args.manifestCompanyTitle}manifestPolicies=${args.manifestPolicies}manifestLogoUrl=${args.manifestLogoUrl}manifestCompanyName=${args.manifestCompanyName}`, null, req);
  }
};
export {createVendor};


const declinePartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz declinePartyInvitation method',
  args:{partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/declinePartyInvitation?partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {declinePartyInvitation};


const deleteAgreementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementAttribute method',
  args:{agreementId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteAgreementAttribute?agreementId=${args.agreementId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteAgreementAttribute};


const deleteAgreementItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementItemTypeAttr method',
  args:{agreementItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteAgreementItemTypeAttr?agreementItemTypeId=${args.agreementItemTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteAgreementItemTypeAttr};


const deleteCommunicationEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEvent method',
  args:{communicationEventId: {type: GraphQLString},delContentDataResource: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteCommunicationEvent?communicationEventId=${args.communicationEventId}delContentDataResource=${args.delContentDataResource}`, null, req);
  }
};
export {deleteCommunicationEvent};


const deleteCommunicationEventPrpTyp = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventPrpTyp method',
  args:{communicationEventPrpTypId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteCommunicationEventPrpTyp?communicationEventPrpTypId=${args.communicationEventPrpTypId}`, null, req);
  }
};
export {deleteCommunicationEventPrpTyp};


const deleteCommunicationEventWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventWorkEffort method',
  args:{communicationEventId: {type: GraphQLString},delContentDataResource: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteCommunicationEventWorkEffort?communicationEventId=${args.communicationEventId}delContentDataResource=${args.delContentDataResource}`, null, req);
  }
};
export {deleteCommunicationEventWorkEffort};


const deleteContactMechLink = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechLink method',
  args:{contactMechIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteContactMechLink?contactMechIdFrom=${args.contactMechIdFrom}contactMechIdTo=${args.contactMechIdTo}`, null, req);
  }
};
export {deleteContactMechLink};


const deleteCustRequestCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestCommEvent method',
  args:{custRequestId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteCustRequestCommEvent?custRequestId=${args.custRequestId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {deleteCustRequestCommEvent};


const deleteNeedType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteNeedType method',
  args:{needTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteNeedType?needTypeId=${args.needTypeId}`, null, req);
  }
};
export {deleteNeedType};


const deleteParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteParty method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteParty?partyId=${args.partyId}`, null, req);
  }
};
export {deleteParty};


const deletePartyClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyClassification method',
  args:{fromDate: {type: GraphQLString},partyClassificationGroupId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyClassification?fromDate=${args.fromDate}partyClassificationGroupId=${args.partyClassificationGroupId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyClassification};


const deletePartyClassificationGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyClassificationGroup method',
  args:{partyClassificationGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyClassificationGroup?partyClassificationGroupId=${args.partyClassificationGroupId}`, null, req);
  }
};
export {deletePartyClassificationGroup};


const deletePartyContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyContactMech method',
  args:{contactMechId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyContactMech?contactMechId=${args.contactMechId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyContactMech};


const deletePartyContactMechPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyContactMechPurpose method',
  args:{fromDate: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyContactMechPurpose?fromDate=${args.fromDate}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechId=${args.contactMechId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyContactMechPurpose};


const deletePartyContactMechPurposeIfExists = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyContactMechPurposeIfExists method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyContactMechPurposeIfExists?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}contactMechId=${args.contactMechId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyContactMechPurposeIfExists};


const deletePartyIdentification = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyIdentification method',
  args:{partyIdentificationTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyIdentification?partyIdentificationTypeId=${args.partyIdentificationTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyIdentification};


const deletePartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyInvitation method',
  args:{partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyInvitation?partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {deletePartyInvitation};


const deletePartyInvitationGroupAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyInvitationGroupAssoc method',
  args:{partyIdTo: {type: GraphQLString},partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyInvitationGroupAssoc?partyIdTo=${args.partyIdTo}partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {deletePartyInvitationGroupAssoc};


const deletePartyInvitationRoleAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyInvitationRoleAssoc method',
  args:{roleTypeId: {type: GraphQLString},partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyInvitationRoleAssoc?roleTypeId=${args.roleTypeId}partyInvitationId=${args.partyInvitationId}`, null, req);
  }
};
export {deletePartyInvitationRoleAssoc};


const deletePartyRelationship = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyRelationship method',
  args:{fromDate: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},partyIdFrom: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyRelationship?fromDate=${args.fromDate}partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}partyIdFrom=${args.partyIdFrom}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {deletePartyRelationship};


const deletePartyRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePartyRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyRole};


const deletePostalAddressBoundary = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePostalAddressBoundary method',
  args:{geoId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deletePostalAddressBoundary?geoId=${args.geoId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {deletePostalAddressBoundary};


const deleteRoleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRoleType method',
  args:{roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteRoleType?roleTypeId=${args.roleTypeId}`, null, req);
  }
};
export {deleteRoleType};


const deleteRoleTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRoleTypeAttr method',
  args:{roleTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteRoleTypeAttr?roleTypeId=${args.roleTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteRoleTypeAttr};


const deleteVendor = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVendor method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/deleteVendor?partyId=${args.partyId}`, null, req);
  }
};
export {deleteVendor};


const ensureNaPartyRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz ensureNaPartyRole method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/ensureNaPartyRole?partyId=${args.partyId}`, null, req);
  }
};
export {ensureNaPartyRole};


const ensurePartyRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz ensurePartyRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/ensurePartyRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {ensurePartyRole};


const ensurePartyRoleFrom = {
  type: GraphQLString,
  description: 'mutation for ofbiz ensurePartyRoleFrom method',
  args:{partyIdFrom: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/ensurePartyRoleFrom?partyIdFrom=${args.partyIdFrom}roleTypeIdFrom=${args.roleTypeIdFrom}`, null, req);
  }
};
export {ensurePartyRoleFrom};


const ensurePartyRoleTo = {
  type: GraphQLString,
  description: 'mutation for ofbiz ensurePartyRoleTo method',
  args:{partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/ensurePartyRoleTo?partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}`, null, req);
  }
};
export {ensurePartyRoleTo};


const findPartiesById = {
  type: GraphQLString,
  description: 'mutation for ofbiz findPartiesById method',
  args:{idToFind: {type: GraphQLString},searchAllId: {type: GraphQLString},partyIdentificationTypeId: {type: GraphQLString},searchPartyFirst: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/findPartiesById?idToFind=${args.idToFind}searchAllId=${args.searchAllId}partyIdentificationTypeId=${args.partyIdentificationTypeId}searchPartyFirst=${args.searchPartyFirst}`, null, req);
  }
};
export {findPartiesById};


const findPartyFromEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz findPartyFromEmailAddress method',
  args:{address: {type: GraphQLString},fromDate: {type: GraphQLString},caseInsensitive: {type: GraphQLString},personal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/findPartyFromEmailAddress?address=${args.address}fromDate=${args.fromDate}caseInsensitive=${args.caseInsensitive}personal=${args.personal}`, null, req);
  }
};
export {findPartyFromEmailAddress};


const findPartyFromTelephone = {
  type: GraphQLString,
  description: 'mutation for ofbiz findPartyFromTelephone method',
  args:{telno: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/findPartyFromTelephone?telno=${args.telno}`, null, req);
  }
};
export {findPartyFromTelephone};


const findPartyFromTelephoneComplete = {
  type: GraphQLString,
  description: 'mutation for ofbiz findPartyFromTelephoneComplete method',
  args:{telno: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/findPartyFromTelephoneComplete?telno=${args.telno}`, null, req);
  }
};
export {findPartyFromTelephoneComplete};


const getPartyEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPartyEmail method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/getPartyEmail?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {getPartyEmail};


const getPartyMainRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPartyMainRole method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/getPartyMainRole?partyId=${args.partyId}`, null, req);
  }
};
export {getPartyMainRole};


const getPartyNameForDate = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPartyNameForDate method',
  args:{partyId: {type: GraphQLString},compareDate: {type: GraphQLString},lastNameFirst: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/getPartyNameForDate?partyId=${args.partyId}compareDate=${args.compareDate}lastNameFirst=${args.lastNameFirst}`, null, req);
  }
};
export {getPartyNameForDate};


const getPartyPostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPartyPostalAddress method',
  args:{partyId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/getPartyPostalAddress?partyId=${args.partyId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}`, null, req);
  }
};
export {getPartyPostalAddress};


const getPartyTelephone = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPartyTelephone method',
  args:{partyId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/getPartyTelephone?partyId=${args.partyId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}`, null, req);
  }
};
export {getPartyTelephone};


const importAddressMatchMapCsv = {
  type: GraphQLString,
  description: 'mutation for ofbiz importAddressMatchMapCsv method',
  args:{_uploadedFile_contentType: {type: GraphQLString},uploadedFile: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/importAddressMatchMapCsv?_uploadedFile_contentType=${args._uploadedFile_contentType}uploadedFile=${args.uploadedFile}_uploadedFile_fileName=${args._uploadedFile_fileName}`, null, req);
  }
};
export {importAddressMatchMapCsv};


const importParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz importParty method',
  args:{uploadedFile: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/importParty?uploadedFile=${args.uploadedFile}`, null, req);
  }
};
export {importParty};


const linkPartyRecord = {
  type: GraphQLString,
  description: 'mutation for ofbiz linkPartyRecord method',
  args:{partyIdTo: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/linkPartyRecord?partyIdTo=${args.partyIdTo}partyId=${args.partyId}`, null, req);
  }
};
export {linkPartyRecord};


const logIncomingMessage = {
  type: GraphQLString,
  description: 'mutation for ofbiz logIncomingMessage method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/logIncomingMessage?messageWrapper=${args.messageWrapper}`, null, req);
  }
};
export {logIncomingMessage};


const lookupParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz lookupParty method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/lookupParty?firstName=${args.firstName}lastName=${args.lastName}`, null, req);
  }
};
export {lookupParty};


const partyBasePermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyBasePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyBasePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyBasePermissionCheck};


const partyCommunicationEventPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyCommunicationEventPermissionCheck method',
  args:{partyIdFrom: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},partyIdTo: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyCommunicationEventPermissionCheck?partyIdFrom=${args.partyIdFrom}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}partyIdTo=${args.partyIdTo}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyCommunicationEventPermissionCheck};


const partyContactMechPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyContactMechPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},partyId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyContactMechPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}partyId=${args.partyId}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyContactMechPermissionCheck};


const partyDatasourcePermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyDatasourcePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyDatasourcePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyDatasourcePermissionCheck};


const partyGroupPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyGroupPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},partyId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyGroupPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}partyId=${args.partyId}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyGroupPermissionCheck};


const partyIdPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyIdPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},partyId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyIdPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}partyId=${args.partyId}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyIdPermissionCheck};


const partyRelationshipPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyRelationshipPermissionCheck method',
  args:{partyIdFrom: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyRelationshipPermissionCheck?partyIdFrom=${args.partyIdFrom}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyRelationshipPermissionCheck};


const partyRolePermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyRolePermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},partyId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyRolePermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}partyId=${args.partyId}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyRolePermissionCheck};


const partyStatusPermissionCheck = {
  type: GraphQLString,
  description: 'mutation for ofbiz partyStatusPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},partyId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/partyStatusPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}partyId=${args.partyId}mainAction=${args.mainAction}`, null, req);
  }
};
export {partyStatusPermissionCheck};


const processBouncedMessage = {
  type: GraphQLString,
  description: 'mutation for ofbiz processBouncedMessage method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/processBouncedMessage?messageWrapper=${args.messageWrapper}`, null, req);
  }
};
export {processBouncedMessage};


const quickCreateCustomer = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickCreateCustomer method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString},emailAddress: {type: GraphQLString},subscribeContactList: {type: GraphQLString},contactListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/quickCreateCustomer?firstName=${args.firstName}lastName=${args.lastName}emailAddress=${args.emailAddress}subscribeContactList=${args.subscribeContactList}contactListId=${args.contactListId}`, null, req);
  }
};
export {quickCreateCustomer};


const removeAddressMatchMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeAddressMatchMap method',
  args:{mapValue: {type: GraphQLString},mapKey: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/removeAddressMatchMap?mapValue=${args.mapValue}mapKey=${args.mapKey}`, null, req);
  }
};
export {removeAddressMatchMap};


const removeCommunicationEventPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeCommunicationEventPurpose method',
  args:{communicationEventPrpTypId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/removeCommunicationEventPurpose?communicationEventPrpTypId=${args.communicationEventPrpTypId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {removeCommunicationEventPurpose};


const removeCommunicationEventRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeCommunicationEventRole method',
  args:{roleTypeId: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyId: {type: GraphQLString},deleteCommEventIfLast: {type: GraphQLString},delContentDataResource: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/removeCommunicationEventRole?roleTypeId=${args.roleTypeId}communicationEventId=${args.communicationEventId}partyId=${args.partyId}deleteCommEventIfLast=${args.deleteCommEventIfLast}delContentDataResource=${args.delContentDataResource}`, null, req);
  }
};
export {removeCommunicationEventRole};


const removeContactMechAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeContactMechAttribute method',
  args:{contactMechId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/removeContactMechAttribute?contactMechId=${args.contactMechId}attrName=${args.attrName}`, null, req);
  }
};
export {removeContactMechAttribute};


const removePartyAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz removePartyAttribute method',
  args:{partyId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/removePartyAttribute?partyId=${args.partyId}attrName=${args.attrName}`, null, req);
  }
};
export {removePartyAttribute};


const removePartyContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz removePartyContent method',
  args:{fromDate: {type: GraphQLString},partyContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/removePartyContent?fromDate=${args.fromDate}partyContentTypeId=${args.partyContentTypeId}contentId=${args.contentId}partyId=${args.partyId}`, null, req);
  }
};
export {removePartyContent};


const savePartyNameChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz savePartyNameChange method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString},groupName: {type: GraphQLString},middleName: {type: GraphQLString},partyId: {type: GraphQLString},personalTitle: {type: GraphQLString},suffix: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/savePartyNameChange?firstName=${args.firstName}lastName=${args.lastName}groupName=${args.groupName}middleName=${args.middleName}partyId=${args.partyId}personalTitle=${args.personalTitle}suffix=${args.suffix}`, null, req);
  }
};
export {savePartyNameChange};


const sendAccountActivatedEmailNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendAccountActivatedEmailNotification method',
  args:{userLoginId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendAccountActivatedEmailNotification?userLoginId=${args.userLoginId}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {sendAccountActivatedEmailNotification};


const sendCommEventAsEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendCommEventAsEmail method',
  args:{communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendCommEventAsEmail?communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {sendCommEventAsEmail};


const sendContactUsEmailToCompany = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendContactUsEmailToCompany method',
  args:{partyIdTo: {type: GraphQLString},partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},lastName: {type: GraphQLString},orderId: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},postalCode: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},emailAddress: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},emailType: {type: GraphQLString},countryCode: {type: GraphQLString},contactListId: {type: GraphQLString},custRequestId: {type: GraphQLString},action: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},productStoreId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},productId: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},firstName: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},bccString: {type: GraphQLString},communicationEventId: {type: GraphQLString},toString: {type: GraphQLString},fromString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendContactUsEmailToCompany?partyIdTo=${args.partyIdTo}partyIdFrom=${args.partyIdFrom}note=${args.note}lastName=${args.lastName}orderId=${args.orderId}subject=${args.subject}ccString=${args.ccString}postalCode=${args.postalCode}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}content=${args.content}emailAddress=${args.emailAddress}contentMimeTypeId=${args.contentMimeTypeId}datetimeStarted=${args.datetimeStarted}emailType=${args.emailType}countryCode=${args.countryCode}contactListId=${args.contactListId}custRequestId=${args.custRequestId}action=${args.action}contactMechIdFrom=${args.contactMechIdFrom}reasonEnumId=${args.reasonEnumId}productStoreId=${args.productStoreId}roleTypeIdTo=${args.roleTypeIdTo}productId=${args.productId}parentCommEventId=${args.parentCommEventId}entryDate=${args.entryDate}datetimeEnded=${args.datetimeEnded}origCommEventId=${args.origCommEventId}messageId=${args.messageId}roleTypeIdFrom=${args.roleTypeIdFrom}contactMechIdTo=${args.contactMechIdTo}firstName=${args.firstName}headerString=${args.headerString}statusId=${args.statusId}bccString=${args.bccString}communicationEventId=${args.communicationEventId}toString=${args.toString}fromString=${args.fromString}`, null, req);
  }
};
export {sendContactUsEmailToCompany};


const sendCreatePartyEmailNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendCreatePartyEmailNotification method',
  args:{emailAddress: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendCreatePartyEmailNotification?emailAddress=${args.emailAddress}productStoreId=${args.productStoreId}partyId=${args.partyId}`, null, req);
  }
};
export {sendCreatePartyEmailNotification};


const sendEmailDated = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendEmailDated method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendEmailDated?`, null, req);
  }
};
export {sendEmailDated};


const sendEmailToContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendEmailToContactList method',
  args:{contactListId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendEmailToContactList?contactListId=${args.contactListId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {sendEmailToContactList};


const sendUpdatePersonalInfoEmailNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendUpdatePersonalInfoEmailNotification method',
  args:{updatedUserLogin: {type: new GraphQLList(KeyValueType)},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendUpdatePersonalInfoEmailNotification?updatedUserLogin=${args.updatedUserLogin}productStoreId=${args.productStoreId}partyId=${args.partyId}`, null, req);
  }
};
export {sendUpdatePersonalInfoEmailNotification};


const sendVerifyEmailAddressNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendVerifyEmailAddressNotification method',
  args:{emailAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/sendVerifyEmailAddressNotification?emailAddress=${args.emailAddress}`, null, req);
  }
};
export {sendVerifyEmailAddressNotification};


const setCommEventComplete = {
  type: GraphQLString,
  description: 'mutation for ofbiz setCommEventComplete method',
  args:{communicationEventId: {type: GraphQLString},partyIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/setCommEventComplete?communicationEventId=${args.communicationEventId}partyIdFrom=${args.partyIdFrom}`, null, req);
  }
};
export {setCommEventComplete};


const setCommEventRoleToRead = {
  type: GraphQLString,
  description: 'mutation for ofbiz setCommEventRoleToRead method',
  args:{communicationEventId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/setCommEventRoleToRead?communicationEventId=${args.communicationEventId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {setCommEventRoleToRead};


const setCommunicationEventRoleStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz setCommunicationEventRoleStatus method',
  args:{roleTypeId: {type: GraphQLString},statusId: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/setCommunicationEventRoleStatus?roleTypeId=${args.roleTypeId}statusId=${args.statusId}communicationEventId=${args.communicationEventId}partyId=${args.partyId}`, null, req);
  }
};
export {setCommunicationEventRoleStatus};


const setCommunicationEventStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz setCommunicationEventStatus method',
  args:{statusId: {type: GraphQLString},communicationEventId: {type: GraphQLString},setRoleStatusToComplete: {type: GraphQLString},partyIdFrom: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/setCommunicationEventStatus?statusId=${args.statusId}communicationEventId=${args.communicationEventId}setRoleStatusToComplete=${args.setRoleStatusToComplete}partyIdFrom=${args.partyIdFrom}`, null, req);
  }
};
export {setCommunicationEventStatus};


const setPartyProfileDefaults = {
  type: GraphQLString,
  description: 'mutation for ofbiz setPartyProfileDefaults method',
  args:{productStoreId: {type: GraphQLString},defaultPayMeth: {type: GraphQLString},defaultShipAddr: {type: GraphQLString},defaultShipMeth: {type: GraphQLString},partyId: {type: GraphQLString},defaultBillAddr: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/setPartyProfileDefaults?productStoreId=${args.productStoreId}defaultPayMeth=${args.defaultPayMeth}defaultShipAddr=${args.defaultShipAddr}defaultShipMeth=${args.defaultShipMeth}partyId=${args.partyId}defaultBillAddr=${args.defaultBillAddr}`, null, req);
  }
};
export {setPartyProfileDefaults};


const setPartyStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz setPartyStatus method',
  args:{statusId: {type: GraphQLString},partyId: {type: GraphQLString},statusDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/setPartyStatus?statusId=${args.statusId}partyId=${args.partyId}statusDate=${args.statusDate}`, null, req);
  }
};
export {setPartyStatus};


const storeIncomingEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz storeIncomingEmail method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/storeIncomingEmail?messageWrapper=${args.messageWrapper}`, null, req);
  }
};
export {storeIncomingEmail};


const updateAffiliate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAffiliate method',
  args:{affiliateName: {type: GraphQLString},yearEstablished: {type: GraphQLString},affiliateDescription: {type: GraphQLString},sitePageViews: {type: GraphQLString},partyId: {type: GraphQLString},siteVisitors: {type: GraphQLString},siteType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateAffiliate?affiliateName=${args.affiliateName}yearEstablished=${args.yearEstablished}affiliateDescription=${args.affiliateDescription}sitePageViews=${args.sitePageViews}partyId=${args.partyId}siteVisitors=${args.siteVisitors}siteType=${args.siteType}`, null, req);
  }
};
export {updateAffiliate};


const updateAgreementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementAttribute method',
  args:{agreementId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateAgreementAttribute?agreementId=${args.agreementId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateAgreementAttribute};


const updateAgreementItemTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementItemTypeAttr method',
  args:{agreementItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateAgreementItemTypeAttr?agreementItemTypeId=${args.agreementItemTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateAgreementItemTypeAttr};


const updateCommEventAfterEmail = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommEventAfterEmail method',
  args:{messageWrapper: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateCommEventAfterEmail?messageWrapper=${args.messageWrapper}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {updateCommEventAfterEmail};


const updateCommunicationEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEvent method',
  args:{communicationEventId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},contactListId: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},contactMechPurposeTypeIdFrom: {type: GraphQLString},bccString: {type: GraphQLString},partyIdTo: {type: GraphQLString},toString: {type: GraphQLString},fromString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateCommunicationEvent?communicationEventId=${args.communicationEventId}partyIdFrom=${args.partyIdFrom}note=${args.note}subject=${args.subject}ccString=${args.ccString}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}content=${args.content}contentMimeTypeId=${args.contentMimeTypeId}datetimeStarted=${args.datetimeStarted}contactListId=${args.contactListId}contactMechIdFrom=${args.contactMechIdFrom}reasonEnumId=${args.reasonEnumId}roleTypeIdTo=${args.roleTypeIdTo}parentCommEventId=${args.parentCommEventId}entryDate=${args.entryDate}datetimeEnded=${args.datetimeEnded}origCommEventId=${args.origCommEventId}messageId=${args.messageId}roleTypeIdFrom=${args.roleTypeIdFrom}contactMechIdTo=${args.contactMechIdTo}headerString=${args.headerString}statusId=${args.statusId}contactMechPurposeTypeIdFrom=${args.contactMechPurposeTypeIdFrom}bccString=${args.bccString}partyIdTo=${args.partyIdTo}toString=${args.toString}fromString=${args.fromString}`, null, req);
  }
};
export {updateCommunicationEvent};


const updateCommunicationEventPrpTyp = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventPrpTyp method',
  args:{communicationEventPrpTypId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateCommunicationEventPrpTyp?communicationEventPrpTypId=${args.communicationEventPrpTypId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateCommunicationEventPrpTyp};


const updateCommunicationEventPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventPurpose method',
  args:{communicationEventPrpTypId: {type: GraphQLString},communicationEventId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateCommunicationEventPurpose?communicationEventPrpTypId=${args.communicationEventPrpTypId}communicationEventId=${args.communicationEventId}description=${args.description}`, null, req);
  }
};
export {updateCommunicationEventPurpose};


const updateCommunicationEventRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventRole method',
  args:{roleTypeId: {type: GraphQLString},communicationEventId: {type: GraphQLString},partyId: {type: GraphQLString},statusId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateCommunicationEventRole?roleTypeId=${args.roleTypeId}communicationEventId=${args.communicationEventId}partyId=${args.partyId}statusId=${args.statusId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateCommunicationEventRole};


const updateContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMech method',
  args:{contactMechTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},infoString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateContactMech?contactMechTypeId=${args.contactMechTypeId}contactMechId=${args.contactMechId}infoString=${args.infoString}`, null, req);
  }
};
export {updateContactMech};


const updateContactMechAndPurposes = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechAndPurposes method',
  args:{houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},askForName: {type: GraphQLString},city: {type: GraphQLString},postalCode: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},attnName: {type: GraphQLString},setShippingPurpose: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},phoneContactMechId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},countryGeoId: {type: GraphQLString},roleTypeId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},address1: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},setBillingPurpose: {type: GraphQLString},allowSolicitation: {type: GraphQLString},areaCode: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},directions: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateContactMechAndPurposes?houseNumberExt=${args.houseNumberExt}extension=${args.extension}askForName=${args.askForName}city=${args.city}postalCode=${args.postalCode}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}attnName=${args.attnName}setShippingPurpose=${args.setShippingPurpose}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}countryCode=${args.countryCode}contactNumber=${args.contactNumber}phoneContactMechId=${args.phoneContactMechId}productStoreId=${args.productStoreId}partyId=${args.partyId}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}comments=${args.comments}address2=${args.address2}address1=${args.address1}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}thruDate=${args.thruDate}fromDate=${args.fromDate}setBillingPurpose=${args.setBillingPurpose}allowSolicitation=${args.allowSolicitation}areaCode=${args.areaCode}yearsWithContactMech=${args.yearsWithContactMech}directions=${args.directions}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {updateContactMechAndPurposes};


const updateContactMechAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechAttribute method',
  args:{contactMechId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateContactMechAttribute?contactMechId=${args.contactMechId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateContactMechAttribute};


const updateEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmailAddress method',
  args:{emailAddress: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateEmailAddress?emailAddress=${args.emailAddress}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateEmailAddress};


const updateNeedType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateNeedType method',
  args:{needTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateNeedType?needTypeId=${args.needTypeId}description=${args.description}`, null, req);
  }
};
export {updateNeedType};


const updatePartyAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyAttribute method',
  args:{partyId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyAttribute?partyId=${args.partyId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updatePartyAttribute};


const updatePartyCarrierAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyCarrierAccount method',
  args:{fromDate: {type: GraphQLString},carrierPartyId: {type: GraphQLString},partyId: {type: GraphQLString},accountNumber: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyCarrierAccount?fromDate=${args.fromDate}carrierPartyId=${args.carrierPartyId}partyId=${args.partyId}accountNumber=${args.accountNumber}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyCarrierAccount};


const updatePartyClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyClassification method',
  args:{fromDate: {type: GraphQLString},partyClassificationGroupId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyClassification?fromDate=${args.fromDate}partyClassificationGroupId=${args.partyClassificationGroupId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyClassification};


const updatePartyClassificationGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyClassificationGroup method',
  args:{partyClassificationGroupId: {type: GraphQLString},parentGroupId: {type: GraphQLString},description: {type: GraphQLString},partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyClassificationGroup?partyClassificationGroupId=${args.partyClassificationGroupId}parentGroupId=${args.parentGroupId}description=${args.description}partyClassificationTypeId=${args.partyClassificationTypeId}`, null, req);
  }
};
export {updatePartyClassificationGroup};


const updatePartyContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyContactMech method',
  args:{contactMechTypeId: {type: GraphQLString},roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},infoString: {type: GraphQLString},newContactMechId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyContactMech?contactMechTypeId=${args.contactMechTypeId}roleTypeId=${args.roleTypeId}extension=${args.extension}comments=${args.comments}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}infoString=${args.infoString}newContactMechId=${args.newContactMechId}partyId=${args.partyId}`, null, req);
  }
};
export {updatePartyContactMech};


const updatePartyContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyContent method',
  args:{fromDate: {type: GraphQLString},partyContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyContent?fromDate=${args.fromDate}partyContentTypeId=${args.partyContentTypeId}contentId=${args.contentId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyContent};


const updatePartyEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyEmailAddress method',
  args:{emailAddress: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},allowSolicitation: {type: GraphQLString},extension: {type: GraphQLString},comments: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},partyId: {type: GraphQLString},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyEmailAddress?emailAddress=${args.emailAddress}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}allowSolicitation=${args.allowSolicitation}extension=${args.extension}comments=${args.comments}yearsWithContactMech=${args.yearsWithContactMech}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}partyId=${args.partyId}contactMechId=${args.contactMechId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyEmailAddress};


const updatePartyGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyGroup method',
  args:{comments: {type: GraphQLString},description: {type: GraphQLString},externalId: {type: GraphQLString},tickerSymbol: {type: GraphQLString},logoImageUrl: {type: GraphQLString},partyTypeId: {type: GraphQLString},groupName: {type: GraphQLString},groupNameLocal: {type: GraphQLString},numEmployees: {type: GraphQLInt},statusId: {type: GraphQLString},preferredCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},officeSiteName: {type: GraphQLString},annualRevenue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyGroup?comments=${args.comments}description=${args.description}externalId=${args.externalId}tickerSymbol=${args.tickerSymbol}logoImageUrl=${args.logoImageUrl}partyTypeId=${args.partyTypeId}groupName=${args.groupName}groupNameLocal=${args.groupNameLocal}numEmployees=${args.numEmployees}statusId=${args.statusId}preferredCurrencyUomId=${args.preferredCurrencyUomId}partyId=${args.partyId}officeSiteName=${args.officeSiteName}annualRevenue=${args.annualRevenue}`, null, req);
  }
};
export {updatePartyGroup};


const updatePartyIdentification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyIdentification method',
  args:{partyIdentificationTypeId: {type: GraphQLString},partyId: {type: GraphQLString},idValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyIdentification?partyIdentificationTypeId=${args.partyIdentificationTypeId}partyId=${args.partyId}idValue=${args.idValue}`, null, req);
  }
};
export {updatePartyIdentification};


const updatePartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyInvitation method',
  args:{partyInvitationId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},emailAddress: {type: GraphQLString},statusId: {type: GraphQLString},toName: {type: GraphQLString},lastInviteDate: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyInvitation?partyInvitationId=${args.partyInvitationId}partyIdFrom=${args.partyIdFrom}emailAddress=${args.emailAddress}statusId=${args.statusId}toName=${args.toName}lastInviteDate=${args.lastInviteDate}partyId=${args.partyId}`, null, req);
  }
};
export {updatePartyInvitation};


const updatePartyPostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyPostalAddress method',
  args:{city: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},contactMechId: {type: GraphQLString},attnName: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},partyId: {type: GraphQLString},countryGeoId: {type: GraphQLString},roleTypeId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},directions: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyPostalAddress?city=${args.city}address1=${args.address1}postalCode=${args.postalCode}houseNumberExt=${args.houseNumberExt}extension=${args.extension}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}contactMechId=${args.contactMechId}attnName=${args.attnName}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}partyId=${args.partyId}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}comments=${args.comments}address2=${args.address2}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}directions=${args.directions}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {updatePartyPostalAddress};


const updatePartyRelationship = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyRelationship method',
  args:{fromDate: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},relationshipName: {type: GraphQLString},securityGroupId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyRelationshipTypeId: {type: GraphQLString},positionTitle: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},priorityTypeId: {type: GraphQLString},permissionsEnumId: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyRelationship?fromDate=${args.fromDate}partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}relationshipName=${args.relationshipName}securityGroupId=${args.securityGroupId}partyIdFrom=${args.partyIdFrom}partyRelationshipTypeId=${args.partyRelationshipTypeId}positionTitle=${args.positionTitle}comments=${args.comments}statusId=${args.statusId}priorityTypeId=${args.priorityTypeId}permissionsEnumId=${args.permissionsEnumId}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyRelationship};


const updatePartyTelecomNumber = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyTelecomNumber method',
  args:{roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},askForName: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},areaCode: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePartyTelecomNumber?roleTypeId=${args.roleTypeId}extension=${args.extension}askForName=${args.askForName}comments=${args.comments}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}areaCode=${args.areaCode}yearsWithContactMech=${args.yearsWithContactMech}countryCode=${args.countryCode}contactNumber=${args.contactNumber}partyId=${args.partyId}`, null, req);
  }
};
export {updatePartyTelecomNumber};


const updatePerson = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePerson method',
  args:{firstName: {type: GraphQLString},lastName: {type: GraphQLString},yearsWithEmployer: {type: GraphQLInt},occupation: {type: GraphQLString},gender: {type: GraphQLString},employmentStatusEnumId: {type: GraphQLString},socialSecurityNumber: {type: GraphQLString},description: {type: GraphQLString},suffix: {type: GraphQLString},mothersMaidenName: {type: GraphQLString},middleNameLocal: {type: GraphQLString},existingCustomer: {type: GraphQLString},residenceStatusEnumId: {type: GraphQLString},nickname: {type: GraphQLString},preferredCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString},memberId: {type: GraphQLString},height: {type: GraphQLFloat},passportNumber: {type: GraphQLString},lastNameLocal: {type: GraphQLString},comments: {type: GraphQLString},monthsWithEmployer: {type: GraphQLInt},weight: {type: GraphQLFloat},externalId: {type: GraphQLString},birthDate: {type: GraphQLString},otherLocal: {type: GraphQLString},statusId: {type: GraphQLString},cardId: {type: GraphQLString},middleName: {type: GraphQLString},firstNameLocal: {type: GraphQLString},passportExpireDate: {type: GraphQLString},salutation: {type: GraphQLString},personalTitle: {type: GraphQLString},deceasedDate: {type: GraphQLString},totalYearsWorkExperience: {type: GraphQLFloat},maritalStatus: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePerson?firstName=${args.firstName}lastName=${args.lastName}yearsWithEmployer=${args.yearsWithEmployer}occupation=${args.occupation}gender=${args.gender}employmentStatusEnumId=${args.employmentStatusEnumId}socialSecurityNumber=${args.socialSecurityNumber}description=${args.description}suffix=${args.suffix}mothersMaidenName=${args.mothersMaidenName}middleNameLocal=${args.middleNameLocal}existingCustomer=${args.existingCustomer}residenceStatusEnumId=${args.residenceStatusEnumId}nickname=${args.nickname}preferredCurrencyUomId=${args.preferredCurrencyUomId}partyId=${args.partyId}memberId=${args.memberId}height=${args.height}passportNumber=${args.passportNumber}lastNameLocal=${args.lastNameLocal}comments=${args.comments}monthsWithEmployer=${args.monthsWithEmployer}weight=${args.weight}externalId=${args.externalId}birthDate=${args.birthDate}otherLocal=${args.otherLocal}statusId=${args.statusId}cardId=${args.cardId}middleName=${args.middleName}firstNameLocal=${args.firstNameLocal}passportExpireDate=${args.passportExpireDate}salutation=${args.salutation}personalTitle=${args.personalTitle}deceasedDate=${args.deceasedDate}totalYearsWorkExperience=${args.totalYearsWorkExperience}maritalStatus=${args.maritalStatus}`, null, req);
  }
};
export {updatePerson};


const updatePostalAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePostalAddress method',
  args:{city: {type: GraphQLString},address1: {type: GraphQLString},postalCode: {type: GraphQLString},contactMechId: {type: GraphQLString},countryGeoId: {type: GraphQLString},houseNumberExt: {type: GraphQLString},address2: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},attnName: {type: GraphQLString},directions: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePostalAddress?city=${args.city}address1=${args.address1}postalCode=${args.postalCode}contactMechId=${args.contactMechId}countryGeoId=${args.countryGeoId}houseNumberExt=${args.houseNumberExt}address2=${args.address2}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}attnName=${args.attnName}directions=${args.directions}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}partyId=${args.partyId}`, null, req);
  }
};
export {updatePostalAddress};


const updatePostalAddressAndPurposes = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePostalAddressAndPurposes method',
  args:{contactMechId: {type: GraphQLString},houseNumberExt: {type: GraphQLString},extension: {type: GraphQLString},city: {type: GraphQLString},postalCode: {type: GraphQLString},postalCodeGeoId: {type: GraphQLString},houseNumber: {type: GraphQLInt},postalCodeExt: {type: GraphQLString},attnName: {type: GraphQLString},setShippingPurpose: {type: GraphQLString},countyGeoId: {type: GraphQLString},toName: {type: GraphQLString},cityGeoId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},countryGeoId: {type: GraphQLString},roleTypeId: {type: GraphQLString},comments: {type: GraphQLString},address2: {type: GraphQLString},address1: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},setBillingPurpose: {type: GraphQLString},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},directions: {type: GraphQLString},municipalityGeoId: {type: GraphQLString},stateProvinceGeoId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updatePostalAddressAndPurposes?contactMechId=${args.contactMechId}houseNumberExt=${args.houseNumberExt}extension=${args.extension}city=${args.city}postalCode=${args.postalCode}postalCodeGeoId=${args.postalCodeGeoId}houseNumber=${args.houseNumber}postalCodeExt=${args.postalCodeExt}attnName=${args.attnName}setShippingPurpose=${args.setShippingPurpose}countyGeoId=${args.countyGeoId}toName=${args.toName}cityGeoId=${args.cityGeoId}productStoreId=${args.productStoreId}partyId=${args.partyId}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}comments=${args.comments}address2=${args.address2}address1=${args.address1}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}thruDate=${args.thruDate}fromDate=${args.fromDate}setBillingPurpose=${args.setBillingPurpose}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}directions=${args.directions}municipalityGeoId=${args.municipalityGeoId}stateProvinceGeoId=${args.stateProvinceGeoId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {updatePostalAddressAndPurposes};


const updateRoleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRoleType method',
  args:{roleTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateRoleType?roleTypeId=${args.roleTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateRoleType};


const updateRoleTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRoleTypeAttr method',
  args:{roleTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateRoleTypeAttr?roleTypeId=${args.roleTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateRoleTypeAttr};


const updateTelecomNumber = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTelecomNumber method',
  args:{contactMechId: {type: GraphQLString},areaCode: {type: GraphQLString},askForName: {type: GraphQLString},countryCode: {type: GraphQLString},contactNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateTelecomNumber?contactMechId=${args.contactMechId}areaCode=${args.areaCode}askForName=${args.askForName}countryCode=${args.countryCode}contactNumber=${args.contactNumber}`, null, req);
  }
};
export {updateTelecomNumber};


const updateVendor = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVendor method',
  args:{partyId: {type: GraphQLString},manifestCompanyTitle: {type: GraphQLString},manifestPolicies: {type: GraphQLString},manifestLogoUrl: {type: GraphQLString},manifestCompanyName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/updateVendor?partyId=${args.partyId}manifestCompanyTitle=${args.manifestCompanyTitle}manifestPolicies=${args.manifestPolicies}manifestLogoUrl=${args.manifestLogoUrl}manifestCompanyName=${args.manifestCompanyName}`, null, req);
  }
};
export {updateVendor};


const uploadPartyContentFile = {
  type: GraphQLString,
  description: 'mutation for ofbiz uploadPartyContentFile method',
  args:{partyContentTypeId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/uploadPartyContentFile?partyContentTypeId=${args.partyContentTypeId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}thruDate=${args.thruDate}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}_uploadedFile_fileName=${args._uploadedFile_fileName}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}_uploadedFile_contentType=${args._uploadedFile_contentType}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {uploadPartyContentFile};


const verifyEmailAddress = {
  type: GraphQLString,
  description: 'mutation for ofbiz verifyEmailAddress method',
  args:{verifyHash: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partys/verifyEmailAddress?verifyHash=${args.verifyHash}`, null, req);
  }
};
export {verifyEmailAddress};
