
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {FixedAssetTypeType} from '../../accounting/FixedAssetType/FixedAssetTypeType.js';


const WorkEffortFixedAssetStdType = new GraphQLObjectType({
  name: 'WorkEffortFixedAssetStdType',
  description: 'Type for WorkEffortFixedAssetStd in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetStd, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortFixedAssetStd.workEffortId}`)
    },
    fixedAssetType: {
      type: FixedAssetTypeType,
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetStd, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetTypes/find?fixedAssetTypeId=${workEffortFixedAssetStd.fixedAssetTypeId}`)
    },
    estimatedQuantity: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat}
  })
});

export {WorkEffortFixedAssetStdType};
    