
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

import {PicklistItemType} from '../shipment/PicklistItem.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {PicklistType} from '../shipment/Picklist.js';


const PicklistBinType = new GraphQLObjectType({
  name: 'PicklistBinType',
  description: 'Type for PicklistBin in shipment',

  fields: () => ({
    picklist: {
      type: PicklistType,
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbiz.load(`shipment/picklists/find?picklistId=${picklistBin.picklistId}`)
    },
    primaryOrder: {
      type: OrderItemShipGroupType,
      args : {primaryOrderId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbiz.load(`order/orderItem/orderItemShipGroups/find?orderId=${picklistBin.primaryOrderId}`)
    },
    picklistBinId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString},
    binLocationNumber: {type: GraphQLInt},
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?picklistBinId=${picklistBin.picklistBinId}`)
    },
    picklistItems: {
      type: new GraphQLList(PicklistItemType),
      args : {},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistItems/find?picklistBinId=${picklistBin.picklistBinId}`)
    }
  })
});

export {PicklistBinType};
    




const PicklistBinInputType = new GraphQLInputObjectType({
  name: 'PicklistBinInputType',
  description: 'input type for PicklistBin',

  fields: () => ({
    binLocationNumber: {type: GraphQLInt},
    picklistBinId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    primaryOrderId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString}
  })
});

export {PicklistBinInputType};
    