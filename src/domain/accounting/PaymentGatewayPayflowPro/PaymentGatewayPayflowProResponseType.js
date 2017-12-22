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

const PaymentGatewayPayflowProResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayPayflowProResponseType',
  description: 'response type for PaymentGatewayPayflowPro',

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

export {PaymentGatewayPayflowProResponseType};
    