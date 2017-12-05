
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {PaymentMethodType} from '../product/PaymentMethodType.js';
import {ProductPricePurpose} from '../product/ProductPricePurpose.js';


const ProductPaymentMethodType = new GraphQLObjectType({
  name: 'ProductPaymentMethodTypeType',
  description: 'Type for ProductPaymentMethodType in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productPaymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productPaymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypes/find?=${args.paymentMethodTypeId}`)
    },
    productPricePurpose: {
      type: ProductPricePurposeType,
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPaymentMethodType, args, {loaders}) => loaders.ofbizArray.load(`productPricePurposes/find?=${args.productPricePurposeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductPaymentMethodType};
    