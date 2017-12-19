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


const addOrderShipmentToShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz addOrderShipmentToShipment method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/addOrderShipmentToShipment?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}orderId=${args.orderId}shipmentId=${args.shipmentId}shipGroupSeqId=${args.shipGroupSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {addOrderShipmentToShipment};


const addShipmentContentToPackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz addShipmentContentToPackage method',
  args:{quantity: {type: GraphQLFloat},shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},subProductQuantity: {type: GraphQLFloat},subProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/addShipmentContentToPackage?quantity=${args.quantity}shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}subProductQuantity=${args.subProductQuantity}subProductId=${args.subProductId}`, null, req);
  }
};
export {addShipmentContentToPackage};


const balanceItemIssuancesForShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz balanceItemIssuancesForShipment method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/balanceItemIssuancesForShipment?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {balanceItemIssuancesForShipment};


const calcPackSessionAdditionalShippingCharge = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcPackSessionAdditionalShippingCharge method',
  args:{carrierPartyId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},packingSession: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},weightUomId: {type: GraphQLString},packageWeights: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/calcPackSessionAdditionalShippingCharge?carrierPartyId=${args.carrierPartyId}shippingContactMechId=${args.shippingContactMechId}carrierRoleTypeId=${args.carrierRoleTypeId}productStoreId=${args.productStoreId}packingSession=${args.packingSession}shipmentMethodTypeId=${args.shipmentMethodTypeId}weightUomId=${args.weightUomId}packageWeights=${args.packageWeights}`, null, req);
  }
};
export {calcPackSessionAdditionalShippingCharge};


const calcShipmentCostEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcShipmentCostEstimate method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},productStoreShipMethId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},shippingCountryCode: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},serviceConfigProps: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},shippingOriginContactMechId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/calcShipmentCostEstimate?carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}shippableItemInfo=${args.shippableItemInfo}shippableWeight=${args.shippableWeight}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}shippableQuantity=${args.shippableQuantity}shippableTotal=${args.shippableTotal}productStoreShipMethId=${args.productStoreShipMethId}shippingContactMechId=${args.shippingContactMechId}shippingCountryCode=${args.shippingCountryCode}shipmentCustomMethodId=${args.shipmentCustomMethodId}serviceConfigProps=${args.serviceConfigProps}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}shippingOriginContactMechId=${args.shippingOriginContactMechId}shippingPostalCode=${args.shippingPostalCode}initialEstimateAmt=${args.initialEstimateAmt}partyId=${args.partyId}`, null, req);
  }
};
export {calcShipmentCostEstimate};


const calcShipmentEstimateInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcShipmentEstimateInterface method',
  args:{carrierPartyId: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},shippableWeight: {type: GraphQLFloat},productStoreId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},shippableQuantity: {type: GraphQLFloat},shippableTotal: {type: GraphQLFloat},productStoreShipMethId: {type: GraphQLString},shippingContactMechId: {type: GraphQLString},shippingCountryCode: {type: GraphQLString},shipmentCustomMethodId: {type: GraphQLString},serviceConfigProps: {type: GraphQLString},shipmentGatewayConfigId: {type: GraphQLString},shippingOriginContactMechId: {type: GraphQLString},shippingPostalCode: {type: GraphQLString},initialEstimateAmt: {type: GraphQLFloat},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/calcShipmentEstimateInterface?carrierPartyId=${args.carrierPartyId}carrierRoleTypeId=${args.carrierRoleTypeId}shippableItemInfo=${args.shippableItemInfo}shippableWeight=${args.shippableWeight}productStoreId=${args.productStoreId}shipmentMethodTypeId=${args.shipmentMethodTypeId}shippableQuantity=${args.shippableQuantity}shippableTotal=${args.shippableTotal}productStoreShipMethId=${args.productStoreShipMethId}shippingContactMechId=${args.shippingContactMechId}shippingCountryCode=${args.shippingCountryCode}shipmentCustomMethodId=${args.shipmentCustomMethodId}serviceConfigProps=${args.serviceConfigProps}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}shippingOriginContactMechId=${args.shippingOriginContactMechId}shippingPostalCode=${args.shippingPostalCode}initialEstimateAmt=${args.initialEstimateAmt}partyId=${args.partyId}`, null, req);
  }
};
export {calcShipmentEstimateInterface};


const cancelAllRows = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelAllRows method',
  args:{verifyPickSession: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/cancelAllRows?verifyPickSession=${args.verifyPickSession}`, null, req);
  }
};
export {cancelAllRows};


const cancelOrderItemIssuanceFromSalesShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelOrderItemIssuanceFromSalesShipment method',
  args:{itemIssuanceId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/cancelOrderItemIssuanceFromSalesShipment?itemIssuanceId=${args.itemIssuanceId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {cancelOrderItemIssuanceFromSalesShipment};


const cancelReceivedItems = {
  type: GraphQLString,
  description: 'mutation for ofbiz cancelReceivedItems method',
  args:{receiptId: {type: GraphQLString},facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/cancelReceivedItems?receiptId=${args.receiptId}facilityId=${args.facilityId}`, null, req);
  }
};
export {cancelReceivedItems};


const checkCancelItemIssuanceAndOrderShipmentFromShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkCancelItemIssuanceAndOrderShipmentFromShipment method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/checkCancelItemIssuanceAndOrderShipmentFromShipment?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {checkCancelItemIssuanceAndOrderShipmentFromShipment};


const clearLastPackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearLastPackage method',
  args:{packingSession: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/clearLastPackage?packingSession=${args.packingSession}`, null, req);
  }
};
export {clearLastPackage};


const clearPackAll = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearPackAll method',
  args:{packingSession: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/clearPackAll?packingSession=${args.packingSession}`, null, req);
  }
};
export {clearPackAll};


const clearPackLine = {
  type: GraphQLString,
  description: 'mutation for ofbiz clearPackLine method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},productId: {type: GraphQLString},orderId: {type: GraphQLString},packageSeqId: {type: GraphQLInt},packingSession: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/clearPackLine?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}productId=${args.productId}orderId=${args.orderId}packageSeqId=${args.packageSeqId}packingSession=${args.packingSession}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {clearPackLine};


const completePack = {
  type: GraphQLString,
  description: 'mutation for ofbiz completePack method',
  args:{orderId: {type: GraphQLString},packingSession: {type: GraphQLString},additionalShippingCharge: {type: GraphQLFloat},shipmentId: {type: GraphQLString},dimensionUomId: {type: GraphQLString},weightUomId: {type: GraphQLString},invoiceId: {type: GraphQLString},boxTypes: {type: GraphQLString},pickerPartyId: {type: GraphQLString},forceComplete: {type: GraphQLBoolean},handlingInstructions: {type: GraphQLString},packageWeights: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/completePack?orderId=${args.orderId}packingSession=${args.packingSession}additionalShippingCharge=${args.additionalShippingCharge}shipmentId=${args.shipmentId}dimensionUomId=${args.dimensionUomId}weightUomId=${args.weightUomId}invoiceId=${args.invoiceId}boxTypes=${args.boxTypes}pickerPartyId=${args.pickerPartyId}forceComplete=${args.forceComplete}handlingInstructions=${args.handlingInstructions}packageWeights=${args.packageWeights}`, null, req);
  }
};
export {completePack};


const completePackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz completePackage method',
  args:{weightPackageSession: {type: GraphQLString},orderId: {type: GraphQLString},invoiceId: {type: GraphQLString},newEstimatedShippingCost: {type: GraphQLFloat},facilityId: {type: GraphQLString},shipmentId: {type: GraphQLString},dimensionUomId: {type: GraphQLString},weightUomId: {type: GraphQLString},estimatedShippingCost: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/completePackage?weightPackageSession=${args.weightPackageSession}orderId=${args.orderId}invoiceId=${args.invoiceId}newEstimatedShippingCost=${args.newEstimatedShippingCost}facilityId=${args.facilityId}shipmentId=${args.shipmentId}dimensionUomId=${args.dimensionUomId}weightUomId=${args.weightUomId}estimatedShippingCost=${args.estimatedShippingCost}`, null, req);
  }
};
export {completePackage};


const completeShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz completeShipment method',
  args:{weightPackageSession: {type: GraphQLString},orderId: {type: GraphQLString},facilityId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/completeShipment?weightPackageSession=${args.weightPackageSession}orderId=${args.orderId}facilityId=${args.facilityId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {completeShipment};


const completeVerifiedPick = {
  type: GraphQLString,
  description: 'mutation for ofbiz completeVerifiedPick method',
  args:{orderId: {type: GraphQLString},verifyPickSession: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},facilityId: {type: GraphQLString},shipmentId: {type: GraphQLString},pickerPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/completeVerifiedPick?orderId=${args.orderId}verifyPickSession=${args.verifyPickSession}shipGroupSeqId=${args.shipGroupSeqId}facilityId=${args.facilityId}shipmentId=${args.shipmentId}pickerPartyId=${args.pickerPartyId}`, null, req);
  }
};
export {completeVerifiedPick};


const createCarrierShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCarrierShipmentBoxType method',
  args:{partyId: {type: GraphQLString},shipmentBoxTypeId: {type: GraphQLString},packagingTypeCode: {type: GraphQLString},oversizeCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createCarrierShipmentBoxType?partyId=${args.partyId}shipmentBoxTypeId=${args.shipmentBoxTypeId}packagingTypeCode=${args.packagingTypeCode}oversizeCode=${args.oversizeCode}`, null, req);
  }
};
export {createCarrierShipmentBoxType};


const createCarrierShipmentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCarrierShipmentMethod method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},sequenceNumber: {type: GraphQLInt},carrierServiceCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createCarrierShipmentMethod?roleTypeId=${args.roleTypeId}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}sequenceNumber=${args.sequenceNumber}carrierServiceCode=${args.carrierServiceCode}`, null, req);
  }
};
export {createCarrierShipmentMethod};


const createDelivery = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDelivery method',
  args:{originFacilityId: {type: GraphQLString},destFacilityId: {type: GraphQLString},actualArrivalDate: {type: GraphQLString},deliveryId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},fuelUsed: {type: GraphQLFloat},actualStartDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},startMileage: {type: GraphQLFloat},estimatedArrivalDate: {type: GraphQLString},endMileage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createDelivery?originFacilityId=${args.originFacilityId}destFacilityId=${args.destFacilityId}actualArrivalDate=${args.actualArrivalDate}deliveryId=${args.deliveryId}estimatedStartDate=${args.estimatedStartDate}fuelUsed=${args.fuelUsed}actualStartDate=${args.actualStartDate}fixedAssetId=${args.fixedAssetId}startMileage=${args.startMileage}estimatedArrivalDate=${args.estimatedArrivalDate}endMileage=${args.endMileage}`, null, req);
  }
};
export {createDelivery};


const createItemIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createItemIssuance method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},issuedDateTime: {type: GraphQLString},fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},issuedByUserLoginId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createItemIssuance?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}shipmentId=${args.shipmentId}issuedDateTime=${args.issuedDateTime}fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}issuedByUserLoginId=${args.issuedByUserLoginId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {createItemIssuance};


const createItemIssuanceRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createItemIssuanceRole method',
  args:{roleTypeId: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},shipmentId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createItemIssuanceRole?roleTypeId=${args.roleTypeId}itemIssuanceId=${args.itemIssuanceId}shipmentId=${args.shipmentId}partyId=${args.partyId}`, null, req);
  }
};
export {createItemIssuanceRole};


const createOrderShipmentPlan = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderShipmentPlan method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createOrderShipmentPlan?orderId=${args.orderId}`, null, req);
  }
};
export {createOrderShipmentPlan};


const createQuantityBreak = {
  type: GraphQLString,
  description: 'mutation for ofbiz createQuantityBreak method',
  args:{thruQuantity: {type: GraphQLFloat},quantityBreakTypeId: {type: GraphQLString},fromQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createQuantityBreak?thruQuantity=${args.thruQuantity}quantityBreakTypeId=${args.quantityBreakTypeId}fromQuantity=${args.fromQuantity}`, null, req);
  }
};
export {createQuantityBreak};


const createRejectionReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz createRejectionReason method',
  args:{rejectionId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createRejectionReason?rejectionId=${args.rejectionId}description=${args.description}`, null, req);
  }
};
export {createRejectionReason};


const createShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipment method',
  args:{partyIdFrom: {type: GraphQLString},latestCancelDate: {type: GraphQLString},estimatedReadyDate: {type: GraphQLString},estimatedArrivalWorkEffId: {type: GraphQLString},additionalShippingCharge: {type: GraphQLFloat},destinationTelecomNumberId: {type: GraphQLString},estimatedShipCost: {type: GraphQLFloat},estimatedShipWorkEffId: {type: GraphQLString},destinationFacilityId: {type: GraphQLString},addtlShippingChargeDesc: {type: GraphQLString},originContactMechId: {type: GraphQLString},primaryReturnId: {type: GraphQLString},originFacilityId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},destinationContactMechId: {type: GraphQLString},shipmentId: {type: GraphQLString},originTelecomNumberId: {type: GraphQLString},primaryOrderId: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},partyIdTo: {type: GraphQLString},shipmentTypeId: {type: GraphQLString},estimatedArrivalDate: {type: GraphQLString},picklistBinId: {type: GraphQLString},primaryShipGroupSeqId: {type: GraphQLString},handlingInstructions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipment?partyIdFrom=${args.partyIdFrom}latestCancelDate=${args.latestCancelDate}estimatedReadyDate=${args.estimatedReadyDate}estimatedArrivalWorkEffId=${args.estimatedArrivalWorkEffId}additionalShippingCharge=${args.additionalShippingCharge}destinationTelecomNumberId=${args.destinationTelecomNumberId}estimatedShipCost=${args.estimatedShipCost}estimatedShipWorkEffId=${args.estimatedShipWorkEffId}destinationFacilityId=${args.destinationFacilityId}addtlShippingChargeDesc=${args.addtlShippingChargeDesc}originContactMechId=${args.originContactMechId}primaryReturnId=${args.primaryReturnId}originFacilityId=${args.originFacilityId}currencyUomId=${args.currencyUomId}statusId=${args.statusId}destinationContactMechId=${args.destinationContactMechId}shipmentId=${args.shipmentId}originTelecomNumberId=${args.originTelecomNumberId}primaryOrderId=${args.primaryOrderId}estimatedShipDate=${args.estimatedShipDate}partyIdTo=${args.partyIdTo}shipmentTypeId=${args.shipmentTypeId}estimatedArrivalDate=${args.estimatedArrivalDate}picklistBinId=${args.picklistBinId}primaryShipGroupSeqId=${args.primaryShipGroupSeqId}handlingInstructions=${args.handlingInstructions}`, null, req);
  }
};
export {createShipment};


const createShipmentAndItemsForReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentAndItemsForReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentAndItemsForReturn?returnId=${args.returnId}`, null, req);
  }
};
export {createShipmentAndItemsForReturn};


const createShipmentAndItemsForVendorReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentAndItemsForVendorReturn method',
  args:{primaryReturnId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},latestCancelDate: {type: GraphQLString},estimatedReadyDate: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},estimatedArrivalWorkEffId: {type: GraphQLString},additionalShippingCharge: {type: GraphQLFloat},destinationTelecomNumberId: {type: GraphQLString},estimatedShipCost: {type: GraphQLFloat},createdByUserLogin: {type: GraphQLString},estimatedShipWorkEffId: {type: GraphQLString},destinationFacilityId: {type: GraphQLString},addtlShippingChargeDesc: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},originContactMechId: {type: GraphQLString},originFacilityId: {type: GraphQLString},currencyUomId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},destinationContactMechId: {type: GraphQLString},originTelecomNumberId: {type: GraphQLString},primaryOrderId: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},partyIdTo: {type: GraphQLString},shipmentTypeId: {type: GraphQLString},estimatedArrivalDate: {type: GraphQLString},picklistBinId: {type: GraphQLString},primaryShipGroupSeqId: {type: GraphQLString},handlingInstructions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentAndItemsForVendorReturn?primaryReturnId=${args.primaryReturnId}partyIdFrom=${args.partyIdFrom}latestCancelDate=${args.latestCancelDate}estimatedReadyDate=${args.estimatedReadyDate}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}estimatedArrivalWorkEffId=${args.estimatedArrivalWorkEffId}additionalShippingCharge=${args.additionalShippingCharge}destinationTelecomNumberId=${args.destinationTelecomNumberId}estimatedShipCost=${args.estimatedShipCost}createdByUserLogin=${args.createdByUserLogin}estimatedShipWorkEffId=${args.estimatedShipWorkEffId}destinationFacilityId=${args.destinationFacilityId}addtlShippingChargeDesc=${args.addtlShippingChargeDesc}lastModifiedDate=${args.lastModifiedDate}originContactMechId=${args.originContactMechId}originFacilityId=${args.originFacilityId}currencyUomId=${args.currencyUomId}createdDate=${args.createdDate}statusId=${args.statusId}destinationContactMechId=${args.destinationContactMechId}originTelecomNumberId=${args.originTelecomNumberId}primaryOrderId=${args.primaryOrderId}estimatedShipDate=${args.estimatedShipDate}partyIdTo=${args.partyIdTo}shipmentTypeId=${args.shipmentTypeId}estimatedArrivalDate=${args.estimatedArrivalDate}picklistBinId=${args.picklistBinId}primaryShipGroupSeqId=${args.primaryShipGroupSeqId}handlingInstructions=${args.handlingInstructions}`, null, req);
  }
};
export {createShipmentAndItemsForVendorReturn};


const createShipmentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentAttribute method',
  args:{shipmentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentAttribute?shipmentId=${args.shipmentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createShipmentAttribute};


const createShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentBoxType method',
  args:{boxLength: {type: GraphQLFloat},boxWeight: {type: GraphQLFloat},dimensionUomId: {type: GraphQLString},description: {type: GraphQLString},weightUomId: {type: GraphQLString},boxWidth: {type: GraphQLFloat},boxHeight: {type: GraphQLFloat},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentBoxType?boxLength=${args.boxLength}boxWeight=${args.boxWeight}dimensionUomId=${args.dimensionUomId}description=${args.description}weightUomId=${args.weightUomId}boxWidth=${args.boxWidth}boxHeight=${args.boxHeight}shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {createShipmentBoxType};


const createShipmentContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentContactMech method',
  args:{shipmentId: {type: GraphQLString},shipmentContactMechTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentContactMech?shipmentId=${args.shipmentId}shipmentContactMechTypeId=${args.shipmentContactMechTypeId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {createShipmentContactMech};


const createShipmentContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentContactMechType method',
  args:{description: {type: GraphQLString},shipmentContactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentContactMechType?description=${args.description}shipmentContactMechTypeId=${args.shipmentContactMechTypeId}`, null, req);
  }
};
export {createShipmentContactMechType};


const createShipmentCostEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentCostEstimate method',
  args:{productStoreShipMethId: {type: GraphQLString},quantityUnitPrice: {type: GraphQLFloat},quantityUomId: {type: GraphQLString},featurePercent: {type: GraphQLFloat},featurePrice: {type: GraphQLFloat},weightUnitPrice: {type: GraphQLFloat},oversizeUnit: {type: GraphQLFloat},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},oversizePrice: {type: GraphQLFloat},shipmentMethodTypeId: {type: GraphQLString},geoIdTo: {type: GraphQLString},orderPricePercent: {type: GraphQLFloat},orderItemFlatPrice: {type: GraphQLFloat},roleTypeId: {type: GraphQLString},shippingPricePercent: {type: GraphQLFloat},weightBreakId: {type: GraphQLString},quantityBreakId: {type: GraphQLString},priceBreakId: {type: GraphQLString},carrierPartyId: {type: GraphQLString},geoIdFrom: {type: GraphQLString},orderFlatPrice: {type: GraphQLFloat},carrierRoleTypeId: {type: GraphQLString},weightUomId: {type: GraphQLString},priceUnitPrice: {type: GraphQLFloat},shipmentCostEstimateId: {type: GraphQLString},priceUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentCostEstimate?productStoreShipMethId=${args.productStoreShipMethId}quantityUnitPrice=${args.quantityUnitPrice}quantityUomId=${args.quantityUomId}featurePercent=${args.featurePercent}featurePrice=${args.featurePrice}weightUnitPrice=${args.weightUnitPrice}oversizeUnit=${args.oversizeUnit}productStoreId=${args.productStoreId}partyId=${args.partyId}productFeatureGroupId=${args.productFeatureGroupId}oversizePrice=${args.oversizePrice}shipmentMethodTypeId=${args.shipmentMethodTypeId}geoIdTo=${args.geoIdTo}orderPricePercent=${args.orderPricePercent}orderItemFlatPrice=${args.orderItemFlatPrice}roleTypeId=${args.roleTypeId}shippingPricePercent=${args.shippingPricePercent}weightBreakId=${args.weightBreakId}quantityBreakId=${args.quantityBreakId}priceBreakId=${args.priceBreakId}carrierPartyId=${args.carrierPartyId}geoIdFrom=${args.geoIdFrom}orderFlatPrice=${args.orderFlatPrice}carrierRoleTypeId=${args.carrierRoleTypeId}weightUomId=${args.weightUomId}priceUnitPrice=${args.priceUnitPrice}shipmentCostEstimateId=${args.shipmentCostEstimateId}priceUomId=${args.priceUomId}`, null, req);
  }
};
export {createShipmentCostEstimate};


const createShipmentEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentEstimate method',
  args:{productStoreShipMethId: {type: GraphQLString},flatPercent: {type: GraphQLFloat},toGeo: {type: GraphQLString},pmax: {type: GraphQLFloat},wprice: {type: GraphQLFloat},wuom: {type: GraphQLString},qprice: {type: GraphQLFloat},wmin: {type: GraphQLFloat},featurePercent: {type: GraphQLFloat},featurePrice: {type: GraphQLFloat},fromGeo: {type: GraphQLString},pmin: {type: GraphQLFloat},puom: {type: GraphQLString},oversizeUnit: {type: GraphQLFloat},partyId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},oversizePrice: {type: GraphQLFloat},flatPrice: {type: GraphQLFloat},roleTypeId: {type: GraphQLString},shippingPricePercent: {type: GraphQLFloat},qmax: {type: GraphQLFloat},pprice: {type: GraphQLFloat},weightBreakId: {type: GraphQLString},quantityBreakId: {type: GraphQLString},priceBreakId: {type: GraphQLString},flatItemPrice: {type: GraphQLFloat},qmin: {type: GraphQLFloat},quom: {type: GraphQLString},wmax: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentEstimate?productStoreShipMethId=${args.productStoreShipMethId}flatPercent=${args.flatPercent}toGeo=${args.toGeo}pmax=${args.pmax}wprice=${args.wprice}wuom=${args.wuom}qprice=${args.qprice}wmin=${args.wmin}featurePercent=${args.featurePercent}featurePrice=${args.featurePrice}fromGeo=${args.fromGeo}pmin=${args.pmin}puom=${args.puom}oversizeUnit=${args.oversizeUnit}partyId=${args.partyId}productFeatureGroupId=${args.productFeatureGroupId}oversizePrice=${args.oversizePrice}flatPrice=${args.flatPrice}roleTypeId=${args.roleTypeId}shippingPricePercent=${args.shippingPricePercent}qmax=${args.qmax}pprice=${args.pprice}weightBreakId=${args.weightBreakId}quantityBreakId=${args.quantityBreakId}priceBreakId=${args.priceBreakId}flatItemPrice=${args.flatItemPrice}qmin=${args.qmin}quom=${args.quom}wmax=${args.wmax}`, null, req);
  }
};
export {createShipmentEstimate};


const createShipmentForReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentForReturn method',
  args:{returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentForReturn?returnId=${args.returnId}`, null, req);
  }
};
export {createShipmentForReturn};


const createShipmentItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentItem method',
  args:{shipmentId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},shipmentContentDescription: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentItem?shipmentId=${args.shipmentId}quantity=${args.quantity}productId=${args.productId}shipmentContentDescription=${args.shipmentContentDescription}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {createShipmentItem};


const createShipmentItemFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentItemFeature method',
  args:{shipmentId: {type: GraphQLString},productFeatureId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentItemFeature?shipmentId=${args.shipmentId}productFeatureId=${args.productFeatureId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {createShipmentItemFeature};


const createShipmentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentMethodType method',
  args:{shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentMethodType?shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {createShipmentMethodType};


const createShipmentPackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentPackage method',
  args:{shipmentId: {type: GraphQLString},boxLength: {type: GraphQLFloat},dimensionUomId: {type: GraphQLString},insuredValue: {type: GraphQLFloat},weight: {type: GraphQLFloat},weightUomId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},boxHeight: {type: GraphQLFloat},boxWidth: {type: GraphQLFloat},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentPackage?shipmentId=${args.shipmentId}boxLength=${args.boxLength}dimensionUomId=${args.dimensionUomId}insuredValue=${args.insuredValue}weight=${args.weight}weightUomId=${args.weightUomId}shipmentPackageSeqId=${args.shipmentPackageSeqId}boxHeight=${args.boxHeight}boxWidth=${args.boxWidth}shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {createShipmentPackage};


const createShipmentPackageContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentPackageContent method',
  args:{shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},subProductQuantity: {type: GraphQLFloat},subProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentPackageContent?shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}quantity=${args.quantity}subProductQuantity=${args.subProductQuantity}subProductId=${args.subProductId}`, null, req);
  }
};
export {createShipmentPackageContent};


const createShipmentPackageRouteSeg = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentPackageRouteSeg method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},labelIntlSignImage: {type: GraphQLString},trackingCode: {type: GraphQLString},boxNumber: {type: GraphQLString},packageServiceCost: {type: GraphQLFloat},packageOtherCost: {type: GraphQLFloat},labelImage: {type: GraphQLString},labelPrinted: {type: GraphQLString},currencyUomId: {type: GraphQLString},internationalInvoice: {type: GraphQLString},packageTransportCost: {type: GraphQLFloat},codAmount: {type: GraphQLFloat},insuredAmount: {type: GraphQLFloat},labelHtml: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentPackageRouteSeg?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}labelIntlSignImage=${args.labelIntlSignImage}trackingCode=${args.trackingCode}boxNumber=${args.boxNumber}packageServiceCost=${args.packageServiceCost}packageOtherCost=${args.packageOtherCost}labelImage=${args.labelImage}labelPrinted=${args.labelPrinted}currencyUomId=${args.currencyUomId}internationalInvoice=${args.internationalInvoice}packageTransportCost=${args.packageTransportCost}codAmount=${args.codAmount}insuredAmount=${args.insuredAmount}labelHtml=${args.labelHtml}`, null, req);
  }
};
export {createShipmentPackageRouteSeg};


const createShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentReceipt method',
  args:{orderItemSeqId: {type: GraphQLString},productId: {type: GraphQLString},orderId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},inventoryItemDetailSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},rejectionId: {type: GraphQLString},shipmentId: {type: GraphQLString},receivedByUserLoginId: {type: GraphQLString},returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},datetimeReceived: {type: GraphQLString},itemDescription: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentReceipt?orderItemSeqId=${args.orderItemSeqId}productId=${args.productId}orderId=${args.orderId}quantityAccepted=${args.quantityAccepted}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}quantityRejected=${args.quantityRejected}inventoryItemDetailSeqId=${args.inventoryItemDetailSeqId}inventoryItemId=${args.inventoryItemId}rejectionId=${args.rejectionId}shipmentId=${args.shipmentId}receivedByUserLoginId=${args.receivedByUserLoginId}returnId=${args.returnId}returnItemSeqId=${args.returnItemSeqId}datetimeReceived=${args.datetimeReceived}itemDescription=${args.itemDescription}`, null, req);
  }
};
export {createShipmentReceipt};


const createShipmentReceiptRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentReceiptRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentReceiptRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}receiptId=${args.receiptId}`, null, req);
  }
};
export {createShipmentReceiptRole};


const createShipmentRouteSegment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentRouteSegment method',
  args:{shipmentId: {type: GraphQLString},actualOtherCost: {type: GraphQLFloat},carrierDeliveryZone: {type: GraphQLString},thirdPartyPostalCode: {type: GraphQLString},destTelecomNumberId: {type: GraphQLString},carrierRestrictionCodes: {type: GraphQLString},trackingIdNumber: {type: GraphQLString},deliveryId: {type: GraphQLString},carrierServiceStatusId: {type: GraphQLString},actualStartDate: {type: GraphQLString},trackingDigest: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},actualCost: {type: GraphQLFloat},upsHighValueReport: {type: GraphQLString},actualArrivalDate: {type: GraphQLString},actualServiceCost: {type: GraphQLFloat},originContactMechId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},carrierRestrictionDesc: {type: GraphQLString},actualTransportCost: {type: GraphQLFloat},billingWeightUomId: {type: GraphQLString},homeDeliveryDate: {type: GraphQLString},originFacilityId: {type: GraphQLString},shipmentRouteSegmentId: {type: GraphQLString},destFacilityId: {type: GraphQLString},carrierPartyId: {type: GraphQLString},lastUpdatedDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},billingWeight: {type: GraphQLFloat},originTelecomNumberId: {type: GraphQLString},thirdPartyCountryGeoCode: {type: GraphQLString},destContactMechId: {type: GraphQLString},estimatedArrivalDate: {type: GraphQLString},homeDeliveryType: {type: GraphQLString},thirdPartyAccountNumber: {type: GraphQLString},updatedByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentRouteSegment?shipmentId=${args.shipmentId}actualOtherCost=${args.actualOtherCost}carrierDeliveryZone=${args.carrierDeliveryZone}thirdPartyPostalCode=${args.thirdPartyPostalCode}destTelecomNumberId=${args.destTelecomNumberId}carrierRestrictionCodes=${args.carrierRestrictionCodes}trackingIdNumber=${args.trackingIdNumber}deliveryId=${args.deliveryId}carrierServiceStatusId=${args.carrierServiceStatusId}actualStartDate=${args.actualStartDate}trackingDigest=${args.trackingDigest}shipmentMethodTypeId=${args.shipmentMethodTypeId}actualCost=${args.actualCost}upsHighValueReport=${args.upsHighValueReport}actualArrivalDate=${args.actualArrivalDate}actualServiceCost=${args.actualServiceCost}originContactMechId=${args.originContactMechId}estimatedStartDate=${args.estimatedStartDate}carrierRestrictionDesc=${args.carrierRestrictionDesc}actualTransportCost=${args.actualTransportCost}billingWeightUomId=${args.billingWeightUomId}homeDeliveryDate=${args.homeDeliveryDate}originFacilityId=${args.originFacilityId}shipmentRouteSegmentId=${args.shipmentRouteSegmentId}destFacilityId=${args.destFacilityId}carrierPartyId=${args.carrierPartyId}lastUpdatedDate=${args.lastUpdatedDate}currencyUomId=${args.currencyUomId}billingWeight=${args.billingWeight}originTelecomNumberId=${args.originTelecomNumberId}thirdPartyCountryGeoCode=${args.thirdPartyCountryGeoCode}destContactMechId=${args.destContactMechId}estimatedArrivalDate=${args.estimatedArrivalDate}homeDeliveryType=${args.homeDeliveryType}thirdPartyAccountNumber=${args.thirdPartyAccountNumber}updatedByUserLoginId=${args.updatedByUserLoginId}`, null, req);
  }
};
export {createShipmentRouteSegment};


const createShipmentStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentStatus method',
  args:{statusId: {type: GraphQLString},shipmentId: {type: GraphQLString},statusDate: {type: GraphQLString},changeByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentStatus?statusId=${args.statusId}shipmentId=${args.shipmentId}statusDate=${args.statusDate}changeByUserLoginId=${args.changeByUserLoginId}`, null, req);
  }
};
export {createShipmentStatus};


const createShipmentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentTypeAttr method',
  args:{shipmentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShipmentTypeAttr?shipmentTypeId=${args.shipmentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createShipmentTypeAttr};


const createShippingDocument = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShippingDocument method',
  args:{documentId: {type: GraphQLString},shipmentId: {type: GraphQLString},description: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/createShippingDocument?documentId=${args.documentId}shipmentId=${args.shipmentId}description=${args.description}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {createShippingDocument};


const deleteCarrierShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCarrierShipmentBoxType method',
  args:{partyId: {type: GraphQLString},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteCarrierShipmentBoxType?partyId=${args.partyId}shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {deleteCarrierShipmentBoxType};


const deleteCarrierShipmentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCarrierShipmentMethod method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteCarrierShipmentMethod?roleTypeId=${args.roleTypeId}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {deleteCarrierShipmentMethod};


const deleteDelivery = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDelivery method',
  args:{deliveryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteDelivery?deliveryId=${args.deliveryId}`, null, req);
  }
};
export {deleteDelivery};


const deleteItemIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteItemIssuance method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteItemIssuance?itemIssuanceId=${args.itemIssuanceId}`, null, req);
  }
};
export {deleteItemIssuance};


const deleteItemIssuanceRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteItemIssuanceRole method',
  args:{roleTypeId: {type: GraphQLString},itemIssuanceId: {type: GraphQLString},shipmentId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteItemIssuanceRole?roleTypeId=${args.roleTypeId}itemIssuanceId=${args.itemIssuanceId}shipmentId=${args.shipmentId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteItemIssuanceRole};


const deletePackedLine = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePackedLine method',
  args:{weightPackageSession: {type: GraphQLString},weightPackageSeqId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deletePackedLine?weightPackageSession=${args.weightPackageSession}weightPackageSeqId=${args.weightPackageSeqId}`, null, req);
  }
};
export {deletePackedLine};


const deleteQuantityBreak = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuantityBreak method',
  args:{quantityBreakId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteQuantityBreak?quantityBreakId=${args.quantityBreakId}`, null, req);
  }
};
export {deleteQuantityBreak};


const deleteRejectionReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRejectionReason method',
  args:{rejectionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteRejectionReason?rejectionId=${args.rejectionId}`, null, req);
  }
};
export {deleteRejectionReason};


const deleteShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipment method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipment?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {deleteShipment};


const deleteShipmentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentAttribute method',
  args:{shipmentId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentAttribute?shipmentId=${args.shipmentId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteShipmentAttribute};


const deleteShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentBoxType method',
  args:{shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentBoxType?shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {deleteShipmentBoxType};


const deleteShipmentContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentContactMech method',
  args:{shipmentId: {type: GraphQLString},shipmentContactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentContactMech?shipmentId=${args.shipmentId}shipmentContactMechTypeId=${args.shipmentContactMechTypeId}`, null, req);
  }
};
export {deleteShipmentContactMech};


const deleteShipmentContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentContactMechType method',
  args:{shipmentContactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentContactMechType?shipmentContactMechTypeId=${args.shipmentContactMechTypeId}`, null, req);
  }
};
export {deleteShipmentContactMechType};


const deleteShipmentCostEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentCostEstimate method',
  args:{shipmentCostEstimateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentCostEstimate?shipmentCostEstimateId=${args.shipmentCostEstimateId}`, null, req);
  }
};
export {deleteShipmentCostEstimate};


const deleteShipmentItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentItem method',
  args:{shipmentId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentItem?shipmentId=${args.shipmentId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {deleteShipmentItem};


const deleteShipmentItemFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentItemFeature method',
  args:{shipmentId: {type: GraphQLString},productFeatureId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentItemFeature?shipmentId=${args.shipmentId}productFeatureId=${args.productFeatureId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {deleteShipmentItemFeature};


const deleteShipmentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentMethodType method',
  args:{shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentMethodType?shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {deleteShipmentMethodType};


const deleteShipmentPackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentPackage method',
  args:{shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentPackage?shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}`, null, req);
  }
};
export {deleteShipmentPackage};


const deleteShipmentPackageContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentPackageContent method',
  args:{shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentPackageContent?shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {deleteShipmentPackageContent};


const deleteShipmentPackageRouteSeg = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentPackageRouteSeg method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentPackageRouteSeg?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}`, null, req);
  }
};
export {deleteShipmentPackageRouteSeg};


const deleteShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentReceipt method',
  args:{receiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentReceipt?receiptId=${args.receiptId}`, null, req);
  }
};
export {deleteShipmentReceipt};


const deleteShipmentRouteSegment = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentRouteSegment method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentRouteSegment?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {deleteShipmentRouteSegment};


const deleteShipmentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentTypeAttr method',
  args:{shipmentTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShipmentTypeAttr?shipmentTypeId=${args.shipmentTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteShipmentTypeAttr};


const deleteShippingDocument = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShippingDocument method',
  args:{documentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/deleteShippingDocument?documentId=${args.documentId}`, null, req);
  }
};
export {deleteShippingDocument};


const duplicateShipmentRouteSegment = {
  type: GraphQLString,
  description: 'mutation for ofbiz duplicateShipmentRouteSegment method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString},actualOtherCost: {type: GraphQLFloat},carrierDeliveryZone: {type: GraphQLString},thirdPartyPostalCode: {type: GraphQLString},destTelecomNumberId: {type: GraphQLString},carrierRestrictionCodes: {type: GraphQLString},trackingIdNumber: {type: GraphQLString},deliveryId: {type: GraphQLString},carrierServiceStatusId: {type: GraphQLString},actualStartDate: {type: GraphQLString},trackingDigest: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},actualCost: {type: GraphQLFloat},upsHighValueReport: {type: GraphQLString},actualArrivalDate: {type: GraphQLString},actualServiceCost: {type: GraphQLFloat},originContactMechId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},carrierRestrictionDesc: {type: GraphQLString},actualTransportCost: {type: GraphQLFloat},billingWeightUomId: {type: GraphQLString},homeDeliveryDate: {type: GraphQLString},originFacilityId: {type: GraphQLString},destFacilityId: {type: GraphQLString},carrierPartyId: {type: GraphQLString},lastUpdatedDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},billingWeight: {type: GraphQLFloat},originTelecomNumberId: {type: GraphQLString},thirdPartyCountryGeoCode: {type: GraphQLString},destContactMechId: {type: GraphQLString},estimatedArrivalDate: {type: GraphQLString},homeDeliveryType: {type: GraphQLString},thirdPartyAccountNumber: {type: GraphQLString},updatedByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/duplicateShipmentRouteSegment?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}actualOtherCost=${args.actualOtherCost}carrierDeliveryZone=${args.carrierDeliveryZone}thirdPartyPostalCode=${args.thirdPartyPostalCode}destTelecomNumberId=${args.destTelecomNumberId}carrierRestrictionCodes=${args.carrierRestrictionCodes}trackingIdNumber=${args.trackingIdNumber}deliveryId=${args.deliveryId}carrierServiceStatusId=${args.carrierServiceStatusId}actualStartDate=${args.actualStartDate}trackingDigest=${args.trackingDigest}shipmentMethodTypeId=${args.shipmentMethodTypeId}actualCost=${args.actualCost}upsHighValueReport=${args.upsHighValueReport}actualArrivalDate=${args.actualArrivalDate}actualServiceCost=${args.actualServiceCost}originContactMechId=${args.originContactMechId}estimatedStartDate=${args.estimatedStartDate}carrierRestrictionDesc=${args.carrierRestrictionDesc}actualTransportCost=${args.actualTransportCost}billingWeightUomId=${args.billingWeightUomId}homeDeliveryDate=${args.homeDeliveryDate}originFacilityId=${args.originFacilityId}destFacilityId=${args.destFacilityId}carrierPartyId=${args.carrierPartyId}lastUpdatedDate=${args.lastUpdatedDate}currencyUomId=${args.currencyUomId}billingWeight=${args.billingWeight}originTelecomNumberId=${args.originTelecomNumberId}thirdPartyCountryGeoCode=${args.thirdPartyCountryGeoCode}destContactMechId=${args.destContactMechId}estimatedArrivalDate=${args.estimatedArrivalDate}homeDeliveryType=${args.homeDeliveryType}thirdPartyAccountNumber=${args.thirdPartyAccountNumber}updatedByUserLoginId=${args.updatedByUserLoginId}`, null, req);
  }
};
export {duplicateShipmentRouteSegment};


const getQuantityForShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz getQuantityForShipment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/getQuantityForShipment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}`, null, req);
  }
};
export {getQuantityForShipment};


const getShipmentPackageValueFromOrders = {
  type: GraphQLString,
  description: 'mutation for ofbiz getShipmentPackageValueFromOrders method',
  args:{currencyUomId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/getShipmentPackageValueFromOrders?currencyUomId=${args.currencyUomId}shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}`, null, req);
  }
};
export {getShipmentPackageValueFromOrders};


const interfaceShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz interfaceShipmentReceipt method',
  args:{inventoryItemId: {type: GraphQLString},productId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat},quantityRejected: {type: GraphQLFloat},orderItemSeqId: {type: GraphQLString},rejectionId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},receivedByUserLoginId: {type: GraphQLString},returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},datetimeReceived: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},itemDescription: {type: GraphQLString},inventoryItemDetailSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/interfaceShipmentReceipt?inventoryItemId=${args.inventoryItemId}productId=${args.productId}quantityAccepted=${args.quantityAccepted}quantityRejected=${args.quantityRejected}orderItemSeqId=${args.orderItemSeqId}rejectionId=${args.rejectionId}orderId=${args.orderId}shipmentId=${args.shipmentId}receivedByUserLoginId=${args.receivedByUserLoginId}returnId=${args.returnId}returnItemSeqId=${args.returnItemSeqId}shipmentPackageSeqId=${args.shipmentPackageSeqId}datetimeReceived=${args.datetimeReceived}shipmentItemSeqId=${args.shipmentItemSeqId}itemDescription=${args.itemDescription}inventoryItemDetailSeqId=${args.inventoryItemDetailSeqId}`, null, req);
  }
};
export {interfaceShipmentReceipt};


const interfaceShipmentReceiptRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz interfaceShipmentReceiptRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/interfaceShipmentReceiptRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}receiptId=${args.receiptId}`, null, req);
  }
};
export {interfaceShipmentReceiptRole};


const issueInventoryItemToFixedAssetMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueInventoryItemToFixedAssetMaint method',
  args:{inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/issueInventoryItemToFixedAssetMaint?inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}`, null, req);
  }
};
export {issueInventoryItemToFixedAssetMaint};


const issueInventoryItemToShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueInventoryItemToShipment method',
  args:{inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},shipmentId: {type: GraphQLString},totalIssuedQty: {type: GraphQLFloat},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/issueInventoryItemToShipment?inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}shipmentId=${args.shipmentId}totalIssuedQty=${args.totalIssuedQty}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {issueInventoryItemToShipment};


const issueOrderItemShipGrpInvResToShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueOrderItemShipGrpInvResToShipment method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/issueOrderItemShipGrpInvResToShipment?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}shipmentId=${args.shipmentId}shipGroupSeqId=${args.shipGroupSeqId}eventDate=${args.eventDate}`, null, req);
  }
};
export {issueOrderItemShipGrpInvResToShipment};


const issueOrderItemToShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueOrderItemToShipment method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/issueOrderItemToShipment?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}orderId=${args.orderId}shipmentId=${args.shipmentId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {issueOrderItemToShipment};


const issueOrderItemToShipmentAndReceiveAgainstPO = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueOrderItemToShipmentAndReceiveAgainstPO method',
  args:{orderItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},workEffortId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat},binNumber: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},priorityOrderItemSeqId: {type: GraphQLString},inventoryItemDetailSeqId: {type: GraphQLString},oldAvailableToPromise: {type: GraphQLFloat},physicalInventoryId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},itemDescription: {type: GraphQLString},partyId: {type: GraphQLString},containerId: {type: GraphQLString},locationSeqId: {type: GraphQLString},quantityOnHandDiff: {type: GraphQLFloat},serialNumber: {type: GraphQLInt},productId: {type: GraphQLString},uomId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},inventoryItemId: {type: GraphQLString},statusId: {type: GraphQLString},availableToPromiseDiff: {type: GraphQLFloat},fixedAssetId: {type: GraphQLString},softIdentifier: {type: GraphQLInt},description: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},currentInventoryItemId: {type: GraphQLString},accountingQuantityDiff: {type: GraphQLFloat},itemIssuanceId: {type: GraphQLString},datetimeManufactured: {type: GraphQLString},returnId: {type: GraphQLString},orderCurrencyUnitPrice: {type: GraphQLString},expireDate: {type: GraphQLString},oldQuantityOnHand: {type: GraphQLFloat},receiptId: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},lotId: {type: GraphQLString},accountingQuantityTotal: {type: GraphQLFloat},rejectionId: {type: GraphQLString},ownerPartyId: {type: GraphQLString},activationValidThru: {type: GraphQLString},activationNumber: {type: GraphQLInt},currencyUomId: {type: GraphQLString},receivedByUserLoginId: {type: GraphQLString},priorityOrderId: {type: GraphQLString},unitCost: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString},datetimeReceived: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/issueOrderItemToShipmentAndReceiveAgainstPO?orderItemSeqId=${args.orderItemSeqId}quantity=${args.quantity}orderId=${args.orderId}shipmentId=${args.shipmentId}shipGroupSeqId=${args.shipGroupSeqId}workEffortId=${args.workEffortId}quantityAccepted=${args.quantityAccepted}binNumber=${args.binNumber}maintHistSeqId=${args.maintHistSeqId}priorityOrderItemSeqId=${args.priorityOrderItemSeqId}inventoryItemDetailSeqId=${args.inventoryItemDetailSeqId}oldAvailableToPromise=${args.oldAvailableToPromise}physicalInventoryId=${args.physicalInventoryId}reasonEnumId=${args.reasonEnumId}itemDescription=${args.itemDescription}partyId=${args.partyId}containerId=${args.containerId}locationSeqId=${args.locationSeqId}quantityOnHandDiff=${args.quantityOnHandDiff}serialNumber=${args.serialNumber}productId=${args.productId}uomId=${args.uomId}shipmentItemSeqId=${args.shipmentItemSeqId}quantityRejected=${args.quantityRejected}inventoryItemId=${args.inventoryItemId}statusId=${args.statusId}availableToPromiseDiff=${args.availableToPromiseDiff}fixedAssetId=${args.fixedAssetId}softIdentifier=${args.softIdentifier}description=${args.description}shipmentPackageSeqId=${args.shipmentPackageSeqId}currentInventoryItemId=${args.currentInventoryItemId}accountingQuantityDiff=${args.accountingQuantityDiff}itemIssuanceId=${args.itemIssuanceId}datetimeManufactured=${args.datetimeManufactured}returnId=${args.returnId}orderCurrencyUnitPrice=${args.orderCurrencyUnitPrice}expireDate=${args.expireDate}oldQuantityOnHand=${args.oldQuantityOnHand}receiptId=${args.receiptId}inventoryItemTypeId=${args.inventoryItemTypeId}facilityId=${args.facilityId}comments=${args.comments}lotId=${args.lotId}accountingQuantityTotal=${args.accountingQuantityTotal}rejectionId=${args.rejectionId}ownerPartyId=${args.ownerPartyId}activationValidThru=${args.activationValidThru}activationNumber=${args.activationNumber}currencyUomId=${args.currencyUomId}receivedByUserLoginId=${args.receivedByUserLoginId}priorityOrderId=${args.priorityOrderId}unitCost=${args.unitCost}returnItemSeqId=${args.returnItemSeqId}datetimeReceived=${args.datetimeReceived}effectiveDate=${args.effectiveDate}`, null, req);
  }
};
export {issueOrderItemToShipmentAndReceiveAgainstPO};


const issueSerializedInvToShipmentPackageAndSetTracking = {
  type: GraphQLString,
  description: 'mutation for ofbiz issueSerializedInvToShipmentPackageAndSetTracking method',
  args:{inventoryItemId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},promisedDatetime: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},originFacilityId: {type: GraphQLString},trackingNum: {type: GraphQLString},quantity: {type: GraphQLFloat},serialNumber: {type: GraphQLString},productId: {type: GraphQLString},quantityNotReserved: {type: GraphQLFloat},requireInventory: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},reservedDatetime: {type: GraphQLString},reserveOrderEnumId: {type: GraphQLString},sequenceId: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/issueSerializedInvToShipmentPackageAndSetTracking?inventoryItemId=${args.inventoryItemId}orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipmentId=${args.shipmentId}promisedDatetime=${args.promisedDatetime}shipGroupSeqId=${args.shipGroupSeqId}originFacilityId=${args.originFacilityId}trackingNum=${args.trackingNum}quantity=${args.quantity}serialNumber=${args.serialNumber}productId=${args.productId}quantityNotReserved=${args.quantityNotReserved}requireInventory=${args.requireInventory}shipmentPackageSeqId=${args.shipmentPackageSeqId}reservedDatetime=${args.reservedDatetime}reserveOrderEnumId=${args.reserveOrderEnumId}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {issueSerializedInvToShipmentPackageAndSetTracking};


const packBulkItems = {
  type: GraphQLString,
  description: 'mutation for ofbiz packBulkItems method',
  args:{orderId: {type: GraphQLString},packingSession: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},updateQuantity: {type: GraphQLBoolean},selInfo: {type: GraphQLString},pkgInfo: {type: GraphQLString},prdInfo: {type: GraphQLString},nextPackageSeq: {type: GraphQLInt},qtyInfo: {type: GraphQLString},iteInfo: {type: GraphQLString},wgtInfo: {type: GraphQLString},pickerPartyId: {type: GraphQLString},handlingInstructions: {type: GraphQLString},numPackagesInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/packBulkItems?orderId=${args.orderId}packingSession=${args.packingSession}shipGroupSeqId=${args.shipGroupSeqId}updateQuantity=${args.updateQuantity}selInfo=${args.selInfo}pkgInfo=${args.pkgInfo}prdInfo=${args.prdInfo}nextPackageSeq=${args.nextPackageSeq}qtyInfo=${args.qtyInfo}iteInfo=${args.iteInfo}wgtInfo=${args.wgtInfo}pickerPartyId=${args.pickerPartyId}handlingInstructions=${args.handlingInstructions}numPackagesInfo=${args.numPackagesInfo}`, null, req);
  }
};
export {packBulkItems};


const packSingleItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz packSingleItem method',
  args:{packageSeq: {type: GraphQLInt},packingSession: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},pickerPartyId: {type: GraphQLString},handlingInstructions: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/packSingleItem?packageSeq=${args.packageSeq}packingSession=${args.packingSession}quantity=${args.quantity}productId=${args.productId}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}pickerPartyId=${args.pickerPartyId}handlingInstructions=${args.handlingInstructions}`, null, req);
  }
};
export {packSingleItem};


const quickDropShipOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickDropShipOrder method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/quickDropShipOrder?orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {quickDropShipOrder};


const quickReceiveReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickReceiveReturn method',
  args:{returnId: {type: GraphQLString},statusId: {type: GraphQLString},inventoryItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/quickReceiveReturn?returnId=${args.returnId}statusId=${args.statusId}inventoryItemTypeId=${args.inventoryItemTypeId}`, null, req);
  }
};
export {quickReceiveReturn};


