
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BillingAccountRoleType} from '../accounting/BillingAccountRoleType.js';
import {AgreementRoleType} from '../party/AgreementRoleType.js';
import {FacilityGroupRoleType} from '../product/FacilityGroupRoleType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {BudgetRoleType} from '../accounting/BudgetRoleType.js';
import {WebSiteRoleType} from '../content/WebSiteRoleType.js';
import {TimesheetRoleType} from '../workeffort/TimesheetRoleType.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccountType.js';
import {ProdCatalogRoleType} from '../product/ProdCatalogRoleType.js';
import {SegmentGroupRoleType} from '../marketing/SegmentGroupRoleType.js';
import {PartyType} from '../party/PartyType.js';
import {EmploymentType} from '../humanres/EmploymentType.js';
import {ContentRoleType} from '../content/ContentRoleType.js';
import {FinAccountRoleType} from '../accounting/FinAccountRoleType.js';
import {ItemIssuanceRoleType} from '../shipment/ItemIssuanceRoleType.js';
import {OrderRoleType} from '../order/OrderRoleType.js';
import {PayrollPreferenceType} from '../humanres/PayrollPreferenceType.js';
import {ShipmentReceiptRoleType} from '../shipment/ShipmentReceiptRoleType.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethodType.js';
import {InvoiceRoleType} from '../accounting/InvoiceRoleType.js';
import {ProductRoleType} from '../product/ProductRoleType.js';
import {DataResourceRoleType} from '../content/DataResourceRoleType.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignmentType.js';
import {PerfReviewType} from '../humanres/PerfReviewType.js';
import {OrderItemRoleType} from '../order/OrderItemRoleType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {MarketingCampaignRoleType} from '../marketing/MarketingCampaignRoleType.js';
import {GlAccountRoleType} from '../accounting/GlAccountRoleType.js';
import {AgreementType} from '../party/AgreementType.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRoleType.js';
import {PartyRelationshipType} from '../party/PartyRelationshipType.js';
import {PartyBenefitType} from '../humanres/PartyBenefitType.js';
import {PicklistRoleType} from '../shipment/PicklistRoleType.js';
import {FacilityPartyType} from '../product/FacilityPartyType.js';
import {PerformanceNoteType} from '../humanres/PerformanceNoteType.js';
import {ProductCategoryRoleType} from '../product/ProductCategoryRoleType.js';
import {PerfReviewItemType} from '../humanres/PerfReviewItemType.js';
import {CustRequestPartyType} from '../order/CustRequestPartyType.js';
import {PartyFixedAssetAssignmentType} from '../accounting/PartyFixedAssetAssignmentType.js';
import {ProductStoreGroupRoleType} from '../product/ProductStoreGroupRoleType.js';
import {RequirementRoleType} from '../order/RequirementRoleType.js';
import {QuoteRoleType} from '../order/QuoteRoleType.js';
import {ProductStoreRoleType} from '../product/ProductStoreRoleType.js';
import {PartyContactMechType} from '../party/PartyContactMechType.js';


