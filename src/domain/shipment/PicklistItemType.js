
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {PicklistBinType} from '../shipment/PicklistBinType.js';


const PicklistItemType = new GraphQLObjectType({
  name: 'PicklistItemType',
  description: 'Type for PicklistItem in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (picklistItem, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${picklistItem.inventoryItemId}`)
    },
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (picklistItem, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${picklistItem.orderId}`)
    },
    picklistBin: {
      type: PicklistBinType,
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (picklistItem, args, {loaders}) => loaders.ofbiz.load(`picklistBins/find?picklistBinId=${picklistItem.picklistBinId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    itemStatusId: {type: GraphQLString}
  })
});

export {PicklistItemType};
    