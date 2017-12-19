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
import {ShipmentContactMechTypeInputType} from '../../shipment/ShipmentContactMechType/ShipmentContactMechTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentContactMechType method',
  args:{shipmentContactMechTypeToBeAdded: {type: ShipmentContactMechTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentContactMechTypes/add?`, args.shipmentContactMechTypeToBeAdded, req);
  }
};
export {createShipmentContactMechType};


const updateShipmentContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentContactMechType method',
  args:{shipmentContactMechTypeToBeUpdated: {type: ShipmentContactMechTypeInputType},shipmentContactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentContactMechTypes/${args.shipmentContactMechTypeId}?`, args.shipmentContactMechTypeToBeUpdated, req);
  }
};
export {updateShipmentContactMechType};


const deleteShipmentContactMechTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentContactMechTypeByIdUpdated method',
  args:{shipmentContactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentContactMechTypes/${args.shipmentContactMechTypeId}?`, null, req);
  }
};
export {deleteShipmentContactMechTypeByIdUpdated};
