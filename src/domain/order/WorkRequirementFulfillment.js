
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

import {WorkReqFulfTypeType} from '../order/WorkReqFulfType.js';
import {RequirementType} from '../order/Requirement.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';


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
    




const WorkRequirementFulfillmentInputType = new GraphQLInputObjectType({
  name: 'WorkRequirementFulfillmentInputType',
  description: 'input type for WorkRequirementFulfillment in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    workReqFulfTypeId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {WorkRequirementFulfillmentInputType};
    