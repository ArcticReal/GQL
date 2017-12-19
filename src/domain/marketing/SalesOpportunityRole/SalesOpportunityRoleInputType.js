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

const SalesOpportunityRoleInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityRoleInputType',
  description: 'input type for SalesOpportunityRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityRoleInputType};
    