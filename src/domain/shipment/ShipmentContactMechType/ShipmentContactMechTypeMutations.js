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
import {ShipmentContactMechTypeResponseType} from '../../shipment/ShipmentContactMechType/ShipmentContactMechTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentContactMechType = {
  type: ShipmentContactMechTypeResponseType,
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
