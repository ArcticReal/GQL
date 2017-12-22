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

const GiftCardResponseType = new GraphQLObjectType({
  name: 'GiftCardResponseType',
  description: 'response type for GiftCard',

  fields: () => ({
    cardNumber: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    pinNumber: {type: GraphQLString}
  })
});

export {GiftCardResponseType};
    