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
import {DeliveryInputType} from '../../shipment/Delivery/DeliveryInputType.js';
import {DeliveryResponseType} from '../../shipment/Delivery/DeliveryResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDelivery = {
  type: DeliveryResponseType,
  description: 'mutation for ofbiz createDelivery method',
  args:{deliveryToBeAdded: {type: DeliveryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/deliverys/add?`, args.deliveryToBeAdded, req);
  }
};
export {createDelivery};


const updateDelivery = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDelivery method',
  args:{deliveryToBeUpdated: {type: DeliveryInputType},deliveryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/deliverys/${args.deliveryId}?`, args.deliveryToBeUpdated, req);
  }
};
export {updateDelivery};


const deleteDeliveryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDeliveryByIdUpdated method',
  args:{deliveryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/deliverys/${args.deliveryId}?`, null, req);
  }
};
export {deleteDeliveryByIdUpdated};
