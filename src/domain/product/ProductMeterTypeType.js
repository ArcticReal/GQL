
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetMeterType} from '../accounting/FixedAssetMeterType.js';
import {FixedAssetMaintMeterType} from '../accounting/FixedAssetMaintMeterType.js';
import {ProductMaintType} from '../product/ProductMaintType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {ProductMeterType} from '../product/ProductMeterType.js';


const ProductMeterTypeType = new GraphQLObjectType({
  name: 'ProductMeterTypeType',
  description: 'Type for ProductMeterType in product',

  fields: () => ({
    defaultUomId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetMaint: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    productMaint: {
      type: new GraphQLList(ProductMaintType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    fixedAssetMeter: {
      type: new GraphQLList(FixedAssetMeterType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    fixedAssetMaintMeter: {
      type: new GraphQLList(FixedAssetMaintMeterType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    productMeter: {
      type: new GraphQLList(ProductMeterType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`productMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    }
  })
});

export {ProductMeterTypeType};
    