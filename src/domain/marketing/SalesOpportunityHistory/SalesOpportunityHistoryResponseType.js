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

const SalesOpportunityHistoryResponseType = new GraphQLObjectType({
  name: 'SalesOpportunityHistoryResponseType',
  description: 'response type for SalesOpportunityHistory',

  fields: () => ({
    changeNote: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    estimatedAmount: {type: GraphQLFloat},
    estimatedCloseDate: {type: GraphQLString},
    estimatedProbability: {type: GraphQLFloat},
    modifiedByUserLogin: {type: GraphQLString},
    modifiedTimestamp: {type: GraphQLString},
    nextStep: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    salesOpportunityHistoryId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityHistoryResponseType};
    