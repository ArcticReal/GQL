
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortFixedAssetStdType} from '../workeffort/WorkEffortFixedAssetStdType.js';
import {FixedAssetTypeAttrType} from '../accounting/FixedAssetTypeAttrType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';


const FixedAssetTypeType = new GraphQLObjectType({
  name: 'FixedAssetTypeType',
  description: 'Type for FixedAssetType in accounting',

  fields: () => ({
    parentType: {
      type: FixedAssetTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbiz.load(`fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetType.parentTypeId}`)
    },
    fixedAssetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    fixedAssetTypeAttr: {
      type: new GraphQLList(FixedAssetTypeAttrType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeAttrs/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    workEffortFixedAssetStd: {
      type: new GraphQLList(WorkEffortFixedAssetStdType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetStds/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    fixedAssetType: {
      type: new GraphQLList(FixedAssetTypeType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    }
  })
});

export {FixedAssetTypeType};
    