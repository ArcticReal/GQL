
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

import {InventoryItemType} from '../product/InventoryItem.js';
import {OrderItemType} from '../order/OrderItem.js';
import {PicklistBinType} from '../shipment/PicklistBin.js';


const PicklistItemType = new GraphQLObjectType({
  name: 'PicklistItemType',
  description: 'Type for PicklistItem in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (picklistItem, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${picklistItem.inventoryItemId}`)
    },
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (picklistItem, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${picklistItem.orderId}`)
    },
    picklistBin: {
      type: PicklistBinType,
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (picklistItem, args, {loaders}) => loaders.ofbiz.load(`shipment/picklist/picklistBins/find?picklistBinId=${picklistItem.picklistBinId}`)
    },
    shipGroupSeqId: {type: GraphQLString},
    itemStatusId: {type: GraphQLString}
  })
});

export {PicklistItemType};
    




const PicklistItemInputType = new GraphQLInputObjectType({
  name: 'PicklistItemInputType',
  description: 'input type for PicklistItem in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    picklistBinId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    itemStatusId: {type: GraphQLString}
  })
});

export {PicklistItemInputType};
    