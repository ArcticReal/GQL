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

const PaymentGatewayWorldPayResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayWorldPayResponseType',
  description: 'response type for PaymentGatewayWorldPay',

  fields: () => ({
    authMode: {type: GraphQLBoolean},
    fixContact: {type: GraphQLBoolean},
    hideContact: {type: GraphQLBoolean},
    hideCurrency: {type: GraphQLBoolean},
    instId: {type: GraphQLString},
    langId: {type: GraphQLString},
    noLanguageMenu: {type: GraphQLBoolean},
    paymentGatewayConfigId: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    testMode: {type: GraphQLInt},
    withDelivery: {type: GraphQLBoolean}
  })
});

export {PaymentGatewayWorldPayResponseType};
    