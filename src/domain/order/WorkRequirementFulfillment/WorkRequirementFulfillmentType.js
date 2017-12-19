
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

import {WorkReqFulfTypeType} from '../../order/WorkReqFulfType/WorkReqFulfTypeType.js';
import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


const WorkRequirementFulfillmentType = new GraphQLObjectType({
  name: 'WorkRequirementFulfillmentType',
  description: 'Type for WorkRequirementFulfillment in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workRequirementFulfillment, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workRequirementFulfillment.workEffortId}`)
    },
    workReqFulfType: {
      type: WorkReqFulfTypeType,
      args : {workReqFulfTypeId: {type: GraphQLString}},
      resolve: (workRequirementFulfillment, args, {loaders}) => loaders.ofbiz.load(`order/workReqFulfTypes/find?workReqFulfTypeId=${workRequirementFulfillment.workReqFulfTypeId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (workRequirementFulfillment, args, {loaders}) => loaders.ofbiz.load(`order/requirements/find?requirementId=${workRequirementFulfillment.requirementId}`)
    }
  })
});

export {WorkRequirementFulfillmentType};
    