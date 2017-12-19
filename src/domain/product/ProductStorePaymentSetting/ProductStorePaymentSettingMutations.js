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
import {ProductStorePaymentSettingInputType} from '../../product/ProductStorePaymentSetting/ProductStorePaymentSettingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductStorePaymentSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStorePaymentSetting method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStorePaymentSettings/add?`, null, req);
  }
};
export {createProductStorePaymentSetting};


const updateProductStorePaymentSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStorePaymentSetting method',
  args:{productStorePaymentSettingToBeUpdated: {type: ProductStorePaymentSettingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStorePaymentSettings/${args.nullVal}?`, args.productStorePaymentSettingToBeUpdated, req);
  }
};
export {updateProductStorePaymentSetting};


const deleteProductStorePaymentSettingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStorePaymentSettingByIdUpdated method',
  args:{productStorePaymentSettingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStorePaymentSettings/${args.productStorePaymentSettingId}?`, null, req);
  }
};
export {deleteProductStorePaymentSettingByIdUpdated};
