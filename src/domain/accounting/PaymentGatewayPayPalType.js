
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfigType.js';


const PaymentGatewayPayPalType = new GraphQLObjectType({
  name: 'PaymentGatewayPayPalType',
  description: 'Type for PaymentGatewayPayPal in accounting',

  fields: () => ({
    businessEmail: {type: GraphQLInt},
    apiUserName: {type: GraphQLString},
    redirectUrl: {type: GraphQLInt},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayPayPal, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayPayPal.paymentGatewayConfigId}`)
    },
    confirmTemplate: {type: GraphQLInt},
    cancelReturnUrl: {type: GraphQLInt},
    apiPassword: {type: GraphQLString},
    apiSignature: {type: GraphQLString},
    imageUrl: {type: GraphQLInt},
    requireConfirmedShipping: {type: GraphQLBoolean},
    notifyUrl: {type: GraphQLInt},
    apiEnvironment: {type: GraphQLString},
    confirmUrl: {type: GraphQLInt},
    returnUrl: {type: GraphQLInt},
    shippingCallbackUrl: {type: GraphQLString}
  })
});

export {PaymentGatewayPayPalType};
    