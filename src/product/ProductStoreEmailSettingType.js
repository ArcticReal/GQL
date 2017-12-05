
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Enumeration} from '../product/Enumeration.js';
import {ProductStore} from '../product/ProductStore.js';


const ProductStoreEmailSetting = new GraphQLObjectType({
  name: 'ProductStoreEmailSettingType',
  description: 'Type for ProductStoreEmailSetting in product',

  fields: () => ({
    xslfoAttachScreenLocation: {type: GraphQLString},
    emailType: {
      type: EnumerationType,
      args : {emailType: {type: GraphQLString}},
      resolve: (productStoreEmailSetting, args, {loaders}) => loaders.ofbizArray.load(`enumerations/find?enumId=${args.emailType}`)
    },
    bodyScreenLocation: {type: GraphQLString},
    subject: {type: GraphQLString},
    fromAddress: {type: GraphQLString},
    bccAddress: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreEmailSetting, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    contentType: {type: GraphQLString},
    ccAddress: {type: GraphQLString}
  })
});

export {ProductStoreEmailSetting};
    