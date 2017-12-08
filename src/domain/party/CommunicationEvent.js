
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

import {ContactMechTypeType} from '../party/ContactMechType.js';
import {CommunicationEventOrderType} from '../order/CommunicationEventOrder.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatus.js';
import {RoleTypeType} from '../party/RoleType.js';
import {PartyNeedType} from '../party/PartyNeed.js';
import {ContactListType} from '../marketing/ContactList.js';
import {ContactMechType} from '../party/ContactMech.js';
import {CommunicationEventProductType} from '../party/CommunicationEventProduct.js';
import {MimeTypeType} from '../content/MimeType.js';
import {CommunicationEventPurposeType} from '../party/CommunicationEventPurpose.js';
import {CustRequestCommEventType} from '../order/CustRequestCommEvent.js';
import {CommunicationEventWorkEffType} from '../workeffort/CommunicationEventWorkEff.js';
import {CommunicationEventRoleType} from '../party/CommunicationEventRole.js';
import {PartyType} from '../party/Party.js';
import {CommunicationEventTypeType} from '../party/CommunicationEventType.js';
import {SubscriptionCommEventType} from '../product/SubscriptionCommEvent.js';
import {CommEventContentAssocType} from '../party/CommEventContentAssoc.js';


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
    custRequestCommEvents: {
      type: new GraphQLList(CustRequestCommEventType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`custRequestCommEvents/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventRoles/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    subscriptionCommEvents: {
      type: new GraphQLList(SubscriptionCommEventType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`subscriptionCommEvents/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventOrders: {
      type: new GraphQLList(CommunicationEventOrderType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventOrders/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    commEventContentAssocs: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`commEventContentAssocs/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventWorkEffs: {
      type: new GraphQLList(CommunicationEventWorkEffType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventWorkEffs/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventPurposes: {
      type: new GraphQLList(CommunicationEventPurposeType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventPurposes/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventProducts: {
      type: new GraphQLList(CommunicationEventProductType),
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEventProducts/find?communicationEventId=${communicationEvent.communicationEventId}`)
    }
  })
});

export {CommunicationEventType};
    




const CommunicationEventInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventInputType',
  description: 'input type for CommunicationEvent in party',

  fields: () => ({
    partyIdFrom: {type: GraphQLString},
    note: {type: GraphQLString},
    subject: {type: GraphQLString},
    ccString: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    communicationEventTypeId: {type: GraphQLString},
    content: {type: GraphQLString},
    contentMimeTypeId: {type: GraphQLString},
    datetimeStarted: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    contactMechIdFrom: {type: GraphQLString},
    reasonEnumId: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    parentCommEventId: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    datetimeEnded: {type: GraphQLString},
    origCommEventId: {type: GraphQLString},
    messageId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    contactMechIdTo: {type: GraphQLString},
    headerString: {type: GraphQLString},
    statusId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    bccString: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    toString: {type: GraphQLString},
    fromString: {type: GraphQLString}
  })
});

export {CommunicationEventInputType};
    