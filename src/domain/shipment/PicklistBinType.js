
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PicklistItemType} from '../shipment/PicklistItemType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {PicklistType} from '../shipment/PicklistType.js';


const PicklistBinType = new GraphQLObjectType({
  name: 'PicklistBinType',
  description: 'Type for PicklistBin in shipment',

  fields: () => ({
    picklist: {
      type: PicklistType,
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbiz.load(`picklists/find?picklistId=${picklistBin.picklistId}`)
    },
    primaryOrder: {
      type: OrderItemShipGroupType,
      args : {primaryOrderId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbiz.load(`orderItemShipGroups/find?orderId=${picklistBin.primaryOrderId}`)
    },
    picklistBinId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString},
    binLocationNumber: {type: GraphQLInt},
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?picklistBinId=${picklistBin.picklistBinId}`)
    },
    picklistItem: {
      type: new GraphQLList(PicklistItemType),
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbizArray.load(`picklistItems/find?picklistBinId=${picklistBin.picklistBinId}`)
    }
  })
});

export {PicklistBinType};
    