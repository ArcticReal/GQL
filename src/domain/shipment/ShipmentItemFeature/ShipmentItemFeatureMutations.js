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
import {ShipmentItemFeatureInputType} from '../../shipment/ShipmentItemFeature/ShipmentItemFeatureInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentItemFeature = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentItemFeature method',
  args:{shipmentItemFeatureToBeAdded: {type: ShipmentItemFeatureInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentItemFeatures/add?`, args.shipmentItemFeatureToBeAdded, req);
  }
};
export {createShipmentItemFeature};


const deleteShipmentItemFeatureByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentItemFeatureByIdUpdated method',
  args:{shipmentItemFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentItemFeatures/${args.shipmentItemFeatureId}?`, null, req);
  }
};
export {deleteShipmentItemFeatureByIdUpdated};


const updateShipmentItemFeature = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentItemFeature method',
  args:{shipmentItemFeatureToBeUpdated: {type: ShipmentItemFeatureInputType},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentItemFeatures/${args.shipmentItemSeqId}?`, args.shipmentItemFeatureToBeUpdated, req);
  }
};
export {updateShipmentItemFeature};
