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


const addProductsBackToCategory = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductsBackToCategory method',
  args:{inventoryItemId: {type: GraphQLString},returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/addProductsBackToCategory?inventoryItemId=${args.inventoryItemId}&returnId=${args.returnId}&`, null, req);
  }
};
export {addProductsBackToCategory};


const autoCancelReplacementOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz autoCancelReplacementOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/autoCancelReplacementOrders?`, null, req);
  }
};
export {autoCancelReplacementOrders};


const cancelReplacementOrderItems = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelReplacementOrderItems method',
  args:{returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/cancelReplacementOrderItems?returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {cancelReplacementOrderItems};


const cancelReturnItems = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelReturnItems method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/cancelReturnItems?returnId=${args.returnId}&`, null, req);
  }
};
export {cancelReturnItems};


const checkPaymentAmountForRefund = {
  type: ResponseType,
  description: 'mutation for ofbiz checkPaymentAmountForRefund method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/checkPaymentAmountForRefund?returnId=${args.returnId}&`, null, req);
  }
};
export {checkPaymentAmountForRefund};


const checkReturnComplete = {
  type: ResponseType,
  description: 'mutation for ofbiz checkReturnComplete method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/checkReturnComplete?returnId=${args.returnId}&`, null, req);
  }
};
export {checkReturnComplete};


const createExchangeOrderAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createExchangeOrderAssoc method',
  args:{orderId: {type: GraphQLString},originOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createExchangeOrderAssoc?orderId=${args.orderId}&originOrderId=${args.originOrderId}&`, null, req);
  }
};
export {createExchangeOrderAssoc};


const createPaymentApplicationsFromReturnItemResponse = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentApplicationsFromReturnItemResponse method',
  args:{returnItemResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createPaymentApplicationsFromReturnItemResponse?returnItemResponseId=${args.returnItemResponseId}&`, null, req);
  }
};
export {createPaymentApplicationsFromReturnItemResponse};


const createReturnAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnAdjustment method',
  args:{customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},returnTypeId: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},returnAdjustmentTypeId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},primaryGeoId: {type: GraphQLString},returnId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnAdjustment?customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&includeInShipping=${args.includeInShipping}&description=${args.description}&returnTypeId=${args.returnTypeId}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&primaryGeoId=${args.primaryGeoId}&returnId=${args.returnId}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&orderAdjustmentId=${args.orderAdjustmentId}&amount=${args.amount}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&shipGroupSeqId=${args.shipGroupSeqId}&includeInTax=${args.includeInTax}&createdDate=${args.createdDate}&productPromoActionSeqId=${args.productPromoActionSeqId}&sourcePercentage=${args.sourcePercentage}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {createReturnAdjustment};


const createReturnAdjustmentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnAdjustmentType method',
  args:{returnAdjustmentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnAdjustmentType?returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {createReturnAdjustmentType};


const createReturnAndItemOrAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnAndItemOrAdjustment method',
  args:{returnQuantity: {type: GraphQLFloat},orderId: {type: GraphQLString},includeInShipping: {type: GraphQLString},returnTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},productPromoId: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString},returnAdjustmentTypeId: {type: GraphQLString},returnItemResponseId: {type: GraphQLString},expectedItemStatus: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},productId: {type: GraphQLString},entryDate: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},statusId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},receivedQuantity: {type: GraphQLFloat},sourcePercentage: {type: GraphQLFloat},toPartyId: {type: GraphQLString},customerReferenceId: {type: GraphQLString},fromPartyId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},description: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},returnReasonId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},primaryGeoId: {type: GraphQLString},returnId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},destinationFacilityId: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},supplierRmaId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},originContactMechId: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},returnPrice: {type: GraphQLFloat},returnAdjustmentId: {type: GraphQLString},finAccountId: {type: GraphQLString},currencyUomId: {type: GraphQLString},createdDate: {type: GraphQLString},createdBy: {type: GraphQLString},returnItemTypeId: {type: GraphQLString},needsInventoryReceive: {type: GraphQLString},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnAndItemOrAdjustment?returnQuantity=${args.returnQuantity}&orderId=${args.orderId}&includeInShipping=${args.includeInShipping}&returnTypeId=${args.returnTypeId}&billingAccountId=${args.billingAccountId}&productPromoId=${args.productPromoId}&returnHeaderTypeId=${args.returnHeaderTypeId}&returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&returnItemResponseId=${args.returnItemResponseId}&expectedItemStatus=${args.expectedItemStatus}&createdByUserLogin=${args.createdByUserLogin}&orderItemSeqId=${args.orderItemSeqId}&productId=${args.productId}&entryDate=${args.entryDate}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&shipGroupSeqId=${args.shipGroupSeqId}&includeInTax=${args.includeInTax}&statusId=${args.statusId}&productPromoActionSeqId=${args.productPromoActionSeqId}&receivedQuantity=${args.receivedQuantity}&sourcePercentage=${args.sourcePercentage}&toPartyId=${args.toPartyId}&customerReferenceId=${args.customerReferenceId}&fromPartyId=${args.fromPartyId}&correspondingProductId=${args.correspondingProductId}&description=${args.description}&exemptAmount=${args.exemptAmount}&taxAuthPartyId=${args.taxAuthPartyId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&returnReasonId=${args.returnReasonId}&paymentMethodId=${args.paymentMethodId}&primaryGeoId=${args.primaryGeoId}&returnId=${args.returnId}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&destinationFacilityId=${args.destinationFacilityId}&orderAdjustmentId=${args.orderAdjustmentId}&supplierRmaId=${args.supplierRmaId}&amount=${args.amount}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&originContactMechId=${args.originContactMechId}&sourceReferenceId=${args.sourceReferenceId}&returnPrice=${args.returnPrice}&returnAdjustmentId=${args.returnAdjustmentId}&finAccountId=${args.finAccountId}&currencyUomId=${args.currencyUomId}&createdDate=${args.createdDate}&createdBy=${args.createdBy}&returnItemTypeId=${args.returnItemTypeId}&needsInventoryReceive=${args.needsInventoryReceive}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {createReturnAndItemOrAdjustment};


const createReturnContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnContactMech method',
  args:{shipmentId: {type: GraphQLString},returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnContactMech?shipmentId=${args.shipmentId}&returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&shipmentItemSeqId=${args.shipmentItemSeqId}&`, null, req);
  }
};
export {createReturnContactMech};


const createReturnHeader = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnHeader method',
  args:{returnHeaderTypeId: {type: GraphQLString},fromPartyId: {type: GraphQLString},entryDate: {type: GraphQLString},originContactMechId: {type: GraphQLString},billingAccountId: {type: GraphQLString},finAccountId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},createdBy: {type: GraphQLString},paymentMethodId: {type: GraphQLString},needsInventoryReceive: {type: GraphQLString},toPartyId: {type: GraphQLString},destinationFacilityId: {type: GraphQLString},supplierRmaId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnHeader?returnHeaderTypeId=${args.returnHeaderTypeId}&fromPartyId=${args.fromPartyId}&entryDate=${args.entryDate}&originContactMechId=${args.originContactMechId}&billingAccountId=${args.billingAccountId}&finAccountId=${args.finAccountId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&createdBy=${args.createdBy}&paymentMethodId=${args.paymentMethodId}&needsInventoryReceive=${args.needsInventoryReceive}&toPartyId=${args.toPartyId}&destinationFacilityId=${args.destinationFacilityId}&supplierRmaId=${args.supplierRmaId}&`, null, req);
  }
};
export {createReturnHeader};


const createReturnHeaderType = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnHeaderType method',
  args:{parentTypeId: {type: GraphQLString},description: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnHeaderType?parentTypeId=${args.parentTypeId}&description=${args.description}&returnHeaderTypeId=${args.returnHeaderTypeId}&`, null, req);
  }
};
export {createReturnHeaderType};


const createReturnItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItem method',
  args:{returnQuantity: {type: GraphQLFloat},returnItemTypeId: {type: GraphQLString},orderId: {type: GraphQLString},returnId: {type: GraphQLString},returnTypeId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},includeAdjustments: {type: GraphQLString},returnItemResponseId: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},returnReasonId: {type: GraphQLString},receivedQuantity: {type: GraphQLFloat},description: {type: GraphQLString},expectedItemStatus: {type: GraphQLString},returnPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItem?returnQuantity=${args.returnQuantity}&returnItemTypeId=${args.returnItemTypeId}&orderId=${args.orderId}&returnId=${args.returnId}&returnTypeId=${args.returnTypeId}&orderItemSeqId=${args.orderItemSeqId}&includeAdjustments=${args.includeAdjustments}&returnItemResponseId=${args.returnItemResponseId}&productId=${args.productId}&statusId=${args.statusId}&returnReasonId=${args.returnReasonId}&receivedQuantity=${args.receivedQuantity}&description=${args.description}&expectedItemStatus=${args.expectedItemStatus}&returnPrice=${args.returnPrice}&`, null, req);
  }
};
export {createReturnItem};


