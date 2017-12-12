
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
import {WorkEffortType} from '../workeffort/WorkEffort.js';


const QuoteWorkEffortType = new GraphQLObjectType({
  name: 'QuoteWorkEffortType',
  description: 'Type for QuoteWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (quoteWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${quoteWorkEffort.workEffortId}`)
    },
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteWorkEffort, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteWorkEffort.quoteId}`)
    }
  })
});

export {QuoteWorkEffortType};
    




const QuoteWorkEffortInputType = new GraphQLInputObjectType({
  name: 'QuoteWorkEffortInputType',
  description: 'input type for QuoteWorkEffort in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteWorkEffortInputType};
    