
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';


const FixedAssetMaintOrderType = new GraphQLObjectType({
  name: 'FixedAssetMaintOrderType',
  description: 'Type for FixedAssetMaintOrder in accounting',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (fixedAssetMaintOrder, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${fixedAssetMaintOrder.orderId}`)
    },
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaintOrder, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetMaintOrder.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString}
  })
});

export {FixedAssetMaintOrderType};
    