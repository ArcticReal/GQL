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

const CreditCardTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'CreditCardTypeGlAccountInputType',
  description: 'input type for CreditCardTypeGlAccount',

  fields: () => ({
    cardType: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {CreditCardTypeGlAccountInputType};
    