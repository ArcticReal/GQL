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
import {WorkEffortFixedAssetAssignResponseType} from '../../workeffort/WorkEffortFixedAssetAssign/WorkEffortFixedAssetAssignResponseType.js';
import {WorkEffortFixedAssetAssignInputType} from '../../workeffort/WorkEffortFixedAssetAssign/WorkEffortFixedAssetAssignInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortFixedAssetAssign = {
  type: WorkEffortFixedAssetAssignResponseType,
  description: 'mutation for ofbiz createWorkEffortFixedAssetAssign method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortFixedAssetAssigns/add?`, null, req);
  }
};
export {createWorkEffortFixedAssetAssign};


const updateWorkEffortFixedAssetAssign = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortFixedAssetAssign method',
  args:{workEffortFixedAssetAssignToBeUpdated: {type: WorkEffortFixedAssetAssignInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortFixedAssetAssigns/${args.nullVal}?`, args.workEffortFixedAssetAssignToBeUpdated, req);
  }
};
export {updateWorkEffortFixedAssetAssign};


const deleteWorkEffortFixedAssetAssignByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortFixedAssetAssignByIdUpdated method',
  args:{workEffortFixedAssetAssignId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortFixedAssetAssigns/${args.workEffortFixedAssetAssignId}?`, null, req);
  }
};
export {deleteWorkEffortFixedAssetAssignByIdUpdated};
