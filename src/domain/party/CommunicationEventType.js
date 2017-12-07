
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContactMechTypeType} from '../party/ContactMechTypeType.js';
import {CommunicationEventOrderType} from '../order/CommunicationEventOrderType.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatusType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {PartyNeedType} from '../party/PartyNeedType.js';
import {ContactListType} from '../marketing/ContactListType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {CommunicationEventProductType} from '../party/CommunicationEventProductType.js';
import {MimeTypeType} from '../content/MimeTypeType.js';
import {CommunicationEventPurposeType} from '../party/CommunicationEventPurposeType.js';
import {CustRequestCommEventType} from '../order/CustRequestCommEventType.js';
import {CommunicationEventWorkEffType} from '../workeffort/CommunicationEventWorkEffType.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRoleType.js';
import {PartyType} from '../party/PartyType.js';
import {CommunicationEventTypeType} from '../party/CommunicationEventTypeType.js';
import {SubscriptionCommEventType} from '../product/SubscriptionCommEventType.js';
import {CommEventContentAssocType} from '../party/CommEventContentAssocType.js';


const CommunicationEventType = new GraphQLObjectType({
  name: 'CommunicationEventType',
  description: 'Type for CommunicationEvent in party',

  fields: () => ({
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${communicationEvent.partyIdFrom}`)
    },
    note: {type: GraphQLString},
    subject: {type: GraphQLString},
    ccString: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${communicationEvent.contactMechTypeId}`)
    },
    communicationEventType: {
      type: CommunicationEventTypeType,
      args : {communicationEventTypeId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`communicationEventTypes/find?communicationEventTypeId=${communicationEvent.communicationEventTypeId}`)
    },
    content: {type: GraphQLString},
    contentMimeType: {
      type: MimeTypeType,
      args : {contentMimeTypeId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`mimeTypes/find?mimeTypeId=${communicationEvent.contentMimeTypeId}`)
    },
    datetimeStarted: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`contactLists/find?contactListId=${communicationEvent.contactListId}`)
    },
    contactMechFrom: {
      type: ContactMechType,
      args : {contactMechIdFrom: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${communicationEvent.contactMechIdFrom}`)
    },
    reasonEnumId: {type: GraphQLString},
    roleTypeTo: {
      type: RoleTypeType,
      args : {roleTypeIdTo: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${communicationEvent.roleTypeIdTo}`)
    },
    parentCommEventId: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    datetimeEnded: {type: GraphQLString},
    origCommEventId: {type: GraphQLString},
    messageId: {type: GraphQLString},
    roleTypeFrom: {
      type: RoleTypeType,
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${communicationEvent.roleTypeIdFrom}`)
    },
    contactMechTo: {
      type: ContactMechType,
      args : {contactMechIdTo: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${communicationEvent.contactMechIdTo}`)
    },
    headerString: {type: GraphQLString},
    statusId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    bccString: {type: GraphQLString},
    partyTo: {
      type: PartyType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${communicationEvent.partyIdTo}`)
    },
    toString: {type: GraphQLString},
    fromString: {type: GraphQLString},
    custRequestCommEvent: {
      type: new GraphQLList(CustRequestCommEventType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`custRequestCommEvents/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventRole: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    subscriptionCommEvent: {
      type: new GraphQLList(SubscriptionCommEventType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`subscriptionCommEvents/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventOrder: {
      type: new GraphQLList(CommunicationEventOrderType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventOrders/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    commEventContentAssoc: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`commEventContentAssocs/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    contactListCommStatus: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventWorkEff: {
      type: new GraphQLList(CommunicationEventWorkEffType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventWorkEffs/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventPurpose: {
      type: new GraphQLList(CommunicationEventPurposeType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventPurposes/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventProduct: {
      type: new GraphQLList(CommunicationEventProductType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventProducts/find?communicationEventId=${communicationEvent.communicationEventId}`)
    }
  })
});

export {CommunicationEventType};
    