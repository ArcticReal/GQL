
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
import {SalesOpportunityType} from '../marketing/SalesOpportunity.js';


const SalesOpportunityWorkEffortType = new GraphQLObjectType({
  name: 'SalesOpportunityWorkEffortType',
  description: 'Type for SalesOpportunityWorkEffort in marketing',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (salesOpportunityWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${salesOpportunityWorkEffort.workEffortId}`)
    },
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunityWorkEffort, args, {loaders}) => loaders.ofbiz.load(`marketing/salesOpportunitys/find?salesOpportunityId=${salesOpportunityWorkEffort.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityWorkEffortType};
    




const SalesOpportunityWorkEffortInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityWorkEffortInputType',
  description: 'input type for SalesOpportunityWorkEffort',

  fields: () => ({
    salesOpportunityId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {SalesOpportunityWorkEffortInputType};
    