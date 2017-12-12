
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

import {FixedAssetMeterType} from '../accounting/FixedAssetMeter.js';
import {FixedAssetMaintMeterType} from '../accounting/FixedAssetMaintMeter.js';
import {ProductMaintType} from '../product/ProductMaint.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';
import {ProductMeterType} from '../product/ProductMeter.js';


const ProductMeterTypeType = new GraphQLObjectType({
  name: 'ProductMeterTypeType',
  description: 'Type for ProductMeterType in product',

  fields: () => ({
    defaultUomId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaints/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMaints/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    fixedAssetMeters: {
      type: new GraphQLList(FixedAssetMeterType),
      args : {},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    fixedAssetMaintMeters: {
      type: new GraphQLList(FixedAssetMaintMeterType),
      args : {},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaintMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    productMeters: {
      type: new GraphQLList(ProductMeterType),
      args : {},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    }
  })
});

export {ProductMeterTypeType};
    




const ProductMeterTypeInputType = new GraphQLInputObjectType({
  name: 'ProductMeterTypeInputType',
  description: 'input type for ProductMeterType in product',

  fields: () => ({
    defaultUomId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductMeterTypeInputType};
    