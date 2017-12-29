
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

import {ContactMechTypeType} from '../../party/ContactMechType/ContactMechTypeType.js';
import {CommunicationEventOrderType} from '../../order/CommunicationEventOrder/CommunicationEventOrderType.js';
import {ContactListCommStatusType} from '../../marketing/ContactListCommStatus/ContactListCommStatusType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {PartyNeedType} from '../../party/PartyNeed/PartyNeedType.js';
import {ContactListType} from '../../marketing/ContactList/ContactListType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';
import {CommunicationEventProductType} from '../../party/CommunicationEventProduct/CommunicationEventProductType.js';
import {MimeTypeType} from '../../content/MimeType/MimeTypeType.js';
import {CommunicationEventPurposeType} from '../../party/CommunicationEventPurpose/CommunicationEventPurposeType.js';
import {CustRequestCommEventType} from '../../order/CustRequestCommEvent/CustRequestCommEventType.js';
import {CommunicationEventWorkEffType} from '../../workeffort/CommunicationEventWorkEff/CommunicationEventWorkEffType.js';
import {CommunicationEventRoleType} from '../../party/CommunicationEventRole/CommunicationEventRoleType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {CommunicationEventTypeType} from '../../party/CommunicationEventType/CommunicationEventTypeType.js';
import {SubscriptionCommEventType} from '../../product/SubscriptionCommEvent/SubscriptionCommEventType.js';
import {CommEventContentAssocType} from '../../party/CommEventContentAssoc/CommEventContentAssocType.js';


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
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${communicationEvent.contactMechTypeId}`)
    },
    communicationEventType: {
      type: CommunicationEventTypeType,
      args : {communicationEventTypeId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvent/communicationEventTypes/find?communicationEventTypeId=${communicationEvent.communicationEventTypeId}`)
    },
    content: {type: GraphQLString},
    contentMimeType: {
      type: MimeTypeType,
      args : {contentMimeTypeId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`content/mimeTypes/find?mimeTypeId=${communicationEvent.contentMimeTypeId}`)
    },
    datetimeStarted: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`marketing/contactLists/find?contactListId=${communicationEvent.contactListId}`)
    },
    contactMechFrom: {
      type: ContactMechType,
      args : {contactMechIdFrom: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${communicationEvent.contactMechIdFrom}`)
    },
    reasonEnumId: {type: GraphQLString},
    roleTypeTo: {
      type: RoleTypeType,
      args : {roleTypeIdTo: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${communicationEvent.roleTypeIdTo}`)
    },
    parentCommEventId: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    datetimeEnded: {type: GraphQLString},
    origCommEventId: {type: GraphQLString},
    messageId: {type: GraphQLString},
    roleTypeFrom: {
      type: RoleTypeType,
      args : {roleTypeIdFrom: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${communicationEvent.roleTypeIdFrom}`)
    },
    contactMechTo: {
      type: ContactMechType,
      args : {contactMechIdTo: {type: GraphQLString}},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${communicationEvent.contactMechIdTo}`)
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
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestCommEvents/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventRoles: {
      type: new GraphQLList(CommunicationEventRoleType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventRoles/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    subscriptionCommEvents: {
      type: new GraphQLList(SubscriptionCommEventType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionCommEvents/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventOrders: {
      type: new GraphQLList(CommunicationEventOrderType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`order/communicationEventOrders/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    commEventContentAssocs: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`party/commEventContentAssocs/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListCommStatuss/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventWorkEffs: {
      type: new GraphQLList(CommunicationEventWorkEffType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`workeffort/communicationEventWorkEffs/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventPurposes: {
      type: new GraphQLList(CommunicationEventPurposeType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventPurposes/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?communicationEventId=${communicationEvent.communicationEventId}`)
    },
    communicationEventProducts: {
      type: new GraphQLList(CommunicationEventProductType),
      args : {},
      resolve: (communicationEvent, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventProducts/find?communicationEventId=${communicationEvent.communicationEventId}`)
    }
  })
});

export {CommunicationEventType};
    