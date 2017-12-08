
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

import {FixedAssetProductTypeType} from '../accounting/FixedAssetProductType.js';
import {ProductType} from '../product/Product.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


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
      resolve: (fixedAssetProduct, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetProduct.fixedAssetId}`)
    },
    fixedAssetProductType: {
      type: FixedAssetProductTypeType,
      args : {fixedAssetProductTypeId: {type: GraphQLString}},
      resolve: (fixedAssetProduct, args, {loaders}) => loaders.ofbiz.load(`fixedAssetProductTypes/find?fixedAssetProductTypeId=${fixedAssetProduct.fixedAssetProductTypeId}`)
    },
    quantityUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetProductType};
    




const FixedAssetProductInputType = new GraphQLInputObjectType({
  name: 'FixedAssetProductInputType',
  description: 'input type for FixedAssetProduct in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    fixedAssetId: {type: GraphQLString},
    fixedAssetProductTypeId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetProductInputType};
    