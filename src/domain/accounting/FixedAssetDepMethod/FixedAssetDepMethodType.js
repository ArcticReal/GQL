
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

import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


const FixedAssetDepMethodType = new GraphQLObjectType({
  name: 'FixedAssetDepMethodType',
  description: 'Type for FixedAssetDepMethod in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetDepMethod, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetDepMethod.fixedAssetId}`)
    },
    depreciationCustomMethodId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetDepMethodType};
    