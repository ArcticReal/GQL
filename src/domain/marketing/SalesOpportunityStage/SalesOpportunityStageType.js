
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



const SalesOpportunityStageType = new GraphQLObjectType({
  name: 'SalesOpportunityStageType',
  description: 'Type for SalesOpportunityStage in marketing',

  fields: () => ({
    sequenceNum: {type: GraphQLInt},
    defaultProbability: {type: GraphQLFloat},
    description: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString}
  })
});

export {SalesOpportunityStageType};
    