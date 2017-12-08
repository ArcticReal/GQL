
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

import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfig.js';


const PaymentGatewayPayPalType = new GraphQLObjectType({
  name: 'PaymentGatewayPayPalType',
  description: 'Type for PaymentGatewayPayPal in accounting',

  fields: () => ({
    businessEmail: {type: GraphQLString},
    apiUserName: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayPayPal, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayPayPal.paymentGatewayConfigId}`)
    },
    confirmTemplate: {type: GraphQLString},
    cancelReturnUrl: {type: GraphQLString},
    apiPassword: {type: GraphQLString},
    apiSignature: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    requireConfirmedShipping: {type: GraphQLBoolean},
    notifyUrl: {type: GraphQLString},
    apiEnvironment: {type: GraphQLString},
    confirmUrl: {type: GraphQLString},
    returnUrl: {type: GraphQLString},
    shippingCallbackUrl: {type: GraphQLString}
  })
});

export {PaymentGatewayPayPalType};
    




const PaymentGatewayPayPalInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayPayPalInputType',
  description: 'input type for PaymentGatewayPayPal in accounting',

  fields: () => ({
    businessEmail: {type: GraphQLString},
    apiUserName: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    confirmTemplate: {type: GraphQLString},
    cancelReturnUrl: {type: GraphQLString},
    apiPassword: {type: GraphQLString},
    apiSignature: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    requireConfirmedShipping: {type: GraphQLBoolean},
    notifyUrl: {type: GraphQLString},
    apiEnvironment: {type: GraphQLString},
    confirmUrl: {type: GraphQLString},
    returnUrl: {type: GraphQLString},
    shippingCallbackUrl: {type: GraphQLString}
  })
});

export {PaymentGatewayPayPalInputType};
    