
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


const PaymentGatewayAuthorizeNetType = new GraphQLObjectType({
  name: 'PaymentGatewayAuthorizeNetType',
  description: 'Type for PaymentGatewayAuthorizeNet in accounting',

  fields: () => ({
    cpVersion: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayAuthorizeNet, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayAuthorizeNet.paymentGatewayConfigId}`)
    },
    method: {type: GraphQLString},
    transDescription: {type: GraphQLString},
    cpMarketType: {type: GraphQLString},
    certificateAlias: {type: GraphQLString},
    delimiterChar: {type: GraphQLString},
    emailCustomer: {type: GraphQLString},
    transactionUrl: {type: GraphQLString},
    userId: {type: GraphQLString},
    delimitedData: {type: GraphQLString},
    tranKey: {type: GraphQLString},
    apiVersion: {type: GraphQLString},
    emailMerchant: {type: GraphQLString},
    testMode: {type: GraphQLString},
    relayResponse: {type: GraphQLString},
    pwd: {type: GraphQLString},
    duplicateWindow: {type: GraphQLInt},
    cpDeviceType: {type: GraphQLString}
  })
});

export {PaymentGatewayAuthorizeNetType};
    




const PaymentGatewayAuthorizeNetInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayAuthorizeNetInputType',
  description: 'input type for PaymentGatewayAuthorizeNet',

  fields: () => ({
    apiVersion: {type: GraphQLString},
    certificateAlias: {type: GraphQLString},
    cpDeviceType: {type: GraphQLString},
    cpMarketType: {type: GraphQLString},
    cpVersion: {type: GraphQLString},
    delimitedData: {type: GraphQLString},
    delimiterChar: {type: GraphQLString},
    duplicateWindow: {type: GraphQLInt},
    emailCustomer: {type: GraphQLString},
    emailMerchant: {type: GraphQLString},
    method: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    pwd: {type: GraphQLString},
    relayResponse: {type: GraphQLString},
    testMode: {type: GraphQLString},
    tranKey: {type: GraphQLString},
    transDescription: {type: GraphQLString},
    transactionUrl: {type: GraphQLString},
    userId: {type: GraphQLString}
  })
});

export {PaymentGatewayAuthorizeNetInputType};
    