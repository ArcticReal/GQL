
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

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';
import {InvoiceType} from '../accounting/Invoice.js';
import {AgreementRoleType} from '../party/AgreementRole.js';
import {RateAmountType} from '../accounting/RateAmount.js';
import {CarrierShipmentBoxTypeType} from '../shipment/CarrierShipmentBoxType.js';
import {ProductType} from '../product/Product.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {TimesheetRoleType} from '../workeffort/TimesheetRole.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimate.js';
import {AffiliateType} from '../party/Affiliate.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccount.js';
import {ContentApprovalType} from '../content/ContentApproval.js';
import {FixedAssetRegistrationType} from '../accounting/FixedAssetRegistration.js';
import {GlAccountTypeDefaultType} from '../accounting/GlAccountTypeDefault.js';
import {WorkEffortEventReminderType} from '../workeffort/WorkEffortEventReminder.js';
import {SubscriptionType} from '../product/Subscription.js';
import {ProductPromoUseType} from '../product/ProductPromoUse.js';
import {PartyIcsAvsOverrideType} from '../party/PartyIcsAvsOverride.js';
import {PayrollPreferenceType} from '../humanres/PayrollPreference.js';
import {PartyNoteType} from '../party/PartyNote.js';
import {InvoiceRoleType} from '../accounting/InvoiceRole.js';
import {PartyNameHistoryType} from '../party/PartyNameHistory.js';
import {CustRequestType} from '../order/CustRequest.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccount.js';
import {ProductStoreVendorPaymentType} from '../product/ProductStoreVendorPayment.js';
import {TimesheetType} from '../workeffort/Timesheet.js';
import {ProductStoreVendorShipmentType} from '../product/ProductStoreVendorShipment.js';
import {ContentRevisionType} from '../content/ContentRevision.js';
import {OrderItemRoleType} from '../order/OrderItemRole.js';
import {FinAccountType} from '../accounting/FinAccount.js';
import {PerformanceNoteType} from '../humanres/PerformanceNote.js';
import {PartyRateType} from '../accounting/PartyRate.js';
import {PersonType} from '../party/Person.js';
import {TaxAuthorityType} from '../accounting/TaxAuthority.js';
import {PartyContactMechType} from '../party/PartyContactMech.js';
import {PartyClassificationType} from '../party/PartyClassification.js';
import {PartyGroupType} from '../party/PartyGroup.js';
import {OldPartyTaxInfoType} from '../party/OldPartyTaxInfo.js';
import {SupplierProductType} from '../product/SupplierProduct.js';
import {PartyProfileDefaultType} from '../party/PartyProfileDefault.js';
import {GlAccountHistoryType} from '../accounting/GlAccountHistory.js';
import {PaymentGlAccountTypeMapType} from '../accounting/PaymentGlAccountTypeMap.js';
import {PartyTaxAuthInfoType} from '../accounting/PartyTaxAuthInfo.js';
import {PartyInvitationType} from '../party/PartyInvitation.js';
import {PartyInvitationGroupAssocType} from '../party/PartyInvitationGroupAssoc.js';
import {FinAccountTypeGlAccountType} from '../accounting/FinAccountTypeGlAccount.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {PerfReviewType} from '../humanres/PerfReview.js';
import {JobInterviewType} from '../humanres/JobInterview.js';
import {ContactListType} from '../marketing/ContactList.js';
import {ContactListPartyType} from '../marketing/ContactListParty.js';
import {PersonTrainingType} from '../humanres/PersonTraining.js';
import {PartyIdentificationType} from '../party/PartyIdentification.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRole.js';
import {PartyAcctgPreferenceType} from '../accounting/PartyAcctgPreference.js';
import {BudgetReviewType} from '../accounting/BudgetReview.js';
import {PartyCarrierAccountType} from '../party/PartyCarrierAccount.js';
import {TaxAuthorityGlAccountType} from '../accounting/TaxAuthorityGlAccount.js';
import {PerfReviewItemType} from '../humanres/PerfReviewItem.js';
import {FacilityType} from '../product/Facility.js';
import {RequirementRoleType} from '../order/RequirementRole.js';
import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {PartyNeedType} from '../party/PartyNeed.js';
import {PartyStatusType} from '../party/PartyStatus.js';
import {ReorderGuidelineType} from '../product/ReorderGuideline.js';
import {GlReconciliationType} from '../accounting/GlReconciliation.js';
import {PartySkillType} from '../humanres/PartySkill.js';
import {PartyContentType} from '../party/PartyContent.js';
import {PartyContactMechPurposeType} from '../party/PartyContactMechPurpose.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {InvoiceItemTypeGlAccountType} from '../accounting/InvoiceItemTypeGlAccount.js';
import {ItemIssuanceRoleType} from '../shipment/ItemIssuanceRole.js';
import {VarianceReasonGlAccountType} from '../accounting/VarianceReasonGlAccount.js';
import {UserLoginType} from '../login/UserLogin.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillment.js';
import {VendorProductType} from '../product/VendorProduct.js';
import {PartyRoleType} from '../party/PartyRole.js';
import {PartyGeoPointType} from '../party/PartyGeoPoint.js';
import {ProductAverageCostType} from '../accounting/ProductAverageCost.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethod.js';
import {EmplPositionType} from '../humanres/EmplPosition.js';
import {FixedAssetTypeGlAccountType} from '../accounting/FixedAssetTypeGlAccount.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {EmplPositionFulfillmentType} from '../humanres/EmplPositionFulfillment.js';
import {SalesForecastType} from '../marketing/SalesForecast.js';
import {PaymentType} from '../accounting/Payment.js';
import {FacilityPartyType} from '../product/FacilityParty.js';
import {PartyBenefitType} from '../humanres/PartyBenefit.js';
import {TimeEntryType} from '../workeffort/TimeEntry.js';
import {SalesForecastHistoryType} from '../marketing/SalesForecastHistory.js';
import {CustRequestPartyType} from '../order/CustRequestParty.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {InventoryItemType} from '../product/InventoryItem.js';
import {PartyResumeType} from '../humanres/PartyResume.js';
import {BillingAccountRoleType} from '../accounting/BillingAccountRole.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatus.js';
import {CostComponentType} from '../product/CostComponent.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {PartyQualType} from '../humanres/PartyQual.js';
import {EmploymentAppType} from '../humanres/EmploymentApp.js';
import {ProductPriceType} from '../product/ProductPrice.js';
import {BudgetRoleType} from '../accounting/BudgetRole.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipment.js';
import {AgreementPartyApplicType} from '../party/AgreementPartyApplic.js';
import {EmploymentType} from '../humanres/Employment.js';
import {PartyAttributeType} from '../party/PartyAttribute.js';
import {WebUserPreferenceType} from '../content/WebUserPreference.js';
import {ProductPromoCodePartyType} from '../product/ProductPromoCodeParty.js';
import {PartyTypeType} from '../party/PartyType.js';
import {OrderRoleType} from '../order/OrderRole.js';
import {ShipmentReceiptRoleType} from '../shipment/ShipmentReceiptRole.js';
import {GlJournalType} from '../accounting/GlJournal.js';
import {EmplLeaveType} from '../humanres/EmplLeave.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntry.js';
import {GlAccountOrganizationType} from '../accounting/GlAccountOrganization.js';
import {RespondingPartyType} from '../order/RespondingParty.js';
import {VendorType} from '../party/Vendor.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {ProductGlAccountType} from '../product/ProductGlAccount.js';
import {CustRequestTypeType} from '../order/CustRequestType.js';
import {ProductPromoType} from '../product/ProductPromo.js';
import {QuoteType} from '../order/Quote.js';
import {PaymentMethodTypeGlAccountType} from '../accounting/PaymentMethodTypeGlAccount.js';
import {PartyDataSourceType} from '../party/PartyDataSource.js';
import {QuoteRoleType} from '../order/QuoteRole.js';


