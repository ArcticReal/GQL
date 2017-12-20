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
import {ShipmentTypeInputType} from '../../shipment/ShipmentType/ShipmentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentTypes/add?`, null, req);
  }
};
export {createShipmentType};


const updateShipmentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentType method',
  args:{shipmentTypeToBeUpdated: {type: ShipmentTypeInputType},shipmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentTypes/${args.shipmentTypeId}?`, args.shipmentTypeToBeUpdated, req);
  }
};
export {updateShipmentType};


const deleteShipmentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentTypeByIdUpdated method',
  args:{shipmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentTypes/${args.shipmentTypeId}?`, null, req);
  }
};
export {deleteShipmentTypeByIdUpdated};
