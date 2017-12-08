
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
import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';
import {InventoryItemTypeType} from '../product/InventoryItemType.js';
import {ProductType} from '../product/Product.js';
import {FacilityLocationType} from '../product/FacilityLocation.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipment.js';
import {ReorderGuidelineType} from '../product/ReorderGuideline.js';
import {PicklistType} from '../shipment/Picklist.js';
import {ContainerType} from '../product/Container.js';
import {PartyType} from '../party/Party.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {FacilityContactMechPurposeType} from '../product/FacilityContactMechPurpose.js';
import {AgreementFacilityApplType} from '../party/AgreementFacilityAppl.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {ProductFacilityType} from '../product/ProductFacility.js';
import {ProductAverageCostType} from '../accounting/ProductAverageCost.js';
import {FacilityGroupType} from '../product/FacilityGroup.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignment.js';
import {FacilityAttributeType} from '../product/FacilityAttribute.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {MrpEventType} from '../manufacturing/MrpEvent.js';
import {FacilityContactMechType} from '../product/FacilityContactMech.js';
import {FacilityGroupMemberType} from '../product/FacilityGroupMember.js';
import {RequirementType} from '../order/Requirement.js';
import {InventoryTransferType} from '../product/InventoryTransfer.js';
import {OrderSummaryEntryType} from '../order/OrderSummaryEntry.js';
import {FacilityPartyType} from '../product/FacilityParty.js';
import {ProductStoreFacilityType} from '../product/ProductStoreFacility.js';
import {DeliveryType} from '../shipment/Delivery.js';
import {FacilityContentType} from '../product/FacilityContent.js';
import {FacilityTypeType} from '../product/FacilityType.js';
import {ProdCatalogInvFacilityType} from '../product/ProdCatalogInvFacility.js';


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
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?facilityId=${facility.facilityId}`)
    },
    facilityContents: {
      type: new GraphQLList(FacilityContentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityContents/find?facilityId=${facility.facilityId}`)
    },
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?facilityId=${facility.facilityId}`)
    },
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?facilityId=${facility.facilityId}`)
    },
    picklists: {
      type: new GraphQLList(PicklistType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`picklists/find?facilityId=${facility.facilityId}`)
    },
    deliveries: {
      type: new GraphQLList(DeliveryType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`deliverys/find?facilityId=${facility.facilityId}`)
    },
    prodCatalogInvFacilities: {
      type: new GraphQLList(ProdCatalogInvFacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogInvFacilitys/find?facilityId=${facility.facilityId}`)
    },
    mrpEvents: {
      type: new GraphQLList(MrpEventType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`mrpEvents/find?facilityId=${facility.facilityId}`)
    },
    facilityContactMeches: {
      type: new GraphQLList(FacilityContactMechType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechs/find?facilityId=${facility.facilityId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`products/find?facilityId=${facility.facilityId}`)
    },
    containers: {
      type: new GraphQLList(ContainerType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`containers/find?facilityId=${facility.facilityId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?facilityId=${facility.facilityId}`)
    },
    facilityLocations: {
      type: new GraphQLList(FacilityLocationType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityLocations/find?facilityId=${facility.facilityId}`)
    },
    facilityContactMechPurposes: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityContactMechPurposes/find?facilityId=${facility.facilityId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?facilityId=${facility.facilityId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?facilityId=${facility.facilityId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?facilityId=${facility.facilityId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?facilityId=${facility.facilityId}`)
    },
    facilityGroupMembers: {
      type: new GraphQLList(FacilityGroupMemberType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupMembers/find?facilityId=${facility.facilityId}`)
    },
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?facilityId=${facility.facilityId}`)
    },
    orderSummaryEntries: {
      type: new GraphQLList(OrderSummaryEntryType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`orderSummaryEntrys/find?facilityId=${facility.facilityId}`)
    },
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?facilityId=${facility.facilityId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?facilityId=${facility.facilityId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?facilityId=${facility.facilityId}`)
    },
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?facilityId=${facility.facilityId}`)
    },
    productStoreFacilities: {
      type: new GraphQLList(ProductStoreFacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productStoreFacilitys/find?facilityId=${facility.facilityId}`)
    },
    agreementFacilityAppls: {
      type: new GraphQLList(AgreementFacilityApplType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`agreementFacilityAppls/find?facilityId=${facility.facilityId}`)
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityId=${facility.facilityId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?facilityId=${facility.facilityId}`)
    },
    inventoryTransfers: {
      type: new GraphQLList(InventoryTransferType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`inventoryTransfers/find?facilityId=${facility.facilityId}`)
    },
    productFacilities: {
      type: new GraphQLList(ProductFacilityType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`productFacilitys/find?facilityId=${facility.facilityId}`)
    },
    facilityAttributes: {
      type: new GraphQLList(FacilityAttributeType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`facilityAttributes/find?facilityId=${facility.facilityId}`)
    },
    reorderGuidelines: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {facilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`reorderGuidelines/find?facilityId=${facility.facilityId}`)
    }
  })
});

export {FacilityType};
    




const FacilityInputType = new GraphQLInputObjectType({
  name: 'FacilityInputType',
  description: 'input type for Facility in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    defaultInventoryItemTypeId: {type: GraphQLString},
    parentFacilityId: {type: GraphQLString},
    description: {type: GraphQLString},
    defaultWeightUomId: {type: GraphQLString},
    primaryFacilityGroupId: {type: GraphQLString},
    openedDate: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    facilitySize: {type: GraphQLFloat},
    facilitySizeUomId: {type: GraphQLString},
    closedDate: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString},
    defaultDaysToShip: {type: GraphQLInt},
    defaultDimensionUomId: {type: GraphQLString},
    facilityName: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    oldSquareFootage: {type: GraphQLInt}
  })
});

export {FacilityInputType};
    