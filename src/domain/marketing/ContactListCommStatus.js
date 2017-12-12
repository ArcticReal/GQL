
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

import {PartyType} from '../party/Party.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {ContactListType} from '../marketing/ContactList.js';
import {ContactMechType} from '../party/ContactMech.js';
import {UserLoginType} from '../login/UserLogin.js';


const ContactListCommStatusType = new GraphQLObjectType({
  name: 'ContactListCommStatusType',
  description: 'Type for ContactListCommStatus in marketing',

  fields: () => ({
    statusId: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`marketing/contactLists/find?contactListId=${contactListCommStatus.contactListId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${contactListCommStatus.communicationEventId}`)
    },
    messageId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${contactListCommStatus.partyId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${contactListCommStatus.contactMechId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (contactListCommStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${contactListCommStatus.changeByUserLoginId}`)
    }
  })
});

export {ContactListCommStatusType};
    




const ContactListCommStatusInputType = new GraphQLInputObjectType({
  name: 'ContactListCommStatusInputType',
  description: 'input type for ContactListCommStatus in marketing',

  fields: () => ({
    statusId: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    messageId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString}
  })
});

export {ContactListCommStatusInputType};
    