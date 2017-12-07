
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


const PaymentGatewayCyberSourceType = new GraphQLObjectType({
  name: 'PaymentGatewayCyberSourceType',
  description: 'Type for PaymentGatewayCyberSource in accounting',

  fields: () => ({
    fraudScore: {type: GraphQLBoolean},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayCyberSource, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayCyberSource.paymentGatewayConfigId}`)
    },
    production: {type: GraphQLString},
    keysDir: {type: GraphQLInt},
    merchantContact: {type: GraphQLInt},
    autoBill: {type: GraphQLString},
    enableDav: {type: GraphQLBoolean},
    apiVersion: {type: GraphQLString},
    keysFile: {type: GraphQLInt},
    merchantDescr: {type: GraphQLInt},
    logEnabled: {type: GraphQLString},
    merchantId: {type: GraphQLInt},
    logFile: {type: GraphQLInt},
    logSize: {type: GraphQLInt},
    ignoreAvs: {type: GraphQLString},
    disableBillAvs: {type: GraphQLBoolean},
    logDir: {type: GraphQLInt},
    avsDeclineCodes: {type: GraphQLInt}
  })
});

export {PaymentGatewayCyberSourceType};
    