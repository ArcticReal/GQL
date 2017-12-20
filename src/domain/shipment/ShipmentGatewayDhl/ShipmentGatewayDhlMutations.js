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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentGatewayDhl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayDhl method',
  args:{shipmentGatewayDhlToBeAdded: {type: ShipmentGatewayDhlInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayDhls/add?`, args.shipmentGatewayDhlToBeAdded, req);
  }
};
export {createShipmentGatewayDhl};


const updateShipmentGatewayDhl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayDhl method',
  args:{shipmentGatewayDhlToBeUpdated: {type: ShipmentGatewayDhlInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayDhls/${args.nullVal}?`, args.shipmentGatewayDhlToBeUpdated, req);
  }
};
export {updateShipmentGatewayDhl};


const deleteShipmentGatewayDhlByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayDhlByIdUpdated method',
  args:{shipmentGatewayDhlId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayDhls/${args.shipmentGatewayDhlId}?`, null, req);
  }
};
export {deleteShipmentGatewayDhlByIdUpdated};
