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
import {ShipmentItemFeatureResponseType} from '../../shipment/ShipmentItemFeature/ShipmentItemFeatureResponseType.js';
import {ShipmentItemFeatureInputType} from '../../shipment/ShipmentItemFeature/ShipmentItemFeatureInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentItemFeature = {
  type: ShipmentItemFeatureResponseType,
  description: 'mutation for ofbiz createShipmentItemFeature method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentItemFeatures/add?`, null, req);
  }
};
export {createShipmentItemFeature};


const deleteShipmentItemFeatureByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentItemFeatureByIdUpdated method',
  args:{shipmentItemFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentItemFeatures/${args.shipmentItemFeatureId}?`, null, req);
  }
};
export {deleteShipmentItemFeatureByIdUpdated};


const updateShipmentItemFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentItemFeature method',
  args:{shipmentItemFeatureToBeUpdated: {type: ShipmentItemFeatureInputType},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentItemFeatures/${args.shipmentItemSeqId}?`, args.shipmentItemFeatureToBeUpdated, req);
  }
};
export {updateShipmentItemFeature};
