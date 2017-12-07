
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
import {SalesOpportunityType} from '../marketing/SalesOpportunityType.js';


const SalesOpportunityWorkEffortType = new GraphQLObjectType({
  name: 'SalesOpportunityWorkEffortType',
  description: 'Type for SalesOpportunityWorkEffort in marketing',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (salesOpportunityWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${salesOpportunityWorkEffort.workEffortId}`)
    },
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunityWorkEffort, args, {loaders}) => loaders.ofbiz.load(`salesOpportunitys/find?salesOpportunityId=${salesOpportunityWorkEffort.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityWorkEffortType};
    