const PartyRoleType = new GraphQLObjectType({
  name: 'PartyRoleType',
  description: 'Type for PartyRole in party',

  fields: () => ({
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${partyRole.roleTypeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyRole.partyId}`)
    },
    payrollPreference: {
      type: new GraphQLList(PayrollPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`payrollPreferences/find?partyId=${partyRole.partyId}`)
    },
    carrierShipmentMethod: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?partyId=${partyRole.partyId}`)
    },
    workEffortPartyAssignment: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?partyId=${partyRole.partyId}`)
    },
    glAccountRole: {
      type: new GraphQLList(GlAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`glAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    partyGlAccount: {
      type: new GraphQLList(PartyGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?partyId=${partyRole.partyId}`)
    },
    productCategoryRole: {
      type: new GraphQLList(ProductCategoryRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productCategoryRoles/find?partyId=${partyRole.partyId}`)
    },
    perfReviewItem: {
      type: new GraphQLList(PerfReviewItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`perfReviewItems/find?partyId=${partyRole.partyId}`)
    },
    partyBenefit: {
      type: new GraphQLList(PartyBenefitType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyBenefits/find?partyId=${partyRole.partyId}`)
    },
    contentRole: {
      type: new GraphQLList(ContentRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`contentRoles/find?partyId=${partyRole.partyId}`)
    },
    agreement: {
      type: new GraphQLList(AgreementType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?partyId=${partyRole.partyId}`)
    },
    finAccountRole: {
      type: new GraphQLList(FinAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`finAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    productStoreGroupRole: {
      type: new GraphQLList(ProductStoreGroupRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    partyFixedAssetAssignment: {
      type: new GraphQLList(PartyFixedAssetAssignmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyFixedAssetAssignments/find?partyId=${partyRole.partyId}`)
    },
    communicationEventRole: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?partyId=${partyRole.partyId}`)
    },
    employment: {
      type: new GraphQLList(EmploymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`employments/find?partyId=${partyRole.partyId}`)
    },
    itemIssuanceRole: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`itemIssuanceRoles/find?partyId=${partyRole.partyId}`)
    },
    performanceNote: {
      type: new GraphQLList(PerformanceNoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`performanceNotes/find?partyId=${partyRole.partyId}`)
    },
    orderItemRole: {
      type: new GraphQLList(OrderItemRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?partyId=${partyRole.partyId}`)
    },
    picklistRole: {
      type: new GraphQLList(PicklistRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`picklistRoles/find?partyId=${partyRole.partyId}`)
    },
    partyRelationship: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?partyId=${partyRole.partyId}`)
    },
    productStoreRole: {
      type: new GraphQLList(ProductStoreRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productStoreRoles/find?partyId=${partyRole.partyId}`)
    },
    perfReview: {
      type: new GraphQLList(PerfReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?partyId=${partyRole.partyId}`)
    },
    budgetRole: {
      type: new GraphQLList(BudgetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`budgetRoles/find?partyId=${partyRole.partyId}`)
    },
    agreement: {
      type: new GraphQLList(AgreementType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?partyId=${partyRole.partyId}`)
    },
    employment: {
      type: new GraphQLList(EmploymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`employments/find?partyId=${partyRole.partyId}`)
    },
    facilityParty: {
      type: new GraphQLList(FacilityPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?partyId=${partyRole.partyId}`)
    },
    orderRole: {
      type: new GraphQLList(OrderRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`orderRoles/find?partyId=${partyRole.partyId}`)
    },
    segmentGroupRole: {
      type: new GraphQLList(SegmentGroupRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    webSiteRole: {
      type: new GraphQLList(WebSiteRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`webSiteRoles/find?partyId=${partyRole.partyId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?partyId=${partyRole.partyId}`)
    },
    custRequestParty: {
      type: new GraphQLList(CustRequestPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`custRequestPartys/find?partyId=${partyRole.partyId}`)
    },
    agreementRole: {
      type: new GraphQLList(AgreementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`agreementRoles/find?partyId=${partyRole.partyId}`)
    },
    productRole: {
      type: new GraphQLList(ProductRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productRoles/find?partyId=${partyRole.partyId}`)
    },
    dataResourceRole: {
      type: new GraphQLList(DataResourceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`dataResourceRoles/find?partyId=${partyRole.partyId}`)
    },
    requirementRole: {
      type: new GraphQLList(RequirementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`requirementRoles/find?partyId=${partyRole.partyId}`)
    },
    shipmentReceiptRole: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceiptRoles/find?partyId=${partyRole.partyId}`)
    },
    invoiceRole: {
      type: new GraphQLList(InvoiceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`invoiceRoles/find?partyId=${partyRole.partyId}`)
    },
    partyBenefit: {
      type: new GraphQLList(PartyBenefitType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyBenefits/find?partyId=${partyRole.partyId}`)
    },
    prodCatalogRole: {
      type: new GraphQLList(ProdCatalogRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogRoles/find?partyId=${partyRole.partyId}`)
    },
    billingAccountRole: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`billingAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    partyContactMech: {
      type: new GraphQLList(PartyContactMechType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?partyId=${partyRole.partyId}`)
    },
    facilityGroupRole: {
      type: new GraphQLList(FacilityGroupRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    quoteRole: {
      type: new GraphQLList(QuoteRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`quoteRoles/find?partyId=${partyRole.partyId}`)
    },
    partyRelationship: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?partyId=${partyRole.partyId}`)
    },
    timesheetRole: {
      type: new GraphQLList(TimesheetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`timesheetRoles/find?partyId=${partyRole.partyId}`)
    },
    marketingCampaignRole: {
      type: new GraphQLList(MarketingCampaignRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignRoles/find?partyId=${partyRole.partyId}`)
    }
  })
});

export {PartyRoleType};
    