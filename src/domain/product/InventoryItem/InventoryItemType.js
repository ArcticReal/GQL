
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

import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {InventoryItemTypeType} from '../../product/InventoryItemType/InventoryItemTypeType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';
import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';
import {WorkEffortInventoryAssignType} from '../../workeffort/WorkEffortInventoryAssign/WorkEffortInventoryAssignType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {InventoryItemDetailType} from '../../product/InventoryItemDetail/InventoryItemDetailType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';
import {InventoryItemStatusType} from '../../product/InventoryItemStatus/InventoryItemStatusType.js';
import {OrderItemShipGrpInvResType} from '../../order/OrderItemShipGrpInvRes/OrderItemShipGrpInvResType.js';
import {InventoryItemVarianceType} from '../../product/InventoryItemVariance/InventoryItemVarianceType.js';
import {LotType} from '../../product/Lot/LotType.js';
import {PicklistItemType} from '../../shipment/PicklistItem/PicklistItemType.js';
import {InventoryTransferType} from '../../product/InventoryTransfer/InventoryTransferType.js';
import {ContainerType} from '../../product/Container/ContainerType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {InventoryItemLabelApplType} from '../../product/InventoryItemLabelAppl/InventoryItemLabelApplType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';
import {WorkEffortInventoryProducedType} from '../../workeffort/WorkEffortInventoryProduced/WorkEffortInventoryProducedType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {InventoryItemAttributeType} from '../../product/InventoryItemAttribute/InventoryItemAttributeType.js';


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
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${inventoryItem.partyId}`)
    },
    container: {
      type: ContainerType,
      args : {containerId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`product/containers/find?containerId=${inventoryItem.containerId}`)
    },
    availableToPromiseTotal: {type: GraphQLFloat},
    inventoryItemType: {
      type: InventoryItemTypeType,
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemTypes/find?inventoryItemTypeId=${inventoryItem.inventoryItemTypeId}`)
    },
    locationSeqId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${inventoryItem.facilityId}`)
    },
    comments: {type: GraphQLString},
    serialNumber: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${inventoryItem.productId}`)
    },
    lot: {
      type: LotType,
      args : {lotId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`product/lots/find?lotId=${inventoryItem.lotId}`)
    },
    uomId: {type: GraphQLString},
    accountingQuantityTotal: {type: GraphQLFloat},
    inventoryItemId: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${inventoryItem.ownerPartyId}`)
    },
    activationValidThru: {type: GraphQLString},
    activationNumber: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    unitCost: {type: GraphQLFloat},
    datetimeReceived: {type: GraphQLString},
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    orderItemShipGrpInvReses: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGrpInvRess/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceipts/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryTransfers: {
      type: new GraphQLList(InventoryTransferType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryTransfers/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    workEffortInventoryProduceds: {
      type: new GraphQLList(WorkEffortInventoryProducedType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortInventoryProduceds/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    workEffortInventoryAssigns: {
      type: new GraphQLList(WorkEffortInventoryAssignType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortInventoryAssigns/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemDetails/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemVariances: {
      type: new GraphQLList(InventoryItemVarianceType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemVariances/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuances/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemLabelAppls: {
      type: new GraphQLList(InventoryItemLabelApplType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemLabelAppls/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    picklistItems: {
      type: new GraphQLList(PicklistItemType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistItems/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemStatuses: {
      type: new GraphQLList(InventoryItemStatusType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemStatuss/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    },
    inventoryItemAttributes: {
      type: new GraphQLList(InventoryItemAttributeType),
      args : {},
      resolve: (inventoryItem, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemAttributes/find?inventoryItemId=${inventoryItem.inventoryItemId}`)
    }
  })
});

export {InventoryItemType};
    