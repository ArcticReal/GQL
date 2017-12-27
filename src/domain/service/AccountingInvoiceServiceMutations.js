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


const addtax = {
  type: ResponseType,
  description: 'mutation for ofbiz addtax method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/addtax?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {addtax};


const autoGenerateInvoiceFromExistingInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz autoGenerateInvoiceFromExistingInvoice method',
  args:{recurrenceInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/autoGenerateInvoiceFromExistingInvoice?recurrenceInfoId=${args.recurrenceInfoId}&`, null, req);
  }
};
export {autoGenerateInvoiceFromExistingInvoice};


const calculateInvoicedAdjustmentTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz calculateInvoicedAdjustmentTotal method',
  args:{orderAdjustment: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/calculateInvoicedAdjustmentTotal?orderAdjustment=${args.orderAdjustment}&`, null, req);
  }
};
export {calculateInvoicedAdjustmentTotal};


const cancelInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/cancelInvoice?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {cancelInvoice};


const checkInvoicePaymentApplications = {
  type: ResponseType,
  description: 'mutation for ofbiz checkInvoicePaymentApplications method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/checkInvoicePaymentApplications?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {checkInvoicePaymentApplications};


const copyInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz copyInvoice method',
  args:{invoiceIdToCopyFrom: {type: GraphQLString},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/copyInvoice?invoiceIdToCopyFrom=${args.invoiceIdToCopyFrom}&invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {copyInvoice};


const copyInvoiceToTemplate = {
  type: ResponseType,
  description: 'mutation for ofbiz copyInvoiceToTemplate method',
  args:{invoiceTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/copyInvoiceToTemplate?invoiceTypeId=${args.invoiceTypeId}&invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {copyInvoiceToTemplate};


const createCommissionInvoices = {
  type: ResponseType,
  description: 'mutation for ofbiz createCommissionInvoices method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createCommissionInvoices?invoiceIds=${args.invoiceIds}&partyIds=${args.partyIds}&`, null, req);
  }
};
export {createCommissionInvoices};


const createInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoice method',
  args:{partyIdFrom: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},partyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},dueDate: {type: GraphQLString},description: {type: GraphQLString},billingAccountId: {type: GraphQLString},invoiceDate: {type: GraphQLString},contactMechId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paidDate: {type: GraphQLString},referenceNumber: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceMessage: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoice?partyIdFrom=${args.partyIdFrom}&invoiceTypeId=${args.invoiceTypeId}&partyId=${args.partyId}&roleTypeId=${args.roleTypeId}&recurrenceInfoId=${args.recurrenceInfoId}&dueDate=${args.dueDate}&description=${args.description}&billingAccountId=${args.billingAccountId}&invoiceDate=${args.invoiceDate}&contactMechId=${args.contactMechId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&paidDate=${args.paidDate}&referenceNumber=${args.referenceNumber}&invoiceId=${args.invoiceId}&invoiceMessage=${args.invoiceMessage}&`, null, req);
  }
};
export {createInvoice};


const createInvoiceAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceAttribute method',
  args:{invoiceId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceAttribute?invoiceId=${args.invoiceId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createInvoiceAttribute};


const createInvoiceContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}&invoiceId=${args.invoiceId}&contactMechId=${args.contactMechId}&`, null, req);
  }
};
export {createInvoiceContactMech};


const createInvoiceContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceContent method',
  args:{invoiceContentTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceContent?invoiceContentTypeId=${args.invoiceContentTypeId}&invoiceId=${args.invoiceId}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createInvoiceContent};


const createInvoiceContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceContentType method',
  args:{invoiceContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceContentType?invoiceContentTypeId=${args.invoiceContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createInvoiceContentType};


const createInvoiceForOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceForOrder method',
  args:{orderId: {type: GraphQLString},invoiceId: {type: GraphQLString},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceForOrder?orderId=${args.orderId}&billItems=${args.billItems}&invoiceId=${args.invoiceId}&eventDate=${args.eventDate}&`, null, req);
  }
};
export {createInvoiceForOrder};


const createInvoiceForOrderAllItems = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceForOrderAllItems method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceForOrderAllItems?orderId=${args.orderId}&`, null, req);
  }
};
export {createInvoiceForOrderAllItems};


const createInvoiceFromOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceFromOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceFromOrder?orderId=${args.orderId}&`, null, req);
  }
};
export {createInvoiceFromOrder};


const createInvoiceFromReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceFromReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceFromReturn?returnId=${args.returnId}&billItems=${args.billItems}&`, null, req);
  }
};
export {createInvoiceFromReturn};


const createInvoiceItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceItem method',
  args:{invoiceId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},overrideOrgPartyId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxableFlag: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},description: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},uomId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},parentInvoiceId: {type: GraphQLString},parentInvoiceItemSeqId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceItem?invoiceId=${args.invoiceId}&amount=${args.amount}&quantity=${args.quantity}&productId=${args.productId}&overrideOrgPartyId=${args.overrideOrgPartyId}&productFeatureId=${args.productFeatureId}&taxableFlag=${args.taxableFlag}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&description=${args.description}&invoiceItemSeqId=${args.invoiceItemSeqId}&uomId=${args.uomId}&invoiceItemTypeId=${args.invoiceItemTypeId}&inventoryItemId=${args.inventoryItemId}&taxAuthPartyId=${args.taxAuthPartyId}&parentInvoiceId=${args.parentInvoiceId}&parentInvoiceItemSeqId=${args.parentInvoiceItemSeqId}&taxAuthGeoId=${args.taxAuthGeoId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {createInvoiceItem};


const createInvoiceItemAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceItemAssoc method',
  args:{invoiceItemSeqIdFrom: {type: GraphQLString},invoiceIdFrom: {type: GraphQLString},invoiceItemSeqIdTo: {type: GraphQLString},invoiceItemAssocTypeId: {type: GraphQLString},invoiceIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},partyIdTo: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceItemAssoc?invoiceItemSeqIdFrom=${args.invoiceItemSeqIdFrom}&invoiceIdFrom=${args.invoiceIdFrom}&invoiceItemSeqIdTo=${args.invoiceItemSeqIdTo}&invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&invoiceIdTo=${args.invoiceIdTo}&fromDate=${args.fromDate}&partyIdFrom=${args.partyIdFrom}&amount=${args.amount}&quantity=${args.quantity}&partyIdTo=${args.partyIdTo}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createInvoiceItemAssoc};


const createInvoiceItemAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceItemAssocType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},invoiceItemAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceItemAssocType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&description=${args.description}&`, null, req);
  }
};
export {createInvoiceItemAssocType};


const createInvoiceItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceItemAttribute method',
  args:{invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceItemAttribute?invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createInvoiceItemAttribute};


const createInvoiceItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceItemTypeAttr method',
  args:{invoiceItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceItemTypeAttr?invoiceItemTypeId=${args.invoiceItemTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createInvoiceItemTypeAttr};


const createInvoiceItemTypeMap = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceItemTypeMap method',
  args:{invoiceItemMapKey: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceItemTypeMap?invoiceItemMapKey=${args.invoiceItemMapKey}&invoiceTypeId=${args.invoiceTypeId}&invoiceItemTypeId=${args.invoiceItemTypeId}&`, null, req);
  }
};
export {createInvoiceItemTypeMap};


const createInvoiceNote = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceNote method',
  args:{invoiceId: {type: GraphQLString},noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceNote?invoiceId=${args.invoiceId}&noteId=${args.noteId}&`, null, req);
  }
};
export {createInvoiceNote};


const createInvoiceRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceRole method',
  args:{roleTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString},partyId: {type: GraphQLString},datetimePerformed: {type: GraphQLString},percentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceRole?roleTypeId=${args.roleTypeId}&invoiceId=${args.invoiceId}&partyId=${args.partyId}&datetimePerformed=${args.datetimePerformed}&percentage=${args.percentage}&`, null, req);
  }
};
export {createInvoiceRole};


const createInvoiceStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceStatus method',
  args:{statusId: {type: GraphQLString},invoiceId: {type: GraphQLString},statusDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceStatus?statusId=${args.statusId}&invoiceId=${args.invoiceId}&statusDate=${args.statusDate}&`, null, req);
  }
};
export {createInvoiceStatus};


const createInvoiceTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceTerm method',
  args:{textValue: {type: GraphQLString},termDays: {type: GraphQLInt},termTypeId: {type: GraphQLString},description: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},uomId: {type: GraphQLString},termValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceTerm?textValue=${args.textValue}&termDays=${args.termDays}&termTypeId=${args.termTypeId}&description=${args.description}&invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&uomId=${args.uomId}&termValue=${args.termValue}&`, null, req);
  }
};
export {createInvoiceTerm};


const createInvoiceTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceTermAttribute method',
  args:{invoiceTermId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceTermAttribute?invoiceTermId=${args.invoiceTermId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {createInvoiceTermAttribute};


const createInvoiceType = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&invoiceTypeId=${args.invoiceTypeId}&description=${args.description}&`, null, req);
  }
};
export {createInvoiceType};


const createInvoiceTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoiceTypeAttr method',
  args:{invoiceTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoiceTypeAttr?invoiceTypeId=${args.invoiceTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {createInvoiceTypeAttr};


const createInvoicesFromReturnShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoicesFromReturnShipment method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoicesFromReturnShipment?shipmentId=${args.shipmentId}&`, null, req);
  }
};
export {createInvoicesFromReturnShipment};


const createInvoicesFromShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoicesFromShipment method',
  args:{shipmentId: {type: GraphQLString},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoicesFromShipment?shipmentId=${args.shipmentId}&eventDate=${args.eventDate}&`, null, req);
  }
};
export {createInvoicesFromShipment};


const createInvoicesFromShipments = {
  type: ResponseType,
  description: 'mutation for ofbiz createInvoicesFromShipments method',
  args:{createSalesInvoicesForDropShipments: {type: GraphQLBoolean},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createInvoicesFromShipments?shipmentIds=${args.shipmentIds}&createSalesInvoicesForDropShipments=${args.createSalesInvoicesForDropShipments}&eventDate=${args.eventDate}&`, null, req);
  }
};
export {createInvoicesFromShipments};


const createSalesInvoicesFromDropShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesInvoicesFromDropShipment method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createSalesInvoicesFromDropShipment?shipmentId=${args.shipmentId}&`, null, req);
  }
};
export {createSalesInvoicesFromDropShipment};


const createSimpleTextContentForInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleTextContentForInvoice method',
  args:{invoiceContentTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString},text: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/createSimpleTextContentForInvoice?invoiceContentTypeId=${args.invoiceContentTypeId}&invoiceId=${args.invoiceId}&text=${args.text}&ownerContentId=${args.ownerContentId}&contentId=${args.contentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&createdByUserLogin=${args.createdByUserLogin}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&fromDate=${args.fromDate}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {createSimpleTextContentForInvoice};


const deleteInvoiceAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceAttribute method',
  args:{invoiceId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceAttribute?invoiceId=${args.invoiceId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteInvoiceAttribute};


const deleteInvoiceContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}&invoiceId=${args.invoiceId}&contactMechId=${args.contactMechId}&`, null, req);
  }
};
export {deleteInvoiceContactMech};


const deleteInvoiceContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceContentType method',
  args:{invoiceContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceContentType?invoiceContentTypeId=${args.invoiceContentTypeId}&`, null, req);
  }
};
export {deleteInvoiceContentType};


const deleteInvoiceItemAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceItemAssoc method',
  args:{fromDate: {type: GraphQLString},invoiceItemSeqIdFrom: {type: GraphQLString},invoiceIdFrom: {type: GraphQLString},invoiceItemSeqIdTo: {type: GraphQLString},invoiceItemAssocTypeId: {type: GraphQLString},invoiceIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceItemAssoc?fromDate=${args.fromDate}&invoiceItemSeqIdFrom=${args.invoiceItemSeqIdFrom}&invoiceIdFrom=${args.invoiceIdFrom}&invoiceItemSeqIdTo=${args.invoiceItemSeqIdTo}&invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&invoiceIdTo=${args.invoiceIdTo}&`, null, req);
  }
};
export {deleteInvoiceItemAssoc};


const deleteInvoiceItemAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceItemAssocType method',
  args:{invoiceItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceItemAssocType?invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&`, null, req);
  }
};
export {deleteInvoiceItemAssocType};


const deleteInvoiceItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceItemAttribute method',
  args:{invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceItemAttribute?invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteInvoiceItemAttribute};


const deleteInvoiceItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceItemTypeAttr method',
  args:{invoiceItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceItemTypeAttr?invoiceItemTypeId=${args.invoiceItemTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteInvoiceItemTypeAttr};


const deleteInvoiceItemTypeMap = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceItemTypeMap method',
  args:{invoiceItemMapKey: {type: GraphQLString},invoiceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceItemTypeMap?invoiceItemMapKey=${args.invoiceItemMapKey}&invoiceTypeId=${args.invoiceTypeId}&`, null, req);
  }
};
export {deleteInvoiceItemTypeMap};


const deleteInvoiceNote = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceNote method',
  args:{invoiceId: {type: GraphQLString},noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceNote?invoiceId=${args.invoiceId}&noteId=${args.noteId}&`, null, req);
  }
};
export {deleteInvoiceNote};


const deleteInvoiceTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceTerm method',
  args:{invoiceTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceTerm?invoiceTermId=${args.invoiceTermId}&`, null, req);
  }
};
export {deleteInvoiceTerm};


const deleteInvoiceTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceTermAttribute method',
  args:{invoiceTermId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceTermAttribute?invoiceTermId=${args.invoiceTermId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteInvoiceTermAttribute};


const deleteInvoiceType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceType method',
  args:{invoiceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceType?invoiceTypeId=${args.invoiceTypeId}&`, null, req);
  }
};
export {deleteInvoiceType};


const deleteInvoiceTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteInvoiceTypeAttr method',
  args:{invoiceTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/deleteInvoiceTypeAttr?invoiceTypeId=${args.invoiceTypeId}&attrName=${args.attrName}&`, null, req);
  }
};
export {deleteInvoiceTypeAttr};


const getInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz getInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/getInvoice?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {getInvoice};


const getInvoiceRunningTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz getInvoiceRunningTotal method',
  args:{organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/getInvoiceRunningTotal?invoiceIds=${args.invoiceIds}&organizationPartyId=${args.organizationPartyId}&`, null, req);
  }
};
export {getInvoiceRunningTotal};


const getInvoicesFilterByAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz getInvoicesFilterByAssocType method',
  args:{invoiceItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/getInvoicesFilterByAssocType?invoiceList=${args.invoiceList}&invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&`, null, req);
  }
};
export {getInvoicesFilterByAssocType};


