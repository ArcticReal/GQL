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

const SalesOpportunityStageInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityStageInputType',
  description: 'input type for SalesOpportunityStage',

  fields: () => ({
    defaultProbability: {type: GraphQLFloat},
    description: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {SalesOpportunityStageInputType};
    