
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


const PaymentGatewayiDEALType = new GraphQLObjectType({
  name: 'PaymentGatewayiDEALType',
  description: 'Type for PaymentGatewayiDEAL in accounting',

  fields: () => ({
    expirationPeriod: {type: GraphQLInt},
    merchantReturnURL: {type: GraphQLInt},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayiDEAL, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayiDEAL.paymentGatewayConfigId}`)
    },
    merchantId: {type: GraphQLInt},
    acquirerKeyStoreFilename: {type: GraphQLInt},
    merchantSubId: {type: GraphQLInt},
    merchantKeyStorePassword: {type: GraphQLInt},
    acquirerURL: {type: GraphQLInt},
    acquirerTimeout: {type: GraphQLInt},
    privateCert: {type: GraphQLInt},
    acquirerKeyStorePassword: {type: GraphQLInt},
    merchantKeyStoreFilename: {type: GraphQLInt}
  })
});

export {PaymentGatewayiDEALType};
    