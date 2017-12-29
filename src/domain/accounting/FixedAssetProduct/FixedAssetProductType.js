
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

import {FixedAssetProductTypeType} from '../../accounting/FixedAssetProductType/FixedAssetProductTypeType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


const FixedAssetProductType = new GraphQLObjectType({
  name: 'FixedAssetProductType',
  description: 'Type for FixedAssetProduct in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (fixedAssetProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${fixedAssetProduct.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetProduct, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetProduct.fixedAssetId}`)
    },
    fixedAssetProductType: {
      type: FixedAssetProductTypeType,
      args : {fixedAssetProductTypeId: {type: GraphQLString}},
      resolve: (fixedAssetProduct, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetProductTypes/find?fixedAssetProductTypeId=${fixedAssetProduct.fixedAssetProductTypeId}`)
    },
    quantityUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetProductType};
    