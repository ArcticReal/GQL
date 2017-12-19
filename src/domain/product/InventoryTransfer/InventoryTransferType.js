
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {ContainerType} from '../../product/Container/ContainerType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const InventoryTransferType = new GraphQLObjectType({
  name: 'InventoryTransferType',
  description: 'Type for InventoryTransfer in product',

  fields: () => ({
    containerTo: {
      type: ContainerType,
      args : {containerIdTo: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`product/containers/find?containerId=${inventoryTransfer.containerIdTo}`)
    },
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${inventoryTransfer.facilityId}`)
    },
    comments: {type: GraphQLString},
    sendDate: {type: GraphQLString},
    receiveDate: {type: GraphQLString},
    facilityTo: {
      type: FacilityType,
      args : {facilityIdTo: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${inventoryTransfer.facilityIdTo}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${inventoryTransfer.inventoryItemId}`)
    },
    inventoryTransferId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`shipment/itemIssuances/find?itemIssuanceId=${inventoryTransfer.itemIssuanceId}`)
    },
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`product/containers/find?containerId=${inventoryTransfer.containerId}`)
    },
    locationSeqIdTo: {type: GraphQLString},
    locationSeqId: {type: GraphQLString}
  })
});

export {InventoryTransferType};
    