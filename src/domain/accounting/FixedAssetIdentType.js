
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetIdentTypeType} from '../accounting/FixedAssetIdentTypeType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';


const FixedAssetIdentType = new GraphQLObjectType({
  name: 'FixedAssetIdentType',
  description: 'Type for FixedAssetIdent in accounting',

  fields: () => ({
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetIdent, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetIdent.fixedAssetId}`)
    },
    idValue: {type: GraphQLString},
    fixedAssetentType: {
      type: FixedAssetIdentTypeType,
      args : {fixedAssetIdentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetIdent, args, {loaders}) => loaders.ofbiz.load(`fixedAssetIdentTypes/find?fixedAssetIdentTypeId=${fixedAssetIdent.fixedAssetIdentTypeId}`)
    }
  })
});

export {FixedAssetIdentType};
    