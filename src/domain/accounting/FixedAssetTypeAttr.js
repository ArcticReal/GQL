
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

import {FixedAssetTypeType} from '../accounting/FixedAssetType.js';


const FixedAssetTypeAttrType = new GraphQLObjectType({
  name: 'FixedAssetTypeAttrType',
  description: 'Type for FixedAssetTypeAttr in accounting',

  fields: () => ({
    fixedAssetType: {
      type: FixedAssetTypeType,
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetTypeAttr.fixedAssetTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FixedAssetTypeAttrType};
    




const FixedAssetTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FixedAssetTypeAttrInputType',
  description: 'input type for FixedAssetTypeAttr in accounting',

  fields: () => ({
    fixedAssetTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FixedAssetTypeAttrInputType};
    