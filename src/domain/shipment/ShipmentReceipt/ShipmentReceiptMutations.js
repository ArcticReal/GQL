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
import {ShipmentReceiptInputType} from '../../shipment/ShipmentReceipt/ShipmentReceiptInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentReceipt method',
  args:{shipmentReceiptToBeAdded: {type: ShipmentReceiptInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentReceipts/add?`, args.shipmentReceiptToBeAdded, req);
  }
};
export {createShipmentReceipt};


const updateShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentReceipt method',
  args:{shipmentReceiptToBeUpdated: {type: ShipmentReceiptInputType},receiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentReceipts/${args.receiptId}?`, args.shipmentReceiptToBeUpdated, req);
  }
};
export {updateShipmentReceipt};


const deleteShipmentReceiptByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentReceiptByIdUpdated method',
  args:{shipmentReceiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentReceipts/${args.shipmentReceiptId}?`, null, req);
  }
};
export {deleteShipmentReceiptByIdUpdated};
