
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuoteTermType} from '../order/QuoteTermType.js';


const QuoteTermAttributeType = new GraphQLObjectType({
  name: 'QuoteTermAttributeType',
  description: 'Type for QuoteTermAttribute in order',

  fields: () => ({
    quoteItemSeqId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    termType: {
      type: QuoteTermType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (quoteTermAttribute, args, {loaders}) => loaders.ofbiz.load(`quoteTerms/find?termTypeId=${quoteTermAttribute.termTypeId}`)
    },
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {QuoteTermAttributeType};
    