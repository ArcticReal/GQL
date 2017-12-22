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
import {ProductConfigProductResponseType} from '../../product/ProductConfigProduct/ProductConfigProductResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfigProduct = {
  type: ProductConfigProductResponseType,
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
