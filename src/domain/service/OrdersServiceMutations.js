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


const MoveItemBetweenShipGroups = {
  type: ResponseType,
  description: 'mutation for ofbiz MoveItemBetweenShipGroups method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},fromGroupIndex: {type: GraphQLString},toGroupIndex: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/MoveItemBetweenShipGroups?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}orderId=${args.orderId}fromGroupIndex=${args.fromGroupIndex}toGroupIndex=${args.toGroupIndex}`, null, req);
  }
};
export {MoveItemBetweenShipGroups};


const addOrderItemShipGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz addOrderItemShipGroup method',
  args:{orderId: {type: GraphQLString},facilityId: {type: GraphQLString},giftMessage: {type: GraphQLString},shippingInstructions: {type: GraphQLString},maySplit: {type: GraphQLString},shipByDate: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},vendorPartyId: {type: GraphQLString},contactMechId: {type: GraphQLString},telecomContactMechId: {type: GraphQLString},shipAfterDate: {type: GraphQLString},carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},isGift: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},supplierPartyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},trackingNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/addOrderItemShipGroup?orderId=${args.orderId}facilityId=${args.facilityId}giftMessage=${args.giftMessage}shippingInstructions=${args.shippingInstructions}maySplit=${args.maySplit}shipByDate=${args.shipByDate}shipGroupSeqId=${args.shipGroupSeqId}estimatedDeliveryDate=${args.estimatedDeliveryDate}vendorPartyId=${args.vendorPartyId}contactMechId=${args.contactMechId}telecomContactMechId=${args.telecomContactMechId}shipAfterDate=${args.shipAfterDate}carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}isGift=${args.isGift}estimatedShipDate=${args.estimatedShipDate}supplierPartyId=${args.supplierPartyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}trackingNumber=${args.trackingNumber}`, null, req);
  }
};
export {addOrderItemShipGroup};


const addOrderItemShipGroupAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz addOrderItemShipGroupAssoc method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},giftMessage: {type: GraphQLString},shippingInstructions: {type: GraphQLString},maySplit: {type: GraphQLString},shipByDate: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},vendorPartyId: {type: GraphQLString},contactMechId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat},telecomContactMechId: {type: GraphQLString},shipAfterDate: {type: GraphQLString},carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},isGift: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},supplierPartyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},trackingNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/addOrderItemShipGroupAssoc?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}facilityId=${args.facilityId}quantity=${args.quantity}giftMessage=${args.giftMessage}shippingInstructions=${args.shippingInstructions}maySplit=${args.maySplit}shipByDate=${args.shipByDate}estimatedDeliveryDate=${args.estimatedDeliveryDate}vendorPartyId=${args.vendorPartyId}contactMechId=${args.contactMechId}cancelQuantity=${args.cancelQuantity}telecomContactMechId=${args.telecomContactMechId}shipAfterDate=${args.shipAfterDate}carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}isGift=${args.isGift}estimatedShipDate=${args.estimatedShipDate}supplierPartyId=${args.supplierPartyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}trackingNumber=${args.trackingNumber}`, null, req);
  }
};
export {addOrderItemShipGroupAssoc};


const addOrderRole = {
  type: ResponseType,
  description: 'mutation for ofbiz addOrderRole method',
  args:{roleTypeId: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString},removeOld: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/addOrderRole?roleTypeId=${args.roleTypeId}orderId=${args.orderId}partyId=${args.partyId}removeOld=${args.removeOld}`, null, req);
  }
};
export {addOrderRole};


const addPaymentMethodToOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz addPaymentMethodToOrder method',
  args:{orderId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},maxAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/addPaymentMethodToOrder?orderId=${args.orderId}paymentMethodId=${args.paymentMethodId}maxAmount=${args.maxAmount}`, null, req);
  }
};
export {addPaymentMethodToOrder};


const appendOrderItem = {
  type: ResponseType,
  description: 'mutation for ofbiz appendOrderItem method',
  args:{quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},itemAttributesMap: {type: GraphQLString},overridePrice: {type: GraphQLString},changeComments: {type: GraphQLString},calcTax: {type: GraphQLBoolean},reasonEnumId: {type: GraphQLString},itemDesiredDeliveryDate: {type: GraphQLString},prodCatalogId: {type: GraphQLString},basePrice: {type: GraphQLFloat},orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/appendOrderItem?quantity=${args.quantity}productId=${args.productId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}amount=${args.amount}itemAttributesMap=${args.itemAttributesMap}overridePrice=${args.overridePrice}changeComments=${args.changeComments}calcTax=${args.calcTax}reasonEnumId=${args.reasonEnumId}itemDesiredDeliveryDate=${args.itemDesiredDeliveryDate}prodCatalogId=${args.prodCatalogId}basePrice=${args.basePrice}orderItemTypeId=${args.orderItemTypeId}`, null, req);
  }
};
export {appendOrderItem};


const autoCancelOrderItems = {
  type: ResponseType,
  description: 'mutation for ofbiz autoCancelOrderItems method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/autoCancelOrderItems?`, null, req);
  }
};
export {autoCancelOrderItems};


const callProcessOrderPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz callProcessOrderPayments method',
  args:{shoppingCart: {type: GraphQLString},manualHold: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/callProcessOrderPayments?shoppingCart=${args.shoppingCart}manualHold=${args.manualHold}`, null, req);
  }
};
export {callProcessOrderPayments};


const cancelAllBackOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelAllBackOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/cancelAllBackOrders?`, null, req);
  }
};
export {cancelAllBackOrders};


const cancelOrderItem = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelOrderItem method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},itemReasonMap: {type: GraphQLString},itemCommentMap: {type: GraphQLString},itemQtyMap: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/cancelOrderItem?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}itemReasonMap=${args.itemReasonMap}itemCommentMap=${args.itemCommentMap}itemQtyMap=${args.itemQtyMap}shipGroupSeqId=${args.shipGroupSeqId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {cancelOrderItem};


const cancelOrderItemNoActions = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelOrderItemNoActions method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/cancelOrderItemNoActions?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {cancelOrderItemNoActions};


const cancelRemainingPurchaseOrderItems = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelRemainingPurchaseOrderItems method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/cancelRemainingPurchaseOrderItems?orderId=${args.orderId}`, null, req);
  }
};
export {cancelRemainingPurchaseOrderItems};


const changeOrderItemStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz changeOrderItemStatus method',
  args:{statusId: {type: GraphQLString},orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},changeReason: {type: GraphQLString},statusDateTime: {type: GraphQLString},fromStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/changeOrderItemStatus?statusId=${args.statusId}orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}changeReason=${args.changeReason}statusDateTime=${args.statusDateTime}fromStatusId=${args.fromStatusId}`, null, req);
  }
};
export {changeOrderItemStatus};


const changeOrderPaymentStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz changeOrderPaymentStatus method',
  args:{orderPaymentPreferenceId: {type: GraphQLString},changeReason: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/changeOrderPaymentStatus?orderPaymentPreferenceId=${args.orderPaymentPreferenceId}changeReason=${args.changeReason}`, null, req);
  }
};
export {changeOrderPaymentStatus};


const changeOrderStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz changeOrderStatus method',
  args:{statusId: {type: GraphQLString},orderId: {type: GraphQLString},setItemStatus: {type: GraphQLString},changeReason: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/changeOrderStatus?statusId=${args.statusId}orderId=${args.orderId}setItemStatus=${args.setItemStatus}changeReason=${args.changeReason}`, null, req);
  }
};
export {changeOrderStatus};


const checkCreateDropShipPurchaseOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz checkCreateDropShipPurchaseOrders method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/checkCreateDropShipPurchaseOrders?orderId=${args.orderId}`, null, req);
  }
};
export {checkCreateDropShipPurchaseOrders};


const checkDigitalItemFulfillment = {
  type: ResponseType,
  description: 'mutation for ofbiz checkDigitalItemFulfillment method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/checkDigitalItemFulfillment?orderId=${args.orderId}`, null, req);
  }
};
export {checkDigitalItemFulfillment};


const checkOrderIsOnBackOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz checkOrderIsOnBackOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/checkOrderIsOnBackOrder?orderId=${args.orderId}`, null, req);
  }
};
export {checkOrderIsOnBackOrder};


const checkOrderItemStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz checkOrderItemStatus method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/checkOrderItemStatus?orderId=${args.orderId}`, null, req);
  }
};
export {checkOrderItemStatus};


const checkSupplierRelatedOrderPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz checkSupplierRelatedOrderPermission method',
  args:{orderId: {type: GraphQLString},checkAction: {type: GraphQLString},callingMethodName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/checkSupplierRelatedOrderPermission?orderId=${args.orderId}checkAction=${args.checkAction}callingMethodName=${args.callingMethodName}`, null, req);
  }
};
export {checkSupplierRelatedOrderPermission};


const completePurchaseOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz completePurchaseOrder method',
  args:{facilityId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/completePurchaseOrder?facilityId=${args.facilityId}orderId=${args.orderId}`, null, req);
  }
};
export {completePurchaseOrder};


const countProductQuantityOrdered = {
  type: ResponseType,
  description: 'mutation for ofbiz countProductQuantityOrdered method',
  args:{quantity: {type: GraphQLFloat},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/countProductQuantityOrdered?quantity=${args.quantity}productId=${args.productId}`, null, req);
  }
};
export {countProductQuantityOrdered};


const createAlsoBoughtProductAssocs = {
  type: ResponseType,
  description: 'mutation for ofbiz createAlsoBoughtProductAssocs method',
  args:{processAllOrders: {type: GraphQLBoolean},orderEntryFromDateTime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createAlsoBoughtProductAssocs?processAllOrders=${args.processAllOrders}orderEntryFromDateTime=${args.orderEntryFromDateTime}`, null, req);
  }
};
export {createAlsoBoughtProductAssocs};


const createAlsoBoughtProductAssocsForOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createAlsoBoughtProductAssocsForOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createAlsoBoughtProductAssocsForOrder?orderId=${args.orderId}`, null, req);
  }
};
export {createAlsoBoughtProductAssocsForOrder};


const createCommunicationEventOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createCommunicationEventOrder method',
  args:{orderId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createCommunicationEventOrder?orderId=${args.orderId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {createCommunicationEventOrder};


const createOrderAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderAdjustment method',
  args:{orderId: {type: GraphQLString},orderAdjustmentTypeId: {type: GraphQLString},customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},oldPercentage: {type: GraphQLFloat},primaryGeoId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},originalAdjustmentId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},amountAlreadyIncluded: {type: GraphQLFloat},orderItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},recurringAmount: {type: GraphQLFloat},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},isManual: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},oldAmountPerQuantity: {type: GraphQLFloat},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderAdjustment?orderId=${args.orderId}orderAdjustmentTypeId=${args.orderAdjustmentTypeId}customerReferenceId=${args.customerReferenceId}correspondingProductId=${args.correspondingProductId}includeInShipping=${args.includeInShipping}description=${args.description}exemptAmount=${args.exemptAmount}productPromoId=${args.productPromoId}taxAuthPartyId=${args.taxAuthPartyId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}oldPercentage=${args.oldPercentage}primaryGeoId=${args.primaryGeoId}taxAuthGeoId=${args.taxAuthGeoId}originalAdjustmentId=${args.originalAdjustmentId}secondaryGeoId=${args.secondaryGeoId}createdByUserLogin=${args.createdByUserLogin}amountAlreadyIncluded=${args.amountAlreadyIncluded}orderItemSeqId=${args.orderItemSeqId}amount=${args.amount}comments=${args.comments}recurringAmount=${args.recurringAmount}lastModifiedDate=${args.lastModifiedDate}sourceReferenceId=${args.sourceReferenceId}productPromoRuleId=${args.productPromoRuleId}isManual=${args.isManual}productFeatureId=${args.productFeatureId}taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}overrideGlAccountId=${args.overrideGlAccountId}oldAmountPerQuantity=${args.oldAmountPerQuantity}shipGroupSeqId=${args.shipGroupSeqId}includeInTax=${args.includeInTax}createdDate=${args.createdDate}productPromoActionSeqId=${args.productPromoActionSeqId}sourcePercentage=${args.sourcePercentage}`, null, req);
  }
};
export {createOrderAdjustment};


const createOrderAdjustmentBilling = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentBilling method',
  args:{invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},amount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderAdjustmentBilling?invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}orderAdjustmentId=${args.orderAdjustmentId}amount=${args.amount}`, null, req);
  }
};
export {createOrderAdjustmentBilling};


const createOrderAdjustmentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderAdjustmentTypeAttr method',
  args:{orderAdjustmentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderAdjustmentTypeAttr?orderAdjustmentTypeId=${args.orderAdjustmentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createOrderAdjustmentTypeAttr};


const createOrderContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createOrderContactMech};


const createOrderContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderContent method',
  args:{orderItemSeqId: {type: GraphQLString},fromDate: {type: GraphQLString},orderId: {type: GraphQLString},contentId: {type: GraphQLString},orderContentTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderContent?orderItemSeqId=${args.orderItemSeqId}fromDate=${args.fromDate}orderId=${args.orderId}contentId=${args.contentId}orderContentTypeId=${args.orderContentTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createOrderContent};


const createOrderDeliverySchedule = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderDeliverySchedule method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},skidsPallets: {type: GraphQLInt},unitsPieces: {type: GraphQLFloat},statusId: {type: GraphQLString},totalWeight: {type: GraphQLFloat},totalCubicSize: {type: GraphQLFloat},totalWeightUomId: {type: GraphQLString},estimatedReadyDate: {type: GraphQLString},totalCubicUomId: {type: GraphQLString},cartons: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderDeliverySchedule?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}skidsPallets=${args.skidsPallets}unitsPieces=${args.unitsPieces}statusId=${args.statusId}totalWeight=${args.totalWeight}totalCubicSize=${args.totalCubicSize}totalWeightUomId=${args.totalWeightUomId}estimatedReadyDate=${args.estimatedReadyDate}totalCubicUomId=${args.totalCubicUomId}cartons=${args.cartons}`, null, req);
  }
};
export {createOrderDeliverySchedule};


const createOrderFromShoppingCart = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderFromShoppingCart method',
  args:{shoppingCart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderFromShoppingCart?shoppingCart=${args.shoppingCart}`, null, req);
  }
};
export {createOrderFromShoppingCart};


const createOrderHeader = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderHeader method',
  args:{invoicePerShipment: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},orderId: {type: GraphQLString},orderTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},isViewed: {type: GraphQLString},visitId: {type: GraphQLString},productStoreId: {type: GraphQLString},remainingSubTotal: {type: GraphQLFloat},orderName: {type: GraphQLString},webSiteId: {type: GraphQLString},isRushOrder: {type: GraphQLString},entryDate: {type: GraphQLString},grandTotal: {type: GraphQLFloat},autoOrderShoppingListId: {type: GraphQLString},externalId: {type: GraphQLString},priority: {type: GraphQLString},transactionId: {type: GraphQLString},firstAttemptOrderId: {type: GraphQLString},originFacilityId: {type: GraphQLString},statusId: {type: GraphQLString},createdBy: {type: GraphQLString},currencyUom: {type: GraphQLString},syncStatusId: {type: GraphQLString},pickSheetPrintedDate: {type: GraphQLString},needsInventoryIssuance: {type: GraphQLString},orderDate: {type: GraphQLString},internalCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderHeader?invoicePerShipment=${args.invoicePerShipment}salesChannelEnumId=${args.salesChannelEnumId}orderId=${args.orderId}orderTypeId=${args.orderTypeId}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}isViewed=${args.isViewed}visitId=${args.visitId}productStoreId=${args.productStoreId}remainingSubTotal=${args.remainingSubTotal}orderName=${args.orderName}webSiteId=${args.webSiteId}isRushOrder=${args.isRushOrder}entryDate=${args.entryDate}grandTotal=${args.grandTotal}autoOrderShoppingListId=${args.autoOrderShoppingListId}externalId=${args.externalId}priority=${args.priority}transactionId=${args.transactionId}firstAttemptOrderId=${args.firstAttemptOrderId}originFacilityId=${args.originFacilityId}statusId=${args.statusId}createdBy=${args.createdBy}currencyUom=${args.currencyUom}syncStatusId=${args.syncStatusId}pickSheetPrintedDate=${args.pickSheetPrintedDate}needsInventoryIssuance=${args.needsInventoryIssuance}orderDate=${args.orderDate}internalCode=${args.internalCode}`, null, req);
  }
};
export {createOrderHeader};


const createOrderItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemAttribute method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderItemAttribute?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createOrderItemAttribute};


const createOrderItemBilling = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemBilling method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},itemIssuanceId: {type: GraphQLString},shipmentReceiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderItemBilling?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}amount=${args.amount}quantity=${args.quantity}itemIssuanceId=${args.itemIssuanceId}shipmentReceiptId=${args.shipmentReceiptId}`, null, req);
  }
};
export {createOrderItemBilling};


const createOrderItemChange = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemChange method',
  args:{orderItemSeqId: {type: GraphQLString},changeTypeEnumId: {type: GraphQLString},orderId: {type: GraphQLString},unitPrice: {type: GraphQLFloat},changeUserLogin: {type: GraphQLString},quantity: {type: GraphQLFloat},changeComments: {type: GraphQLString},itemDescription: {type: GraphQLString},reasonEnumId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat},changeDatetime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderItemChange?orderItemSeqId=${args.orderItemSeqId}changeTypeEnumId=${args.changeTypeEnumId}orderId=${args.orderId}unitPrice=${args.unitPrice}changeUserLogin=${args.changeUserLogin}quantity=${args.quantity}changeComments=${args.changeComments}itemDescription=${args.itemDescription}reasonEnumId=${args.reasonEnumId}cancelQuantity=${args.cancelQuantity}changeDatetime=${args.changeDatetime}`, null, req);
  }
};
export {createOrderItemChange};


const createOrderItemGroupOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemGroupOrder method',
  args:{orderItemSeqId: {type: GraphQLString},groupOrderId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderItemGroupOrder?orderItemSeqId=${args.orderItemSeqId}groupOrderId=${args.groupOrderId}orderId=${args.orderId}`, null, req);
  }
};
export {createOrderItemGroupOrder};


const createOrderItemShipGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderItemShipGroup method',
  args:{orderId: {type: GraphQLString},facilityId: {type: GraphQLString},giftMessage: {type: GraphQLString},shippingInstructions: {type: GraphQLString},maySplit: {type: GraphQLString},shipByDate: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},vendorPartyId: {type: GraphQLString},contactMechId: {type: GraphQLString},telecomContactMechId: {type: GraphQLString},shipAfterDate: {type: GraphQLString},carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},isGift: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},supplierPartyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},trackingNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderItemShipGroup?orderId=${args.orderId}facilityId=${args.facilityId}giftMessage=${args.giftMessage}shippingInstructions=${args.shippingInstructions}maySplit=${args.maySplit}shipByDate=${args.shipByDate}estimatedDeliveryDate=${args.estimatedDeliveryDate}shipGroupSeqId=${args.shipGroupSeqId}vendorPartyId=${args.vendorPartyId}contactMechId=${args.contactMechId}telecomContactMechId=${args.telecomContactMechId}shipAfterDate=${args.shipAfterDate}carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}isGift=${args.isGift}estimatedShipDate=${args.estimatedShipDate}supplierPartyId=${args.supplierPartyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}trackingNumber=${args.trackingNumber}`, null, req);
  }
};
export {createOrderItemShipGroup};


