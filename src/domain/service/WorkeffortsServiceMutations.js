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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const assignInventoryToWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz assignInventoryToWorkEffort method',
  args:{workEffortId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},quantity: {type: GraphQLFloat},statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/assignInventoryToWorkEffort?workEffortId=${args.workEffortId}inventoryItemId=${args.inventoryItemId}quantity=${args.quantity}statusId=${args.statusId}`, null, req);
  }
};
export {assignInventoryToWorkEffort};


const assignPartyToWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz assignPartyToWorkEffort method',
  args:{workEffortId: {type: GraphQLString},roleTypeId: {type: GraphQLString},statusId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},mustRsvp: {type: GraphQLString},assignedByUserLoginId: {type: GraphQLString},expectationEnumId: {type: GraphQLString},availabilityStatusId: {type: GraphQLString},delegateReasonEnumId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/assignPartyToWorkEffort?workEffortId=${args.workEffortId}roleTypeId=${args.roleTypeId}statusId=${args.statusId}partyId=${args.partyId}fromDate=${args.fromDate}facilityId=${args.facilityId}comments=${args.comments}mustRsvp=${args.mustRsvp}assignedByUserLoginId=${args.assignedByUserLoginId}expectationEnumId=${args.expectationEnumId}availabilityStatusId=${args.availabilityStatusId}delegateReasonEnumId=${args.delegateReasonEnumId}thruDate=${args.thruDate}`, null, req);
  }
};
export {assignPartyToWorkEffort};


const checkCustRequestItemExists = {
  type: ResponseType,
  description: 'mutation for ofbiz checkCustRequestItemExists method',
  args:{custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/checkCustRequestItemExists?custRequestId=${args.custRequestId}custRequestItemSeqId=${args.custRequestItemSeqId}`, null, req);
  }
};
export {checkCustRequestItemExists};


const copyWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz copyWorkEffort method',
  args:{sourceWorkEffortId: {type: GraphQLString},copyRelatedValues: {type: GraphQLString},excludeExpiredAssocs: {type: GraphQLString},targetWorkEffortId: {type: GraphQLString},copyWorkEffortAssocs: {type: GraphQLString},excludeExpiredRelations: {type: GraphQLString},deepCopy: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/copyWorkEffort?sourceWorkEffortId=${args.sourceWorkEffortId}copyRelatedValues=${args.copyRelatedValues}excludeExpiredAssocs=${args.excludeExpiredAssocs}targetWorkEffortId=${args.targetWorkEffortId}copyWorkEffortAssocs=${args.copyWorkEffortAssocs}excludeExpiredRelations=${args.excludeExpiredRelations}deepCopy=${args.deepCopy}`, null, req);
  }
};
export {copyWorkEffort};


const copyWorkEffortAssocs = {
  type: ResponseType,
  description: 'mutation for ofbiz copyWorkEffortAssocs method',
  args:{sourceWorkEffortId: {type: GraphQLString},copyRelatedValues: {type: GraphQLString},excludeExpiredAssocs: {type: GraphQLString},targetWorkEffortId: {type: GraphQLString},excludeExpiredRelations: {type: GraphQLString},deepCopy: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/copyWorkEffortAssocs?sourceWorkEffortId=${args.sourceWorkEffortId}copyRelatedValues=${args.copyRelatedValues}excludeExpiredAssocs=${args.excludeExpiredAssocs}targetWorkEffortId=${args.targetWorkEffortId}excludeExpiredRelations=${args.excludeExpiredRelations}deepCopy=${args.deepCopy}`, null, req);
  }
};
export {copyWorkEffortAssocs};


const createCommunicationEventWorkEff = {
  type: ResponseType,
  description: 'mutation for ofbiz createCommunicationEventWorkEff method',
  args:{workEffortId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},note: {type: GraphQLString},subject: {type: GraphQLString},ccString: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString},content: {type: GraphQLString},contentMimeTypeId: {type: GraphQLString},datetimeStarted: {type: GraphQLString},contactListId: {type: GraphQLString},contactMechIdFrom: {type: GraphQLString},reasonEnumId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},parentCommEventId: {type: GraphQLString},entryDate: {type: GraphQLString},datetimeEnded: {type: GraphQLString},origCommEventId: {type: GraphQLString},messageId: {type: GraphQLInt},roleTypeIdFrom: {type: GraphQLString},contactMechIdTo: {type: GraphQLString},headerString: {type: GraphQLString},statusId: {type: GraphQLString},communicationEventId: {type: GraphQLString},bccString: {type: GraphQLString},partyIdTo: {type: GraphQLString},toString: {type: GraphQLString},fromString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createCommunicationEventWorkEff?workEffortId=${args.workEffortId}partyIdFrom=${args.partyIdFrom}note=${args.note}subject=${args.subject}ccString=${args.ccString}description=${args.description}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}content=${args.content}contentMimeTypeId=${args.contentMimeTypeId}datetimeStarted=${args.datetimeStarted}contactListId=${args.contactListId}contactMechIdFrom=${args.contactMechIdFrom}reasonEnumId=${args.reasonEnumId}roleTypeIdTo=${args.roleTypeIdTo}parentCommEventId=${args.parentCommEventId}entryDate=${args.entryDate}datetimeEnded=${args.datetimeEnded}origCommEventId=${args.origCommEventId}messageId=${args.messageId}roleTypeIdFrom=${args.roleTypeIdFrom}contactMechIdTo=${args.contactMechIdTo}headerString=${args.headerString}statusId=${args.statusId}communicationEventId=${args.communicationEventId}bccString=${args.bccString}partyIdTo=${args.partyIdTo}toString=${args.toString}fromString=${args.fromString}`, null, req);
  }
};
export {createCommunicationEventWorkEff};


const createOrderHeaderWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz createOrderHeaderWorkEffort method',
  args:{workEffortId: {type: GraphQLString},invoicePerShipment: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},orderId: {type: GraphQLString},orderTypeId: {type: GraphQLString},billingAccountId: {type: GraphQLString},terminalId: {type: GraphQLString},isViewed: {type: GraphQLString},visitId: {type: GraphQLString},productStoreId: {type: GraphQLString},remainingSubTotal: {type: GraphQLFloat},orderName: {type: GraphQLString},webSiteId: {type: GraphQLString},isRushOrder: {type: GraphQLString},entryDate: {type: GraphQLString},grandTotal: {type: GraphQLFloat},autoOrderShoppingListId: {type: GraphQLString},externalId: {type: GraphQLString},priority: {type: GraphQLString},transactionId: {type: GraphQLString},firstAttemptOrderId: {type: GraphQLString},originFacilityId: {type: GraphQLString},statusId: {type: GraphQLString},createdBy: {type: GraphQLString},currencyUom: {type: GraphQLString},syncStatusId: {type: GraphQLString},pickSheetPrintedDate: {type: GraphQLString},needsInventoryIssuance: {type: GraphQLString},orderDate: {type: GraphQLString},internalCode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createOrderHeaderWorkEffort?workEffortId=${args.workEffortId}invoicePerShipment=${args.invoicePerShipment}salesChannelEnumId=${args.salesChannelEnumId}orderId=${args.orderId}orderTypeId=${args.orderTypeId}billingAccountId=${args.billingAccountId}terminalId=${args.terminalId}isViewed=${args.isViewed}visitId=${args.visitId}productStoreId=${args.productStoreId}remainingSubTotal=${args.remainingSubTotal}orderName=${args.orderName}webSiteId=${args.webSiteId}isRushOrder=${args.isRushOrder}entryDate=${args.entryDate}grandTotal=${args.grandTotal}autoOrderShoppingListId=${args.autoOrderShoppingListId}externalId=${args.externalId}priority=${args.priority}transactionId=${args.transactionId}firstAttemptOrderId=${args.firstAttemptOrderId}originFacilityId=${args.originFacilityId}statusId=${args.statusId}createdBy=${args.createdBy}currencyUom=${args.currencyUom}syncStatusId=${args.syncStatusId}pickSheetPrintedDate=${args.pickSheetPrintedDate}needsInventoryIssuance=${args.needsInventoryIssuance}orderDate=${args.orderDate}internalCode=${args.internalCode}`, null, req);
  }
};
export {createOrderHeaderWorkEffort};


const createShoppingListWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz createShoppingListWorkEffort method',
  args:{workEffortId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},parentShoppingListId: {type: GraphQLString},productPromoCodeId: {type: GraphQLString},description: {type: GraphQLString},isActive: {type: GraphQLString},shoppingListTypeId: {type: GraphQLString},contactMechId: {type: GraphQLString},carrierPartyId: {type: GraphQLString},shoppingListId: {type: GraphQLString},currencyUom: {type: GraphQLString},lastOrderedDate: {type: GraphQLString},carrierRoleTypeId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},isPublic: {type: GraphQLString},productStoreId: {type: GraphQLString},listName: {type: GraphQLString},lastAdminModified: {type: GraphQLString},partyId: {type: GraphQLString},shipmentMethodTypeId: {type: GraphQLString},visitorId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createShoppingListWorkEffort?workEffortId=${args.workEffortId}recurrenceInfoId=${args.recurrenceInfoId}parentShoppingListId=${args.parentShoppingListId}productPromoCodeId=${args.productPromoCodeId}description=${args.description}isActive=${args.isActive}shoppingListTypeId=${args.shoppingListTypeId}contactMechId=${args.contactMechId}carrierPartyId=${args.carrierPartyId}shoppingListId=${args.shoppingListId}currencyUom=${args.currencyUom}lastOrderedDate=${args.lastOrderedDate}carrierRoleTypeId=${args.carrierRoleTypeId}paymentMethodId=${args.paymentMethodId}isPublic=${args.isPublic}productStoreId=${args.productStoreId}listName=${args.listName}lastAdminModified=${args.lastAdminModified}partyId=${args.partyId}shipmentMethodTypeId=${args.shipmentMethodTypeId}visitorId=${args.visitorId}`, null, req);
  }
};
export {createShoppingListWorkEffort};


const createWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffort method',
  args:{workEffortTypeId: {type: GraphQLString},currentStatusId: {type: GraphQLString},workEffortName: {type: GraphQLString},workEffortId: {type: GraphQLString},totalMoneyAllowed: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},tempExprId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quickAssignPartyId: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},accommodationMapId: {type: GraphQLString},locationDesc: {type: GraphQLString},actualStartDate: {type: GraphQLString},custRequestId: {type: GraphQLString},scopeEnumId: {type: GraphQLString},requirementId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},webSiteId: {type: GraphQLString},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},percentComplete: {type: GraphQLInt},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},totalMilliSecondsAllowed: {type: GraphQLFloat},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},communicationEventId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffort?workEffortTypeId=${args.workEffortTypeId}currentStatusId=${args.currentStatusId}workEffortName=${args.workEffortName}workEffortId=${args.workEffortId}totalMoneyAllowed=${args.totalMoneyAllowed}recurrenceInfoId=${args.recurrenceInfoId}reservPersons=${args.reservPersons}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}tempExprId=${args.tempExprId}reservNthPPPerc=${args.reservNthPPPerc}quickAssignPartyId=${args.quickAssignPartyId}showAsEnumId=${args.showAsEnumId}infoUrl=${args.infoUrl}universalId=${args.universalId}accommodationMapId=${args.accommodationMapId}locationDesc=${args.locationDesc}actualStartDate=${args.actualStartDate}custRequestId=${args.custRequestId}scopeEnumId=${args.scopeEnumId}requirementId=${args.requirementId}quantityProduced=${args.quantityProduced}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}webSiteId=${args.webSiteId}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sourceReferenceId=${args.sourceReferenceId}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}percentComplete=${args.percentComplete}quantityRejected=${args.quantityRejected}priority=${args.priority}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}specialTerms=${args.specialTerms}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}communicationEventId=${args.communicationEventId}reserv2ndPPPerc=${args.reserv2ndPPPerc}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {createWorkEffort};


const createWorkEffortAndAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAndAssoc method',
  args:{workEffortTypeId: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},currentStatusId: {type: GraphQLString},workEffortName: {type: GraphQLString},workEffortId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},revisionNumber: {type: GraphQLInt},tempExprId: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},locationDesc: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},thruDate: {type: GraphQLString},specialTerms: {type: GraphQLString},workEffortIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},totalMoneyAllowed: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quickAssignPartyId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},accommodationMapId: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},lastStatusUpdate: {type: GraphQLString},percentComplete: {type: GraphQLInt},totalMilliSecondsAllowed: {type: GraphQLFloat},createdDate: {type: GraphQLString},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortAndAssoc?workEffortTypeId=${args.workEffortTypeId}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}currentStatusId=${args.currentStatusId}workEffortName=${args.workEffortName}workEffortId=${args.workEffortId}recurrenceInfoId=${args.recurrenceInfoId}reservPersons=${args.reservPersons}sequenceNum=${args.sequenceNum}revisionNumber=${args.revisionNumber}tempExprId=${args.tempExprId}showAsEnumId=${args.showAsEnumId}infoUrl=${args.infoUrl}universalId=${args.universalId}locationDesc=${args.locationDesc}createdByUserLogin=${args.createdByUserLogin}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}quantityRejected=${args.quantityRejected}priority=${args.priority}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}thruDate=${args.thruDate}specialTerms=${args.specialTerms}workEffortIdTo=${args.workEffortIdTo}fromDate=${args.fromDate}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}reserv2ndPPPerc=${args.reserv2ndPPPerc}totalMoneyAllowed=${args.totalMoneyAllowed}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}reservNthPPPerc=${args.reservNthPPPerc}quickAssignPartyId=${args.quickAssignPartyId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}accommodationMapId=${args.accommodationMapId}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}quantityProduced=${args.quantityProduced}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}lastModifiedDate=${args.lastModifiedDate}sourceReferenceId=${args.sourceReferenceId}lastStatusUpdate=${args.lastStatusUpdate}percentComplete=${args.percentComplete}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}createdDate=${args.createdDate}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {createWorkEffortAndAssoc};


const createWorkEffortAndPartyAssign = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAndPartyAssign method',
  args:{roleTypeId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},statusId: {type: GraphQLString},partyId: {type: GraphQLString},currentStatusId: {type: GraphQLString},workEffortName: {type: GraphQLString},workEffortId: {type: GraphQLString},totalMoneyAllowed: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},tempExprId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},quickAssignPartyId: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},accommodationMapId: {type: GraphQLString},locationDesc: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},requirementId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},percentComplete: {type: GraphQLInt},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},totalMilliSecondsAllowed: {type: GraphQLFloat},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},communicationEventId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortAndPartyAssign?roleTypeId=${args.roleTypeId}workEffortTypeId=${args.workEffortTypeId}statusId=${args.statusId}partyId=${args.partyId}currentStatusId=${args.currentStatusId}workEffortName=${args.workEffortName}workEffortId=${args.workEffortId}totalMoneyAllowed=${args.totalMoneyAllowed}recurrenceInfoId=${args.recurrenceInfoId}reservPersons=${args.reservPersons}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}tempExprId=${args.tempExprId}reservNthPPPerc=${args.reservNthPPPerc}quickAssignPartyId=${args.quickAssignPartyId}showAsEnumId=${args.showAsEnumId}infoUrl=${args.infoUrl}universalId=${args.universalId}accommodationMapId=${args.accommodationMapId}locationDesc=${args.locationDesc}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}requirementId=${args.requirementId}quantityProduced=${args.quantityProduced}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sourceReferenceId=${args.sourceReferenceId}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}percentComplete=${args.percentComplete}quantityRejected=${args.quantityRejected}priority=${args.priority}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}specialTerms=${args.specialTerms}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}communicationEventId=${args.communicationEventId}reserv2ndPPPerc=${args.reserv2ndPPPerc}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {createWorkEffortAndPartyAssign};


const createWorkEffortAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAssoc method',
  args:{workEffortIdTo: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortAssoc?workEffortIdTo=${args.workEffortIdTo}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWorkEffortAssoc};


const createWorkEffortAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAttribute method',
  args:{workEffortId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortAttribute?workEffortId=${args.workEffortId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createWorkEffortAttribute};


const createWorkEffortContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortContactMech method',
  args:{workEffortId: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},roleTypeId: {type: GraphQLString},extension: {type: GraphQLString},comments: {type: GraphQLString},verified: {type: GraphQLString},monthsWithContactMech: {type: GraphQLInt},contactMechId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},allowSolicitation: {type: GraphQLString},yearsWithContactMech: {type: GraphQLInt},infoString: {type: GraphQLString},contactMechPurposeTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortContactMech?workEffortId=${args.workEffortId}contactMechTypeId=${args.contactMechTypeId}roleTypeId=${args.roleTypeId}extension=${args.extension}comments=${args.comments}verified=${args.verified}monthsWithContactMech=${args.monthsWithContactMech}contactMechId=${args.contactMechId}thruDate=${args.thruDate}fromDate=${args.fromDate}allowSolicitation=${args.allowSolicitation}yearsWithContactMech=${args.yearsWithContactMech}infoString=${args.infoString}contactMechPurposeTypeId=${args.contactMechPurposeTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {createWorkEffortContactMech};


const createWorkEffortContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortContent method',
  args:{workEffortId: {type: GraphQLString},workEffortContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortContent?workEffortId=${args.workEffortId}workEffortContentTypeId=${args.workEffortContentTypeId}contentId=${args.contentId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWorkEffortContent};


const createWorkEffortEventReminder = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortEventReminder method',
  args:{workEffortId: {type: GraphQLString},timeZoneId: {type: GraphQLString},currentCount: {type: GraphQLInt},reminderDateTime: {type: GraphQLString},repeatInterval: {type: GraphQLInt},partyId: {type: GraphQLString},reminderOffset: {type: GraphQLInt},contactMechId: {type: GraphQLString},localeId: {type: GraphQLString},repeatCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortEventReminder?workEffortId=${args.workEffortId}timeZoneId=${args.timeZoneId}currentCount=${args.currentCount}reminderDateTime=${args.reminderDateTime}repeatInterval=${args.repeatInterval}partyId=${args.partyId}reminderOffset=${args.reminderOffset}contactMechId=${args.contactMechId}localeId=${args.localeId}repeatCount=${args.repeatCount}`, null, req);
  }
};
export {createWorkEffortEventReminder};


const createWorkEffortFixedAssetAssign = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortFixedAssetAssign method',
  args:{workEffortId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},fromDate: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},allocatedCost: {type: GraphQLFloat},availabilityStatusId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortFixedAssetAssign?workEffortId=${args.workEffortId}fixedAssetId=${args.fixedAssetId}fromDate=${args.fromDate}comments=${args.comments}statusId=${args.statusId}allocatedCost=${args.allocatedCost}availabilityStatusId=${args.availabilityStatusId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWorkEffortFixedAssetAssign};


const createWorkEffortFixedAssetStd = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortFixedAssetStd method',
  args:{workEffortId: {type: GraphQLString},fixedAssetTypeId: {type: GraphQLString},estimatedQuantity: {type: GraphQLFloat},estimatedCost: {type: GraphQLFloat},estimatedDuration: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortFixedAssetStd?workEffortId=${args.workEffortId}fixedAssetTypeId=${args.fixedAssetTypeId}estimatedQuantity=${args.estimatedQuantity}estimatedCost=${args.estimatedCost}estimatedDuration=${args.estimatedDuration}`, null, req);
  }
};
export {createWorkEffortFixedAssetStd};


const createWorkEffortGoodStandard = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortGoodStandard method',
  args:{workEffortId: {type: GraphQLString},workEffortGoodStdTypeId: {type: GraphQLString},productId: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},estimatedQuantity: {type: GraphQLFloat},estimatedCost: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortGoodStandard?workEffortId=${args.workEffortId}workEffortGoodStdTypeId=${args.workEffortGoodStdTypeId}productId=${args.productId}fromDate=${args.fromDate}statusId=${args.statusId}estimatedQuantity=${args.estimatedQuantity}estimatedCost=${args.estimatedCost}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWorkEffortGoodStandard};


const createWorkEffortICalData = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortICalData method',
  args:{workEffortId: {type: GraphQLString},icalData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortICalData?workEffortId=${args.workEffortId}icalData=${args.icalData}`, null, req);
  }
};
export {createWorkEffortICalData};


const createWorkEffortInventoryProduced = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortInventoryProduced method',
  args:{workEffortId: {type: GraphQLString},inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortInventoryProduced?workEffortId=${args.workEffortId}inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {createWorkEffortInventoryProduced};


const createWorkEffortKeyword = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortKeyword method',
  args:{workEffortId: {type: GraphQLString},keyword: {type: GraphQLString},relevancyWeight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortKeyword?workEffortId=${args.workEffortId}keyword=${args.keyword}relevancyWeight=${args.relevancyWeight}`, null, req);
  }
};
export {createWorkEffortKeyword};


const createWorkEffortKeywords = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortKeywords method',
  args:{workEffortId: {type: GraphQLString},keyword: {type: GraphQLString},relevancyWeight: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortKeywords?workEffortId=${args.workEffortId}keyword=${args.keyword}relevancyWeight=${args.relevancyWeight}`, null, req);
  }
};
export {createWorkEffortKeywords};


const createWorkEffortNote = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortNote method',
  args:{workEffortId: {type: GraphQLString},noteInfo: {type: GraphQLString},noteName: {type: GraphQLString},internalNote: {type: GraphQLString},noteParty: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortNote?workEffortId=${args.workEffortId}noteInfo=${args.noteInfo}noteName=${args.noteName}internalNote=${args.internalNote}noteParty=${args.noteParty}`, null, req);
  }
};
export {createWorkEffortNote};


const createWorkEffortQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortQuote method',
  args:{workEffortId: {type: GraphQLString},quoteId: {type: GraphQLString},quoteTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},statusId: {type: GraphQLString},validFromDate: {type: GraphQLString},description: {type: GraphQLString},productStoreId: {type: GraphQLString},partyId: {type: GraphQLString},issueDate: {type: GraphQLString},validThruDate: {type: GraphQLString},quoteName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortQuote?workEffortId=${args.workEffortId}quoteId=${args.quoteId}quoteTypeId=${args.quoteTypeId}currencyUomId=${args.currencyUomId}salesChannelEnumId=${args.salesChannelEnumId}statusId=${args.statusId}validFromDate=${args.validFromDate}description=${args.description}productStoreId=${args.productStoreId}partyId=${args.partyId}issueDate=${args.issueDate}validThruDate=${args.validThruDate}quoteName=${args.quoteName}`, null, req);
  }
};
export {createWorkEffortQuote};


const createWorkEffortRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortRequest method',
  args:{workEffortId: {type: GraphQLString},custRequestId: {type: GraphQLString},reason: {type: GraphQLString},fromPartyId: {type: GraphQLString},custRequestName: {type: GraphQLString},responseRequiredDate: {type: GraphQLString},salesChannelEnumId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},fulfillContactMechId: {type: GraphQLString},description: {type: GraphQLString},custRequestDate: {type: GraphQLString},priority: {type: GraphQLInt},maximumAmountUomId: {type: GraphQLString},openDateTime: {type: GraphQLString},internalComment: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},currencyUomId: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},custRequestTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString},custRequestCategoryId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},closedDateTime: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortRequest?workEffortId=${args.workEffortId}custRequestId=${args.custRequestId}reason=${args.reason}fromPartyId=${args.fromPartyId}custRequestName=${args.custRequestName}responseRequiredDate=${args.responseRequiredDate}salesChannelEnumId=${args.salesChannelEnumId}lastModifiedDate=${args.lastModifiedDate}fulfillContactMechId=${args.fulfillContactMechId}description=${args.description}custRequestDate=${args.custRequestDate}priority=${args.priority}maximumAmountUomId=${args.maximumAmountUomId}openDateTime=${args.openDateTime}internalComment=${args.internalComment}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}currencyUomId=${args.currencyUomId}createdDate=${args.createdDate}statusId=${args.statusId}custRequestTypeId=${args.custRequestTypeId}productStoreId=${args.productStoreId}custRequestCategoryId=${args.custRequestCategoryId}createdByUserLogin=${args.createdByUserLogin}closedDateTime=${args.closedDateTime}`, null, req);
  }
};
export {createWorkEffortRequest};


const createWorkEffortRequestItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortRequestItem method',
  args:{workEffortId: {type: GraphQLString},custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},custRequestItemExists: {type: GraphQLString},custRequestResolutionId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},maximumAmount: {type: GraphQLFloat},requiredByDate: {type: GraphQLString},description: {type: GraphQLString},priority: {type: GraphQLInt},statusId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},selectedAmount: {type: GraphQLFloat},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortRequestItem?workEffortId=${args.workEffortId}custRequestId=${args.custRequestId}custRequestItemSeqId=${args.custRequestItemSeqId}custRequestItemExists=${args.custRequestItemExists}custRequestResolutionId=${args.custRequestResolutionId}quantity=${args.quantity}reservLength=${args.reservLength}sequenceNum=${args.sequenceNum}productId=${args.productId}reservPersons=${args.reservPersons}maximumAmount=${args.maximumAmount}requiredByDate=${args.requiredByDate}description=${args.description}priority=${args.priority}statusId=${args.statusId}reservStart=${args.reservStart}configId=${args.configId}selectedAmount=${args.selectedAmount}story=${args.story}`, null, req);
  }
};
export {createWorkEffortRequestItem};


const createWorkEffortRequestItemAndRequestItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortRequestItemAndRequestItem method',
  args:{workEffortId: {type: GraphQLString},custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString},custRequestResolutionId: {type: GraphQLString},quantity: {type: GraphQLFloat},reservLength: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},productId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},maximumAmount: {type: GraphQLFloat},requiredByDate: {type: GraphQLString},description: {type: GraphQLString},priority: {type: GraphQLInt},statusId: {type: GraphQLString},reservStart: {type: GraphQLString},configId: {type: GraphQLString},selectedAmount: {type: GraphQLFloat},story: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortRequestItemAndRequestItem?workEffortId=${args.workEffortId}custRequestId=${args.custRequestId}custRequestItemSeqId=${args.custRequestItemSeqId}custRequestResolutionId=${args.custRequestResolutionId}quantity=${args.quantity}reservLength=${args.reservLength}sequenceNum=${args.sequenceNum}productId=${args.productId}reservPersons=${args.reservPersons}maximumAmount=${args.maximumAmount}requiredByDate=${args.requiredByDate}description=${args.description}priority=${args.priority}statusId=${args.statusId}reservStart=${args.reservStart}configId=${args.configId}selectedAmount=${args.selectedAmount}story=${args.story}`, null, req);
  }
};
export {createWorkEffortRequestItemAndRequestItem};


const createWorkEffortReview = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortReview method',
  args:{workEffortId: {type: GraphQLString},userLoginId: {type: GraphQLString},statusId: {type: GraphQLString},reviewDate: {type: GraphQLString},rating: {type: GraphQLFloat},postedAnonymous: {type: GraphQLString},reviewText: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortReview?workEffortId=${args.workEffortId}userLoginId=${args.userLoginId}statusId=${args.statusId}reviewDate=${args.reviewDate}rating=${args.rating}postedAnonymous=${args.postedAnonymous}reviewText=${args.reviewText}`, null, req);
  }
};
export {createWorkEffortReview};


const createWorkEffortSkillStandard = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortSkillStandard method',
  args:{workEffortId: {type: GraphQLString},skillTypeId: {type: GraphQLString},estimatedNumPeople: {type: GraphQLFloat},estimatedCost: {type: GraphQLFloat},estimatedDuration: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortSkillStandard?workEffortId=${args.workEffortId}skillTypeId=${args.skillTypeId}estimatedNumPeople=${args.estimatedNumPeople}estimatedCost=${args.estimatedCost}estimatedDuration=${args.estimatedDuration}`, null, req);
  }
};
export {createWorkEffortSkillStandard};


const createWorkEffortSurveyAppl = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortSurveyAppl method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},surveyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortSurveyAppl?workEffortId=${args.workEffortId}fromDate=${args.fromDate}surveyId=${args.surveyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWorkEffortSurveyAppl};


const createWorkEffortTextContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortTextContent method',
  args:{workEffortId: {type: GraphQLString},workEffortContentTypeId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkEffortTextContent?workEffortId=${args.workEffortId}workEffortContentTypeId=${args.workEffortContentTypeId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}thruDate=${args.thruDate}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}textData=${args.textData}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {createWorkEffortTextContent};


const createWorkRequirementFulfillment = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkRequirementFulfillment method',
  args:{workEffortId: {type: GraphQLString},requirementTypeId: {type: GraphQLString},workReqFulfTypeId: {type: GraphQLString},reason: {type: GraphQLString},facilityId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},estimatedBudget: {type: GraphQLFloat},description: {type: GraphQLString},requiredByDate: {type: GraphQLString},requirementStartDate: {type: GraphQLString},useCase: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},requirementId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/createWorkRequirementFulfillment?workEffortId=${args.workEffortId}requirementTypeId=${args.requirementTypeId}workReqFulfTypeId=${args.workReqFulfTypeId}reason=${args.reason}facilityId=${args.facilityId}quantity=${args.quantity}productId=${args.productId}lastModifiedDate=${args.lastModifiedDate}estimatedBudget=${args.estimatedBudget}description=${args.description}requiredByDate=${args.requiredByDate}requirementStartDate=${args.requirementStartDate}useCase=${args.useCase}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}statusId=${args.statusId}fixedAssetId=${args.fixedAssetId}requirementId=${args.requirementId}createdByUserLogin=${args.createdByUserLogin}deliverableId=${args.deliverableId}`, null, req);
  }
};
export {createWorkRequirementFulfillment};


const deleteCommunicationEventWorkEff = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCommunicationEventWorkEff method',
  args:{workEffortId: {type: GraphQLString},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteCommunicationEventWorkEff?workEffortId=${args.workEffortId}communicationEventId=${args.communicationEventId}`, null, req);
  }
};
export {deleteCommunicationEventWorkEff};


const deleteOrderHeaderWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderHeaderWorkEffort method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteOrderHeaderWorkEffort?orderId=${args.orderId}`, null, req);
  }
};
export {deleteOrderHeaderWorkEffort};


const deletePartyToWorkEffortAssignment = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyToWorkEffortAssignment method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deletePartyToWorkEffortAssignment?workEffortId=${args.workEffortId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyToWorkEffortAssignment};


const deleteShoppingListWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteShoppingListWorkEffort method',
  args:{workEffortId: {type: GraphQLString},shoppingListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteShoppingListWorkEffort?workEffortId=${args.workEffortId}shoppingListId=${args.shoppingListId}`, null, req);
  }
};
export {deleteShoppingListWorkEffort};


const deleteWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffort method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffort?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {deleteWorkEffort};


const deleteWorkEffortAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortAttribute method',
  args:{workEffortId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortAttribute?workEffortId=${args.workEffortId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteWorkEffortAttribute};


const deleteWorkEffortContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortContactMech method',
  args:{fromDate: {type: GraphQLString},partyId: {type: GraphQLString},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortContactMech?fromDate=${args.fromDate}partyId=${args.partyId}contactMechId=${args.contactMechId}`, null, req);
  }
};
export {deleteWorkEffortContactMech};


const deleteWorkEffortContent = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortContent method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},workEffortContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortContent?workEffortId=${args.workEffortId}fromDate=${args.fromDate}workEffortContentTypeId=${args.workEffortContentTypeId}contentId=${args.contentId}thruDate=${args.thruDate}`, null, req);
  }
};
export {deleteWorkEffortContent};


