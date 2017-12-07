
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {InventoryItemTypeType} from '../product/InventoryItemTypeType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';
import {WorkEffortInventoryAssignType} from '../workeffort/WorkEffortInventoryAssignType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {ProductType} from '../product/ProductType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetailType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';
import {InventoryItemStatusType} from '../product/InventoryItemStatusType.js';
import {OrderItemShipGrpInvResType} from '../order/OrderItemShipGrpInvResType.js';
import {InventoryItemVarianceType} from '../product/InventoryItemVarianceType.js';
import {LotType} from '../product/LotType.js';
import {PicklistItemType} from '../shipment/PicklistItemType.js';
import {InventoryTransferType} from '../product/InventoryTransferType.js';
import {ContainerType} from '../product/ContainerType.js';
import {PartyType} from '../party/PartyType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {InventoryItemLabelApplType} from '../product/InventoryItemLabelApplType.js';
import {FacilityType} from '../product/FacilityType.js';
import {WorkEffortInventoryProducedType} from '../workeffort/WorkEffortInventoryProducedType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {InventoryItemAttributeType} from '../product/InventoryItemAttributeType.js';


const InventoryItemType = new GraphQLObjectType({
  name: 'InventoryItemType',
  description: 'Type for InventoryItem in product',

  fields: () => ({
    softIdentifier: {type: GraphQLString},
    binNumber: {type: GraphQLString},
    oldAvailableToPromise: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    quantityOnHandTotal: {type: GraphQLFloat},
    datetimeManufactured: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    oldQuantityOnHand: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${inventoryItem.partyId}`)
    },
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`containers/find?containerId=${inventoryItem.containerId}`)
    },
    availableToPromiseTotal: {type: GraphQLFloat},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`inventoryItemTypes/find?inventoryItemTypeId=${inventoryItem.inventoryItemTypeId}`)
    },
    locationSeqId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${inventoryItem.facilityId}`)
    },
    comments: {type: GraphQLString},
    serialNumber: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${inventoryItem.productId}`)
    },
    lot: {
      type: LotType,
      args : {lotId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`lots/find?lotId=${inventoryItem.lotId}`)
    },
    uomId: {type: GraphQLString},
    accountingQuantityTotal: {type: GraphQLFloat},
    inventoryItemId: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${inventoryItem.ownerPartyId}`)
    },
    activationValidThru: {type: GraphQLString},
    activationNumber: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    unitCost: {type: GraphQLFloat},
    datetimeReceived: {type: GraphQLString},
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    orderItemShipGrpInvRes: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGrpInvRess/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryTransfer: {
      type: new GraphQLList(InventoryTransferType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryTransfers/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    workEffortInventoryProduced: {
      type: new GraphQLList(WorkEffortInventoryProducedType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`workEffortInventoryProduceds/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    workEffortInventoryAssign: {
      type: new GraphQLList(WorkEffortInventoryAssignType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`workEffortInventoryAssigns/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemDetail: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemVariance: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemVariances/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    itemIssuance: {
      type: new GraphQLList(ItemIssuanceType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemLabelAppl: {
      type: new GraphQLList(InventoryItemLabelApplType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelAppls/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    picklistItem: {
      type: new GraphQLList(PicklistItemType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`picklistItems/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemStatus: {
      type: new GraphQLList(InventoryItemStatusType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemStatuss/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemAttribute: {
      type: new GraphQLList(InventoryItemAttributeType),
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemAttributes/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    }
  })
});

export {InventoryItemType};
    