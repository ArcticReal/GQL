
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const CreditCardTypeGlAccountType = new GraphQLObjectType({
  name: 'CreditCardTypeGlAccountType',
  description: 'Type for CreditCardTypeGlAccount in accounting',

  fields: () => ({
    cardType: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {CreditCardTypeGlAccountType};
    