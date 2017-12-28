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
import {ShipmentBoxTypeInputType} from '../../shipment/ShipmentBoxType/ShipmentBoxTypeInputType.js';
import {ShipmentBoxTypeResponseType} from '../../shipment/ShipmentBoxType/ShipmentBoxTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentBoxType = {
  type: ShipmentBoxTypeResponseType,
  description: 'mutation for ofbiz createShipmentBoxType method',
  args:{shipmentBoxTypeToBeAdded: {type: ShipmentBoxTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentBoxTypes/add?`, args.shipmentBoxTypeToBeAdded, req);
  }
};
export {createShipmentBoxType};


const updateShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentBoxType method',
  args:{shipmentBoxTypeToBeUpdated: {type: ShipmentBoxTypeInputType},shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentBoxTypes/${args.shipmentBoxTypeId}?`, args.shipmentBoxTypeToBeUpdated, req);
  }
};
export {updateShipmentBoxType};


const deleteShipmentBoxTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentBoxTypeByIdUpdated method',
  args:{shipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentBoxTypes/${args.shipmentBoxTypeId}?`, null, req);
  }
};
export {deleteShipmentBoxTypeByIdUpdated};