const createReturnItemBilling = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemBilling method',
  args:{returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},shipmentReceiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemBilling?returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&invoiceId=${args.invoiceId}&invoiceItemSeqId=${args.invoiceItemSeqId}&amount=${args.amount}&quantity=${args.quantity}&shipmentReceiptId=${args.shipmentReceiptId}&`, null, req);
  }
};
export {createReturnItemBilling};


const createReturnItemForRental = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemForRental method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemForRental?orderId=${args.orderId}&`, null, req);
  }
};
export {createReturnItemForRental};


const createReturnItemOrAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemOrAdjustment method',
  args:{customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},returnQuantity: {type: GraphQLFloat},orderId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},returnTypeId: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},returnAdjustmentTypeId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},returnItemResponseId: {type: GraphQLString},returnReasonId: {type: GraphQLString},primaryGeoId: {type: GraphQLString},returnId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},expectedItemStatus: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},returnPrice: {type: GraphQLFloat},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},returnAdjustmentId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},returnItemTypeId: {type: GraphQLString},receivedQuantity: {type: GraphQLFloat},sourcePercentage: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemOrAdjustment?customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&returnQuantity=${args.returnQuantity}&orderId=${args.orderId}&includeInShipping=${args.includeInShipping}&description=${args.description}&returnTypeId=${args.returnTypeId}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&returnItemResponseId=${args.returnItemResponseId}&returnReasonId=${args.returnReasonId}&primaryGeoId=${args.primaryGeoId}&returnId=${args.returnId}&taxAuthGeoId=${args.taxAuthGeoId}&expectedItemStatus=${args.expectedItemStatus}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&orderAdjustmentId=${args.orderAdjustmentId}&orderItemSeqId=${args.orderItemSeqId}&amount=${args.amount}&comments=${args.comments}&productId=${args.productId}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&returnPrice=${args.returnPrice}&shipGroupSeqId=${args.shipGroupSeqId}&includeInTax=${args.includeInTax}&returnAdjustmentId=${args.returnAdjustmentId}&createdDate=${args.createdDate}&statusId=${args.statusId}&productPromoActionSeqId=${args.productPromoActionSeqId}&returnItemTypeId=${args.returnItemTypeId}&receivedQuantity=${args.receivedQuantity}&sourcePercentage=${args.sourcePercentage}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {createReturnItemOrAdjustment};


const createReturnItemResponse = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemResponse method',
  args:{replacementOrderId: {type: GraphQLString},finAccountTransId: {type: GraphQLString},orderPaymentPreferenceId: {type: GraphQLString},responseAmount: {type: GraphQLFloat},paymentId: {type: GraphQLString},billingAccountId: {type: GraphQLString},responseDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemResponse?replacementOrderId=${args.replacementOrderId}&finAccountTransId=${args.finAccountTransId}&orderPaymentPreferenceId=${args.orderPaymentPreferenceId}&responseAmount=${args.responseAmount}&paymentId=${args.paymentId}&billingAccountId=${args.billingAccountId}&responseDate=${args.responseDate}&`, null, req);
  }
};
export {createReturnItemResponse};


const createReturnItemShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemShipment method',
  args:{quantity: {type: GraphQLFloat},shipmentId: {type: GraphQLString},returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemShipment?quantity=${args.quantity}&shipmentId=${args.shipmentId}&returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&shipmentItemSeqId=${args.shipmentItemSeqId}&`, null, req);
  }
};
export {createReturnItemShipment};


const createReturnItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemType method',
  args:{parentTypeId: {type: GraphQLString},returnItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemType?parentTypeId=${args.parentTypeId}&returnItemTypeId=${args.returnItemTypeId}&description=${args.description}&`, null, req);
  }
};
export {createReturnItemType};


const createReturnItemTypeMap = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnItemTypeMap method',
  args:{returnItemMapKey: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString},returnItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnItemTypeMap?returnItemMapKey=${args.returnItemMapKey}&returnHeaderTypeId=${args.returnHeaderTypeId}&returnItemTypeId=${args.returnItemTypeId}&`, null, req);
  }
};
export {createReturnItemTypeMap};


