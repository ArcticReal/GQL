
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
import {PartyType} from '../party/PartyType.js';
import {ContactListCommStatusType} from '../marketing/ContactListCommStatusType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {WebSiteContactListType} from '../marketing/WebSiteContactListType.js';
import {MarketingCampaignType} from '../marketing/MarketingCampaignType.js';
import {ContactListTypeType} from '../marketing/ContactListTypeType.js';
import {ContactListPartyType} from '../marketing/ContactListPartyType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ContactListType = new GraphQLObjectType({
  name: 'ContactListType',
  description: 'Type for ContactList in marketing',

  fields: () => ({
    verifyEmailSubject: {type: GraphQLString},
    comments: {type: GraphQLString},
    contactListName: {type: GraphQLString},
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${contactList.marketingCampaignId}`)
    },
    optOutScreen: {type: GraphQLString},
    description: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`contactMechTypes/find?contactMechTypeId=${contactList.contactMechTypeId}`)
    },
    contactListType: {
      type: ContactListTypeType,
      args : {contactListTypeId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`contactListTypes/find?contactListTypeId=${contactList.contactListTypeId}`)
    },
    verifyEmailFrom: {type: GraphQLString},
    ownerParty: {
      type: PartyType,
      args : {ownerPartyId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${contactList.ownerPartyId}`)
    },
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${contactList.lastModifiedByUserLogin}`)
    },
    singleUse: {type: GraphQLBoolean},
    contactListId: {type: GraphQLString},
    isPublic: {type: GraphQLBoolean},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${contactList.createdByUserLogin}`)
    },
    verifyEmailScreen: {type: GraphQLString},
    verifyEmailWebSiteId: {type: GraphQLString},
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?contactListId=${contactList.contactListId}`)
    },
    webSiteContactList: {
      type: new GraphQLList(WebSiteContactListType),
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`webSiteContactLists/find?contactListId=${contactList.contactListId}`)
    },
    contactListParty: {
      type: new GraphQLList(ContactListPartyType),
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`contactListPartys/find?contactListId=${contactList.contactListId}`)
    },
    contactListCommStatus: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`contactListCommStatuss/find?contactListId=${contactList.contactListId}`)
    }
  })
});

export {ContactListType};
    