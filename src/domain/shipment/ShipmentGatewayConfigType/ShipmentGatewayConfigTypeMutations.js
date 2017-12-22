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
import {ShipmentGatewayConfigTypeResponseType} from '../../shipment/ShipmentGatewayConfigType/ShipmentGatewayConfigTypeResponseType.js';
import {ShipmentGatewayConfigTypeInputType} from '../../shipment/ShipmentGatewayConfigType/ShipmentGatewayConfigTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentGatewayConfigType = {
  type: ShipmentGatewayConfigTypeResponseType,
  description: 'mutation for ofbiz createShipmentGatewayConfigType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayConfigTypes/add?`, null, req);
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
