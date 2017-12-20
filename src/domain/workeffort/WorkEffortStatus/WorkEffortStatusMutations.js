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
import {WorkEffortStatusInputType} from '../../workeffort/WorkEffortStatus/WorkEffortStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortStatuss/add?`, null, req);
  }
};
export {createWorkEffortStatus};


const updateWorkEffortStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortStatus method',
  args:{workEffortStatusToBeUpdated: {type: WorkEffortStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortStatuss/${args.nullVal}?`, args.workEffortStatusToBeUpdated, req);
  }
};
export {updateWorkEffortStatus};


const deleteWorkEffortStatusByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortStatusByIdUpdated method',
  args:{workEffortStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortStatuss/${args.workEffortStatusId}?`, null, req);
  }
};
export {deleteWorkEffortStatusByIdUpdated};
