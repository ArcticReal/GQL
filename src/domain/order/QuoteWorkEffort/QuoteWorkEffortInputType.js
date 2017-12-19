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

const QuoteWorkEffortInputType = new GraphQLInputObjectType({
  name: 'QuoteWorkEffortInputType',
  description: 'input type for QuoteWorkEffort',

  fields: () => ({
    quoteId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {QuoteWorkEffortInputType};
    