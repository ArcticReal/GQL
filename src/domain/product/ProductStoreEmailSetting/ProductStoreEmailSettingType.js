
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

import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';


const ProductStoreEmailSettingType = new GraphQLObjectType({
  name: 'ProductStoreEmailSettingType',
  description: 'Type for ProductStoreEmailSetting in product',

  fields: () => ({
    xslfoAttachScreenLocation: {type: GraphQLString},
    emailType: {type: GraphQLString},
    bodyScreenLocation: {type: GraphQLString},
    subject: {type: GraphQLString},
    fromAddress: {type: GraphQLString},
    bccAddress: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreEmailSetting, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreEmailSetting.productStoreId}`)
    },
    contentType: {type: GraphQLString},
    ccAddress: {type: GraphQLString}
  })
});

export {ProductStoreEmailSettingType};
    