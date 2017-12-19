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

const SalesOpportunityTrckCodeInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityTrckCodeInputType',
  description: 'input type for SalesOpportunityTrckCode',

  fields: () => ({
    receivedDate: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString}
  })
});

export {SalesOpportunityTrckCodeInputType};
    