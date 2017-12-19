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

const PaymentGatewaySecurePayInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewaySecurePayInputType',
  description: 'input type for PaymentGatewaySecurePay',

  fields: () => ({
    enableAmountRound: {type: GraphQLBoolean},
    merchantId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    processTimeout: {type: GraphQLInt},
    pwd: {type: GraphQLString},
    serverURL: {type: GraphQLString}
  })
});

export {PaymentGatewaySecurePayInputType};
    