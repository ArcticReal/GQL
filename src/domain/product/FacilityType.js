
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegmentType.js';
import {InventoryItemTypeType} from '../product/InventoryItemTypeType.js';
import {ProductType} from '../product/ProductType.js';
import {FacilityLocationType} from '../product/FacilityLocationType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipmentType.js';
import {ReorderGuidelineType} from '../product/ReorderGuidelineType.js';
import {PicklistType} from '../shipment/PicklistType.js';
import {ContainerType} from '../product/ContainerType.js';
import {PartyType} from '../party/PartyType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {FacilityContactMechPurposeType} from '../product/FacilityContactMechPurposeType.js';
import {AgreementFacilityApplType} from '../party/AgreementFacilityApplType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {ProductFacilityType} from '../product/ProductFacilityType.js';
import {ProductAverageCostType} from '../accounting/ProductAverageCostType.js';
import {FacilityGroupType} from '../product/FacilityGroupType.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignmentType.js';
import {FacilityAttributeType} from '../product/FacilityAttributeType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {MrpEventType} from '../manufacturing/MrpEventType.js';
import {FacilityContactMechType} from '../product/FacilityContactMechType.js';
import {FacilityGroupMemberType} from '../product/FacilityGroupMemberType.js';
import {RequirementType} from '../order/RequirementType.js';
import {InventoryTransferType} from '../product/InventoryTransferType.js';
import {OrderSummaryEntryType} from '../order/OrderSummaryEntryType.js';
import {FacilityPartyType} from '../product/FacilityPartyType.js';
import {ProductStoreFacilityType} from '../product/ProductStoreFacilityType.js';
import {DeliveryType} from '../shipment/DeliveryType.js';
import {FacilityContentType} from '../product/FacilityContentType.js';
import {FacilityTypeType} from '../product/FacilityTypeType.js';
import {ProdCatalogInvFacilityType} from '../product/ProdCatalogInvFacilityType.js';


const FacilityType = new GraphQLObjectType({
  name: 'FacilityType',
  description: 'Type for Facility in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    defaultInventoryItemType: {
      type: InventoryItemTypeType,
      args : {defaultInventoryItemTypeId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`inventoryItemTypes/find?inventoryItemTypeId=${facility.defaultInventoryItemTypeId}`)
    },
    parentFacility: {
      type: FacilityType,
      args : {parentFacilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facility.parentFacilityId}`)
    },
    description: {type: GraphQLString},
    defaultWeightUomId: {type: GraphQLString},
    primaryFacilityGroup: {
      type: FacilityGroupType,
      args : {primaryFacilityGroupId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`facilityGroups/find?facilityGroupId=${facility.primaryFacilityGroupId}`)
    },
    openedDate: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${facility.ownerPartyId}`)
    },
    facilitySize: {type: GraphQLFloat},
    facilitySizeUomId: {type: GraphQLString},
    closedDate: {type: GraphQLString},
    facilityType: {
      type: FacilityTypeType,
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`facilityTypes/find?facilityTypeId=${facility.facilityTypeId}`)
    },
    defaultDaysToShip: {type: GraphQLInt},
    defaultDimensionUomId: {type: GraphQLString},
    facilityName: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    oldSquareFootage: {type: GraphQLInt},
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?facilityId=${facility.facilityId}`)
    },
    facilityContent: {
      type: new GraphQLList(FacilityContentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityContents/find?facilityId=${facility.facilityId}`)
    },
    requirement: {
      type: new GraphQLList(RequirementType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?facilityId=${facility.facilityId}`)
    },
    orderHeader: {
      type: new GraphQLList(OrderHeaderType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?facilityId=${facility.facilityId}`)
    },
    picklist: {
      type: new GraphQLList(PicklistType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`picklists/find?facilityId=${facility.facilityId}`)
    },
    delivery: {
      type: new GraphQLList(DeliveryType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`deliverys/find?facilityId=${facility.facilityId}`)
    },
    prodCatalogInvFacility: {
      type: new GraphQLList(ProdCatalogInvFacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogInvFacilitys/find?facilityId=${facility.facilityId}`)
    },
    mrpEvent: {
      type: new GraphQLList(MrpEventType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`mrpEvents/find?facilityId=${facility.facilityId}`)
    },
    facilityContactMech: {
      type: new GraphQLList(FacilityContactMechType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechs/find?facilityId=${facility.facilityId}`)
    },
    product: {
      type: new GraphQLList(ProductType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`products/find?facilityId=${facility.facilityId}`)
    },
    container: {
      type: new GraphQLList(ContainerType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`containers/find?facilityId=${facility.facilityId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?facilityId=${facility.facilityId}`)
    },
    facilityLocation: {
      type: new GraphQLList(FacilityLocationType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityLocations/find?facilityId=${facility.facilityId}`)
    },
    facilityContactMechPurpose: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechPurposes/find?facilityId=${facility.facilityId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?facilityId=${facility.facilityId}`)
    },
    workEffortPartyAssignment: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?facilityId=${facility.facilityId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?facilityId=${facility.facilityId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?facilityId=${facility.facilityId}`)
    },
    facilityGroupMember: {
      type: new GraphQLList(FacilityGroupMemberType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupMembers/find?facilityId=${facility.facilityId}`)
    },
    facilityCarrierShipment: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?facilityId=${facility.facilityId}`)
    },
    orderSummaryEntry: {
      type: new GraphQLList(OrderSummaryEntryType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`orderSummaryEntrys/find?facilityId=${facility.facilityId}`)
    },
    productAverageCost: {
      type: new GraphQLList(ProductAverageCostType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?facilityId=${facility.facilityId}`)
    },
    workEffort: {
      type: new GraphQLList(WorkEffortType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?facilityId=${facility.facilityId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?facilityId=${facility.facilityId}`)
    },
    productStore: {
      type: new GraphQLList(ProductStoreType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?facilityId=${facility.facilityId}`)
    },
    productStoreFacility: {
      type: new GraphQLList(ProductStoreFacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productStoreFacilitys/find?facilityId=${facility.facilityId}`)
    },
    agreementFacilityAppl: {
      type: new GraphQLList(AgreementFacilityApplType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`agreementFacilityAppls/find?facilityId=${facility.facilityId}`)
    },
    facility: {
      type: new GraphQLList(FacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityId=${facility.facilityId}`)
    },
    facilityParty: {
      type: new GraphQLList(FacilityPartyType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?facilityId=${facility.facilityId}`)
    },
    inventoryTransfer: {
      type: new GraphQLList(InventoryTransferType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`inventoryTransfers/find?facilityId=${facility.facilityId}`)
    },
    productFacility: {
      type: new GraphQLList(ProductFacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productFacilitys/find?facilityId=${facility.facilityId}`)
    },
    facilityAttribute: {
      type: new GraphQLList(FacilityAttributeType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityAttributes/find?facilityId=${facility.facilityId}`)
    },
    reorderGuideline: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`reorderGuidelines/find?facilityId=${facility.facilityId}`)
    }
  })
});

export {FacilityType};
    