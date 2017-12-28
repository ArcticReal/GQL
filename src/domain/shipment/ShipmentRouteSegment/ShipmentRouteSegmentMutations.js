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
import {ShipmentRouteSegmentResponseType} from '../../shipment/ShipmentRouteSegment/ShipmentRouteSegmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentRouteSegment = {
  type: ShipmentRouteSegmentResponseType,
  description: 'mutation for ofbiz createShipmentRouteSegment method',
  args:{shipmentRouteSegmentToBeAdded: {type: ShipmentRouteSegmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentRouteSegments/add?`, args.shipmentRouteSegmentToBeAdded, req);
  }
};
export {createShipmentRouteSegment};


const updateShipmentRouteSegment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentRouteSegment method',
  args:{shipmentRouteSegmentToBeUpdated: {type: ShipmentRouteSegmentInputType},shipmentRouteSegmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentRouteSegments/${args.shipmentRouteSegmentId}?`, args.shipmentRouteSegmentToBeUpdated, req);
  }
};
export {updateShipmentRouteSegment};


const deleteShipmentRouteSegmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentRouteSegmentByIdUpdated method',
  args:{shipmentRouteSegmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentRouteSegments/${args.shipmentRouteSegmentId}?`, null, req);
  }
};
export {deleteShipmentRouteSegmentByIdUpdated};
