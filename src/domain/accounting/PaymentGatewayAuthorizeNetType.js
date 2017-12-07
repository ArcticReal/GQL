
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


const PaymentGatewayAuthorizeNetType = new GraphQLObjectType({
  name: 'PaymentGatewayAuthorizeNetType',
  description: 'Type for PaymentGatewayAuthorizeNet in accounting',

  fields: () => ({
    cpVersion: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayAuthorizeNet, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayAuthorizeNet.paymentGatewayConfigId}`)
    },
    method: {type: GraphQLString},
    transDescription: {type: GraphQLInt},
    cpMarketType: {type: GraphQLString},
    certificateAlias: {type: GraphQLInt},
    delimiterChar: {type: GraphQLString},
    emailCustomer: {type: GraphQLString},
    transactionUrl: {type: GraphQLInt},
    userId: {type: GraphQLInt},
    delimitedData: {type: GraphQLString},
    tranKey: {type: GraphQLInt},
    apiVersion: {type: GraphQLString},
    emailMerchant: {type: GraphQLString},
    testMode: {type: GraphQLString},
    relayResponse: {type: GraphQLString},
    pwd: {type: GraphQLInt},
    duplicateWindow: {type: GraphQLInt},
    cpDeviceType: {type: GraphQLString}
  })
});

export {PaymentGatewayAuthorizeNetType};
    