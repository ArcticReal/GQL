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
import {WorkEffortInventoryAssignInputType} from '../../workeffort/WorkEffortInventoryAssign/WorkEffortInventoryAssignInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortInventoryAssign = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortInventoryAssign method',
  args:{workEffortInventoryAssignToBeAdded: {type: WorkEffortInventoryAssignInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortInventoryAssigns/add?`, args.workEffortInventoryAssignToBeAdded, req);
  }
};
export {createWorkEffortInventoryAssign};


const updateWorkEffortInventoryAssign = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortInventoryAssign method',
  args:{workEffortInventoryAssignToBeUpdated: {type: WorkEffortInventoryAssignInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortInventoryAssigns/${args.nullVal}?`, args.workEffortInventoryAssignToBeUpdated, req);
  }
};
export {updateWorkEffortInventoryAssign};


const deleteWorkEffortInventoryAssignByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortInventoryAssignByIdUpdated method',
  args:{workEffortInventoryAssignId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortInventoryAssigns/${args.workEffortInventoryAssignId}?`, null, req);
  }
};
export {deleteWorkEffortInventoryAssignByIdUpdated};
