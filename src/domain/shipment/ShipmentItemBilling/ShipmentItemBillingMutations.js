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
import {ShipmentItemBillingInputType} from '../../shipment/ShipmentItemBilling/ShipmentItemBillingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createShipmentItemBilling = {
  type: GraphQLString,
  description: 'mutation for ofbiz createShipmentItemBilling method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentItemBillings/add?`, null, req);
  }
};
export {createShipmentItemBilling};


const updateShipmentItemBilling = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentItemBilling method',
  args:{shipmentItemBillingToBeUpdated: {type: ShipmentItemBillingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentItemBillings/${args.nullVal}?`, args.shipmentItemBillingToBeUpdated, req);
  }
};
export {updateShipmentItemBilling};


const deleteShipmentItemBillingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentItemBillingByIdUpdated method',
  args:{shipmentItemBillingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentItemBillings/${args.shipmentItemBillingId}?`, null, req);
  }
};
export {deleteShipmentItemBillingByIdUpdated};
