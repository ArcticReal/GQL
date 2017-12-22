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
import {OrderItemContactMechResponseType} from '../../order/OrderItemContactMech/OrderItemContactMechResponseType.js';
import {OrderItemContactMechInputType} from '../../order/OrderItemContactMech/OrderItemContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemContactMech = {
  type: OrderItemContactMechResponseType,
  description: 'mutation for ofbiz createOrderItemContactMech method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemContactMechs/add?`, null, req);
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
