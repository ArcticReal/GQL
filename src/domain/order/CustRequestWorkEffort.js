
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {CustRequestType} from '../order/CustRequest.js';


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
    




const CustRequestWorkEffortInputType = new GraphQLInputObjectType({
  name: 'CustRequestWorkEffortInputType',
  description: 'input type for CustRequestWorkEffort in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    custRequestId: {type: GraphQLString}
  })
});

export {CustRequestWorkEffortInputType};
    