const createReturnReason = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnReason method',
  args:{returnReasonId: {type: GraphQLString},description: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnReason?returnReasonId=${args.returnReasonId}&description=${args.description}&sequenceId=${args.sequenceId}&`, null, req);
  }
};
export {createReturnReason};


const createReturnStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnStatus method',
  args:{returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnStatus?returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {createReturnStatus};


const createReturnType = {
  type: ResponseType,
  description: 'mutation for ofbiz createReturnType method',
  args:{returnTypeId: {type: GraphQLString},description: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/createReturnType?returnTypeId=${args.returnTypeId}&description=${args.description}&sequenceId=${args.sequenceId}&`, null, req);
  }
};
export {createReturnType};


const deleteReturnAdjustmentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnAdjustmentType method',
  args:{returnAdjustmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnAdjustmentType?returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&`, null, req);
  }
};
export {deleteReturnAdjustmentType};


const deleteReturnContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},returnId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}&returnId=${args.returnId}&contactMechId=${args.contactMechId}&`, null, req);
  }
};
export {deleteReturnContactMech};


const deleteReturnHeaderType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnHeaderType method',
  args:{returnHeaderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnHeaderType?returnHeaderTypeId=${args.returnHeaderTypeId}&`, null, req);
  }
};
export {deleteReturnHeaderType};


const deleteReturnItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnItemType method',
  args:{returnItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnItemType?returnItemTypeId=${args.returnItemTypeId}&`, null, req);
  }
};
export {deleteReturnItemType};


const deleteReturnItemTypeMap = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnItemTypeMap method',
  args:{returnItemMapKey: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnItemTypeMap?returnItemMapKey=${args.returnItemMapKey}&returnHeaderTypeId=${args.returnHeaderTypeId}&`, null, req);
  }
};
export {deleteReturnItemTypeMap};


const deleteReturnReason = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnReason method',
  args:{returnReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnReason?returnReasonId=${args.returnReasonId}&`, null, req);
  }
};
export {deleteReturnReason};


const deleteReturnType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteReturnType method',
  args:{returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/deleteReturnType?returnTypeId=${args.returnTypeId}&`, null, req);
  }
};
export {deleteReturnType};


const getOrderAvailableReturnedTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderAvailableReturnedTotal method',
  args:{orderId: {type: GraphQLString},countNewReturnItems: {type: GraphQLBoolean},adjustment: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/getOrderAvailableReturnedTotal?orderId=${args.orderId}&countNewReturnItems=${args.countNewReturnItems}&adjustment=${args.adjustment}&`, null, req);
  }
};
export {getOrderAvailableReturnedTotal};


const getReturnAmountByOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz getReturnAmountByOrder method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/getReturnAmountByOrder?returnId=${args.returnId}&`, null, req);
  }
};
export {getReturnAmountByOrder};


const getReturnItemInitialCost = {
  type: ResponseType,
  description: 'mutation for ofbiz getReturnItemInitialCost method',
  args:{returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/getReturnItemInitialCost?returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {getReturnItemInitialCost};


const getReturnableItems = {
  type: ResponseType,
  description: 'mutation for ofbiz getReturnableItems method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/getReturnableItems?orderId=${args.orderId}&`, null, req);
  }
};
export {getReturnableItems};


const getReturnableQuantity = {
  type: ResponseType,
  description: 'mutation for ofbiz getReturnableQuantity method',
  args:{orderItem: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/getReturnableQuantity?orderItem=${args.orderItem}&`, null, req);
  }
};
export {getReturnableQuantity};


const getStatusItemsForReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz getStatusItemsForReturn method',
  args:{returnHeaderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/getStatusItemsForReturn?returnHeaderTypeId=${args.returnHeaderTypeId}&`, null, req);
  }
};
export {getStatusItemsForReturn};


const processCreditReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processCreditReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processCreditReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processCreditReturn};


const processCrossShipReplacementReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processCrossShipReplacementReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processCrossShipReplacementReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processCrossShipReplacementReturn};


const processRefundImmediatelyReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processRefundImmediatelyReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processRefundImmediatelyReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processRefundImmediatelyReturn};


const processRefundOnlyReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processRefundOnlyReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processRefundOnlyReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processRefundOnlyReturn};


const processRefundReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processRefundReturn method',
  args:{returnId: {type: GraphQLString},returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processRefundReturn?returnId=${args.returnId}&returnTypeId=${args.returnTypeId}&`, null, req);
  }
};
export {processRefundReturn};


const processRefundReturnForReplacement = {
  type: ResponseType,
  description: 'mutation for ofbiz processRefundReturnForReplacement method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processRefundReturnForReplacement?orderId=${args.orderId}&`, null, req);
  }
};
export {processRefundReturnForReplacement};


const processRepairReplacementReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processRepairReplacementReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processRepairReplacementReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processRepairReplacementReturn};


const processReplaceImmediatelyReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processReplaceImmediatelyReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processReplaceImmediatelyReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processReplaceImmediatelyReturn};


const processReplacementReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processReplacementReturn method',
  args:{returnId: {type: GraphQLString},returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processReplacementReturn?returnId=${args.returnId}&returnTypeId=${args.returnTypeId}&`, null, req);
  }
};
export {processReplacementReturn};


const processSubscriptionReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processSubscriptionReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processSubscriptionReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processSubscriptionReturn};


const processWaitReplacementReservedReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processWaitReplacementReservedReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processWaitReplacementReservedReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processWaitReplacementReservedReturn};


const processWaitReplacementReturn = {
  type: ResponseType,
  description: 'mutation for ofbiz processWaitReplacementReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/processWaitReplacementReturn?returnId=${args.returnId}&`, null, req);
  }
};
export {processWaitReplacementReturn};


const quickReturnOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz quickReturnOrder method',
  args:{orderId: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString},returnReasonId: {type: GraphQLString},returnTypeId: {type: GraphQLString},receiveReturn: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/quickReturnOrder?orderId=${args.orderId}&returnHeaderTypeId=${args.returnHeaderTypeId}&returnReasonId=${args.returnReasonId}&returnTypeId=${args.returnTypeId}&receiveReturn=${args.receiveReturn}&`, null, req);
  }
};
export {quickReturnOrder};


const refundBillingAccountPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz refundBillingAccountPayment method',
  args:{orderPaymentPreference: {type: new GraphQLList(KeyValueInputType)},refundAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/refundBillingAccountPayment?orderPaymentPreference=${args.orderPaymentPreference}&refundAmount=${args.refundAmount}&`, null, req);
  }
};
export {refundBillingAccountPayment};


const removeReturnAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz removeReturnAdjustment method',
  args:{returnAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/removeReturnAdjustment?returnAdjustmentId=${args.returnAdjustmentId}&`, null, req);
  }
};
export {removeReturnAdjustment};


const removeReturnItem = {
  type: ResponseType,
  description: 'mutation for ofbiz removeReturnItem method',
  args:{returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/removeReturnItem?returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {removeReturnItem};


const returnAdjustmentInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz returnAdjustmentInterface method',
  args:{customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},returnTypeId: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},returnAdjustmentTypeId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},primaryGeoId: {type: GraphQLString},returnId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},returnAdjustmentId: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/returnAdjustmentInterface?customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&includeInShipping=${args.includeInShipping}&description=${args.description}&returnTypeId=${args.returnTypeId}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&primaryGeoId=${args.primaryGeoId}&returnId=${args.returnId}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&orderAdjustmentId=${args.orderAdjustmentId}&amount=${args.amount}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&shipGroupSeqId=${args.shipGroupSeqId}&includeInTax=${args.includeInTax}&returnAdjustmentId=${args.returnAdjustmentId}&createdDate=${args.createdDate}&productPromoActionSeqId=${args.productPromoActionSeqId}&sourcePercentage=${args.sourcePercentage}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {returnAdjustmentInterface};


const sendReturnAcceptNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendReturnAcceptNotification method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/sendReturnAcceptNotification?returnId=${args.returnId}&`, null, req);
  }
};
export {sendReturnAcceptNotification};


const sendReturnCancelNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendReturnCancelNotification method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/sendReturnCancelNotification?returnId=${args.returnId}&`, null, req);
  }
};
export {sendReturnCancelNotification};


const sendReturnCompleteNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendReturnCompleteNotification method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/sendReturnCompleteNotification?returnId=${args.returnId}&`, null, req);
  }
};
export {sendReturnCompleteNotification};


const updateReturnAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnAdjustment method',
  args:{returnAdjustmentId: {type: GraphQLString},customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},returnTypeId: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},returnAdjustmentTypeId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},primaryGeoId: {type: GraphQLString},returnId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},originalReturnQuantity: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString},originalReturnPrice: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnAdjustment?returnAdjustmentId=${args.returnAdjustmentId}&customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&includeInShipping=${args.includeInShipping}&description=${args.description}&returnTypeId=${args.returnTypeId}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&primaryGeoId=${args.primaryGeoId}&returnId=${args.returnId}&taxAuthGeoId=${args.taxAuthGeoId}&secondaryGeoId=${args.secondaryGeoId}&originalReturnQuantity=${args.originalReturnQuantity}&createdByUserLogin=${args.createdByUserLogin}&orderAdjustmentId=${args.orderAdjustmentId}&amount=${args.amount}&comments=${args.comments}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&shipGroupSeqId=${args.shipGroupSeqId}&includeInTax=${args.includeInTax}&createdDate=${args.createdDate}&productPromoActionSeqId=${args.productPromoActionSeqId}&sourcePercentage=${args.sourcePercentage}&returnItemSeqId=${args.returnItemSeqId}&originalReturnPrice=${args.originalReturnPrice}&`, null, req);
  }
};
export {updateReturnAdjustment};


const updateReturnAdjustmentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnAdjustmentType method',
  args:{returnAdjustmentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnAdjustmentType?returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateReturnAdjustmentType};


const updateReturnContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},returnId: {type: GraphQLString},contactMechId: {type: GraphQLString},oldContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}&returnId=${args.returnId}&contactMechId=${args.contactMechId}&oldContactMechId=${args.oldContactMechId}&`, null, req);
  }
};
export {updateReturnContactMech};


const updateReturnHeader = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnHeader method',
  args:{returnId: {type: GraphQLString},fromPartyId: {type: GraphQLString},entryDate: {type: GraphQLString},originContactMechId: {type: GraphQLString},billingAccountId: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString},finAccountId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},createdBy: {type: GraphQLString},paymentMethodId: {type: GraphQLString},needsInventoryReceive: {type: GraphQLString},toPartyId: {type: GraphQLString},destinationFacilityId: {type: GraphQLString},supplierRmaId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnHeader?returnId=${args.returnId}&fromPartyId=${args.fromPartyId}&entryDate=${args.entryDate}&originContactMechId=${args.originContactMechId}&billingAccountId=${args.billingAccountId}&returnHeaderTypeId=${args.returnHeaderTypeId}&finAccountId=${args.finAccountId}&currencyUomId=${args.currencyUomId}&statusId=${args.statusId}&createdBy=${args.createdBy}&paymentMethodId=${args.paymentMethodId}&needsInventoryReceive=${args.needsInventoryReceive}&toPartyId=${args.toPartyId}&destinationFacilityId=${args.destinationFacilityId}&supplierRmaId=${args.supplierRmaId}&`, null, req);
  }
};
export {updateReturnHeader};


const updateReturnHeaderType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnHeaderType method',
  args:{returnHeaderTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnHeaderType?returnHeaderTypeId=${args.returnHeaderTypeId}&parentTypeId=${args.parentTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateReturnHeaderType};


const updateReturnItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnItem method',
  args:{returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},returnQuantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},returnTypeId: {type: GraphQLString},description: {type: GraphQLString},returnPrice: {type: GraphQLFloat},returnItemResponseId: {type: GraphQLString},statusId: {type: GraphQLString},returnReasonId: {type: GraphQLString},returnItemTypeId: {type: GraphQLString},receivedQuantity: {type: GraphQLFloat},expectedItemStatus: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnItem?returnId=${args.returnId}&returnItemSeqId=${args.returnItemSeqId}&orderItemSeqId=${args.orderItemSeqId}&returnQuantity=${args.returnQuantity}&productId=${args.productId}&orderId=${args.orderId}&returnTypeId=${args.returnTypeId}&description=${args.description}&returnPrice=${args.returnPrice}&returnItemResponseId=${args.returnItemResponseId}&statusId=${args.statusId}&returnReasonId=${args.returnReasonId}&returnItemTypeId=${args.returnItemTypeId}&receivedQuantity=${args.receivedQuantity}&expectedItemStatus=${args.expectedItemStatus}&`, null, req);
  }
};
export {updateReturnItem};


const updateReturnItemOrAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnItemOrAdjustment method',
  args:{customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},returnQuantity: {type: GraphQLFloat},orderId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},returnTypeId: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},returnAdjustmentTypeId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},returnItemResponseId: {type: GraphQLString},returnReasonId: {type: GraphQLString},primaryGeoId: {type: GraphQLString},returnId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},expectedItemStatus: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},productId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},returnPrice: {type: GraphQLFloat},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},returnAdjustmentId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},returnItemTypeId: {type: GraphQLString},receivedQuantity: {type: GraphQLFloat},sourcePercentage: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnItemOrAdjustment?customerReferenceId=${args.customerReferenceId}&correspondingProductId=${args.correspondingProductId}&returnQuantity=${args.returnQuantity}&orderId=${args.orderId}&includeInShipping=${args.includeInShipping}&description=${args.description}&returnTypeId=${args.returnTypeId}&exemptAmount=${args.exemptAmount}&productPromoId=${args.productPromoId}&taxAuthPartyId=${args.taxAuthPartyId}&returnAdjustmentTypeId=${args.returnAdjustmentTypeId}&lastModifiedByUserLogin=${args.lastModifiedByUserLogin}&returnItemResponseId=${args.returnItemResponseId}&returnReasonId=${args.returnReasonId}&primaryGeoId=${args.primaryGeoId}&returnId=${args.returnId}&taxAuthGeoId=${args.taxAuthGeoId}&expectedItemStatus=${args.expectedItemStatus}&secondaryGeoId=${args.secondaryGeoId}&createdByUserLogin=${args.createdByUserLogin}&orderAdjustmentId=${args.orderAdjustmentId}&orderItemSeqId=${args.orderItemSeqId}&amount=${args.amount}&comments=${args.comments}&productId=${args.productId}&lastModifiedDate=${args.lastModifiedDate}&sourceReferenceId=${args.sourceReferenceId}&productPromoRuleId=${args.productPromoRuleId}&productFeatureId=${args.productFeatureId}&taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}&overrideGlAccountId=${args.overrideGlAccountId}&returnPrice=${args.returnPrice}&shipGroupSeqId=${args.shipGroupSeqId}&includeInTax=${args.includeInTax}&returnAdjustmentId=${args.returnAdjustmentId}&createdDate=${args.createdDate}&statusId=${args.statusId}&productPromoActionSeqId=${args.productPromoActionSeqId}&returnItemTypeId=${args.returnItemTypeId}&receivedQuantity=${args.receivedQuantity}&sourcePercentage=${args.sourcePercentage}&returnItemSeqId=${args.returnItemSeqId}&`, null, req);
  }
};
export {updateReturnItemOrAdjustment};


const updateReturnItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnItemType method',
  args:{returnItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnItemType?returnItemTypeId=${args.returnItemTypeId}&parentTypeId=${args.parentTypeId}&description=${args.description}&`, null, req);
  }
};
export {updateReturnItemType};


const updateReturnItemTypeMap = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnItemTypeMap method',
  args:{returnItemMapKey: {type: GraphQLString},returnHeaderTypeId: {type: GraphQLString},returnItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnItemTypeMap?returnItemMapKey=${args.returnItemMapKey}&returnHeaderTypeId=${args.returnHeaderTypeId}&returnItemTypeId=${args.returnItemTypeId}&`, null, req);
  }
};
export {updateReturnItemTypeMap};


const updateReturnItemsStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnItemsStatus method',
  args:{statusId: {type: GraphQLString},returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnItemsStatus?statusId=${args.statusId}&returnId=${args.returnId}&`, null, req);
  }
};
export {updateReturnItemsStatus};


const updateReturnReason = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnReason method',
  args:{returnReasonId: {type: GraphQLString},description: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnReason?returnReasonId=${args.returnReasonId}&description=${args.description}&sequenceId=${args.sequenceId}&`, null, req);
  }
};
export {updateReturnReason};


const updateReturnStatusFromReceipt = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnStatusFromReceipt method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnStatusFromReceipt?returnId=${args.returnId}&`, null, req);
  }
};
export {updateReturnStatusFromReceipt};


const updateReturnType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateReturnType method',
  args:{returnTypeId: {type: GraphQLString},description: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderReturn/updateReturnType?returnTypeId=${args.returnTypeId}&description=${args.description}&sequenceId=${args.sequenceId}&`, null, req);
  }
};
export {updateReturnType};
