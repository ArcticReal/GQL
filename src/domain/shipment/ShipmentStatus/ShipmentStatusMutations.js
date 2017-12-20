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
import {ShipmentStatusInputType} from '../../shipment/ShipmentStatus/ShipmentStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentStatus method',
  args:{shipmentStatusToBeAdded: {type: ShipmentStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentStatuss/add?`, args.shipmentStatusToBeAdded, req);
  }
};
export {createShipmentStatus};


const updateShipmentStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentStatus method',
  args:{shipmentStatusToBeUpdated: {type: ShipmentStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentStatuss/${args.nullVal}?`, args.shipmentStatusToBeUpdated, req);
  }
};
export {updateShipmentStatus};


const deleteShipmentStatusByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentStatusByIdUpdated method',
  args:{shipmentStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentStatuss/${args.shipmentStatusId}?`, null, req);
  }
};
export {deleteShipmentStatusByIdUpdated};
