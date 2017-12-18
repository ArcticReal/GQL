
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

import {FixedAssetIdentTypeType} from '../accounting/FixedAssetIdentType.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const FixedAssetIdentType = new GraphQLObjectType({
  name: 'FixedAssetIdentType',
  description: 'Type for FixedAssetIdent in accounting',

  fields: () => ({
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetIdent, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetIdent.fixedAssetId}`)
    },
    idValue: {type: GraphQLString},
    fixedAssetentType: {
      type: FixedAssetIdentTypeType,
      args : {fixedAssetIdentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetIdent, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetIdentTypes/find?fixedAssetIdentTypeId=${fixedAssetIdent.fixedAssetIdentTypeId}`)
    }
  })
});

export {FixedAssetIdentType};
    




const FixedAssetIdentInputType = new GraphQLInputObjectType({
  name: 'FixedAssetIdentInputType',
  description: 'input type for FixedAssetIdent',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString},
    idValue: {type: GraphQLString}
  })
});

export {FixedAssetIdentInputType};
    