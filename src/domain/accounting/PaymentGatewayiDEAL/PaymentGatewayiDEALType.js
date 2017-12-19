
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


const PaymentGatewayiDEALType = new GraphQLObjectType({
  name: 'PaymentGatewayiDEALType',
  description: 'Type for PaymentGatewayiDEAL in accounting',

  fields: () => ({
    expirationPeriod: {type: GraphQLString},
    merchantReturnURL: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayiDEAL, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayiDEAL.paymentGatewayConfigId}`)
    },
    merchantId: {type: GraphQLString},
    acquirerKeyStoreFilename: {type: GraphQLString},
    merchantSubId: {type: GraphQLString},
    merchantKeyStorePassword: {type: GraphQLString},
    acquirerURL: {type: GraphQLString},
    acquirerTimeout: {type: GraphQLString},
    privateCert: {type: GraphQLString},
    acquirerKeyStorePassword: {type: GraphQLString},
    merchantKeyStoreFilename: {type: GraphQLString}
  })
});

export {PaymentGatewayiDEALType};
    