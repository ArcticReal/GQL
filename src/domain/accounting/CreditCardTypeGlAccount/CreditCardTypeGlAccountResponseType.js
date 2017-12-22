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

const CreditCardTypeGlAccountResponseType = new GraphQLObjectType({
  name: 'CreditCardTypeGlAccountResponseType',
  description: 'response type for CreditCardTypeGlAccount',

  fields: () => ({
    cardType: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {CreditCardTypeGlAccountResponseType};
    