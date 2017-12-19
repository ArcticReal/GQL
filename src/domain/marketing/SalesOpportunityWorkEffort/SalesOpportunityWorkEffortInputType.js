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

const SalesOpportunityWorkEffortInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityWorkEffortInputType',
  description: 'input type for SalesOpportunityWorkEffort',

  fields: () => ({
    salesOpportunityId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {SalesOpportunityWorkEffortInputType};
    