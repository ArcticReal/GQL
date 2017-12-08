
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
    




const SalesOpportunityWorkEffortInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityWorkEffortInputType',
  description: 'input type for SalesOpportunityWorkEffort in marketing',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityWorkEffortInputType};
    