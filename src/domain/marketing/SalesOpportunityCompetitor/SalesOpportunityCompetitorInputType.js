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

const SalesOpportunityCompetitorInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityCompetitorInputType',
  description: 'input type for SalesOpportunityCompetitor',

  fields: () => ({
    competitorPartyId: {type: GraphQLString},
    positionEnumId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    strengths: {type: GraphQLString},
    weaknesses: {type: GraphQLString}
  })
});

export {SalesOpportunityCompetitorInputType};
    