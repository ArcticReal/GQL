
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

import {FixedAssetAttributeType} from '../../accounting/FixedAssetAttribute/FixedAssetAttributeType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {CostComponentType} from '../../product/CostComponent/CostComponentType.js';
import {FixedAssetDepMethodType} from '../../accounting/FixedAssetDepMethod/FixedAssetDepMethodType.js';
import {FixedAssetIdentType} from '../../accounting/FixedAssetIdent/FixedAssetIdentType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {AccommodationSpotType} from '../../accounting/AccommodationSpot/AccommodationSpotType.js';
import {FixedAssetStdCostType} from '../../accounting/FixedAssetStdCost/FixedAssetStdCostType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {WorkEffortFixedAssetAssignType} from '../../workeffort/WorkEffortFixedAssetAssign/WorkEffortFixedAssetAssignType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {FixedAssetRegistrationType} from '../../accounting/FixedAssetRegistration/FixedAssetRegistrationType.js';
import {GlAccountCategoryTypeType} from '../../accounting/GlAccountCategoryType/GlAccountCategoryTypeType.js';
import {FixedAssetGeoPointType} from '../../accounting/FixedAssetGeoPoint/FixedAssetGeoPointType.js';
import {FixedAssetProductType} from '../../accounting/FixedAssetProduct/FixedAssetProductType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {TechDataCalendarType} from '../../manufacturing/TechDataCalendar/TechDataCalendarType.js';
import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {FixedAssetMaintOrderType} from '../../accounting/FixedAssetMaintOrder/FixedAssetMaintOrderType.js';
import {FixedAssetMaintType} from '../../accounting/FixedAssetMaint/FixedAssetMaintType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {PartyFixedAssetAssignmentType} from '../../accounting/PartyFixedAssetAssignment/PartyFixedAssetAssignmentType.js';
import {AccommodationMapType} from '../../accounting/AccommodationMap/AccommodationMapType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';
import {DeliveryType} from '../../shipment/Delivery/DeliveryType.js';
import {FixedAssetTypeType} from '../../accounting/FixedAssetType/FixedAssetTypeType.js';


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
    