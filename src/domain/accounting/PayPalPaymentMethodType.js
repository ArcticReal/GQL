
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PostalAddressType} from '../party/PostalAddressType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';


const PayPalPaymentMethodType = new GraphQLObjectType({
  name: 'PayPalPaymentMethodType',
  description: 'Type for PayPalPaymentMethod in accounting',

  fields: () => ({
    expressCheckoutToken: {type: GraphQLString},
    avsAddr: {type: GraphQLBoolean},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (payPalPaymentMethod, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${payPalPaymentMethod.paymentMethodId}`)
    },
    payerId: {type: GraphQLString},
    avsZip: {type: GraphQLBoolean},
    correlationId: {type: GraphQLString},
    payerStatus: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (payPalPaymentMethod, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${payPalPaymentMethod.contactMechId}`)
    },
    transactionId: {type: GraphQLString}
  })
});

export {PayPalPaymentMethodType};
    