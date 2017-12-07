
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


const FixedAssetMaintMeterType = new GraphQLObjectType({
  name: 'FixedAssetMaintMeterType',
  description: 'Type for FixedAssetMaintMeter in accounting',

  fields: () => ({
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMaintMeter, args, {loaders}) => loaders.ofbiz.load(`productMeterTypes/find?productMeterTypeId=${fixedAssetMaintMeter.productMeterTypeId}`)
    },
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaintMeter, args, {loaders}) => loaders.ofbiz.load(`fixedAssetMaints/find?fixedAssetId=${fixedAssetMaintMeter.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat}
  })
});

export {FixedAssetMaintMeterType};
    