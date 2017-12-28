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
import {ShipmentGatewayUpsInputType} from '../../shipment/ShipmentGatewayUps/ShipmentGatewayUpsInputType.js';
import {ShipmentGatewayUpsResponseType} from '../../shipment/ShipmentGatewayUps/ShipmentGatewayUpsResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentGatewayUps = {
  type: ShipmentGatewayUpsResponseType,
  description: 'mutation for ofbiz createShipmentGatewayUps method',
  args:{shipmentGatewayUpsToBeAdded: {type: ShipmentGatewayUpsInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayUpss/add?`, args.shipmentGatewayUpsToBeAdded, req);
  }
};
export {createShipmentGatewayUps};


const updateShipmentGatewayUps = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentGatewayUps method',
  args:{shipmentGatewayUpsToBeUpdated: {type: ShipmentGatewayUpsInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayUpss/${args.nullVal}?`, args.shipmentGatewayUpsToBeUpdated, req);
  }
};
export {updateShipmentGatewayUps};


const deleteShipmentGatewayUpsByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentGatewayUpsByIdUpdated method',
  args:{shipmentGatewayUpsId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayUpss/${args.shipmentGatewayUpsId}?`, null, req);
  }
};
export {deleteShipmentGatewayUpsByIdUpdated};
