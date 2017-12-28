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
import {ShipmentItemResponseType} from '../../shipment/ShipmentItem/ShipmentItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentItem = {
  type: ShipmentItemResponseType,
  description: 'mutation for ofbiz createShipmentItem method',
  args:{shipmentItemToBeAdded: {type: ShipmentItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentItems/add?`, args.shipmentItemToBeAdded, req);
  }
};
export {createShipmentItem};


const deleteShipmentItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentItemByIdUpdated method',
  args:{shipmentItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentItems/${args.shipmentItemId}?`, null, req);
  }
};
export {deleteShipmentItemByIdUpdated};


const updateShipmentItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentItem method',
  args:{shipmentItemToBeUpdated: {type: ShipmentItemInputType},shipmentItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentItems/${args.shipmentItemSeqId}?`, args.shipmentItemToBeUpdated, req);
  }
};
export {updateShipmentItem};
