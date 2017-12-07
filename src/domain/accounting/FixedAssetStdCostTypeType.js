
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetStdCostType} from '../accounting/FixedAssetStdCostType.js';


const FixedAssetStdCostTypeType = new GraphQLObjectType({
  name: 'FixedAssetStdCostTypeType',
  description: 'Type for FixedAssetStdCostType in accounting',

  fields: () => ({
    fixedAssetStdCostTypeId: {type: GraphQLString},
    parentType: {
      type: FixedAssetStdCostTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (fixedAssetStdCostType, args, {loaders}) => loaders.ofbiz.load(`fixedAssetStdCostTypes/find?fixedAssetStdCostTypeId=${fixedAssetStdCostType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    fixedAssetStdCost: {
      type: new GraphQLList(FixedAssetStdCostType),
      args : {fixedAssetStdCostTypeId: {type: GraphQLString}},
      resolve: (fixedAssetStdCostType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetStdCosts/find?fixedAssetStdCostTypeId=${fixedAssetStdCostType.fixedAssetStdCostTypeId}`)
    },
    fixedAssetStdCostType: {
      type: new GraphQLList(FixedAssetStdCostTypeType),
      args : {fixedAssetStdCostTypeId: {type: GraphQLString}},
      resolve: (fixedAssetStdCostType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetStdCostTypes/find?fixedAssetStdCostTypeId=${fixedAssetStdCostType.fixedAssetStdCostTypeId}`)
    }
  })
});

export {FixedAssetStdCostTypeType};
    