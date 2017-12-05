
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Container} from '../product/Container.js';
import {Facility} from '../product/Facility.js';
import {Facility} from '../product/Facility.js';
import {InventoryItem} from '../product/InventoryItem.js';
import {StatusItem} from '../product/StatusItem.js';
import {ItemIssuance} from '../product/ItemIssuance.js';
import {Container} from '../product/Container.js';


const InventoryTransfer = new GraphQLObjectType({
  name: 'InventoryTransferType',
  description: 'Type for InventoryTransfer in product',

  fields: () => ({
    containerTo: {
      type: ContainerType,
      args : {containerIdTo: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`containers/find?containerId=${args.containerIdTo}`)
    },
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    comments: {type: GraphQLString},
    sendDate: {type: GraphQLString},
    receiveDate: {type: GraphQLString},
    facilityTo: {
      type: FacilityType,
      args : {facilityIdTo: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityId=${args.facilityIdTo}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    inventoryTransferId: {type: GraphQLString},
    status: {
      type: StatusItemType,
      args : {statusId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?=${args.statusId}`)
    },
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?=${args.itemIssuanceId}`)
    },
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (inventoryTransfer, args, {loaders}) => loaders.ofbizArray.load(`containers/find?=${args.containerId}`)
    },
    locationSeqIdTo: {type: GraphQLString},
    locationSeqId: {type: GraphQLString}
  })
});

export {InventoryTransfer};
    