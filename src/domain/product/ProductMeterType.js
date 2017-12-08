
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
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    fixedAssetMeters: {
      type: new GraphQLList(FixedAssetMeterType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    fixedAssetMaintMeters: {
      type: new GraphQLList(FixedAssetMaintMeterType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
    },
    productMeters: {
      type: new GraphQLList(ProductMeterType),
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeterType, args, {loaders}) => loaders.ofbizArray.load(`productMeters/find?productMeterTypeId=${productMeterType.productMeterTypeId}`)
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
    