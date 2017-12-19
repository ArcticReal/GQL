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
import {ShipmentGatewayUspsInputType} from '../../shipment/ShipmentGatewayUsps/ShipmentGatewayUspsInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentGatewayUsps = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentGatewayUsps method',
  args:{shipmentGatewayUspsToBeAdded: {type: ShipmentGatewayUspsInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayUspss/add?`, args.shipmentGatewayUspsToBeAdded, req);
  }
};
export {createShipmentGatewayUsps};


const updateShipmentGatewayUsps = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentGatewayUsps method',
  args:{shipmentGatewayUspsToBeUpdated: {type: ShipmentGatewayUspsInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayUspss/${args.nullVal}?`, args.shipmentGatewayUspsToBeUpdated, req);
  }
};
export {updateShipmentGatewayUsps};


const deleteShipmentGatewayUspsByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentGatewayUspsByIdUpdated method',
  args:{shipmentGatewayUspsId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayUspss/${args.shipmentGatewayUspsId}?`, null, req);
  }
};
export {deleteShipmentGatewayUspsByIdUpdated};
