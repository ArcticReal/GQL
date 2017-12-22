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


const cancelCheckRunPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelCheckRunPayments method',
  args:{paymentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/cancelCheckRunPayments?paymentGroupId=${args.paymentGroupId}`, null, req);
  }
};
export {cancelCheckRunPayments};


const cancelPaymentBatch = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelPaymentBatch method',
  args:{paymentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/cancelPaymentBatch?paymentGroupId=${args.paymentGroupId}`, null, req);
  }
};
export {cancelPaymentBatch};


const checkAndCreateBatchForValidPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz checkAndCreateBatchForValidPayments method',
  args:{paymentGroupTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},paymentGroupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/checkAndCreateBatchForValidPayments?paymentIds=${args.paymentIds}paymentGroupTypeId=${args.paymentGroupTypeId}fromDate=${args.fromDate}paymentGroupName=${args.paymentGroupName}`, null, req);
  }
};
export {checkAndCreateBatchForValidPayments};


const checkPaymentInvoices = {
  type: ResponseType,
  description: 'mutation for ofbiz checkPaymentInvoices method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/checkPaymentInvoices?paymentId=${args.paymentId}`, null, req);
  }
};
export {checkPaymentInvoices};


const createBillingAccountTermAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createBillingAccountTermAttr method',
  args:{billingAccountTermId: {type: GraphQLString},attrName: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createBillingAccountTermAttr?billingAccountTermId=${args.billingAccountTermId}attrName=${args.attrName}attrValue=${args.attrValue}`, null, req);
  }
};
export {createBillingAccountTermAttr};


const createDeduction = {
  type: ResponseType,
  description: 'mutation for ofbiz createDeduction method',
  args:{amount: {type: GraphQLFloat},paymentId: {type: GraphQLString},deductionTypeId: {type: GraphQLString},deductionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createDeduction?amount=${args.amount}paymentId=${args.paymentId}deductionTypeId=${args.deductionTypeId}deductionId=${args.deductionId}`, null, req);
  }
};
export {createDeduction};


const createDeductionType = {
  type: ResponseType,
  description: 'mutation for ofbiz createDeductionType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},deductionTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createDeductionType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}deductionTypeId=${args.deductionTypeId}description=${args.description}`, null, req);
  }
};
export {createDeductionType};


const createFinAccoutnTransFromPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz createFinAccoutnTransFromPayment method',
  args:{orderItemSeqId: {type: GraphQLString},finAccountTransId: {type: GraphQLString},amount: {type: GraphQLFloat},comments: {type: GraphQLString},entryDate: {type: GraphQLString},orderId: {type: GraphQLString},glReconciliationId: {type: GraphQLString},transactionDate: {type: GraphQLString},finAccountId: {type: GraphQLString},finAccountTransTypeId: {type: GraphQLString},statusId: {type: GraphQLString},paymentId: {type: GraphQLString},performedByPartyId: {type: GraphQLString},reasonEnumId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createFinAccoutnTransFromPayment?orderItemSeqId=${args.orderItemSeqId}finAccountTransId=${args.finAccountTransId}amount=${args.amount}comments=${args.comments}entryDate=${args.entryDate}orderId=${args.orderId}glReconciliationId=${args.glReconciliationId}transactionDate=${args.transactionDate}finAccountId=${args.finAccountId}finAccountTransTypeId=${args.finAccountTransTypeId}statusId=${args.statusId}paymentId=${args.paymentId}performedByPartyId=${args.performedByPartyId}reasonEnumId=${args.reasonEnumId}partyId=${args.partyId}invoiceIds=${args.invoiceIds}`, null, req);
  }
};
export {createFinAccoutnTransFromPayment};


const createMatchingPaymentApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz createMatchingPaymentApplication method',
  args:{paymentId: {type: GraphQLString},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createMatchingPaymentApplication?paymentId=${args.paymentId}invoiceId=${args.invoiceId}`, null, req);
  }
};
export {createMatchingPaymentApplication};


const createPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz createPayment method',
  args:{partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},paymentTypeId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},finAccountTransId: {type: GraphQLString},paymentPreferenceId: {type: GraphQLString},comments: {type: GraphQLString},actualCurrencyAmount: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},actualCurrencyUomId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentGatewayResponseId: {type: GraphQLString},paymentId: {type: GraphQLString},paymentRefNum: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPayment?partyIdFrom=${args.partyIdFrom}amount=${args.amount}paymentTypeId=${args.paymentTypeId}partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}finAccountTransId=${args.finAccountTransId}paymentPreferenceId=${args.paymentPreferenceId}comments=${args.comments}actualCurrencyAmount=${args.actualCurrencyAmount}overrideGlAccountId=${args.overrideGlAccountId}paymentMethodTypeId=${args.paymentMethodTypeId}actualCurrencyUomId=${args.actualCurrencyUomId}currencyUomId=${args.currencyUomId}statusId=${args.statusId}paymentMethodId=${args.paymentMethodId}paymentGatewayResponseId=${args.paymentGatewayResponseId}paymentId=${args.paymentId}paymentRefNum=${args.paymentRefNum}effectiveDate=${args.effectiveDate}`, null, req);
  }
};
export {createPayment};


const createPaymentAndApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentAndApplication method',
  args:{partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},paymentTypeId: {type: GraphQLString},statusId: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},finAccountTransId: {type: GraphQLString},paymentPreferenceId: {type: GraphQLString},comments: {type: GraphQLString},actualCurrencyAmount: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},billingAccountId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},actualCurrencyUomId: {type: GraphQLString},currencyUomId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentGatewayResponseId: {type: GraphQLString},paymentId: {type: GraphQLString},paymentRefNum: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},invoiceId: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentAndApplication?partyIdFrom=${args.partyIdFrom}amount=${args.amount}paymentTypeId=${args.paymentTypeId}statusId=${args.statusId}partyIdTo=${args.partyIdTo}roleTypeIdTo=${args.roleTypeIdTo}finAccountTransId=${args.finAccountTransId}paymentPreferenceId=${args.paymentPreferenceId}comments=${args.comments}actualCurrencyAmount=${args.actualCurrencyAmount}overrideGlAccountId=${args.overrideGlAccountId}invoiceItemSeqId=${args.invoiceItemSeqId}billingAccountId=${args.billingAccountId}paymentMethodTypeId=${args.paymentMethodTypeId}actualCurrencyUomId=${args.actualCurrencyUomId}currencyUomId=${args.currencyUomId}paymentMethodId=${args.paymentMethodId}paymentGatewayResponseId=${args.paymentGatewayResponseId}paymentId=${args.paymentId}paymentRefNum=${args.paymentRefNum}taxAuthGeoId=${args.taxAuthGeoId}invoiceId=${args.invoiceId}effectiveDate=${args.effectiveDate}`, null, req);
  }
};
export {createPaymentAndApplication};


const createPaymentAndApplicationForParty = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentAndApplicationForParty method',
  args:{paymentMethodId: {type: GraphQLString},partyId: {type: GraphQLString},finAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},checkStartNumber: {type: GraphQLInt},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentAndApplicationForParty?invoices=${args.invoices}paymentMethodId=${args.paymentMethodId}partyId=${args.partyId}finAccountId=${args.finAccountId}organizationPartyId=${args.organizationPartyId}checkStartNumber=${args.checkStartNumber}paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {createPaymentAndApplicationForParty};


const createPaymentAndPaymentGroupForInvoices = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentAndPaymentGroupForInvoices method',
  args:{paymentMethodId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},checkStartNumber: {type: GraphQLInt},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentAndPaymentGroupForInvoices?paymentMethodId=${args.paymentMethodId}organizationPartyId=${args.organizationPartyId}invoiceIds=${args.invoiceIds}checkStartNumber=${args.checkStartNumber}paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {createPaymentAndPaymentGroupForInvoices};


const createPaymentApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentApplication method',
  args:{paymentId: {type: GraphQLString},toPaymentId: {type: GraphQLString},amountApplied: {type: GraphQLFloat},taxAuthGeoId: {type: GraphQLString},invoiceId: {type: GraphQLString},billingAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentApplication?paymentId=${args.paymentId}toPaymentId=${args.toPaymentId}amountApplied=${args.amountApplied}taxAuthGeoId=${args.taxAuthGeoId}invoiceId=${args.invoiceId}billingAccountId=${args.billingAccountId}`, null, req);
  }
};
export {createPaymentApplication};


const createPaymentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentAttribute method',
  args:{paymentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentAttribute?paymentId=${args.paymentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createPaymentAttribute};


const createPaymentBudgetAllocation = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentBudgetAllocation method',
  args:{paymentId: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},amount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentBudgetAllocation?paymentId=${args.paymentId}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}amount=${args.amount}`, null, req);
  }
};
export {createPaymentBudgetAllocation};


const createPaymentContent = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentContent method',
  args:{paymentContentTypeId: {type: GraphQLString},paymentId: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},fromDate: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},dataResourceId: {type: GraphQLString},decoratorContentId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentContent?paymentContentTypeId=${args.paymentContentTypeId}paymentId=${args.paymentId}contentId=${args.contentId}ownerContentId=${args.ownerContentId}templateDataResourceId=${args.templateDataResourceId}lastModifiedDate=${args.lastModifiedDate}instanceOfContentId=${args.instanceOfContentId}contentTypeId=${args.contentTypeId}description=${args.description}mimeTypeId=${args.mimeTypeId}childLeafCount=${args.childLeafCount}serviceName=${args.serviceName}customMethodId=${args.customMethodId}characterSetId=${args.characterSetId}thruDate=${args.thruDate}contentName=${args.contentName}fromDate=${args.fromDate}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}statusId=${args.statusId}localeString=${args.localeString}dataResourceId=${args.dataResourceId}decoratorContentId=${args.decoratorContentId}createdByUserLogin=${args.createdByUserLogin}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {createPaymentContent};


const createPaymentContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentContentType method',
  args:{parentTypeId: {type: GraphQLString},paymentContentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentContentType?parentTypeId=${args.parentTypeId}paymentContentTypeId=${args.paymentContentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createPaymentContentType};


const createPaymentFromOrder = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentFromOrder method',
  args:{orderId: {type: GraphQLString},comments: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentRefNum: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentFromOrder?orderId=${args.orderId}comments=${args.comments}paymentMethodId=${args.paymentMethodId}paymentRefNum=${args.paymentRefNum}`, null, req);
  }
};
export {createPaymentFromOrder};


const createPaymentGroupAndMember = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentGroupAndMember method',
  args:{paymentGroupTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},paymentGroupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentGroupAndMember?paymentIds=${args.paymentIds}paymentGroupTypeId=${args.paymentGroupTypeId}fromDate=${args.fromDate}paymentGroupName=${args.paymentGroupName}`, null, req);
  }
};
export {createPaymentGroupAndMember};


const createPaymentGroupType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentGroupType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentGroupType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}paymentGroupTypeId=${args.paymentGroupTypeId}`, null, req);
  }
};
export {createPaymentGroupType};


const createPaymentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentType method',
  args:{paymentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentType?paymentTypeId=${args.paymentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createPaymentType};


const createPaymentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createPaymentTypeAttr method',
  args:{paymentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/createPaymentTypeAttr?paymentTypeId=${args.paymentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createPaymentTypeAttr};


const deleteBillingAccountTermAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBillingAccountTermAttr method',
  args:{billingAccountTermId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deleteBillingAccountTermAttr?billingAccountTermId=${args.billingAccountTermId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteBillingAccountTermAttr};


const deleteDeduction = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDeduction method',
  args:{deductionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deleteDeduction?deductionId=${args.deductionId}`, null, req);
  }
};
export {deleteDeduction};


const deleteDeductionType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDeductionType method',
  args:{deductionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deleteDeductionType?deductionTypeId=${args.deductionTypeId}`, null, req);
  }
};
export {deleteDeductionType};


const deletePaymentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentAttribute method',
  args:{paymentId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deletePaymentAttribute?paymentId=${args.paymentId}attrName=${args.attrName}`, null, req);
  }
};
export {deletePaymentAttribute};


