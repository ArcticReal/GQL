
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
import {PartyType} from '../../party/Party/PartyType.js';
import {ContactListCommStatusType} from '../../marketing/ContactListCommStatus/ContactListCommStatusType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {WebSiteContactListType} from '../../marketing/WebSiteContactList/WebSiteContactListType.js';
import {MarketingCampaignType} from '../../marketing/MarketingCampaign/MarketingCampaignType.js';
import {ContactListTypeType} from '../../marketing/ContactListType/ContactListTypeType.js';
import {ContactListPartyType} from '../../marketing/ContactListParty/ContactListPartyType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`marketing/marketingCampaigns/find?marketingCampaignId=${contactList.marketingCampaignId}`)
    },
    optOutScreen: {type: GraphQLString},
    description: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${contactList.contactMechTypeId}`)
    },
    contactListType: {
      type: ContactListTypeType,
      args : {contactListTypeId: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`marketing/contactList/contactListTypes/find?contactListTypeId=${contactList.contactListTypeId}`)
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
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${contactList.lastModifiedByUserLogin}`)
    },
    singleUse: {type: GraphQLBoolean},
    contactListId: {type: GraphQLString},
    isPublic: {type: GraphQLBoolean},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (contactList, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${contactList.createdByUserLogin}`)
    },
    verifyEmailScreen: {type: GraphQLString},
    verifyEmailWebSiteId: {type: GraphQLString},
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?contactListId=${contactList.contactListId}`)
    },
    webSiteContactLists: {
      type: new GraphQLList(WebSiteContactListType),
      args : {},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/webSiteContactLists/find?contactListId=${contactList.contactListId}`)
    },
    contactListParties: {
      type: new GraphQLList(ContactListPartyType),
      args : {},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListPartys/find?contactListId=${contactList.contactListId}`)
    },
    contactListCommStatuses: {
      type: new GraphQLList(ContactListCommStatusType),
      args : {},
      resolve: (contactList, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListCommStatuss/find?contactListId=${contactList.contactListId}`)
    }
  })
});

export {ContactListType};
    