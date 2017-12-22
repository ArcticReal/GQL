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
import {ShipmentAttributeResponseType} from '../../shipment/ShipmentAttribute/ShipmentAttributeResponseType.js';
import {ShipmentAttributeInputType} from '../../shipment/ShipmentAttribute/ShipmentAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentAttribute = {
  type: ShipmentAttributeResponseType,
  description: 'mutation for ofbiz createShipmentAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentAttributes/add?`, null, req);
  }
};
export {createShipmentAttribute};


const updateShipmentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentAttribute method',
  args:{shipmentAttributeToBeUpdated: {type: ShipmentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentAttributes/${args.attrName}?`, args.shipmentAttributeToBeUpdated, req);
  }
};
export {updateShipmentAttribute};


const deleteShipmentAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentAttributeByIdUpdated method',
  args:{shipmentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentAttributes/${args.shipmentAttributeId}?`, null, req);
  }
};
export {deleteShipmentAttributeByIdUpdated};
