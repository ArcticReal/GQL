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


const calculateAcctgTransTrialBalance = {
  type: GraphQLString,
  description: 'mutation for ofbiz calculateAcctgTransTrialBalance method',
  args:{acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/calculateAcctgTransTrialBalance?acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {calculateAcctgTransTrialBalance};


const calculateGlAccountTrialBalance = {
  type: GraphQLString,
  description: 'mutation for ofbiz calculateGlAccountTrialBalance method',
  args:{fromDate: {type: GraphQLString},glAccountId: {type: GraphQLString},thruDate: {type: GraphQLString},isPosted: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/calculateGlAccountTrialBalance?fromDate=${args.fromDate}glAccountId=${args.glAccountId}thruDate=${args.thruDate}isPosted=${args.isPosted}`, null, req);
  }
};
export {calculateGlAccountTrialBalance};


const calculateGlJournalTrialBalance = {
  type: GraphQLString,
  description: 'mutation for ofbiz calculateGlJournalTrialBalance method',
  args:{glJournalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/calculateGlJournalTrialBalance?glJournalId=${args.glJournalId}`, null, req);
  }
};
export {calculateGlJournalTrialBalance};


const closeFinancialTimePeriod = {
  type: GraphQLString,
  description: 'mutation for ofbiz closeFinancialTimePeriod method',
  args:{customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/closeFinancialTimePeriod?customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {closeFinancialTimePeriod};


const completeAcctgTransEntries = {
  type: GraphQLString,
  description: 'mutation for ofbiz completeAcctgTransEntries method',
  args:{acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/completeAcctgTransEntries?acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {completeAcctgTransEntries};


const computeAndStoreGlAccountHistoryBalance = {
  type: GraphQLString,
  description: 'mutation for ofbiz computeAndStoreGlAccountHistoryBalance method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/computeAndStoreGlAccountHistoryBalance?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {computeAndStoreGlAccountHistoryBalance};


const computeGlAccountBalanceForTimePeriod = {
  type: GraphQLString,
  description: 'mutation for ofbiz computeGlAccountBalanceForTimePeriod method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/computeGlAccountBalanceForTimePeriod?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {computeGlAccountBalanceForTimePeriod};


const copyAcctgTransAndEntries = {
  type: GraphQLString,
  description: 'mutation for ofbiz copyAcctgTransAndEntries method',
  args:{fromAcctgTransId: {type: GraphQLString},revert: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/copyAcctgTransAndEntries?fromAcctgTransId=${args.fromAcctgTransId}revert=${args.revert}`, null, req);
  }
};
export {copyAcctgTransAndEntries};


const createAcctgTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTrans method',
  args:{finAccountTransId: {type: GraphQLString},workEffortId: {type: GraphQLString},theirAcctgTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},acctgTransTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},glFiscalTypeId: {type: GraphQLString},description: {type: GraphQLString},glJournalId: {type: GraphQLString},transactionDate: {type: GraphQLString},scheduledPostingDate: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},physicalInventoryId: {type: GraphQLString},createdDate: {type: GraphQLString},paymentId: {type: GraphQLString},shipmentId: {type: GraphQLString},voucherDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},invoiceId: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString},groupStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTrans?finAccountTransId=${args.finAccountTransId}workEffortId=${args.workEffortId}theirAcctgTransId=${args.theirAcctgTransId}roleTypeId=${args.roleTypeId}acctgTransTypeId=${args.acctgTransTypeId}lastModifiedDate=${args.lastModifiedDate}glFiscalTypeId=${args.glFiscalTypeId}description=${args.description}glJournalId=${args.glJournalId}transactionDate=${args.transactionDate}scheduledPostingDate=${args.scheduledPostingDate}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}physicalInventoryId=${args.physicalInventoryId}createdDate=${args.createdDate}paymentId=${args.paymentId}shipmentId=${args.shipmentId}voucherDate=${args.voucherDate}fixedAssetId=${args.fixedAssetId}invoiceId=${args.invoiceId}partyId=${args.partyId}receiptId=${args.receiptId}groupStatusId=${args.groupStatusId}`, null, req);
  }
};
export {createAcctgTrans};


const createAcctgTransAndEntries = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransAndEntries method',
  args:{workEffortId: {type: GraphQLString},theirAcctgTransId: {type: GraphQLString},description: {type: GraphQLString},postedDate: {type: GraphQLString},physicalInventoryId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},isPosted: {type: GraphQLString},paymentId: {type: GraphQLString},voucherDate: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},finAccountTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},acctgTransTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},glFiscalTypeId: {type: GraphQLString},glJournalId: {type: GraphQLString},transactionDate: {type: GraphQLString},scheduledPostingDate: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},createdDate: {type: GraphQLString},shipmentId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},invoiceId: {type: GraphQLString},groupStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransAndEntries?acctgTransEntries=${args.acctgTransEntries}workEffortId=${args.workEffortId}theirAcctgTransId=${args.theirAcctgTransId}description=${args.description}postedDate=${args.postedDate}physicalInventoryId=${args.physicalInventoryId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}isPosted=${args.isPosted}paymentId=${args.paymentId}voucherDate=${args.voucherDate}partyId=${args.partyId}receiptId=${args.receiptId}createdByUserLogin=${args.createdByUserLogin}finAccountTransId=${args.finAccountTransId}roleTypeId=${args.roleTypeId}acctgTransTypeId=${args.acctgTransTypeId}lastModifiedDate=${args.lastModifiedDate}glFiscalTypeId=${args.glFiscalTypeId}glJournalId=${args.glJournalId}transactionDate=${args.transactionDate}scheduledPostingDate=${args.scheduledPostingDate}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}createdDate=${args.createdDate}shipmentId=${args.shipmentId}fixedAssetId=${args.fixedAssetId}invoiceId=${args.invoiceId}groupStatusId=${args.groupStatusId}`, null, req);
  }
};
export {createAcctgTransAndEntries};


const createAcctgTransAndEntriesForCustomerRefundPaymentApplication = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransAndEntriesForCustomerRefundPaymentApplication method',
  args:{paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransAndEntriesForCustomerRefundPaymentApplication?paymentApplicationId=${args.paymentApplicationId}`, null, req);
  }
};
export {createAcctgTransAndEntriesForCustomerRefundPaymentApplication};


const createAcctgTransAndEntriesForIncomingPayment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransAndEntriesForIncomingPayment method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransAndEntriesForIncomingPayment?paymentId=${args.paymentId}`, null, req);
  }
};
export {createAcctgTransAndEntriesForIncomingPayment};


const createAcctgTransAndEntriesForOutgoingPayment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransAndEntriesForOutgoingPayment method',
  args:{paymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransAndEntriesForOutgoingPayment?paymentId=${args.paymentId}`, null, req);
  }
};
export {createAcctgTransAndEntriesForOutgoingPayment};


