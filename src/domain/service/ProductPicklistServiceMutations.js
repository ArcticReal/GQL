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


const cancelPicklistAndItems = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelPicklistAndItems method',
  args:{picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/cancelPicklistAndItems?picklistId=${args.picklistId}`, null, req);
  }
};
export {cancelPicklistAndItems};


const checkPicklistBinItemStatuses = {
  type: ResponseType,
  description: 'mutation for ofbiz checkPicklistBinItemStatuses method',
  args:{picklistBinId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/checkPicklistBinItemStatuses?picklistBinId=${args.picklistBinId}`, null, req);
  }
};
export {checkPicklistBinItemStatuses};


const convertPickOrderIdListToHeaders = {
  type: ResponseType,
  description: 'mutation for ofbiz convertPickOrderIdListToHeaders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/convertPickOrderIdListToHeaders?orderHeaderList=${args.orderHeaderList}orderIdList=${args.orderIdList}`, null, req);
  }
};
export {convertPickOrderIdListToHeaders};


const createPicklist = {
  type: ResponseType,
  description: 'mutation for ofbiz createPicklist method',
  args:{facilityId: {type: GraphQLString},statusId: {type: GraphQLString},description: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/createPicklist?facilityId=${args.facilityId}statusId=${args.statusId}description=${args.description}shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {createPicklist};


const createPicklistBin = {
  type: ResponseType,
  description: 'mutation for ofbiz createPicklistBin method',
  args:{picklistId: {type: GraphQLString},primaryOrderId: {type: GraphQLString},primaryShipGroupSeqId: {type: GraphQLString},binLocationNumber: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/createPicklistBin?picklistId=${args.picklistId}primaryOrderId=${args.primaryOrderId}primaryShipGroupSeqId=${args.primaryShipGroupSeqId}binLocationNumber=${args.binLocationNumber}`, null, req);
  }
};
export {createPicklistBin};


const createPicklistFromOrders = {
  type: ResponseType,
  description: 'mutation for ofbiz createPicklistFromOrders method',
  args:{facilityId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},maxNumberOfOrders: {type: GraphQLInt},isRushOrder: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/createPicklistFromOrders?facilityId=${args.facilityId}orderHeaderList=${args.orderHeaderList}orderIdList=${args.orderIdList}shipmentMethodTypeId=${args.shipmentMethodTypeId}maxNumberOfOrders=${args.maxNumberOfOrders}isRushOrder=${args.isRushOrder}`, null, req);
  }
};
export {createPicklistFromOrders};


const createPicklistItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createPicklistItem method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},picklistBinId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},itemStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/createPicklistItem?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}picklistBinId=${args.picklistBinId}shipGroupSeqId=${args.shipGroupSeqId}itemStatusId=${args.itemStatusId}`, null, req);
  }
};
export {createPicklistItem};


const createPicklistRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createPicklistRole method',
  args:{picklistId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/createPicklistRole?picklistId=${args.picklistId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPicklistRole};


const deletePicklist = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePicklist method',
  args:{picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/deletePicklist?picklistId=${args.picklistId}`, null, req);
  }
};
export {deletePicklist};


const deletePicklistBin = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePicklistBin method',
  args:{picklistBinId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/deletePicklistBin?picklistBinId=${args.picklistBinId}`, null, req);
  }
};
export {deletePicklistBin};


const deletePicklistItem = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePicklistItem method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},picklistBinId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/deletePicklistItem?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}picklistBinId=${args.picklistBinId}shipGroupSeqId=${args.shipGroupSeqId}`, null, req);
  }
};
export {deletePicklistItem};


const deletePicklistRole = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePicklistRole method',
  args:{fromDate: {type: GraphQLString},picklistId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/deletePicklistRole?fromDate=${args.fromDate}picklistId=${args.picklistId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePicklistRole};


const editPicklistItem = {
  type: ResponseType,
  description: 'mutation for ofbiz editPicklistItem method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},facilityId: {type: GraphQLString},productId: {type: GraphQLString},orderId: {type: GraphQLString},lotId: {type: GraphQLString},picklistBinId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},oldLotId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/editPicklistItem?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}facilityId=${args.facilityId}productId=${args.productId}orderId=${args.orderId}lotId=${args.lotId}picklistBinId=${args.picklistBinId}shipGroupSeqId=${args.shipGroupSeqId}oldLotId=${args.oldLotId}`, null, req);
  }
};
export {editPicklistItem};


