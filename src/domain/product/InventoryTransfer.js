
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
import {ContainerType} from '../product/Container.js';
import {ItemIssuanceType} from '../shipment/ItemIssuance.js';
import {FacilityType} from '../product/Facility.js';


const InventoryTransferType = new GraphQLObjectType({
  name: 'InventoryTransferType',
  description: 'Type for InventoryTransfer in product',

  fields: () => ({
    containerTo: {
      type: ContainerType,
      args : {containerIdTo: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`containers/find?containerId=${inventoryTransfer.containerIdTo}`)
    },
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${inventoryTransfer.facilityId}`)
    },
    comments: {type: GraphQLString},
    sendDate: {type: GraphQLString},
    receiveDate: {type: GraphQLString},
    facilityTo: {
      type: FacilityType,
      args : {facilityIdTo: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${inventoryTransfer.facilityIdTo}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${inventoryTransfer.inventoryItemId}`)
    },
    inventoryTransferId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`itemIssuances/find?itemIssuanceId=${inventoryTransfer.itemIssuanceId}`)
    },
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbiz.load(`containers/find?containerId=${inventoryTransfer.containerId}`)
    },
    locationSeqIdTo: {type: GraphQLString},
    locationSeqId: {type: GraphQLString}
  })
});

export {InventoryTransferType};
    




const InventoryTransferInputType = new GraphQLInputObjectType({
  name: 'InventoryTransferInputType',
  description: 'input type for InventoryTransfer in product',

  fields: () => ({
    containerIdTo: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    comments: {type: GraphQLString},
    sendDate: {type: GraphQLString},
    receiveDate: {type: GraphQLString},
    facilityIdTo: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    inventoryTransferId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    itemIssuanceId: {type: GraphQLString},
    containerId: {type: GraphQLString},
    locationSeqIdTo: {type: GraphQLString},
    locationSeqId: {type: GraphQLString}
  })
});

export {InventoryTransferInputType};
    