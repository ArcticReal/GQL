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
import {ProductStoreEmailSettingInputType} from '../../product/ProductStoreEmailSetting/ProductStoreEmailSettingInputType.js';
import {ProductStoreEmailSettingResponseType} from '../../product/ProductStoreEmailSetting/ProductStoreEmailSettingResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreEmailSetting = {
  type: ProductStoreEmailSettingResponseType,
  description: 'mutation for ofbiz createProductStoreEmailSetting method',
  args:{productStoreEmailSettingToBeAdded: {type: ProductStoreEmailSettingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreEmailSettings/add?`, args.productStoreEmailSettingToBeAdded, req);
  }
};
export {createProductStoreEmailSetting};


const updateProductStoreEmailSetting = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreEmailSetting method',
  args:{productStoreEmailSettingToBeUpdated: {type: ProductStoreEmailSettingInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreEmailSettings/${args.nullVal}?`, args.productStoreEmailSettingToBeUpdated, req);
  }
};
export {updateProductStoreEmailSetting};


const deleteProductStoreEmailSettingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreEmailSettingByIdUpdated method',
  args:{productStoreEmailSettingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreEmailSettings/${args.productStoreEmailSettingId}?`, null, req);
  }
};
export {deleteProductStoreEmailSettingByIdUpdated};
