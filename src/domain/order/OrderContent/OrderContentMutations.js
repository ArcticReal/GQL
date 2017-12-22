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
import {OrderContentInputType} from '../../order/OrderContent/OrderContentInputType.js';
import {OrderContentResponseType} from '../../order/OrderContent/OrderContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderContent = {
  type: OrderContentResponseType,
  description: 'mutation for ofbiz createOrderContent method',
  args:{orderContentToBeAdded: {type: OrderContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderContents/add?`, args.orderContentToBeAdded, req);
  }
};
export {createOrderContent};


const deleteOrderContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderContentByIdUpdated method',
  args:{orderContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderContents/${args.orderContentId}?`, null, req);
  }
};
export {deleteOrderContentByIdUpdated};


const updateOrderContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderContent method',
  args:{orderContentToBeUpdated: {type: OrderContentInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderContents/${args.orderItemSeqId}?`, args.orderContentToBeUpdated, req);
  }
};
export {updateOrderContent};
