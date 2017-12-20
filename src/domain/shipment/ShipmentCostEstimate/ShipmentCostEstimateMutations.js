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
import {ShipmentCostEstimateInputType} from '../../shipment/ShipmentCostEstimate/ShipmentCostEstimateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentCostEstimate = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentCostEstimate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentCostEstimates/add?`, null, req);
  }
};
export {createShipmentCostEstimate};


const updateShipmentCostEstimate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentCostEstimate method',
  args:{shipmentCostEstimateToBeUpdated: {type: ShipmentCostEstimateInputType},shipmentCostEstimateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentCostEstimates/${args.shipmentCostEstimateId}?`, args.shipmentCostEstimateToBeUpdated, req);
  }
};
export {updateShipmentCostEstimate};


const deleteShipmentCostEstimateByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentCostEstimateByIdUpdated method',
  args:{shipmentCostEstimateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentCostEstimates/${args.shipmentCostEstimateId}?`, null, req);
  }
};
export {deleteShipmentCostEstimateByIdUpdated};
