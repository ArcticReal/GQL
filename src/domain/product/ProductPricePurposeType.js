
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPaymentMethodTypeType} from '../product/ProductPaymentMethodTypeType.js';
import {ProductPriceType} from '../product/ProductPriceType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';


const ProductPricePurposeType = new GraphQLObjectType({
  name: 'ProductPricePurposeType',
  description: 'Type for ProductPricePurpose in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    productPrice: {
      type: new GraphQLList(ProductPriceType),
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPricePurpose, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?productPricePurposeId=${productPricePurpose.productPricePurposeId}`)
    },
    orderPaymentPreference: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPricePurpose, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?productPricePurposeId=${productPricePurpose.productPricePurposeId}`)
    },
    productPaymentMethodType: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPricePurpose, args, {loaders}) => loaders.ofbizArray.load(`productPaymentMethodTypes/find?productPricePurposeId=${productPricePurpose.productPricePurposeId}`)
    }
  })
});

export {ProductPricePurposeType};
    