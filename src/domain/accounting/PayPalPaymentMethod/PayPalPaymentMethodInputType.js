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

const PayPalPaymentMethodInputType = new GraphQLInputObjectType({
  name: 'PayPalPaymentMethodInputType',
  description: 'input type for PayPalPaymentMethod',

  fields: () => ({
    avsAddr: {type: GraphQLBoolean},
    avsZip: {type: GraphQLBoolean},
    contactMechId: {type: GraphQLString},
    correlationId: {type: GraphQLString},
    expressCheckoutToken: {type: GraphQLString},
    payerId: {type: GraphQLString},
    payerStatus: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    transactionId: {type: GraphQLString}
  })
});

export {PayPalPaymentMethodInputType};
    