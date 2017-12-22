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
import {ShipmentTypeResponseType} from '../../shipment/ShipmentType/ShipmentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentType = {
  type: ShipmentTypeResponseType,
  description: 'mutation for ofbiz createShipmentType method',
  args:{shipmentTypeToBeAdded: {type: ShipmentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentTypes/add?`, args.shipmentTypeToBeAdded, req);
  }
};
export {createShipmentType};


const updateShipmentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentType method',
  args:{shipmentTypeToBeUpdated: {type: ShipmentTypeInputType},shipmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentTypes/${args.shipmentTypeId}?`, args.shipmentTypeToBeUpdated, req);
  }
};
export {updateShipmentType};


const deleteShipmentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentTypeByIdUpdated method',
  args:{shipmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentTypes/${args.shipmentTypeId}?`, null, req);
  }
};
export {deleteShipmentTypeByIdUpdated};