const deleteWorkEffortEventReminder = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortEventReminder method',
  args:{workEffortId: {type: GraphQLString},sequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortEventReminder?workEffortId=${args.workEffortId}sequenceId=${args.sequenceId}`, null, req);
  }
};
export {deleteWorkEffortEventReminder};


const deleteWorkEffortICalData = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortICalData method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortICalData?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {deleteWorkEffortICalData};


const deleteWorkEffortInventoryProduced = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortInventoryProduced method',
  args:{workEffortId: {type: GraphQLString},inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortInventoryProduced?workEffortId=${args.workEffortId}inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {deleteWorkEffortInventoryProduced};


const deleteWorkEffortKeyword = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortKeyword method',
  args:{workEffortId: {type: GraphQLString},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortKeyword?workEffortId=${args.workEffortId}keyword=${args.keyword}`, null, req);
  }
};
export {deleteWorkEffortKeyword};


const deleteWorkEffortKeywords = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortKeywords method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortKeywords?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {deleteWorkEffortKeywords};


const deleteWorkEffortQuote = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortQuote method',
  args:{quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortQuote?quoteId=${args.quoteId}`, null, req);
  }
};
export {deleteWorkEffortQuote};


const deleteWorkEffortRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortRequest method',
  args:{workEffortId: {type: GraphQLString},custRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortRequest?workEffortId=${args.workEffortId}custRequestId=${args.custRequestId}`, null, req);
  }
};
export {deleteWorkEffortRequest};


const deleteWorkEffortRequestItem = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortRequestItem method',
  args:{workEffortId: {type: GraphQLString},custRequestId: {type: GraphQLString},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortRequestItem?workEffortId=${args.workEffortId}custRequestId=${args.custRequestId}custRequestItemSeqId=${args.custRequestItemSeqId}`, null, req);
  }
};
export {deleteWorkEffortRequestItem};


const deleteWorkEffortReview = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortReview method',
  args:{workEffortId: {type: GraphQLString},userLoginId: {type: GraphQLString},reviewDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortReview?workEffortId=${args.workEffortId}userLoginId=${args.userLoginId}reviewDate=${args.reviewDate}`, null, req);
  }
};
export {deleteWorkEffortReview};


const deleteWorkEffortSkillStandard = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortSkillStandard method',
  args:{workEffortId: {type: GraphQLString},skillTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkEffortSkillStandard?workEffortId=${args.workEffortId}skillTypeId=${args.skillTypeId}`, null, req);
  }
};
export {deleteWorkEffortSkillStandard};


const deleteWorkRequirementFulfillment = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkRequirementFulfillment method',
  args:{workEffortId: {type: GraphQLString},requirementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/deleteWorkRequirementFulfillment?workEffortId=${args.workEffortId}requirementId=${args.requirementId}`, null, req);
  }
};
export {deleteWorkRequirementFulfillment};


const duplicateWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz duplicateWorkEffort method',
  args:{oldWorkEffortId: {type: GraphQLString},workEffortId: {type: GraphQLString},duplicateWorkEffortAssignmentRates: {type: GraphQLString},removeWorkEffortContents: {type: GraphQLString},duplicateWorkEffortNotes: {type: GraphQLString},removeWorkEffortAssocs: {type: GraphQLString},statusId: {type: GraphQLString},removeWorkEffortNotes: {type: GraphQLString},removeWorkEffortAssignmentRates: {type: GraphQLString},duplicateWorkEffortAssocs: {type: GraphQLString},duplicateWorkEffortContents: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/duplicateWorkEffort?oldWorkEffortId=${args.oldWorkEffortId}workEffortId=${args.workEffortId}duplicateWorkEffortAssignmentRates=${args.duplicateWorkEffortAssignmentRates}removeWorkEffortContents=${args.removeWorkEffortContents}duplicateWorkEffortNotes=${args.duplicateWorkEffortNotes}removeWorkEffortAssocs=${args.removeWorkEffortAssocs}statusId=${args.statusId}removeWorkEffortNotes=${args.removeWorkEffortNotes}removeWorkEffortAssignmentRates=${args.removeWorkEffortAssignmentRates}duplicateWorkEffortAssocs=${args.duplicateWorkEffortAssocs}duplicateWorkEffortContents=${args.duplicateWorkEffortContents}`, null, req);
  }
};
export {duplicateWorkEffort};


const getICalWorkEfforts = {
  type: ResponseType,
  description: 'mutation for ofbiz getICalWorkEfforts method',
  args:{workEffortId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getICalWorkEfforts?workEffortId=${args.workEffortId}workEffortTypeId=${args.workEffortTypeId}`, null, req);
  }
};
export {getICalWorkEfforts};


const getPartyICalUrl = {
  type: ResponseType,
  description: 'mutation for ofbiz getPartyICalUrl method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getPartyICalUrl?partyId=${args.partyId}`, null, req);
  }
};
export {getPartyICalUrl};


const getProductManufacturingSummaryByFacility = {
  type: ResponseType,
  description: 'mutation for ofbiz getProductManufacturingSummaryByFacility method',
  args:{productId: {type: GraphQLString},facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getProductManufacturingSummaryByFacility?productId=${args.productId}facilityId=${args.facilityId}`, null, req);
  }
};
export {getProductManufacturingSummaryByFacility};


const getWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffort method',
  args:{workEffortId: {type: GraphQLString},currentStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffort?workEffortId=${args.workEffortId}currentStatusId=${args.currentStatusId}`, null, req);
  }
};
export {getWorkEffort};


const getWorkEffortAssignedActivities = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortAssignedActivities method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortAssignedActivities?`, null, req);
  }
};
export {getWorkEffortAssignedActivities};


const getWorkEffortAssignedActivitiesByGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortAssignedActivitiesByGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortAssignedActivitiesByGroup?`, null, req);
  }
};
export {getWorkEffortAssignedActivitiesByGroup};


const getWorkEffortAssignedActivitiesByRole = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortAssignedActivitiesByRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortAssignedActivitiesByRole?`, null, req);
  }
};
export {getWorkEffortAssignedActivitiesByRole};


const getWorkEffortAssignedEventsForRole = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortAssignedEventsForRole method',
  args:{roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortAssignedEventsForRole?roleTypeId=${args.roleTypeId}`, null, req);
  }
};
export {getWorkEffortAssignedEventsForRole};


const getWorkEffortAssignedEventsForRoleOfAllParties = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortAssignedEventsForRoleOfAllParties method',
  args:{roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortAssignedEventsForRoleOfAllParties?roleTypeId=${args.roleTypeId}`, null, req);
  }
};
export {getWorkEffortAssignedEventsForRoleOfAllParties};


const getWorkEffortAssignedTasks = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortAssignedTasks method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortAssignedTasks?`, null, req);
  }
};
export {getWorkEffortAssignedTasks};


const getWorkEffortEventsByPeriod = {
  type: ResponseType,
  description: 'mutation for ofbiz getWorkEffortEventsByPeriod method',
  args:{periodType: {type: GraphQLInt},numPeriods: {type: GraphQLInt},start: {type: GraphQLString},partyIds: {type: GraphQLString},calendarType: {type: GraphQLString},facilityId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},filterOutCanceledEvents: {type: GraphQLBoolean},fixedAssetId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/getWorkEffortEventsByPeriod?periodType=${args.periodType}numPeriods=${args.numPeriods}start=${args.start}partyIds=${args.partyIds}calendarType=${args.calendarType}facilityId=${args.facilityId}workEffortTypeId=${args.workEffortTypeId}filterOutCanceledEvents=${args.filterOutCanceledEvents}fixedAssetId=${args.fixedAssetId}entityExprList=${args.entityExprList}partyId=${args.partyId}`, null, req);
  }
};
export {getWorkEffortEventsByPeriod};


const indexWorkEffortKeywords = {
  type: ResponseType,
  description: 'mutation for ofbiz indexWorkEffortKeywords method',
  args:{workEffortId: {type: GraphQLString},workEffortInstance: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/indexWorkEffortKeywords?workEffortId=${args.workEffortId}workEffortInstance=${args.workEffortInstance}`, null, req);
  }
};
export {indexWorkEffortKeywords};


const interfaceWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz interfaceWorkEffort method',
  args:{totalMoneyAllowed: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},tempExprId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},workEffortName: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},accommodationMapId: {type: GraphQLString},locationDesc: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},percentComplete: {type: GraphQLInt},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},currentStatusId: {type: GraphQLString},totalMilliSecondsAllowed: {type: GraphQLFloat},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/interfaceWorkEffort?totalMoneyAllowed=${args.totalMoneyAllowed}recurrenceInfoId=${args.recurrenceInfoId}workEffortTypeId=${args.workEffortTypeId}reservPersons=${args.reservPersons}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}tempExprId=${args.tempExprId}reservNthPPPerc=${args.reservNthPPPerc}workEffortName=${args.workEffortName}showAsEnumId=${args.showAsEnumId}infoUrl=${args.infoUrl}universalId=${args.universalId}accommodationMapId=${args.accommodationMapId}locationDesc=${args.locationDesc}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}quantityProduced=${args.quantityProduced}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sourceReferenceId=${args.sourceReferenceId}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}percentComplete=${args.percentComplete}quantityRejected=${args.quantityRejected}priority=${args.priority}currentStatusId=${args.currentStatusId}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}specialTerms=${args.specialTerms}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}reserv2ndPPPerc=${args.reserv2ndPPPerc}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {interfaceWorkEffort};


const makeCommunicationEventWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz makeCommunicationEventWorkEffort method',
  args:{workEffortId: {type: GraphQLString},communicationEventId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},revisionNumber: {type: GraphQLInt},tempExprId: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},locationDesc: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},currentStatusId: {type: GraphQLString},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},totalMoneyAllowed: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},workEffortName: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},accommodationMapId: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},relationDescription: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},lastStatusUpdate: {type: GraphQLString},percentComplete: {type: GraphQLInt},totalMilliSecondsAllowed: {type: GraphQLFloat},createdDate: {type: GraphQLString},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/makeCommunicationEventWorkEffort?workEffortId=${args.workEffortId}communicationEventId=${args.communicationEventId}recurrenceInfoId=${args.recurrenceInfoId}workEffortTypeId=${args.workEffortTypeId}reservPersons=${args.reservPersons}revisionNumber=${args.revisionNumber}tempExprId=${args.tempExprId}showAsEnumId=${args.showAsEnumId}infoUrl=${args.infoUrl}universalId=${args.universalId}locationDesc=${args.locationDesc}createdByUserLogin=${args.createdByUserLogin}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}quantityRejected=${args.quantityRejected}priority=${args.priority}currentStatusId=${args.currentStatusId}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}specialTerms=${args.specialTerms}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}reserv2ndPPPerc=${args.reserv2ndPPPerc}totalMoneyAllowed=${args.totalMoneyAllowed}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}reservNthPPPerc=${args.reservNthPPPerc}workEffortName=${args.workEffortName}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}accommodationMapId=${args.accommodationMapId}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}quantityProduced=${args.quantityProduced}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}relationDescription=${args.relationDescription}lastModifiedDate=${args.lastModifiedDate}sourceReferenceId=${args.sourceReferenceId}lastStatusUpdate=${args.lastStatusUpdate}percentComplete=${args.percentComplete}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}createdDate=${args.createdDate}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {makeCommunicationEventWorkEffort};


const processWorkEffortEventReminder = {
  type: ResponseType,
  description: 'mutation for ofbiz processWorkEffortEventReminder method',
  args:{bodyParameters: {type: GraphQLString},reminder: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/processWorkEffortEventReminder?bodyParameters=${args.bodyParameters}reminder=${args.reminder}`, null, req);
  }
};
export {processWorkEffortEventReminder};


const processWorkEffortEventReminders = {
  type: ResponseType,
  description: 'mutation for ofbiz processWorkEffortEventReminders method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/processWorkEffortEventReminders?`, null, req);
  }
};
export {processWorkEffortEventReminders};


const quickAssignPartyToWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz quickAssignPartyToWorkEffort method',
  args:{workEffortId: {type: GraphQLString},quickAssignPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/quickAssignPartyToWorkEffort?workEffortId=${args.workEffortId}quickAssignPartyId=${args.quickAssignPartyId}`, null, req);
  }
};
export {quickAssignPartyToWorkEffort};


const quickAssignPartyToWorkEffortWithRole = {
  type: ResponseType,
  description: 'mutation for ofbiz quickAssignPartyToWorkEffortWithRole method',
  args:{workEffortId: {type: GraphQLString},quickAssignPartyId: {type: GraphQLString},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/quickAssignPartyToWorkEffortWithRole?workEffortId=${args.workEffortId}quickAssignPartyId=${args.quickAssignPartyId}roleTypeId=${args.roleTypeId}`, null, req);
  }
};
export {quickAssignPartyToWorkEffortWithRole};


const removeDuplicateWorkEfforts = {
  type: ResponseType,
  description: 'mutation for ofbiz removeDuplicateWorkEfforts method',
  args:{workEffortIterator: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/removeDuplicateWorkEfforts?workEffortIterator=${args.workEffortIterator}workEfforts=${args.workEfforts}`, null, req);
  }
};
export {removeDuplicateWorkEfforts};


const removeWorkEffortAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz removeWorkEffortAssoc method',
  args:{workEffortIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/removeWorkEffortAssoc?workEffortIdTo=${args.workEffortIdTo}fromDate=${args.fromDate}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}`, null, req);
  }
};
export {removeWorkEffortAssoc};


const removeWorkEffortFixedAssetAssign = {
  type: ResponseType,
  description: 'mutation for ofbiz removeWorkEffortFixedAssetAssign method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/removeWorkEffortFixedAssetAssign?workEffortId=${args.workEffortId}fromDate=${args.fromDate}fixedAssetId=${args.fixedAssetId}`, null, req);
  }
};
export {removeWorkEffortFixedAssetAssign};


const removeWorkEffortFixedAssetStd = {
  type: ResponseType,
  description: 'mutation for ofbiz removeWorkEffortFixedAssetStd method',
  args:{workEffortId: {type: GraphQLString},fixedAssetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/removeWorkEffortFixedAssetStd?workEffortId=${args.workEffortId}fixedAssetTypeId=${args.fixedAssetTypeId}`, null, req);
  }
};
export {removeWorkEffortFixedAssetStd};


const removeWorkEffortGoodStandard = {
  type: ResponseType,
  description: 'mutation for ofbiz removeWorkEffortGoodStandard method',
  args:{workEffortId: {type: GraphQLString},workEffortGoodStdTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/removeWorkEffortGoodStandard?workEffortId=${args.workEffortId}workEffortGoodStdTypeId=${args.workEffortGoodStdTypeId}fromDate=${args.fromDate}productId=${args.productId}`, null, req);
  }
};
export {removeWorkEffortGoodStandard};


