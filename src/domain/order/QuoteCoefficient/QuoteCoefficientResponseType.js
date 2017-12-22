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

const QuoteCoefficientResponseType = new GraphQLObjectType({
  name: 'QuoteCoefficientResponseType',
  description: 'response type for QuoteCoefficient',

  fields: () => ({
    coeffName: {type: GraphQLString},
    coeffValue: {type: GraphQLFloat},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteCoefficientResponseType};
    