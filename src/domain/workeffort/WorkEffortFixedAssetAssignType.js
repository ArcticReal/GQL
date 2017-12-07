
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';


const WorkEffortFixedAssetAssignType = new GraphQLObjectType({
  name: 'WorkEffortFixedAssetAssignType',
  description: 'Type for WorkEffortFixedAssetAssign in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetAssign, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortFixedAssetAssign.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusId: {type: GraphQLString},
    allocatedCost: {type: GraphQLFloat},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetAssign, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${workEffortFixedAssetAssign.fixedAssetId}`)
    },
    availabilityStatusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortFixedAssetAssignType};
    