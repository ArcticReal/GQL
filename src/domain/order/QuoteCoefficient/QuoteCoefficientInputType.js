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

const QuoteCoefficientInputType = new GraphQLInputObjectType({
  name: 'QuoteCoefficientInputType',
  description: 'input type for QuoteCoefficient',

  fields: () => ({
    coeffName: {type: GraphQLString},
    coeffValue: {type: GraphQLFloat},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteCoefficientInputType};
    