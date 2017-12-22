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
import {ShipmentGatewayFedexInputType} from '../../shipment/ShipmentGatewayFedex/ShipmentGatewayFedexInputType.js';
import {ShipmentGatewayFedexResponseType} from '../../shipment/ShipmentGatewayFedex/ShipmentGatewayFedexResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentGatewayFedex = {
  type: ShipmentGatewayFedexResponseType,
  description: 'mutation for ofbiz createShipmentGatewayFedex method',
  args:{shipmentGatewayFedexToBeAdded: {type: ShipmentGatewayFedexInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayFedexs/add?`, args.shipmentGatewayFedexToBeAdded, req);
  }
};
export {createShipmentGatewayFedex};


const updateShipmentGatewayFedex = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentGatewayFedex method',
  args:{shipmentGatewayFedexToBeUpdated: {type: ShipmentGatewayFedexInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayFedexs/${args.nullVal}?`, args.shipmentGatewayFedexToBeUpdated, req);
  }
};
export {updateShipmentGatewayFedex};


const deleteShipmentGatewayFedexByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentGatewayFedexByIdUpdated method',
  args:{shipmentGatewayFedexId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayFedexs/${args.shipmentGatewayFedexId}?`, null, req);
  }
};
export {deleteShipmentGatewayFedexByIdUpdated};
