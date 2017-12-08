
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
import {FixedAssetTypeType} from '../accounting/FixedAssetType.js';


const WorkEffortFixedAssetStdType = new GraphQLObjectType({
  name: 'WorkEffortFixedAssetStdType',
  description: 'Type for WorkEffortFixedAssetStd in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetStd, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortFixedAssetStd.workEffortId}`)
    },
    fixedAssetType: {
      type: FixedAssetTypeType,
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (workEffortFixedAssetStd, args, {loaders}) => loaders.ofbiz.load(`fixedAssetTypes/find?fixedAssetTypeId=${workEffortFixedAssetStd.fixedAssetTypeId}`)
    },
    estimatedQuantity: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat}
  })
});

export {WorkEffortFixedAssetStdType};
    




const WorkEffortFixedAssetStdInputType = new GraphQLInputObjectType({
  name: 'WorkEffortFixedAssetStdInputType',
  description: 'input type for WorkEffortFixedAssetStd in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    estimatedQuantity: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat}
  })
});

export {WorkEffortFixedAssetStdInputType};
    