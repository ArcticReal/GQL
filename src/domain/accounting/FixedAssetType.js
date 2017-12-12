
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

import {WorkEffortFixedAssetStdType} from '../workeffort/WorkEffortFixedAssetStd.js';
import {FixedAssetTypeAttrType} from '../accounting/FixedAssetTypeAttr.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const FixedAssetTypeType = new GraphQLObjectType({
  name: 'FixedAssetTypeType',
  description: 'Type for FixedAssetType in accounting',

  fields: () => ({
    parentType: {
      type: FixedAssetTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetType.parentTypeId}`)
    },
    fixedAssetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    fixedAssetTypeAttrs: {
      type: new GraphQLList(FixedAssetTypeAttrType),
      args : {},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetTypeAttrs/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    workEffortFixedAssetStds: {
      type: new GraphQLList(WorkEffortFixedAssetStdType),
      args : {},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortFixedAssetStds/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    fixedAssetTypes: {
      type: new GraphQLList(FixedAssetTypeType),
      args : {},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    }
  })
});

export {FixedAssetTypeType};
    




const FixedAssetTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetTypeInputType',
  description: 'input type for FixedAssetType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {FixedAssetTypeInputType};
    