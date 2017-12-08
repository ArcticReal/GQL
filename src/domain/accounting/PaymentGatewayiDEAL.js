
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


const PaymentGatewayiDEALType = new GraphQLObjectType({
  name: 'PaymentGatewayiDEALType',
  description: 'Type for PaymentGatewayiDEAL in accounting',

  fields: () => ({
    expirationPeriod: {type: GraphQLString},
    merchantReturnURL: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayiDEAL, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayiDEAL.paymentGatewayConfigId}`)
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
    




const PaymentGatewayiDEALInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayiDEALInputType',
  description: 'input type for PaymentGatewayiDEAL in accounting',

  fields: () => ({
    expirationPeriod: {type: GraphQLString},
    merchantReturnURL: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
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

export {PaymentGatewayiDEALInputType};
    