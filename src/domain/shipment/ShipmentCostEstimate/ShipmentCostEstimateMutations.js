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
import {ShipmentCostEstimateResponseType} from '../../shipment/ShipmentCostEstimate/ShipmentCostEstimateResponseType.js';
import {ShipmentCostEstimateInputType} from '../../shipment/ShipmentCostEstimate/ShipmentCostEstimateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentCostEstimate = {
  type: ShipmentCostEstimateResponseType,
  description: 'mutation for ofbiz createShipmentCostEstimate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentCostEstimates/add?`, null, req);
  }
};
export {createShipmentCostEstimate};


const updateShipmentCostEstimate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentCostEstimate method',
  args:{shipmentCostEstimateToBeUpdated: {type: ShipmentCostEstimateInputType},shipmentCostEstimateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentCostEstimates/${args.shipmentCostEstimateId}?`, args.shipmentCostEstimateToBeUpdated, req);
  }
};
export {updateShipmentCostEstimate};


const deleteShipmentCostEstimateByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentCostEstimateByIdUpdated method',
  args:{shipmentCostEstimateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentCostEstimates/${args.shipmentCostEstimateId}?`, null, req);
  }
};
export {deleteShipmentCostEstimateByIdUpdated};
