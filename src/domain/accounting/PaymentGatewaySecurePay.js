
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


const PaymentGatewaySecurePayType = new GraphQLObjectType({
  name: 'PaymentGatewaySecurePayType',
  description: 'Type for PaymentGatewaySecurePay in accounting',

  fields: () => ({
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewaySecurePay, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewaySecurePay.paymentGatewayConfigId}`)
    },
    merchantId: {type: GraphQLString},
    serverURL: {type: GraphQLString},
    pwd: {type: GraphQLString},
    processTimeout: {type: GraphQLInt},
    enableAmountRound: {type: GraphQLBoolean}
  })
});

export {PaymentGatewaySecurePayType};
    




const PaymentGatewaySecurePayInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewaySecurePayInputType',
  description: 'input type for PaymentGatewaySecurePay in accounting',

  fields: () => ({
    paymentGatewayConfigId: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    serverURL: {type: GraphQLString},
    pwd: {type: GraphQLString},
    processTimeout: {type: GraphQLInt},
    enableAmountRound: {type: GraphQLBoolean}
  })
});

export {PaymentGatewaySecurePayInputType};
    