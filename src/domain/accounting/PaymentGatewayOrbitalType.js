
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
    engineClass: {type: GraphQLInt},
    hostName: {type: GraphQLInt},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayOrbital, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayOrbital.paymentGatewayConfigId}`)
    },
    portFailover: {type: GraphQLInt},
    readTimeoutSeconds: {type: GraphQLInt},
    hostNameFailover: {type: GraphQLInt},
    authorizationURI: {type: GraphQLInt},
    sslSocketFactory: {type: GraphQLString},
    responseType: {type: GraphQLString},
    merchantId: {type: GraphQLInt},
    port: {type: GraphQLInt},
    connectionTimeoutSeconds: {type: GraphQLInt},
    sdkVersion: {type: GraphQLString},
    connectionPassword: {type: GraphQLInt},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayOrbitalType};
    