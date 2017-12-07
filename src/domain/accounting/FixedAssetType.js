
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetAttributeType} from '../accounting/FixedAssetAttributeType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {FixedAssetDepMethodType} from '../accounting/FixedAssetDepMethodType.js';
import {FixedAssetIdentType} from '../accounting/FixedAssetIdentType.js';
import {ProductType} from '../product/ProductType.js';
import {AccommodationSpotType} from '../accounting/AccommodationSpotType.js';
import {FixedAssetStdCostType} from '../accounting/FixedAssetStdCostType.js';
import {PartyType} from '../party/PartyType.js';
import {WorkEffortFixedAssetAssignType} from '../workeffort/WorkEffortFixedAssetAssignType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {FixedAssetRegistrationType} from '../accounting/FixedAssetRegistrationType.js';
import {GlAccountCategoryTypeType} from '../accounting/GlAccountCategoryTypeType.js';
import {FixedAssetGeoPointType} from '../accounting/FixedAssetGeoPointType.js';
import {FixedAssetProductType} from '../accounting/FixedAssetProductType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {TechDataCalendarType} from '../manufacturing/TechDataCalendarType.js';
import {RequirementType} from '../order/RequirementType.js';
import {FixedAssetMaintOrderType} from '../accounting/FixedAssetMaintOrderType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {PartyFixedAssetAssignmentType} from '../accounting/PartyFixedAssetAssignmentType.js';
import {AccommodationMapType} from '../accounting/AccommodationMapType.js';
import {FacilityType} from '../product/FacilityType.js';
import {DeliveryType} from '../shipment/DeliveryType.js';
import {FixedAssetTypeType} from '../accounting/FixedAssetTypeType.js';


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
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${fixedAsset.acquireOrderId}`)
    },
    locatedAtLocationSeqId: {type: GraphQLString},
    actualEndOfLife: {type: GraphQLString},
    dateLastServiced: {type: GraphQLString},
    acquireOrderItemSeqId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${fixedAsset.partyId}`)
    },
    locatedAtFacility: {
      type: FacilityType,
      args : {locatedAtFacilityId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${fixedAsset.locatedAtFacilityId}`)
    },
    depreciation: {type: GraphQLFloat},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${fixedAsset.roleTypeId}`)
    },
    dateAcquired: {type: GraphQLString},
    purchaseCost: {type: GraphQLFloat},
    serialNumber: {type: GraphQLString},
    fixedAssetType: {
      type: FixedAssetTypeType,
      args : {fixedAssetTypeId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`fixedAssetTypes/find?fixedAssetTypeId=${fixedAsset.fixedAssetTypeId}`)
    },
    classEnumId: {type: GraphQLString},
    fixedAssetName: {type: GraphQLString},
    uomId: {type: GraphQLString},
    calendar: {
      type: TechDataCalendarType,
      args : {calendarId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`techDataCalendars/find?calendarId=${fixedAsset.calendarId}`)
    },
    salvageValue: {type: GraphQLFloat},
    fixedAssetId: {type: GraphQLString},
    parentFixedAsset: {
      type: FixedAssetType,
      args : {parentFixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAsset.parentFixedAssetId}`)
    },
    expectedEndOfLife: {type: GraphQLString},
    instanceOfProduct: {
      type: ProductType,
      args : {instanceOfProductId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${fixedAsset.instanceOfProductId}`)
    },
    glAccountCategoryType: {
      type: new GraphQLList(GlAccountCategoryTypeType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`glAccountCategoryTypes/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    delivery: {
      type: new GraphQLList(DeliveryType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`deliverys/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    partyFixedAssetAssignment: {
      type: new GraphQLList(PartyFixedAssetAssignmentType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`partyFixedAssetAssignments/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    accommodationMap: {
      type: new GraphQLList(AccommodationMapType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accommodationMaps/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetMaintOrder: {
      type: new GraphQLList(FixedAssetMaintOrderType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintOrders/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetMaint: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetDepMethod: {
      type: new GraphQLList(FixedAssetDepMethodType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetDepMethods/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    workEffortFixedAssetAssign: {
      type: new GraphQLList(WorkEffortFixedAssetAssignType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetAssigns/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    accommodationSpot: {
      type: new GraphQLList(AccommodationSpotType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`accommodationSpots/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    workEffort: {
      type: new GraphQLList(WorkEffortType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetGeoPoint: {
      type: new GraphQLList(FixedAssetGeoPointType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetGeoPoints/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetProduct: {
      type: new GraphQLList(FixedAssetProductType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetProducts/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetRegistration: {
      type: new GraphQLList(FixedAssetRegistrationType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetRegistrations/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    requirement: {
      type: new GraphQLList(RequirementType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetAttribute: {
      type: new GraphQLList(FixedAssetAttributeType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetAttributes/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetIdent: {
      type: new GraphQLList(FixedAssetIdentType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetIdents/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    },
    fixedAssetStdCost: {
      type: new GraphQLList(FixedAssetStdCostType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAsset, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetStdCosts/find?fixedAssetId=${fixedAsset.fixedAssetId}`)
    }
  })
});

export {FixedAssetType};
    