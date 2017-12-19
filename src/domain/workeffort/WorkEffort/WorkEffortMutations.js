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
import {WorkEffortInputType} from '../../workeffort/WorkEffort/WorkEffortInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffort method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEfforts/add?`, null, req);
  }
};
export {createWorkEffort};


const updateWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffort method',
  args:{workEffortToBeUpdated: {type: WorkEffortInputType},workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEfforts/${args.workEffortId}?`, args.workEffortToBeUpdated, req);
  }
};
export {updateWorkEffort};


const deleteWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortByIdUpdated method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEfforts/${args.workEffortId}?`, null, req);
  }
};
export {deleteWorkEffortByIdUpdated};
