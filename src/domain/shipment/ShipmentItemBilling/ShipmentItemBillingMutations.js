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
import {ShipmentItemBillingResponseType} from '../../shipment/ShipmentItemBilling/ShipmentItemBillingResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentItemBilling = {
  type: ShipmentItemBillingResponseType,
  description: 'mutation for ofbiz createShipmentItemBilling method',
  args:{shipmentItemBillingToBeAdded: {type: ShipmentItemBillingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentItemBillings/add?`, args.shipmentItemBillingToBeAdded, req);
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
