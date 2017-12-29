
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
import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {ShipmentRouteSegmentType} from '../../shipment/ShipmentRouteSegment/ShipmentRouteSegmentType.js';
import {InventoryItemTypeType} from '../../product/InventoryItemType/InventoryItemTypeType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {FacilityLocationType} from '../../product/FacilityLocation/FacilityLocationType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {FacilityCarrierShipmentType} from '../../product/FacilityCarrierShipment/FacilityCarrierShipmentType.js';
import {ReorderGuidelineType} from '../../product/ReorderGuideline/ReorderGuidelineType.js';
import {PicklistType} from '../../shipment/Picklist/PicklistType.js';
import {ContainerType} from '../../product/Container/ContainerType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {FacilityContactMechPurposeType} from '../../product/FacilityContactMechPurpose/FacilityContactMechPurposeType.js';
import {AgreementFacilityApplType} from '../../party/AgreementFacilityAppl/AgreementFacilityApplType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {ProductFacilityType} from '../../product/ProductFacility/ProductFacilityType.js';
import {ProductAverageCostType} from '../../accounting/ProductAverageCost/ProductAverageCostType.js';
import {FacilityGroupType} from '../../product/FacilityGroup/FacilityGroupType.js';
import {WorkEffortPartyAssignmentType} from '../../workeffort/WorkEffortPartyAssignment/WorkEffortPartyAssignmentType.js';
import {FacilityAttributeType} from '../../product/FacilityAttribute/FacilityAttributeType.js';
import {ShipmentType} from '../../shipment/Shipment/ShipmentType.js';
import {OrderItemShipGroupType} from '../../order/OrderItemShipGroup/OrderItemShipGroupType.js';
import {MrpEventType} from '../../manufacturing/MrpEvent/MrpEventType.js';
import {FacilityContactMechType} from '../../product/FacilityContactMech/FacilityContactMechType.js';
import {FacilityGroupMemberType} from '../../product/FacilityGroupMember/FacilityGroupMemberType.js';
import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {InventoryTransferType} from '../../product/InventoryTransfer/InventoryTransferType.js';
import {OrderSummaryEntryType} from '../../order/OrderSummaryEntry/OrderSummaryEntryType.js';
import {FacilityPartyType} from '../../product/FacilityParty/FacilityPartyType.js';
import {ProductStoreFacilityType} from '../../product/ProductStoreFacility/ProductStoreFacilityType.js';
import {DeliveryType} from '../../shipment/Delivery/DeliveryType.js';
import {FacilityContentType} from '../../product/FacilityContent/FacilityContentType.js';
import {FacilityTypeType} from '../../product/FacilityType/FacilityTypeType.js';
import {ProdCatalogInvFacilityType} from '../../product/ProdCatalogInvFacility/ProdCatalogInvFacilityType.js';


const FacilityType = new GraphQLObjectType({
  name: 'FacilityType',
  description: 'Type for Facility in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    defaultInventoryItemType: {
      type: InventoryItemTypeType,
      args : {defaultInventoryItemTypeId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemTypes/find?inventoryItemTypeId=${facility.defaultInventoryItemTypeId}`)
    },
    parentFacility: {
      type: FacilityType,
      args : {parentFacilityId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${facility.parentFacilityId}`)
    },
    description: {type: GraphQLString},
    defaultWeightUomId: {type: GraphQLString},
    primaryFacilityGroup: {
      type: FacilityGroupType,
      args : {primaryFacilityGroupId: {type: GraphQLString}},
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityGroups/find?facilityGroupId=${facility.primaryFacilityGroupId}`)
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
      resolve: (facility, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityTypes/find?facilityTypeId=${facility.facilityTypeId}`)
    },
    defaultDaysToShip: {type: GraphQLInt},
    defaultDimensionUomId: {type: GraphQLString},
    facilityName: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    oldSquareFootage: {type: GraphQLInt},
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItems/find?facilityId=${facility.facilityId}`)
    },
    facilityContents: {
      type: new GraphQLList(FacilityContentType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContents/find?facilityId=${facility.facilityId}`)
    },
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`order/requirements/find?facilityId=${facility.facilityId}`)
    },
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find?facilityId=${facility.facilityId}`)
    },
    picklists: {
      type: new GraphQLList(PicklistType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklists/find?facilityId=${facility.facilityId}`)
    },
    deliveries: {
      type: new GraphQLList(DeliveryType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipment/deliverys/find?facilityId=${facility.facilityId}`)
    },
    prodCatalogInvFacilities: {
      type: new GraphQLList(ProdCatalogInvFacilityType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogInvFacilitys/find?facilityId=${facility.facilityId}`)
    },
    mrpEvents: {
      type: new GraphQLList(MrpEventType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/mrpEvents/find?facilityId=${facility.facilityId}`)
    },
    facilityContactMeches: {
      type: new GraphQLList(FacilityContactMechType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContactMechs/find?facilityId=${facility.facilityId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`products/find?facilityId=${facility.facilityId}`)
    },
    containers: {
      type: new GraphQLList(ContainerType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/containers/find?facilityId=${facility.facilityId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?facilityId=${facility.facilityId}`)
    },
    facilityLocations: {
      type: new GraphQLList(FacilityLocationType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityLocations/find?facilityId=${facility.facilityId}`)
    },
    facilityContactMechPurposes: {
      type: new GraphQLList(FacilityContactMechPurposeType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContactMechPurposes/find?facilityId=${facility.facilityId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?facilityId=${facility.facilityId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortPartyAssignments/find?facilityId=${facility.facilityId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?facilityId=${facility.facilityId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?facilityId=${facility.facilityId}`)
    },
    facilityGroupMembers: {
      type: new GraphQLList(FacilityGroupMemberType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityGroupMembers/find?facilityId=${facility.facilityId}`)
    },
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityCarrierShipments/find?facilityId=${facility.facilityId}`)
    },
    orderSummaryEntries: {
      type: new GraphQLList(OrderSummaryEntryType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`order/orderSummaryEntrys/find?facilityId=${facility.facilityId}`)
    },
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`accounting/productAverageCosts/find?facilityId=${facility.facilityId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?facilityId=${facility.facilityId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?facilityId=${facility.facilityId}`)
    },
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStores/find?facilityId=${facility.facilityId}`)
    },
    productStoreFacilities: {
      type: new GraphQLList(ProductStoreFacilityType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/productStoreFacilitys/find?facilityId=${facility.facilityId}`)
    },
    agreementFacilityAppls: {
      type: new GraphQLList(AgreementFacilityApplType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementFacilityAppls/find?facilityId=${facility.facilityId}`)
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facilitys/find?facilityId=${facility.facilityId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityPartys/find?facilityId=${facility.facilityId}`)
    },
    inventoryTransfers: {
      type: new GraphQLList(InventoryTransferType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryTransfers/find?facilityId=${facility.facilityId}`)
    },
    productFacilities: {
      type: new GraphQLList(ProductFacilityType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/productFacilitys/find?facilityId=${facility.facilityId}`)
    },
    facilityAttributes: {
      type: new GraphQLList(FacilityAttributeType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityAttributes/find?facilityId=${facility.facilityId}`)
    },
    reorderGuidelines: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {},
      resolve: (facility, args, {loaders}) => loaders.ofbizArray.load(`product/reorderGuidelines/find?facilityId=${facility.facilityId}`)
    }
  })
});

export {FacilityType};
    