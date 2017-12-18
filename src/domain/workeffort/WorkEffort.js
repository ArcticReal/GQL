
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

import {WorkEffortNoteType} from '../workeffort/WorkEffortNote.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {CustRequestWorkEffortType} from '../order/CustRequestWorkEffort.js';
import {RateAmountType} from '../accounting/RateAmount.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {AccommodationSpotType} from '../accounting/AccommodationSpot.js';
import {WorkEffortKeywordType} from '../workeffort/WorkEffortKeyword.js';
import {ShoppingListWorkEffortType} from '../order/ShoppingListWorkEffort.js';
import {WorkEffortEventReminderType} from '../workeffort/WorkEffortEventReminder.js';
import {WorkEffortTransBoxType} from '../workeffort/WorkEffortTransBox.js';
import {ProductAssocType} from '../product/ProductAssoc.js';
import {WorkEffortBillingType} from '../workeffort/WorkEffortBilling.js';
import {WorkEffortPurposeTypeType} from '../workeffort/WorkEffortPurposeType.js';
import {CustRequestItemWorkEffortType} from '../order/CustRequestItemWorkEffort.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignment.js';
import {WorkRequirementFulfillmentType} from '../order/WorkRequirementFulfillment.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetail.js';
import {WorkEffortContactMechType} from '../workeffort/WorkEffortContactMech.js';
import {CommunicationEventWorkEffType} from '../workeffort/CommunicationEventWorkEff.js';
import {TimeEntryType} from '../workeffort/TimeEntry.js';
import {SalesOpportunityWorkEffortType} from '../marketing/SalesOpportunityWorkEffort.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';
import {WorkEffortStatusType} from '../workeffort/WorkEffortStatus.js';
import {WorkEffortGoodStandardType} from '../workeffort/WorkEffortGoodStandard.js';
import {WorkEffortAttributeType} from '../workeffort/WorkEffortAttribute.js';
import {CostComponentType} from '../product/CostComponent.js';
import {WorkEffortTypeType} from '../workeffort/WorkEffortType.js';
import {WorkEffortIcalDataType} from '../workeffort/WorkEffortIcalData.js';
import {WorkEffortReviewType} from '../workeffort/WorkEffortReview.js';
import {WorkEffortDeliverableProdType} from '../workeffort/WorkEffortDeliverableProd.js';
import {WorkOrderItemFulfillmentType} from '../order/WorkOrderItemFulfillment.js';
import {WorkEffortFixedAssetAssignType} from '../workeffort/WorkEffortFixedAssetAssign.js';
import {WorkEffortCostCalcType} from '../workeffort/WorkEffortCostCalc.js';
import {WorkEffortFixedAssetStdType} from '../workeffort/WorkEffortFixedAssetStd.js';
import {QuoteWorkEffortType} from '../order/QuoteWorkEffort.js';
import {WorkEffortSurveyApplType} from '../workeffort/WorkEffortSurveyAppl.js';
import {WorkEffortContentType} from '../workeffort/WorkEffortContent.js';
import {AgreementWorkEffortApplicType} from '../party/AgreementWorkEffortApplic.js';
import {WorkEffortInventoryAssignType} from '../workeffort/WorkEffortInventoryAssign.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {OrderHeaderWorkEffortType} from '../order/OrderHeaderWorkEffort.js';
import {PersonTrainingType} from '../humanres/PersonTraining.js';
import {ProductMaintType} from '../product/ProductMaint.js';
import {WorkEffortSkillStandardType} from '../workeffort/WorkEffortSkillStandard.js';
import {AccommodationMapType} from '../accounting/AccommodationMap.js';
import {FacilityType} from '../product/Facility.js';
import {WorkEffortInventoryProducedType} from '../workeffort/WorkEffortInventoryProduced.js';
import {WorkEffortAssocType} from '../workeffort/WorkEffortAssoc.js';


