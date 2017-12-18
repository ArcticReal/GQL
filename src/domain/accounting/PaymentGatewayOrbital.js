
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


const PaymentGatewayOrbitalType = new GraphQLObjectType({
  name: 'PaymentGatewayOrbitalType',
  description: 'Type for PaymentGatewayOrbital in accounting',

  fields: () => ({
    engineClass: {type: GraphQLString},
    hostName: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayOrbital, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayOrbital.paymentGatewayConfigId}`)
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
    




const PaymentGatewayOrbitalInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayOrbitalInputType',
  description: 'input type for PaymentGatewayOrbital',

  fields: () => ({
    authorizationURI: {type: GraphQLString},
    connectionPassword: {type: GraphQLString},
    connectionTimeoutSeconds: {type: GraphQLInt},
    engineClass: {type: GraphQLString},
    hostName: {type: GraphQLString},
    hostNameFailover: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    port: {type: GraphQLInt},
    portFailover: {type: GraphQLInt},
    readTimeoutSeconds: {type: GraphQLInt},
    responseType: {type: GraphQLString},
    sdkVersion: {type: GraphQLString},
    sslSocketFactory: {type: GraphQLString},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayOrbitalInputType};
    