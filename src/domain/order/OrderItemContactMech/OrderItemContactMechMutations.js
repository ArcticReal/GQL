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
import {OrderItemContactMechInputType} from '../../order/OrderItemContactMech/OrderItemContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemContactMech method',
  args:{orderItemContactMechToBeAdded: {type: OrderItemContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemContactMechs/add?`, args.orderItemContactMechToBeAdded, req);
  }
};
export {createOrderItemContactMech};


const deleteOrderItemContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemContactMechByIdUpdated method',
  args:{orderItemContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemContactMechs/${args.orderItemContactMechId}?`, null, req);
  }
};
export {deleteOrderItemContactMechByIdUpdated};


const updateOrderItemContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemContactMech method',
  args:{orderItemContactMechToBeUpdated: {type: OrderItemContactMechInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemContactMechs/${args.orderItemSeqId}?`, args.orderItemContactMechToBeUpdated, req);
  }
};
export {updateOrderItemContactMech};
