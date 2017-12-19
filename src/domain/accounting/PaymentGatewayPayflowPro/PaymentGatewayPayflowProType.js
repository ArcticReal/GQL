
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

import {PaymentGatewayConfigType} from '../../accounting/PaymentGatewayConfig/PaymentGatewayConfigType.js';


const PaymentGatewayPayflowProType = new GraphQLObjectType({
  name: 'PaymentGatewayPayflowProType',
  description: 'Type for PaymentGatewayPayflowPro in accounting',

  fields: () => ({
    redirectUrl: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayPayflowPro, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayPayflowPro.paymentGatewayConfigId}`)
    },
    proxyPassword: {type: GraphQLString},
    cancelReturnUrl: {type: GraphQLString},
    enableTransmit: {type: GraphQLString},
    checkAvs: {type: GraphQLBoolean},
    stackTraceOn: {type: GraphQLBoolean},
    userId: {type: GraphQLString},
    checkCvv2: {type: GraphQLBoolean},
    timeout: {type: GraphQLInt},
    proxyPort: {type: GraphQLInt},
    proxyLogon: {type: GraphQLString},
    certsPath: {type: GraphQLString},
    partner: {type: GraphQLString},
    vendor: {type: GraphQLString},
    logFileName: {type: GraphQLString},
    hostPort: {type: GraphQLInt},
    hostAddress: {type: GraphQLString},
    preAuth: {type: GraphQLBoolean},
    proxyAddress: {type: GraphQLString},
    pwd: {type: GraphQLString},
    returnUrl: {type: GraphQLString},
    loggingLevel: {type: GraphQLInt},
    maxLogFileSize: {type: GraphQLInt}
  })
});

export {PaymentGatewayPayflowProType};
    