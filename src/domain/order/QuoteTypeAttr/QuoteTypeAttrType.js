
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

import {QuoteTypeType} from '../../order/QuoteType/QuoteTypeType.js';


const QuoteTypeAttrType = new GraphQLObjectType({
  name: 'QuoteTypeAttrType',
  description: 'Type for QuoteTypeAttr in order',

  fields: () => ({
    quoteType: {
      type: QuoteTypeType,
      args : {quoteTypeId: {type: GraphQLString}},
      resolve: (quoteTypeAttr, args, {loaders}) => loaders.ofbiz.load(`order/quote/quoteTypes/find?quoteTypeId=${quoteTypeAttr.quoteTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {QuoteTypeAttrType};
    