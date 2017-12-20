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
import {ShipmentRouteSegmentInputType} from '../../shipment/ShipmentRouteSegment/ShipmentRouteSegmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentRouteSegment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentRouteSegment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentRouteSegments/add?`, null, req);
  }
};
export {createShipmentRouteSegment};


const updateShipmentRouteSegment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentRouteSegment method',
  args:{shipmentRouteSegmentToBeUpdated: {type: ShipmentRouteSegmentInputType},shipmentRouteSegmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentRouteSegments/${args.shipmentRouteSegmentId}?`, args.shipmentRouteSegmentToBeUpdated, req);
  }
};
export {updateShipmentRouteSegment};


const deleteShipmentRouteSegmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentRouteSegmentByIdUpdated method',
  args:{shipmentRouteSegmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentRouteSegments/${args.shipmentRouteSegmentId}?`, null, req);
  }
};
export {deleteShipmentRouteSegmentByIdUpdated};
