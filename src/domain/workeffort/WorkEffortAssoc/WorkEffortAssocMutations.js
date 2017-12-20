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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortAssocs/add?`, null, req);
  }
};
export {createWorkEffortAssoc};


const updateWorkEffortAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortAssoc method',
  args:{workEffortAssocToBeUpdated: {type: WorkEffortAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortAssocs/${args.nullVal}?`, args.workEffortAssocToBeUpdated, req);
  }
};
export {updateWorkEffortAssoc};


const deleteWorkEffortAssocByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortAssocByIdUpdated method',
  args:{workEffortAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortAssocs/${args.workEffortAssocId}?`, null, req);
  }
};
export {deleteWorkEffortAssocByIdUpdated};
