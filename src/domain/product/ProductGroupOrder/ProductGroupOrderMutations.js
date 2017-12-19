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
import {ProductGroupOrderInputType} from '../../product/ProductGroupOrder/ProductGroupOrderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductGroupOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductGroupOrder method',
  args:{productGroupOrderToBeAdded: {type: ProductGroupOrderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productGroupOrders/add?`, args.productGroupOrderToBeAdded, req);
  }
};
export {createProductGroupOrder};


const updateProductGroupOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductGroupOrder method',
  args:{productGroupOrderToBeUpdated: {type: ProductGroupOrderInputType},groupOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productGroupOrders/${args.groupOrderId}?`, args.productGroupOrderToBeUpdated, req);
  }
};
export {updateProductGroupOrder};


const deleteProductGroupOrderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductGroupOrderByIdUpdated method',
  args:{productGroupOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productGroupOrders/${args.productGroupOrderId}?`, null, req);
  }
};
export {deleteProductGroupOrderByIdUpdated};
