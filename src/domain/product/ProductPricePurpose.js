
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

import {ProductPaymentMethodTypeType} from '../product/ProductPaymentMethodType.js';
import {ProductPriceType} from '../product/ProductPrice.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';


const ProductPricePurposeType = new GraphQLObjectType({
  name: 'ProductPricePurposeType',
  description: 'Type for ProductPricePurpose in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {},
      resolve: (productPricePurpose, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPrices/find?productPricePurposeId=${productPricePurpose.productPricePurposeId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {},
      resolve: (productPricePurpose, args, {loaders}) => loaders.ofbizArray.load(`order/orderPaymentPreferences/find?productPricePurposeId=${productPricePurpose.productPricePurposeId}`)
    },
    productPaymentMethodTypes: {
      type: new GraphQLList(ProductPaymentMethodTypeType),
      args : {},
      resolve: (productPricePurpose, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPaymentMethodTypes/find?productPricePurposeId=${productPricePurpose.productPricePurposeId}`)
    }
  })
});

export {ProductPricePurposeType};
    




const ProductPricePurposeInputType = new GraphQLInputObjectType({
  name: 'ProductPricePurposeInputType',
  description: 'input type for ProductPricePurpose',

  fields: () => ({
    description: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString}
  })
});

export {ProductPricePurposeInputType};
    