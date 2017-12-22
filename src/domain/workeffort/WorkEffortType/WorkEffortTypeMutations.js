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
import {WorkEffortTypeInputType} from '../../workeffort/WorkEffortType/WorkEffortTypeInputType.js';
import {WorkEffortTypeResponseType} from '../../workeffort/WorkEffortType/WorkEffortTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortType = {
  type: WorkEffortTypeResponseType,
  description: 'mutation for ofbiz createWorkEffortType method',
  args:{workEffortTypeToBeAdded: {type: WorkEffortTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortTypes/add?`, args.workEffortTypeToBeAdded, req);
  }
};
export {createWorkEffortType};


const updateWorkEffortType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortType method',
  args:{workEffortTypeToBeUpdated: {type: WorkEffortTypeInputType},workEffortTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortTypes/${args.workEffortTypeId}?`, args.workEffortTypeToBeUpdated, req);
  }
};
export {updateWorkEffortType};


const deleteWorkEffortTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortTypeByIdUpdated method',
  args:{workEffortTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortTypes/${args.workEffortTypeId}?`, null, req);
  }
};
export {deleteWorkEffortTypeByIdUpdated};
