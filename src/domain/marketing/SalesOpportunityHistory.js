
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



const SalesOpportunityHistoryType = new GraphQLObjectType({
  name: 'SalesOpportunityHistoryType',
  description: 'Type for SalesOpportunityHistory in marketing',

  fields: () => ({
    estimatedCloseDate: {type: GraphQLString},
    estimatedProbability: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    salesOpportunityHistoryId: {type: GraphQLString},
    changeNote: {type: GraphQLString},
    description: {type: GraphQLString},
    nextStep: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    modifiedTimestamp: {type: GraphQLString},
    modifiedByUserLogin: {type: GraphQLString},
    estimatedAmount: {type: GraphQLFloat},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityHistoryType};
    




const SalesOpportunityHistoryInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityHistoryInputType',
  description: 'input type for SalesOpportunityHistory in marketing',

  fields: () => ({
    estimatedCloseDate: {type: GraphQLString},
    estimatedProbability: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    salesOpportunityHistoryId: {type: GraphQLString},
    changeNote: {type: GraphQLString},
    description: {type: GraphQLString},
    nextStep: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    modifiedTimestamp: {type: GraphQLString},
    modifiedByUserLogin: {type: GraphQLString},
    estimatedAmount: {type: GraphQLFloat},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityHistoryInputType};
    