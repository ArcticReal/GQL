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
import {ShipmentReceiptRoleInputType} from '../../shipment/ShipmentReceiptRole/ShipmentReceiptRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentReceiptRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentReceiptRole method',
  args:{shipmentReceiptRoleToBeAdded: {type: ShipmentReceiptRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentReceiptRoles/add?`, args.shipmentReceiptRoleToBeAdded, req);
  }
};
export {createShipmentReceiptRole};


const updateShipmentReceiptRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentReceiptRole method',
  args:{shipmentReceiptRoleToBeUpdated: {type: ShipmentReceiptRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentReceiptRoles/${args.roleTypeId}?`, args.shipmentReceiptRoleToBeUpdated, req);
  }
};
export {updateShipmentReceiptRole};


const deleteShipmentReceiptRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentReceiptRoleByIdUpdated method',
  args:{shipmentReceiptRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentReceiptRoles/${args.shipmentReceiptRoleId}?`, null, req);
  }
};
export {deleteShipmentReceiptRoleByIdUpdated};
