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
import {ShipmentItemInputType} from '../../shipment/ShipmentItem/ShipmentItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentItem method',
  args:{shipmentItemToBeAdded: {type: ShipmentItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentItems/add?`, args.shipmentItemToBeAdded, req);
  }
};
export {createShipmentItem};


const deleteShipmentItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentItemByIdUpdated method',
  args:{shipmentItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentItems/${args.shipmentItemId}?`, null, req);
  }
};
export {deleteShipmentItemByIdUpdated};


const updateShipmentItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentItem method',
  args:{shipmentItemToBeUpdated: {type: ShipmentItemInputType},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentItems/${args.shipmentItemSeqId}?`, args.shipmentItemToBeUpdated, req);
  }
};
export {updateShipmentItem};
