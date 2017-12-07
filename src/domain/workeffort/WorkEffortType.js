
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortNoteType} from '../workeffort/WorkEffortNoteType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {CustRequestWorkEffortType} from '../order/CustRequestWorkEffortType.js';
import {RateAmountType} from '../accounting/RateAmountType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {AccommodationSpotType} from '../accounting/AccommodationSpotType.js';
import {WorkEffortKeywordType} from '../workeffort/WorkEffortKeywordType.js';
import {ShoppingListWorkEffortType} from '../order/ShoppingListWorkEffortType.js';
import {WorkEffortEventReminderType} from '../workeffort/WorkEffortEventReminderType.js';
import {WorkEffortTransBoxType} from '../workeffort/WorkEffortTransBoxType.js';
import {ProductAssocType} from '../product/ProductAssocType.js';
import {WorkEffortBillingType} from '../workeffort/WorkEffortBillingType.js';
import {WorkEffortPurposeTypeType} from '../workeffort/WorkEffortPurposeTypeType.js';
import {CustRequestItemWorkEffortType} from '../order/CustRequestItemWorkEffortType.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignmentType.js';
import {WorkRequirementFulfillmentType} from '../order/WorkRequirementFulfillmentType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetailType.js';
import {WorkEffortContactMechType} from '../workeffort/WorkEffortContactMechType.js';
import {CommunicationEventWorkEffType} from '../workeffort/CommunicationEventWorkEffType.js';
import {TimeEntryType} from '../workeffort/TimeEntryType.js';
import {SalesOpportunityWorkEffortType} from '../marketing/SalesOpportunityWorkEffortType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {WorkEffortStatusType} from '../workeffort/WorkEffortStatusType.js';
import {WorkEffortGoodStandardType} from '../workeffort/WorkEffortGoodStandardType.js';
import {WorkEffortAttributeType} from '../workeffort/WorkEffortAttributeType.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {WorkEffortTypeType} from '../workeffort/WorkEffortTypeType.js';
import {WorkEffortIcalDataType} from '../workeffort/WorkEffortIcalDataType.js';
import {WorkEffortReviewType} from '../workeffort/WorkEffortReviewType.js';
import {WorkEffortDeliverableProdType} from '../workeffort/WorkEffortDeliverableProdType.js';
import {WorkOrderItemFulfillmentType} from '../order/WorkOrderItemFulfillmentType.js';
import {WorkEffortFixedAssetAssignType} from '../workeffort/WorkEffortFixedAssetAssignType.js';
import {WorkEffortCostCalcType} from '../workeffort/WorkEffortCostCalcType.js';
import {WorkEffortFixedAssetStdType} from '../workeffort/WorkEffortFixedAssetStdType.js';
import {QuoteWorkEffortType} from '../order/QuoteWorkEffortType.js';
import {WorkEffortSurveyApplType} from '../workeffort/WorkEffortSurveyApplType.js';
import {WorkEffortContentType} from '../workeffort/WorkEffortContentType.js';
import {AgreementWorkEffortApplicType} from '../party/AgreementWorkEffortApplicType.js';
import {WorkEffortInventoryAssignType} from '../workeffort/WorkEffortInventoryAssignType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {OrderHeaderWorkEffortType} from '../order/OrderHeaderWorkEffortType.js';
import {PersonTrainingType} from '../humanres/PersonTrainingType.js';
import {ProductMaintType} from '../product/ProductMaintType.js';
import {WorkEffortSkillStandardType} from '../workeffort/WorkEffortSkillStandardType.js';
import {AccommodationMapType} from '../accounting/AccommodationMapType.js';
import {FacilityType} from '../product/FacilityType.js';
import {WorkEffortInventoryProducedType} from '../workeffort/WorkEffortInventoryProducedType.js';
import {WorkEffortAssocType} from '../workeffort/WorkEffortAssocType.js';


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
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?workEffortId=${workEffort.workEffortId}`)
    },
    communicationEventWorkEff: {
      type: new GraphQLList(CommunicationEventWorkEffType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`communicationEventWorkEffs/find?workEffortId=${workEffort.workEffortId}`)
    },
    shoppingListWorkEffort: {
      type: new GraphQLList(ShoppingListWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`shoppingListWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortEventReminder: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortEventReminders/find?workEffortId=${workEffort.workEffortId}`)
    },
    orderHeaderWorkEffort: {
      type: new GraphQLList(OrderHeaderWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`orderHeaderWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    timeEntry: {
      type: new GraphQLList(TimeEntryType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?workEffortId=${workEffort.workEffortId}`)
    },
    rateAmount: {
      type: new GraphQLList(RateAmountType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?workEffortId=${workEffort.workEffortId}`)
    },
    personTraining: {
      type: new GraphQLList(PersonTrainingType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortTransBox: {
      type: new GraphQLList(WorkEffortTransBoxType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortTransBoxs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workRequirementFulfillment: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workRequirementFulfillments/find?workEffortId=${workEffort.workEffortId}`)
    },
    custRequestItemWorkEffort: {
      type: new GraphQLList(CustRequestItemWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`custRequestItemWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortIcalData: {
      type: new GraphQLList(WorkEffortIcalDataType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortIcalDatas/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortInventoryAssign: {
      type: new GraphQLList(WorkEffortInventoryAssignType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortInventoryAssigns/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortDeliverableProd: {
      type: new GraphQLList(WorkEffortDeliverableProdType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortDeliverableProds/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortKeyword: {
      type: new GraphQLList(WorkEffortKeywordType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortKeywords/find?workEffortId=${workEffort.workEffortId}`)
    },
    productMaint: {
      type: new GraphQLList(ProductMaintType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`productMaints/find?workEffortId=${workEffort.workEffortId}`)
    },
    workOrderItemFulfillment: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workOrderItemFulfillments/find?workEffortId=${workEffort.workEffortId}`)
    },
    custRequestWorkEffort: {
      type: new GraphQLList(CustRequestWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`custRequestWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortAssoc: {
      type: new GraphQLList(WorkEffortAssocType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortAttribute: {
      type: new GraphQLList(WorkEffortAttributeType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortAttributes/find?workEffortId=${workEffort.workEffortId}`)
    },
    agreementWorkEffortApplic: {
      type: new GraphQLList(AgreementWorkEffortApplicType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`agreementWorkEffortApplics/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortNote: {
      type: new GraphQLList(WorkEffortNoteType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortNotes/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortGoodStandard: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandards/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortSkillStandard: {
      type: new GraphQLList(WorkEffortSkillStandardType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortSkillStandards/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortSurveyAppl: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortSurveyAppls/find?workEffortId=${workEffort.workEffortId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?workEffortId=${workEffort.workEffortId}`)
    },
    quoteWorkEffort: {
      type: new GraphQLList(QuoteWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`quoteWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?workEffortId=${workEffort.workEffortId}`)
    },
    inventoryItemDetail: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?workEffortId=${workEffort.workEffortId}`)
    },
    productAssoc: {
      type: new GraphQLList(ProductAssocType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`productAssocs/find?workEffortId=${workEffort.workEffortId}`)
    },
    salesOpportunityWorkEffort: {
      type: new GraphQLList(SalesOpportunityWorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityWorkEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortReview: {
      type: new GraphQLList(WorkEffortReviewType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortReviews/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortPartyAssignment: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?workEffortId=${workEffort.workEffortId}`)
    },
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortStatus: {
      type: new GraphQLList(WorkEffortStatusType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortStatuss/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortCostCalc: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortCostCalcs/find?workEffortId=${workEffort.workEffortId}`)
    },
    fixedAssetMaint: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortFixedAssetAssign: {
      type: new GraphQLList(WorkEffortFixedAssetAssignType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetAssigns/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortFixedAssetStd: {
      type: new GraphQLList(WorkEffortFixedAssetStdType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortFixedAssetStds/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffort: {
      type: new GraphQLList(WorkEffortType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortContactMech: {
      type: new GraphQLList(WorkEffortContactMechType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortContactMechs/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortBilling: {
      type: new GraphQLList(WorkEffortBillingType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortBillings/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortContent: {
      type: new GraphQLList(WorkEffortContentType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortContents/find?workEffortId=${workEffort.workEffortId}`)
    },
    workEffortInventoryProduced: {
      type: new GraphQLList(WorkEffortInventoryProducedType),
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffort, args, {loaders}) => loaders.ofbizArray.load(`workEffortInventoryProduceds/find?workEffortId=${workEffort.workEffortId}`)
    }
  })
});

export {WorkEffortType};
    