const createOrderNote = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderNote method',
  args:{note: {type: GraphQLString},orderId: {type: GraphQLString},internalNote: {type: GraphQLString},noteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderNote?note=${args.note}orderId=${args.orderId}internalNote=${args.internalNote}noteName=${args.noteName}`, null, req);
  }
};
export {createOrderNote};


const createOrderNotificationLog = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderNotificationLog method',
  args:{orderId: {type: GraphQLString},emailType: {type: GraphQLString},comments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderNotificationLog?orderId=${args.orderId}emailType=${args.emailType}comments=${args.comments}`, null, req);
  }
};
export {createOrderNotificationLog};


const createOrderPaymentApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderPaymentApplication method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderPaymentApplication?paymentId=${args.paymentId}`, null, req);
  }
};
export {createOrderPaymentApplication};


const createOrderPaymentPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderPaymentPreference method',
  args:{orderItemSeqId: {type: GraphQLString},track2: {type: GraphQLString},orderId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},manualRefNum: {type: GraphQLString},swipedFlag: {type: GraphQLString},manualAuthCode: {type: GraphQLString},securityCode: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},processAttempt: {type: GraphQLInt},needsNsfRetry: {type: GraphQLString},finAccountId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},billingPostalCode: {type: GraphQLString},overflowFlag: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},maxAmount: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},presentFlag: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderPaymentPreference?orderItemSeqId=${args.orderItemSeqId}track2=${args.track2}orderId=${args.orderId}lastModifiedDate=${args.lastModifiedDate}manualRefNum=${args.manualRefNum}swipedFlag=${args.swipedFlag}manualAuthCode=${args.manualAuthCode}securityCode=${args.securityCode}paymentMethodTypeId=${args.paymentMethodTypeId}shipGroupSeqId=${args.shipGroupSeqId}processAttempt=${args.processAttempt}needsNsfRetry=${args.needsNsfRetry}finAccountId=${args.finAccountId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}statusId=${args.statusId}paymentMethodId=${args.paymentMethodId}billingPostalCode=${args.billingPostalCode}overflowFlag=${args.overflowFlag}productPricePurposeId=${args.productPricePurposeId}maxAmount=${args.maxAmount}createdByUserLogin=${args.createdByUserLogin}presentFlag=${args.presentFlag}`, null, req);
  }
};
export {createOrderPaymentPreference};


const createOrderShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderShipment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderShipment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipmentId=${args.shipmentId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}quantity=${args.quantity}`, null, req);
  }
};
export {createOrderShipment};


const createOrderTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderTerm method',
  args:{orderId: {type: GraphQLString},termTypeId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},textValue: {type: GraphQLString},termDays: {type: GraphQLInt},description: {type: GraphQLString},uomId: {type: GraphQLString},termValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createOrderTerm?orderId=${args.orderId}termTypeId=${args.termTypeId}orderItemSeqId=${args.orderItemSeqId}textValue=${args.textValue}termDays=${args.termDays}description=${args.description}uomId=${args.uomId}termValue=${args.termValue}`, null, req);
  }
};
export {createOrderTerm};


const createPaymentFromPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentFromPreference method',
  args:{orderPaymentPreferenceId: {type: GraphQLString},comments: {type: GraphQLString},paymentRefNum: {type: GraphQLString},paymentFromId: {type: GraphQLString},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createPaymentFromPreference?orderPaymentPreferenceId=${args.orderPaymentPreferenceId}comments=${args.comments}paymentRefNum=${args.paymentRefNum}paymentFromId=${args.paymentFromId}eventDate=${args.eventDate}`, null, req);
  }
};
export {createPaymentFromPreference};


const createProductOrderItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductOrderItem method',
  args:{orderItemSeqId: {type: GraphQLString},engagementItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},engagementId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createProductOrderItem?orderItemSeqId=${args.orderItemSeqId}engagementItemSeqId=${args.engagementItemSeqId}orderId=${args.orderId}engagementId=${args.engagementId}productId=${args.productId}`, null, req);
  }
};
export {createProductOrderItem};


const createQuoteTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz createQuoteTerm method',
  args:{termTypeId: {type: GraphQLString},quoteId: {type: GraphQLString},textValue: {type: GraphQLString},termDays: {type: GraphQLInt},quoteItemSeqId: {type: GraphQLString},description: {type: GraphQLString},uomId: {type: GraphQLString},termValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createQuoteTerm?termTypeId=${args.termTypeId}quoteId=${args.quoteId}textValue=${args.textValue}termDays=${args.termDays}quoteItemSeqId=${args.quoteItemSeqId}description=${args.description}uomId=${args.uomId}termValue=${args.termValue}`, null, req);
  }
};
export {createQuoteTerm};


const createSalesOrderItemFact = {
  type: ResponseType,
  description: 'mutation for ofbiz createSalesOrderItemFact method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createSalesOrderItemFact?`, null, req);
  }
};
export {createSalesOrderItemFact};


const createSimpleNonProductSalesOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createSimpleNonProductSalesOrder method',
  args:{paymentMethodId: {type: GraphQLString},currency: {type: GraphQLString},productStoreId: {type: GraphQLString},itemMap: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createSimpleNonProductSalesOrder?paymentMethodId=${args.paymentMethodId}currency=${args.currency}productStoreId=${args.productStoreId}itemMap=${args.itemMap}partyId=${args.partyId}`, null, req);
  }
};
export {createSimpleNonProductSalesOrder};


const createTestOrderRentalProduct = {
  type: ResponseType,
  description: 'mutation for ofbiz createTestOrderRentalProduct method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createTestOrderRentalProduct?`, null, req);
  }
};
export {createTestOrderRentalProduct};


const createTestSalesOrderSingle = {
  type: ResponseType,
  description: 'mutation for ofbiz createTestSalesOrderSingle method',
  args:{shipOrder: {type: GraphQLBoolean},productCategoryId: {type: GraphQLString},currencyUomId: {type: GraphQLString},numberOfProductsPerOrder: {type: GraphQLInt},productId: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},salesChannel: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createTestSalesOrderSingle?shipOrder=${args.shipOrder}productCategoryId=${args.productCategoryId}currencyUomId=${args.currencyUomId}numberOfProductsPerOrder=${args.numberOfProductsPerOrder}productId=${args.productId}productStoreId=${args.productStoreId}partyId=${args.partyId}salesChannel=${args.salesChannel}`, null, req);
  }
};
export {createTestSalesOrderSingle};


const createTestSalesOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz createTestSalesOrders method',
  args:{shipOrder: {type: GraphQLBoolean},productCategoryId: {type: GraphQLString},currencyUomId: {type: GraphQLString},numberOfProductsPerOrder: {type: GraphQLInt},productStoreId: {type: GraphQLString},numberOfOrders: {type: GraphQLInt},partyId: {type: GraphQLString},salesChannel: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createTestSalesOrders?shipOrder=${args.shipOrder}productCategoryId=${args.productCategoryId}currencyUomId=${args.currencyUomId}numberOfProductsPerOrder=${args.numberOfProductsPerOrder}productStoreId=${args.productStoreId}numberOfOrders=${args.numberOfOrders}partyId=${args.partyId}salesChannel=${args.salesChannel}`, null, req);
  }
};
export {createTestSalesOrders};


const createUpdateBillingAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz createUpdateBillingAddress method',
  args:{billToAttnName: {type: GraphQLString},billToPostalCode: {type: GraphQLString},shipToContactMechId: {type: GraphQLString},setDefaultBilling: {type: GraphQLString},billToName: {type: GraphQLString},billToAddress2: {type: GraphQLString},billToCountryGeoId: {type: GraphQLString},billToCity: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},keepAddressBook: {type: GraphQLString},billToAddress1: {type: GraphQLString},billToContactMechId: {type: GraphQLString},productStoreId: {type: GraphQLString},useShippingAddressForBilling: {type: GraphQLString},partyId: {type: GraphQLString},billToStateProvinceGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createUpdateBillingAddress?billToAttnName=${args.billToAttnName}billToPostalCode=${args.billToPostalCode}shipToContactMechId=${args.shipToContactMechId}setDefaultBilling=${args.setDefaultBilling}billToName=${args.billToName}billToAddress2=${args.billToAddress2}billToCountryGeoId=${args.billToCountryGeoId}billToCity=${args.billToCity}userLogin=${args.userLogin}keepAddressBook=${args.keepAddressBook}billToAddress1=${args.billToAddress1}billToContactMechId=${args.billToContactMechId}productStoreId=${args.productStoreId}useShippingAddressForBilling=${args.useShippingAddressForBilling}partyId=${args.partyId}billToStateProvinceGeoId=${args.billToStateProvinceGeoId}`, null, req);
  }
};
export {createUpdateBillingAddress};


const createUpdateCreditCard = {
  type: ResponseType,
  description: 'mutation for ofbiz createUpdateCreditCard method',
  args:{expMonth: {type: GraphQLString},expYear: {type: GraphQLString},lastNameOnCard: {type: GraphQLString},firstNameOnCard: {type: GraphQLString},cardType: {type: GraphQLString},cardNumber: {type: GraphQLString},titleOnCard: {type: GraphQLString},paymentMethodId: {type: GraphQLString},middleNameOnCard: {type: GraphQLString},partyId: {type: GraphQLString},suffixOnCard: {type: GraphQLString},contactMechId: {type: GraphQLString},companyNameOnCard: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createUpdateCreditCard?expMonth=${args.expMonth}expYear=${args.expYear}lastNameOnCard=${args.lastNameOnCard}firstNameOnCard=${args.firstNameOnCard}cardType=${args.cardType}cardNumber=${args.cardNumber}titleOnCard=${args.titleOnCard}paymentMethodId=${args.paymentMethodId}middleNameOnCard=${args.middleNameOnCard}partyId=${args.partyId}suffixOnCard=${args.suffixOnCard}contactMechId=${args.contactMechId}companyNameOnCard=${args.companyNameOnCard}`, null, req);
  }
};
export {createUpdateCreditCard};


