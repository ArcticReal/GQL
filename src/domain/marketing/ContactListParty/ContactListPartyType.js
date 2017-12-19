
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

import {PartyType} from '../../party/Party/PartyType.js';
import {ContactListPartyStatusType} from '../../marketing/ContactListPartyStatus/ContactListPartyStatusType.js';
import {ContactListType} from '../../marketing/ContactList/ContactListType.js';
import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';


const ContactListPartyType = new GraphQLObjectType({
  name: 'ContactListPartyType',
  description: 'Type for ContactListParty in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbiz.load(`marketing/contactLists/find?contactListId=${contactListParty.contactListId}`)
    },
    preferredContactMech: {
      type: ContactMechType,
      args : {preferredContactMechId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${contactListParty.preferredContactMechId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${contactListParty.partyId}`)
    },
    thruDate: {type: GraphQLString},
    contactListPartyStatuses: {
      type: new GraphQLList(ContactListPartyStatusType),
      args : {},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactList/contactListPartyStatuss/find?contactListId=${contactListParty.contactListId}`)
    }
  })
});

export {ContactListPartyType};
    