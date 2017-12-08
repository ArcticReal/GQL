
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
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbiz.load(`fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetType.parentTypeId}`)
    },
    fixedAssetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    fixedAssetTypeAttrs: {
      type: new GraphQLList(FixedAssetTypeAttrType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeAttrs/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    workEffortFixedAssetStds: {
      type: new GraphQLList(WorkEffortFixedAssetStdType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetStds/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    fixedAssetTypes: {
      type: new GraphQLList(FixedAssetTypeType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?fixedAssetTypeId=${fixedAssetType.fixedAssetTypeId}`)
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
    