const findOrdersToPickMove = {
  type: ResponseType,
  description: 'mutation for ofbiz findOrdersToPickMove method',
  args:{facilityId: {type: GraphQLString},groupByNoOfOrderItems: {type: GraphQLString},orderId: {type: GraphQLString},groupByWarehouseArea: {type: GraphQLString},groupByShippingMethod: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},maxNumberOfOrders: {type: GraphQLInt},isRushOrder: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/findOrdersToPickMove?facilityId=${args.facilityId}groupByNoOfOrderItems=${args.groupByNoOfOrderItems}orderId=${args.orderId}orderHeaderList=${args.orderHeaderList}groupByWarehouseArea=${args.groupByWarehouseArea}groupByShippingMethod=${args.groupByShippingMethod}shipmentMethodTypeId=${args.shipmentMethodTypeId}maxNumberOfOrders=${args.maxNumberOfOrders}isRushOrder=${args.isRushOrder}`, null, req);
  }
};
export {findOrdersToPickMove};


const getPickAndPackReportInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz getPickAndPackReportInfo method',
  args:{picklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/getPickAndPackReportInfo?picklistId=${args.picklistId}`, null, req);
  }
};
export {getPickAndPackReportInfo};


const getPicklistDisplayInfo = {
  type: ResponseType,
  description: 'mutation for ofbiz getPicklistDisplayInfo method',
  args:{facilityId: {type: GraphQLString},viewSize: {type: GraphQLInt},viewIndex: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/getPicklistDisplayInfo?facilityId=${args.facilityId}viewSize=${args.viewSize}viewIndex=${args.viewIndex}`, null, req);
  }
};
export {getPicklistDisplayInfo};


const printPickSheets = {
  type: ResponseType,
  description: 'mutation for ofbiz printPickSheets method',
  args:{facilityId: {type: GraphQLString},groupByNoOfOrderItems: {type: GraphQLString},orderId: {type: GraphQLString},printGroupName: {type: GraphQLString},groupByWarehouseArea: {type: GraphQLString},groupByShippingMethod: {type: GraphQLString},maxNumberOfOrdersToPrint: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/printPickSheets?facilityId=${args.facilityId}groupByNoOfOrderItems=${args.groupByNoOfOrderItems}orderId=${args.orderId}printGroupName=${args.printGroupName}groupByWarehouseArea=${args.groupByWarehouseArea}groupByShippingMethod=${args.groupByShippingMethod}maxNumberOfOrdersToPrint=${args.maxNumberOfOrdersToPrint}`, null, req);
  }
};
export {printPickSheets};


const setPicklistItemToComplete = {
  type: ResponseType,
  description: 'mutation for ofbiz setPicklistItemToComplete method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},orderId: {type: GraphQLString},picklistBinId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},itemStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/setPicklistItemToComplete?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}orderId=${args.orderId}picklistBinId=${args.picklistBinId}shipGroupSeqId=${args.shipGroupSeqId}itemStatusId=${args.itemStatusId}`, null, req);
  }
};
export {setPicklistItemToComplete};


const updatePicklist = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePicklist method',
  args:{picklistId: {type: GraphQLString},facilityId: {type: GraphQLString},statusId: {type: GraphQLString},description: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/updatePicklist?picklistId=${args.picklistId}facilityId=${args.facilityId}statusId=${args.statusId}description=${args.description}shipmentMethodTypeId=${args.shipmentMethodTypeId}`, null, req);
  }
};
export {updatePicklist};


const updatePicklistBin = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePicklistBin method',
  args:{picklistBinId: {type: GraphQLString},picklistId: {type: GraphQLString},primaryOrderId: {type: GraphQLString},primaryShipGroupSeqId: {type: GraphQLString},binLocationNumber: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/updatePicklistBin?picklistBinId=${args.picklistBinId}picklistId=${args.picklistId}primaryOrderId=${args.primaryOrderId}primaryShipGroupSeqId=${args.primaryShipGroupSeqId}binLocationNumber=${args.binLocationNumber}`, null, req);
  }
};
export {updatePicklistBin};


const updatePicklistItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePicklistItem method',
  args:{orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},picklistBinId: {type: GraphQLString},shipGroupSeqId: {type: GraphQLString},quantity: {type: GraphQLFloat},itemStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/updatePicklistItem?orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}picklistBinId=${args.picklistBinId}shipGroupSeqId=${args.shipGroupSeqId}quantity=${args.quantity}itemStatusId=${args.itemStatusId}`, null, req);
  }
};
export {updatePicklistItem};


const updatePicklistRole = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePicklistRole method',
  args:{fromDate: {type: GraphQLString},picklistId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPicklist/updatePicklistRole?fromDate=${args.fromDate}picklistId=${args.picklistId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePicklistRole};
