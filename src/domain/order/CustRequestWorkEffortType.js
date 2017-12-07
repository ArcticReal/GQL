
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
import {CustRequestType} from '../order/CustRequestType.js';


const CustRequestWorkEffortType = new GraphQLObjectType({
  name: 'CustRequestWorkEffortType',
  description: 'Type for CustRequestWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (custRequestWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${custRequestWorkEffort.workEffortId}`)
    },
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestWorkEffort, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestWorkEffort.custRequestId}`)
    }
  })
});

export {CustRequestWorkEffortType};
    