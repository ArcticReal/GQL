
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegmentType.js';
import {InvoiceType} from '../accounting/InvoiceType.js';
import {AgreementRoleType} from '../party/AgreementRoleType.js';
import {RateAmountType} from '../accounting/RateAmountType.js';
import {CarrierShipmentBoxTypeType} from '../shipment/CarrierShipmentBoxTypeType.js';
import {ProductType} from '../product/ProductType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {TimesheetRoleType} from '../workeffort/TimesheetRoleType.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimateType.js';
import {AffiliateType} from '../party/AffiliateType.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccountType.js';
import {ContentApprovalType} from '../content/ContentApprovalType.js';
import {FixedAssetRegistrationType} from '../accounting/FixedAssetRegistrationType.js';
import {GlAccountTypeDefaultType} from '../accounting/GlAccountTypeDefaultType.js';
import {WorkEffortEventReminderType} from '../workeffort/WorkEffortEventReminderType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {ProductPromoUseType} from '../product/ProductPromoUseType.js';
import {PartyIcsAvsOverrideType} from '../party/PartyIcsAvsOverrideType.js';
import {PayrollPreferenceType} from '../humanres/PayrollPreferenceType.js';
import {PartyNoteType} from '../party/PartyNoteType.js';
import {InvoiceRoleType} from '../accounting/InvoiceRoleType.js';
import {PartyNameHistoryType} from '../party/PartyNameHistoryType.js';
import {CustRequestType} from '../order/CustRequestType.js';
import {ProductCategoryGlAccountType} from '../product/ProductCategoryGlAccountType.js';
import {ProductStoreVendorPaymentType} from '../product/ProductStoreVendorPaymentType.js';
import {TimesheetType} from '../workeffort/TimesheetType.js';
import {ProductStoreVendorShipmentType} from '../product/ProductStoreVendorShipmentType.js';
import {ContentRevisionType} from '../content/ContentRevisionType.js';
import {OrderItemRoleType} from '../order/OrderItemRoleType.js';
import {FinAccountType} from '../accounting/FinAccountType.js';
import {PerformanceNoteType} from '../humanres/PerformanceNoteType.js';
import {PartyRateType} from '../accounting/PartyRateType.js';
import {PersonType} from '../party/PersonType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';
import {PartyContactMechType} from '../party/PartyContactMechType.js';
import {PartyClassificationType} from '../party/PartyClassificationType.js';
import {PartyGroupType} from '../party/PartyGroupType.js';
import {OldPartyTaxInfoType} from '../party/OldPartyTaxInfoType.js';
import {SupplierProductType} from '../product/SupplierProductType.js';
import {PartyProfileDefaultType} from '../party/PartyProfileDefaultType.js';
import {GlAccountHistoryType} from '../accounting/GlAccountHistoryType.js';
import {PaymentGlAccountTypeMapType} from '../accounting/PaymentGlAccountTypeMapType.js';
import {PartyTaxAuthInfoType} from '../accounting/PartyTaxAuthInfoType.js';
import {PartyInvitationType} from '../party/PartyInvitationType.js';
import {PartyInvitationGroupAssocType} from '../party/PartyInvitationGroupAssocType.js';
import {FinAccountTypeGlAccountType} from '../accounting/FinAccountTypeGlAccountType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {PerfReviewType} from '../humanres/PerfReviewType.js';
import {JobInterviewType} from '../humanres/JobInterviewType.js';
import {ContactListType} from '../marketing/ContactListType.js';
import {ContactListPartyType} from '../marketing/ContactListPartyType.js';
import {PersonTrainingType} from '../humanres/PersonTrainingType.js';
import {PartyIdentificationType} from '../party/PartyIdentificationType.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRoleType.js';
import {PartyAcctgPreferenceType} from '../accounting/PartyAcctgPreferenceType.js';
import {BudgetReviewType} from '../accounting/BudgetReviewType.js';
import {PartyCarrierAccountType} from '../party/PartyCarrierAccountType.js';
import {TaxAuthorityGlAccountType} from '../accounting/TaxAuthorityGlAccountType.js';
import {PerfReviewItemType} from '../humanres/PerfReviewItemType.js';
import {FacilityType} from '../product/FacilityType.js';
import {RequirementRoleType} from '../order/RequirementRoleType.js';
import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';
import {PartyNeedType} from '../party/PartyNeedType.js';
import {PartyStatusType} from '../party/PartyStatusType.js';
import {ReorderGuidelineType} from '../product/ReorderGuidelineType.js';
import {GlReconciliationType} from '../accounting/GlReconciliationType.js';
import {PartySkillType} from '../humanres/PartySkillType.js';
import {PartyContentType} from '../party/PartyContentType.js';
import {PartyContactMechPurposeType} from '../party/PartyContactMechPurposeType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {InvoiceItemTypeGlAccountType} from '../accounting/InvoiceItemTypeGlAccountType.js';
import {ItemIssuanceRoleType} from '../shipment/ItemIssuanceRoleType.js';
import {VarianceReasonGlAccountType} from '../accounting/VarianceReasonGlAccountType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillmentType.js';
import {VendorProductType} from '../product/VendorProductType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';
import {PartyGeoPointType} from '../party/PartyGeoPointType.js';
import {ProductAverageCostType} from '../accounting/ProductAverageCostType.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethodType.js';
import {EmplPositionType} from '../humanres/EmplPositionType.js';
import {FixedAssetTypeGlAccountType} from '../accounting/FixedAssetTypeGlAccountType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {EmplPositionFulfillmentType} from '../humanres/EmplPositionFulfillmentType.js';
import {SalesForecastType} from '../marketing/SalesForecastType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {FacilityPartyType} from '../product/FacilityPartyType.js';
import {PartyBenefitType} from '../humanres/PartyBenefitType.js';
import {TimeEntryType} from '../workeffort/TimeEntryType.js';
import {SalesForecastHistoryType} from '../marketing/SalesForecastHistoryType.js';
import {CustRequestPartyType} from '../order/CustRequestPartyType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {InventoryItemType} from '../product/InventoryItemType.js';
import {PartyResumeType} from '../humanres/PartyResumeType.js';
import {BillingAccountRoleType} from '../accounting/BillingAccountRoleType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatusType.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {PartyQualType} from '../humanres/PartyQualType.js';
import {EmploymentAppType} from '../humanres/EmploymentAppType.js';
import {ProductPriceType} from '../product/ProductPriceType.js';
import {BudgetRoleType} from '../accounting/BudgetRoleType.js';
import {FacilityCarrierShipmentType} from '../product/FacilityCarrierShipmentType.js';
import {AgreementPartyApplicType} from '../party/AgreementPartyApplicType.js';
import {EmploymentType} from '../humanres/EmploymentType.js';
import {PartyAttributeType} from '../party/PartyAttributeType.js';
import {WebUserPreferenceType} from '../content/WebUserPreferenceType.js';
import {ProductPromoCodePartyType} from '../product/ProductPromoCodePartyType.js';
import {PartyTypeType} from '../party/PartyTypeType.js';
import {OrderRoleType} from '../order/OrderRoleType.js';
import {ShipmentReceiptRoleType} from '../shipment/ShipmentReceiptRoleType.js';
import {GlJournalType} from '../accounting/GlJournalType.js';
import {EmplLeaveType} from '../humanres/EmplLeaveType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';
import {GlAccountOrganizationType} from '../accounting/GlAccountOrganizationType.js';
import {RespondingPartyType} from '../order/RespondingPartyType.js';
import {VendorType} from '../party/VendorType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {ProductGlAccountType} from '../product/ProductGlAccountType.js';
import {CustRequestTypeType} from '../order/CustRequestTypeType.js';
import {ProductPromoType} from '../product/ProductPromoType.js';
import {QuoteType} from '../order/QuoteType.js';
import {PaymentMethodTypeGlAccountType} from '../accounting/PaymentMethodTypeGlAccountType.js';
import {PartyDataSourceType} from '../party/PartyDataSourceType.js';
import {QuoteRoleType} from '../order/QuoteRoleType.js';


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
    paymentMethodTypeGlAccount: {
      type: new GraphQLList(PaymentMethodTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`paymentMethodTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?partyId=${party.partyId}`)
    },
    productStore: {
      type: new GraphQLList(ProductStoreType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?partyId=${party.partyId}`)
    },
    budgetRole: {
      type: new GraphQLList(BudgetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`budgetRoles/find?partyId=${party.partyId}`)
    },
    finAccountTypeGlAccount: {
      type: new GraphQLList(FinAccountTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccountTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    finAccountTrans: {
      type: new GraphQLList(FinAccountTransType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?partyId=${party.partyId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?partyId=${party.partyId}`)
    },
    webUserPreference: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`webUserPreferences/find?partyId=${party.partyId}`)
    },
    facilityCarrierShipment: {
      type: new GraphQLList(FacilityCarrierShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`facilityCarrierShipments/find?partyId=${party.partyId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    custRequest: {
      type: new GraphQLList(CustRequestType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?partyId=${party.partyId}`)
    },
    glAccountOrganization: {
      type: new GraphQLList(GlAccountOrganizationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glAccountOrganizations/find?partyId=${party.partyId}`)
    },
    invoiceItemTypeGlAccount: {
      type: new GraphQLList(InvoiceItemTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    salesForecast: {
      type: new GraphQLList(SalesForecastType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`salesForecasts/find?partyId=${party.partyId}`)
    },
    person: {
      type: new GraphQLList(PersonType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`persons/find?partyId=${party.partyId}`)
    },
    perfReviewItem: {
      type: new GraphQLList(PerfReviewItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`perfReviewItems/find?partyId=${party.partyId}`)
    },
    emplLeave: {
      type: new GraphQLList(EmplLeaveType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplLeaves/find?partyId=${party.partyId}`)
    },
    partyQual: {
      type: new GraphQLList(PartyQualType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyQuals/find?partyId=${party.partyId}`)
    },
    paymentGlAccountTypeMap: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`paymentGlAccountTypeMaps/find?partyId=${party.partyId}`)
    },
    performanceNote: {
      type: new GraphQLList(PerformanceNoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`performanceNotes/find?partyId=${party.partyId}`)
    },
    timesheet: {
      type: new GraphQLList(TimesheetType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timesheets/find?partyId=${party.partyId}`)
    },
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?partyId=${party.partyId}`)
    },
    invoiceRole: {
      type: new GraphQLList(InvoiceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceRoles/find?partyId=${party.partyId}`)
    },
    rateAmount: {
      type: new GraphQLList(RateAmountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`rateAmounts/find?partyId=${party.partyId}`)
    },
    productCategoryGlAccount: {
      type: new GraphQLList(ProductCategoryGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productCategoryGlAccounts/find?partyId=${party.partyId}`)
    },
    salesForecastHistory: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`salesForecastHistorys/find?partyId=${party.partyId}`)
    },
    partyInvitation: {
      type: new GraphQLList(PartyInvitationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyInvitations/find?partyId=${party.partyId}`)
    },
    timesheetRole: {
      type: new GraphQLList(TimesheetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timesheetRoles/find?partyId=${party.partyId}`)
    },
    employment: {
      type: new GraphQLList(EmploymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`employments/find?partyId=${party.partyId}`)
    },
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?partyId=${party.partyId}`)
    },
    facilityParty: {
      type: new GraphQLList(FacilityPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?partyId=${party.partyId}`)
    },
    itemIssuanceRole: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`itemIssuanceRoles/find?partyId=${party.partyId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?partyId=${party.partyId}`)
    },
    carrierShipmentBoxType: {
      type: new GraphQLList(CarrierShipmentBoxTypeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentBoxTypes/find?partyId=${party.partyId}`)
    },
    invoice: {
      type: new GraphQLList(InvoiceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?partyId=${party.partyId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?partyId=${party.partyId}`)
    },
    partyGlAccount: {
      type: new GraphQLList(PartyGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?partyId=${party.partyId}`)
    },
    partyDataSource: {
      type: new GraphQLList(PartyDataSourceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyDataSources/find?partyId=${party.partyId}`)
    },
    partyGeoPoint: {
      type: new GraphQLList(PartyGeoPointType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGeoPoints/find?partyId=${party.partyId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    glJournal: {
      type: new GraphQLList(GlJournalType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glJournals/find?partyId=${party.partyId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    partyIdentification: {
      type: new GraphQLList(PartyIdentificationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyIdentifications/find?partyId=${party.partyId}`)
    },
    orderItemRole: {
      type: new GraphQLList(OrderItemRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?partyId=${party.partyId}`)
    },
    shoppingList: {
      type: new GraphQLList(ShoppingListType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shoppingLists/find?partyId=${party.partyId}`)
    },
    productAverageCost: {
      type: new GraphQLList(ProductAverageCostType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productAverageCosts/find?partyId=${party.partyId}`)
    },
    supplierProduct: {
      type: new GraphQLList(SupplierProductType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?partyId=${party.partyId}`)
    },
    fixedAssetRegistration: {
      type: new GraphQLList(FixedAssetRegistrationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetRegistrations/find?partyId=${party.partyId}`)
    },
    employment: {
      type: new GraphQLList(EmploymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`employments/find?partyId=${party.partyId}`)
    },
    partyProfileDefault: {
      type: new GraphQLList(PartyProfileDefaultType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyProfileDefaults/find?partyId=${party.partyId}`)
    },
    personTraining: {
      type: new GraphQLList(PersonTrainingType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`personTrainings/find?partyId=${party.partyId}`)
    },
    carrierShipmentMethod: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?partyId=${party.partyId}`)
    },
    contactListCommStatus: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?partyId=${party.partyId}`)
    },
    agreementRole: {
      type: new GraphQLList(AgreementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`agreementRoles/find?partyId=${party.partyId}`)
    },
    partyStatus: {
      type: new GraphQLList(PartyStatusType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyStatuss/find?partyId=${party.partyId}`)
    },
    productPromo: {
      type: new GraphQLList(ProductPromoType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?partyId=${party.partyId}`)
    },
    partyTaxAuthInfo: {
      type: new GraphQLList(PartyTaxAuthInfoType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyTaxAuthInfos/find?partyId=${party.partyId}`)
    },
    communicationEventRole: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?partyId=${party.partyId}`)
    },
    facility: {
      type: new GraphQLList(FacilityType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?partyId=${party.partyId}`)
    },
    budgetReview: {
      type: new GraphQLList(BudgetReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`budgetReviews/find?partyId=${party.partyId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?partyId=${party.partyId}`)
    },
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?partyId=${party.partyId}`)
    },
    perfReview: {
      type: new GraphQLList(PerfReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?partyId=${party.partyId}`)
    },
    partyGlAccount: {
      type: new GraphQLList(PartyGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?partyId=${party.partyId}`)
    },
    timeEntry: {
      type: new GraphQLList(TimeEntryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?partyId=${party.partyId}`)
    },
    partyBenefit: {
      type: new GraphQLList(PartyBenefitType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyBenefits/find?partyId=${party.partyId}`)
    },
    finAccountTrans: {
      type: new GraphQLList(FinAccountTransType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?partyId=${party.partyId}`)
    },
    perfReview: {
      type: new GraphQLList(PerfReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?partyId=${party.partyId}`)
    },
    billingAccountRole: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`billingAccountRoles/find?partyId=${party.partyId}`)
    },
    contactListParty: {
      type: new GraphQLList(ContactListPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contactListPartys/find?partyId=${party.partyId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?partyId=${party.partyId}`)
    },
    partyResume: {
      type: new GraphQLList(PartyResumeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyResumes/find?partyId=${party.partyId}`)
    },
    partyAttribute: {
      type: new GraphQLList(PartyAttributeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyAttributes/find?partyId=${party.partyId}`)
    },
    partyInvitationGroupAssoc: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationGroupAssocs/find?partyId=${party.partyId}`)
    },
    glReconciliation: {
      type: new GraphQLList(GlReconciliationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glReconciliations/find?partyId=${party.partyId}`)
    },
    finAccount: {
      type: new GraphQLList(FinAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?partyId=${party.partyId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?partyId=${party.partyId}`)
    },
    partyClassification: {
      type: new GraphQLList(PartyClassificationType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyClassifications/find?partyId=${party.partyId}`)
    },
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?partyId=${party.partyId}`)
    },
    glAccountTypeDefault: {
      type: new GraphQLList(GlAccountTypeDefaultType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypeDefaults/find?partyId=${party.partyId}`)
    },
    partyContactMech: {
      type: new GraphQLList(PartyContactMechType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?partyId=${party.partyId}`)
    },
    productPromoUse: {
      type: new GraphQLList(ProductPromoUseType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?partyId=${party.partyId}`)
    },
    partySkill: {
      type: new GraphQLList(PartySkillType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partySkills/find?partyId=${party.partyId}`)
    },
    jobInterview: {
      type: new GraphQLList(JobInterviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`jobInterviews/find?partyId=${party.partyId}`)
    },
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?partyId=${party.partyId}`)
    },
    emplLeave: {
      type: new GraphQLList(EmplLeaveType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplLeaves/find?partyId=${party.partyId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?partyId=${party.partyId}`)
    },
    partyBenefit: {
      type: new GraphQLList(PartyBenefitType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyBenefits/find?partyId=${party.partyId}`)
    },
    partyContent: {
      type: new GraphQLList(PartyContentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyContents/find?partyId=${party.partyId}`)
    },
    productPrice: {
      type: new GraphQLList(ProductPriceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?partyId=${party.partyId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?partyId=${party.partyId}`)
    },
    partyContactMechPurpose: {
      type: new GraphQLList(PartyContactMechPurposeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechPurposes/find?partyId=${party.partyId}`)
    },
    partyNote: {
      type: new GraphQLList(PartyNoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyNotes/find?partyId=${party.partyId}`)
    },
    workEffortEventReminder: {
      type: new GraphQLList(WorkEffortEventReminderType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`workEffortEventReminders/find?partyId=${party.partyId}`)
    },
    varianceReasonGlAccount: {
      type: new GraphQLList(VarianceReasonGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`varianceReasonGlAccounts/find?partyId=${party.partyId}`)
    },
    contentRevision: {
      type: new GraphQLList(ContentRevisionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contentRevisions/find?partyId=${party.partyId}`)
    },
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?partyId=${party.partyId}`)
    },
    respondingParty: {
      type: new GraphQLList(RespondingPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`respondingPartys/find?partyId=${party.partyId}`)
    },
    timesheet: {
      type: new GraphQLList(TimesheetType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`timesheets/find?partyId=${party.partyId}`)
    },
    custRequestType: {
      type: new GraphQLList(CustRequestTypeType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`custRequestTypes/find?partyId=${party.partyId}`)
    },
    partyCarrierAccount: {
      type: new GraphQLList(PartyCarrierAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyCarrierAccounts/find?partyId=${party.partyId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`payments/find?partyId=${party.partyId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?partyId=${party.partyId}`)
    },
    partyRole: {
      type: new GraphQLList(PartyRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?partyId=${party.partyId}`)
    },
    emplPositionFulfillment: {
      type: new GraphQLList(EmplPositionFulfillmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplPositionFulfillments/find?partyId=${party.partyId}`)
    },
    agreementPartyApplic: {
      type: new GraphQLList(AgreementPartyApplicType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`agreementPartyApplics/find?partyId=${party.partyId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?partyId=${party.partyId}`)
    },
    shipmentCostEstimate: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?partyId=${party.partyId}`)
    },
    partyIcsAvsOverride: {
      type: new GraphQLList(PartyIcsAvsOverrideType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyIcsAvsOverrides/find?partyId=${party.partyId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?partyId=${party.partyId}`)
    },
    employmentApp: {
      type: new GraphQLList(EmploymentAppType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`employmentApps/find?partyId=${party.partyId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    productStoreVendorPayment: {
      type: new GraphQLList(ProductStoreVendorPaymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorPayments/find?partyId=${party.partyId}`)
    },
    product: {
      type: new GraphQLList(ProductType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`products/find?partyId=${party.partyId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?partyId=${party.partyId}`)
    },
    payrollPreference: {
      type: new GraphQLList(PayrollPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`payrollPreferences/find?partyId=${party.partyId}`)
    },
    contentApproval: {
      type: new GraphQLList(ContentApprovalType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contentApprovals/find?partyId=${party.partyId}`)
    },
    partyGroup: {
      type: new GraphQLList(PartyGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyGroups/find?partyId=${party.partyId}`)
    },
    quote: {
      type: new GraphQLList(QuoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`quotes/find?partyId=${party.partyId}`)
    },
    requirementRole: {
      type: new GraphQLList(RequirementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`requirementRoles/find?partyId=${party.partyId}`)
    },
    contactList: {
      type: new GraphQLList(ContactListType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?partyId=${party.partyId}`)
    },
    vendorProduct: {
      type: new GraphQLList(VendorProductType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendorProducts/find?partyId=${party.partyId}`)
    },
    paymentMethod: {
      type: new GraphQLList(PaymentMethodType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`paymentMethods/find?partyId=${party.partyId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?partyId=${party.partyId}`)
    },
    salesForecastHistory: {
      type: new GraphQLList(SalesForecastHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`salesForecastHistorys/find?partyId=${party.partyId}`)
    },
    jobInterview: {
      type: new GraphQLList(JobInterviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`jobInterviews/find?partyId=${party.partyId}`)
    },
    productStoreVendorShipment: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorShipments/find?partyId=${party.partyId}`)
    },
    custRequestParty: {
      type: new GraphQLList(CustRequestPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`custRequestPartys/find?partyId=${party.partyId}`)
    },
    productPromoCodeParty: {
      type: new GraphQLList(ProductPromoCodePartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodePartys/find?partyId=${party.partyId}`)
    },
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?partyId=${party.partyId}`)
    },
    fixedAssetTypeGlAccount: {
      type: new GraphQLList(FixedAssetTypeGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetTypeGlAccounts/find?partyId=${party.partyId}`)
    },
    productStoreVendorShipment: {
      type: new GraphQLList(ProductStoreVendorShipmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productStoreVendorShipments/find?partyId=${party.partyId}`)
    },
    partyNameHistory: {
      type: new GraphQLList(PartyNameHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyNameHistorys/find?partyId=${party.partyId}`)
    },
    oldPartyTaxInfo: {
      type: new GraphQLList(OldPartyTaxInfoType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`oldPartyTaxInfos/find?partyId=${party.partyId}`)
    },
    finAccount: {
      type: new GraphQLList(FinAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`finAccounts/find?partyId=${party.partyId}`)
    },
    partyAcctgPreference: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyAcctgPreferences/find?partyId=${party.partyId}`)
    },
    taxAuthorityGlAccount: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityGlAccounts/find?partyId=${party.partyId}`)
    },
    emplPosition: {
      type: new GraphQLList(EmplPositionType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`emplPositions/find?partyId=${party.partyId}`)
    },
    giftCardFulfillment: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?partyId=${party.partyId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`payments/find?partyId=${party.partyId}`)
    },
    taxAuthority: {
      type: new GraphQLList(TaxAuthorityType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`taxAuthoritys/find?partyId=${party.partyId}`)
    },
    reorderGuideline: {
      type: new GraphQLList(ReorderGuidelineType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`reorderGuidelines/find?partyId=${party.partyId}`)
    },
    partyCarrierAccount: {
      type: new GraphQLList(PartyCarrierAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyCarrierAccounts/find?partyId=${party.partyId}`)
    },
    productGlAccount: {
      type: new GraphQLList(ProductGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`productGlAccounts/find?partyId=${party.partyId}`)
    },
    shipmentReceiptRole: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceiptRoles/find?partyId=${party.partyId}`)
    },
    affiliate: {
      type: new GraphQLList(AffiliateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`affiliates/find?partyId=${party.partyId}`)
    },
    glAccountHistory: {
      type: new GraphQLList(GlAccountHistoryType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`glAccountHistorys/find?partyId=${party.partyId}`)
    },
    partyRate: {
      type: new GraphQLList(PartyRateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`partyRates/find?partyId=${party.partyId}`)
    },
    invoice: {
      type: new GraphQLList(InvoiceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?partyId=${party.partyId}`)
    },
    salesForecast: {
      type: new GraphQLList(SalesForecastType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`salesForecasts/find?partyId=${party.partyId}`)
    },
    orderRole: {
      type: new GraphQLList(OrderRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`orderRoles/find?partyId=${party.partyId}`)
    },
    quoteRole: {
      type: new GraphQLList(QuoteRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`quoteRoles/find?partyId=${party.partyId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {partyId: {type: GraphQLString}},
      resolve: (party, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?partyId=${party.partyId}`)
    }
  })
});

export {PartyType};
    