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

const QuoteTermAttributeInputType = new GraphQLInputObjectType({
  name: 'QuoteTermAttributeInputType',
  description: 'input type for QuoteTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {QuoteTermAttributeInputType};
    