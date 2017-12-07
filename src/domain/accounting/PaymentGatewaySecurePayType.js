
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


const PaymentGatewaySecurePayType = new GraphQLObjectType({
  name: 'PaymentGatewaySecurePayType',
  description: 'Type for PaymentGatewaySecurePay in accounting',

  fields: () => ({
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewaySecurePay, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewaySecurePay.paymentGatewayConfigId}`)
    },
    merchantId: {type: GraphQLString},
    serverURL: {type: GraphQLString},
    pwd: {type: GraphQLString},
    processTimeout: {type: GraphQLInt},
    enableAmountRound: {type: GraphQLBoolean}
  })
});

export {PaymentGatewaySecurePayType};
    