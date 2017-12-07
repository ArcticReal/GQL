
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetTypeType} from '../accounting/FixedAssetTypeType.js';


const FixedAssetTypeAttrType = new GraphQLObjectType({
  name: 'FixedAssetTypeAttrType',
  description: 'Type for FixedAssetTypeAttr in accounting',

  fields: () => ({
    fixedAssetType: {
      type: FixedAssetTypeType,
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAssetTypeAttr, args, {loaders}) => loaders.ofbiz.load(`fixedAssetTypes/find?fixedAssetTypeId=${fixedAssetTypeAttr.fixedAssetTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FixedAssetTypeAttrType};
    