const PartyType = new GraphQLObjectType({
  name: 'PartyType',
  description: 'Type for Party in party',

  fields: () => ({
    partyType: {
      type: PartyTypeType,
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbiz.load(`party/party/partyTypes/find?partyTypeId=${party.partyTypeId}`)
    },
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${party.lastModifiedByUserLogin}`)
    },
    dataSourceId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    preferredCurrencyUomId: {type: GraphQLString},
    externalId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyId: {type: GraphQLString},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${party.createdByUserLogin}`)
    },
    isUnread: {type: GraphQLBoolean},
    paymentMethodTypeGlAccounts: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/paymentMethodTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?partyId=${party.partyId}`)
    },
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStores/find?partyId=${party.partyId}`)
    },
    budgetRoles: {
      type: new GraphQLList(BudgetRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetRoles/find?partyId=${party.partyId}`)
    },
    finAccountTypeGlAccounts: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTranss/find?partyId=${party.partyId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?partyId=${party.partyId}`)
    },
    webUserPreferences: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`content/webUserPreferences/find?partyId=${party.partyId}`)
    },
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityCarrierShipments/find?partyId=${party.partyId}`)
    },
    vendors: {
      type: new GraphQLList(VendorType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/vendors/find?partyId=${party.partyId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/custRequests/find?partyId=${party.partyId}`)
    },
    glAccountOrganizations: {
      type: new GraphQLList(GlAccountOrganizationType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountOrganizations/find?partyId=${party.partyId}`)
    },
    invoiceItemTypeGlAccounts: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    salesForecasts: {
      type: new GraphQLList(SalesForecastType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecasts/find?partyId=${party.partyId}`)
    },
    persons: {
      type: new GraphQLList(PersonType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/persons/find?partyId=${party.partyId}`)
    },
    perfReviewItems: {
      type: new GraphQLList(PerfReviewItemType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReview/perfReviewItems/find?partyId=${party.partyId}`)
    },
    emplLeaves: {
      type: new GraphQLList(EmplLeaveType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplLeaves/find?partyId=${party.partyId}`)
    },
    partyQuals: {
      type: new GraphQLList(PartyQualType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyQuals/find?partyId=${party.partyId}`)
    },
    paymentGlAccountTypeMaps: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/paymentGlAccountTypeMaps/find?partyId=${party.partyId}`)
    },
    performanceNotes: {
      type: new GraphQLList(PerformanceNoteType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/performanceNotes/find?partyId=${party.partyId}`)
    },
    timesheets: {
      type: new GraphQLList(TimesheetType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timesheets/find?partyId=${party.partyId}`)
    },
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItems/find?partyId=${party.partyId}`)
    },
    invoiceRoles: {
      type: new GraphQLList(InvoiceRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceRoles/find?partyId=${party.partyId}`)
    },
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/rateAmounts/find?partyId=${party.partyId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryGlAccounts/find?partyId=${party.partyId}`)
    },
    salesForecastHistories: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesForecast/salesForecastHistorys/find?partyId=${party.partyId}`)
    },
    partyInvitations: {
      type: new GraphQLList(PartyInvitationType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyInvitations/find?partyId=${party.partyId}`)
    },
    timesheetRoles: {
      type: new GraphQLList(TimesheetRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timesheet/timesheetRoles/find?partyId=${party.partyId}`)
    },
    employments: {
      type: new GraphQLList(EmploymentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/employments/find?partyId=${party.partyId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityPartys/find?partyId=${party.partyId}`)
    },
    itemIssuanceRoles: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuance/itemIssuanceRoles/find?partyId=${party.partyId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?partyId=${party.partyId}`)
    },
    carrierShipmentBoxTypes: {
      type: new GraphQLList(CarrierShipmentBoxTypeType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/carrierShipmentBoxTypes/find?partyId=${party.partyId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoices/find?partyId=${party.partyId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?partyId=${party.partyId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/partyGlAccounts/find?partyId=${party.partyId}`)
    },
    partyDataSources: {
      type: new GraphQLList(PartyDataSourceType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyDataSources/find?partyId=${party.partyId}`)
    },
    partyGeoPoints: {
      type: new GraphQLList(PartyGeoPointType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyGeoPoints/find?partyId=${party.partyId}`)
    },
    glJournals: {
      type: new GraphQLList(GlJournalType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glJournals/find?partyId=${party.partyId}`)
    },
    partyIdentifications: {
      type: new GraphQLList(PartyIdentificationType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyIdentifications/find?partyId=${party.partyId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemRoles/find?partyId=${party.partyId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/shoppingLists/find?partyId=${party.partyId}`)
    },
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/productAverageCosts/find?partyId=${party.partyId}`)
    },
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/supplierProducts/find?partyId=${party.partyId}`)
    },
    fixedAssetRegistrations: {
      type: new GraphQLList(FixedAssetRegistrationType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetRegistrations/find?partyId=${party.partyId}`)
    },
    partyProfileDefaults: {
      type: new GraphQLList(PartyProfileDefaultType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyProfileDefaults/find?partyId=${party.partyId}`)
    },
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/personTrainings/find?partyId=${party.partyId}`)
    },
    carrierShipmentMethods: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/carrierShipmentMethods/find?partyId=${party.partyId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListCommStatuss/find?partyId=${party.partyId}`)
    },
    agreementRoles: {
      type: new GraphQLList(AgreementRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementRoles/find?partyId=${party.partyId}`)
    },
    partyStatuses: {
      type: new GraphQLList(PartyStatusType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyStatuss/find?partyId=${party.partyId}`)
    },
    productPromos: {
      type: new GraphQLList(ProductPromoType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromos/find?partyId=${party.partyId}`)
    },
    partyTaxAuthInfos: {
      type: new GraphQLList(PartyTaxAuthInfoType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyTaxAuthInfos/find?partyId=${party.partyId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventRoles/find?partyId=${party.partyId}`)
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/facilitys/find?partyId=${party.partyId}`)
    },
    budgetReviews: {
      type: new GraphQLList(BudgetReviewType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetReviews/find?partyId=${party.partyId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?partyId=${party.partyId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?partyId=${party.partyId}`)
    },
    perfReviews: {
      type: new GraphQLList(PerfReviewType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReviews/find?partyId=${party.partyId}`)
    },
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timeEntrys/find?partyId=${party.partyId}`)
    },
    partyBenefits: {
      type: new GraphQLList(PartyBenefitType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyBenefits/find?partyId=${party.partyId}`)
    },
    billingAccountRoles: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccount/billingAccountRoles/find?partyId=${party.partyId}`)
    },
    contactListParties: {
      type: new GraphQLList(ContactListPartyType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListPartys/find?partyId=${party.partyId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?partyId=${party.partyId}`)
    },
    partyResumes: {
      type: new GraphQLList(PartyResumeType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyResumes/find?partyId=${party.partyId}`)
    },
    partyAttributes: {
      type: new GraphQLList(PartyAttributeType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyAttributes/find?partyId=${party.partyId}`)
    },
    partyInvitationGroupAssocs: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyInvitationGroupAssocs/find?partyId=${party.partyId}`)
    },
    glReconciliations: {
      type: new GraphQLList(GlReconciliationType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glReconciliations/find?partyId=${party.partyId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccounts/find?partyId=${party.partyId}`)
    },
    partyClassifications: {
      type: new GraphQLList(PartyClassificationType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyClassifications/find?partyId=${party.partyId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?partyId=${party.partyId}`)
    },
    glAccountTypeDefaults: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountTypeDefaults/find?partyId=${party.partyId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechs/find?partyId=${party.partyId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoUses/find?partyId=${party.partyId}`)
    },
    partySkills: {
      type: new GraphQLList(PartySkillType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/partySkills/find?partyId=${party.partyId}`)
    },
    jobInterviews: {
      type: new GraphQLList(JobInterviewType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/jobInterviews/find?partyId=${party.partyId}`)
    },
    partyContents: {
      type: new GraphQLList(PartyContentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyContents/find?partyId=${party.partyId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPrices/find?partyId=${party.partyId}`)
    },
    partyContactMechPurposes: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechPurposes/find?partyId=${party.partyId}`)
    },
    partyNotes: {
      type: new GraphQLList(PartyNoteType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNotes/find?partyId=${party.partyId}`)
    },
    workEffortEventReminders: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortEventReminders/find?partyId=${party.partyId}`)
    },
    varianceReasonGlAccounts: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/varianceReasonGlAccounts/find?partyId=${party.partyId}`)
    },
    contentRevisions: {
      type: new GraphQLList(ContentRevisionType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentRevisions/find?partyId=${party.partyId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/costComponents/find?partyId=${party.partyId}`)
    },
    respondingParties: {
      type: new GraphQLList(RespondingPartyType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/respondingPartys/find?partyId=${party.partyId}`)
    },
    custRequestTypes: {
      type: new GraphQLList(CustRequestTypeType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestTypes/find?partyId=${party.partyId}`)
    },
    partyCarrierAccounts: {
      type: new GraphQLList(PartyCarrierAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyCarrierAccounts/find?partyId=${party.partyId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?partyId=${party.partyId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?partyId=${party.partyId}`)
    },
    partyRoles: {
      type: new GraphQLList(PartyRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRoles/find?partyId=${party.partyId}`)
    },
    emplPositionFulfillments: {
      type: new GraphQLList(EmplPositionFulfillmentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionFulfillments/find?partyId=${party.partyId}`)
    },
    agreementPartyApplics: {
      type: new GraphQLList(AgreementPartyApplicType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementPartyApplics/find?partyId=${party.partyId}`)
    },
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentCostEstimates/find?partyId=${party.partyId}`)
    },
    partyIcsAvsOverrides: {
      type: new GraphQLList(PartyIcsAvsOverrideType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyIcsAvsOverrides/find?partyId=${party.partyId}`)
    },
    employmentApps: {
      type: new GraphQLList(EmploymentAppType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/employment/employmentApps/find?partyId=${party.partyId}`)
    },
    productStoreVendorPayments: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreVendorPayments/find?partyId=${party.partyId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`/products/find?partyId=${party.partyId}`)
    },
    payrollPreferences: {
      type: new GraphQLList(PayrollPreferenceType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/payrollPreferences/find?partyId=${party.partyId}`)
    },
    contentApprovals: {
      type: new GraphQLList(ContentApprovalType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentApprovals/find?partyId=${party.partyId}`)
    },
    partyGroups: {
      type: new GraphQLList(PartyGroupType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyGroups/find?partyId=${party.partyId}`)
    },
    quotes: {
      type: new GraphQLList(QuoteType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/quotes/find?partyId=${party.partyId}`)
    },
    requirementRoles: {
      type: new GraphQLList(RequirementRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementRoles/find?partyId=${party.partyId}`)
    },
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactLists/find?partyId=${party.partyId}`)
    },
    vendorProducts: {
      type: new GraphQLList(VendorProductType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/vendorProducts/find?partyId=${party.partyId}`)
    },
    paymentMethods: {
      type: new GraphQLList(PaymentMethodType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentMethods/find?partyId=${party.partyId}`)
    },
    productStoreVendorShipments: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreVendorShipments/find?partyId=${party.partyId}`)
    },
    custRequestParties: {
      type: new GraphQLList(CustRequestPartyType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestPartys/find?partyId=${party.partyId}`)
    },
    productPromoCodeParties: {
      type: new GraphQLList(ProductPromoCodePartyType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoCodePartys/find?partyId=${party.partyId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?partyId=${party.partyId}`)
    },
    fixedAssetTypeGlAccounts: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    partyNameHistories: {
      type: new GraphQLList(PartyNameHistoryType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNameHistorys/find?partyId=${party.partyId}`)
    },
    oldPartyTaxInfos: {
      type: new GraphQLList(OldPartyTaxInfoType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/party/oldPartyTaxInfos/find?partyId=${party.partyId}`)
    },
    partyAcctgPreferences: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyAcctgPreferences/find?partyId=${party.partyId}`)
    },
    taxAuthorityGlAccounts: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/taxAuthorityGlAccounts/find?partyId=${party.partyId}`)
    },
    emplPositions: {
      type: new GraphQLList(EmplPositionType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPositions/find?partyId=${party.partyId}`)
    },
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCard/giftCardFulfillments/find?partyId=${party.partyId}`)
    },
    taxAuthorities: {
      type: new GraphQLList(TaxAuthorityType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthoritys/find?partyId=${party.partyId}`)
    },
    reorderGuidelines: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/reorderGuidelines/find?partyId=${party.partyId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`product/product/productGlAccounts/find?partyId=${party.partyId}`)
    },
    shipmentReceiptRoles: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceiptRoles/find?partyId=${party.partyId}`)
    },
    affiliates: {
      type: new GraphQLList(AffiliateType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`party/affiliates/find?partyId=${party.partyId}`)
    },
    glAccountHistories: {
      type: new GraphQLList(GlAccountHistoryType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountHistorys/find?partyId=${party.partyId}`)
    },
    partyRates: {
      type: new GraphQLList(PartyRateType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyRates/find?partyId=${party.partyId}`)
    },
    orderRoles: {
      type: new GraphQLList(OrderRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/orderRoles/find?partyId=${party.partyId}`)
    },
    quoteRoles: {
      type: new GraphQLList(QuoteRoleType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteRoles/find?partyId=${party.partyId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?partyId=${party.partyId}`)
    }
  })
});

export {PartyType};
    




const PartyInputType = new GraphQLInputObjectType({
  name: 'PartyInputType',
  description: 'input type for Party',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    description: {type: GraphQLString},
    externalId: {type: GraphQLString},
    isUnread: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyTypeId: {type: GraphQLString},
    preferredCurrencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {PartyInputType};
    