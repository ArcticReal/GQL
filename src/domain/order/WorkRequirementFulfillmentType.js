
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkReqFulfTypeType} from '../order/WorkReqFulfTypeType.js';
import {RequirementType} from '../order/RequirementType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const WorkRequirementFulfillmentType = new GraphQLObjectType({
  name: 'WorkRequirementFulfillmentType',
  description: 'Type for WorkRequirementFulfillment in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workRequirementFulfillment, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workRequirementFulfillment.workEffortId}`)
    },
    workReqFulfType: {
      type: WorkReqFulfTypeType,
      args : {workReqFulfTypeId: {type: GraphQLString}},
      resolve: (workRequirementFulfillment, args, {loaders}) => loaders.ofbiz.load(`workReqFulfTypes/find?workReqFulfTypeId=${workRequirementFulfillment.workReqFulfTypeId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (workRequirementFulfillment, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${workRequirementFulfillment.requirementId}`)
    }
  })
});

export {WorkRequirementFulfillmentType};
    