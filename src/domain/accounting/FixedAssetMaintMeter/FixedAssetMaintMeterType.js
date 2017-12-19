
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

import {FixedAssetMaintType} from '../../accounting/FixedAssetMaint/FixedAssetMaintType.js';
import {ProductMeterTypeType} from '../../product/ProductMeterType/ProductMeterTypeType.js';


const FixedAssetMaintMeterType = new GraphQLObjectType({
  name: 'FixedAssetMaintMeterType',
  description: 'Type for FixedAssetMaintMeter in accounting',

  fields: () => ({
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMaintMeter, args, {loaders}) => loaders.ofbiz.load(`product/product/productMeterTypes/find?productMeterTypeId=${fixedAssetMaintMeter.productMeterTypeId}`)
    },
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaintMeter, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetMaints/find?fixedAssetId=${fixedAssetMaintMeter.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat}
  })
});

export {FixedAssetMaintMeterType};
    