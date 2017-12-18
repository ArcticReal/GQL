
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

import {FixedAssetStdCostType} from '../accounting/FixedAssetStdCost.js';


const FixedAssetStdCostTypeType = new GraphQLObjectType({
  name: 'FixedAssetStdCostTypeType',
  description: 'Type for FixedAssetStdCostType in accounting',

  fields: () => ({
    fixedAssetStdCostTypeId: {type: GraphQLString},
    parentType: {
      type: FixedAssetStdCostTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetStdCostType, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetStdCostTypes/find?fixedAssetStdCostTypeId=${fixedAssetStdCostType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    fixedAssetStdCosts: {
      type: new GraphQLList(FixedAssetStdCostType),
      args : {},
      resolve: (fixedAssetStdCostType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetStdCosts/find?fixedAssetStdCostTypeId=${fixedAssetStdCostType.fixedAssetStdCostTypeId}`)
    },
    fixedAssetStdCostTypes: {
      type: new GraphQLList(FixedAssetStdCostTypeType),
      args : {},
      resolve: (fixedAssetStdCostType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetStdCostTypes/find?fixedAssetStdCostTypeId=${fixedAssetStdCostType.fixedAssetStdCostTypeId}`)
    }
  })
});

export {FixedAssetStdCostTypeType};
    




const FixedAssetStdCostTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetStdCostTypeInputType',
  description: 'input type for FixedAssetStdCostType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetStdCostTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetStdCostTypeInputType};
    