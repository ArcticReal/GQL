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


const createOrderAdjustmentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentAttribute method',
  args:{orderAdjustmentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderAdjustmentAttribute?orderAdjustmentId=${args.orderAdjustmentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createOrderAdjustmentAttribute};


const createOrderAdjustmentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},orderAdjustmentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderAdjustmentType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}orderAdjustmentTypeId=${args.orderAdjustmentTypeId}description=${args.description}`, null, req);
  }
};
export {createOrderAdjustmentType};


const createOrderAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderAttribute method',
  args:{orderId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderAttribute?orderId=${args.orderId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createOrderAttribute};


const createOrderBlacklist = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderBlacklist method',
  args:{orderBlacklistTypeId: {type: GraphQLString},blacklistString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderBlacklist?orderBlacklistTypeId=${args.orderBlacklistTypeId}blacklistString=${args.blacklistString}`, null, req);
  }
};
export {createOrderBlacklist};


const createOrderBlacklistType = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderBlacklistType method',
  args:{description: {type: GraphQLString},orderBlacklistTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderBlacklistType?description=${args.description}orderBlacklistTypeId=${args.orderBlacklistTypeId}`, null, req);
  }
};
export {createOrderBlacklistType};


const createOrderContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderContentType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},orderContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderContentType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}orderContentTypeId=${args.orderContentTypeId}`, null, req);
  }
};
export {createOrderContentType};


const createOrderItemAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemAssoc method',
  args:{orderItemSeqId: {type: GraphQLString},toOrderId: {type: GraphQLString},orderId: {type: GraphQLString},toOrderItemSeqId: {type: GraphQLString},orderItemAssocTypeId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},toShipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemAssoc?orderItemSeqId=${args.orderItemSeqId}toOrderId=${args.toOrderId}orderId=${args.orderId}toOrderItemSeqId=${args.toOrderItemSeqId}orderItemAssocTypeId=${args.orderItemAssocTypeId}shipGroupSeqId=${args.shipGroupSeqId}toShipGroupSeqId=${args.toShipGroupSeqId}quantity=${args.quantity}`, null, req);
  }
};
export {createOrderItemAssoc};


const createOrderItemAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemAssocType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},orderItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemAssocType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}orderItemAssocTypeId=${args.orderItemAssocTypeId}`, null, req);
  }
};
export {createOrderItemAssocType};


const createOrderItemContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemContactMech method',
  args:{orderItemSeqId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemContactMech?orderItemSeqId=${args.orderItemSeqId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createOrderItemContactMech};


const createOrderItemGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemGroup method',
  args:{orderId: {type: GraphQLString},orderItemGroupSeqId: {type: GraphQLString},groupName: {type: GraphQLString},parentGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemGroup?orderId=${args.orderId}orderItemGroupSeqId=${args.orderItemGroupSeqId}groupName=${args.groupName}parentGroupSeqId=${args.parentGroupSeqId}`, null, req);
  }
};
export {createOrderItemGroup};


const createOrderItemPriceInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemPriceInfo method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},productPriceActionSeqId: {type: GraphQLString},modifyAmount: {type: GraphQLFloat},description: {type: GraphQLString},productPriceRuleId: {type: GraphQLString},rateCode: {type: GraphQLString},orderItemPriceInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemPriceInfo?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}productPriceActionSeqId=${args.productPriceActionSeqId}modifyAmount=${args.modifyAmount}description=${args.description}productPriceRuleId=${args.productPriceRuleId}rateCode=${args.rateCode}orderItemPriceInfoId=${args.orderItemPriceInfoId}`, null, req);
  }
};
export {createOrderItemPriceInfo};


const createOrderItemRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemRole method',
  args:{orderItemSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemRole?orderItemSeqId=${args.orderItemSeqId}roleTypeId=${args.roleTypeId}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {createOrderItemRole};


const createOrderItemShipGrpInvRes = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemShipGrpInvRes method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},promisedDatetime: {type: GraphQLString},quantityNotAvailable: {type: GraphQLFloat},createdDatetime: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},priority: {type: GraphQLString},sequenceId: {type: GraphQLInt},oldPickStartDate: {type: GraphQLString},currentPromisedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemShipGrpInvRes?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}quantity=${args.quantity}promisedDatetime=${args.promisedDatetime}quantityNotAvailable=${args.quantityNotAvailable}createdDatetime=${args.createdDatetime}reserveOrderEnumId=${args.reserveOrderEnumId}reservedDatetime=${args.reservedDatetime}priority=${args.priority}sequenceId=${args.sequenceId}oldPickStartDate=${args.oldPickStartDate}currentPromisedDate=${args.currentPromisedDate}`, null, req);
  }
};
export {createOrderItemShipGrpInvRes};


const createOrderItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}orderItemTypeId=${args.orderItemTypeId}`, null, req);
  }
};
export {createOrderItemType};


const createOrderItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemTypeAttr method',
  args:{attrName: {type: GraphQLString},orderItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderItemTypeAttr?attrName=${args.attrName}orderItemTypeId=${args.orderItemTypeId}description=${args.description}`, null, req);
  }
};
export {createOrderItemTypeAttr};


const createOrderProductPromoCode = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderProductPromoCode method',
  args:{orderId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderProductPromoCode?orderId=${args.orderId}productPromoCodeId=${args.productPromoCodeId}`, null, req);
  }
};
export {createOrderProductPromoCode};


const createOrderSummaryEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderSummaryEntry method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},entryDate: {type: GraphQLString},totalQuantity: {type: GraphQLFloat},productCost: {type: GraphQLFloat},grossSales: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderSummaryEntry?facilityId=${args.facilityId}productId=${args.productId}entryDate=${args.entryDate}totalQuantity=${args.totalQuantity}productCost=${args.productCost}grossSales=${args.grossSales}`, null, req);
  }
};
export {createOrderSummaryEntry};


const createOrderTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderTermAttribute method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},termTypeId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderTermAttribute?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}termTypeId=${args.termTypeId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createOrderTermAttribute};


const createOrderType = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},orderTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}orderTypeId=${args.orderTypeId}description=${args.description}`, null, req);
  }
};
export {createOrderType};


const createOrderTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderTypeAttr method',
  args:{orderTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/createOrderTypeAttr?orderTypeId=${args.orderTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createOrderTypeAttr};


const deleteOrderAdjustmentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderAdjustmentAttribute method',
  args:{orderAdjustmentId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderAdjustmentAttribute?orderAdjustmentId=${args.orderAdjustmentId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteOrderAdjustmentAttribute};


const deleteOrderAdjustmentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderAdjustmentType method',
  args:{orderAdjustmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderAdjustmentType?orderAdjustmentTypeId=${args.orderAdjustmentTypeId}`, null, req);
  }
};
export {deleteOrderAdjustmentType};


const deleteOrderAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderAttribute method',
  args:{orderId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderAttribute?orderId=${args.orderId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteOrderAttribute};


const deleteOrderBlacklist = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderBlacklist method',
  args:{orderBlacklistTypeId: {type: GraphQLString},blacklistString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderBlacklist?orderBlacklistTypeId=${args.orderBlacklistTypeId}blacklistString=${args.blacklistString}`, null, req);
  }
};
export {deleteOrderBlacklist};


const deleteOrderBlacklistType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderBlacklistType method',
  args:{orderBlacklistTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderBlacklistType?orderBlacklistTypeId=${args.orderBlacklistTypeId}`, null, req);
  }
};
export {deleteOrderBlacklistType};


const deleteOrderContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderContentType method',
  args:{orderContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderContentType?orderContentTypeId=${args.orderContentTypeId}`, null, req);
  }
};
export {deleteOrderContentType};


const deleteOrderItemAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemAssoc method',
  args:{orderItemSeqId: {type: GraphQLString},toOrderId: {type: GraphQLString},orderId: {type: GraphQLString},toOrderItemSeqId: {type: GraphQLString},orderItemAssocTypeId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},toShipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemAssoc?orderItemSeqId=${args.orderItemSeqId}toOrderId=${args.toOrderId}orderId=${args.orderId}toOrderItemSeqId=${args.toOrderItemSeqId}orderItemAssocTypeId=${args.orderItemAssocTypeId}shipGroupSeqId=${args.shipGroupSeqId}toShipGroupSeqId=${args.toShipGroupSeqId}`, null, req);
  }
};
export {deleteOrderItemAssoc};


const deleteOrderItemAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemAssocType method',
  args:{orderItemAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemAssocType?orderItemAssocTypeId=${args.orderItemAssocTypeId}`, null, req);
  }
};
export {deleteOrderItemAssocType};


const deleteOrderItemContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemContactMech method',
  args:{orderItemSeqId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemContactMech?orderItemSeqId=${args.orderItemSeqId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}`, null, req);
  }
};
export {deleteOrderItemContactMech};


const deleteOrderItemGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemGroup method',
  args:{orderId: {type: GraphQLString},orderItemGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemGroup?orderId=${args.orderId}orderItemGroupSeqId=${args.orderItemGroupSeqId}`, null, req);
  }
};
export {deleteOrderItemGroup};


const deleteOrderItemPriceInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemPriceInfo method',
  args:{orderItemPriceInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemPriceInfo?orderItemPriceInfoId=${args.orderItemPriceInfoId}`, null, req);
  }
};
export {deleteOrderItemPriceInfo};


const deleteOrderItemRole = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemRole method',
  args:{orderItemSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemRole?orderItemSeqId=${args.orderItemSeqId}roleTypeId=${args.roleTypeId}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteOrderItemRole};


const deleteOrderItemShipGrpInvRes = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemShipGrpInvRes method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemShipGrpInvRes?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {deleteOrderItemShipGrpInvRes};


const deleteOrderItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemType method',
  args:{orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemType?orderItemTypeId=${args.orderItemTypeId}`, null, req);
  }
};
export {deleteOrderItemType};


const deleteOrderItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemTypeAttr method',
  args:{attrName: {type: GraphQLString},orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderItemTypeAttr?attrName=${args.attrName}orderItemTypeId=${args.orderItemTypeId}`, null, req);
  }
};
export {deleteOrderItemTypeAttr};


const deleteOrderNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderNotification method',
  args:{orderNotificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderNotification?orderNotificationId=${args.orderNotificationId}`, null, req);
  }
};
export {deleteOrderNotification};


const deleteOrderProductPromoCode = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderProductPromoCode method',
  args:{orderId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderProductPromoCode?orderId=${args.orderId}productPromoCodeId=${args.productPromoCodeId}`, null, req);
  }
};
export {deleteOrderProductPromoCode};


const deleteOrderRequirementCommitment = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderRequirementCommitment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderRequirementCommitment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}requirementId=${args.requirementId}`, null, req);
  }
};
export {deleteOrderRequirementCommitment};


const deleteOrderSummaryEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderSummaryEntry method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},entryDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderSummaryEntry?facilityId=${args.facilityId}productId=${args.productId}entryDate=${args.entryDate}`, null, req);
  }
};
export {deleteOrderSummaryEntry};


const deleteOrderTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderTermAttribute method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},termTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderTermAttribute?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}termTypeId=${args.termTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteOrderTermAttribute};


const deleteOrderType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderType method',
  args:{orderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderType?orderTypeId=${args.orderTypeId}`, null, req);
  }
};
export {deleteOrderType};


const deleteOrderTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderTypeAttr method',
  args:{orderTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/deleteOrderTypeAttr?orderTypeId=${args.orderTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteOrderTypeAttr};


const updateOrderAdjustmentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderAdjustmentAttribute method',
  args:{orderAdjustmentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderAdjustmentAttribute?orderAdjustmentId=${args.orderAdjustmentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateOrderAdjustmentAttribute};


const updateOrderAdjustmentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderAdjustmentType method',
  args:{orderAdjustmentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderAdjustmentType?orderAdjustmentTypeId=${args.orderAdjustmentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateOrderAdjustmentType};


const updateOrderAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderAttribute method',
  args:{orderId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderAttribute?orderId=${args.orderId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateOrderAttribute};


const updateOrderBlacklistType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderBlacklistType method',
  args:{orderBlacklistTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderBlacklistType?orderBlacklistTypeId=${args.orderBlacklistTypeId}description=${args.description}`, null, req);
  }
};
export {updateOrderBlacklistType};


const updateOrderContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderContentType method',
  args:{orderContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderContentType?orderContentTypeId=${args.orderContentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateOrderContentType};


const updateOrderItemAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemAssoc method',
  args:{orderItemSeqId: {type: GraphQLString},toOrderId: {type: GraphQLString},orderId: {type: GraphQLString},toOrderItemSeqId: {type: GraphQLString},orderItemAssocTypeId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},toShipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemAssoc?orderItemSeqId=${args.orderItemSeqId}toOrderId=${args.toOrderId}orderId=${args.orderId}toOrderItemSeqId=${args.toOrderItemSeqId}orderItemAssocTypeId=${args.orderItemAssocTypeId}shipGroupSeqId=${args.shipGroupSeqId}toShipGroupSeqId=${args.toShipGroupSeqId}quantity=${args.quantity}`, null, req);
  }
};
export {updateOrderItemAssoc};


const updateOrderItemAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemAssocType method',
  args:{orderItemAssocTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemAssocType?orderItemAssocTypeId=${args.orderItemAssocTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateOrderItemAssocType};


const updateOrderItemContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemContactMech method',
  args:{orderItemSeqId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemContactMech?orderItemSeqId=${args.orderItemSeqId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateOrderItemContactMech};


const updateOrderItemGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemGroup method',
  args:{orderId: {type: GraphQLString},orderItemGroupSeqId: {type: GraphQLString},groupName: {type: GraphQLString},parentGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemGroup?orderId=${args.orderId}orderItemGroupSeqId=${args.orderItemGroupSeqId}groupName=${args.groupName}parentGroupSeqId=${args.parentGroupSeqId}`, null, req);
  }
};
export {updateOrderItemGroup};


const updateOrderItemPriceInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemPriceInfo method',
  args:{orderItemPriceInfoId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},productPriceActionSeqId: {type: GraphQLString},modifyAmount: {type: GraphQLFloat},description: {type: GraphQLString},productPriceRuleId: {type: GraphQLString},rateCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemPriceInfo?orderItemPriceInfoId=${args.orderItemPriceInfoId}orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}productPriceActionSeqId=${args.productPriceActionSeqId}modifyAmount=${args.modifyAmount}description=${args.description}productPriceRuleId=${args.productPriceRuleId}rateCode=${args.rateCode}`, null, req);
  }
};
export {updateOrderItemPriceInfo};


const updateOrderItemShipGrpInvRes = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemShipGrpInvRes method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},promisedDatetime: {type: GraphQLString},quantityNotAvailable: {type: GraphQLFloat},createdDatetime: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},priority: {type: GraphQLString},sequenceId: {type: GraphQLInt},oldPickStartDate: {type: GraphQLString},currentPromisedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemShipGrpInvRes?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}quantity=${args.quantity}promisedDatetime=${args.promisedDatetime}quantityNotAvailable=${args.quantityNotAvailable}createdDatetime=${args.createdDatetime}reserveOrderEnumId=${args.reserveOrderEnumId}reservedDatetime=${args.reservedDatetime}priority=${args.priority}sequenceId=${args.sequenceId}oldPickStartDate=${args.oldPickStartDate}currentPromisedDate=${args.currentPromisedDate}`, null, req);
  }
};
export {updateOrderItemShipGrpInvRes};


const updateOrderItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemType method',
  args:{orderItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemType?orderItemTypeId=${args.orderItemTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateOrderItemType};


const updateOrderItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemTypeAttr method',
  args:{attrName: {type: GraphQLString},orderItemTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderItemTypeAttr?attrName=${args.attrName}orderItemTypeId=${args.orderItemTypeId}description=${args.description}`, null, req);
  }
};
export {updateOrderItemTypeAttr};


const updateOrderNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderNotification method',
  args:{orderNotificationId: {type: GraphQLString},comments: {type: GraphQLString},orderId: {type: GraphQLString},emailType: {type: GraphQLString},notificationDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderNotification?orderNotificationId=${args.orderNotificationId}comments=${args.comments}orderId=${args.orderId}emailType=${args.emailType}notificationDate=${args.notificationDate}`, null, req);
  }
};
export {updateOrderNotification};


const updateOrderRequirementCommitment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderRequirementCommitment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},requirementId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderRequirementCommitment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}requirementId=${args.requirementId}quantity=${args.quantity}`, null, req);
  }
};
export {updateOrderRequirementCommitment};


const updateOrderSummaryEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderSummaryEntry method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},entryDate: {type: GraphQLString},totalQuantity: {type: GraphQLFloat},productCost: {type: GraphQLFloat},grossSales: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderSummaryEntry?facilityId=${args.facilityId}productId=${args.productId}entryDate=${args.entryDate}totalQuantity=${args.totalQuantity}productCost=${args.productCost}grossSales=${args.grossSales}`, null, req);
  }
};
export {updateOrderSummaryEntry};


const updateOrderTermAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderTermAttribute method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},termTypeId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderTermAttribute?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}termTypeId=${args.termTypeId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateOrderTermAttribute};


const updateOrderType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderType method',
  args:{orderTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderType?orderTypeId=${args.orderTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateOrderType};


const updateOrderTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderTypeAttr method',
  args:{orderTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orderOrder/updateOrderTypeAttr?orderTypeId=${args.orderTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateOrderTypeAttr};
