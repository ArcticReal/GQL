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

const QuoteTermResponseType = new GraphQLObjectType({
  name: 'QuoteTermResponseType',
  description: 'response type for QuoteTerm',

  fields: () => ({
    description: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    textValue: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {QuoteTermResponseType};
    