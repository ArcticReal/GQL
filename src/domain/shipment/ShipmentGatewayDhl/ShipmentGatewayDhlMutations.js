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
import {ShipmentGatewayDhlInputType} from '../../shipment/ShipmentGatewayDhl/ShipmentGatewayDhlInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentGatewayDhl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentGatewayDhl method',
  args:{shipmentGatewayDhlToBeAdded: {type: ShipmentGatewayDhlInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayDhls/add?`, args.shipmentGatewayDhlToBeAdded, req);
  }
};
export {createShipmentGatewayDhl};


const updateShipmentGatewayDhl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentGatewayDhl method',
  args:{shipmentGatewayDhlToBeUpdated: {type: ShipmentGatewayDhlInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayDhls/${args.nullVal}?`, args.shipmentGatewayDhlToBeUpdated, req);
  }
};
export {updateShipmentGatewayDhl};


const deleteShipmentGatewayDhlByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentGatewayDhlByIdUpdated method',
  args:{shipmentGatewayDhlId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayDhls/${args.shipmentGatewayDhlId}?`, null, req);
  }
};
export {deleteShipmentGatewayDhlByIdUpdated};
