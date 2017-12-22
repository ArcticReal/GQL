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
import {WorkEffortStatusResponseType} from '../../workeffort/WorkEffortStatus/WorkEffortStatusResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortStatus = {
  type: WorkEffortStatusResponseType,
  description: 'mutation for ofbiz createWorkEffortStatus method',
  args:{workEffortStatusToBeAdded: {type: WorkEffortStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortStatuss/add?`, args.workEffortStatusToBeAdded, req);
  }
};
export {createWorkEffortStatus};


const updateWorkEffortStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortStatus method',
  args:{workEffortStatusToBeUpdated: {type: WorkEffortStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortStatuss/${args.nullVal}?`, args.workEffortStatusToBeUpdated, req);
  }
};
export {updateWorkEffortStatus};


const deleteWorkEffortStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortStatusByIdUpdated method',
  args:{workEffortStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortStatuss/${args.workEffortStatusId}?`, null, req);
  }
};
export {deleteWorkEffortStatusByIdUpdated};
