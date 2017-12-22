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

const PaymentGatewaySecurePayResponseType = new GraphQLObjectType({
  name: 'PaymentGatewaySecurePayResponseType',
  description: 'response type for PaymentGatewaySecurePay',

  fields: () => ({
    enableAmountRound: {type: GraphQLBoolean},
    merchantId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    processTimeout: {type: GraphQLInt},
    pwd: {type: GraphQLString},
    serverURL: {type: GraphQLString}
  })
});

export {PaymentGatewaySecurePayResponseType};
    