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

const GiftCardInputType = new GraphQLInputObjectType({
  name: 'GiftCardInputType',
  description: 'input type for GiftCard',

  fields: () => ({
    cardNumber: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    pinNumber: {type: GraphQLString}
  })
});

export {GiftCardInputType};
    