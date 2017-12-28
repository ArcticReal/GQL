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
import {ShipmentGatewayConfigInputType} from '../../shipment/ShipmentGatewayConfig/ShipmentGatewayConfigInputType.js';
import {ShipmentGatewayConfigResponseType} from '../../shipment/ShipmentGatewayConfig/ShipmentGatewayConfigResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentGatewayConfig = {
  type: ShipmentGatewayConfigResponseType,
  description: 'mutation for ofbiz createShipmentGatewayConfig method',
  args:{shipmentGatewayConfigToBeAdded: {type: ShipmentGatewayConfigInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayConfigs/add?`, args.shipmentGatewayConfigToBeAdded, req);
  }
};
export {createShipmentGatewayConfig};


const updateShipmentGatewayConfig = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentGatewayConfig method',
  args:{shipmentGatewayConfigToBeUpdated: {type: ShipmentGatewayConfigInputType},shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayConfigs/${args.shipmentGatewayConfigId}?`, args.shipmentGatewayConfigToBeUpdated, req);
  }
};
export {updateShipmentGatewayConfig};


const deleteShipmentGatewayConfigByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentGatewayConfigByIdUpdated method',
  args:{shipmentGatewayConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayConfigs/${args.shipmentGatewayConfigId}?`, null, req);
  }
};
export {deleteShipmentGatewayConfigByIdUpdated};