const createUpdateShippingAddress = {
  type: ResponseType,
  description: 'mutation for ofbiz createUpdateShippingAddress method',
  args:{shipToCity: {type: GraphQLString},shipToAddress1: {type: GraphQLString},shipToPostalCode: {type: GraphQLString},shipToCountryGeoId: {type: GraphQLString},shipToStateProvinceGeoId: {type: GraphQLString},userLogin: {type: new GraphQLList(KeyValueInputType)},keepAddressBook: {type: GraphQLString},setDefaultShipping: {type: GraphQLString},shipToAddress2: {type: GraphQLString},billToContactMechId: {type: GraphQLString},shipToContactMechId: {type: GraphQLString},shipToName: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},shipToAttnName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/createUpdateShippingAddress?shipToCity=${args.shipToCity}shipToAddress1=${args.shipToAddress1}shipToPostalCode=${args.shipToPostalCode}shipToCountryGeoId=${args.shipToCountryGeoId}shipToStateProvinceGeoId=${args.shipToStateProvinceGeoId}userLogin=${args.userLogin}keepAddressBook=${args.keepAddressBook}setDefaultShipping=${args.setDefaultShipping}shipToAddress2=${args.shipToAddress2}billToContactMechId=${args.billToContactMechId}shipToContactMechId=${args.shipToContactMechId}shipToName=${args.shipToName}productStoreId=${args.productStoreId}partyId=${args.partyId}shipToAttnName=${args.shipToAttnName}`, null, req);
  }
};
export {createUpdateShippingAddress};


const deleteOrderAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderAdjustment method',
  args:{orderId: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteOrderAdjustment?orderId=${args.orderId}orderAdjustmentId=${args.orderAdjustmentId}productPromoCodeId=${args.productPromoCodeId}`, null, req);
  }
};
export {deleteOrderAdjustment};


const deleteOrderAdjustmentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderAdjustmentTypeAttr method',
  args:{orderAdjustmentTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteOrderAdjustmentTypeAttr?orderAdjustmentTypeId=${args.orderAdjustmentTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteOrderAdjustmentTypeAttr};


const deleteOrderItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemAttribute method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteOrderItemAttribute?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteOrderItemAttribute};


const deleteOrderItemShipGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemShipGroup method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteOrderItemShipGroup?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {deleteOrderItemShipGroup};


const deleteOrderItemShipGroupAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderItemShipGroupAssoc method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteOrderItemShipGroupAssoc?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {deleteOrderItemShipGroupAssoc};


const deleteOrderShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderShipment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteOrderShipment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipmentId=${args.shipmentId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {deleteOrderShipment};


const deleteProductOrderItem = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductOrderItem method',
  args:{orderItemSeqId: {type: GraphQLString},engagementItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},engagementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteProductOrderItem?orderItemSeqId=${args.orderItemSeqId}engagementItemSeqId=${args.engagementItemSeqId}orderId=${args.orderId}engagementId=${args.engagementId}`, null, req);
  }
};
export {deleteProductOrderItem};


const deleteQuoteTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteQuoteTerm method',
  args:{quoteItemSeqId: {type: GraphQLString},termTypeId: {type: GraphQLString},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteQuoteTerm?quoteItemSeqId=${args.quoteItemSeqId}termTypeId=${args.termTypeId}quoteId=${args.quoteId}`, null, req);
  }
};
export {deleteQuoteTerm};


const deleteSalesOrderItemFact = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSalesOrderItemFact method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/deleteSalesOrderItemFact?`, null, req);
  }
};
export {deleteSalesOrderItemFact};


const expireOrderContent = {
  type: ResponseType,
  description: 'mutation for ofbiz expireOrderContent method',
  args:{orderItemSeqId: {type: GraphQLString},fromDate: {type: GraphQLString},orderId: {type: GraphQLString},contentId: {type: GraphQLString},orderContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/expireOrderContent?orderItemSeqId=${args.orderItemSeqId}fromDate=${args.fromDate}orderId=${args.orderId}contentId=${args.contentId}orderContentTypeId=${args.orderContentTypeId}`, null, req);
  }
};
export {expireOrderContent};


const findOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz findOrders method',
  args:{viewSize: {type: GraphQLInt},minDate: {type: GraphQLString},orderId: {type: GraphQLString},useEntryDate: {type: GraphQLString},softIdentifier: {type: GraphQLString},filterInventoryProblems: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},paymentStatusId: {type: GraphQLString},isViewed: {type: GraphQLString},shipmentMethod: {type: GraphQLString},hasBackOrders: {type: GraphQLString},showAll: {type: GraphQLString},filterPOsWithRejectedItems: {type: GraphQLString},partyId: {type: GraphQLString},orderName: {type: GraphQLString},gatewayScoreResult: {type: GraphQLString},countryGeoId: {type: GraphQLString},serialNumber: {type: GraphQLString},productId: {type: GraphQLString},goodIdentificationTypeId: {type: GraphQLString},externalId: {type: GraphQLString},viewIndex: {type: GraphQLInt},budgetId: {type: GraphQLString},includeCountry: {type: GraphQLString},accountNumber: {type: GraphQLString},correspondingPoId: {type: GraphQLString},goodIdentificationIdValue: {type: GraphQLString},filterPartiallyReceivedPOs: {type: GraphQLString},transactionId: {type: GraphQLString},quoteId: {type: GraphQLString},filterPOsOpenPastTheirETA: {type: GraphQLString},userLoginId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},finAccountId: {type: GraphQLString},createdBy: {type: GraphQLString},shipmentId: {type: GraphQLString},gatewayAvsResult: {type: GraphQLString},maxDate: {type: GraphQLString},subscriptionId: {type: GraphQLString},internalCode: {type: GraphQLString},cardNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/findOrders?viewSize=${args.viewSize}minDate=${args.minDate}salesChannelEnumId=${args.salesChannelEnumId}orderId=${args.orderId}useEntryDate=${args.useEntryDate}softIdentifier=${args.softIdentifier}orderTypeId=${args.orderTypeId}filterInventoryProblems=${args.filterInventoryProblems}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}paymentStatusId=${args.paymentStatusId}isViewed=${args.isViewed}shipmentMethod=${args.shipmentMethod}hasBackOrders=${args.hasBackOrders}showAll=${args.showAll}filterPOsWithRejectedItems=${args.filterPOsWithRejectedItems}productStoreId=${args.productStoreId}partyId=${args.partyId}orderName=${args.orderName}gatewayScoreResult=${args.gatewayScoreResult}countryGeoId=${args.countryGeoId}roleTypeId=${args.roleTypeId}serialNumber=${args.serialNumber}productId=${args.productId}goodIdentificationTypeId=${args.goodIdentificationTypeId}externalId=${args.externalId}viewIndex=${args.viewIndex}budgetId=${args.budgetId}includeCountry=${args.includeCountry}accountNumber=${args.accountNumber}correspondingPoId=${args.correspondingPoId}goodIdentificationIdValue=${args.goodIdentificationIdValue}filterPartiallyReceivedPOs=${args.filterPartiallyReceivedPOs}transactionId=${args.transactionId}quoteId=${args.quoteId}filterPOsOpenPastTheirETA=${args.filterPOsOpenPastTheirETA}userLoginId=${args.userLoginId}inventoryItemId=${args.inventoryItemId}finAccountId=${args.finAccountId}orderStatusId=${args.orderStatusId}createdBy=${args.createdBy}shipmentId=${args.shipmentId}gatewayAvsResult=${args.gatewayAvsResult}orderWebSiteId=${args.orderWebSiteId}maxDate=${args.maxDate}subscriptionId=${args.subscriptionId}internalCode=${args.internalCode}cardNumber=${args.cardNumber}`, null, req);
  }
};
export {findOrders};


const fulfillDigitalItems = {
  type: ResponseType,
  description: 'mutation for ofbiz fulfillDigitalItems method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/fulfillDigitalItems?orderId=${args.orderId}orderItems=${args.orderItems}`, null, req);
  }
};
export {fulfillDigitalItems};


const generateReqsFromCancelledPOItems = {
  type: ResponseType,
  description: 'mutation for ofbiz generateReqsFromCancelledPOItems method',
  args:{facilityId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/generateReqsFromCancelledPOItems?facilityId=${args.facilityId}orderId=${args.orderId}`, null, req);
  }
};
export {generateReqsFromCancelledPOItems};


const getNextOrderId = {
  type: ResponseType,
  description: 'mutation for ofbiz getNextOrderId method',
  args:{currencyUom: {type: GraphQLString},orderTypeId: {type: GraphQLString},partyId: {type: GraphQLString},workEffortId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},orderId: {type: GraphQLString},billToCustomerPartyId: {type: GraphQLString},shipFromVendorPartyId: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},visitId: {type: GraphQLString},shippingAmount: {type: GraphQLFloat},productStoreId: {type: GraphQLString},supplierAgentPartyId: {type: GraphQLString},originOrderId: {type: GraphQLString},orderName: {type: GraphQLString},webSiteId: {type: GraphQLString},billFromVendorPartyId: {type: GraphQLString},grandTotal: {type: GraphQLFloat},distributorId: {type: GraphQLString},autoOrderShoppingListId: {type: GraphQLString},externalId: {type: GraphQLString},endUserCustomerPartyId: {type: GraphQLString},affiliateId: {type: GraphQLString},placingCustomerPartyId: {type: GraphQLString},transactionId: {type: GraphQLString},originFacilityId: {type: GraphQLString},firstAttemptOrderId: {type: GraphQLString},orderAdditionalPartyRoleMap: {type: GraphQLString},shipToCustomerPartyId: {type: GraphQLString},supplierPartyId: {type: GraphQLString},taxAmount: {type: GraphQLFloat},orderDate: {type: GraphQLString},internalCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getNextOrderId?currencyUom=${args.currencyUom}orderTypeId=${args.orderTypeId}orderAdjustments=${args.orderAdjustments}partyId=${args.partyId}orderItems=${args.orderItems}workEffortId=${args.workEffortId}orderItemGroups=${args.orderItemGroups}salesChannelEnumId=${args.salesChannelEnumId}orderId=${args.orderId}billToCustomerPartyId=${args.billToCustomerPartyId}orderAttributes=${args.orderAttributes}orderProductPromoUses=${args.orderProductPromoUses}shipFromVendorPartyId=${args.shipFromVendorPartyId}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}orderItemContactMechs=${args.orderItemContactMechs}orderProductPromoCodes=${args.orderProductPromoCodes}orderItemSurveyResponses=${args.orderItemSurveyResponses}visitId=${args.visitId}trackingCodeOrders=${args.trackingCodeOrders}orderInternalNotes=${args.orderInternalNotes}orderItemShipGroupInfo=${args.orderItemShipGroupInfo}orderContactMechs=${args.orderContactMechs}workEfforts=${args.workEfforts}shippingAmount=${args.shippingAmount}productStoreId=${args.productStoreId}supplierAgentPartyId=${args.supplierAgentPartyId}orderPaymentInfo=${args.orderPaymentInfo}originOrderId=${args.originOrderId}orderName=${args.orderName}webSiteId=${args.webSiteId}orderItemAssociations=${args.orderItemAssociations}billFromVendorPartyId=${args.billFromVendorPartyId}grandTotal=${args.grandTotal}distributorId=${args.distributorId}autoOrderShoppingListId=${args.autoOrderShoppingListId}externalId=${args.externalId}endUserCustomerPartyId=${args.endUserCustomerPartyId}affiliateId=${args.affiliateId}orderTerms=${args.orderTerms}placingCustomerPartyId=${args.placingCustomerPartyId}transactionId=${args.transactionId}originFacilityId=${args.originFacilityId}firstAttemptOrderId=${args.firstAttemptOrderId}orderAdditionalPartyRoleMap=${args.orderAdditionalPartyRoleMap}orderItemPriceInfos=${args.orderItemPriceInfos}orderNotes=${args.orderNotes}shipToCustomerPartyId=${args.shipToCustomerPartyId}supplierPartyId=${args.supplierPartyId}taxAmount=${args.taxAmount}orderDate=${args.orderDate}internalCode=${args.internalCode}orderItemAttributes=${args.orderItemAttributes}`, null, req);
  }
};
export {getNextOrderId};


