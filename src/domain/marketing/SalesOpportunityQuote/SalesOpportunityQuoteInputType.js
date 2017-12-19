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

const SalesOpportunityQuoteInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityQuoteInputType',
  description: 'input type for SalesOpportunityQuote',

  fields: () => ({
    quoteId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityQuoteInputType};
    