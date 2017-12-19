
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

import {SalesOpportunityType} from '../../marketing/SalesOpportunity/SalesOpportunityType.js';


const SalesOpportunityCompetitorType = new GraphQLObjectType({
  name: 'SalesOpportunityCompetitorType',
  description: 'Type for SalesOpportunityCompetitor in marketing',

  fields: () => ({
    competitorPartyId: {type: GraphQLString},
    strengths: {type: GraphQLString},
    weaknesses: {type: GraphQLString},
    positionEnumId: {type: GraphQLString},
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunityCompetitor, args, {loaders}) => loaders.ofbiz.load(`marketing/salesOpportunitys/find?salesOpportunityId=${salesOpportunityCompetitor.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityCompetitorType};
    