const getOrderHeaderInformation = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderHeaderInformation method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getOrderHeaderInformation?orderId=${args.orderId}`, null, req);
  }
};
export {getOrderHeaderInformation};


const getOrderItemInvoicedAmountAndQuantity = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderItemInvoicedAmountAndQuantity method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getOrderItemInvoicedAmountAndQuantity?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}`, null, req);
  }
};
export {getOrderItemInvoicedAmountAndQuantity};


const getOrderItemShipGroupEstimatedShipDate = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderItemShipGroupEstimatedShipDate method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getOrderItemShipGroupEstimatedShipDate?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {getOrderItemShipGroupEstimatedShipDate};


const getOrderShippingAmount = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderShippingAmount method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getOrderShippingAmount?orderId=${args.orderId}`, null, req);
  }
};
export {getOrderShippingAmount};


const getOrderStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderStatus method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getOrderStatus?orderId=${args.orderId}`, null, req);
  }
};
export {getOrderStatus};


const getOrderedSummaryInformation = {
  type: ResponseType,
  description: 'mutation for ofbiz getOrderedSummaryInformation method',
  args:{partyId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},statusId: {type: GraphQLString},orderTypeId: {type: GraphQLString},monthsToInclude: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/getOrderedSummaryInformation?partyId=${args.partyId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}statusId=${args.statusId}orderTypeId=${args.orderTypeId}monthsToInclude=${args.monthsToInclude}thruDate=${args.thruDate}`, null, req);
  }
};
export {getOrderedSummaryInformation};


const invoiceServiceItems = {
  type: ResponseType,
  description: 'mutation for ofbiz invoiceServiceItems method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/invoiceServiceItems?orderId=${args.orderId}`, null, req);
  }
};
export {invoiceServiceItems};


const itemFulfillmentInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz itemFulfillmentInterface method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},orderItem: {type: new GraphQLList(KeyValueInputType)},contentId: {type: GraphQLString},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/itemFulfillmentInterface?fromDate=${args.fromDate}productId=${args.productId}orderItem=${args.orderItem}contentId=${args.contentId}productContentTypeId=${args.productContentTypeId}`, null, req);
  }
};
export {itemFulfillmentInterface};


const loadCartForUpdate = {
  type: ResponseType,
  description: 'mutation for ofbiz loadCartForUpdate method',
  args:{userLogin: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/loadCartForUpdate?userLogin=${args.userLogin}orderId=${args.orderId}`, null, req);
  }
};
export {loadCartForUpdate};


const massCancelOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massCancelOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massCancelOrders?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massCancelOrders};


const massCancelRemainingPurchaseOrderItems = {
  type: ResponseType,
  description: 'mutation for ofbiz massCancelRemainingPurchaseOrderItems method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massCancelRemainingPurchaseOrderItems?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massCancelRemainingPurchaseOrderItems};


const massChangeOrderApproved = {
  type: ResponseType,
  description: 'mutation for ofbiz massChangeOrderApproved method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massChangeOrderApproved?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massChangeOrderApproved};


const massCreateFileForOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massCreateFileForOrders method',
  args:{screenLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massCreateFileForOrders?orderIdList=${args.orderIdList}screenLocation=${args.screenLocation}`, null, req);
  }
};
export {massCreateFileForOrders};


const massHoldOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massHoldOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massHoldOrders?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massHoldOrders};


const massOrderChangeInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz massOrderChangeInterface method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massOrderChangeInterface?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massOrderChangeInterface};


const massPickOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massPickOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massPickOrders?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massPickOrders};


const massPrintOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massPrintOrders method',
  args:{screenLocation: {type: GraphQLString},printerName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massPrintOrders?orderIdList=${args.orderIdList}screenLocation=${args.screenLocation}printerName=${args.printerName}`, null, req);
  }
};
export {massPrintOrders};


const massProcessOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massProcessOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massProcessOrders?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massProcessOrders};


const massQuickShipOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massQuickShipOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massQuickShipOrders?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massQuickShipOrders};


const massRejectOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz massRejectOrders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/massRejectOrders?orderIdList=${args.orderIdList}`, null, req);
  }
};
export {massRejectOrders};


const orderAdjustmentPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz orderAdjustmentPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/orderAdjustmentPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {orderAdjustmentPermissionCheck};


const orderNotificationInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz orderNotificationInterface method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},note: {type: GraphQLString},comments: {type: GraphQLString},sendTo: {type: GraphQLString},screenUri: {type: GraphQLString},sendCc: {type: GraphQLString},temporaryAnonymousUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/orderNotificationInterface?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}note=${args.note}comments=${args.comments}sendTo=${args.sendTo}screenUri=${args.screenUri}sendCc=${args.sendCc}temporaryAnonymousUserLogin=${args.temporaryAnonymousUserLogin}`, null, req);
  }
};
export {orderNotificationInterface};


const orderSequence_enforced = {
  type: ResponseType,
  description: 'mutation for ofbiz orderSequence_enforced method',
  args:{currencyUom: {type: GraphQLString},orderTypeId: {type: GraphQLString},partyId: {type: GraphQLString},partyAcctgPreference: {type: new GraphQLList(KeyValueInputType)},workEffortId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},billToCustomerPartyId: {type: GraphQLString},shipFromVendorPartyId: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},visitId: {type: GraphQLString},shippingAmount: {type: GraphQLFloat},productStoreId: {type: GraphQLString},supplierAgentPartyId: {type: GraphQLString},originOrderId: {type: GraphQLString},orderName: {type: GraphQLString},webSiteId: {type: GraphQLString},billFromVendorPartyId: {type: GraphQLString},grandTotal: {type: GraphQLFloat},distributorId: {type: GraphQLString},autoOrderShoppingListId: {type: GraphQLString},externalId: {type: GraphQLString},endUserCustomerPartyId: {type: GraphQLString},affiliateId: {type: GraphQLString},placingCustomerPartyId: {type: GraphQLString},transactionId: {type: GraphQLString},originFacilityId: {type: GraphQLString},firstAttemptOrderId: {type: GraphQLString},orderAdditionalPartyRoleMap: {type: GraphQLString},shipToCustomerPartyId: {type: GraphQLString},supplierPartyId: {type: GraphQLString},taxAmount: {type: GraphQLFloat},orderDate: {type: GraphQLString},internalCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/orderSequence_enforced?currencyUom=${args.currencyUom}orderTypeId=${args.orderTypeId}orderAdjustments=${args.orderAdjustments}partyId=${args.partyId}partyAcctgPreference=${args.partyAcctgPreference}orderItems=${args.orderItems}workEffortId=${args.workEffortId}orderItemGroups=${args.orderItemGroups}salesChannelEnumId=${args.salesChannelEnumId}billToCustomerPartyId=${args.billToCustomerPartyId}orderAttributes=${args.orderAttributes}orderProductPromoUses=${args.orderProductPromoUses}shipFromVendorPartyId=${args.shipFromVendorPartyId}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}orderItemContactMechs=${args.orderItemContactMechs}orderProductPromoCodes=${args.orderProductPromoCodes}orderItemSurveyResponses=${args.orderItemSurveyResponses}visitId=${args.visitId}trackingCodeOrders=${args.trackingCodeOrders}orderInternalNotes=${args.orderInternalNotes}orderItemShipGroupInfo=${args.orderItemShipGroupInfo}orderContactMechs=${args.orderContactMechs}workEfforts=${args.workEfforts}shippingAmount=${args.shippingAmount}productStoreId=${args.productStoreId}supplierAgentPartyId=${args.supplierAgentPartyId}orderPaymentInfo=${args.orderPaymentInfo}originOrderId=${args.originOrderId}orderName=${args.orderName}webSiteId=${args.webSiteId}orderItemAssociations=${args.orderItemAssociations}billFromVendorPartyId=${args.billFromVendorPartyId}grandTotal=${args.grandTotal}distributorId=${args.distributorId}autoOrderShoppingListId=${args.autoOrderShoppingListId}externalId=${args.externalId}endUserCustomerPartyId=${args.endUserCustomerPartyId}affiliateId=${args.affiliateId}orderTerms=${args.orderTerms}placingCustomerPartyId=${args.placingCustomerPartyId}transactionId=${args.transactionId}originFacilityId=${args.originFacilityId}firstAttemptOrderId=${args.firstAttemptOrderId}orderAdditionalPartyRoleMap=${args.orderAdditionalPartyRoleMap}orderItemPriceInfos=${args.orderItemPriceInfos}orderNotes=${args.orderNotes}shipToCustomerPartyId=${args.shipToCustomerPartyId}supplierPartyId=${args.supplierPartyId}taxAmount=${args.taxAmount}orderDate=${args.orderDate}internalCode=${args.internalCode}orderItemAttributes=${args.orderItemAttributes}`, null, req);
  }
};
export {orderSequence_enforced};


const processOrderPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz processOrderPayments method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/processOrderPayments?orderId=${args.orderId}`, null, req);
  }
};
export {processOrderPayments};


