
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


const FixedAssetAttributeType = new GraphQLObjectType({
  name: 'FixedAssetAttributeType',
  description: 'Type for FixedAssetAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetAttribute, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetAttribute.fixedAssetId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FixedAssetAttributeType};
    




const FixedAssetAttributeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetAttributeInputType',
  description: 'input type for FixedAssetAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FixedAssetAttributeInputType};
    