const setWorkEffortFixedAssetAssign = {
  type: ResponseType,
  description: 'mutation for ofbiz setWorkEffortFixedAssetAssign method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/setWorkEffortFixedAssetAssign?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {setWorkEffortFixedAssetAssign};


const timesheetUpdatePermission = {
  type: ResponseType,
  description: 'mutation for ofbiz timesheetUpdatePermission method',
  args:{workEffortId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/timesheetUpdatePermission?workEffortId=${args.workEffortId}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {timesheetUpdatePermission};


const unassignPartyFromWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz unassignPartyFromWorkEffort method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/unassignPartyFromWorkEffort?workEffortId=${args.workEffortId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {unassignPartyFromWorkEffort};


const updateCommunicationEventWorkEff = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCommunicationEventWorkEff method',
  args:{workEffortId: {type: GraphQLString},communicationEventId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateCommunicationEventWorkEff?workEffortId=${args.workEffortId}communicationEventId=${args.communicationEventId}description=${args.description}`, null, req);
  }
};
export {updateCommunicationEventWorkEff};


const updatePartyToWorkEffortAssignment = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyToWorkEffortAssignment method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},facilityId: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},mustRsvp: {type: GraphQLString},assignedByUserLoginId: {type: GraphQLString},expectationEnumId: {type: GraphQLString},availabilityStatusId: {type: GraphQLString},delegateReasonEnumId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updatePartyToWorkEffortAssignment?workEffortId=${args.workEffortId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}facilityId=${args.facilityId}comments=${args.comments}statusId=${args.statusId}mustRsvp=${args.mustRsvp}assignedByUserLoginId=${args.assignedByUserLoginId}expectationEnumId=${args.expectationEnumId}availabilityStatusId=${args.availabilityStatusId}delegateReasonEnumId=${args.delegateReasonEnumId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyToWorkEffortAssignment};


const updateWorkEffort = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffort method',
  args:{workEffortId: {type: GraphQLString},reason: {type: GraphQLString},totalMoneyAllowed: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},tempExprId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},workEffortName: {type: GraphQLString},showAsEnumId: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},accommodationMapId: {type: GraphQLString},locationDesc: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},webSiteId: {type: GraphQLString},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},percentComplete: {type: GraphQLInt},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},currentStatusId: {type: GraphQLString},totalMilliSecondsAllowed: {type: GraphQLFloat},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},specialTerms: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},communicationEventId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffort?workEffortId=${args.workEffortId}reason=${args.reason}totalMoneyAllowed=${args.totalMoneyAllowed}recurrenceInfoId=${args.recurrenceInfoId}workEffortTypeId=${args.workEffortTypeId}reservPersons=${args.reservPersons}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}tempExprId=${args.tempExprId}reservNthPPPerc=${args.reservNthPPPerc}workEffortName=${args.workEffortName}showAsEnumId=${args.showAsEnumId}infoUrl=${args.infoUrl}universalId=${args.universalId}accommodationMapId=${args.accommodationMapId}locationDesc=${args.locationDesc}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}quantityProduced=${args.quantityProduced}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}webSiteId=${args.webSiteId}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sourceReferenceId=${args.sourceReferenceId}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}percentComplete=${args.percentComplete}quantityRejected=${args.quantityRejected}priority=${args.priority}currentStatusId=${args.currentStatusId}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}specialTerms=${args.specialTerms}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}communicationEventId=${args.communicationEventId}reserv2ndPPPerc=${args.reserv2ndPPPerc}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {updateWorkEffort};


const updateWorkEffortAndAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortAndAssoc method',
  args:{workEffortId: {type: GraphQLString},recurrenceInfoId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},reservPersons: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},revisionNumber: {type: GraphQLInt},tempExprId: {type: GraphQLString},showAsEnumId: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},infoUrl: {type: GraphQLString},universalId: {type: GraphQLString},locationDesc: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},actualMilliSeconds: {type: GraphQLFloat},quantityToProduce: {type: GraphQLFloat},workEffortPurposeTypeId: {type: GraphQLString},serviceLoaderName: {type: GraphQLString},accommodationSpotId: {type: GraphQLString},estimatedStartDate: {type: GraphQLString},sendNotificationEmail: {type: GraphQLString},noteId: {type: GraphQLString},quantityRejected: {type: GraphQLFloat},priority: {type: GraphQLInt},currentStatusId: {type: GraphQLString},runtimeDataId: {type: GraphQLString},estimatedMilliSeconds: {type: GraphQLFloat},thruDate: {type: GraphQLString},specialTerms: {type: GraphQLString},workEffortIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},timeTransparency: {type: GraphQLInt},actualCompletionDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},reserv2ndPPPerc: {type: GraphQLFloat},totalMoneyAllowed: {type: GraphQLFloat},estimateCalcMethod: {type: GraphQLString},workEffortParentId: {type: GraphQLString},description: {type: GraphQLString},moneyUomId: {type: GraphQLString},reservNthPPPerc: {type: GraphQLFloat},workEffortName: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},accommodationMapId: {type: GraphQLString},actualStartDate: {type: GraphQLString},scopeEnumId: {type: GraphQLString},quantityProduced: {type: GraphQLFloat},facilityId: {type: GraphQLString},estimatedSetupMillis: {type: GraphQLFloat},lastModifiedDate: {type: GraphQLString},sourceReferenceId: {type: GraphQLString},lastStatusUpdate: {type: GraphQLString},percentComplete: {type: GraphQLInt},workEffortAssocTypeId: {type: GraphQLString},totalMilliSecondsAllowed: {type: GraphQLFloat},createdDate: {type: GraphQLString},actualSetupMillis: {type: GraphQLFloat},estimatedCompletionDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortAndAssoc?workEffortId=${args.workEffortId}recurrenceInfoId=${args.recurrenceInfoId}workEffortTypeId=${args.workEffortTypeId}reservPersons=${args.reservPersons}sequenceNum=${args.sequenceNum}revisionNumber=${args.revisionNumber}tempExprId=${args.tempExprId}showAsEnumId=${args.showAsEnumId}workEffortIdFrom=${args.workEffortIdFrom}infoUrl=${args.infoUrl}universalId=${args.universalId}locationDesc=${args.locationDesc}createdByUserLogin=${args.createdByUserLogin}actualMilliSeconds=${args.actualMilliSeconds}quantityToProduce=${args.quantityToProduce}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}serviceLoaderName=${args.serviceLoaderName}accommodationSpotId=${args.accommodationSpotId}estimatedStartDate=${args.estimatedStartDate}sendNotificationEmail=${args.sendNotificationEmail}noteId=${args.noteId}quantityRejected=${args.quantityRejected}priority=${args.priority}currentStatusId=${args.currentStatusId}runtimeDataId=${args.runtimeDataId}estimatedMilliSeconds=${args.estimatedMilliSeconds}thruDate=${args.thruDate}specialTerms=${args.specialTerms}workEffortIdTo=${args.workEffortIdTo}fromDate=${args.fromDate}timeTransparency=${args.timeTransparency}actualCompletionDate=${args.actualCompletionDate}fixedAssetId=${args.fixedAssetId}reserv2ndPPPerc=${args.reserv2ndPPPerc}totalMoneyAllowed=${args.totalMoneyAllowed}estimateCalcMethod=${args.estimateCalcMethod}workEffortParentId=${args.workEffortParentId}description=${args.description}moneyUomId=${args.moneyUomId}reservNthPPPerc=${args.reservNthPPPerc}workEffortName=${args.workEffortName}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}accommodationMapId=${args.accommodationMapId}actualStartDate=${args.actualStartDate}scopeEnumId=${args.scopeEnumId}quantityProduced=${args.quantityProduced}facilityId=${args.facilityId}estimatedSetupMillis=${args.estimatedSetupMillis}lastModifiedDate=${args.lastModifiedDate}sourceReferenceId=${args.sourceReferenceId}lastStatusUpdate=${args.lastStatusUpdate}percentComplete=${args.percentComplete}workEffortAssocTypeId=${args.workEffortAssocTypeId}totalMilliSecondsAllowed=${args.totalMilliSecondsAllowed}createdDate=${args.createdDate}actualSetupMillis=${args.actualSetupMillis}estimatedCompletionDate=${args.estimatedCompletionDate}`, null, req);
  }
};
export {updateWorkEffortAndAssoc};


const updateWorkEffortAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortAssoc method',
  args:{workEffortIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortAssoc?workEffortIdTo=${args.workEffortIdTo}fromDate=${args.fromDate}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWorkEffortAssoc};


const updateWorkEffortAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortAttribute method',
  args:{workEffortId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortAttribute?workEffortId=${args.workEffortId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateWorkEffortAttribute};


const updateWorkEffortContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortContent method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},workEffortContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortContent?workEffortId=${args.workEffortId}fromDate=${args.fromDate}workEffortContentTypeId=${args.workEffortContentTypeId}contentId=${args.contentId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWorkEffortContent};


const updateWorkEffortEventReminder = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortEventReminder method',
  args:{workEffortId: {type: GraphQLString},sequenceId: {type: GraphQLString},timeZoneId: {type: GraphQLString},currentCount: {type: GraphQLInt},reminderDateTime: {type: GraphQLString},repeatInterval: {type: GraphQLInt},partyId: {type: GraphQLString},reminderOffset: {type: GraphQLInt},contactMechId: {type: GraphQLString},localeId: {type: GraphQLString},repeatCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortEventReminder?workEffortId=${args.workEffortId}sequenceId=${args.sequenceId}timeZoneId=${args.timeZoneId}currentCount=${args.currentCount}reminderDateTime=${args.reminderDateTime}repeatInterval=${args.repeatInterval}partyId=${args.partyId}reminderOffset=${args.reminderOffset}contactMechId=${args.contactMechId}localeId=${args.localeId}repeatCount=${args.repeatCount}`, null, req);
  }
};
export {updateWorkEffortEventReminder};


const updateWorkEffortFixedAssetAssign = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortFixedAssetAssign method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},allocatedCost: {type: GraphQLFloat},availabilityStatusId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortFixedAssetAssign?workEffortId=${args.workEffortId}fromDate=${args.fromDate}fixedAssetId=${args.fixedAssetId}comments=${args.comments}statusId=${args.statusId}allocatedCost=${args.allocatedCost}availabilityStatusId=${args.availabilityStatusId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWorkEffortFixedAssetAssign};


const updateWorkEffortFixedAssetStd = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortFixedAssetStd method',
  args:{workEffortId: {type: GraphQLString},fixedAssetTypeId: {type: GraphQLString},estimatedQuantity: {type: GraphQLFloat},estimatedCost: {type: GraphQLFloat},estimatedDuration: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortFixedAssetStd?workEffortId=${args.workEffortId}fixedAssetTypeId=${args.fixedAssetTypeId}estimatedQuantity=${args.estimatedQuantity}estimatedCost=${args.estimatedCost}estimatedDuration=${args.estimatedDuration}`, null, req);
  }
};
export {updateWorkEffortFixedAssetStd};


