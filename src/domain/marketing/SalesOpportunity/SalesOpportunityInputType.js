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

const SalesOpportunityInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityInputType',
  description: 'input type for SalesOpportunity',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    description: {type: GraphQLString},
    estimatedAmount: {type: GraphQLFloat},
    estimatedCloseDate: {type: GraphQLString},
    estimatedProbability: {type: GraphQLFloat},
    marketingCampaignId: {type: GraphQLString},
    nextStep: {type: GraphQLString},
    nextStepDate: {type: GraphQLString},
    opportunityName: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    typeEnumId: {type: GraphQLString}
  })
});

export {SalesOpportunityInputType};
    