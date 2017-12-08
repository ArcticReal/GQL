
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
    




const CreditCardTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'CreditCardTypeGlAccountInputType',
  description: 'input type for CreditCardTypeGlAccount in accounting',

  fields: () => ({
    cardType: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {CreditCardTypeGlAccountInputType};
    