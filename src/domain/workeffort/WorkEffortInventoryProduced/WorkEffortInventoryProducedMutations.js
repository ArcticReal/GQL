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
import {WorkEffortInventoryProducedInputType} from '../../workeffort/WorkEffortInventoryProduced/WorkEffortInventoryProducedInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortInventoryProduced = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortInventoryProduced method',
  args:{workEffortInventoryProducedToBeAdded: {type: WorkEffortInventoryProducedInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortInventoryProduceds/add?`, args.workEffortInventoryProducedToBeAdded, req);
  }
};
export {createWorkEffortInventoryProduced};


const updateWorkEffortInventoryProduced = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortInventoryProduced method',
  args:{workEffortInventoryProducedToBeUpdated: {type: WorkEffortInventoryProducedInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortInventoryProduceds/${args.nullVal}?`, args.workEffortInventoryProducedToBeUpdated, req);
  }
};
export {updateWorkEffortInventoryProduced};


const deleteWorkEffortInventoryProducedByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortInventoryProducedByIdUpdated method',
  args:{workEffortInventoryProducedId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortInventoryProduceds/${args.workEffortInventoryProducedId}?`, null, req);
  }
};
export {deleteWorkEffortInventoryProducedByIdUpdated};
