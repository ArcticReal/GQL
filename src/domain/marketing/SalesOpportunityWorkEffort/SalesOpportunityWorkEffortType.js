
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {SalesOpportunityType} from '../../marketing/SalesOpportunity/SalesOpportunityType.js';


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
    