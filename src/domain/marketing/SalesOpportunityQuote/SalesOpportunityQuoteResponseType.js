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

const SalesOpportunityQuoteResponseType = new GraphQLObjectType({
  name: 'SalesOpportunityQuoteResponseType',
  description: 'response type for SalesOpportunityQuote',

  fields: () => ({
    quoteId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityQuoteResponseType};
    