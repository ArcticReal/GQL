
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
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


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
    