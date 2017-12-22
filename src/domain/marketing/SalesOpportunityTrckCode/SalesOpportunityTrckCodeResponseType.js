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

const SalesOpportunityTrckCodeResponseType = new GraphQLObjectType({
  name: 'SalesOpportunityTrckCodeResponseType',
  description: 'response type for SalesOpportunityTrckCode',

  fields: () => ({
    receivedDate: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString}
  })
});

export {SalesOpportunityTrckCodeResponseType};
    