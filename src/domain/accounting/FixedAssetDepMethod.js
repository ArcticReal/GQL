
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

import {FixedAssetType} from '../accounting/FixedAsset.js';


const FixedAssetDepMethodType = new GraphQLObjectType({
  name: 'FixedAssetDepMethodType',
  description: 'Type for FixedAssetDepMethod in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetDepMethod, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetDepMethod.fixedAssetId}`)
    },
    depreciationCustomMethodId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetDepMethodType};
    




const FixedAssetDepMethodInputType = new GraphQLInputObjectType({
  name: 'FixedAssetDepMethodInputType',
  description: 'input type for FixedAssetDepMethod in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    depreciationCustomMethodId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetDepMethodInputType};
    