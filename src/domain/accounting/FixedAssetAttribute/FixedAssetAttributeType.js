
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


const FixedAssetAttributeType = new GraphQLObjectType({
  name: 'FixedAssetAttributeType',
  description: 'Type for FixedAssetAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetAttribute.fixedAssetId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FixedAssetAttributeType};
    