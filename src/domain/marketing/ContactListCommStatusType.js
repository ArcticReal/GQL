
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {ContactListType} from '../marketing/ContactListType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ContactListCommStatusType = new GraphQLObjectType({
  name: 'ContactListCommStatusType',
  description: 'Type for ContactListCommStatus in marketing',

  fields: () => ({
    statusId: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`contactLists/find?contactListId=${contactListCommStatus.contactListId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${contactListCommStatus.communicationEventId}`)
    },
    messageId: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${contactListCommStatus.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${contactListCommStatus.contactMechId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${contactListCommStatus.changeByUserLoginId}`)
    }
  })
});

export {ContactListCommStatusType};
    