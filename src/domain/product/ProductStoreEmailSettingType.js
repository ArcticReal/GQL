
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreType} from '../product/ProductStoreType.js';


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
      resolve: (productStoreEmailSetting, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreEmailSetting.productStoreId}`)
    },
    contentType: {type: GraphQLString},
    ccAddress: {type: GraphQLString}
  })
});

export {ProductStoreEmailSettingType};
    