const getNextInvoiceId = {
  type: ResponseType,
  description: 'mutation for ofbiz getNextInvoiceId method',
  args:{partyIdFrom: {type: GraphQLString},roleTypeId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},dueDate: {type: GraphQLString},description: {type: GraphQLString},billingAccountId: {type: GraphQLString},invoiceDate: {type: GraphQLString},contactMechId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paidDate: {type: GraphQLString},referenceNumber: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceMessage: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/getNextInvoiceId?partyIdFrom=${args.partyIdFrom}&roleTypeId=${args.roleTypeId}&recurrenceInfoId=${args.recurrenceInfoId}&invoiceTypeId=${args.invoiceTypeId}&dueDate=${args.dueDate}&description=${args.description}&billingAccountId=${args.billingAccountId}&invoiceDate=${args.invoiceDate}&contactMechId=${args.contactMechId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&paidDate=${args.paidDate}&referenceNumber=${args.referenceNumber}&invoiceId=${args.invoiceId}&invoiceMessage=${args.invoiceMessage}&partyId=${args.partyId}&`, null, req);
  }
};
export {getNextInvoiceId};


const importInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz importInvoice method',
  args:{organizationPartyId: {type: GraphQLString},uploadedFile: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/importInvoice?organizationPartyId=${args.organizationPartyId}&uploadedFile=${args.uploadedFile}&`, null, req);
  }
};
export {importInvoice};


const invoiceSequenceEnforced = {
  type: ResponseType,
  description: 'mutation for ofbiz invoiceSequenceEnforced method',
  args:{partyAcctgPreference: {type: new GraphQLList(KeyValueInputType)},partyIdFrom: {type: GraphQLString},roleTypeId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},dueDate: {type: GraphQLString},description: {type: GraphQLString},billingAccountId: {type: GraphQLString},invoiceDate: {type: GraphQLString},contactMechId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paidDate: {type: GraphQLString},referenceNumber: {type: GraphQLString},invoiceMessage: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/invoiceSequenceEnforced?partyAcctgPreference=${args.partyAcctgPreference}&partyIdFrom=${args.partyIdFrom}&roleTypeId=${args.roleTypeId}&recurrenceInfoId=${args.recurrenceInfoId}&invoiceTypeId=${args.invoiceTypeId}&dueDate=${args.dueDate}&description=${args.description}&billingAccountId=${args.billingAccountId}&invoiceDate=${args.invoiceDate}&contactMechId=${args.contactMechId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&paidDate=${args.paidDate}&referenceNumber=${args.referenceNumber}&invoiceMessage=${args.invoiceMessage}&partyId=${args.partyId}&`, null, req);
  }
};
export {invoiceSequenceEnforced};


const invoiceSequenceRestart = {
  type: ResponseType,
  description: 'mutation for ofbiz invoiceSequenceRestart method',
  args:{partyAcctgPreference: {type: new GraphQLList(KeyValueInputType)},partyIdFrom: {type: GraphQLString},roleTypeId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},dueDate: {type: GraphQLString},description: {type: GraphQLString},billingAccountId: {type: GraphQLString},invoiceDate: {type: GraphQLString},contactMechId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paidDate: {type: GraphQLString},referenceNumber: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceMessage: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/invoiceSequenceRestart?partyAcctgPreference=${args.partyAcctgPreference}&partyIdFrom=${args.partyIdFrom}&roleTypeId=${args.roleTypeId}&recurrenceInfoId=${args.recurrenceInfoId}&invoiceTypeId=${args.invoiceTypeId}&dueDate=${args.dueDate}&description=${args.description}&billingAccountId=${args.billingAccountId}&invoiceDate=${args.invoiceDate}&contactMechId=${args.contactMechId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&paidDate=${args.paidDate}&referenceNumber=${args.referenceNumber}&invoiceId=${args.invoiceId}&invoiceMessage=${args.invoiceMessage}&partyId=${args.partyId}&`, null, req);
  }
};
export {invoiceSequenceRestart};


const isInvoiceInForeignCurrency = {
  type: ResponseType,
  description: 'mutation for ofbiz isInvoiceInForeignCurrency method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/isInvoiceInForeignCurrency?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {isInvoiceInForeignCurrency};


const massChangeInvoiceStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz massChangeInvoiceStatus method',
  args:{statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/massChangeInvoiceStatus?statusId=${args.statusId}&invoiceIds=${args.invoiceIds}&`, null, req);
  }
};
export {massChangeInvoiceStatus};


const readyInvoices = {
  type: ResponseType,
  description: 'mutation for ofbiz readyInvoices method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/readyInvoices?invoicesCreated=${args.invoicesCreated}&`, null, req);
  }
};
export {readyInvoices};


