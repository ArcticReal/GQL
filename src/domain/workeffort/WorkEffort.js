
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
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`workEffortTypes/find?workEffortTypeId=${workEffort.workEffortTypeId}`)
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
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`workEffortPurposeTypes/find?workEffortPurposeTypeId=${workEffort.workEffortPurposeTypeId}`)
    },
    serviceLoaderName: {type: GraphQLString},
    accommodationSpot: {
      type: AccommodationSpotType,
      args : {accommodationSpotId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`accommodationSpots/find?accommodationSpotId=${workEffort.accommodationSpotId}`)
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
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${workEffort.fixedAssetId}`)
    },
    reserv2ndPPPerc: {type: GraphQLFloat},
    totalMoneyAllowed: {type: GraphQLFloat},
    estimateCalcMethod: {type: GraphQLString},
    workEffortParent: {
      type: WorkEffortType,
      args : {workEffortParentId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffort.workEffortParentId}`)
    },
    description: {type: GraphQLString},
    moneyUomId: {type: GraphQLString},
    reservNthPPPerc: {type: GraphQLFloat},
    workEffortName: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    accommodationMap: {
      type: AccommodationMapType,
      args : {accommodationMapId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`accommodationMaps/find?accommodationMapId=${workEffort.accommodationMapId}`)
    },
    actualStartDate: {type: GraphQLString},
    scopeEnumId: {type: GraphQLString},
    quantityProduced: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${workEffort.facilityId}`)
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
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?workEffortId=${workEffort.workEffortId}`)
    },
    communicationEventWorkEffs: {
      type: new GraphQLList(CommunicationEventWorkEffType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`communicationEventWorkEffs/find?workEffortId=${workEffort.workEffortId}`)
    },
    shoppingListWorkEfforts: {
      type: new GraphQLList(ShoppingListWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`shoppingListWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortEventReminders: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortEventReminders/find?workEffortId=${workEffort.workEffortId}`)
    },
    orderHeaderWorkEfforts: {
      type: new GraphQLList(OrderHeaderWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`orderHeaderWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?workEffortId=${workEffort.workEffortId}`)
    },
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?workEffortId=${workEffort.workEffortId}`)
    },
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortTransBoxes: {
      type: new GraphQLList(WorkEffortTransBoxType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortTransBoxs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workRequirementFulfillments: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workRequirementFulfillments/find?workEffortId=${workEffort.workEffortId}`)
    },
    custRequestItemWorkEfforts: {
      type: new GraphQLList(CustRequestItemWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`custRequestItemWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortIcalDatas: {
      type: new GraphQLList(WorkEffortIcalDataType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortIcalDatas/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortInventoryAssigns: {
      type: new GraphQLList(WorkEffortInventoryAssignType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortInventoryAssigns/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortDeliverableProds: {
      type: new GraphQLList(WorkEffortDeliverableProdType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortDeliverableProds/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortKeywords: {
      type: new GraphQLList(WorkEffortKeywordType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortKeywords/find?workEffortId=${workEffort.workEffortId}`)
    },
    productMaints: {
      type: new GraphQLList(ProductMaintType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?workEffortId=${workEffort.workEffortId}`)
    },
    workOrderItemFulfillments: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workOrderItemFulfillments/find?workEffortId=${workEffort.workEffortId}`)
    },
    custRequestWorkEfforts: {
      type: new GraphQLList(CustRequestWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`custRequestWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortAssocs: {
      type: new GraphQLList(WorkEffortAssocType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortAttributes: {
      type: new GraphQLList(WorkEffortAttributeType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortAttributes/find?workEffortId=${workEffort.workEffortId}`)
    },
    agreementWorkEffortApplics: {
      type: new GraphQLList(AgreementWorkEffortApplicType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`agreementWorkEffortApplics/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortNotes: {
      type: new GraphQLList(WorkEffortNoteType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortNotes/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortGoodStandards: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandards/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortSkillStandards: {
      type: new GraphQLList(WorkEffortSkillStandardType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortSkillStandards/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortSurveyAppls: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortSurveyAppls/find?workEffortId=${workEffort.workEffortId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?workEffortId=${workEffort.workEffortId}`)
    },
    quoteWorkEfforts: {
      type: new GraphQLList(QuoteWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`quoteWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?workEffortId=${workEffort.workEffortId}`)
    },
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?workEffortId=${workEffort.workEffortId}`)
    },
    productAssocs: {
      type: new GraphQLList(ProductAssocType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`productAssocs/find?workEffortId=${workEffort.workEffortId}`)
    },
    salesOpportunityWorkEfforts: {
      type: new GraphQLList(SalesOpportunityWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortReviews: {
      type: new GraphQLList(WorkEffortReviewType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortReviews/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?workEffortId=${workEffort.workEffortId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortStatuses: {
      type: new GraphQLList(WorkEffortStatusType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortStatuss/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortCostCalcs: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortCostCalcs/find?workEffortId=${workEffort.workEffortId}`)
    },
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortFixedAssetAssigns: {
      type: new GraphQLList(WorkEffortFixedAssetAssignType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetAssigns/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortFixedAssetStds: {
      type: new GraphQLList(WorkEffortFixedAssetStdType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetStds/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortContactMeches: {
      type: new GraphQLList(WorkEffortContactMechType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortContactMechs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortBillings: {
      type: new GraphQLList(WorkEffortBillingType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortBillings/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortContents: {
      type: new GraphQLList(WorkEffortContentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortContents/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortInventoryProduceds: {
      type: new GraphQLList(WorkEffortInventoryProducedType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortInventoryProduceds/find?workEffortId=${workEffort.workEffortId}`)
    }
  })
});

export {WorkEffortType};
    




const WorkEffortInputType = new GraphQLInputObjectType({
  name: 'WorkEffortInputType',
  description: 'input type for WorkEffort in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString},
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
    workEffortPurposeTypeId: {type: GraphQLString},
    serviceLoaderName: {type: GraphQLString},
    accommodationSpotId: {type: GraphQLString},
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
    fixedAssetId: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLFloat},
    totalMoneyAllowed: {type: GraphQLFloat},
    estimateCalcMethod: {type: GraphQLString},
    workEffortParentId: {type: GraphQLString},
    description: {type: GraphQLString},
    moneyUomId: {type: GraphQLString},
    reservNthPPPerc: {type: GraphQLFloat},
    workEffortName: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    accommodationMapId: {type: GraphQLString},
    actualStartDate: {type: GraphQLString},
    scopeEnumId: {type: GraphQLString},
    quantityProduced: {type: GraphQLFloat},
    facilityId: {type: GraphQLString},
    estimatedSetupMillis: {type: GraphQLFloat},
    lastModifiedDate: {type: GraphQLString},
    sourceReferenceId: {type: GraphQLString},
    lastStatusUpdate: {type: GraphQLString},
    percentComplete: {type: GraphQLInt},
    totalMilliSecondsAllowed: {type: GraphQLFloat},
    createdDate: {type: GraphQLString},
    actualSetupMillis: {type: GraphQLFloat},
    estimatedCompletionDate: {type: GraphQLString}
  })
});

export {WorkEffortInputType};
    