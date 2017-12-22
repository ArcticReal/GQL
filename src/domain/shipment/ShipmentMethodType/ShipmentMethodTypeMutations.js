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
import {ShipmentMethodTypeInputType} from '../../shipment/ShipmentMethodType/ShipmentMethodTypeInputType.js';
import {ShipmentMethodTypeResponseType} from '../../shipment/ShipmentMethodType/ShipmentMethodTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentMethodType = {
  type: ShipmentMethodTypeResponseType,
  description: 'mutation for ofbiz createShipmentMethodType method',
  args:{shipmentMethodTypeToBeAdded: {type: ShipmentMethodTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentMethodTypes/add?`, args.shipmentMethodTypeToBeAdded, req);
  }
};
export {createShipmentMethodType};


const updateShipmentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentMethodType method',
  args:{shipmentMethodTypeToBeUpdated: {type: ShipmentMethodTypeInputType},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentMethodTypes/${args.shipmentMethodTypeId}?`, args.shipmentMethodTypeToBeUpdated, req);
  }
};
export {updateShipmentMethodType};


const deleteShipmentMethodTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentMethodTypeByIdUpdated method',
  args:{shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentMethodTypes/${args.shipmentMethodTypeId}?`, null, req);
  }
};
export {deleteShipmentMethodTypeByIdUpdated};