const quickScheduleShipmentRouteSegment = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickScheduleShipmentRouteSegment method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/quickScheduleShipmentRouteSegment?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {quickScheduleShipmentRouteSegment};


const quickShipEntireOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickShipEntireOrder method',
  args:{orderId: {type: GraphQLString},originFacilityId: {type: GraphQLString},setPackedOnly: {type: GraphQLString},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/quickShipEntireOrder?orderId=${args.orderId}originFacilityId=${args.originFacilityId}setPackedOnly=${args.setPackedOnly}eventDate=${args.eventDate}`, null, req);
  }
};
export {quickShipEntireOrder};


const quickShipOrderByItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickShipOrderByItem method',
  args:{orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},originFacilityId: {type: GraphQLString},setPackedOnly: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/quickShipOrderByItem?itemShipList=${args.itemShipList}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}originFacilityId=${args.originFacilityId}setPackedOnly=${args.setPackedOnly}`, null, req);
  }
};
export {quickShipOrderByItem};


const quickShipPurchaseOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickShipPurchaseOrder method',
  args:{facilityId: {type: GraphQLString},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/quickShipPurchaseOrder?facilityId=${args.facilityId}orderId=${args.orderId}`, null, req);
  }
};
export {quickShipPurchaseOrder};


const receiveInventoryProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz receiveInventoryProduct method',
  args:{facilityId: {type: GraphQLString},productId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat},quantityRejected: {type: GraphQLFloat},inventoryItemTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},orderId: {type: GraphQLString},binNumber: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},priorityOrderItemSeqId: {type: GraphQLString},inventoryItemDetailSeqId: {type: GraphQLString},oldAvailableToPromise: {type: GraphQLFloat},physicalInventoryId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},itemDescription: {type: GraphQLString},partyId: {type: GraphQLString},containerId: {type: GraphQLString},locationSeqId: {type: GraphQLString},quantityOnHandDiff: {type: GraphQLFloat},orderItemSeqId: {type: GraphQLString},serialNumber: {type: GraphQLInt},uomId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},statusId: {type: GraphQLString},availableToPromiseDiff: {type: GraphQLFloat},fixedAssetId: {type: GraphQLString},softIdentifier: {type: GraphQLInt},description: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},currentInventoryItemId: {type: GraphQLString},accountingQuantityDiff: {type: GraphQLFloat},itemIssuanceId: {type: GraphQLString},datetimeManufactured: {type: GraphQLString},returnId: {type: GraphQLString},orderCurrencyUnitPrice: {type: GraphQLString},expireDate: {type: GraphQLString},oldQuantityOnHand: {type: GraphQLFloat},receiptId: {type: GraphQLString},comments: {type: GraphQLString},lotId: {type: GraphQLString},accountingQuantityTotal: {type: GraphQLFloat},rejectionId: {type: GraphQLString},ownerPartyId: {type: GraphQLString},activationValidThru: {type: GraphQLString},activationNumber: {type: GraphQLInt},currencyUomId: {type: GraphQLString},shipmentId: {type: GraphQLString},receivedByUserLoginId: {type: GraphQLString},priorityOrderId: {type: GraphQLString},unitCost: {type: GraphQLFloat},returnItemSeqId: {type: GraphQLString},datetimeReceived: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/receiveInventoryProduct?facilityId=${args.facilityId}productId=${args.productId}quantityAccepted=${args.quantityAccepted}quantityRejected=${args.quantityRejected}inventoryItemTypeId=${args.inventoryItemTypeId}workEffortId=${args.workEffortId}orderId=${args.orderId}binNumber=${args.binNumber}maintHistSeqId=${args.maintHistSeqId}priorityOrderItemSeqId=${args.priorityOrderItemSeqId}inventoryItemDetailSeqId=${args.inventoryItemDetailSeqId}oldAvailableToPromise=${args.oldAvailableToPromise}physicalInventoryId=${args.physicalInventoryId}reasonEnumId=${args.reasonEnumId}itemDescription=${args.itemDescription}partyId=${args.partyId}containerId=${args.containerId}locationSeqId=${args.locationSeqId}quantityOnHandDiff=${args.quantityOnHandDiff}orderItemSeqId=${args.orderItemSeqId}serialNumber=${args.serialNumber}uomId=${args.uomId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}inventoryItemId=${args.inventoryItemId}statusId=${args.statusId}availableToPromiseDiff=${args.availableToPromiseDiff}fixedAssetId=${args.fixedAssetId}softIdentifier=${args.softIdentifier}description=${args.description}shipmentPackageSeqId=${args.shipmentPackageSeqId}currentInventoryItemId=${args.currentInventoryItemId}accountingQuantityDiff=${args.accountingQuantityDiff}itemIssuanceId=${args.itemIssuanceId}datetimeManufactured=${args.datetimeManufactured}returnId=${args.returnId}orderCurrencyUnitPrice=${args.orderCurrencyUnitPrice}expireDate=${args.expireDate}oldQuantityOnHand=${args.oldQuantityOnHand}receiptId=${args.receiptId}comments=${args.comments}lotId=${args.lotId}accountingQuantityTotal=${args.accountingQuantityTotal}rejectionId=${args.rejectionId}ownerPartyId=${args.ownerPartyId}activationValidThru=${args.activationValidThru}activationNumber=${args.activationNumber}currencyUomId=${args.currencyUomId}shipmentId=${args.shipmentId}receivedByUserLoginId=${args.receivedByUserLoginId}priorityOrderId=${args.priorityOrderId}unitCost=${args.unitCost}returnItemSeqId=${args.returnItemSeqId}datetimeReceived=${args.datetimeReceived}effectiveDate=${args.effectiveDate}`, null, req);
  }
};
export {receiveInventoryProduct};


const removeOrderShipmentFromShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeOrderShipmentFromShipment method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/removeOrderShipmentFromShipment?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}shipmentId=${args.shipmentId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {removeOrderShipmentFromShipment};


const removeShipmentEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeShipmentEstimate method',
  args:{shipmentCostEstimateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/removeShipmentEstimate?shipmentCostEstimateId=${args.shipmentCostEstimateId}`, null, req);
  }
};
export {removeShipmentEstimate};


const removeShipmentReceiptRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeShipmentReceiptRole method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/removeShipmentReceiptRole?roleTypeId=${args.roleTypeId}partyId=${args.partyId}receiptId=${args.receiptId}`, null, req);
  }
};
export {removeShipmentReceiptRole};


const returnInventoryItemIssuedToFixedAssetMaint = {
  type: GraphQLString,
  description: 'mutation for ofbiz returnInventoryItemIssuedToFixedAssetMaint method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/returnInventoryItemIssuedToFixedAssetMaint?itemIssuanceId=${args.itemIssuanceId}`, null, req);
  }
};
export {returnInventoryItemIssuedToFixedAssetMaint};


const savePackagesInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz savePackagesInfo method',
  args:{weightPackageSession: {type: GraphQLString},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/savePackagesInfo?weightPackageSession=${args.weightPackageSession}orderId=${args.orderId}shipmentId=${args.shipmentId}facilityId=${args.facilityId}`, null, req);
  }
};
export {savePackagesInfo};


const sendShipmentCompleteNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendShipmentCompleteNotification method',
  args:{shipmentId: {type: GraphQLString},sendTo: {type: GraphQLString},comments: {type: GraphQLString},screenUri: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/sendShipmentCompleteNotification?shipmentId=${args.shipmentId}sendTo=${args.sendTo}comments=${args.comments}screenUri=${args.screenUri}`, null, req);
  }
};
export {sendShipmentCompleteNotification};


const sendShipmentScheduledNotification = {
  type: GraphQLString,
  description: 'mutation for ofbiz sendShipmentScheduledNotification method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/sendShipmentScheduledNotification?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {sendShipmentScheduledNotification};


const setNextPackageSeq = {
  type: GraphQLString,
  description: 'mutation for ofbiz setNextPackageSeq method',
  args:{packingSession: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/setNextPackageSeq?packingSession=${args.packingSession}`, null, req);
  }
};
export {setNextPackageSeq};


const setPackageInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz setPackageInfo method',
  args:{weightPackageSession: {type: GraphQLString},orderId: {type: GraphQLString},packageHeight: {type: GraphQLFloat},packageWeight: {type: GraphQLFloat},packageLength: {type: GraphQLFloat},packageWidth: {type: GraphQLFloat},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/setPackageInfo?weightPackageSession=${args.weightPackageSession}orderId=${args.orderId}packageHeight=${args.packageHeight}packageWeight=${args.packageWeight}packageLength=${args.packageLength}packageWidth=${args.packageWidth}shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {setPackageInfo};


const setShipmentSettingsFromFacilities = {
  type: GraphQLString,
  description: 'mutation for ofbiz setShipmentSettingsFromFacilities method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/setShipmentSettingsFromFacilities?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {setShipmentSettingsFromFacilities};


const setShipmentSettingsFromPrimaryOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz setShipmentSettingsFromPrimaryOrder method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/setShipmentSettingsFromPrimaryOrder?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {setShipmentSettingsFromPrimaryOrder};


const setShipmentStatusPackedAndShipped = {
  type: GraphQLString,
  description: 'mutation for ofbiz setShipmentStatusPackedAndShipped method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/setShipmentStatusPackedAndShipped?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {setShipmentStatusPackedAndShipped};


const splitShipmentItemByQuantity = {
  type: GraphQLString,
  description: 'mutation for ofbiz splitShipmentItemByQuantity method',
  args:{shipmentId: {type: GraphQLString},newItemQuantity: {type: GraphQLFloat},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/splitShipmentItemByQuantity?shipmentId=${args.shipmentId}newItemQuantity=${args.newItemQuantity}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {splitShipmentItemByQuantity};


const updateCarrierShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCarrierShipmentBoxType method',
  args:{partyId: {type: GraphQLString},shipmentBoxTypeId: {type: GraphQLString},packagingTypeCode: {type: GraphQLString},oversizeCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateCarrierShipmentBoxType?partyId=${args.partyId}shipmentBoxTypeId=${args.shipmentBoxTypeId}packagingTypeCode=${args.packagingTypeCode}oversizeCode=${args.oversizeCode}`, null, req);
  }
};
export {updateCarrierShipmentBoxType};


const updateCarrierShipmentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCarrierShipmentMethod method',
  args:{roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},sequenceNumber: {type: GraphQLInt},carrierServiceCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateCarrierShipmentMethod?roleTypeId=${args.roleTypeId}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}sequenceNumber=${args.sequenceNumber}carrierServiceCode=${args.carrierServiceCode}`, null, req);
  }
};
export {updateCarrierShipmentMethod};


const updateDelivery = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDelivery method',
  args:{deliveryId: {type: GraphQLString},originFacilityId: {type: GraphQLString},destFacilityId: {type: GraphQLString},actualArrivalDate: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},fuelUsed: {type: GraphQLFloat},actualStartDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},startMileage: {type: GraphQLFloat},estimatedArrivalDate: {type: GraphQLString},endMileage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateDelivery?deliveryId=${args.deliveryId}originFacilityId=${args.originFacilityId}destFacilityId=${args.destFacilityId}actualArrivalDate=${args.actualArrivalDate}estimatedStartDate=${args.estimatedStartDate}fuelUsed=${args.fuelUsed}actualStartDate=${args.actualStartDate}fixedAssetId=${args.fixedAssetId}startMileage=${args.startMileage}estimatedArrivalDate=${args.estimatedArrivalDate}endMileage=${args.endMileage}`, null, req);
  }
};
export {updateDelivery};


const updateIssuanceShipmentAndPoOnReceiveInventory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateIssuanceShipmentAndPoOnReceiveInventory method',
  args:{orderItemSeqId: {type: GraphQLString},orderId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat},shipmentId: {type: GraphQLString},unitCost: {type: GraphQLString},orderCurrencyUnitPrice: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateIssuanceShipmentAndPoOnReceiveInventory?orderItemSeqId=${args.orderItemSeqId}orderId=${args.orderId}quantityAccepted=${args.quantityAccepted}shipmentId=${args.shipmentId}unitCost=${args.unitCost}orderCurrencyUnitPrice=${args.orderCurrencyUnitPrice}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {updateIssuanceShipmentAndPoOnReceiveInventory};


const updateItemIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateItemIssuance method',
  args:{itemIssuanceId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipmentId: {type: GraphQLString},issuedDateTime: {type: GraphQLString},fixedAssetId: {type: GraphQLString},maintHistSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},issuedByUserLoginId: {type: GraphQLString},cancelQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateItemIssuance?itemIssuanceId=${args.itemIssuanceId}orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}shipmentId=${args.shipmentId}issuedDateTime=${args.issuedDateTime}fixedAssetId=${args.fixedAssetId}maintHistSeqId=${args.maintHistSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}shipGroupSeqId=${args.shipGroupSeqId}issuedByUserLoginId=${args.issuedByUserLoginId}cancelQuantity=${args.cancelQuantity}`, null, req);
  }
};
export {updateItemIssuance};


const updatePackedLine = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePackedLine method',
  args:{weightPackageSession: {type: GraphQLString},weightPackageSeqId: {type: GraphQLInt},packageHeight: {type: GraphQLFloat},packageWeight: {type: GraphQLFloat},packageLength: {type: GraphQLFloat},packageWidth: {type: GraphQLFloat},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updatePackedLine?weightPackageSession=${args.weightPackageSession}weightPackageSeqId=${args.weightPackageSeqId}packageHeight=${args.packageHeight}packageWeight=${args.packageWeight}packageLength=${args.packageLength}packageWidth=${args.packageWidth}shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {updatePackedLine};


const updatePurchaseShipmentFromReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePurchaseShipmentFromReceipt method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updatePurchaseShipmentFromReceipt?shipmentId=${args.shipmentId}`, null, req);
  }
};
export {updatePurchaseShipmentFromReceipt};


const updateQuantityBreak = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuantityBreak method',
  args:{quantityBreakId: {type: GraphQLString},thruQuantity: {type: GraphQLFloat},quantityBreakTypeId: {type: GraphQLString},fromQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateQuantityBreak?quantityBreakId=${args.quantityBreakId}thruQuantity=${args.thruQuantity}quantityBreakTypeId=${args.quantityBreakTypeId}fromQuantity=${args.fromQuantity}`, null, req);
  }
};
export {updateQuantityBreak};


const updateRejectionReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRejectionReason method',
  args:{rejectionId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateRejectionReason?rejectionId=${args.rejectionId}description=${args.description}`, null, req);
  }
};
export {updateRejectionReason};


const updateShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipment method',
  args:{shipmentId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},latestCancelDate: {type: GraphQLString},estimatedReadyDate: {type: GraphQLString},estimatedArrivalWorkEffId: {type: GraphQLString},additionalShippingCharge: {type: GraphQLFloat},destinationTelecomNumberId: {type: GraphQLString},estimatedShipCost: {type: GraphQLFloat},estimatedShipWorkEffId: {type: GraphQLString},destinationFacilityId: {type: GraphQLString},addtlShippingChargeDesc: {type: GraphQLString},originContactMechId: {type: GraphQLString},primaryReturnId: {type: GraphQLString},originFacilityId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},destinationContactMechId: {type: GraphQLString},originTelecomNumberId: {type: GraphQLString},primaryOrderId: {type: GraphQLString},estimatedShipDate: {type: GraphQLString},partyIdTo: {type: GraphQLString},estimatedArrivalDate: {type: GraphQLString},shipmentTypeId: {type: GraphQLString},picklistBinId: {type: GraphQLString},primaryShipGroupSeqId: {type: GraphQLString},handlingInstructions: {type: GraphQLString},eventDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipment?shipmentId=${args.shipmentId}partyIdFrom=${args.partyIdFrom}latestCancelDate=${args.latestCancelDate}estimatedReadyDate=${args.estimatedReadyDate}estimatedArrivalWorkEffId=${args.estimatedArrivalWorkEffId}additionalShippingCharge=${args.additionalShippingCharge}destinationTelecomNumberId=${args.destinationTelecomNumberId}estimatedShipCost=${args.estimatedShipCost}estimatedShipWorkEffId=${args.estimatedShipWorkEffId}destinationFacilityId=${args.destinationFacilityId}addtlShippingChargeDesc=${args.addtlShippingChargeDesc}originContactMechId=${args.originContactMechId}primaryReturnId=${args.primaryReturnId}originFacilityId=${args.originFacilityId}currencyUomId=${args.currencyUomId}statusId=${args.statusId}destinationContactMechId=${args.destinationContactMechId}originTelecomNumberId=${args.originTelecomNumberId}primaryOrderId=${args.primaryOrderId}estimatedShipDate=${args.estimatedShipDate}partyIdTo=${args.partyIdTo}estimatedArrivalDate=${args.estimatedArrivalDate}shipmentTypeId=${args.shipmentTypeId}picklistBinId=${args.picklistBinId}primaryShipGroupSeqId=${args.primaryShipGroupSeqId}handlingInstructions=${args.handlingInstructions}eventDate=${args.eventDate}`, null, req);
  }
};
export {updateShipment};


const updateShipmentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentAttribute method',
  args:{shipmentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentAttribute?shipmentId=${args.shipmentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateShipmentAttribute};


const updateShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentBoxType method',
  args:{shipmentBoxTypeId: {type: GraphQLString},boxLength: {type: GraphQLFloat},boxWeight: {type: GraphQLFloat},dimensionUomId: {type: GraphQLString},description: {type: GraphQLString},weightUomId: {type: GraphQLString},boxWidth: {type: GraphQLFloat},boxHeight: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentBoxType?shipmentBoxTypeId=${args.shipmentBoxTypeId}boxLength=${args.boxLength}boxWeight=${args.boxWeight}dimensionUomId=${args.dimensionUomId}description=${args.description}weightUomId=${args.weightUomId}boxWidth=${args.boxWidth}boxHeight=${args.boxHeight}`, null, req);
  }
};
export {updateShipmentBoxType};


const updateShipmentContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentContactMech method',
  args:{shipmentId: {type: GraphQLString},shipmentContactMechTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentContactMech?shipmentId=${args.shipmentId}shipmentContactMechTypeId=${args.shipmentContactMechTypeId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {updateShipmentContactMech};


const updateShipmentContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentContactMechType method',
  args:{shipmentContactMechTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentContactMechType?shipmentContactMechTypeId=${args.shipmentContactMechTypeId}description=${args.description}`, null, req);
  }
};
export {updateShipmentContactMechType};


const updateShipmentCostEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentCostEstimate method',
  args:{shipmentCostEstimateId: {type: GraphQLString},productStoreShipMethId: {type: GraphQLString},quantityUnitPrice: {type: GraphQLFloat},quantityUomId: {type: GraphQLString},featurePercent: {type: GraphQLFloat},featurePrice: {type: GraphQLFloat},weightUnitPrice: {type: GraphQLFloat},oversizeUnit: {type: GraphQLFloat},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},oversizePrice: {type: GraphQLFloat},shipmentMethodTypeId: {type: GraphQLString},geoIdTo: {type: GraphQLString},orderPricePercent: {type: GraphQLFloat},orderItemFlatPrice: {type: GraphQLFloat},roleTypeId: {type: GraphQLString},shippingPricePercent: {type: GraphQLFloat},weightBreakId: {type: GraphQLString},quantityBreakId: {type: GraphQLString},priceBreakId: {type: GraphQLString},carrierPartyId: {type: GraphQLString},geoIdFrom: {type: GraphQLString},orderFlatPrice: {type: GraphQLFloat},carrierRoleTypeId: {type: GraphQLString},weightUomId: {type: GraphQLString},priceUnitPrice: {type: GraphQLFloat},priceUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentCostEstimate?shipmentCostEstimateId=${args.shipmentCostEstimateId}productStoreShipMethId=${args.productStoreShipMethId}quantityUnitPrice=${args.quantityUnitPrice}quantityUomId=${args.quantityUomId}featurePercent=${args.featurePercent}featurePrice=${args.featurePrice}weightUnitPrice=${args.weightUnitPrice}oversizeUnit=${args.oversizeUnit}productStoreId=${args.productStoreId}partyId=${args.partyId}productFeatureGroupId=${args.productFeatureGroupId}oversizePrice=${args.oversizePrice}shipmentMethodTypeId=${args.shipmentMethodTypeId}geoIdTo=${args.geoIdTo}orderPricePercent=${args.orderPricePercent}orderItemFlatPrice=${args.orderItemFlatPrice}roleTypeId=${args.roleTypeId}shippingPricePercent=${args.shippingPricePercent}weightBreakId=${args.weightBreakId}quantityBreakId=${args.quantityBreakId}priceBreakId=${args.priceBreakId}carrierPartyId=${args.carrierPartyId}geoIdFrom=${args.geoIdFrom}orderFlatPrice=${args.orderFlatPrice}carrierRoleTypeId=${args.carrierRoleTypeId}weightUomId=${args.weightUomId}priceUnitPrice=${args.priceUnitPrice}priceUomId=${args.priceUomId}`, null, req);
  }
};
export {updateShipmentCostEstimate};


const updateShipmentItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentItem method',
  args:{shipmentId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},shipmentContentDescription: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentItem?shipmentId=${args.shipmentId}shipmentItemSeqId=${args.shipmentItemSeqId}quantity=${args.quantity}productId=${args.productId}shipmentContentDescription=${args.shipmentContentDescription}`, null, req);
  }
};
export {updateShipmentItem};


const updateShipmentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentMethodType method',
  args:{shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentMethodType?shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {updateShipmentMethodType};


const updateShipmentPackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentPackage method',
  args:{shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},boxLength: {type: GraphQLFloat},dateCreated: {type: GraphQLString},dimensionUomId: {type: GraphQLString},insuredValue: {type: GraphQLFloat},weight: {type: GraphQLFloat},weightUomId: {type: GraphQLString},boxHeight: {type: GraphQLFloat},boxWidth: {type: GraphQLFloat},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentPackage?shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}boxLength=${args.boxLength}dateCreated=${args.dateCreated}dimensionUomId=${args.dimensionUomId}insuredValue=${args.insuredValue}weight=${args.weight}weightUomId=${args.weightUomId}boxHeight=${args.boxHeight}boxWidth=${args.boxWidth}shipmentBoxTypeId=${args.shipmentBoxTypeId}`, null, req);
  }
};
export {updateShipmentPackage};


const updateShipmentPackageContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentPackageContent method',
  args:{shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},subProductQuantity: {type: GraphQLFloat},subProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentPackageContent?shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}quantity=${args.quantity}subProductQuantity=${args.subProductQuantity}subProductId=${args.subProductId}`, null, req);
  }
};
export {updateShipmentPackageContent};


const updateShipmentPackageRouteSeg = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentPackageRouteSeg method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},labelIntlSignImage: {type: GraphQLString},trackingCode: {type: GraphQLString},boxNumber: {type: GraphQLString},packageServiceCost: {type: GraphQLFloat},packageOtherCost: {type: GraphQLFloat},labelImage: {type: GraphQLString},labelPrinted: {type: GraphQLString},currencyUomId: {type: GraphQLString},internationalInvoice: {type: GraphQLString},packageTransportCost: {type: GraphQLFloat},codAmount: {type: GraphQLFloat},insuredAmount: {type: GraphQLFloat},labelHtml: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentPackageRouteSeg?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}shipmentPackageSeqId=${args.shipmentPackageSeqId}labelIntlSignImage=${args.labelIntlSignImage}trackingCode=${args.trackingCode}boxNumber=${args.boxNumber}packageServiceCost=${args.packageServiceCost}packageOtherCost=${args.packageOtherCost}labelImage=${args.labelImage}labelPrinted=${args.labelPrinted}currencyUomId=${args.currencyUomId}internationalInvoice=${args.internationalInvoice}packageTransportCost=${args.packageTransportCost}codAmount=${args.codAmount}insuredAmount=${args.insuredAmount}labelHtml=${args.labelHtml}`, null, req);
  }
};
export {updateShipmentPackageRouteSeg};


const updateShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentReceipt method',
  args:{receiptId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},productId: {type: GraphQLString},orderId: {type: GraphQLString},quantityAccepted: {type: GraphQLFloat},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},inventoryItemId: {type: GraphQLString},rejectionId: {type: GraphQLString},shipmentId: {type: GraphQLString},receivedByUserLoginId: {type: GraphQLString},returnId: {type: GraphQLString},returnItemSeqId: {type: GraphQLString},datetimeReceived: {type: GraphQLString},itemDescription: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentReceipt?receiptId=${args.receiptId}orderItemSeqId=${args.orderItemSeqId}productId=${args.productId}orderId=${args.orderId}quantityAccepted=${args.quantityAccepted}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}quantityRejected=${args.quantityRejected}inventoryItemId=${args.inventoryItemId}rejectionId=${args.rejectionId}shipmentId=${args.shipmentId}receivedByUserLoginId=${args.receivedByUserLoginId}returnId=${args.returnId}returnItemSeqId=${args.returnItemSeqId}datetimeReceived=${args.datetimeReceived}itemDescription=${args.itemDescription}`, null, req);
  }
};
export {updateShipmentReceipt};


const updateShipmentRouteSegment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentRouteSegment method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString},actualOtherCost: {type: GraphQLFloat},carrierDeliveryZone: {type: GraphQLString},thirdPartyPostalCode: {type: GraphQLString},destTelecomNumberId: {type: GraphQLString},carrierRestrictionCodes: {type: GraphQLString},trackingIdNumber: {type: GraphQLString},deliveryId: {type: GraphQLString},carrierServiceStatusId: {type: GraphQLString},actualStartDate: {type: GraphQLString},trackingDigest: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},actualCost: {type: GraphQLFloat},upsHighValueReport: {type: GraphQLString},actualArrivalDate: {type: GraphQLString},actualServiceCost: {type: GraphQLFloat},originContactMechId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},carrierRestrictionDesc: {type: GraphQLString},actualTransportCost: {type: GraphQLFloat},billingWeightUomId: {type: GraphQLString},homeDeliveryDate: {type: GraphQLString},originFacilityId: {type: GraphQLString},destFacilityId: {type: GraphQLString},carrierPartyId: {type: GraphQLString},lastUpdatedDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},billingWeight: {type: GraphQLFloat},originTelecomNumberId: {type: GraphQLString},thirdPartyCountryGeoCode: {type: GraphQLString},destContactMechId: {type: GraphQLString},estimatedArrivalDate: {type: GraphQLString},homeDeliveryType: {type: GraphQLString},thirdPartyAccountNumber: {type: GraphQLString},updatedByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentRouteSegment?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}actualOtherCost=${args.actualOtherCost}carrierDeliveryZone=${args.carrierDeliveryZone}thirdPartyPostalCode=${args.thirdPartyPostalCode}destTelecomNumberId=${args.destTelecomNumberId}carrierRestrictionCodes=${args.carrierRestrictionCodes}trackingIdNumber=${args.trackingIdNumber}deliveryId=${args.deliveryId}carrierServiceStatusId=${args.carrierServiceStatusId}actualStartDate=${args.actualStartDate}trackingDigest=${args.trackingDigest}shipmentMethodTypeId=${args.shipmentMethodTypeId}actualCost=${args.actualCost}upsHighValueReport=${args.upsHighValueReport}actualArrivalDate=${args.actualArrivalDate}actualServiceCost=${args.actualServiceCost}originContactMechId=${args.originContactMechId}estimatedStartDate=${args.estimatedStartDate}carrierRestrictionDesc=${args.carrierRestrictionDesc}actualTransportCost=${args.actualTransportCost}billingWeightUomId=${args.billingWeightUomId}homeDeliveryDate=${args.homeDeliveryDate}originFacilityId=${args.originFacilityId}destFacilityId=${args.destFacilityId}carrierPartyId=${args.carrierPartyId}lastUpdatedDate=${args.lastUpdatedDate}currencyUomId=${args.currencyUomId}billingWeight=${args.billingWeight}originTelecomNumberId=${args.originTelecomNumberId}thirdPartyCountryGeoCode=${args.thirdPartyCountryGeoCode}destContactMechId=${args.destContactMechId}estimatedArrivalDate=${args.estimatedArrivalDate}homeDeliveryType=${args.homeDeliveryType}thirdPartyAccountNumber=${args.thirdPartyAccountNumber}updatedByUserLoginId=${args.updatedByUserLoginId}`, null, req);
  }
};
export {updateShipmentRouteSegment};


const updateShipmentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentTypeAttr method',
  args:{shipmentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShipmentTypeAttr?shipmentTypeId=${args.shipmentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateShipmentTypeAttr};


const updateShippingDocument = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShippingDocument method',
  args:{documentId: {type: GraphQLString},shipmentId: {type: GraphQLString},description: {type: GraphQLString},shipmentPackageSeqId: {type: GraphQLString},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/updateShippingDocument?documentId=${args.documentId}shipmentId=${args.shipmentId}description=${args.description}shipmentPackageSeqId=${args.shipmentPackageSeqId}shipmentItemSeqId=${args.shipmentItemSeqId}`, null, req);
  }
};
export {updateShippingDocument};


const verifyBulkItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz verifyBulkItem method',
  args:{orderId: {type: GraphQLString},verifyPickSession: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},productMap: {type: GraphQLString},facilityId: {type: GraphQLString},selectedMap: {type: GraphQLString},originGeoIdMap: {type: GraphQLString},itemMap: {type: GraphQLString},quantityMap: {type: GraphQLString},pickerPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/verifyBulkItem?orderId=${args.orderId}verifyPickSession=${args.verifyPickSession}shipGroupSeqId=${args.shipGroupSeqId}productMap=${args.productMap}facilityId=${args.facilityId}selectedMap=${args.selectedMap}originGeoIdMap=${args.originGeoIdMap}itemMap=${args.itemMap}quantityMap=${args.quantityMap}pickerPartyId=${args.pickerPartyId}`, null, req);
  }
};
export {verifyBulkItem};


const verifySingleItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz verifySingleItem method',
  args:{productId: {type: GraphQLString},verifyPickSession: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipment/verifySingleItem?productId=${args.productId}verifyPickSession=${args.verifyPickSession}quantity=${args.quantity}orderId=${args.orderId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {verifySingleItem};
