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

const FinAccountTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'FinAccountTypeGlAccountInputType',
  description: 'input type for FinAccountTypeGlAccount',

  fields: () => ({
    finAccountTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {FinAccountTypeGlAccountInputType};
    