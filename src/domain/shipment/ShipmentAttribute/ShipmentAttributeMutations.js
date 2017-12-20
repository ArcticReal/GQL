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
import {ShipmentAttributeInputType} from '../../shipment/ShipmentAttribute/ShipmentAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentAttribute method',
  args:{shipmentAttributeToBeAdded: {type: ShipmentAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentAttributes/add?`, args.shipmentAttributeToBeAdded, req);
  }
};
export {createShipmentAttribute};


const updateShipmentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentAttribute method',
  args:{shipmentAttributeToBeUpdated: {type: ShipmentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentAttributes/${args.attrName}?`, args.shipmentAttributeToBeUpdated, req);
  }
};
export {updateShipmentAttribute};


const deleteShipmentAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentAttributeByIdUpdated method',
  args:{shipmentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentAttributes/${args.shipmentAttributeId}?`, null, req);
  }
};
export {deleteShipmentAttributeByIdUpdated};
