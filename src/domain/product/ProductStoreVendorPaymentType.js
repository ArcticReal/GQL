
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentMethodTypeType} from '../accounting/PaymentMethodTypeType.js';
import {PartyType} from '../party/PartyType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';


const ProductStoreVendorPaymentType = new GraphQLObjectType({
  name: 'ProductStoreVendorPaymentType',
  description: 'Type for ProductStoreVendorPayment in product',

  fields: () => ({
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreVendorPayment.productStoreId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${productStoreVendorPayment.paymentMethodTypeId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productStoreVendorPayment.vendorPartyId}`)
    },
    creditCardEnumId: {type: GraphQLString}
  })
});

export {ProductStoreVendorPaymentType};
    