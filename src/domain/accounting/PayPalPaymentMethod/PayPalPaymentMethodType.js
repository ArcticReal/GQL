
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

import {PostalAddressType} from '../../party/PostalAddress/PostalAddressType.js';
import {PaymentMethodType} from '../../accounting/PaymentMethod/PaymentMethodType.js';


const PayPalPaymentMethodType = new GraphQLObjectType({
  name: 'PayPalPaymentMethodType',
  description: 'Type for PayPalPaymentMethod in accounting',

  fields: () => ({
    expressCheckoutToken: {type: GraphQLString},
    avsAddr: {type: GraphQLBoolean},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (payPalPaymentMethod, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${payPalPaymentMethod.paymentMethodId}`)
    },
    payerId: {type: GraphQLString},
    avsZip: {type: GraphQLBoolean},
    correlationId: {type: GraphQLString},
    payerStatus: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (payPalPaymentMethod, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${payPalPaymentMethod.contactMechId}`)
    },
    transactionId: {type: GraphQLString}
  })
});

export {PayPalPaymentMethodType};
    