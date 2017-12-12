
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

import {FixedAssetAttributeType} from '../accounting/FixedAssetAttribute.js';
import {RoleTypeType} from '../party/RoleType.js';
import {CostComponentType} from '../product/CostComponent.js';
import {FixedAssetDepMethodType} from '../accounting/FixedAssetDepMethod.js';
import {FixedAssetIdentType} from '../accounting/FixedAssetIdent.js';
import {ProductType} from '../product/Product.js';
import {AccommodationSpotType} from '../accounting/AccommodationSpot.js';
import {FixedAssetStdCostType} from '../accounting/FixedAssetStdCost.js';
import {PartyType} from '../party/Party.js';
import {WorkEffortFixedAssetAssignType} from '../workeffort/WorkEffortFixedAssetAssign.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {FixedAssetRegistrationType} from '../accounting/FixedAssetRegistration.js';
import {GlAccountCategoryTypeType} from '../accounting/GlAccountCategoryType.js';
import {FixedAssetGeoPointType} from '../accounting/FixedAssetGeoPoint.js';
import {FixedAssetProductType} from '../accounting/FixedAssetProduct.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {TechDataCalendarType} from '../manufacturing/TechDataCalendar.js';
import {RequirementType} from '../order/Requirement.js';
import {FixedAssetMaintOrderType} from '../accounting/FixedAssetMaintOrder.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';
import {OrderItemType} from '../order/OrderItem.js';
import {PartyFixedAssetAssignmentType} from '../accounting/PartyFixedAssetAssignment.js';
import {AccommodationMapType} from '../accounting/AccommodationMap.js';
import {FacilityType} from '../product/Facility.js';
import {DeliveryType} from '../shipment/Delivery.js';
import {FixedAssetTypeType} from '../accounting/FixedAssetType.js';


const FixedAssetType = new GraphQLObjectType({
  name: 'FixedAssetType',
  description: 'Type for FixedAsset in accounting',

  fields: () => ({
    dateNextService: {type: GraphQLString},
    purchaseCostUomId: {type: GraphQLString},
    productionCapacity: {type: GraphQLFloat},
    acquireOrder: {
      type: OrderItemType,
      args : {acquireOrderId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${fixedAsset.acquireOrderId}`)
    },
    locatedAtLocationSeqId: {type: GraphQLString},
    actualEndOfLife: {type: GraphQLString},
    dateLastServiced: {type: GraphQLString},
    acquireOrderItemSeqId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${fixedAsset.partyId}`)
    },
    locatedAtFacility: {
      type: FacilityType,
      args : {locatedAtFacilityId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${fixedAsset.locatedAtFacilityId}`)
    },
    depreciation: {type: GraphQLFloat},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${fixedAsset.roleTypeId}`)
    },
    dateAcquired: {type: GraphQLString},
    purchaseCost: {type: GraphQLFloat},
    serialNumber: {type: GraphQLString},
    fixedAssetType: {
      type: FixedAssetTypeType,
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetTypes/find?fixedAssetTypeId=${fixedAsset.fixedAssetTypeId}`)
    },
    classEnumId: {type: GraphQLString},
    fixedAssetName: {type: GraphQLString},
    uomId: {type: GraphQLString},
    calendar: {
      type: TechDataCalendarType,
      args : {calendarId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`manufacturing/techDataCalendars/find?calendarId=${fixedAsset.calendarId}`)
    },
    salvageValue: {type: GraphQLFloat},
    fixedAssetId: {type: GraphQLString},
    parentFixedAsset: {
      type: FixedAssetType,
      args : {parentFixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAsset.parentFixedAssetId}`)
    },
    expectedEndOfLife: {type: GraphQLString},
    instanceOfProduct: {
      type: ProductType,
      args : {instanceOfProductId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${fixedAsset.instanceOfProductId}`)
    },
    glAccountCategoryTypes: {
      type: new GraphQLList(GlAccountCategoryTypeType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountCategoryTypes/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`product/costComponents/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    deliveries: {
      type: new GraphQLList(DeliveryType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`shipment/deliverys/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    partyFixedAssetAssignments: {
      type: new GraphQLList(PartyFixedAssetAssignmentType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/partyFixedAssetAssignments/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    accommodationMaps: {
      type: new GraphQLList(AccommodationMapType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/accommodationMaps/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetMaintOrders: {
      type: new GraphQLList(FixedAssetMaintOrderType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaintOrders/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaints/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetDepMethods: {
      type: new GraphQLList(FixedAssetDepMethodType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetDepMethods/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    workEffortFixedAssetAssigns: {
      type: new GraphQLList(WorkEffortFixedAssetAssignType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortFixedAssetAssigns/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    accommodationSpots: {
      type: new GraphQLList(AccommodationSpotType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/accommodationSpots/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetGeoPoints: {
      type: new GraphQLList(FixedAssetGeoPointType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetGeoPoints/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetProducts: {
      type: new GraphQLList(FixedAssetProductType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetProducts/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetRegistrations: {
      type: new GraphQLList(FixedAssetRegistrationType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetRegistrations/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`order/requirements/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetAttributes: {
      type: new GraphQLList(FixedAssetAttributeType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetAttributes/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetIdents: {
      type: new GraphQLList(FixedAssetIdentType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetIdents/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetStdCosts: {
      type: new GraphQLList(FixedAssetStdCostType),
      args : {},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetStdCosts/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    }
  })
});

export {FixedAssetType};
    




const FixedAssetInputType = new GraphQLInputObjectType({
  name: 'FixedAssetInputType',
  description: 'input type for FixedAsset in accounting',

  fields: () => ({
    dateNextService: {type: GraphQLString},
    purchaseCostUomId: {type: GraphQLString},
    productionCapacity: {type: GraphQLFloat},
    acquireOrderId: {type: GraphQLString},
    locatedAtLocationSeqId: {type: GraphQLString},
    actualEndOfLife: {type: GraphQLString},
    dateLastServiced: {type: GraphQLString},
    acquireOrderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    locatedAtFacilityId: {type: GraphQLString},
    depreciation: {type: GraphQLFloat},
    roleTypeId: {type: GraphQLString},
    dateAcquired: {type: GraphQLString},
    purchaseCost: {type: GraphQLFloat},
    serialNumber: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    classEnumId: {type: GraphQLString},
    fixedAssetName: {type: GraphQLString},
    uomId: {type: GraphQLString},
    calendarId: {type: GraphQLString},
    salvageValue: {type: GraphQLFloat},
    fixedAssetId: {type: GraphQLString},
    parentFixedAssetId: {type: GraphQLString},
    expectedEndOfLife: {type: GraphQLString},
    instanceOfProductId: {type: GraphQLString}
  })
});

export {FixedAssetInputType};
    