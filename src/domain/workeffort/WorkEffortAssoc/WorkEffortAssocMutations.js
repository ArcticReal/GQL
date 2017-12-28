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
import {WorkEffortAssocInputType} from '../../workeffort/WorkEffortAssoc/WorkEffortAssocInputType.js';
import {WorkEffortAssocResponseType} from '../../workeffort/WorkEffortAssoc/WorkEffortAssocResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortAssoc = {
  type: WorkEffortAssocResponseType,
  description: 'mutation for ofbiz createWorkEffortAssoc method',
  args:{workEffortAssocToBeAdded: {type: WorkEffortAssocInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortAssocs/add?`, args.workEffortAssocToBeAdded, req);
  }
};
export {createWorkEffortAssoc};


const updateWorkEffortAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortAssoc method',
  args:{workEffortAssocToBeUpdated: {type: WorkEffortAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortAssocs/${args.nullVal}?`, args.workEffortAssocToBeUpdated, req);
  }
};
export {updateWorkEffortAssoc};


const deleteWorkEffortAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortAssocByIdUpdated method',
  args:{workEffortAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortAssocs/${args.workEffortAssocId}?`, null, req);
  }
};
export {deleteWorkEffortAssocByIdUpdated};
