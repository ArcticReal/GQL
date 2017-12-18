
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


const PaymentGatewayCyberSourceType = new GraphQLObjectType({
  name: 'PaymentGatewayCyberSourceType',
  description: 'Type for PaymentGatewayCyberSource in accounting',

  fields: () => ({
    fraudScore: {type: GraphQLBoolean},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayCyberSource, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayCyberSource.paymentGatewayConfigId}`)
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
    




const PaymentGatewayCyberSourceInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayCyberSourceInputType',
  description: 'input type for PaymentGatewayCyberSource',

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

export {PaymentGatewayCyberSourceInputType};
    