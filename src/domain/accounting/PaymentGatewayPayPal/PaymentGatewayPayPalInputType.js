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

const PaymentGatewayPayPalInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayPayPalInputType',
  description: 'input type for PaymentGatewayPayPal',

  fields: () => ({
    apiEnvironment: {type: GraphQLString},
    apiPassword: {type: GraphQLString},
    apiSignature: {type: GraphQLString},
    apiUserName: {type: GraphQLString},
    businessEmail: {type: GraphQLString},
    cancelReturnUrl: {type: GraphQLString},
    confirmTemplate: {type: GraphQLString},
    confirmUrl: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    notifyUrl: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    requireConfirmedShipping: {type: GraphQLBoolean},
    returnUrl: {type: GraphQLString},
    shippingCallbackUrl: {type: GraphQLString}
  })
});

export {PaymentGatewayPayPalInputType};
    