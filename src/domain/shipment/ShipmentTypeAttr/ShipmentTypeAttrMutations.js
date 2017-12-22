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
import {ShipmentTypeAttrInputType} from '../../shipment/ShipmentTypeAttr/ShipmentTypeAttrInputType.js';
import {ShipmentTypeAttrResponseType} from '../../shipment/ShipmentTypeAttr/ShipmentTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentTypeAttr = {
  type: ShipmentTypeAttrResponseType,
  description: 'mutation for ofbiz createShipmentTypeAttr method',
  args:{shipmentTypeAttrToBeAdded: {type: ShipmentTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentTypeAttrs/add?`, args.shipmentTypeAttrToBeAdded, req);
  }
};
export {createShipmentTypeAttr};


const updateShipmentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentTypeAttr method',
  args:{shipmentTypeAttrToBeUpdated: {type: ShipmentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentTypeAttrs/${args.attrName}?`, args.shipmentTypeAttrToBeUpdated, req);
  }
};
export {updateShipmentTypeAttr};


const deleteShipmentTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentTypeAttrByIdUpdated method',
  args:{shipmentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentTypeAttrs/${args.shipmentTypeAttrId}?`, null, req);
  }
};
export {deleteShipmentTypeAttrByIdUpdated};