const productAvailabalityByFacility = {
  type: ResponseType,
  description: 'mutation for ofbiz productAvailabalityByFacility method',
  args:{productId: {type: GraphQLString},ownerPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/productAvailabalityByFacility?productId=${args.productId}ownerPartyId=${args.ownerPartyId}`, null, req);
  }
};
export {productAvailabalityByFacility};


const recalcShippingTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz recalcShippingTotal method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/recalcShippingTotal?orderId=${args.orderId}`, null, req);
  }
};
export {recalcShippingTotal};


const recalcTaxTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz recalcTaxTotal method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/recalcTaxTotal?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}`, null, req);
  }
};
export {recalcTaxTotal};


const recreateOrderAdjustments = {
  type: ResponseType,
  description: 'mutation for ofbiz recreateOrderAdjustments method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/recreateOrderAdjustments?orderId=${args.orderId}`, null, req);
  }
};
export {recreateOrderAdjustments};


const removeCommunicationEventOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCommunicationEventOrder method',
  args:{orderId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/removeCommunicationEventOrder?orderId=${args.orderId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {removeCommunicationEventOrder};


const removeOrderContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz removeOrderContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/removeOrderContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {removeOrderContactMech};


const removeOrderRole = {
  type: ResponseType,
  description: 'mutation for ofbiz removeOrderRole method',
  args:{roleTypeId: {type: GraphQLString},orderId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/removeOrderRole?roleTypeId=${args.roleTypeId}orderId=${args.orderId}partyId=${args.partyId}`, null, req);
  }
};
export {removeOrderRole};


const removeOrderTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz removeOrderTerm method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},termTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/removeOrderTerm?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}termTypeId=${args.termTypeId}`, null, req);
  }
};
export {removeOrderTerm};


const resetGrandTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz resetGrandTotal method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/resetGrandTotal?orderId=${args.orderId}`, null, req);
  }
};
export {resetGrandTotal};


const runSubscriptionAutoReorders = {
  type: ResponseType,
  description: 'mutation for ofbiz runSubscriptionAutoReorders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/runSubscriptionAutoReorders?`, null, req);
  }
};
export {runSubscriptionAutoReorders};


const saveUpdatedCartToOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz saveUpdatedCartToOrder method',
  args:{changeMap: {type: GraphQLString},orderId: {type: GraphQLString},shoppingCart: {type: GraphQLString},calcTax: {type: GraphQLBoolean},deleteItems: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/saveUpdatedCartToOrder?changeMap=${args.changeMap}orderId=${args.orderId}shoppingCart=${args.shoppingCart}calcTax=${args.calcTax}deleteItems=${args.deleteItems}`, null, req);
  }
};
export {saveUpdatedCartToOrder};


const sendOrderBackorderNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendOrderBackorderNotification method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},note: {type: GraphQLString},comments: {type: GraphQLString},sendTo: {type: GraphQLString},screenUri: {type: GraphQLString},sendCc: {type: GraphQLString},temporaryAnonymousUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendOrderBackorderNotification?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}note=${args.note}comments=${args.comments}sendTo=${args.sendTo}screenUri=${args.screenUri}sendCc=${args.sendCc}temporaryAnonymousUserLogin=${args.temporaryAnonymousUserLogin}`, null, req);
  }
};
export {sendOrderBackorderNotification};


const sendOrderChangeNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendOrderChangeNotification method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},note: {type: GraphQLString},comments: {type: GraphQLString},sendTo: {type: GraphQLString},screenUri: {type: GraphQLString},sendCc: {type: GraphQLString},temporaryAnonymousUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendOrderChangeNotification?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}note=${args.note}comments=${args.comments}sendTo=${args.sendTo}screenUri=${args.screenUri}sendCc=${args.sendCc}temporaryAnonymousUserLogin=${args.temporaryAnonymousUserLogin}`, null, req);
  }
};
export {sendOrderChangeNotification};


const sendOrderCompleteNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendOrderCompleteNotification method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},note: {type: GraphQLString},comments: {type: GraphQLString},sendTo: {type: GraphQLString},screenUri: {type: GraphQLString},sendCc: {type: GraphQLString},temporaryAnonymousUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendOrderCompleteNotification?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}note=${args.note}comments=${args.comments}sendTo=${args.sendTo}screenUri=${args.screenUri}sendCc=${args.sendCc}temporaryAnonymousUserLogin=${args.temporaryAnonymousUserLogin}`, null, req);
  }
};
export {sendOrderCompleteNotification};


const sendOrderConfirmation = {
  type: ResponseType,
  description: 'mutation for ofbiz sendOrderConfirmation method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},note: {type: GraphQLString},comments: {type: GraphQLString},sendTo: {type: GraphQLString},screenUri: {type: GraphQLString},sendCc: {type: GraphQLString},temporaryAnonymousUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendOrderConfirmation?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}note=${args.note}comments=${args.comments}sendTo=${args.sendTo}screenUri=${args.screenUri}sendCc=${args.sendCc}temporaryAnonymousUserLogin=${args.temporaryAnonymousUserLogin}`, null, req);
  }
};
export {sendOrderConfirmation};


const sendOrderDeliveryScheduleNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendOrderDeliveryScheduleNotification method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendOrderDeliveryScheduleNotification?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}`, null, req);
  }
};
export {sendOrderDeliveryScheduleNotification};


const sendOrderPayRetryNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendOrderPayRetryNotification method',
  args:{orderId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},note: {type: GraphQLString},comments: {type: GraphQLString},sendTo: {type: GraphQLString},screenUri: {type: GraphQLString},sendCc: {type: GraphQLString},temporaryAnonymousUserLogin: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendOrderPayRetryNotification?orderId=${args.orderId}orderItemSeqId=${args.orderItemSeqId}note=${args.note}comments=${args.comments}sendTo=${args.sendTo}screenUri=${args.screenUri}sendCc=${args.sendCc}temporaryAnonymousUserLogin=${args.temporaryAnonymousUserLogin}`, null, req);
  }
};
export {sendOrderPayRetryNotification};


const sendProcessNotification = {
  type: ResponseType,
  description: 'mutation for ofbiz sendProcessNotification method',
  args:{workEffortId: {type: GraphQLString},adminEmailList: {type: GraphQLString},assignedRoleTypeId: {type: GraphQLString},assignedPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/sendProcessNotification?workEffortId=${args.workEffortId}adminEmailList=${args.adminEmailList}assignedRoleTypeId=${args.assignedRoleTypeId}assignedPartyId=${args.assignedPartyId}`, null, req);
  }
};
export {sendProcessNotification};


const setAllowOrderSplit = {
  type: ResponseType,
  description: 'mutation for ofbiz setAllowOrderSplit method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/setAllowOrderSplit?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {setAllowOrderSplit};


const setEmptyGrandTotals = {
  type: ResponseType,
  description: 'mutation for ofbiz setEmptyGrandTotals method',
  args:{forceAll: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/setEmptyGrandTotals?forceAll=${args.forceAll}`, null, req);
  }
};
export {setEmptyGrandTotals};


const setGiftMessage = {
  type: ResponseType,
  description: 'mutation for ofbiz setGiftMessage method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},giftMessage: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/setGiftMessage?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}giftMessage=${args.giftMessage}`, null, req);
  }
};
export {setGiftMessage};


const setShippingInstructions = {
  type: ResponseType,
  description: 'mutation for ofbiz setShippingInstructions method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},shippingInstructions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/setShippingInstructions?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}shippingInstructions=${args.shippingInstructions}`, null, req);
  }
};
export {setShippingInstructions};


const setUnitPriceAsLastPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz setUnitPriceAsLastPrice method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},orderId: {type: GraphQLString},unitCost: {type: GraphQLString},itemPriceMap: {type: GraphQLString},overridePriceMap: {type: GraphQLString},orderCurrencyUnitPrice: {type: GraphQLString},orderTypeId: {type: GraphQLString},supplierPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/setUnitPriceAsLastPrice?facilityId=${args.facilityId}productId=${args.productId}orderId=${args.orderId}unitCost=${args.unitCost}itemPriceMap=${args.itemPriceMap}overridePriceMap=${args.overridePriceMap}orderCurrencyUnitPrice=${args.orderCurrencyUnitPrice}orderTypeId=${args.orderTypeId}supplierPartyId=${args.supplierPartyId}orderItems=${args.orderItems}`, null, req);
  }
};
export {setUnitPriceAsLastPrice};


const shoppingCartRemoteTest = {
  type: ResponseType,
  description: 'mutation for ofbiz shoppingCartRemoteTest method',
  args:{cart: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/shoppingCartRemoteTest?cart=${args.cart}`, null, req);
  }
};
export {shoppingCartRemoteTest};


const shoppingCartTest = {
  type: ResponseType,
  description: 'mutation for ofbiz shoppingCartTest method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/shoppingCartTest?`, null, req);
  }
};
export {shoppingCartTest};


const storeOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz storeOrder method',
  args:{currencyUom: {type: GraphQLString},orderTypeId: {type: GraphQLString},partyId: {type: GraphQLString},workEffortId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},orderId: {type: GraphQLString},billToCustomerPartyId: {type: GraphQLString},shipFromVendorPartyId: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},visitId: {type: GraphQLString},shippingAmount: {type: GraphQLFloat},productStoreId: {type: GraphQLString},supplierAgentPartyId: {type: GraphQLString},originOrderId: {type: GraphQLString},orderName: {type: GraphQLString},webSiteId: {type: GraphQLString},billFromVendorPartyId: {type: GraphQLString},grandTotal: {type: GraphQLFloat},distributorId: {type: GraphQLString},autoOrderShoppingListId: {type: GraphQLString},externalId: {type: GraphQLString},endUserCustomerPartyId: {type: GraphQLString},affiliateId: {type: GraphQLString},placingCustomerPartyId: {type: GraphQLString},transactionId: {type: GraphQLString},originFacilityId: {type: GraphQLString},firstAttemptOrderId: {type: GraphQLString},orderAdditionalPartyRoleMap: {type: GraphQLString},shipToCustomerPartyId: {type: GraphQLString},supplierPartyId: {type: GraphQLString},taxAmount: {type: GraphQLFloat},orderDate: {type: GraphQLString},internalCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/storeOrder?currencyUom=${args.currencyUom}orderTypeId=${args.orderTypeId}orderAdjustments=${args.orderAdjustments}partyId=${args.partyId}orderItems=${args.orderItems}workEffortId=${args.workEffortId}orderItemGroups=${args.orderItemGroups}salesChannelEnumId=${args.salesChannelEnumId}orderId=${args.orderId}billToCustomerPartyId=${args.billToCustomerPartyId}orderAttributes=${args.orderAttributes}orderProductPromoUses=${args.orderProductPromoUses}shipFromVendorPartyId=${args.shipFromVendorPartyId}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}orderItemContactMechs=${args.orderItemContactMechs}orderProductPromoCodes=${args.orderProductPromoCodes}orderItemSurveyResponses=${args.orderItemSurveyResponses}visitId=${args.visitId}trackingCodeOrders=${args.trackingCodeOrders}orderInternalNotes=${args.orderInternalNotes}orderItemShipGroupInfo=${args.orderItemShipGroupInfo}orderContactMechs=${args.orderContactMechs}workEfforts=${args.workEfforts}shippingAmount=${args.shippingAmount}productStoreId=${args.productStoreId}supplierAgentPartyId=${args.supplierAgentPartyId}orderPaymentInfo=${args.orderPaymentInfo}originOrderId=${args.originOrderId}orderName=${args.orderName}webSiteId=${args.webSiteId}orderItemAssociations=${args.orderItemAssociations}billFromVendorPartyId=${args.billFromVendorPartyId}grandTotal=${args.grandTotal}distributorId=${args.distributorId}autoOrderShoppingListId=${args.autoOrderShoppingListId}externalId=${args.externalId}endUserCustomerPartyId=${args.endUserCustomerPartyId}affiliateId=${args.affiliateId}orderTerms=${args.orderTerms}placingCustomerPartyId=${args.placingCustomerPartyId}transactionId=${args.transactionId}originFacilityId=${args.originFacilityId}firstAttemptOrderId=${args.firstAttemptOrderId}orderAdditionalPartyRoleMap=${args.orderAdditionalPartyRoleMap}orderItemPriceInfos=${args.orderItemPriceInfos}orderNotes=${args.orderNotes}shipToCustomerPartyId=${args.shipToCustomerPartyId}supplierPartyId=${args.supplierPartyId}taxAmount=${args.taxAmount}orderDate=${args.orderDate}internalCode=${args.internalCode}orderItemAttributes=${args.orderItemAttributes}`, null, req);
  }
};
export {storeOrder};


const testCreateShoppinCartAndOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz testCreateShoppinCartAndOrder method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/testCreateShoppinCartAndOrder?`, null, req);
  }
};
export {testCreateShoppinCartAndOrder};


const updateOrderAdjustment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderAdjustment method',
  args:{orderId: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString},customerReferenceId: {type: GraphQLString},correspondingProductId: {type: GraphQLString},includeInShipping: {type: GraphQLString},description: {type: GraphQLString},exemptAmount: {type: GraphQLFloat},productPromoId: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},oldPercentage: {type: GraphQLFloat},primaryGeoId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},originalAdjustmentId: {type: GraphQLString},secondaryGeoId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},amountAlreadyIncluded: {type: GraphQLFloat},orderItemSeqId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},recurringAmount: {type: GraphQLFloat},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},orderAdjustmentTypeId: {type: GraphQLString},productPromoRuleId: {type: GraphQLString},isManual: {type: GraphQLString},productFeatureId: {type: GraphQLString},taxAuthorityRateSeqId: {type: GraphQLString},overrideGlAccountId: {type: GraphQLString},oldAmountPerQuantity: {type: GraphQLFloat},shipGroupSeqId: {type: GraphQLString},includeInTax: {type: GraphQLString},createdDate: {type: GraphQLString},productPromoActionSeqId: {type: GraphQLString},sourcePercentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderAdjustment?orderId=${args.orderId}orderAdjustmentId=${args.orderAdjustmentId}customerReferenceId=${args.customerReferenceId}correspondingProductId=${args.correspondingProductId}includeInShipping=${args.includeInShipping}description=${args.description}exemptAmount=${args.exemptAmount}productPromoId=${args.productPromoId}taxAuthPartyId=${args.taxAuthPartyId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}oldPercentage=${args.oldPercentage}primaryGeoId=${args.primaryGeoId}taxAuthGeoId=${args.taxAuthGeoId}originalAdjustmentId=${args.originalAdjustmentId}secondaryGeoId=${args.secondaryGeoId}createdByUserLogin=${args.createdByUserLogin}amountAlreadyIncluded=${args.amountAlreadyIncluded}orderItemSeqId=${args.orderItemSeqId}amount=${args.amount}comments=${args.comments}recurringAmount=${args.recurringAmount}lastModifiedDate=${args.lastModifiedDate}sourceReferenceId=${args.sourceReferenceId}orderAdjustmentTypeId=${args.orderAdjustmentTypeId}productPromoRuleId=${args.productPromoRuleId}isManual=${args.isManual}productFeatureId=${args.productFeatureId}taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}overrideGlAccountId=${args.overrideGlAccountId}oldAmountPerQuantity=${args.oldAmountPerQuantity}shipGroupSeqId=${args.shipGroupSeqId}includeInTax=${args.includeInTax}createdDate=${args.createdDate}productPromoActionSeqId=${args.productPromoActionSeqId}sourcePercentage=${args.sourcePercentage}`, null, req);
  }
};
export {updateOrderAdjustment};


const updateOrderAdjustmentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderAdjustmentTypeAttr method',
  args:{orderAdjustmentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderAdjustmentTypeAttr?orderAdjustmentTypeId=${args.orderAdjustmentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateOrderAdjustmentTypeAttr};


const updateOrderContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderContactMech method',
  args:{contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString},contactMechId: {type: GraphQLString},oldContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderContactMech?contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}contactMechId=${args.contactMechId}oldContactMechId=${args.oldContactMechId}`, null, req);
  }
};
export {updateOrderContactMech};


const updateOrderDeliverySchedule = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderDeliverySchedule method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},skidsPallets: {type: GraphQLInt},unitsPieces: {type: GraphQLFloat},statusId: {type: GraphQLString},totalWeight: {type: GraphQLFloat},totalCubicSize: {type: GraphQLFloat},totalWeightUomId: {type: GraphQLString},estimatedReadyDate: {type: GraphQLString},totalCubicUomId: {type: GraphQLString},cartons: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderDeliverySchedule?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}skidsPallets=${args.skidsPallets}unitsPieces=${args.unitsPieces}statusId=${args.statusId}totalWeight=${args.totalWeight}totalCubicSize=${args.totalCubicSize}totalWeightUomId=${args.totalWeightUomId}estimatedReadyDate=${args.estimatedReadyDate}totalCubicUomId=${args.totalCubicUomId}cartons=${args.cartons}`, null, req);
  }
};
export {updateOrderDeliverySchedule};


const updateOrderHeader = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderHeader method',
  args:{orderId: {type: GraphQLString},invoicePerShipment: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},orderTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},isViewed: {type: GraphQLString},visitId: {type: GraphQLString},productStoreId: {type: GraphQLString},remainingSubTotal: {type: GraphQLFloat},orderName: {type: GraphQLString},webSiteId: {type: GraphQLString},isRushOrder: {type: GraphQLString},entryDate: {type: GraphQLString},grandTotal: {type: GraphQLFloat},autoOrderShoppingListId: {type: GraphQLString},externalId: {type: GraphQLString},priority: {type: GraphQLString},transactionId: {type: GraphQLString},firstAttemptOrderId: {type: GraphQLString},originFacilityId: {type: GraphQLString},statusId: {type: GraphQLString},createdBy: {type: GraphQLString},currencyUom: {type: GraphQLString},syncStatusId: {type: GraphQLString},pickSheetPrintedDate: {type: GraphQLString},needsInventoryIssuance: {type: GraphQLString},orderDate: {type: GraphQLString},internalCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderHeader?orderId=${args.orderId}invoicePerShipment=${args.invoicePerShipment}salesChannelEnumId=${args.salesChannelEnumId}orderTypeId=${args.orderTypeId}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}isViewed=${args.isViewed}visitId=${args.visitId}productStoreId=${args.productStoreId}remainingSubTotal=${args.remainingSubTotal}orderName=${args.orderName}webSiteId=${args.webSiteId}isRushOrder=${args.isRushOrder}entryDate=${args.entryDate}grandTotal=${args.grandTotal}autoOrderShoppingListId=${args.autoOrderShoppingListId}externalId=${args.externalId}priority=${args.priority}transactionId=${args.transactionId}firstAttemptOrderId=${args.firstAttemptOrderId}originFacilityId=${args.originFacilityId}statusId=${args.statusId}createdBy=${args.createdBy}currencyUom=${args.currencyUom}syncStatusId=${args.syncStatusId}pickSheetPrintedDate=${args.pickSheetPrintedDate}needsInventoryIssuance=${args.needsInventoryIssuance}orderDate=${args.orderDate}internalCode=${args.internalCode}`, null, req);
  }
};
export {updateOrderHeader};


const updateOrderItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemAttribute method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderItemAttribute?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateOrderItemAttribute};


const updateOrderItemShipGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemShipGroup method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},facilityId: {type: GraphQLString},giftMessage: {type: GraphQLString},shippingInstructions: {type: GraphQLString},maySplit: {type: GraphQLString},shipByDate: {type: GraphQLString},estimatedDeliveryDate: {type: GraphQLString},vendorPartyId: {type: GraphQLString},contactMechId: {type: GraphQLString},telecomContactMechId: {type: GraphQLString},shipAfterDate: {type: GraphQLString},shipmentMethod: {type: GraphQLString},carrierPartyId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},isGift: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},oldContactMechId: {type: GraphQLString},supplierPartyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},trackingNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderItemShipGroup?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}facilityId=${args.facilityId}giftMessage=${args.giftMessage}shippingInstructions=${args.shippingInstructions}maySplit=${args.maySplit}shipByDate=${args.shipByDate}estimatedDeliveryDate=${args.estimatedDeliveryDate}vendorPartyId=${args.vendorPartyId}contactMechId=${args.contactMechId}telecomContactMechId=${args.telecomContactMechId}shipAfterDate=${args.shipAfterDate}shipmentMethod=${args.shipmentMethod}carrierPartyId=${args.carrierPartyId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}carrierRoleTypeId=${args.carrierRoleTypeId}isGift=${args.isGift}estimatedShipDate=${args.estimatedShipDate}oldContactMechId=${args.oldContactMechId}supplierPartyId=${args.supplierPartyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}trackingNumber=${args.trackingNumber}`, null, req);
  }
};
export {updateOrderItemShipGroup};


const updateOrderItemShipGroupAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItemShipGroupAssoc method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},totalQuantity: {type: GraphQLFloat},orderId: {type: GraphQLString},rowCount: {type: GraphQLInt},rowNumber: {type: GraphQLInt},shipGroupSeqId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderItemShipGroupAssoc?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}totalQuantity=${args.totalQuantity}orderId=${args.orderId}rowCount=${args.rowCount}rowNumber=${args.rowNumber}shipGroupSeqId=${args.shipGroupSeqId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {updateOrderItemShipGroupAssoc};


const updateOrderItems = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderItems method',
  args:{orderId: {type: GraphQLString},itemPriceMap: {type: GraphQLString},overridePriceMap: {type: GraphQLString},itemQtyMap: {type: GraphQLString},itemReasonMap: {type: GraphQLString},itemAttributesMap: {type: GraphQLString},itemDeliveryDateMap: {type: GraphQLString},itemCommentMap: {type: GraphQLString},orderTypeId: {type: GraphQLString},calcTax: {type: GraphQLBoolean},supplierPartyId: {type: GraphQLString},itemDescriptionMap: {type: GraphQLString},itemShipDateMap: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderItems?orderId=${args.orderId}itemPriceMap=${args.itemPriceMap}overridePriceMap=${args.overridePriceMap}itemQtyMap=${args.itemQtyMap}itemReasonMap=${args.itemReasonMap}itemAttributesMap=${args.itemAttributesMap}itemDeliveryDateMap=${args.itemDeliveryDateMap}itemCommentMap=${args.itemCommentMap}orderTypeId=${args.orderTypeId}calcTax=${args.calcTax}supplierPartyId=${args.supplierPartyId}itemDescriptionMap=${args.itemDescriptionMap}itemShipDateMap=${args.itemShipDateMap}`, null, req);
  }
};
export {updateOrderItems};


const updateOrderNote = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderNote method',
  args:{orderId: {type: GraphQLString},internalNote: {type: GraphQLString},noteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderNote?orderId=${args.orderId}internalNote=${args.internalNote}noteId=${args.noteId}`, null, req);
  }
};
export {updateOrderNote};


const updateOrderPaymentPreference = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderPaymentPreference method',
  args:{orderPaymentPreferenceId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},track2: {type: GraphQLString},orderId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},manualRefNum: {type: GraphQLString},swipedFlag: {type: GraphQLString},manualAuthCode: {type: GraphQLString},securityCode: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},checkOutPaymentId: {type: GraphQLString},processAttempt: {type: GraphQLInt},needsNsfRetry: {type: GraphQLString},finAccountId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},billingPostalCode: {type: GraphQLString},overflowFlag: {type: GraphQLString},productPricePurposeId: {type: GraphQLString},maxAmount: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},presentFlag: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderPaymentPreference?orderPaymentPreferenceId=${args.orderPaymentPreferenceId}orderItemSeqId=${args.orderItemSeqId}track2=${args.track2}orderId=${args.orderId}lastModifiedDate=${args.lastModifiedDate}manualRefNum=${args.manualRefNum}swipedFlag=${args.swipedFlag}manualAuthCode=${args.manualAuthCode}securityCode=${args.securityCode}paymentMethodTypeId=${args.paymentMethodTypeId}shipGroupSeqId=${args.shipGroupSeqId}checkOutPaymentId=${args.checkOutPaymentId}processAttempt=${args.processAttempt}needsNsfRetry=${args.needsNsfRetry}finAccountId=${args.finAccountId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}statusId=${args.statusId}paymentMethodId=${args.paymentMethodId}billingPostalCode=${args.billingPostalCode}overflowFlag=${args.overflowFlag}productPricePurposeId=${args.productPricePurposeId}maxAmount=${args.maxAmount}createdByUserLogin=${args.createdByUserLogin}presentFlag=${args.presentFlag}`, null, req);
  }
};
export {updateOrderPaymentPreference};


const updateOrderShipment = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderShipment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderShipment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipmentId=${args.shipmentId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}quantity=${args.quantity}`, null, req);
  }
};
export {updateOrderShipment};


const updateOrderStatusFromReceipt = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderStatusFromReceipt method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderStatusFromReceipt?orderId=${args.orderId}`, null, req);
  }
};
export {updateOrderStatusFromReceipt};


const updateOrderTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz updateOrderTerm method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},termTypeId: {type: GraphQLString},textValue: {type: GraphQLString},termDays: {type: GraphQLInt},description: {type: GraphQLString},uomId: {type: GraphQLString},termValue: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateOrderTerm?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}termTypeId=${args.termTypeId}textValue=${args.textValue}termDays=${args.termDays}description=${args.description}uomId=${args.uomId}termValue=${args.termValue}`, null, req);
  }
};
export {updateOrderTerm};


const updateProductOrderItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductOrderItem method',
  args:{orderItemSeqId: {type: GraphQLString},engagementItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},engagementId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateProductOrderItem?orderItemSeqId=${args.orderItemSeqId}engagementItemSeqId=${args.engagementItemSeqId}orderId=${args.orderId}engagementId=${args.engagementId}productId=${args.productId}`, null, req);
  }
};
export {updateProductOrderItem};


const updateQuoteTerm = {
  type: ResponseType,
  description: 'mutation for ofbiz updateQuoteTerm method',
  args:{quoteItemSeqId: {type: GraphQLString},termTypeId: {type: GraphQLString},quoteId: {type: GraphQLString},textValue: {type: GraphQLString},termDays: {type: GraphQLInt},description: {type: GraphQLString},uomId: {type: GraphQLString},termValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateQuoteTerm?quoteItemSeqId=${args.quoteItemSeqId}termTypeId=${args.termTypeId}quoteId=${args.quoteId}textValue=${args.textValue}termDays=${args.termDays}description=${args.description}uomId=${args.uomId}termValue=${args.termValue}`, null, req);
  }
};
export {updateQuoteTerm};


const updateSalesOrderItemFact = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSalesOrderItemFact method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateSalesOrderItemFact?`, null, req);
  }
};
export {updateSalesOrderItemFact};


const updateShipGroupShipInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz updateShipGroupShipInfo method',
  args:{contactMechId: {type: GraphQLString},shipmentMethod: {type: GraphQLString},orderId: {type: GraphQLString},oldContactMechId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateShipGroupShipInfo?contactMechId=${args.contactMechId}shipmentMethod=${args.shipmentMethod}orderId=${args.orderId}oldContactMechId=${args.oldContactMechId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {updateShipGroupShipInfo};


const updateShippingMethodAndCharges = {
  type: ResponseType,
  description: 'mutation for ofbiz updateShippingMethodAndCharges method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},oldContactMechId: {type: GraphQLString},shippingAmount: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},shipmentMethodAndAmount: {type: GraphQLString},orderAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateShippingMethodAndCharges?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}orderId=${args.orderId}shipmentId=${args.shipmentId}oldContactMechId=${args.oldContactMechId}shippingAmount=${args.shippingAmount}shipGroupSeqId=${args.shipGroupSeqId}shipmentMethodAndAmount=${args.shipmentMethodAndAmount}orderAdjustmentId=${args.orderAdjustmentId}`, null, req);
  }
};
export {updateShippingMethodAndCharges};


const updateShoppingListQuantitiesFromOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz updateShoppingListQuantitiesFromOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateShoppingListQuantitiesFromOrder?orderId=${args.orderId}`, null, req);
  }
};
export {updateShoppingListQuantitiesFromOrder};


const updateTrackingNumber = {
  type: ResponseType,
  description: 'mutation for ofbiz updateTrackingNumber method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},trackingNumber: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/orders/updateTrackingNumber?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}trackingNumber=${args.trackingNumber}`, null, req);
  }
};
export {updateTrackingNumber};
