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
import {ProductOrderItemInputType} from '../../order/ProductOrderItem/ProductOrderItemInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductOrderItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductOrderItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/productOrderItems/add?`, null, req);
  }
};
export {createProductOrderItem};


const updateProductOrderItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductOrderItem method',
  args:{productOrderItemToBeUpdated: {type: ProductOrderItemInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/productOrderItems/${args.nullVal}?`, args.productOrderItemToBeUpdated, req);
  }
};
export {updateProductOrderItem};


const deleteProductOrderItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductOrderItemByIdUpdated method',
  args:{productOrderItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/productOrderItems/${args.productOrderItemId}?`, null, req);
  }
};
export {deleteProductOrderItemByIdUpdated};
