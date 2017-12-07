
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


const PaymentGatewaySagePayType = new GraphQLObjectType({
  name: 'PaymentGatewaySagePayType',
  description: 'Type for PaymentGatewaySagePay in accounting',

  fields: () => ({
    authenticationTransType: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewaySagePay, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewaySagePay.paymentGatewayConfigId}`)
    },
    voidUrl: {type: GraphQLString},
    testingHost: {type: GraphQLString},
    sagePayMode: {type: GraphQLString},
    releaseTransType: {type: GraphQLString},
    authoriseTransType: {type: GraphQLString},
    vendor: {type: GraphQLString},
    productionHost: {type: GraphQLString},
    refundUrl: {type: GraphQLString},
    protocolVersion: {type: GraphQLString},
    releaseUrl: {type: GraphQLString},
    authenticationUrl: {type: GraphQLString},
    authoriseUrl: {type: GraphQLString}
  })
});

export {PaymentGatewaySagePayType};
    