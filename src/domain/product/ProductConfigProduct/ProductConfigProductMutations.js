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
import {ProductConfigProductInputType} from '../../product/ProductConfigProduct/ProductConfigProductInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductConfigProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductConfigProduct method',
  args:{productConfigProductToBeAdded: {type: ProductConfigProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigProducts/add?`, args.productConfigProductToBeAdded, req);
  }
};
export {createProductConfigProduct};


const updateProductConfigProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductConfigProduct method',
  args:{productConfigProductToBeUpdated: {type: ProductConfigProductInputType},configOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigProducts/${args.configOptionId}?`, args.productConfigProductToBeUpdated, req);
  }
};
export {updateProductConfigProduct};


const deleteProductConfigProductByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductConfigProductByIdUpdated method',
  args:{productConfigProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigProducts/${args.productConfigProductId}?`, null, req);
  }
};
export {deleteProductConfigProductByIdUpdated};
