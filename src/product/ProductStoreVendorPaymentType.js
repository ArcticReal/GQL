
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStore} from '../product/ProductStore.js';
import {PaymentMethodType} from '../product/PaymentMethodType.js';
import {Party} from '../product/Party.js';


const ProductStoreVendorPayment = new GraphQLObjectType({
  name: 'ProductStoreVendorPaymentType',
  description: 'Type for ProductStoreVendorPayment in product',

  fields: () => ({
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypes/find?=${args.paymentMethodTypeId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorPayment, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.vendorPartyId}`)
    },
    creditCardEnumId: {type: GraphQLString}
  })
});

export {ProductStoreVendorPayment};
    