
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentPurposeOperationType} from '../content/ContentPurposeOperationType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';
import {InvoiceType} from '../accounting/InvoiceType.js';
import {PartyInvitationRoleAssocType} from '../party/PartyInvitationRoleAssocType.js';
import {ValidContactMechRoleType} from '../party/ValidContactMechRoleType.js';
import {PartyRelationshipTypeType} from '../party/PartyRelationshipTypeType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';
import {PartyNeedType} from '../party/PartyNeedType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {ProductContentType} from '../product/ProductContentType.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimateType.js';
import {ProductSubscriptionResourceType} from '../product/ProductSubscriptionResourceType.js';
import {RoleTypeAttrType} from '../party/RoleTypeAttrType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {ContentApprovalType} from '../content/ContentApprovalType.js';
import {FacilityPartyType} from '../product/FacilityPartyType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {PartyContactMechType} from '../party/PartyContactMechType.js';


const RoleTypeType = new GraphQLObjectType({
  name: 'RoleTypeType',
  description: 'Type for RoleType in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    parentType: {
      type: RoleTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${roleType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productContent: {
      type: new GraphQLList(ProductContentType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyRelationshipType: {
      type: new GraphQLList(PartyRelationshipTypeType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationshipTypes/find?roleTypeId=${roleType.roleTypeId}`)
    },
    contentPurposeOperation: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`contentPurposeOperations/find?roleTypeId=${roleType.roleTypeId}`)
    },
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?roleTypeId=${roleType.roleTypeId}`)
    },
    shipmentCostEstimate: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?roleTypeId=${roleType.roleTypeId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?roleTypeId=${roleType.roleTypeId}`)
    },
    productSubscriptionResource: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`productSubscriptionResources/find?roleTypeId=${roleType.roleTypeId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`payments/find?roleTypeId=${roleType.roleTypeId}`)
    },
    contentApproval: {
      type: new GraphQLList(ContentApprovalType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`contentApprovals/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyContactMech: {
      type: new GraphQLList(PartyContactMechType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    validContactMechRole: {
      type: new GraphQLList(ValidContactMechRoleType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`validContactMechRoles/find?roleTypeId=${roleType.roleTypeId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?roleTypeId=${roleType.roleTypeId}`)
    },
    roleTypeAttr: {
      type: new GraphQLList(RoleTypeAttrType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`roleTypeAttrs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?roleTypeId=${roleType.roleTypeId}`)
    },
    facilityParty: {
      type: new GraphQLList(FacilityPartyType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?roleTypeId=${roleType.roleTypeId}`)
    },
    invoice: {
      type: new GraphQLList(InvoiceType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyInvitationRoleAssoc: {
      type: new GraphQLList(PartyInvitationRoleAssocType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationRoleAssocs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?roleTypeId=${roleType.roleTypeId}`)
    },
    roleType: {
      type: new GraphQLList(RoleTypeType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyRole: {
      type: new GraphQLList(PartyRoleType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?roleTypeId=${roleType.roleTypeId}`)
    }
  })
});

export {RoleTypeType};
    