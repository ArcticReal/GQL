
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

import {FixedAssetProductType} from '../../accounting/FixedAssetProduct/FixedAssetProductType.js';


const FixedAssetProductTypeType = new GraphQLObjectType({
  name: 'FixedAssetProductTypeType',
  description: 'Type for FixedAssetProductType in accounting',

  fields: () => ({
    fixedAssetProductTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetProducts: {
      type: new GraphQLList(FixedAssetProductType),
      args : {},
      resolve: (fixedAssetProductType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetProducts/find?fixedAssetProductTypeId=${fixedAssetProductType.fixedAssetProductTypeId}`)
    }
  })
});

export {FixedAssetProductTypeType};
    