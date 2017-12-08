
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
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?picklistBinId=${picklistBin.picklistBinId}`)
    },
    picklistItems: {
      type: new GraphQLList(PicklistItemType),
      args : {picklistBinId: {type: GraphQLString}},
      resolve: (picklistBin, args, {loaders}) => loaders.ofbizArray.load(`picklistItems/find?picklistBinId=${picklistBin.picklistBinId}`)
    }
  })
});

export {PicklistBinType};
    




const PicklistBinInputType = new GraphQLInputObjectType({
  name: 'PicklistBinInputType',
  description: 'input type for PicklistBin in shipment',

  fields: () => ({
    picklistId: {type: GraphQLString},
    primaryOrderId: {type: GraphQLString},
    picklistBinId: {type: GraphQLString},
    primaryShipGroupSeqId: {type: GraphQLString},
    binLocationNumber: {type: GraphQLInt}
  })
});

export {PicklistBinInputType};
    