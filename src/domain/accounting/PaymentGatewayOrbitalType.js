
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


const PaymentGatewayOrbitalType = new GraphQLObjectType({
  name: 'PaymentGatewayOrbitalType',
  description: 'Type for PaymentGatewayOrbital in accounting',

  fields: () => ({
    engineClass: {type: GraphQLString},
    hostName: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayOrbital, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayOrbital.paymentGatewayConfigId}`)
    },
    portFailover: {type: GraphQLInt},
    readTimeoutSeconds: {type: GraphQLInt},
    hostNameFailover: {type: GraphQLString},
    authorizationURI: {type: GraphQLString},
    sslSocketFactory: {type: GraphQLString},
    responseType: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    port: {type: GraphQLInt},
    connectionTimeoutSeconds: {type: GraphQLInt},
    sdkVersion: {type: GraphQLString},
    connectionPassword: {type: GraphQLString},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayOrbitalType};
    