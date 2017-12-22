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

const QuoteWorkEffortResponseType = new GraphQLObjectType({
  name: 'QuoteWorkEffortResponseType',
  description: 'response type for QuoteWorkEffort',

  fields: () => ({
    quoteId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {QuoteWorkEffortResponseType};
    