const updateWorkEffortGoodStandard = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortGoodStandard method',
  args:{workEffortId: {type: GraphQLString},workEffortGoodStdTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},productId: {type: GraphQLString},statusId: {type: GraphQLString},estimatedQuantity: {type: GraphQLFloat},estimatedCost: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortGoodStandard?workEffortId=${args.workEffortId}workEffortGoodStdTypeId=${args.workEffortGoodStdTypeId}fromDate=${args.fromDate}productId=${args.productId}statusId=${args.statusId}estimatedQuantity=${args.estimatedQuantity}estimatedCost=${args.estimatedCost}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWorkEffortGoodStandard};


const updateWorkEffortICalData = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortICalData method',
  args:{workEffortId: {type: GraphQLString},icalData: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortICalData?workEffortId=${args.workEffortId}icalData=${args.icalData}`, null, req);
  }
};
export {updateWorkEffortICalData};


const updateWorkEffortNote = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortNote method',
  args:{workEffortId: {type: GraphQLString},internalNote: {type: GraphQLString},noteId: {type: GraphQLString},noteInfo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortNote?workEffortId=${args.workEffortId}internalNote=${args.internalNote}noteId=${args.noteId}noteInfo=${args.noteInfo}`, null, req);
  }
};
export {updateWorkEffortNote};


const updateWorkEffortReview = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortReview method',
  args:{workEffortId: {type: GraphQLString},userLoginId: {type: GraphQLString},reviewDate: {type: GraphQLString},statusId: {type: GraphQLString},rating: {type: GraphQLFloat},postedAnonymous: {type: GraphQLString},reviewText: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortReview?workEffortId=${args.workEffortId}userLoginId=${args.userLoginId}reviewDate=${args.reviewDate}statusId=${args.statusId}rating=${args.rating}postedAnonymous=${args.postedAnonymous}reviewText=${args.reviewText}`, null, req);
  }
};
export {updateWorkEffortReview};


const updateWorkEffortSkillStandard = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortSkillStandard method',
  args:{workEffortId: {type: GraphQLString},skillTypeId: {type: GraphQLString},estimatedNumPeople: {type: GraphQLFloat},estimatedCost: {type: GraphQLFloat},estimatedDuration: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortSkillStandard?workEffortId=${args.workEffortId}skillTypeId=${args.skillTypeId}estimatedNumPeople=${args.estimatedNumPeople}estimatedCost=${args.estimatedCost}estimatedDuration=${args.estimatedDuration}`, null, req);
  }
};
export {updateWorkEffortSkillStandard};


const updateWorkEffortSurveyAppl = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortSurveyAppl method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},surveyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortSurveyAppl?workEffortId=${args.workEffortId}fromDate=${args.fromDate}surveyId=${args.surveyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWorkEffortSurveyAppl};


const updateWorkEffortTextContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortTextContent method',
  args:{fromDate: {type: GraphQLString},workEffortId: {type: GraphQLString},workEffortContentTypeId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},contentIdTo: {type: GraphQLString},dataResourceId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},upperCoordinate: {type: GraphQLInt},leftCoordinate: {type: GraphQLInt},contentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},description: {type: GraphQLString},dataCategoryId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},surveyResponseId: {type: GraphQLString},contentPurposeTypeId: {type: GraphQLString},textData: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},contentAssocPredicateId: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},objectInfo: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},deactivateExisting: {type: GraphQLString},dataResourceName: {type: GraphQLInt},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},localeString: {type: GraphQLString},contentIdFrom: {type: GraphQLString},decoratorContentId: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/updateWorkEffortTextContent?fromDate=${args.fromDate}workEffortId=${args.workEffortId}workEffortContentTypeId=${args.workEffortContentTypeId}contentAssocTypeId=${args.contentAssocTypeId}contentIdTo=${args.contentIdTo}dataResourceId=${args.dataResourceId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}upperCoordinate=${args.upperCoordinate}leftCoordinate=${args.leftCoordinate}contentId=${args.contentId}contentTypeId=${args.contentTypeId}mimeTypeId=${args.mimeTypeId}roleTypeList=${args.roleTypeList}description=${args.description}dataCategoryId=${args.dataCategoryId}childLeafCount=${args.childLeafCount}surveyResponseId=${args.surveyResponseId}contentPurposeTypeId=${args.contentPurposeTypeId}textData=${args.textData}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}contentAssocPredicateId=${args.contentAssocPredicateId}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}objectInfo=${args.objectInfo}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}deactivateExisting=${args.deactivateExisting}dataResourceName=${args.dataResourceName}contentPurposeList=${args.contentPurposeList}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}thruDate=${args.thruDate}contentName=${args.contentName}createdDate=${args.createdDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}localeString=${args.localeString}contentIdFrom=${args.contentIdFrom}decoratorContentId=${args.decoratorContentId}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {updateWorkEffortTextContent};


const uploadWorkEffortContentFile = {
  type: ResponseType,
  description: 'mutation for ofbiz uploadWorkEffortContentFile method',
  args:{workEffortId: {type: GraphQLString},workEffortContentTypeId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/uploadWorkEffortContentFile?workEffortId=${args.workEffortId}workEffortContentTypeId=${args.workEffortContentTypeId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}thruDate=${args.thruDate}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}_uploadedFile_fileName=${args._uploadedFile_fileName}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}_uploadedFile_contentType=${args._uploadedFile_contentType}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {uploadWorkEffortContentFile};


const workEffortGenericPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz workEffortGenericPermission method',
  args:{workEffortId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},workEffortParentId: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/workEffortGenericPermission?workEffortId=${args.workEffortId}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}workEffortParentId=${args.workEffortParentId}mainAction=${args.mainAction}`, null, req);
  }
};
export {workEffortGenericPermission};


const workEffortICalendarPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz workEffortICalendarPermission method',
  args:{workEffortId: {type: GraphQLString},primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/workEffortICalendarPermission?workEffortId=${args.workEffortId}primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {workEffortICalendarPermission};


const workEffortManagerPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz workEffortManagerPermission method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workefforts/workEffortManagerPermission?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {workEffortManagerPermission};