const createAcctgTransAndEntriesForPaymentApplication = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransAndEntriesForPaymentApplication method',
  args:{paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransAndEntriesForPaymentApplication?paymentApplicationId=${args.paymentApplicationId}`, null, req);
  }
};
export {createAcctgTransAndEntriesForPaymentApplication};


const createAcctgTransAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransAttribute method',
  args:{acctgTransId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransAttribute?acctgTransId=${args.acctgTransId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createAcctgTransAttribute};


const createAcctgTransEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransEntry method',
  args:{acctgTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},theirProductId: {type: GraphQLString},amount: {type: GraphQLFloat},productId: {type: GraphQLString},dueDate: {type: GraphQLString},groupId: {type: GraphQLString},settlementTermId: {type: GraphQLString},glAccountId: {type: GraphQLString},description: {type: GraphQLString},theirPartyId: {type: GraphQLString},acctgTransEntryTypeId: {type: GraphQLString},isSummary: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},purposeEnumId: {type: GraphQLString},currencyUomId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},origAmount: {type: GraphQLFloat},debitCreditFlag: {type: GraphQLString},taxId: {type: GraphQLString},origCurrencyUomId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransEntry?acctgTransId=${args.acctgTransId}roleTypeId=${args.roleTypeId}theirProductId=${args.theirProductId}amount=${args.amount}productId=${args.productId}dueDate=${args.dueDate}groupId=${args.groupId}settlementTermId=${args.settlementTermId}glAccountId=${args.glAccountId}description=${args.description}theirPartyId=${args.theirPartyId}acctgTransEntryTypeId=${args.acctgTransEntryTypeId}isSummary=${args.isSummary}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}purposeEnumId=${args.purposeEnumId}currencyUomId=${args.currencyUomId}glAccountTypeId=${args.glAccountTypeId}origAmount=${args.origAmount}debitCreditFlag=${args.debitCreditFlag}taxId=${args.taxId}origCurrencyUomId=${args.origCurrencyUomId}organizationPartyId=${args.organizationPartyId}partyId=${args.partyId}`, null, req);
  }
};
export {createAcctgTransEntry};


const createAcctgTransEntryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransEntryType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},acctgTransEntryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransEntryType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}acctgTransEntryTypeId=${args.acctgTransEntryTypeId}`, null, req);
  }
};
export {createAcctgTransEntryType};


const createAcctgTransForCanceledSalesShipmentIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForCanceledSalesShipmentIssuance method',
  args:{itemIssuanceId: {type: GraphQLString},canceledQuantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForCanceledSalesShipmentIssuance?itemIssuanceId=${args.itemIssuanceId}canceledQuantity=${args.canceledQuantity}`, null, req);
  }
};
export {createAcctgTransForCanceledSalesShipmentIssuance};


const createAcctgTransForCustomerReturnInvoice = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForCustomerReturnInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForCustomerReturnInvoice?invoiceId=${args.invoiceId}`, null, req);
  }
};
export {createAcctgTransForCustomerReturnInvoice};


const createAcctgTransForFixedAssetMaintIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForFixedAssetMaintIssuance method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForFixedAssetMaintIssuance?itemIssuanceId=${args.itemIssuanceId}`, null, req);
  }
};
export {createAcctgTransForFixedAssetMaintIssuance};


const createAcctgTransForInventoryItemCostChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForInventoryItemCostChange method',
  args:{inventoryItemId: {type: GraphQLString},inventoryItemDetailSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForInventoryItemCostChange?inventoryItemId=${args.inventoryItemId}inventoryItemDetailSeqId=${args.inventoryItemDetailSeqId}`, null, req);
  }
};
export {createAcctgTransForInventoryItemCostChange};


const createAcctgTransForInventoryItemOwnerChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForInventoryItemOwnerChange method',
  args:{inventoryItemId: {type: GraphQLString},oldOwnerPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForInventoryItemOwnerChange?inventoryItemId=${args.inventoryItemId}oldOwnerPartyId=${args.oldOwnerPartyId}`, null, req);
  }
};
export {createAcctgTransForInventoryItemOwnerChange};


const createAcctgTransForPhysicalInventoryVariance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForPhysicalInventoryVariance method',
  args:{physicalInventoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForPhysicalInventoryVariance?physicalInventoryId=${args.physicalInventoryId}`, null, req);
  }
};
export {createAcctgTransForPhysicalInventoryVariance};


const createAcctgTransForPurchaseInvoice = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForPurchaseInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForPurchaseInvoice?invoiceId=${args.invoiceId}`, null, req);
  }
};
export {createAcctgTransForPurchaseInvoice};


const createAcctgTransForSalesInvoice = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForSalesInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForSalesInvoice?invoiceId=${args.invoiceId}`, null, req);
  }
};
export {createAcctgTransForSalesInvoice};


const createAcctgTransForSalesShipmentIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForSalesShipmentIssuance method',
  args:{itemIssuanceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForSalesShipmentIssuance?itemIssuanceId=${args.itemIssuanceId}`, null, req);
  }
};
export {createAcctgTransForSalesShipmentIssuance};


const createAcctgTransForShipmentReceipt = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForShipmentReceipt method',
  args:{receiptId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForShipmentReceipt?receiptId=${args.receiptId}`, null, req);
  }
};
export {createAcctgTransForShipmentReceipt};


const createAcctgTransForWorkEffortCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForWorkEffortCost method',
  args:{workEffortId: {type: GraphQLString},costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForWorkEffortCost?workEffortId=${args.workEffortId}costComponentId=${args.costComponentId}`, null, req);
  }
};
export {createAcctgTransForWorkEffortCost};


const createAcctgTransForWorkEffortInventoryProduced = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForWorkEffortInventoryProduced method',
  args:{workEffortId: {type: GraphQLString},inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForWorkEffortInventoryProduced?workEffortId=${args.workEffortId}inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {createAcctgTransForWorkEffortInventoryProduced};


const createAcctgTransForWorkEffortIssuance = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransForWorkEffortIssuance method',
  args:{workEffortId: {type: GraphQLString},inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransForWorkEffortIssuance?workEffortId=${args.workEffortId}inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {createAcctgTransForWorkEffortIssuance};


const createAcctgTransType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},acctgTransTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}acctgTransTypeId=${args.acctgTransTypeId}description=${args.description}`, null, req);
  }
};
export {createAcctgTransType};


const createAcctgTransTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransTypeAttr method',
  args:{acctgTransTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createAcctgTransTypeAttr?acctgTransTypeId=${args.acctgTransTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createAcctgTransTypeAttr};


const createFinAccountTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccountTypeGlAccount method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createFinAccountTypeGlAccount?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}finAccountTypeId=${args.finAccountTypeId}`, null, req);
  }
};
export {createFinAccountTypeGlAccount};


const createGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccount method',
  args:{glAccountTypeId: {type: GraphQLString},glResourceTypeId: {type: GraphQLString},accountName: {type: GraphQLString},glAccountId: {type: GraphQLString},glAccountClassId: {type: GraphQLString},accountCode: {type: GraphQLString},productId: {type: GraphQLString},parentGlAccountId: {type: GraphQLString},description: {type: GraphQLString},externalId: {type: GraphQLString},glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccount?glAccountTypeId=${args.glAccountTypeId}glResourceTypeId=${args.glResourceTypeId}accountName=${args.accountName}glAccountId=${args.glAccountId}glAccountClassId=${args.glAccountClassId}accountCode=${args.accountCode}productId=${args.productId}parentGlAccountId=${args.parentGlAccountId}description=${args.description}externalId=${args.externalId}glXbrlClassId=${args.glXbrlClassId}`, null, req);
  }
};
export {createGlAccount};


const createGlAccountCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountCategory method',
  args:{glAccountCategoryTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountCategory?glAccountCategoryTypeId=${args.glAccountCategoryTypeId}description=${args.description}`, null, req);
  }
};
export {createGlAccountCategory};


const createGlAccountCategoryMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountCategoryMember method',
  args:{glAccountId: {type: GraphQLString},glAccountCategoryId: {type: GraphQLString},fromDate: {type: GraphQLString},amountPercentage: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountCategoryMember?glAccountId=${args.glAccountId}glAccountCategoryId=${args.glAccountCategoryId}fromDate=${args.fromDate}amountPercentage=${args.amountPercentage}thruDate=${args.thruDate}`, null, req);
  }
};
export {createGlAccountCategoryMember};


const createGlAccountCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountCategoryType method',
  args:{glAccountCategoryTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountCategoryType?glAccountCategoryTypeId=${args.glAccountCategoryTypeId}description=${args.description}`, null, req);
  }
};
export {createGlAccountCategoryType};


const createGlAccountClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountClass method',
  args:{parentClassId: {type: GraphQLString},glAccountClassId: {type: GraphQLString},description: {type: GraphQLString},isAssetClass: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountClass?parentClassId=${args.parentClassId}glAccountClassId=${args.glAccountClassId}description=${args.description}isAssetClass=${args.isAssetClass}`, null, req);
  }
};
export {createGlAccountClass};


const createGlAccountGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountGroup method',
  args:{glAccountGroupTypeId: {type: GraphQLString},description: {type: GraphQLString},glAccountGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountGroup?glAccountGroupTypeId=${args.glAccountGroupTypeId}description=${args.description}glAccountGroupId=${args.glAccountGroupId}`, null, req);
  }
};
export {createGlAccountGroup};


const createGlAccountGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountGroupMember method',
  args:{glAccountId: {type: GraphQLString},glAccountGroupTypeId: {type: GraphQLString},glAccountGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountGroupMember?glAccountId=${args.glAccountId}glAccountGroupTypeId=${args.glAccountGroupTypeId}glAccountGroupId=${args.glAccountGroupId}`, null, req);
  }
};
export {createGlAccountGroupMember};


const createGlAccountGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountGroupType method',
  args:{glAccountGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountGroupType?glAccountGroupTypeId=${args.glAccountGroupTypeId}description=${args.description}`, null, req);
  }
};
export {createGlAccountGroupType};


const createGlAccountOrganization = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountOrganization method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountOrganization?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createGlAccountOrganization};


const createGlAccountRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}glAccountId=${args.glAccountId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createGlAccountRole};


const createGlAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountType method',
  args:{parentTypeId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAccountType?parentTypeId=${args.parentTypeId}glAccountTypeId=${args.glAccountTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createGlAccountType};


const createGlAcctCatMemFromCostCenters = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAcctCatMemFromCostCenters method',
  args:{glAccountId: {type: GraphQLString},glAccountCategoryId: {type: GraphQLString},amountPercentage: {type: GraphQLFloat},totalAmountPercentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlAcctCatMemFromCostCenters?glAccountId=${args.glAccountId}glAccountCategoryId=${args.glAccountCategoryId}amountPercentage=${args.amountPercentage}totalAmountPercentage=${args.totalAmountPercentage}`, null, req);
  }
};
export {createGlAcctCatMemFromCostCenters};


const createGlBudgetXref = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlBudgetXref method',
  args:{fromDate: {type: GraphQLString},glAccountId: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString},allocationPercentage: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlBudgetXref?fromDate=${args.fromDate}glAccountId=${args.glAccountId}budgetItemTypeId=${args.budgetItemTypeId}allocationPercentage=${args.allocationPercentage}thruDate=${args.thruDate}`, null, req);
  }
};
export {createGlBudgetXref};


const createGlFiscalType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlFiscalType method',
  args:{glFiscalTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlFiscalType?glFiscalTypeId=${args.glFiscalTypeId}description=${args.description}`, null, req);
  }
};
export {createGlFiscalType};


const createGlJournal = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlJournal method',
  args:{organizationPartyId: {type: GraphQLString},glJournalName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlJournal?organizationPartyId=${args.organizationPartyId}glJournalName=${args.glJournalName}`, null, req);
  }
};
export {createGlJournal};


const createGlReconciliation = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlReconciliation method',
  args:{glReconciliationName: {type: GraphQLString},createdDate: {type: GraphQLString},reconciledBalance: {type: GraphQLFloat},statusId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},glAccountId: {type: GraphQLString},description: {type: GraphQLString},organizationPartyId: {type: GraphQLString},reconciledDate: {type: GraphQLString},openingBalance: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlReconciliation?glReconciliationName=${args.glReconciliationName}createdDate=${args.createdDate}reconciledBalance=${args.reconciledBalance}statusId=${args.statusId}lastModifiedDate=${args.lastModifiedDate}glAccountId=${args.glAccountId}description=${args.description}organizationPartyId=${args.organizationPartyId}reconciledDate=${args.reconciledDate}openingBalance=${args.openingBalance}`, null, req);
  }
};
export {createGlReconciliation};


const createGlReconciliationEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlReconciliationEntry method',
  args:{glReconciliationId: {type: GraphQLString},reconciledAmount: {type: GraphQLFloat},acctgTransEntrySeqId: {type: GraphQLString},acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlReconciliationEntry?glReconciliationId=${args.glReconciliationId}reconciledAmount=${args.reconciledAmount}acctgTransEntrySeqId=${args.acctgTransEntrySeqId}acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {createGlReconciliationEntry};


const createGlResourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlResourceType method',
  args:{glResourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlResourceType?glResourceTypeId=${args.glResourceTypeId}description=${args.description}`, null, req);
  }
};
export {createGlResourceType};


const createGlXbrlClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlXbrlClass method',
  args:{description: {type: GraphQLString},glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createGlXbrlClass?description=${args.description}glXbrlClassId=${args.glXbrlClassId}`, null, req);
  }
};
export {createGlXbrlClass};


const createPartyGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyGlAccount method',
  args:{roleTypeId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createPartyGlAccount?roleTypeId=${args.roleTypeId}glAccountTypeId=${args.glAccountTypeId}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}partyId=${args.partyId}`, null, req);
  }
};
export {createPartyGlAccount};


const createProductAverageCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductAverageCostType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},productAverageCostTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createProductAverageCostType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}productAverageCostTypeId=${args.productAverageCostTypeId}description=${args.description}`, null, req);
  }
};
export {createProductAverageCostType};


const createSettlementTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSettlementTerm method',
  args:{settlementTermId: {type: GraphQLString},uomId: {type: GraphQLString},termName: {type: GraphQLString},termValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createSettlementTerm?settlementTermId=${args.settlementTermId}uomId=${args.uomId}termName=${args.termName}termValue=${args.termValue}`, null, req);
  }
};
export {createSettlementTerm};


const createUpdateCostCenter = {
  type: GraphQLString,
  description: 'mutation for ofbiz createUpdateCostCenter method',
  args:{glAccountId: {type: GraphQLString},amountPercentageMap: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createUpdateCostCenter?glAccountId=${args.glAccountId}amountPercentageMap=${args.amountPercentageMap}`, null, req);
  }
};
export {createUpdateCostCenter};


const createVarianceReasonGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVarianceReasonGlAccount method',
  args:{varianceReasonId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/createVarianceReasonGlAccount?varianceReasonId=${args.varianceReasonId}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {createVarianceReasonGlAccount};


const deleteAcctgTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTrans method',
  args:{acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteAcctgTrans?acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {deleteAcctgTrans};


const deleteAcctgTransAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransAttribute method',
  args:{acctgTransId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteAcctgTransAttribute?acctgTransId=${args.acctgTransId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteAcctgTransAttribute};


const deleteAcctgTransEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransEntry method',
  args:{acctgTransEntrySeqId: {type: GraphQLString},acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteAcctgTransEntry?acctgTransEntrySeqId=${args.acctgTransEntrySeqId}acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {deleteAcctgTransEntry};


const deleteAcctgTransEntryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransEntryType method',
  args:{acctgTransEntryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteAcctgTransEntryType?acctgTransEntryTypeId=${args.acctgTransEntryTypeId}`, null, req);
  }
};
export {deleteAcctgTransEntryType};


const deleteAcctgTransTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransTypeAttr method',
  args:{acctgTransTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteAcctgTransTypeAttr?acctgTransTypeId=${args.acctgTransTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteAcctgTransTypeAttr};


const deleteFinAccountTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTypeGlAccount method',
  args:{organizationPartyId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteFinAccountTypeGlAccount?organizationPartyId=${args.organizationPartyId}finAccountTypeId=${args.finAccountTypeId}`, null, req);
  }
};
export {deleteFinAccountTypeGlAccount};


const deleteGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccount method',
  args:{glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccount?glAccountId=${args.glAccountId}`, null, req);
  }
};
export {deleteGlAccount};


const deleteGlAccountCategoryMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountCategoryMember method',
  args:{fromDate: {type: GraphQLString},glAccountId: {type: GraphQLString},glAccountCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountCategoryMember?fromDate=${args.fromDate}glAccountId=${args.glAccountId}glAccountCategoryId=${args.glAccountCategoryId}`, null, req);
  }
};
export {deleteGlAccountCategoryMember};


const deleteGlAccountCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountCategoryType method',
  args:{glAccountCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountCategoryType?glAccountCategoryTypeId=${args.glAccountCategoryTypeId}`, null, req);
  }
};
export {deleteGlAccountCategoryType};


const deleteGlAccountClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountClass method',
  args:{glAccountClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountClass?glAccountClassId=${args.glAccountClassId}`, null, req);
  }
};
export {deleteGlAccountClass};


const deleteGlAccountGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountGroup method',
  args:{glAccountGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountGroup?glAccountGroupId=${args.glAccountGroupId}`, null, req);
  }
};
export {deleteGlAccountGroup};


const deleteGlAccountGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountGroupMember method',
  args:{glAccountId: {type: GraphQLString},glAccountGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountGroupMember?glAccountId=${args.glAccountId}glAccountGroupTypeId=${args.glAccountGroupTypeId}`, null, req);
  }
};
export {deleteGlAccountGroupMember};


const deleteGlAccountGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountGroupType method',
  args:{glAccountGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountGroupType?glAccountGroupTypeId=${args.glAccountGroupTypeId}`, null, req);
  }
};
export {deleteGlAccountGroupType};


const deleteGlAccountOrganization = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountOrganization method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountOrganization?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {deleteGlAccountOrganization};


const deleteGlAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountType method',
  args:{glAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlAccountType?glAccountTypeId=${args.glAccountTypeId}`, null, req);
  }
};
export {deleteGlAccountType};


const deleteGlFiscalType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlFiscalType method',
  args:{glFiscalTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlFiscalType?glFiscalTypeId=${args.glFiscalTypeId}`, null, req);
  }
};
export {deleteGlFiscalType};


const deleteGlJournal = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlJournal method',
  args:{glJournalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlJournal?glJournalId=${args.glJournalId}`, null, req);
  }
};
export {deleteGlJournal};


const deleteGlReconciliation = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlReconciliation method',
  args:{glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlReconciliation?glReconciliationId=${args.glReconciliationId}`, null, req);
  }
};
export {deleteGlReconciliation};


const deleteGlReconciliationEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlReconciliationEntry method',
  args:{glReconciliationId: {type: GraphQLString},acctgTransEntrySeqId: {type: GraphQLString},acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlReconciliationEntry?glReconciliationId=${args.glReconciliationId}acctgTransEntrySeqId=${args.acctgTransEntrySeqId}acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {deleteGlReconciliationEntry};


const deleteGlResourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlResourceType method',
  args:{glResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlResourceType?glResourceTypeId=${args.glResourceTypeId}`, null, req);
  }
};
export {deleteGlResourceType};


const deleteGlXbrlClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlXbrlClass method',
  args:{glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteGlXbrlClass?glXbrlClassId=${args.glXbrlClassId}`, null, req);
  }
};
export {deleteGlXbrlClass};


const deletePartyGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyGlAccount method',
  args:{roleTypeId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deletePartyGlAccount?roleTypeId=${args.roleTypeId}glAccountTypeId=${args.glAccountTypeId}organizationPartyId=${args.organizationPartyId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyGlAccount};


const deleteProductAverageCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductAverageCostType method',
  args:{productAverageCostTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteProductAverageCostType?productAverageCostTypeId=${args.productAverageCostTypeId}`, null, req);
  }
};
export {deleteProductAverageCostType};


const deleteSettlementTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSettlementTerm method',
  args:{settlementTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteSettlementTerm?settlementTermId=${args.settlementTermId}`, null, req);
  }
};
export {deleteSettlementTerm};


const deleteVarianceReasonGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVarianceReasonGlAccount method',
  args:{varianceReasonId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/deleteVarianceReasonGlAccount?varianceReasonId=${args.varianceReasonId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {deleteVarianceReasonGlAccount};


const expireGlAccountRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz expireGlAccountRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/expireGlAccountRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}glAccountId=${args.glAccountId}partyId=${args.partyId}`, null, req);
  }
};
export {expireGlAccountRole};


const expireGlBudgetXref = {
  type: GraphQLString,
  description: 'mutation for ofbiz expireGlBudgetXref method',
  args:{fromDate: {type: GraphQLString},glAccountId: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/expireGlBudgetXref?fromDate=${args.fromDate}glAccountId=${args.glAccountId}budgetItemTypeId=${args.budgetItemTypeId}`, null, req);
  }
};
export {expireGlBudgetXref};


const findCustomTimePeriods = {
  type: GraphQLString,
  description: 'mutation for ofbiz findCustomTimePeriods method',
  args:{findDate: {type: GraphQLString},excludeNoOrganizationPeriods: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/findCustomTimePeriods?findDate=${args.findDate}onlyIncludePeriodTypeIdList=${args.onlyIncludePeriodTypeIdList}excludeNoOrganizationPeriods=${args.excludeNoOrganizationPeriods}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {findCustomTimePeriods};


const findLastClosedDate = {
  type: GraphQLString,
  description: 'mutation for ofbiz findLastClosedDate method',
  args:{periodTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},findDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/findLastClosedDate?periodTypeId=${args.periodTypeId}organizationPartyId=${args.organizationPartyId}findDate=${args.findDate}`, null, req);
  }
};
export {findLastClosedDate};


const getAcctgTransEntriesAndTransTotal = {
  type: GraphQLString,
  description: 'mutation for ofbiz getAcctgTransEntriesAndTransTotal method',
  args:{customTimePeriodEndDate: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},customTimePeriodStartDate: {type: GraphQLString},isPosted: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/getAcctgTransEntriesAndTransTotal?customTimePeriodEndDate=${args.customTimePeriodEndDate}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}customTimePeriodStartDate=${args.customTimePeriodStartDate}isPosted=${args.isPosted}`, null, req);
  }
};
export {getAcctgTransEntriesAndTransTotal};


const getGlAccountFromAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz getGlAccountFromAccountType method',
  args:{organizationPartyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},debitCreditFlag: {type: GraphQLString},productId: {type: GraphQLString},acctgTransTypeId: {type: GraphQLString},paymentId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},invoiceId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/getGlAccountFromAccountType?organizationPartyId=${args.organizationPartyId}roleTypeId=${args.roleTypeId}glAccountTypeId=${args.glAccountTypeId}debitCreditFlag=${args.debitCreditFlag}productId=${args.productId}acctgTransTypeId=${args.acctgTransTypeId}paymentId=${args.paymentId}fixedAssetId=${args.fixedAssetId}invoiceId=${args.invoiceId}partyId=${args.partyId}`, null, req);
  }
};
export {getGlAccountFromAccountType};


const getGlAcctgAndAmountPercentage = {
  type: GraphQLString,
  description: 'mutation for ofbiz getGlAcctgAndAmountPercentage method',
  args:{organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/getGlAcctgAndAmountPercentage?organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {getGlAcctgAndAmountPercentage};


const getInventoryItemOwner = {
  type: GraphQLString,
  description: 'mutation for ofbiz getInventoryItemOwner method',
  args:{inventoryItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/getInventoryItemOwner?inventoryItemId=${args.inventoryItemId}`, null, req);
  }
};
export {getInventoryItemOwner};


const getInventoryValuationList = {
  type: GraphQLString,
  description: 'mutation for ofbiz getInventoryValuationList method',
  args:{fromDate: {type: GraphQLString},cogsMethodId: {type: GraphQLString},facilityId: {type: GraphQLString},productCategoryId: {type: GraphQLString},productId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/getInventoryValuationList?fromDate=${args.fromDate}cogsMethodId=${args.cogsMethodId}facilityId=${args.facilityId}productCategoryId=${args.productCategoryId}productId=${args.productId}thruDate=${args.thruDate}`, null, req);
  }
};
export {getInventoryValuationList};


const getPreviousTimePeriod = {
  type: GraphQLString,
  description: 'mutation for ofbiz getPreviousTimePeriod method',
  args:{customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/getPreviousTimePeriod?customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {getPreviousTimePeriod};


const interfaceAcctgTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz interfaceAcctgTrans method',
  args:{acctgTransTypeId: {type: GraphQLString},glFiscalTypeId: {type: GraphQLString},transactionDate: {type: GraphQLString},finAccountTransId: {type: GraphQLString},workEffortId: {type: GraphQLString},theirAcctgTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},description: {type: GraphQLString},glJournalId: {type: GraphQLString},scheduledPostingDate: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},physicalInventoryId: {type: GraphQLString},createdDate: {type: GraphQLString},paymentId: {type: GraphQLString},shipmentId: {type: GraphQLString},voucherDate: {type: GraphQLString},fixedAssetId: {type: GraphQLString},invoiceId: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString},groupStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/interfaceAcctgTrans?acctgTransTypeId=${args.acctgTransTypeId}glFiscalTypeId=${args.glFiscalTypeId}transactionDate=${args.transactionDate}finAccountTransId=${args.finAccountTransId}workEffortId=${args.workEffortId}theirAcctgTransId=${args.theirAcctgTransId}roleTypeId=${args.roleTypeId}lastModifiedDate=${args.lastModifiedDate}description=${args.description}glJournalId=${args.glJournalId}scheduledPostingDate=${args.scheduledPostingDate}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}physicalInventoryId=${args.physicalInventoryId}createdDate=${args.createdDate}paymentId=${args.paymentId}shipmentId=${args.shipmentId}voucherDate=${args.voucherDate}fixedAssetId=${args.fixedAssetId}invoiceId=${args.invoiceId}partyId=${args.partyId}receiptId=${args.receiptId}groupStatusId=${args.groupStatusId}`, null, req);
  }
};
export {interfaceAcctgTrans};


const interfaceAcctgTransEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz interfaceAcctgTransEntry method',
  args:{amount: {type: GraphQLFloat},debitCreditFlag: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},roleTypeId: {type: GraphQLString},theirProductId: {type: GraphQLString},productId: {type: GraphQLString},dueDate: {type: GraphQLString},groupId: {type: GraphQLString},settlementTermId: {type: GraphQLString},description: {type: GraphQLString},theirPartyId: {type: GraphQLString},acctgTransEntryTypeId: {type: GraphQLString},isSummary: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},currencyUomId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},origAmount: {type: GraphQLFloat},taxId: {type: GraphQLString},origCurrencyUomId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/interfaceAcctgTransEntry?amount=${args.amount}debitCreditFlag=${args.debitCreditFlag}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}roleTypeId=${args.roleTypeId}theirProductId=${args.theirProductId}productId=${args.productId}dueDate=${args.dueDate}groupId=${args.groupId}settlementTermId=${args.settlementTermId}description=${args.description}theirPartyId=${args.theirPartyId}acctgTransEntryTypeId=${args.acctgTransEntryTypeId}isSummary=${args.isSummary}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}currencyUomId=${args.currencyUomId}glAccountTypeId=${args.glAccountTypeId}origAmount=${args.origAmount}taxId=${args.taxId}origCurrencyUomId=${args.origCurrencyUomId}partyId=${args.partyId}`, null, req);
  }
};
export {interfaceAcctgTransEntry};


const postAcctgTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz postAcctgTrans method',
  args:{acctgTransId: {type: GraphQLString},verifyOnly: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/postAcctgTrans?acctgTransId=${args.acctgTransId}verifyOnly=${args.verifyOnly}`, null, req);
  }
};
export {postAcctgTrans};


const postGlJournal = {
  type: GraphQLString,
  description: 'mutation for ofbiz postGlJournal method',
  args:{glJournalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/postGlJournal?glJournalId=${args.glJournalId}`, null, req);
  }
};
export {postGlJournal};


const prepareIncomeStatement = {
  type: GraphQLString,
  description: 'mutation for ofbiz prepareIncomeStatement method',
  args:{fromDate: {type: GraphQLString},glFiscalTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/prepareIncomeStatement?fromDate=${args.fromDate}glFiscalTypeId=${args.glFiscalTypeId}organizationPartyId=${args.organizationPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {prepareIncomeStatement};


const quickCreateAcctgTransAndEntries = {
  type: GraphQLString,
  description: 'mutation for ofbiz quickCreateAcctgTransAndEntries method',
  args:{creditGlAccountId: {type: GraphQLString},amount: {type: GraphQLFloat},debitGlAccountId: {type: GraphQLString},workEffortId: {type: GraphQLString},theirAcctgTransId: {type: GraphQLString},dueDate: {type: GraphQLString},groupId: {type: GraphQLString},description: {type: GraphQLString},theirPartyId: {type: GraphQLString},acctgTransEntryTypeId: {type: GraphQLString},postedDate: {type: GraphQLString},physicalInventoryId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},isPosted: {type: GraphQLString},origAmount: {type: GraphQLFloat},paymentId: {type: GraphQLString},voucherDate: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},finAccountTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},theirProductId: {type: GraphQLString},productId: {type: GraphQLString},acctgTransTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},glFiscalTypeId: {type: GraphQLString},settlementTermId: {type: GraphQLString},reconcileStatusId: {type: GraphQLString},glJournalId: {type: GraphQLString},isSummary: {type: GraphQLString},transactionDate: {type: GraphQLString},scheduledPostingDate: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},createdDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},shipmentId: {type: GraphQLString},taxId: {type: GraphQLString},origCurrencyUomId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},invoiceId: {type: GraphQLString},groupStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/quickCreateAcctgTransAndEntries?creditGlAccountId=${args.creditGlAccountId}amount=${args.amount}debitGlAccountId=${args.debitGlAccountId}workEffortId=${args.workEffortId}theirAcctgTransId=${args.theirAcctgTransId}dueDate=${args.dueDate}groupId=${args.groupId}description=${args.description}theirPartyId=${args.theirPartyId}acctgTransEntryTypeId=${args.acctgTransEntryTypeId}postedDate=${args.postedDate}physicalInventoryId=${args.physicalInventoryId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}isPosted=${args.isPosted}origAmount=${args.origAmount}paymentId=${args.paymentId}voucherDate=${args.voucherDate}partyId=${args.partyId}receiptId=${args.receiptId}createdByUserLogin=${args.createdByUserLogin}finAccountTransId=${args.finAccountTransId}roleTypeId=${args.roleTypeId}theirProductId=${args.theirProductId}productId=${args.productId}acctgTransTypeId=${args.acctgTransTypeId}lastModifiedDate=${args.lastModifiedDate}glFiscalTypeId=${args.glFiscalTypeId}settlementTermId=${args.settlementTermId}reconcileStatusId=${args.reconcileStatusId}glJournalId=${args.glJournalId}isSummary=${args.isSummary}transactionDate=${args.transactionDate}scheduledPostingDate=${args.scheduledPostingDate}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}createdDate=${args.createdDate}currencyUomId=${args.currencyUomId}glAccountTypeId=${args.glAccountTypeId}shipmentId=${args.shipmentId}taxId=${args.taxId}origCurrencyUomId=${args.origCurrencyUomId}fixedAssetId=${args.fixedAssetId}organizationPartyId=${args.organizationPartyId}invoiceId=${args.invoiceId}groupStatusId=${args.groupStatusId}`, null, req);
  }
};
export {quickCreateAcctgTransAndEntries};


const removeAcctgTransType = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeAcctgTransType method',
  args:{acctgTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/removeAcctgTransType?acctgTransTypeId=${args.acctgTransTypeId}`, null, req);
  }
};
export {removeAcctgTransType};


const revertAcctgTransOnCancelInvoice = {
  type: GraphQLString,
  description: 'mutation for ofbiz revertAcctgTransOnCancelInvoice method',
  args:{invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/revertAcctgTransOnCancelInvoice?invoiceId=${args.invoiceId}`, null, req);
  }
};
export {revertAcctgTransOnCancelInvoice};


