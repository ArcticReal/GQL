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

const PaymentGatewayiDEALResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayiDEALResponseType',
  description: 'response type for PaymentGatewayiDEAL',

  fields: () => ({
    acquirerKeyStoreFilename: {type: GraphQLString},
    acquirerKeyStorePassword: {type: GraphQLString},
    acquirerTimeout: {type: GraphQLString},
    acquirerURL: {type: GraphQLString},
    expirationPeriod: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    merchantKeyStoreFilename: {type: GraphQLString},
    merchantKeyStorePassword: {type: GraphQLString},
    merchantReturnURL: {type: GraphQLString},
    merchantSubId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    privateCert: {type: GraphQLString}
  })
});

export {PaymentGatewayiDEALResponseType};
    