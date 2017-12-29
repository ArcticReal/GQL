
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

import {BillingAccountRoleType} from '../../accounting/BillingAccountRole/BillingAccountRoleType.js';
import {AgreementRoleType} from '../../party/AgreementRole/AgreementRoleType.js';
import {FacilityGroupRoleType} from '../../product/FacilityGroupRole/FacilityGroupRoleType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {BudgetRoleType} from '../../accounting/BudgetRole/BudgetRoleType.js';
import {WebSiteRoleType} from '../../content/WebSiteRole/WebSiteRoleType.js';
import {TimesheetRoleType} from '../../workeffort/TimesheetRole/TimesheetRoleType.js';
import {PartyGlAccountType} from '../../accounting/PartyGlAccount/PartyGlAccountType.js';
import {ProdCatalogRoleType} from '../../product/ProdCatalogRole/ProdCatalogRoleType.js';
import {SegmentGroupRoleType} from '../../marketing/SegmentGroupRole/SegmentGroupRoleType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {EmploymentType} from '../../humanres/Employment/EmploymentType.js';
import {ContentRoleType} from '../../content/ContentRole/ContentRoleType.js';
import {FinAccountRoleType} from '../../accounting/FinAccountRole/FinAccountRoleType.js';
import {ItemIssuanceRoleType} from '../../shipment/ItemIssuanceRole/ItemIssuanceRoleType.js';
import {OrderRoleType} from '../../order/OrderRole/OrderRoleType.js';
import {PayrollPreferenceType} from '../../humanres/PayrollPreference/PayrollPreferenceType.js';
import {ShipmentReceiptRoleType} from '../../shipment/ShipmentReceiptRole/ShipmentReceiptRoleType.js';
import {CarrierShipmentMethodType} from '../../shipment/CarrierShipmentMethod/CarrierShipmentMethodType.js';
import {InvoiceRoleType} from '../../accounting/InvoiceRole/InvoiceRoleType.js';
import {ProductRoleType} from '../../product/ProductRole/ProductRoleType.js';
import {DataResourceRoleType} from '../../content/DataResourceRole/DataResourceRoleType.js';
import {WorkEffortPartyAssignmentType} from '../../workeffort/WorkEffortPartyAssignment/WorkEffortPartyAssignmentType.js';
import {PerfReviewType} from '../../humanres/PerfReview/PerfReviewType.js';
import {OrderItemRoleType} from '../../order/OrderItemRole/OrderItemRoleType.js';
import {OrderItemShipGroupType} from '../../order/OrderItemShipGroup/OrderItemShipGroupType.js';
import {MarketingCampaignRoleType} from '../../marketing/MarketingCampaignRole/MarketingCampaignRoleType.js';
import {GlAccountRoleType} from '../../accounting/GlAccountRole/GlAccountRoleType.js';
import {AgreementType} from '../../party/Agreement/AgreementType.js';
import {CommunicationEventRoleType} from '../../party/CommunicationEventRole/CommunicationEventRoleType.js';
import {PartyRelationshipType} from '../../party/PartyRelationship/PartyRelationshipType.js';
import {PartyBenefitType} from '../../humanres/PartyBenefit/PartyBenefitType.js';
import {PicklistRoleType} from '../../shipment/PicklistRole/PicklistRoleType.js';
import {FacilityPartyType} from '../../product/FacilityParty/FacilityPartyType.js';
import {PerformanceNoteType} from '../../humanres/PerformanceNote/PerformanceNoteType.js';
import {ProductCategoryRoleType} from '../../product/ProductCategoryRole/ProductCategoryRoleType.js';
import {PerfReviewItemType} from '../../humanres/PerfReviewItem/PerfReviewItemType.js';
import {CustRequestPartyType} from '../../order/CustRequestParty/CustRequestPartyType.js';
import {PartyFixedAssetAssignmentType} from '../../accounting/PartyFixedAssetAssignment/PartyFixedAssetAssignmentType.js';
import {ProductStoreGroupRoleType} from '../../product/ProductStoreGroupRole/ProductStoreGroupRoleType.js';
import {RequirementRoleType} from '../../order/RequirementRole/RequirementRoleType.js';
import {QuoteRoleType} from '../../order/QuoteRole/QuoteRoleType.js';
import {ProductStoreRoleType} from '../../product/ProductStoreRole/ProductStoreRoleType.js';
import {PartyContactMechType} from '../../party/PartyContactMech/PartyContactMechType.js';


