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
import {ProductStoreFinActSettingInputType} from '../../product/ProductStoreFinActSetting/ProductStoreFinActSettingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductStoreFinActSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreFinActSetting method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreFinActSettings/add?`, null, req);
  }
};
export {createProductStoreFinActSetting};


const updateProductStoreFinActSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreFinActSetting method',
  args:{productStoreFinActSettingToBeUpdated: {type: ProductStoreFinActSettingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreFinActSettings/${args.nullVal}?`, args.productStoreFinActSettingToBeUpdated, req);
  }
};
export {updateProductStoreFinActSetting};


const deleteProductStoreFinActSettingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreFinActSettingByIdUpdated method',
  args:{productStoreFinActSettingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreFinActSettings/${args.productStoreFinActSettingId}?`, null, req);
  }
};
export {deleteProductStoreFinActSettingByIdUpdated};
