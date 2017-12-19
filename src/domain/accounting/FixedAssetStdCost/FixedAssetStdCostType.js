
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

import {FixedAssetStdCostTypeType} from '../../accounting/FixedAssetStdCostType/FixedAssetStdCostTypeType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


const FixedAssetStdCostType = new GraphQLObjectType({
  name: 'FixedAssetStdCostType',
  description: 'Type for FixedAssetStdCost in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amountUomId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    fixedAssetStdCostType: {
      type: FixedAssetStdCostTypeType,
      args : {fixedAssetStdCostTypeId: {type: GraphQLString}},
      resolve: (fixedAssetStdCost, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetStdCostTypes/find?fixedAssetStdCostTypeId=${fixedAssetStdCost.fixedAssetStdCostTypeId}`)
    },
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetStdCost, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetStdCost.fixedAssetId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetStdCostType};
    