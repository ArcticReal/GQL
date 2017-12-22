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
import {ShipmentStatusResponseType} from '../../shipment/ShipmentStatus/ShipmentStatusResponseType.js';
import {ShipmentStatusInputType} from '../../shipment/ShipmentStatus/ShipmentStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentStatus = {
  type: ShipmentStatusResponseType,
  description: 'mutation for ofbiz createShipmentStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentStatuss/add?`, null, req);
  }
};
export {createShipmentStatus};


const updateShipmentStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentStatus method',
  args:{shipmentStatusToBeUpdated: {type: ShipmentStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentStatuss/${args.nullVal}?`, args.shipmentStatusToBeUpdated, req);
  }
};
export {updateShipmentStatus};


const deleteShipmentStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentStatusByIdUpdated method',
  args:{shipmentStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentStatuss/${args.shipmentStatusId}?`, null, req);
  }
};
export {deleteShipmentStatusByIdUpdated};
