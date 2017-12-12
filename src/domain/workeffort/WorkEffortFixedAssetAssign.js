
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const WorkEffortFixedAssetAssignType = new GraphQLObjectType({
  name: 'WorkEffortFixedAssetAssignType',
  description: 'Type for WorkEffortFixedAssetAssign in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetAssign, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortFixedAssetAssign.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusId: {type: GraphQLString},
    allocatedCost: {type: GraphQLFloat},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetAssign, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${workEffortFixedAssetAssign.fixedAssetId}`)
    },
    availabilityStatusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortFixedAssetAssignType};
    




const WorkEffortFixedAssetAssignInputType = new GraphQLInputObjectType({
  name: 'WorkEffortFixedAssetAssignInputType',
  description: 'input type for WorkEffortFixedAssetAssign in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusId: {type: GraphQLString},
    allocatedCost: {type: GraphQLFloat},
    fixedAssetId: {type: GraphQLString},
    availabilityStatusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortFixedAssetAssignInputType};
    