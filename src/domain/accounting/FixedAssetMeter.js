
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

import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';
import {ProductMeterTypeType} from '../product/ProductMeterType.js';


const FixedAssetMeterType = new GraphQLObjectType({
  name: 'FixedAssetMeterType',
  description: 'Type for FixedAssetMeter in accounting',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    readingReasonEnumId: {type: GraphQLString},
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMeter, args, {loaders}) => loaders.ofbiz.load(`product/product/productMeterTypes/find?productMeterTypeId=${fixedAssetMeter.productMeterTypeId}`)
    },
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMeter, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetMaints/find?fixedAssetId=${fixedAssetMeter.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat},
    readingDate: {type: GraphQLString}
  })
});

export {FixedAssetMeterType};
    




const FixedAssetMeterInputType = new GraphQLInputObjectType({
  name: 'FixedAssetMeterInputType',
  description: 'input type for FixedAssetMeter',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat},
    productMeterTypeId: {type: GraphQLString},
    readingDate: {type: GraphQLString},
    readingReasonEnumId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {FixedAssetMeterInputType};
    