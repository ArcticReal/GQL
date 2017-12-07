
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {CustRequestItemType} from '../order/CustRequestItemType.js';


const CustRequestItemWorkEffortType = new GraphQLObjectType({
  name: 'CustRequestItemWorkEffortType',
  description: 'Type for CustRequestItemWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (custRequestItemWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${custRequestItemWorkEffort.workEffortId}`)
    },
    custRequest: {
      type: CustRequestItemType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItemWorkEffort, args, {loaders}) => loaders.ofbiz.load(`custRequestItems/find?custRequestId=${custRequestItemWorkEffort.custRequestId}`)
    },
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestItemWorkEffortType};
    