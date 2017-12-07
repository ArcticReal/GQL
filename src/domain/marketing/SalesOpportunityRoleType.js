
import {
  GraphQLSchema,
  GraphQLObjectType,
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
    