const WorkEffortType = new GraphQLObjectType({
  name: 'WorkEffortType',
  description: 'Type for WorkEffort in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    workEffortType: {
      type: WorkEffortTypeType,
      args : {workEffortTypeId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortTypes/find?workEffortTypeId=${workEffort.workEffortTypeId}`)
    },
    reservPersons: {type: GraphQLFloat},
    revisionNumber: {type: GraphQLInt},
    tempExprId: {type: GraphQLString},
    showAsEnumId: {type: GraphQLString},
    infoUrl: {type: GraphQLString},
    universalId: {type: GraphQLString},
    locationDesc: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    actualMilliSeconds: {type: GraphQLFloat},
    quantityToProduce: {type: GraphQLFloat},
    workEffortPurposeType: {
      type: WorkEffortPurposeTypeType,
      args : {workEffortPurposeTypeId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortPurposeTypes/find?workEffortPurposeTypeId=${workEffort.workEffortPurposeTypeId}`)
    },
    serviceLoaderName: {type: GraphQLString},
    accommodationSpot: {
      type: AccommodationSpotType,
      args : {accommodationSpotId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`accounting/accommodationSpots/find?accommodationSpotId=${workEffort.accommodationSpotId}`)
    },
    estimatedStartDate: {type: GraphQLString},
    sendNotificationEmail: {type: GraphQLBoolean},
    noteId: {type: GraphQLString},
    quantityRejected: {type: GraphQLFloat},
    priority: {type: GraphQLInt},
    currentStatusId: {type: GraphQLString},
    runtimeDataId: {type: GraphQLString},
    estimatedMilliSeconds: {type: GraphQLFloat},
    specialTerms: {type: GraphQLString},
    timeTransparency: {type: GraphQLInt},
    actualCompletionDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${workEffort.fixedAssetId}`)
    },
    reserv2ndPPPerc: {type: GraphQLFloat},
    totalMoneyAllowed: {type: GraphQLFloat},
    estimateCalcMethod: {type: GraphQLString},
    workEffortParent: {
      type: WorkEffortType,
      args : {workEffortParentId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffort.workEffortParentId}`)
    },
    description: {type: GraphQLString},
    moneyUomId: {type: GraphQLString},
    reservNthPPPerc: {type: GraphQLFloat},
    workEffortName: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    accommodationMap: {
      type: AccommodationMapType,
      args : {accommodationMapId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`accounting/accommodationMaps/find?accommodationMapId=${workEffort.accommodationMapId}`)
    },
    actualStartDate: {type: GraphQLString},
    scopeEnumId: {type: GraphQLString},
    quantityProduced: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${workEffort.facilityId}`)
    },
    estimatedSetupMillis: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    lastStatusUpdate: {type: GraphQLString},
    percentComplete: {type: GraphQLInt},
    totalMilliSecondsAllowed: {type: GraphQLFloat},
    createdDate: {type: GraphQLString},
    actualSetupMillis: {type: GraphQLFloat},
    estimatedCompletionDate: {type: GraphQLString},
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?workEffortId=${workEffort.workEffortId}`)
    },
    communicationEventWorkEffs: {
      type: new GraphQLList(CommunicationEventWorkEffType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/communicationEventWorkEffs/find?workEffortId=${workEffort.workEffortId}`)
    },
    shoppingListWorkEfforts: {
      type: new GraphQLList(ShoppingListWorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingList/shoppingListWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortEventReminders: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortEventReminders/find?workEffortId=${workEffort.workEffortId}`)
    },
    orderHeaderWorkEfforts: {
      type: new GraphQLList(OrderHeaderWorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeader/orderHeaderWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timeEntrys/find?workEffortId=${workEffort.workEffortId}`)
    },
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`accounting/rateAmounts/find?workEffortId=${workEffort.workEffortId}`)
    },
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`humanres/personTrainings/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortTransBoxes: {
      type: new GraphQLList(WorkEffortTransBoxType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortTransBoxs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workRequirementFulfillments: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/workRequirementFulfillments/find?workEffortId=${workEffort.workEffortId}`)
    },
    custRequestItemWorkEfforts: {
      type: new GraphQLList(CustRequestItemWorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestItemWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortIcalDatas: {
      type: new GraphQLList(WorkEffortIcalDataType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortIcalDatas/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortInventoryAssigns: {
      type: new GraphQLList(WorkEffortInventoryAssignType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortInventoryAssigns/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortDeliverableProds: {
      type: new GraphQLList(WorkEffortDeliverableProdType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/deliverable/workEffortDeliverableProds/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortKeywords: {
      type: new GraphQLList(WorkEffortKeywordType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortKeywords/find?workEffortId=${workEffort.workEffortId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`product/product/productMaints/find?workEffortId=${workEffort.workEffortId}`)
    },
    workOrderItemFulfillments: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/workOrderItemFulfillments/find?workEffortId=${workEffort.workEffortId}`)
    },
    custRequestWorkEfforts: {
      type: new GraphQLList(CustRequestWorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortAssocs: {
      type: new GraphQLList(WorkEffortAssocType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortAssocs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortAttributes: {
      type: new GraphQLList(WorkEffortAttributeType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortAttributes/find?workEffortId=${workEffort.workEffortId}`)
    },
    agreementWorkEffortApplics: {
      type: new GraphQLList(AgreementWorkEffortApplicType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementWorkEffortApplics/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortNotes: {
      type: new GraphQLList(WorkEffortNoteType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortNotes/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortGoodStandards: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortGoodStandards/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortSkillStandards: {
      type: new GraphQLList(WorkEffortSkillStandardType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortSkillStandards/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortSurveyAppls: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortSurveyAppls/find?workEffortId=${workEffort.workEffortId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?workEffortId=${workEffort.workEffortId}`)
    },
    quoteWorkEfforts: {
      type: new GraphQLList(QuoteWorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?workEffortId=${workEffort.workEffortId}`)
    },
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemDetails/find?workEffortId=${workEffort.workEffortId}`)
    },
    productAssocs: {
      type: new GraphQLList(ProductAssocType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`product/product/productAssocs/find?workEffortId=${workEffort.workEffortId}`)
    },
    salesOpportunityWorkEfforts: {
      type: new GraphQLList(SalesOpportunityWorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesOpportunity/salesOpportunityWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortReviews: {
      type: new GraphQLList(WorkEffortReviewType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortReviews/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortPartyAssignments/find?workEffortId=${workEffort.workEffortId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`product/costComponents/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortStatuses: {
      type: new GraphQLList(WorkEffortStatusType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortStatuss/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortCostCalcs: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortCostCalcs/find?workEffortId=${workEffort.workEffortId}`)
    },
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaints/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortFixedAssetAssigns: {
      type: new GraphQLList(WorkEffortFixedAssetAssignType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortFixedAssetAssigns/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortFixedAssetStds: {
      type: new GraphQLList(WorkEffortFixedAssetStdType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortFixedAssetStds/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortContactMeches: {
      type: new GraphQLList(WorkEffortContactMechType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortContactMechs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortBillings: {
      type: new GraphQLList(WorkEffortBillingType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortBillings/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortContents: {
      type: new GraphQLList(WorkEffortContentType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortContents/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortInventoryProduceds: {
      type: new GraphQLList(WorkEffortInventoryProducedType),
      args : {},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortInventoryProduceds/find?workEffortId=${workEffort.workEffortId}`)
    }
  })
});

export {WorkEffortType};
    




const WorkEffortInputType = new GraphQLInputObjectType({
  name: 'WorkEffortInputType',
  description: 'input type for WorkEffort',

  fields: () => ({
    accommodationMapId: {type: GraphQLString},
    accommodationSpotId: {type: GraphQLString},
    actualCompletionDate: {type: GraphQLString},
    actualMilliSeconds: {type: GraphQLFloat},
    actualSetupMillis: {type: GraphQLFloat},
    actualStartDate: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    currentStatusId: {type: GraphQLString},
    description: {type: GraphQLString},
    estimateCalcMethod: {type: GraphQLString},
    estimatedCompletionDate: {type: GraphQLString},
    estimatedMilliSeconds: {type: GraphQLFloat},
    estimatedSetupMillis: {type: GraphQLFloat},
    estimatedStartDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    infoUrl: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    lastStatusUpdate: {type: GraphQLString},
    locationDesc: {type: GraphQLString},
    moneyUomId: {type: GraphQLString},
    noteId: {type: GraphQLString},
    percentComplete: {type: GraphQLInt},
    priority: {type: GraphQLInt},
    quantityProduced: {type: GraphQLFloat},
    quantityRejected: {type: GraphQLFloat},
    quantityToProduce: {type: GraphQLFloat},
    recurrenceInfoId: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLFloat},
    reservNthPPPerc: {type: GraphQLFloat},
    reservPersons: {type: GraphQLFloat},
    revisionNumber: {type: GraphQLInt},
    runtimeDataId: {type: GraphQLString},
    scopeEnumId: {type: GraphQLString},
    sendNotificationEmail: {type: GraphQLBoolean},
    serviceLoaderName: {type: GraphQLString},
    showAsEnumId: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    specialTerms: {type: GraphQLString},
    tempExprId: {type: GraphQLString},
    timeTransparency: {type: GraphQLInt},
    totalMilliSecondsAllowed: {type: GraphQLFloat},
    totalMoneyAllowed: {type: GraphQLFloat},
    universalId: {type: GraphQLString},
    workEffortId: {type: GraphQLString},
    workEffortName: {type: GraphQLString},
    workEffortParentId: {type: GraphQLString},
    workEffortPurposeTypeId: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString}
  })
});

export {WorkEffortInputType};
    