const PartyRoleType = new GraphQLObjectType({
  name: 'PartyRoleType',
  description: 'Type for PartyRole in party',

  fields: () => ({
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${partyRole.roleTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyRole.partyId}`)
    },
    payrollPreferences: {
      type: new GraphQLList(PayrollPreferenceType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`humanres/payrollPreferences/find?partyId=${partyRole.partyId}`)
    },
    carrierShipmentMethods: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/carrierShipmentMethods/find?partyId=${partyRole.partyId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortPartyAssignments/find?partyId=${partyRole.partyId}`)
    },
    glAccountRoles: {
      type: new GraphQLList(GlAccountRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/partyGlAccounts/find?partyId=${partyRole.partyId}`)
    },
    productCategoryRoles: {
      type: new GraphQLList(ProductCategoryRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryRoles/find?partyId=${partyRole.partyId}`)
    },
    perfReviewItems: {
      type: new GraphQLList(PerfReviewItemType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReview/perfReviewItems/find?partyId=${partyRole.partyId}`)
    },
    partyBenefits: {
      type: new GraphQLList(PartyBenefitType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyBenefits/find?partyId=${partyRole.partyId}`)
    },
    contentRoles: {
      type: new GraphQLList(ContentRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentRoles/find?partyId=${partyRole.partyId}`)
    },
    agreements: {
      type: new GraphQLList(AgreementType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`party/agreements/find?partyId=${partyRole.partyId}`)
    },
    finAccountRoles: {
      type: new GraphQLList(FinAccountRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    productStoreGroupRoles: {
      type: new GraphQLList(ProductStoreGroupRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    partyFixedAssetAssignments: {
      type: new GraphQLList(PartyFixedAssetAssignmentType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/partyFixedAssetAssignments/find?partyId=${partyRole.partyId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventRoles/find?partyId=${partyRole.partyId}`)
    },
    employments: {
      type: new GraphQLList(EmploymentType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`humanres/employments/find?partyId=${partyRole.partyId}`)
    },
    itemIssuanceRoles: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuance/itemIssuanceRoles/find?partyId=${partyRole.partyId}`)
    },
    performanceNotes: {
      type: new GraphQLList(PerformanceNoteType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`humanres/performanceNotes/find?partyId=${partyRole.partyId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemRoles/find?partyId=${partyRole.partyId}`)
    },
    picklistRoles: {
      type: new GraphQLList(PicklistRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistRoles/find?partyId=${partyRole.partyId}`)
    },
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationships/find?partyId=${partyRole.partyId}`)
    },
    productStoreRoles: {
      type: new GraphQLList(ProductStoreRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreRoles/find?partyId=${partyRole.partyId}`)
    },
    perfReviews: {
      type: new GraphQLList(PerfReviewType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReviews/find?partyId=${partyRole.partyId}`)
    },
    budgetRoles: {
      type: new GraphQLList(BudgetRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetRoles/find?partyId=${partyRole.partyId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityPartys/find?partyId=${partyRole.partyId}`)
    },
    orderRoles: {
      type: new GraphQLList(OrderRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`order/orderRoles/find?partyId=${partyRole.partyId}`)
    },
    segmentGroupRoles: {
      type: new GraphQLList(SegmentGroupRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroup/segmentGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    webSiteRoles: {
      type: new GraphQLList(WebSiteRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`content/webSiteRoles/find?partyId=${partyRole.partyId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?partyId=${partyRole.partyId}`)
    },
    custRequestParties: {
      type: new GraphQLList(CustRequestPartyType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestPartys/find?partyId=${partyRole.partyId}`)
    },
    agreementRoles: {
      type: new GraphQLList(AgreementRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementRoles/find?partyId=${partyRole.partyId}`)
    },
    productRoles: {
      type: new GraphQLList(ProductRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/product/productRoles/find?partyId=${partyRole.partyId}`)
    },
    dataResourceRoles: {
      type: new GraphQLList(DataResourceRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`content/dataResource/dataResourceRoles/find?partyId=${partyRole.partyId}`)
    },
    requirementRoles: {
      type: new GraphQLList(RequirementRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/requirementRoles/find?partyId=${partyRole.partyId}`)
    },
    shipmentReceiptRoles: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceiptRoles/find?partyId=${partyRole.partyId}`)
    },
    invoiceRoles: {
      type: new GraphQLList(InvoiceRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceRoles/find?partyId=${partyRole.partyId}`)
    },
    prodCatalogRoles: {
      type: new GraphQLList(ProdCatalogRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogRoles/find?partyId=${partyRole.partyId}`)
    },
    billingAccountRoles: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccount/billingAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechs/find?partyId=${partyRole.partyId}`)
    },
    facilityGroupRoles: {
      type: new GraphQLList(FacilityGroupRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    quoteRoles: {
      type: new GraphQLList(QuoteRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteRoles/find?partyId=${partyRole.partyId}`)
    },
    timesheetRoles: {
      type: new GraphQLList(TimesheetRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timesheet/timesheetRoles/find?partyId=${partyRole.partyId}`)
    },
    marketingCampaignRoles: {
      type: new GraphQLList(MarketingCampaignRoleType),
      args : {},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignRoles/find?partyId=${partyRole.partyId}`)
    }
  })
});

export {PartyRoleType};
    