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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const copyCustRequestItem = {
  type: ResponseType,
  description: 'mutation for ofbiz copyCustRequestItem method',
  args:{custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},custRequestResolutionId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},custRequestItemSeqIdTo: {type: GraphQLString},maximumAmount: {type: GraphQLFloat},requiredByDate: {type: GraphQLString},description: {type: GraphQLString},priority: {type: GraphQLInt},custRequestIdTo: {type: GraphQLString},statusId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},copyLinkedQuotes: {type: GraphQLString},selectedAmount: {type: GraphQLFloat},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/copyCustRequestItem?custRequestId=${args.custRequestId}&custRequestItemSeqId=${args.custRequestItemSeqId}&custRequestResolutionId=${args.custRequestResolutionId}&quantity=${args.quantity}&reservLength=${args.reservLength}&sequenceNum=${args.sequenceNum}&productId=${args.productId}&reservPersons=${args.reservPersons}&custRequestItemSeqIdTo=${args.custRequestItemSeqIdTo}&maximumAmount=${args.maximumAmount}&requiredByDate=${args.requiredByDate}&description=${args.description}&priority=${args.priority}&custRequestIdTo=${args.custRequestIdTo}&statusId=${args.statusId}&reservStart=${args.reservStart}&configId=${args.configId}&copyLinkedQuotes=${args.copyLinkedQuotes}&selectedAmount=${args.selectedAmount}&story=${args.story}&`, null, req);
  }
};
export {copyCustRequestItem};


const createCustRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequest method',
  args:{reason: {type: GraphQLString},fromPartyId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},reservPersons: {type: GraphQLFloat},fulfillContactMechId: {type: GraphQLString},maximumAmount: {type: GraphQLFloat},description: {type: GraphQLString},requiredByDate: {type: GraphQLString},custRequestDate: {type: GraphQLString},internalComment: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},custRequestId: {type: GraphQLString},productStoreId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},closedDateTime: {type: GraphQLString},selectedAmount: {type: GraphQLFloat},webSiteId: {type: GraphQLString},custRequestName: {type: GraphQLString},custRequestResolutionId: {type: GraphQLString},responseRequiredDate: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},productId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},priority: {type: GraphQLInt},maximumAmountUomId: {type: GraphQLString},openDateTime: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},currencyUomId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},custRequestTypeId: {type: GraphQLString},custRequestCategoryId: {type: GraphQLString},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequest?reason=${args.reason}&fromPartyId=${args.fromPartyId}&salesChannelEnumId=${args.salesChannelEnumId}&sequenceNum=${args.sequenceNum}&reservPersons=${args.reservPersons}&fulfillContactMechId=${args.fulfillContactMechId}&maximumAmount=${args.maximumAmount}&description=${args.description}&requiredByDate=${args.requiredByDate}&custRequestDate=${args.custRequestDate}&internalComment=${args.internalComment}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&reservStart=${args.reservStart}&configId=${args.configId}&custRequestId=${args.custRequestId}&productStoreId=${args.productStoreId}&createdByUserLogin=${args.createdByUserLogin}&closedDateTime=${args.closedDateTime}&selectedAmount=${args.selectedAmount}&webSiteId=${args.webSiteId}&custRequestName=${args.custRequestName}&custRequestResolutionId=${args.custRequestResolutionId}&responseRequiredDate=${args.responseRequiredDate}&quantity=${args.quantity}&reservLength=${args.reservLength}&productId=${args.productId}&lastModifiedDate=${args.lastModifiedDate}&priority=${args.priority}&maximumAmountUomId=${args.maximumAmountUomId}&openDateTime=${args.openDateTime}&custRequestItemSeqId=${args.custRequestItemSeqId}&currencyUomId=${args.currencyUomId}&createdDate=${args.createdDate}&statusId=${args.statusId}&custRequestTypeId=${args.custRequestTypeId}&custRequestCategoryId=${args.custRequestCategoryId}&story=${args.story}&`, null, req);
  }
};
export {createCustRequest};


const createCustRequestAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestAttribute method',
  args:{custRequestId: {type: GraphQLString},attrValue: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestAttribute?custRequestId=${args.custRequestId}&attrValue=${args.attrValue}&attrName=${args.attrName}&`, null, req);
  }
};
export {createCustRequestAttribute};


const createCustRequestCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestCategory method',
  args:{description: {type: GraphQLString},custRequestTypeId: {type: GraphQLString},custRequestCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestCategory?description=${args.description}&custRequestTypeId=${args.custRequestTypeId}&custRequestCategoryId=${args.custRequestCategoryId}&`, null, req);
  }
};
export {createCustRequestCategory};


const createCustRequestContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestContent method',
  args:{contentId: {type: GraphQLString},custRequestId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestContent?contentId=${args.contentId}&custRequestId=${args.custRequestId}&fromDate=${args.fromDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createCustRequestContent};


const createCustRequestFromCart = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestFromCart method',
  args:{cart: {type: GraphQLString},custRequestName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestFromCart?cart=${args.cart}&custRequestName=${args.custRequestName}&`, null, req);
  }
};
export {createCustRequestFromCart};


const createCustRequestFromCommEvent = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestFromCommEvent method',
  args:{communicationEventId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},contactListId: {type: GraphQLString},custRequestId: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},custRequestName: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},bccString: {type: GraphQLString},partyIdTo: {type: GraphQLString},toString: {type: GraphQLString},custRequestTypeId: {type: GraphQLString},fromString: {type: GraphQLString},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestFromCommEvent?communicationEventId=${args.communicationEventId}&partyIdFrom=${args.partyIdFrom}&note=${args.note}&subject=${args.subject}&ccString=${args.ccString}&contactMechTypeId=${args.contactMechTypeId}&communicationEventTypeId=${args.communicationEventTypeId}&content=${args.content}&contentMimeTypeId=${args.contentMimeTypeId}&datetimeStarted=${args.datetimeStarted}&contactListId=${args.contactListId}&custRequestId=${args.custRequestId}&contactMechIdFrom=${args.contactMechIdFrom}&reasonEnumId=${args.reasonEnumId}&roleTypeIdTo=${args.roleTypeIdTo}&custRequestName=${args.custRequestName}&parentCommEventId=${args.parentCommEventId}&entryDate=${args.entryDate}&datetimeEnded=${args.datetimeEnded}&origCommEventId=${args.origCommEventId}&messageId=${args.messageId}&roleTypeIdFrom=${args.roleTypeIdFrom}&contactMechIdTo=${args.contactMechIdTo}&headerString=${args.headerString}&statusId=${args.statusId}&bccString=${args.bccString}&partyIdTo=${args.partyIdTo}&toString=${args.toString}&custRequestTypeId=${args.custRequestTypeId}&fromString=${args.fromString}&story=${args.story}&`, null, req);
  }
};
export {createCustRequestFromCommEvent};


const createCustRequestFromShoppingList = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestFromShoppingList method',
  args:{shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestFromShoppingList?shoppingListId=${args.shoppingListId}&`, null, req);
  }
};
export {createCustRequestFromShoppingList};


const createCustRequestItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestItem method',
  args:{custRequestId: {type: GraphQLString},custRequestResolutionId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},maximumAmount: {type: GraphQLFloat},requiredByDate: {type: GraphQLString},description: {type: GraphQLString},priority: {type: GraphQLInt},custRequestItemSeqId: {type: GraphQLString},statusId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},selectedAmount: {type: GraphQLFloat},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestItem?custRequestId=${args.custRequestId}&custRequestResolutionId=${args.custRequestResolutionId}&quantity=${args.quantity}&reservLength=${args.reservLength}&sequenceNum=${args.sequenceNum}&productId=${args.productId}&reservPersons=${args.reservPersons}&maximumAmount=${args.maximumAmount}&requiredByDate=${args.requiredByDate}&description=${args.description}&priority=${args.priority}&custRequestItemSeqId=${args.custRequestItemSeqId}&statusId=${args.statusId}&reservStart=${args.reservStart}&configId=${args.configId}&selectedAmount=${args.selectedAmount}&story=${args.story}&`, null, req);
  }
};
export {createCustRequestItem};


const createCustRequestItemNote = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestItemNote method',
  args:{note: {type: GraphQLString},custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestItemNote?note=${args.note}&custRequestId=${args.custRequestId}&custRequestItemSeqId=${args.custRequestItemSeqId}&partyId=${args.partyId}&`, null, req);
  }
};
export {createCustRequestItemNote};


const createCustRequestNote = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestNote method',
  args:{custRequestId: {type: GraphQLString},noteInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestNote?custRequestId=${args.custRequestId}&noteInfo=${args.noteInfo}&`, null, req);
  }
};
export {createCustRequestNote};


const createCustRequestParty = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestParty method',
  args:{roleTypeId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestParty?roleTypeId=${args.roleTypeId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&fromDate=${args.fromDate}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createCustRequestParty};


const createCustRequestResolution = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestResolution method',
  args:{custRequestResolutionId: {type: GraphQLString},description: {type: GraphQLString},custRequestTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestResolution?custRequestResolutionId=${args.custRequestResolutionId}&description=${args.description}&custRequestTypeId=${args.custRequestTypeId}&`, null, req);
  }
};
export {createCustRequestResolution};


const createCustRequestStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestStatus method',
  args:{statusDate: {type: GraphQLString},statusId: {type: GraphQLString},custRequestId: {type: GraphQLString},changeByUserLoginId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestStatus?statusDate=${args.statusDate}&statusId=${args.statusId}&custRequestId=${args.custRequestId}&changeByUserLoginId=${args.changeByUserLoginId}&custRequestItemSeqId=${args.custRequestItemSeqId}&`, null, req);
  }
};
export {createCustRequestStatus};