const deletePaymentBudgetAllocation = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentBudgetAllocation method',
  args:{paymentId: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deletePaymentBudgetAllocation?paymentId=${args.paymentId}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}`, null, req);
  }
};
export {deletePaymentBudgetAllocation};


const deletePaymentContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentContentType method',
  args:{paymentContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deletePaymentContentType?paymentContentTypeId=${args.paymentContentTypeId}`, null, req);
  }
};
export {deletePaymentContentType};


const deletePaymentGroupType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentGroupType method',
  args:{paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deletePaymentGroupType?paymentGroupTypeId=${args.paymentGroupTypeId}`, null, req);
  }
};
export {deletePaymentGroupType};


const deletePaymentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentType method',
  args:{paymentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deletePaymentType?paymentTypeId=${args.paymentTypeId}`, null, req);
  }
};
export {deletePaymentType};


const deletePaymentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePaymentTypeAttr method',
  args:{paymentTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/deletePaymentTypeAttr?paymentTypeId=${args.paymentTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deletePaymentTypeAttr};


const getInvoicePaymentInfoList = {
  type: ResponseType,
  description: 'mutation for ofbiz getInvoicePaymentInfoList method',
  args:{invoiceId: {type: GraphQLString},invoice: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/getInvoicePaymentInfoList?invoiceId=${args.invoiceId}invoice=${args.invoice}`, null, req);
  }
};
export {getInvoicePaymentInfoList};


const getInvoicePaymentInfoListByDueDateOffset = {
  type: ResponseType,
  description: 'mutation for ofbiz getInvoicePaymentInfoListByDueDateOffset method',
  args:{invoiceTypeId: {type: GraphQLString},daysOffset: {type: GraphQLInt},partyIdFrom: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/getInvoicePaymentInfoListByDueDateOffset?invoiceTypeId=${args.invoiceTypeId}daysOffset=${args.daysOffset}partyIdFrom=${args.partyIdFrom}partyId=${args.partyId}`, null, req);
  }
};
export {getInvoicePaymentInfoListByDueDateOffset};


const getPaymentGroupReconciliationId = {
  type: ResponseType,
  description: 'mutation for ofbiz getPaymentGroupReconciliationId method',
  args:{paymentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/getPaymentGroupReconciliationId?paymentGroupId=${args.paymentGroupId}`, null, req);
  }
};
export {getPaymentGroupReconciliationId};


const getPaymentRunningTotal = {
  type: ResponseType,
  description: 'mutation for ofbiz getPaymentRunningTotal method',
  args:{organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/getPaymentRunningTotal?paymentIds=${args.paymentIds}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {getPaymentRunningTotal};


const getPayments = {
  type: ResponseType,
  description: 'mutation for ofbiz getPayments method',
  args:{paymentGroupId: {type: GraphQLString},finAccountTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/getPayments?paymentGroupId=${args.paymentGroupId}finAccountTransId=${args.finAccountTransId}`, null, req);
  }
};
export {getPayments};


const massChangePaymentStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz massChangePaymentStatus method',
  args:{statusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/massChangePaymentStatus?paymentIds=${args.paymentIds}statusId=${args.statusId}`, null, req);
  }
};
export {massChangePaymentStatus};


const quickSendPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz quickSendPayment method',
  args:{paymentId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},finAccountTransId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},paymentPreferenceId: {type: GraphQLString},comments: {type: GraphQLString},actualCurrencyAmount: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},actualCurrencyUomId: {type: GraphQLString},paymentTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentGatewayResponseId: {type: GraphQLString},paymentRefNum: {type: GraphQLString},partyIdTo: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/quickSendPayment?paymentId=${args.paymentId}roleTypeIdTo=${args.roleTypeIdTo}finAccountTransId=${args.finAccountTransId}partyIdFrom=${args.partyIdFrom}amount=${args.amount}paymentPreferenceId=${args.paymentPreferenceId}comments=${args.comments}actualCurrencyAmount=${args.actualCurrencyAmount}overrideGlAccountId=${args.overrideGlAccountId}paymentMethodTypeId=${args.paymentMethodTypeId}actualCurrencyUomId=${args.actualCurrencyUomId}paymentTypeId=${args.paymentTypeId}currencyUomId=${args.currencyUomId}statusId=${args.statusId}paymentMethodId=${args.paymentMethodId}paymentGatewayResponseId=${args.paymentGatewayResponseId}paymentRefNum=${args.paymentRefNum}partyIdTo=${args.partyIdTo}effectiveDate=${args.effectiveDate}`, null, req);
  }
};
export {quickSendPayment};


const removePaymentApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz removePaymentApplication method',
  args:{paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/removePaymentApplication?paymentApplicationId=${args.paymentApplicationId}`, null, req);
  }
};
export {removePaymentApplication};


const removePaymentContent = {
  type: ResponseType,
  description: 'mutation for ofbiz removePaymentContent method',
  args:{fromDate: {type: GraphQLString},paymentContentTypeId: {type: GraphQLString},paymentId: {type: GraphQLString},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/removePaymentContent?fromDate=${args.fromDate}paymentContentTypeId=${args.paymentContentTypeId}paymentId=${args.paymentId}contentId=${args.contentId}`, null, req);
  }
};
export {removePaymentContent};


const setPaymentStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz setPaymentStatus method',
  args:{statusId: {type: GraphQLString},paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/setPaymentStatus?statusId=${args.statusId}paymentId=${args.paymentId}`, null, req);
  }
};
export {setPaymentStatus};


const updateBillingAccountTermAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBillingAccountTermAttr method',
  args:{billingAccountTermId: {type: GraphQLString},attrName: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updateBillingAccountTermAttr?billingAccountTermId=${args.billingAccountTermId}attrName=${args.attrName}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateBillingAccountTermAttr};


const updateDeduction = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDeduction method',
  args:{deductionId: {type: GraphQLString},amount: {type: GraphQLFloat},paymentId: {type: GraphQLString},deductionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updateDeduction?deductionId=${args.deductionId}amount=${args.amount}paymentId=${args.paymentId}deductionTypeId=${args.deductionTypeId}`, null, req);
  }
};
export {updateDeduction};


const updateDeductionType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDeductionType method',
  args:{deductionTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updateDeductionType?deductionTypeId=${args.deductionTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateDeductionType};


const updatePayment = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePayment method',
  args:{paymentId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},finAccountTransId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},amount: {type: GraphQLFloat},paymentPreferenceId: {type: GraphQLString},comments: {type: GraphQLString},actualCurrencyAmount: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString},actualCurrencyUomId: {type: GraphQLString},paymentTypeId: {type: GraphQLString},currencyUomId: {type: GraphQLString},statusId: {type: GraphQLString},paymentMethodId: {type: GraphQLString},paymentGatewayResponseId: {type: GraphQLString},paymentRefNum: {type: GraphQLString},partyIdTo: {type: GraphQLString},effectiveDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePayment?paymentId=${args.paymentId}roleTypeIdTo=${args.roleTypeIdTo}finAccountTransId=${args.finAccountTransId}partyIdFrom=${args.partyIdFrom}amount=${args.amount}paymentPreferenceId=${args.paymentPreferenceId}comments=${args.comments}actualCurrencyAmount=${args.actualCurrencyAmount}overrideGlAccountId=${args.overrideGlAccountId}paymentMethodTypeId=${args.paymentMethodTypeId}actualCurrencyUomId=${args.actualCurrencyUomId}paymentTypeId=${args.paymentTypeId}currencyUomId=${args.currencyUomId}statusId=${args.statusId}paymentMethodId=${args.paymentMethodId}paymentGatewayResponseId=${args.paymentGatewayResponseId}paymentRefNum=${args.paymentRefNum}partyIdTo=${args.partyIdTo}effectiveDate=${args.effectiveDate}`, null, req);
  }
};
export {updatePayment};


const updatePaymentApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentApplication method',
  args:{paymentId: {type: GraphQLString},toPaymentId: {type: GraphQLString},amountApplied: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},billingAccountId: {type: GraphQLString},paymentApplicationId: {type: GraphQLString},invoiceProcessing: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentApplication?paymentId=${args.paymentId}toPaymentId=${args.toPaymentId}amountApplied=${args.amountApplied}overrideGlAccountId=${args.overrideGlAccountId}taxAuthGeoId=${args.taxAuthGeoId}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}billingAccountId=${args.billingAccountId}paymentApplicationId=${args.paymentApplicationId}invoiceProcessing=${args.invoiceProcessing}`, null, req);
  }
};
export {updatePaymentApplication};


