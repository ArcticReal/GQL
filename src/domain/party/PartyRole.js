
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

import {BillingAccountRoleType} from '../accounting/BillingAccountRole.js';
import {AgreementRoleType} from '../party/AgreementRole.js';
import {FacilityGroupRoleType} from '../product/FacilityGroupRole.js';
import {RoleTypeType} from '../party/RoleType.js';
import {BudgetRoleType} from '../accounting/BudgetRole.js';
import {WebSiteRoleType} from '../content/WebSiteRole.js';
import {TimesheetRoleType} from '../workeffort/TimesheetRole.js';
import {PartyGlAccountType} from '../accounting/PartyGlAccount.js';
import {ProdCatalogRoleType} from '../product/ProdCatalogRole.js';
import {SegmentGroupRoleType} from '../marketing/SegmentGroupRole.js';
import {PartyType} from '../party/Party.js';
import {EmploymentType} from '../humanres/Employment.js';
import {ContentRoleType} from '../content/ContentRole.js';
import {FinAccountRoleType} from '../accounting/FinAccountRole.js';
import {ItemIssuanceRoleType} from '../shipment/ItemIssuanceRole.js';
import {OrderRoleType} from '../order/OrderRole.js';
import {PayrollPreferenceType} from '../humanres/PayrollPreference.js';
import {ShipmentReceiptRoleType} from '../shipment/ShipmentReceiptRole.js';
import {CarrierShipmentMethodType} from '../shipment/CarrierShipmentMethod.js';
import {InvoiceRoleType} from '../accounting/InvoiceRole.js';
import {ProductRoleType} from '../product/ProductRole.js';
import {DataResourceRoleType} from '../content/DataResourceRole.js';
import {WorkEffortPartyAssignmentType} from '../workeffort/WorkEffortPartyAssignment.js';
import {PerfReviewType} from '../humanres/PerfReview.js';
import {OrderItemRoleType} from '../order/OrderItemRole.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {MarketingCampaignRoleType} from '../marketing/MarketingCampaignRole.js';
import {GlAccountRoleType} from '../accounting/GlAccountRole.js';
import {AgreementType} from '../party/Agreement.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRole.js';
import {PartyRelationshipType} from '../party/PartyRelationship.js';
import {PartyBenefitType} from '../humanres/PartyBenefit.js';
import {PicklistRoleType} from '../shipment/PicklistRole.js';
import {FacilityPartyType} from '../product/FacilityParty.js';
import {PerformanceNoteType} from '../humanres/PerformanceNote.js';
import {ProductCategoryRoleType} from '../product/ProductCategoryRole.js';
import {PerfReviewItemType} from '../humanres/PerfReviewItem.js';
import {CustRequestPartyType} from '../order/CustRequestParty.js';
import {PartyFixedAssetAssignmentType} from '../accounting/PartyFixedAssetAssignment.js';
import {ProductStoreGroupRoleType} from '../product/ProductStoreGroupRole.js';
import {RequirementRoleType} from '../order/RequirementRole.js';
import {QuoteRoleType} from '../order/QuoteRole.js';
import {ProductStoreRoleType} from '../product/ProductStoreRole.js';
import {PartyContactMechType} from '../party/PartyContactMech.js';


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
    payrollPreferences: {
      type: new GraphQLList(PayrollPreferenceType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`payrollPreferences/find?partyId=${partyRole.partyId}`)
    },
    carrierShipmentMethods: {
      type: new GraphQLList(CarrierShipmentMethodType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentMethods/find?partyId=${partyRole.partyId}`)
    },
    workEffortPartyAssignments: {
      type: new GraphQLList(WorkEffortPartyAssignmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`workEffortPartyAssignments/find?partyId=${partyRole.partyId}`)
    },
    glAccountRoles: {
      type: new GraphQLList(GlAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`glAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    partyGlAccounts: {
      type: new GraphQLList(PartyGlAccountType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyGlAccounts/find?partyId=${partyRole.partyId}`)
    },
    productCategoryRoles: {
      type: new GraphQLList(ProductCategoryRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productCategoryRoles/find?partyId=${partyRole.partyId}`)
    },
    perfReviewItems: {
      type: new GraphQLList(PerfReviewItemType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`perfReviewItems/find?partyId=${partyRole.partyId}`)
    },
    partyBenefits: {
      type: new GraphQLList(PartyBenefitType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyBenefits/find?partyId=${partyRole.partyId}`)
    },
    contentRoles: {
      type: new GraphQLList(ContentRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`contentRoles/find?partyId=${partyRole.partyId}`)
    },
    agreements: {
      type: new GraphQLList(AgreementType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`agreements/find?partyId=${partyRole.partyId}`)
    },
    finAccountRoles: {
      type: new GraphQLList(FinAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`finAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    productStoreGroupRoles: {
      type: new GraphQLList(ProductStoreGroupRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    partyFixedAssetAssignments: {
      type: new GraphQLList(PartyFixedAssetAssignmentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyFixedAssetAssignments/find?partyId=${partyRole.partyId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?partyId=${partyRole.partyId}`)
    },
    employments: {
      type: new GraphQLList(EmploymentType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`employments/find?partyId=${partyRole.partyId}`)
    },
    itemIssuanceRoles: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`itemIssuanceRoles/find?partyId=${partyRole.partyId}`)
    },
    performanceNotes: {
      type: new GraphQLList(PerformanceNoteType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`performanceNotes/find?partyId=${partyRole.partyId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?partyId=${partyRole.partyId}`)
    },
    picklistRoles: {
      type: new GraphQLList(PicklistRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`picklistRoles/find?partyId=${partyRole.partyId}`)
    },
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?partyId=${partyRole.partyId}`)
    },
    productStoreRoles: {
      type: new GraphQLList(ProductStoreRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productStoreRoles/find?partyId=${partyRole.partyId}`)
    },
    perfReviews: {
      type: new GraphQLList(PerfReviewType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?partyId=${partyRole.partyId}`)
    },
    budgetRoles: {
      type: new GraphQLList(BudgetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`budgetRoles/find?partyId=${partyRole.partyId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?partyId=${partyRole.partyId}`)
    },
    orderRoles: {
      type: new GraphQLList(OrderRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`orderRoles/find?partyId=${partyRole.partyId}`)
    },
    segmentGroupRoles: {
      type: new GraphQLList(SegmentGroupRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    webSiteRoles: {
      type: new GraphQLList(WebSiteRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`webSiteRoles/find?partyId=${partyRole.partyId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?partyId=${partyRole.partyId}`)
    },
    custRequestParties: {
      type: new GraphQLList(CustRequestPartyType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`custRequestPartys/find?partyId=${partyRole.partyId}`)
    },
    agreementRoles: {
      type: new GraphQLList(AgreementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`agreementRoles/find?partyId=${partyRole.partyId}`)
    },
    productRoles: {
      type: new GraphQLList(ProductRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`productRoles/find?partyId=${partyRole.partyId}`)
    },
    dataResourceRoles: {
      type: new GraphQLList(DataResourceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`dataResourceRoles/find?partyId=${partyRole.partyId}`)
    },
    requirementRoles: {
      type: new GraphQLList(RequirementRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`requirementRoles/find?partyId=${partyRole.partyId}`)
    },
    shipmentReceiptRoles: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceiptRoles/find?partyId=${partyRole.partyId}`)
    },
    invoiceRoles: {
      type: new GraphQLList(InvoiceRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`invoiceRoles/find?partyId=${partyRole.partyId}`)
    },
    prodCatalogRoles: {
      type: new GraphQLList(ProdCatalogRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogRoles/find?partyId=${partyRole.partyId}`)
    },
    billingAccountRoles: {
      type: new GraphQLList(BillingAccountRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`billingAccountRoles/find?partyId=${partyRole.partyId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?partyId=${partyRole.partyId}`)
    },
    facilityGroupRoles: {
      type: new GraphQLList(FacilityGroupRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`facilityGroupRoles/find?partyId=${partyRole.partyId}`)
    },
    quoteRoles: {
      type: new GraphQLList(QuoteRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`quoteRoles/find?partyId=${partyRole.partyId}`)
    },
    timesheetRoles: {
      type: new GraphQLList(TimesheetRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`timesheetRoles/find?partyId=${partyRole.partyId}`)
    },
    marketingCampaignRoles: {
      type: new GraphQLList(MarketingCampaignRoleType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyRole, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignRoles/find?partyId=${partyRole.partyId}`)
    }
  })
});

export {PartyRoleType};
    




const PartyRoleInputType = new GraphQLInputObjectType({
  name: 'PartyRoleInputType',
  description: 'input type for PartyRole in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyRoleInputType};
    