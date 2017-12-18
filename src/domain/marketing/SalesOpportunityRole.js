
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



const SalesOpportunityRoleType = new GraphQLObjectType({
  name: 'SalesOpportunityRoleType',
  description: 'Type for SalesOpportunityRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityRoleType};
    




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
    