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

const QuoteTypeInputType = new GraphQLInputObjectType({
  name: 'QuoteTypeInputType',
  description: 'input type for QuoteType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    quoteTypeId: {type: GraphQLString}
  })
});

export {QuoteTypeInputType};
    