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

const SalesOpportunityCompetitorResponseType = new GraphQLObjectType({
  name: 'SalesOpportunityCompetitorResponseType',
  description: 'response type for SalesOpportunityCompetitor',

  fields: () => ({
    competitorPartyId: {type: GraphQLString},
    positionEnumId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    strengths: {type: GraphQLString},
    weaknesses: {type: GraphQLString}
  })
});

export {SalesOpportunityCompetitorResponseType};
    