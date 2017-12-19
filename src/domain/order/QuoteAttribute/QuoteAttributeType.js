
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

import {QuoteType} from '../../order/Quote/QuoteType.js';


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
    