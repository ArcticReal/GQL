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

const FinAccountTypeGlAccountResponseType = new GraphQLObjectType({
  name: 'FinAccountTypeGlAccountResponseType',
  description: 'response type for FinAccountTypeGlAccount',

  fields: () => ({
    finAccountTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {FinAccountTypeGlAccountResponseType};
    