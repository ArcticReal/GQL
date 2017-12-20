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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentTypeAttrs/add?`, null, req);
  }
};
export {createShipmentTypeAttr};


const updateShipmentTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentTypeAttr method',
  args:{shipmentTypeAttrToBeUpdated: {type: ShipmentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentTypeAttrs/${args.attrName}?`, args.shipmentTypeAttrToBeUpdated, req);
  }
};
export {updateShipmentTypeAttr};


const deleteShipmentTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentTypeAttrByIdUpdated method',
  args:{shipmentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentTypeAttrs/${args.shipmentTypeAttrId}?`, null, req);
  }
};
export {deleteShipmentTypeAttrByIdUpdated};
