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
import {WorkReqFulfTypeInputType} from '../../order/WorkReqFulfType/WorkReqFulfTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkReqFulfType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkReqFulfType method',
  args:{workReqFulfTypeToBeAdded: {type: WorkReqFulfTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/workReqFulfTypes/add?`, args.workReqFulfTypeToBeAdded, req);
  }
};
export {createWorkReqFulfType};


const updateWorkReqFulfType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkReqFulfType method',
  args:{workReqFulfTypeToBeUpdated: {type: WorkReqFulfTypeInputType},workReqFulfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/workReqFulfTypes/${args.workReqFulfTypeId}?`, args.workReqFulfTypeToBeUpdated, req);
  }
};
export {updateWorkReqFulfType};


const deleteWorkReqFulfTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkReqFulfTypeByIdUpdated method',
  args:{workReqFulfTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/workReqFulfTypes/${args.workReqFulfTypeId}?`, null, req);
  }
};
export {deleteWorkReqFulfTypeByIdUpdated};
