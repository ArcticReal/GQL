
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

import {ContentPurposeOperationType} from '../../content/ContentPurposeOperation/ContentPurposeOperationType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {InvoiceType} from '../../accounting/Invoice/InvoiceType.js';
import {PartyInvitationRoleAssocType} from '../../party/PartyInvitationRoleAssoc/PartyInvitationRoleAssocType.js';
import {ValidContactMechRoleType} from '../../party/ValidContactMechRole/ValidContactMechRoleType.js';
import {PartyRelationshipTypeType} from '../../party/PartyRelationshipType/PartyRelationshipTypeType.js';
import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';
import {PartyNeedType} from '../../party/PartyNeed/PartyNeedType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {ProductContentType} from '../../product/ProductContent/ProductContentType.js';
import {ShipmentCostEstimateType} from '../../shipment/ShipmentCostEstimate/ShipmentCostEstimateType.js';
import {ProductSubscriptionResourceType} from '../../product/ProductSubscriptionResource/ProductSubscriptionResourceType.js';
import {RoleTypeAttrType} from '../../party/RoleTypeAttr/RoleTypeAttrType.js';
import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {ContentApprovalType} from '../../content/ContentApproval/ContentApprovalType.js';
import {FacilityPartyType} from '../../product/FacilityParty/FacilityPartyType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {PartyContactMechType} from '../../party/PartyContactMech/PartyContactMechType.js';


const RoleTypeType = new GraphQLObjectType({
  name: 'RoleTypeType',
  description: 'Type for RoleType in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    parentType: {
      type: RoleTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${roleType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productContents/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyRelationshipTypes: {
      type: new GraphQLList(PartyRelationshipTypeType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationshipTypes/find?roleTypeId=${roleType.roleTypeId}`)
    },
    contentPurposeOperations: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentPurposeOperations/find?roleTypeId=${roleType.roleTypeId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?roleTypeId=${roleType.roleTypeId}`)
    },
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentCostEstimates/find?roleTypeId=${roleType.roleTypeId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?roleTypeId=${roleType.roleTypeId}`)
    },
    productSubscriptionResources: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productSubscriptionResources/find?roleTypeId=${roleType.roleTypeId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?roleTypeId=${roleType.roleTypeId}`)
    },
    contentApprovals: {
      type: new GraphQLList(ContentApprovalType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentApprovals/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/partyContactMechs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    validContactMechRoles: {
      type: new GraphQLList(ValidContactMechRoleType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/contactMech/validContactMechRoles/find?roleTypeId=${roleType.roleTypeId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?roleTypeId=${roleType.roleTypeId}`)
    },
    roleTypeAttrs: {
      type: new GraphQLList(RoleTypeAttrType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/roleType/roleTypeAttrs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?roleTypeId=${roleType.roleTypeId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityPartys/find?roleTypeId=${roleType.roleTypeId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoices/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyInvitationRoleAssocs: {
      type: new GraphQLList(PartyInvitationRoleAssocType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyInvitationRoleAssocs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?roleTypeId=${roleType.roleTypeId}`)
    },
    roleTypes: {
      type: new GraphQLList(RoleTypeType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/roleTypes/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyRoles: {
      type: new GraphQLList(PartyRoleType),
      args : {},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRoles/find?roleTypeId=${roleType.roleTypeId}`)
    }
  })
});

export {RoleTypeType};
    