
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Party} from '../product/Party.js';
import {Container} from '../product/Container.js';
import {InventoryItemType} from '../product/InventoryItemType.js';
import {Facility} from '../product/Facility.js';
import {Product} from '../product/Product.js';
import {Lot} from '../product/Lot.js';
import {Uom} from '../product/Uom.js';
import {Party} from '../product/Party.js';
import {StatusItem} from '../product/StatusItem.js';


const InventoryItem = new GraphQLObjectType({
  name: 'InventoryItemType',
  description: 'Type for InventoryItem in product',

  fields: () => ({
    softIdentifier: {type: GraphQLInt},
    binNumber: {type: GraphQLString},
    oldAvailableToPromise: {type: GraphQLString/*this was an Object TODO find a solution*/},
    quantityOnHandTotal: {type: GraphQLFloat},
    datetimeManufactured: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    oldQuantityOnHand: {type: GraphQLString/*this was an Object TODO find a solution*/},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    },
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`containers/find?=${args.containerId}`)
    },
    availableToPromiseTotal: {type: GraphQLFloat},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?=${args.inventoryItemTypeId}`)
    },
    locationSeqId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    comments: {type: GraphQLString},
    serialNumber: {type: GraphQLInt},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    lot: {
      type: LotType,
      args : {lotId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`lots/find?=${args.lotId}`)
    },
    uom: {
      type: UomType,
      args : {uomId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?=${args.uomId}`)
    },
    accountingQuantityTotal: {type: GraphQLFloat},
    inventoryItemId: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.ownerPartyId}`)
    },
    activationValidThru: {type: GraphQLString},
    activationNumber: {type: GraphQLInt},
    currencyUomId: {type: GraphQLString},
    status: {
      type: StatusItemType,
      args : {statusId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?=${args.statusId}`)
    },
    unitCost: {type: GraphQLFloat},
    datetimeReceived: {type: GraphQLString}
  })
});

export {InventoryItem};
    