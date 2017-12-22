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

const SalesOpportunityStageResponseType = new GraphQLObjectType({
  name: 'SalesOpportunityStageResponseType',
  description: 'response type for SalesOpportunityStage',

  fields: () => ({
    defaultProbability: {type: GraphQLFloat},
    description: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {SalesOpportunityStageResponseType};
    