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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentMethodType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentMethodType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentMethodTypes/add?`, null, req);
  }
};
export {createShipmentMethodType};


const updateShipmentMethodType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentMethodType method',
  args:{shipmentMethodTypeToBeUpdated: {type: ShipmentMethodTypeInputType},shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentMethodTypes/${args.shipmentMethodTypeId}?`, args.shipmentMethodTypeToBeUpdated, req);
  }
};
export {updateShipmentMethodType};


const deleteShipmentMethodTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentMethodTypeByIdUpdated method',
  args:{shipmentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentMethodTypes/${args.shipmentMethodTypeId}?`, null, req);
  }
};
export {deleteShipmentMethodTypeByIdUpdated};
