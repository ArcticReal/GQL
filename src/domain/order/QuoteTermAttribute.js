
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

import {QuoteTermType} from '../order/QuoteTerm.js';


const QuoteTermAttributeType = new GraphQLObjectType({
  name: 'QuoteTermAttributeType',
  description: 'Type for QuoteTermAttribute in order',

  fields: () => ({
    quoteItemSeqId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    termType: {
      type: QuoteTermType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (quoteTermAttribute, args, {loaders}) => loaders.ofbiz.load(`order/quote/quoteTerms/find?termTypeId=${quoteTermAttribute.termTypeId}`)
    },
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {QuoteTermAttributeType};
    




const QuoteTermAttributeInputType = new GraphQLInputObjectType({
  name: 'QuoteTermAttributeInputType',
  description: 'input type for QuoteTermAttribute in order',

  fields: () => ({
    quoteItemSeqId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    termTypeId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {QuoteTermAttributeInputType};
    