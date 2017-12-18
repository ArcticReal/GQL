
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

import {FixedAssetIdentType} from '../accounting/FixedAssetIdent.js';


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
    




const FixedAssetIdentTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetIdentTypeInputType',
  description: 'input type for FixedAssetIdentType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetIdentTypeInputType};
    