
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


const PaymentGatewayPayflowProType = new GraphQLObjectType({
  name: 'PaymentGatewayPayflowProType',
  description: 'Type for PaymentGatewayPayflowPro in accounting',

  fields: () => ({
    redirectUrl: {type: GraphQLInt},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayPayflowPro, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayPayflowPro.paymentGatewayConfigId}`)
    },
    proxyPassword: {type: GraphQLInt},
    cancelReturnUrl: {type: GraphQLInt},
    enableTransmit: {type: GraphQLInt},
    checkAvs: {type: GraphQLBoolean},
    stackTraceOn: {type: GraphQLBoolean},
    userId: {type: GraphQLString},
    checkCvv2: {type: GraphQLBoolean},
    timeout: {type: GraphQLInt},
    proxyPort: {type: GraphQLInt},
    proxyLogon: {type: GraphQLInt},
    certsPath: {type: GraphQLInt},
    partner: {type: GraphQLString},
    vendor: {type: GraphQLString},
    logFileName: {type: GraphQLInt},
    hostPort: {type: GraphQLInt},
    hostAddress: {type: GraphQLInt},
    preAuth: {type: GraphQLBoolean},
    proxyAddress: {type: GraphQLInt},
    pwd: {type: GraphQLInt},
    returnUrl: {type: GraphQLInt},
    loggingLevel: {type: GraphQLInt},
    maxLogFileSize: {type: GraphQLInt}
  })
});

export {PaymentGatewayPayflowProType};
    