
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
import {PartyType} from '../party/Party.js';
import {ProductStoreType} from '../product/ProductStore.js';


const ProductStoreVendorPaymentType = new GraphQLObjectType({
  name: 'ProductStoreVendorPaymentType',
  description: 'Type for ProductStoreVendorPayment in product',

  fields: () => ({
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreVendorPayment.productStoreId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${productStoreVendorPayment.paymentMethodTypeId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productStoreVendorPayment.vendorPartyId}`)
    },
    creditCardEnumId: {type: GraphQLString}
  })
});

export {ProductStoreVendorPaymentType};
    




const ProductStoreVendorPaymentInputType = new GraphQLInputObjectType({
  name: 'ProductStoreVendorPaymentInputType',
  description: 'input type for ProductStoreVendorPayment',

  fields: () => ({
    creditCardEnumId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {ProductStoreVendorPaymentInputType};
    