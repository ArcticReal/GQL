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
import {ShipmentGatewayConfigTypeInputType} from '../../shipment/ShipmentGatewayConfigType/ShipmentGatewayConfigTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentGatewayConfigType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentGatewayConfigType method',
  args:{shipmentGatewayConfigTypeToBeAdded: {type: ShipmentGatewayConfigTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayConfigTypes/add?`, args.shipmentGatewayConfigTypeToBeAdded, req);
  }
};
export {createShipmentGatewayConfigType};


const updateShipmentGatewayConfigType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentGatewayConfigType method',
  args:{shipmentGatewayConfigTypeToBeUpdated: {type: ShipmentGatewayConfigTypeInputType},shipmentGatewayConfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayConfigTypes/${args.shipmentGatewayConfTypeId}?`, args.shipmentGatewayConfigTypeToBeUpdated, req);
  }
};
export {updateShipmentGatewayConfigType};


const deleteShipmentGatewayConfigTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentGatewayConfigTypeByIdUpdated method',
  args:{shipmentGatewayConfigTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayConfigTypes/${args.shipmentGatewayConfigTypeId}?`, null, req);
  }
};
export {deleteShipmentGatewayConfigTypeByIdUpdated};
