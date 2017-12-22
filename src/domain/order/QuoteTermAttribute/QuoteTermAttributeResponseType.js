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

const QuoteTermAttributeResponseType = new GraphQLObjectType({
  name: 'QuoteTermAttributeResponseType',
  description: 'response type for QuoteTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {QuoteTermAttributeResponseType};
    