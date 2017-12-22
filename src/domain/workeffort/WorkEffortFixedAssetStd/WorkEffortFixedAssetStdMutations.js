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
import {WorkEffortFixedAssetStdResponseType} from '../../workeffort/WorkEffortFixedAssetStd/WorkEffortFixedAssetStdResponseType.js';
import {WorkEffortFixedAssetStdInputType} from '../../workeffort/WorkEffortFixedAssetStd/WorkEffortFixedAssetStdInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortFixedAssetStd = {
  type: WorkEffortFixedAssetStdResponseType,
  description: 'mutation for ofbiz createWorkEffortFixedAssetStd method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortFixedAssetStds/add?`, null, req);
  }
};
export {createWorkEffortFixedAssetStd};


const updateWorkEffortFixedAssetStd = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortFixedAssetStd method',
  args:{workEffortFixedAssetStdToBeUpdated: {type: WorkEffortFixedAssetStdInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortFixedAssetStds/${args.nullVal}?`, args.workEffortFixedAssetStdToBeUpdated, req);
  }
};
export {updateWorkEffortFixedAssetStd};


const deleteWorkEffortFixedAssetStdByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortFixedAssetStdByIdUpdated method',
  args:{workEffortFixedAssetStdId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortFixedAssetStds/${args.workEffortFixedAssetStdId}?`, null, req);
  }
};
export {deleteWorkEffortFixedAssetStdByIdUpdated};
