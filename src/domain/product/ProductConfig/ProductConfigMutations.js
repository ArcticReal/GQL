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
import {ProductConfigInputType} from '../../product/ProductConfig/ProductConfigInputType.js';
import {ProductConfigResponseType} from '../../product/ProductConfig/ProductConfigResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfig = {
  type: ProductConfigResponseType,
  description: 'mutation for ofbiz createProductConfig method',
  args:{productConfigToBeAdded: {type: ProductConfigInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigs/add?`, args.productConfigToBeAdded, req);
  }
};
export {createProductConfig};


const updateProductConfig = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductConfig method',
  args:{productConfigToBeUpdated: {type: ProductConfigInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigs/${args.nullVal}?`, args.productConfigToBeUpdated, req);
  }
};
export {updateProductConfig};


const deleteProductConfigByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductConfigByIdUpdated method',
  args:{productConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigs/${args.productConfigId}?`, null, req);
  }
};
export {deleteProductConfigByIdUpdated};
