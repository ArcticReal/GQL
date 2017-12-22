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

const PaymentGatewayCyberSourceResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayCyberSourceResponseType',
  description: 'response type for PaymentGatewayCyberSource',

  fields: () => ({
    apiVersion: {type: GraphQLString},
    autoBill: {type: GraphQLString},
    avsDeclineCodes: {type: GraphQLString},
    disableBillAvs: {type: GraphQLBoolean},
    enableDav: {type: GraphQLBoolean},
    fraudScore: {type: GraphQLBoolean},
    ignoreAvs: {type: GraphQLString},
    keysDir: {type: GraphQLString},
    keysFile: {type: GraphQLString},
    logDir: {type: GraphQLString},
    logEnabled: {type: GraphQLString},
    logFile: {type: GraphQLString},
    logSize: {type: GraphQLInt},
    merchantContact: {type: GraphQLString},
    merchantDescr: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    production: {type: GraphQLString}
  })
});

export {PaymentGatewayCyberSourceResponseType};
    