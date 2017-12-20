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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentGatewayUps = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentGatewayUps method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentGatewayUpss/add?`, null, req);
  }
};
export {createShipmentGatewayUps};


const updateShipmentGatewayUps = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentGatewayUps method',
  args:{shipmentGatewayUpsToBeUpdated: {type: ShipmentGatewayUpsInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentGatewayUpss/${args.nullVal}?`, args.shipmentGatewayUpsToBeUpdated, req);
  }
};
export {updateShipmentGatewayUps};


const deleteShipmentGatewayUpsByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentGatewayUpsByIdUpdated method',
  args:{shipmentGatewayUpsId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentGatewayUpss/${args.shipmentGatewayUpsId}?`, null, req);
  }
};
export {deleteShipmentGatewayUpsByIdUpdated};
