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

const SalesOpportunityWorkEffortResponseType = new GraphQLObjectType({
  name: 'SalesOpportunityWorkEffortResponseType',
  description: 'response type for SalesOpportunityWorkEffort',

  fields: () => ({
    salesOpportunityId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {SalesOpportunityWorkEffortResponseType};
    