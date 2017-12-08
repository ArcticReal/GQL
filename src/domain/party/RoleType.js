
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

import {ContentPurposeOperationType} from '../content/ContentPurposeOperation.js';
import {PartyRoleType} from '../party/PartyRole.js';
import {InvoiceType} from '../accounting/Invoice.js';
import {PartyInvitationRoleAssocType} from '../party/PartyInvitationRoleAssoc.js';
import {ValidContactMechRoleType} from '../party/ValidContactMechRole.js';
import {PartyRelationshipTypeType} from '../party/PartyRelationshipType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntry.js';
import {PartyNeedType} from '../party/PartyNeed.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {ProductContentType} from '../product/ProductContent.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimate.js';
import {ProductSubscriptionResourceType} from '../product/ProductSubscriptionResource.js';
import {RoleTypeAttrType} from '../party/RoleTypeAttr.js';
import {PaymentType} from '../accounting/Payment.js';
import {ContentApprovalType} from '../content/ContentApproval.js';
import {FacilityPartyType} from '../product/FacilityParty.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {SubscriptionType} from '../product/Subscription.js';
import {PartyContactMechType} from '../party/PartyContactMech.js';


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
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyRelationshipTypes: {
      type: new GraphQLList(PartyRelationshipTypeType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationshipTypes/find?roleTypeId=${roleType.roleTypeId}`)
    },
    contentPurposeOperations: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`contentPurposeOperations/find?roleTypeId=${roleType.roleTypeId}`)
    },
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?roleTypeId=${roleType.roleTypeId}`)
    },
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?roleTypeId=${roleType.roleTypeId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?roleTypeId=${roleType.roleTypeId}`)
    },
    productSubscriptionResources: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`productSubscriptionResources/find?roleTypeId=${roleType.roleTypeId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`payments/find?roleTypeId=${roleType.roleTypeId}`)
    },
    contentApprovals: {
      type: new GraphQLList(ContentApprovalType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`contentApprovals/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyContactMeches: {
      type: new GraphQLList(PartyContactMechType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyContactMechs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    validContactMechRoles: {
      type: new GraphQLList(ValidContactMechRoleType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`validContactMechRoles/find?roleTypeId=${roleType.roleTypeId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?roleTypeId=${roleType.roleTypeId}`)
    },
    roleTypeAttrs: {
      type: new GraphQLList(RoleTypeAttrType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`roleTypeAttrs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?roleTypeId=${roleType.roleTypeId}`)
    },
    facilityParties: {
      type: new GraphQLList(FacilityPartyType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`facilityPartys/find?roleTypeId=${roleType.roleTypeId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyInvitationRoleAssocs: {
      type: new GraphQLList(PartyInvitationRoleAssocType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationRoleAssocs/find?roleTypeId=${roleType.roleTypeId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?roleTypeId=${roleType.roleTypeId}`)
    },
    roleTypes: {
      type: new GraphQLList(RoleTypeType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?roleTypeId=${roleType.roleTypeId}`)
    },
    partyRoles: {
      type: new GraphQLList(PartyRoleType),
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleType, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?roleTypeId=${roleType.roleTypeId}`)
    }
  })
});

export {RoleTypeType};
    




const RoleTypeInputType = new GraphQLInputObjectType({
  name: 'RoleTypeInputType',
  description: 'input type for RoleType in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {RoleTypeInputType};
    