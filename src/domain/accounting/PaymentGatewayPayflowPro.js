
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
    




const PaymentGatewayPayflowProInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayPayflowProInputType',
  description: 'input type for PaymentGatewayPayflowPro',

  fields: () => ({
    cancelReturnUrl: {type: GraphQLString},
    certsPath: {type: GraphQLString},
    checkAvs: {type: GraphQLBoolean},
    checkCvv2: {type: GraphQLBoolean},
    enableTransmit: {type: GraphQLString},
    hostAddress: {type: GraphQLString},
    hostPort: {type: GraphQLInt},
    logFileName: {type: GraphQLString},
    loggingLevel: {type: GraphQLInt},
    maxLogFileSize: {type: GraphQLInt},
    partner: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    preAuth: {type: GraphQLBoolean},
    proxyAddress: {type: GraphQLString},
    proxyLogon: {type: GraphQLString},
    proxyPassword: {type: GraphQLString},
    proxyPort: {type: GraphQLInt},
    pwd: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    returnUrl: {type: GraphQLString},
    stackTraceOn: {type: GraphQLBoolean},
    timeout: {type: GraphQLInt},
    userId: {type: GraphQLString},
    vendor: {type: GraphQLString}
  })
});

export {PaymentGatewayPayflowProInputType};
    