const createCustRequestType = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},custRequestTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&custRequestTypeId=${args.custRequestTypeId}&partyId=${args.partyId}&`, null, req);
  }
};
export {createCustRequestType};


const createCustRequestTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createCustRequestTypeAttr method',
  args:{custRequestTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createCustRequestTypeAttr?custRequestTypeId=${args.custRequestTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createCustRequestTypeAttr};


const createRespondingParty = {
  type: ResponseType,
  description: 'mutation for ofbiz createRespondingParty method',
  args:{respondingPartySeqId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},dateSent: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/createRespondingParty?respondingPartySeqId=${args.respondingPartySeqId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&dateSent=${args.dateSent}&contactMechId=${args.contactMechId}&`, null, req);
  }
};
export {createRespondingParty};


const custRequestPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz custRequestPermissionCheck method',
  args:{fromPartyId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/custRequestPermissionCheck?fromPartyId=${args.fromPartyId}&primaryPermission=${args.primaryPermission}&altPermission=${args.altPermission}&resourceDescription=${args.resourceDescription}&mainAction=${args.mainAction}&`, null, req);
  }
};
export {custRequestPermissionCheck};


const deleteCustRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequest method',
  args:{custRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequest?custRequestId=${args.custRequestId}&`, null, req);
  }
};
export {deleteCustRequest};


const deleteCustRequestCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequestCategory method',
  args:{custRequestCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequestCategory?custRequestCategoryId=${args.custRequestCategoryId}&`, null, req);
  }
};
export {deleteCustRequestCategory};


const deleteCustRequestContent = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequestContent method',
  args:{fromDate: {type: GraphQLString},contentId: {type: GraphQLString},custRequestId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequestContent?fromDate=${args.fromDate}&contentId=${args.contentId}&custRequestId=${args.custRequestId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {deleteCustRequestContent};


const deleteCustRequestParty = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequestParty method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequestParty?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&`, null, req);
  }
};
export {deleteCustRequestParty};


const deleteCustRequestResolution = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequestResolution method',
  args:{custRequestResolutionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequestResolution?custRequestResolutionId=${args.custRequestResolutionId}&`, null, req);
  }
};
export {deleteCustRequestResolution};


const deleteCustRequestType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequestType method',
  args:{custRequestTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequestType?custRequestTypeId=${args.custRequestTypeId}&`, null, req);
  }
};
export {deleteCustRequestType};


const deleteCustRequestTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCustRequestTypeAttr method',
  args:{custRequestTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteCustRequestTypeAttr?custRequestTypeId=${args.custRequestTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteCustRequestTypeAttr};


const deleteRespondingParty = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteRespondingParty method',
  args:{respondingPartySeqId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/deleteRespondingParty?respondingPartySeqId=${args.respondingPartySeqId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&`, null, req);
  }
};
export {deleteRespondingParty};


const expireCustRequestParty = {
  type: ResponseType,
  description: 'mutation for ofbiz expireCustRequestParty method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/expireCustRequestParty?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&`, null, req);
  }
};
export {expireCustRequestParty};


const getCustRequestsByRole = {
  type: ResponseType,
  description: 'mutation for ofbiz getCustRequestsByRole method',
  args:{roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/getCustRequestsByRole?roleTypeId=${args.roleTypeId}&`, null, req);
  }
};
export {getCustRequestsByRole};


const setCustRequestStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz setCustRequestStatus method',
  args:{statusId: {type: GraphQLString},custRequestId: {type: GraphQLString},reason: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/setCustRequestStatus?statusId=${args.statusId}&custRequestId=${args.custRequestId}&reason=${args.reason}&webSiteId=${args.webSiteId}&`, null, req);
  }
};
export {setCustRequestStatus};


const updateCustRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequest method',
  args:{custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},reason: {type: GraphQLString},fromPartyId: {type: GraphQLString},custRequestName: {type: GraphQLString},responseRequiredDate: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},fulfillContactMechId: {type: GraphQLString},description: {type: GraphQLString},custRequestDate: {type: GraphQLString},priority: {type: GraphQLInt},maximumAmountUomId: {type: GraphQLString},openDateTime: {type: GraphQLString},internalComment: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},currencyUomId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},custRequestTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},custRequestCategoryId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},closedDateTime: {type: GraphQLString},story: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequest?custRequestId=${args.custRequestId}&custRequestItemSeqId=${args.custRequestItemSeqId}&reason=${args.reason}&fromPartyId=${args.fromPartyId}&custRequestName=${args.custRequestName}&responseRequiredDate=${args.responseRequiredDate}&salesChannelEnumId=${args.salesChannelEnumId}&lastModifiedDate=${args.lastModifiedDate}&fulfillContactMechId=${args.fulfillContactMechId}&description=${args.description}&custRequestDate=${args.custRequestDate}&priority=${args.priority}&maximumAmountUomId=${args.maximumAmountUomId}&openDateTime=${args.openDateTime}&internalComment=${args.internalComment}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&currencyUomId=${args.currencyUomId}&createdDate=${args.createdDate}&statusId=${args.statusId}&custRequestTypeId=${args.custRequestTypeId}&productStoreId=${args.productStoreId}&custRequestCategoryId=${args.custRequestCategoryId}&createdByUserLogin=${args.createdByUserLogin}&closedDateTime=${args.closedDateTime}&story=${args.story}&webSiteId=${args.webSiteId}&`, null, req);
  }
};
export {updateCustRequest};


const updateCustRequestAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestAttribute method',
  args:{custRequestId: {type: GraphQLString},attrValue: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestAttribute?custRequestId=${args.custRequestId}&attrValue=${args.attrValue}&attrName=${args.attrName}&`, null, req);
  }
};
export {updateCustRequestAttribute};


const updateCustRequestCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestCategory method',
  args:{custRequestCategoryId: {type: GraphQLString},description: {type: GraphQLString},custRequestTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestCategory?custRequestCategoryId=${args.custRequestCategoryId}&description=${args.description}&custRequestTypeId=${args.custRequestTypeId}&`, null, req);
  }
};
export {updateCustRequestCategory};


const updateCustRequestItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestItem method',
  args:{custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},custRequestResolutionId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},maximumAmount: {type: GraphQLFloat},requiredByDate: {type: GraphQLString},description: {type: GraphQLString},priority: {type: GraphQLInt},statusId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},selectedAmount: {type: GraphQLFloat},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestItem?custRequestId=${args.custRequestId}&custRequestItemSeqId=${args.custRequestItemSeqId}&custRequestResolutionId=${args.custRequestResolutionId}&quantity=${args.quantity}&reservLength=${args.reservLength}&sequenceNum=${args.sequenceNum}&productId=${args.productId}&reservPersons=${args.reservPersons}&maximumAmount=${args.maximumAmount}&requiredByDate=${args.requiredByDate}&description=${args.description}&priority=${args.priority}&statusId=${args.statusId}&reservStart=${args.reservStart}&configId=${args.configId}&selectedAmount=${args.selectedAmount}&story=${args.story}&`, null, req);
  }
};
export {updateCustRequestItem};


const updateCustRequestNote = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestNote method',
  args:{custRequestId: {type: GraphQLString},noteId: {type: GraphQLString},noteInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestNote?custRequestId=${args.custRequestId}&noteId=${args.noteId}&noteInfo=${args.noteInfo}&`, null, req);
  }
};
export {updateCustRequestNote};


const updateCustRequestParty = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestParty method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestParty?fromDate=${args.fromDate}&roleTypeId=${args.roleTypeId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateCustRequestParty};


const updateCustRequestResolution = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestResolution method',
  args:{custRequestResolutionId: {type: GraphQLString},description: {type: GraphQLString},custRequestTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestResolution?custRequestResolutionId=${args.custRequestResolutionId}&description=${args.description}&custRequestTypeId=${args.custRequestTypeId}&`, null, req);
  }
};
export {updateCustRequestResolution};


const updateCustRequestType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestType method',
  args:{custRequestTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestType?custRequestTypeId=${args.custRequestTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&partyId=${args.partyId}&`, null, req);
  }
};
export {updateCustRequestType};


const updateCustRequestTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCustRequestTypeAttr method',
  args:{custRequestTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateCustRequestTypeAttr?custRequestTypeId=${args.custRequestTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateCustRequestTypeAttr};


const updateRespondingParty = {
  type: ResponseType,
  description: 'mutation for ofbiz updateRespondingParty method',
  args:{respondingPartySeqId: {type: GraphQLString},custRequestId: {type: GraphQLString},partyId: {type: GraphQLString},dateSent: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderRequest/updateRespondingParty?respondingPartySeqId=${args.respondingPartySeqId}&custRequestId=${args.custRequestId}&partyId=${args.partyId}&dateSent=${args.dateSent}&contactMechId=${args.contactMechId}&`, null, req);
  }
};
export {updateRespondingParty};
