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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDelivery = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDelivery method',
  args:{deliveryToBeAdded: {type: DeliveryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/deliverys/add?`, args.deliveryToBeAdded, req);
  }
};
export {createDelivery};


const updateDelivery = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDelivery method',
  args:{deliveryToBeUpdated: {type: DeliveryInputType},deliveryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/deliverys/${args.deliveryId}?`, args.deliveryToBeUpdated, req);
  }
};
export {updateDelivery};


const deleteDeliveryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDeliveryByIdUpdated method',
  args:{deliveryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/deliverys/${args.deliveryId}?`, null, req);
  }
};
export {deleteDeliveryByIdUpdated};
