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
import {OrderTermInputType} from '../../order/OrderTerm/OrderTermInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderTerm method',
  args:{orderTermToBeAdded: {type: OrderTermInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderTerms/add?`, args.orderTermToBeAdded, req);
  }
};
export {createOrderTerm};


const updateOrderTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderTerm method',
  args:{orderTermToBeUpdated: {type: OrderTermInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderTerms/${args.orderItemSeqId}?`, args.orderTermToBeUpdated, req);
  }
};
export {updateOrderTerm};


const deleteOrderTermByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderTermByIdUpdated method',
  args:{orderTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderTerms/${args.orderTermId}?`, null, req);
  }
};
export {deleteOrderTermByIdUpdated};
