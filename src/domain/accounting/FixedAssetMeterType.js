
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {ProductMeterTypeType} from '../product/ProductMeterTypeType.js';


const FixedAssetMeterType = new GraphQLObjectType({
  name: 'FixedAssetMeterType',
  description: 'Type for FixedAssetMeter in accounting',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    readingReasonEnumId: {type: GraphQLString},
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMeter, args, {loaders}) => loaders.ofbiz.load(`productMeterTypes/find?productMeterTypeId=${fixedAssetMeter.productMeterTypeId}`)
    },
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMeter, args, {loaders}) => loaders.ofbiz.load(`fixedAssetMaints/find?fixedAssetId=${fixedAssetMeter.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat},
    readingDate: {type: GraphQLString}
  })
});

export {FixedAssetMeterType};
    