const updatePaymentApplicationDef = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentApplicationDef method',
  args:{paymentId: {type: GraphQLString},toPaymentId: {type: GraphQLString},amountApplied: {type: GraphQLFloat},overrideGlAccountId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},billingAccountId: {type: GraphQLString},paymentApplicationId: {type: GraphQLString},invoiceProcessing: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentApplicationDef?paymentId=${args.paymentId}toPaymentId=${args.toPaymentId}amountApplied=${args.amountApplied}overrideGlAccountId=${args.overrideGlAccountId}taxAuthGeoId=${args.taxAuthGeoId}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}billingAccountId=${args.billingAccountId}paymentApplicationId=${args.paymentApplicationId}invoiceProcessing=${args.invoiceProcessing}`, null, req);
  }
};
export {updatePaymentApplicationDef};


const updatePaymentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentAttribute method',
  args:{paymentId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentAttribute?paymentId=${args.paymentId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updatePaymentAttribute};


const updatePaymentBudgetAllocation = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentBudgetAllocation method',
  args:{paymentId: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},amount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentBudgetAllocation?paymentId=${args.paymentId}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}amount=${args.amount}`, null, req);
  }
};
export {updatePaymentBudgetAllocation};


const updatePaymentContent = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentContent method',
  args:{fromDate: {type: GraphQLString},paymentContentTypeId: {type: GraphQLString},paymentId: {type: GraphQLString},contentId: {type: GraphQLString},ownerContentId: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentTypeId: {type: GraphQLString},description: {type: GraphQLString},mimeTypeId: {type: GraphQLString},childLeafCount: {type: GraphQLInt},serviceName: {type: GraphQLString},customMethodId: {type: GraphQLString},characterSetId: {type: GraphQLString},thruDate: {type: GraphQLString},contentName: {type: GraphQLInt},privilegeEnumId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},createdDate: {type: GraphQLString},statusId: {type: GraphQLString},localeString: {type: GraphQLString},dataResourceId: {type: GraphQLString},decoratorContentId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},childBranchCount: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentContent?fromDate=${args.fromDate}paymentContentTypeId=${args.paymentContentTypeId}paymentId=${args.paymentId}contentId=${args.contentId}ownerContentId=${args.ownerContentId}templateDataResourceId=${args.templateDataResourceId}lastModifiedDate=${args.lastModifiedDate}instanceOfContentId=${args.instanceOfContentId}contentTypeId=${args.contentTypeId}description=${args.description}mimeTypeId=${args.mimeTypeId}childLeafCount=${args.childLeafCount}serviceName=${args.serviceName}customMethodId=${args.customMethodId}characterSetId=${args.characterSetId}thruDate=${args.thruDate}contentName=${args.contentName}privilegeEnumId=${args.privilegeEnumId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}createdDate=${args.createdDate}statusId=${args.statusId}localeString=${args.localeString}dataResourceId=${args.dataResourceId}decoratorContentId=${args.decoratorContentId}createdByUserLogin=${args.createdByUserLogin}childBranchCount=${args.childBranchCount}`, null, req);
  }
};
export {updatePaymentContent};


const updatePaymentContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentContentType method',
  args:{paymentContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentContentType?paymentContentTypeId=${args.paymentContentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePaymentContentType};


const updatePaymentGroupType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentGroupType method',
  args:{paymentGroupTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentGroupType?paymentGroupTypeId=${args.paymentGroupTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePaymentGroupType};


const updatePaymentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentType method',
  args:{paymentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentType?paymentTypeId=${args.paymentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePaymentType};


const updatePaymentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePaymentTypeAttr method',
  args:{paymentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/updatePaymentTypeAttr?paymentTypeId=${args.paymentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updatePaymentTypeAttr};


const voidPayment = {
  type: ResponseType,
  description: 'mutation for ofbiz voidPayment method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingPayment/voidPayment?paymentId=${args.paymentId}`, null, req);
  }
};
export {voidPayment};
