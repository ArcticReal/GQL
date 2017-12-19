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
import {ProductConfigConfigInputType} from '../../product/ProductConfigConfig/ProductConfigConfigInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductConfigConfig = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductConfigConfig method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigConfigs/add?`, null, req);
  }
};
export {createProductConfigConfig};


const updateProductConfigConfig = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductConfigConfig method',
  args:{productConfigConfigToBeUpdated: {type: ProductConfigConfigInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigConfigs/${args.nullVal}?`, args.productConfigConfigToBeUpdated, req);
  }
};
export {updateProductConfigConfig};


const deleteProductConfigConfigByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductConfigConfigByIdUpdated method',
  args:{productConfigConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigConfigs/${args.productConfigConfigId}?`, null, req);
  }
};
export {deleteProductConfigConfigByIdUpdated};
