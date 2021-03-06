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

const PaymentGatewayOrbitalResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayOrbitalResponseType',
  description: 'response type for PaymentGatewayOrbital',

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

export {PaymentGatewayOrbitalResponseType};
    