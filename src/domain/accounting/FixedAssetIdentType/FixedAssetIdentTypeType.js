
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

import {FixedAssetIdentType} from '../../accounting/FixedAssetIdent/FixedAssetIdentType.js';


const FixedAssetIdentTypeType = new GraphQLObjectType({
  name: 'FixedAssetIdentTypeType',
  description: 'Type for FixedAssetIdentType in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString},
    fixedAssetIdents: {
      type: new GraphQLList(FixedAssetIdentType),
      args : {},
      resolve: (fixedAssetIdentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetIdents/find?fixedAssetIdentTypeId=${fixedAssetIdentType.fixedAssetIdentTypeId}`)
    }
  })
});

export {FixedAssetIdentTypeType};
    