const revertAcctgTransOnRemovePaymentApplications = {
  type: GraphQLString,
  description: 'mutation for ofbiz revertAcctgTransOnRemovePaymentApplications method',
  args:{paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/revertAcctgTransOnRemovePaymentApplications?paymentApplicationId=${args.paymentApplicationId}`, null, req);
  }
};
export {revertAcctgTransOnRemovePaymentApplications};


const setGlReconciliationStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz setGlReconciliationStatus method',
  args:{statusId: {type: GraphQLString},glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/setGlReconciliationStatus?statusId=${args.statusId}glReconciliationId=${args.glReconciliationId}`, null, req);
  }
};
export {setGlReconciliationStatus};


const updateAcctgTrans = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTrans method',
  args:{acctgTransId: {type: GraphQLString},workEffortId: {type: GraphQLString},theirAcctgTransId: {type: GraphQLString},description: {type: GraphQLString},postedDate: {type: GraphQLString},physicalInventoryId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},isPosted: {type: GraphQLString},paymentId: {type: GraphQLString},voucherDate: {type: GraphQLString},partyId: {type: GraphQLString},receiptId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},finAccountTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},acctgTransTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},glFiscalTypeId: {type: GraphQLString},glJournalId: {type: GraphQLString},transactionDate: {type: GraphQLString},scheduledPostingDate: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},createdDate: {type: GraphQLString},shipmentId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},invoiceId: {type: GraphQLString},groupStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateAcctgTrans?acctgTransId=${args.acctgTransId}workEffortId=${args.workEffortId}theirAcctgTransId=${args.theirAcctgTransId}description=${args.description}postedDate=${args.postedDate}physicalInventoryId=${args.physicalInventoryId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}isPosted=${args.isPosted}paymentId=${args.paymentId}voucherDate=${args.voucherDate}partyId=${args.partyId}receiptId=${args.receiptId}createdByUserLogin=${args.createdByUserLogin}finAccountTransId=${args.finAccountTransId}roleTypeId=${args.roleTypeId}acctgTransTypeId=${args.acctgTransTypeId}lastModifiedDate=${args.lastModifiedDate}glFiscalTypeId=${args.glFiscalTypeId}glJournalId=${args.glJournalId}transactionDate=${args.transactionDate}scheduledPostingDate=${args.scheduledPostingDate}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}createdDate=${args.createdDate}shipmentId=${args.shipmentId}fixedAssetId=${args.fixedAssetId}invoiceId=${args.invoiceId}groupStatusId=${args.groupStatusId}`, null, req);
  }
};
export {updateAcctgTrans};


const updateAcctgTransAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransAttribute method',
  args:{acctgTransId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateAcctgTransAttribute?acctgTransId=${args.acctgTransId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateAcctgTransAttribute};


const updateAcctgTransEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransEntry method',
  args:{acctgTransEntrySeqId: {type: GraphQLString},acctgTransId: {type: GraphQLString},roleTypeId: {type: GraphQLString},theirProductId: {type: GraphQLString},amount: {type: GraphQLFloat},productId: {type: GraphQLString},dueDate: {type: GraphQLString},groupId: {type: GraphQLString},settlementTermId: {type: GraphQLString},glAccountId: {type: GraphQLString},description: {type: GraphQLString},theirPartyId: {type: GraphQLString},reconcileStatusId: {type: GraphQLString},acctgTransEntryTypeId: {type: GraphQLString},isSummary: {type: GraphQLString},voucherRef: {type: GraphQLString},inventoryItemId: {type: GraphQLString},currencyUomId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},origAmount: {type: GraphQLFloat},debitCreditFlag: {type: GraphQLString},taxId: {type: GraphQLString},origCurrencyUomId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateAcctgTransEntry?acctgTransEntrySeqId=${args.acctgTransEntrySeqId}acctgTransId=${args.acctgTransId}roleTypeId=${args.roleTypeId}theirProductId=${args.theirProductId}amount=${args.amount}productId=${args.productId}dueDate=${args.dueDate}groupId=${args.groupId}settlementTermId=${args.settlementTermId}glAccountId=${args.glAccountId}description=${args.description}theirPartyId=${args.theirPartyId}reconcileStatusId=${args.reconcileStatusId}acctgTransEntryTypeId=${args.acctgTransEntryTypeId}isSummary=${args.isSummary}voucherRef=${args.voucherRef}inventoryItemId=${args.inventoryItemId}currencyUomId=${args.currencyUomId}glAccountTypeId=${args.glAccountTypeId}origAmount=${args.origAmount}debitCreditFlag=${args.debitCreditFlag}taxId=${args.taxId}origCurrencyUomId=${args.origCurrencyUomId}organizationPartyId=${args.organizationPartyId}partyId=${args.partyId}`, null, req);
  }
};
export {updateAcctgTransEntry};


const updateAcctgTransEntryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransEntryType method',
  args:{acctgTransEntryTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateAcctgTransEntryType?acctgTransEntryTypeId=${args.acctgTransEntryTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateAcctgTransEntryType};


const updateAcctgTransType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransType method',
  args:{acctgTransTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateAcctgTransType?acctgTransTypeId=${args.acctgTransTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateAcctgTransType};


const updateAcctgTransTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransTypeAttr method',
  args:{acctgTransTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateAcctgTransTypeAttr?acctgTransTypeId=${args.acctgTransTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateAcctgTransTypeAttr};


const updateFinAccountTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountTypeGlAccount method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateFinAccountTypeGlAccount?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}finAccountTypeId=${args.finAccountTypeId}`, null, req);
  }
};
export {updateFinAccountTypeGlAccount};


const updateGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccount method',
  args:{glAccountId: {type: GraphQLString},accountCode: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glResourceTypeId: {type: GraphQLString},productId: {type: GraphQLString},parentGlAccountId: {type: GraphQLString},accountName: {type: GraphQLString},glAccountClassId: {type: GraphQLString},description: {type: GraphQLString},externalId: {type: GraphQLString},glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccount?glAccountId=${args.glAccountId}accountCode=${args.accountCode}glAccountTypeId=${args.glAccountTypeId}glResourceTypeId=${args.glResourceTypeId}productId=${args.productId}parentGlAccountId=${args.parentGlAccountId}accountName=${args.accountName}glAccountClassId=${args.glAccountClassId}description=${args.description}externalId=${args.externalId}glXbrlClassId=${args.glXbrlClassId}`, null, req);
  }
};
export {updateGlAccount};


const updateGlAccountCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountCategory method',
  args:{glAccountCategoryId: {type: GraphQLString},glAccountCategoryTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountCategory?glAccountCategoryId=${args.glAccountCategoryId}glAccountCategoryTypeId=${args.glAccountCategoryTypeId}description=${args.description}`, null, req);
  }
};
export {updateGlAccountCategory};


const updateGlAccountCategoryMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountCategoryMember method',
  args:{fromDate: {type: GraphQLString},glAccountId: {type: GraphQLString},glAccountCategoryId: {type: GraphQLString},amountPercentage: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountCategoryMember?fromDate=${args.fromDate}glAccountId=${args.glAccountId}glAccountCategoryId=${args.glAccountCategoryId}amountPercentage=${args.amountPercentage}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateGlAccountCategoryMember};


const updateGlAccountCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountCategoryType method',
  args:{glAccountCategoryTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountCategoryType?glAccountCategoryTypeId=${args.glAccountCategoryTypeId}description=${args.description}`, null, req);
  }
};
export {updateGlAccountCategoryType};


const updateGlAccountClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountClass method',
  args:{glAccountClassId: {type: GraphQLString},parentClassId: {type: GraphQLString},description: {type: GraphQLString},isAssetClass: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountClass?glAccountClassId=${args.glAccountClassId}parentClassId=${args.parentClassId}description=${args.description}isAssetClass=${args.isAssetClass}`, null, req);
  }
};
export {updateGlAccountClass};


const updateGlAccountGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountGroup method',
  args:{glAccountGroupId: {type: GraphQLString},glAccountGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountGroup?glAccountGroupId=${args.glAccountGroupId}glAccountGroupTypeId=${args.glAccountGroupTypeId}description=${args.description}`, null, req);
  }
};
export {updateGlAccountGroup};


const updateGlAccountGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountGroupMember method',
  args:{glAccountId: {type: GraphQLString},glAccountGroupTypeId: {type: GraphQLString},glAccountGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountGroupMember?glAccountId=${args.glAccountId}glAccountGroupTypeId=${args.glAccountGroupTypeId}glAccountGroupId=${args.glAccountGroupId}`, null, req);
  }
};
export {updateGlAccountGroupMember};


const updateGlAccountGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountGroupType method',
  args:{glAccountGroupTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountGroupType?glAccountGroupTypeId=${args.glAccountGroupTypeId}description=${args.description}`, null, req);
  }
};
export {updateGlAccountGroupType};


const updateGlAccountOrganization = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountOrganization method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountOrganization?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateGlAccountOrganization};


const updateGlAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountType method',
  args:{glAccountTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlAccountType?glAccountTypeId=${args.glAccountTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateGlAccountType};


const updateGlBudgetXref = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlBudgetXref method',
  args:{fromDate: {type: GraphQLString},glAccountId: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString},allocationPercentage: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlBudgetXref?fromDate=${args.fromDate}glAccountId=${args.glAccountId}budgetItemTypeId=${args.budgetItemTypeId}allocationPercentage=${args.allocationPercentage}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateGlBudgetXref};


const updateGlFiscalType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlFiscalType method',
  args:{glFiscalTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlFiscalType?glFiscalTypeId=${args.glFiscalTypeId}description=${args.description}`, null, req);
  }
};
export {updateGlFiscalType};


const updateGlJournal = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlJournal method',
  args:{glJournalId: {type: GraphQLString},glJournalName: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlJournal?glJournalId=${args.glJournalId}glJournalName=${args.glJournalName}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {updateGlJournal};


const updateGlReconciliation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlReconciliation method',
  args:{glReconciliationId: {type: GraphQLString},createdDate: {type: GraphQLString},reconciledBalance: {type: GraphQLFloat},statusId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},glAccountId: {type: GraphQLString},glReconciliationName: {type: GraphQLString},description: {type: GraphQLString},organizationPartyId: {type: GraphQLString},reconciledDate: {type: GraphQLString},openingBalance: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlReconciliation?glReconciliationId=${args.glReconciliationId}createdDate=${args.createdDate}reconciledBalance=${args.reconciledBalance}statusId=${args.statusId}lastModifiedDate=${args.lastModifiedDate}glAccountId=${args.glAccountId}glReconciliationName=${args.glReconciliationName}description=${args.description}organizationPartyId=${args.organizationPartyId}reconciledDate=${args.reconciledDate}openingBalance=${args.openingBalance}`, null, req);
  }
};
export {updateGlReconciliation};


const updateGlReconciliationEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlReconciliationEntry method',
  args:{glReconciliationId: {type: GraphQLString},reconciledAmount: {type: GraphQLFloat},acctgTransEntrySeqId: {type: GraphQLString},acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlReconciliationEntry?glReconciliationId=${args.glReconciliationId}reconciledAmount=${args.reconciledAmount}acctgTransEntrySeqId=${args.acctgTransEntrySeqId}acctgTransId=${args.acctgTransId}`, null, req);
  }
};
export {updateGlReconciliationEntry};


const updateGlResourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlResourceType method',
  args:{glResourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlResourceType?glResourceTypeId=${args.glResourceTypeId}description=${args.description}`, null, req);
  }
};
export {updateGlResourceType};


const updateGlXbrlClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlXbrlClass method',
  args:{glXbrlClassId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateGlXbrlClass?glXbrlClassId=${args.glXbrlClassId}description=${args.description}`, null, req);
  }
};
export {updateGlXbrlClass};


const updatePartyGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyGlAccount method',
  args:{roleTypeId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updatePartyGlAccount?roleTypeId=${args.roleTypeId}glAccountTypeId=${args.glAccountTypeId}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}partyId=${args.partyId}`, null, req);
  }
};
export {updatePartyGlAccount};


const updateProductAverageCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductAverageCostType method',
  args:{productAverageCostTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateProductAverageCostType?productAverageCostTypeId=${args.productAverageCostTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateProductAverageCostType};


const updateSettlementTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSettlementTerm method',
  args:{settlementTermId: {type: GraphQLString},uomId: {type: GraphQLString},termName: {type: GraphQLString},termValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateSettlementTerm?settlementTermId=${args.settlementTermId}uomId=${args.uomId}termName=${args.termName}termValue=${args.termValue}`, null, req);
  }
};
export {updateSettlementTerm};


const updateVarianceReasonGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVarianceReasonGlAccount method',
  args:{varianceReasonId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingLedger/updateVarianceReasonGlAccount?varianceReasonId=${args.varianceReasonId}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {updateVarianceReasonGlAccount};
