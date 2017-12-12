
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

import {QuoteType} from '../order/Quote.js';


const QuoteAttributeType = new GraphQLObjectType({
  name: 'QuoteAttributeType',
  description: 'Type for QuoteAttribute in order',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteAttribute, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteAttribute.quoteId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {QuoteAttributeType};
    




const QuoteAttributeInputType = new GraphQLInputObjectType({
  name: 'QuoteAttributeInputType',
  description: 'input type for QuoteAttribute in order',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {QuoteAttributeInputType};
    