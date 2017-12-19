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
import {WorkEffortFixedAssetStdInputType} from '../../workeffort/WorkEffortFixedAssetStd/WorkEffortFixedAssetStdInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffortFixedAssetStd = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortFixedAssetStd method',
  args:{workEffortFixedAssetStdToBeAdded: {type: WorkEffortFixedAssetStdInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortFixedAssetStds/add?`, args.workEffortFixedAssetStdToBeAdded, req);
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
