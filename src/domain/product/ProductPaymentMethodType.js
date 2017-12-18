
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

import {PaymentMethodTypeType} from '../accounting/PaymentMethodType.js';
import {ProductType} from '../product/Product.js';
import {ProductPricePurposeType} from '../product/ProductPricePurpose.js';


const ProductPaymentMethodTypeType = new GraphQLObjectType({
  name: 'ProductPaymentMethodTypeType',
  description: 'Type for ProductPaymentMethodType in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productPaymentMethodType, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productPaymentMethodType.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productPaymentMethodType, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${productPaymentMethodType.paymentMethodTypeId}`)
    },
    productPricePurpose: {
      type: ProductPricePurposeType,
      args : {productPricePurposeId: {type: GraphQLString}},
      resolve: (productPaymentMethodType, args, {loaders}) => loaders.ofbiz.load(`product/product/productPricePurposes/find?productPricePurposeId=${productPaymentMethodType.productPricePurposeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductPaymentMethodTypeType};
    




const ProductPaymentMethodTypeInputType = new GraphQLInputObjectType({
  name: 'ProductPaymentMethodTypeInputType',
  description: 'input type for ProductPaymentMethodType',

  fields: () => ({
    fromDate: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPaymentMethodTypeInputType};
    