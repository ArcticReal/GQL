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
import {ShipmentInputType} from '../../shipment/Shipment/ShipmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipment method',
  args:{shipmentToBeAdded: {type: ShipmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipments/add?`, args.shipmentToBeAdded, req);
  }
};
export {createShipment};


const updateShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipment method',
  args:{shipmentToBeUpdated: {type: ShipmentInputType},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipments/${args.shipmentId}?`, args.shipmentToBeUpdated, req);
  }
};
export {updateShipment};


const deleteShipmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentByIdUpdated method',
  args:{shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipments/${args.shipmentId}?`, null, req);
  }
};
export {deleteShipmentByIdUpdated};