const removeInvoiceContent = {
  type: ResponseType,
  description: 'mutation for ofbiz removeInvoiceContent method',
  args:{invoiceContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/removeInvoiceContent?invoiceContentTypeId=${args.invoiceContentTypeId}&fromDate=${args.fromDate}&contentId=${args.contentId}&invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {removeInvoiceContent};


const removeInvoiceItem = {
  type: ResponseType,
  description: 'mutation for ofbiz removeInvoiceItem method',
  args:{invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/removeInvoiceItem?invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&`, null, req);
  }
};
export {removeInvoiceItem};


const removeInvoiceItemAssocOnCancelInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz removeInvoiceItemAssocOnCancelInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/removeInvoiceItemAssocOnCancelInvoice?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {removeInvoiceItemAssocOnCancelInvoice};


const removeInvoiceRole = {
  type: ResponseType,
  description: 'mutation for ofbiz removeInvoiceRole method',
  args:{roleTypeId: {type: GraphQLString},invoiceId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/removeInvoiceRole?roleTypeId=${args.roleTypeId}&invoiceId=${args.invoiceId}&partyId=${args.partyId}&`, null, req);
  }
};
export {removeInvoiceRole};


const resetOrderItemBillingAndOrderAdjustmentBillingOnCancelInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz resetOrderItemBillingAndOrderAdjustmentBillingOnCancelInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/resetOrderItemBillingAndOrderAdjustmentBillingOnCancelInvoice?invoiceId=${args.invoiceId}&`, null, req);
  }
};
export {resetOrderItemBillingAndOrderAdjustmentBillingOnCancelInvoice};


const sampleInvoiceAffiliateCommission = {
  type: ResponseType,
  description: 'mutation for ofbiz sampleInvoiceAffiliateCommission method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/sampleInvoiceAffiliateCommission?paymentId=${args.paymentId}&`, null, req);
  }
};
export {sampleInvoiceAffiliateCommission};


const sendInvoicePerEmail = {
  type: ResponseType,
  description: 'mutation for ofbiz sendInvoicePerEmail method',
  args:{sendTo: {type: GraphQLString},sendFrom: {type: GraphQLString},invoiceId: {type: GraphQLString},other: {type: GraphQLString},bodyText: {type: GraphQLString},subject: {type: GraphQLString},sendCc: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/sendInvoicePerEmail?sendTo=${args.sendTo}&sendFrom=${args.sendFrom}&invoiceId=${args.invoiceId}&other=${args.other}&bodyText=${args.bodyText}&subject=${args.subject}&sendCc=${args.sendCc}&`, null, req);
  }
};
export {sendInvoicePerEmail};


const setInvoiceStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz setInvoiceStatus method',
  args:{statusId: {type: GraphQLString},invoiceId: {type: GraphQLString},statusDate: {type: GraphQLString},paidDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/setInvoiceStatus?statusId=${args.statusId}&invoiceId=${args.invoiceId}&statusDate=${args.statusDate}&paidDate=${args.paidDate}&`, null, req);
  }
};
export {setInvoiceStatus};


const setInvoicesToReadyFromShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz setInvoicesToReadyFromShipment method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/setInvoicesToReadyFromShipment?shipmentId=${args.shipmentId}&`, null, req);
  }
};
export {setInvoicesToReadyFromShipment};


const updateInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoice method',
  args:{invoiceId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},roleTypeId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},dueDate: {type: GraphQLString},description: {type: GraphQLString},billingAccountId: {type: GraphQLString},invoiceDate: {type: GraphQLString},contactMechId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paidDate: {type: GraphQLString},referenceNumber: {type: GraphQLString},invoiceMessage: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoice?invoiceId=${args.invoiceId}&partyIdFrom=${args.partyIdFrom}&roleTypeId=${args.roleTypeId}&recurrenceInfoId=${args.recurrenceInfoId}&invoiceTypeId=${args.invoiceTypeId}&dueDate=${args.dueDate}&description=${args.description}&billingAccountId=${args.billingAccountId}&invoiceDate=${args.invoiceDate}&contactMechId=${args.contactMechId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&paidDate=${args.paidDate}&referenceNumber=${args.referenceNumber}&invoiceMessage=${args.invoiceMessage}&partyId=${args.partyId}&`, null, req);
  }
};
export {updateInvoice};


const updateInvoiceAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceAttribute method',
  args:{invoiceId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceAttribute?invoiceId=${args.invoiceId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateInvoiceAttribute};


const updateInvoiceContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceContent method',
  args:{invoiceContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},invoiceId: {type: GraphQLString},ownerContentId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},dataResourceId: {type: GraphQLString},decoratorContentId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceContent?invoiceContentTypeId=${args.invoiceContentTypeId}&fromDate=${args.fromDate}&contentId=${args.contentId}&invoiceId=${args.invoiceId}&ownerContentId=${args.ownerContentId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&dataResourceId=${args.dataResourceId}&decoratorContentId=${args.decoratorContentId}&createdByUserLogin=${args.createdByUserLogin}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateInvoiceContent};


const updateInvoiceContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceContentType method',
  args:{invoiceContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceContentType?invoiceContentTypeId=${args.invoiceContentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateInvoiceContentType};


const updateInvoiceItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItem method',
  args:{invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},overrideOrgPartyId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxableFlag: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},description: {type: GraphQLString},uomId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},parentInvoiceId: {type: GraphQLString},parentInvoiceItemSeqId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItem?invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&amount=${args.amount}&quantity=${args.quantity}&productId=${args.productId}&overrideOrgPartyId=${args.overrideOrgPartyId}&productFeatureId=${args.productFeatureId}&taxableFlag=${args.taxableFlag}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&description=${args.description}&uomId=${args.uomId}&invoiceItemTypeId=${args.invoiceItemTypeId}&inventoryItemId=${args.inventoryItemId}&taxAuthPartyId=${args.taxAuthPartyId}&parentInvoiceId=${args.parentInvoiceId}&parentInvoiceItemSeqId=${args.parentInvoiceItemSeqId}&taxAuthGeoId=${args.taxAuthGeoId}&salesOpportunityId=${args.salesOpportunityId}&`, null, req);
  }
};
export {updateInvoiceItem};


const updateInvoiceItemAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItemAssoc method',
  args:{fromDate: {type: GraphQLString},invoiceItemSeqIdFrom: {type: GraphQLString},invoiceIdFrom: {type: GraphQLString},invoiceItemSeqIdTo: {type: GraphQLString},invoiceItemAssocTypeId: {type: GraphQLString},invoiceIdTo: {type: GraphQLString},partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},partyIdTo: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItemAssoc?fromDate=${args.fromDate}&invoiceItemSeqIdFrom=${args.invoiceItemSeqIdFrom}&invoiceIdFrom=${args.invoiceIdFrom}&invoiceItemSeqIdTo=${args.invoiceItemSeqIdTo}&invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&invoiceIdTo=${args.invoiceIdTo}&partyIdFrom=${args.partyIdFrom}&amount=${args.amount}&quantity=${args.quantity}&partyIdTo=${args.partyIdTo}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateInvoiceItemAssoc};


const updateInvoiceItemAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItemAssocType method',
  args:{invoiceItemAssocTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItemAssocType?invoiceItemAssocTypeId=${args.invoiceItemAssocTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateInvoiceItemAssocType};


const updateInvoiceItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItemAttribute method',
  args:{invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItemAttribute?invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateInvoiceItemAttribute};


const updateInvoiceItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItemType method',
  args:{invoiceItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},defaultGlAccountId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItemType?invoiceItemTypeId=${args.invoiceItemTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&defaultGlAccountId=${args.defaultGlAccountId}&description=${args.description}&`, null, req);
  }
};
export {updateInvoiceItemType};


const updateInvoiceItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItemTypeAttr method',
  args:{invoiceItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItemTypeAttr?invoiceItemTypeId=${args.invoiceItemTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateInvoiceItemTypeAttr};


const updateInvoiceItemTypeMap = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceItemTypeMap method',
  args:{invoiceItemMapKey: {type: GraphQLString},invoiceTypeId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceItemTypeMap?invoiceItemMapKey=${args.invoiceItemMapKey}&invoiceTypeId=${args.invoiceTypeId}&invoiceItemTypeId=${args.invoiceItemTypeId}&`, null, req);
  }
};
export {updateInvoiceItemTypeMap};


const updateInvoiceTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceTerm method',
  args:{invoiceTermId: {type: GraphQLString},textValue: {type: GraphQLString},termDays: {type: GraphQLInt},termTypeId: {type: GraphQLString},description: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},uomId: {type: GraphQLString},termValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceTerm?invoiceTermId=${args.invoiceTermId}&textValue=${args.textValue}&termDays=${args.termDays}&termTypeId=${args.termTypeId}&description=${args.description}&invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&uomId=${args.uomId}&termValue=${args.termValue}&`, null, req);
  }
};
export {updateInvoiceTerm};


const updateInvoiceTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceTermAttribute method',
  args:{invoiceTermId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceTermAttribute?invoiceTermId=${args.invoiceTermId}&attrName=${args.attrName}&attrDescription=${args.attrDescription}&attrValue=${args.attrValue}&`, null, req);
  }
};
export {updateInvoiceTermAttribute};


const updateInvoiceType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceType method',
  args:{invoiceTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceType?invoiceTypeId=${args.invoiceTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateInvoiceType};


const updateInvoiceTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateInvoiceTypeAttr method',
  args:{invoiceTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateInvoiceTypeAttr?invoiceTypeId=${args.invoiceTypeId}&attrName=${args.attrName}&description=${args.description}&`, null, req);
  }
};
export {updateInvoiceTypeAttr};


const updateSimpleTextContentForInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSimpleTextContentForInvoice method',
  args:{invoiceContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},contentId: {type: GraphQLString},invoiceId: {type: GraphQLString},ownerContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},dataResourceId: {type: GraphQLString},text: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},textDataResourceId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingInvoice/updateSimpleTextContentForInvoice?invoiceContentTypeId=${args.invoiceContentTypeId}&fromDate=${args.fromDate}&contentId=${args.contentId}&invoiceId=${args.invoiceId}&ownerContentId=${args.ownerContentId}&contentTypeId=${args.contentTypeId}&description=${args.description}&mimeTypeId=${args.mimeTypeId}&childLeafCount=${args.childLeafCount}&privilegeEnumId=${args.privilegeEnumId}&dataSourceId=${args.dataSourceId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&dataResourceId=${args.dataResourceId}&text=${args.text}&createdByUserLogin=${args.createdByUserLogin}&textDataResourceId=${args.textDataResourceId}&templateDataResourceId=${args.templateDataResourceId}&lastModifiedDate=${args.lastModifiedDate}&instanceOfContentId=${args.instanceOfContentId}&serviceName=${args.serviceName}&customMethodId=${args.customMethodId}&characterSetId=${args.characterSetId}&thruDate=${args.thruDate}&contentName=${args.contentName}&createdDate=${args.createdDate}&statusId=${args.statusId}&localeString=${args.localeString}&decoratorContentId=${args.decoratorContentId}&childBranchCount=${args.childBranchCount}&`, null, req);
  }
};
export {updateSimpleTextContentForInvoice};
