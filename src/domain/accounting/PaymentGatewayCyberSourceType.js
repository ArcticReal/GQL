
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
    keysDir: {type: GraphQLString},
    merchantContact: {type: GraphQLString},
    autoBill: {type: GraphQLString},
    enableDav: {type: GraphQLBoolean},
    apiVersion: {type: GraphQLString},
    keysFile: {type: GraphQLString},
    merchantDescr: {type: GraphQLString},
    logEnabled: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    logFile: {type: GraphQLString},
    logSize: {type: GraphQLInt},
    ignoreAvs: {type: GraphQLString},
    disableBillAvs: {type: GraphQLBoolean},
    logDir: {type: GraphQLString},
    avsDeclineCodes: {type: GraphQLString}
  })
});

export {PaymentGatewayCyberSourceType};
    