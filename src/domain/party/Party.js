
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
      resolve: (party, args, {loaders}) => loaders.ofbiz.load(`partyTypes/find?partyTypeId=${party.partyTypeId}`)
    },
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${party.lastModifiedByUserLogin}`)
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
      resolve: (party, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${party.createdByUserLogin}`)
    },
    isUnread: {type: GraphQLBoolean},
    paymentMethodTypeGlAccounts: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?partyId=${party.partyId}`)
    },
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?partyId=${party.partyId}`)
    },
    budgetRoles: {
      type: new GraphQLList(BudgetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`budgetRoles/find?partyId=${party.partyId}`)
    },
    finAccountTypeGlAccounts: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?partyId=${party.partyId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?partyId=${party.partyId}`)
    },
    webUserPreferences: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`webUserPreferences/find?partyId=${party.partyId}`)
    },
    facilityCarrierShipments: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?partyId=${party.partyId}`)
    },
    vendors: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?partyId=${party.partyId}`)
    },
    glAccountOrganizations: {
      type: new GraphQLList(GlAccountOrganizationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glAccountOrganizations/find?partyId=${party.partyId}`)
    },
    invoiceItemTypeGlAccounts: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    salesForecasts: {
      type: new GraphQLList(SalesForecastType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`salesForecasts/find?partyId=${party.partyId}`)
    },
    persons: {
      type: new GraphQLList(PersonType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`persons/find?partyId=${party.partyId}`)
    },
    perfReviewItems: {
      type: new GraphQLList(PerfReviewItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`perfReviewItems/find?partyId=${party.partyId}`)
    },
    emplLeaves: {
      type: new GraphQLList(EmplLeaveType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplLeaves/find?partyId=${party.partyId}`)
    },
    partyQuals: {
      type: new GraphQLList(PartyQualType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyQuals/find?partyId=${party.partyId}`)
    },
    paymentGlAccountTypeMaps: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`paymentGlAccountTypeMaps/find?partyId=${party.partyId}`)
    },
    performanceNotes: {
      type: new GraphQLList(PerformanceNoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`performanceNotes/find?partyId=${party.partyId}`)
    },
    timesheets: {
      type: new GraphQLList(TimesheetType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timesheets/find?partyId=${party.partyId}`)
    },
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?partyId=${party.partyId}`)
    },
    invoiceRoles: {
      type: new GraphQLList(InvoiceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceRoles/find?partyId=${party.partyId}`)
    },
    rateAmounts: {
      type: new GraphQLList(RateAmountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?partyId=${party.partyId}`)
    },
    productCategoryGlAccounts: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?partyId=${party.partyId}`)
    },
    salesForecastHistories: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`salesForecastHistorys/find?partyId=${party.partyId}`)
    },
    partyInvitations: {
      type: new GraphQLList(PartyInvitationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyInvitations/find?partyId=${party.partyId}`)
    },
    timesheetRoles: {
      type: new GraphQLList(TimesheetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timesheetRoles/find?partyId=${party.partyId}`)
    },
    employments: {
      type: new GraphQLList(EmploymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`employments/find?partyId=${party.partyId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?partyId=${party.partyId}`)
    },
    itemIssuanceRoles: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`itemIssuanceRoles/find?partyId=${party.partyId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?partyId=${party.partyId}`)
    },
    carrierShipmentBoxTypes: {
      type: new GraphQLList(CarrierShipmentBoxTypeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentBoxTypes/find?partyId=${party.partyId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?partyId=${party.partyId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?partyId=${party.partyId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?partyId=${party.partyId}`)
    },
    partyDataSources: {
      type: new GraphQLList(PartyDataSourceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyDataSources/find?partyId=${party.partyId}`)
    },
    partyGeoPoints: {
      type: new GraphQLList(PartyGeoPointType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGeoPoints/find?partyId=${party.partyId}`)
    },
    glJournals: {
      type: new GraphQLList(GlJournalType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glJournals/find?partyId=${party.partyId}`)
    },
    partyIdentifications: {
      type: new GraphQLList(PartyIdentificationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyIdentifications/find?partyId=${party.partyId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?partyId=${party.partyId}`)
    },
    shoppingLists: {
      type: new GraphQLList(ShoppingListType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?partyId=${party.partyId}`)
    },
    productAverageCosts: {
      type: new GraphQLList(ProductAverageCostType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?partyId=${party.partyId}`)
    },
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?partyId=${party.partyId}`)
    },
    fixedAssetRegistrations: {
      type: new GraphQLList(FixedAssetRegistrationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetRegistrations/find?partyId=${party.partyId}`)
    },
    partyProfileDefaults: {
      type: new GraphQLList(PartyProfileDefaultType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyProfileDefaults/find?partyId=${party.partyId}`)
    },
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?partyId=${party.partyId}`)
    },
    carrierShipmentMethods: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?partyId=${party.partyId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?partyId=${party.partyId}`)
    },
    agreementRoles: {
      type: new GraphQLList(AgreementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`agreementRoles/find?partyId=${party.partyId}`)
    },
    partyStatuses: {
      type: new GraphQLList(PartyStatusType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyStatuss/find?partyId=${party.partyId}`)
    },
    productPromos: {
      type: new GraphQLList(ProductPromoType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?partyId=${party.partyId}`)
    },
    partyTaxAuthInfos: {
      type: new GraphQLList(PartyTaxAuthInfoType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyTaxAuthInfos/find?partyId=${party.partyId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?partyId=${party.partyId}`)
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?partyId=${party.partyId}`)
    },
    budgetReviews: {
      type: new GraphQLList(BudgetReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`budgetReviews/find?partyId=${party.partyId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?partyId=${party.partyId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?partyId=${party.partyId}`)
    },
    perfReviews: {
      type: new GraphQLList(PerfReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?partyId=${party.partyId}`)
    },
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?partyId=${party.partyId}`)
    },
    partyBenefits: {
      type: new GraphQLList(PartyBenefitType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyBenefits/find?partyId=${party.partyId}`)
    },
    billingAccountRoles: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`billingAccountRoles/find?partyId=${party.partyId}`)
    },
    contactListParties: {
      type: new GraphQLList(ContactListPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contactListPartys/find?partyId=${party.partyId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?partyId=${party.partyId}`)
    },
    partyResumes: {
      type: new GraphQLList(PartyResumeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyResumes/find?partyId=${party.partyId}`)
    },
    partyAttributes: {
      type: new GraphQLList(PartyAttributeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyAttributes/find?partyId=${party.partyId}`)
    },
    partyInvitationGroupAssocs: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationGroupAssocs/find?partyId=${party.partyId}`)
    },
    glReconciliations: {
      type: new GraphQLList(GlReconciliationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glReconciliations/find?partyId=${party.partyId}`)
    },
    finAccounts: {
      type: new GraphQLList(FinAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?partyId=${party.partyId}`)
    },
    partyClassifications: {
      type: new GraphQLList(PartyClassificationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyClassifications/find?partyId=${party.partyId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?partyId=${party.partyId}`)
    },
    glAccountTypeDefaults: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypeDefaults/find?partyId=${party.partyId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?partyId=${party.partyId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?partyId=${party.partyId}`)
    },
    partySkills: {
      type: new GraphQLList(PartySkillType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partySkills/find?partyId=${party.partyId}`)
    },
    jobInterviews: {
      type: new GraphQLList(JobInterviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`jobInterviews/find?partyId=${party.partyId}`)
    },
    partyContents: {
      type: new GraphQLList(PartyContentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyContents/find?partyId=${party.partyId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?partyId=${party.partyId}`)
    },
    partyContactMechPurposes: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechPurposes/find?partyId=${party.partyId}`)
    },
    partyNotes: {
      type: new GraphQLList(PartyNoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyNotes/find?partyId=${party.partyId}`)
    },
    workEffortEventReminders: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`workEffortEventReminders/find?partyId=${party.partyId}`)
    },
    varianceReasonGlAccounts: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`varianceReasonGlAccounts/find?partyId=${party.partyId}`)
    },
    contentRevisions: {
      type: new GraphQLList(ContentRevisionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contentRevisions/find?partyId=${party.partyId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?partyId=${party.partyId}`)
    },
    respondingParties: {
      type: new GraphQLList(RespondingPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`respondingPartys/find?partyId=${party.partyId}`)
    },
    custRequestTypes: {
      type: new GraphQLList(CustRequestTypeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`custRequestTypes/find?partyId=${party.partyId}`)
    },
    partyCarrierAccounts: {
      type: new GraphQLList(PartyCarrierAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyCarrierAccounts/find?partyId=${party.partyId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`payments/find?partyId=${party.partyId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?partyId=${party.partyId}`)
    },
    partyRoles: {
      type: new GraphQLList(PartyRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?partyId=${party.partyId}`)
    },
    emplPositionFulfillments: {
      type: new GraphQLList(EmplPositionFulfillmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplPositionFulfillments/find?partyId=${party.partyId}`)
    },
    agreementPartyApplics: {
      type: new GraphQLList(AgreementPartyApplicType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`agreementPartyApplics/find?partyId=${party.partyId}`)
    },
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?partyId=${party.partyId}`)
    },
    partyIcsAvsOverrides: {
      type: new GraphQLList(PartyIcsAvsOverrideType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyIcsAvsOverrides/find?partyId=${party.partyId}`)
    },
    employmentApps: {
      type: new GraphQLList(EmploymentAppType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`employmentApps/find?partyId=${party.partyId}`)
    },
    productStoreVendorPayments: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorPayments/find?partyId=${party.partyId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`products/find?partyId=${party.partyId}`)
    },
    payrollPreferences: {
      type: new GraphQLList(PayrollPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`payrollPreferences/find?partyId=${party.partyId}`)
    },
    contentApprovals: {
      type: new GraphQLList(ContentApprovalType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contentApprovals/find?partyId=${party.partyId}`)
    },
    partyGroups: {
      type: new GraphQLList(PartyGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGroups/find?partyId=${party.partyId}`)
    },
    quotes: {
      type: new GraphQLList(QuoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`quotes/find?partyId=${party.partyId}`)
    },
    requirementRoles: {
      type: new GraphQLList(RequirementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`requirementRoles/find?partyId=${party.partyId}`)
    },
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?partyId=${party.partyId}`)
    },
    vendorProducts: {
      type: new GraphQLList(VendorProductType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendorProducts/find?partyId=${party.partyId}`)
    },
    paymentMethods: {
      type: new GraphQLList(PaymentMethodType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`paymentMethods/find?partyId=${party.partyId}`)
    },
    productStoreVendorShipments: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorShipments/find?partyId=${party.partyId}`)
    },
    custRequestParties: {
      type: new GraphQLList(CustRequestPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`custRequestPartys/find?partyId=${party.partyId}`)
    },
    productPromoCodeParties: {
      type: new GraphQLList(ProductPromoCodePartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodePartys/find?partyId=${party.partyId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?partyId=${party.partyId}`)
    },
    fixedAssetTypeGlAccounts: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    partyNameHistories: {
      type: new GraphQLList(PartyNameHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyNameHistorys/find?partyId=${party.partyId}`)
    },
    oldPartyTaxInfos: {
      type: new GraphQLList(OldPartyTaxInfoType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`oldPartyTaxInfos/find?partyId=${party.partyId}`)
    },
    partyAcctgPreferences: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyAcctgPreferences/find?partyId=${party.partyId}`)
    },
    taxAuthorityGlAccounts: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityGlAccounts/find?partyId=${party.partyId}`)
    },
    emplPositions: {
      type: new GraphQLList(EmplPositionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplPositions/find?partyId=${party.partyId}`)
    },
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?partyId=${party.partyId}`)
    },
    taxAuthorities: {
      type: new GraphQLList(TaxAuthorityType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`taxAuthoritys/find?partyId=${party.partyId}`)
    },
    reorderGuidelines: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`reorderGuidelines/find?partyId=${party.partyId}`)
    },
    productGlAccounts: {
      type: new GraphQLList(ProductGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?partyId=${party.partyId}`)
    },
    shipmentReceiptRoles: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceiptRoles/find?partyId=${party.partyId}`)
    },
    affiliates: {
      type: new GraphQLList(AffiliateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`affiliates/find?partyId=${party.partyId}`)
    },
    glAccountHistories: {
      type: new GraphQLList(GlAccountHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glAccountHistorys/find?partyId=${party.partyId}`)
    },
    partyRates: {
      type: new GraphQLList(PartyRateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyRates/find?partyId=${party.partyId}`)
    },
    orderRoles: {
      type: new GraphQLList(OrderRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderRoles/find?partyId=${party.partyId}`)
    },
    quoteRoles: {
      type: new GraphQLList(QuoteRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`quoteRoles/find?partyId=${party.partyId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?partyId=${party.partyId}`)
    }
  })
});

export {PartyType};
    




const PartyInputType = new GraphQLInputObjectType({
  name: 'PartyInputType',
  description: 'input type for Party in party',

  fields: () => ({
    partyTypeId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    preferredCurrencyUomId: {type: GraphQLString},
    externalId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    isUnread: {type: GraphQLBoolean}
  })
});

export {PartyInputType};
    