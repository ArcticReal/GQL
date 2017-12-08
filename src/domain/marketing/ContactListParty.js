
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
import {ContactListPartyStatusType} from '../marketing/ContactListPartyStatus.js';
import {ContactListType} from '../marketing/ContactList.js';
import {ContactMechType} from '../party/ContactMech.js';


const ContactListPartyType = new GraphQLObjectType({
  name: 'ContactListPartyType',
  description: 'Type for ContactListParty in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbiz.load(`contactLists/find?contactListId=${contactListParty.contactListId}`)
    },
    preferredContactMech: {
      type: ContactMechType,
      args : {preferredContactMechId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${contactListParty.preferredContactMechId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${contactListParty.partyId}`)
    },
    thruDate: {type: GraphQLString},
    contactListPartyStatuses: {
      type: new GraphQLList(ContactListPartyStatusType),
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactListParty, args, {loaders}) => loaders.ofbizArray.load(`contactListPartyStatuss/find?contactListId=${contactListParty.contactListId}`)
    }
  })
});

export {ContactListPartyType};
    




const ContactListPartyInputType = new GraphQLInputObjectType({
  name: 'ContactListPartyInputType',
  description: 'input type for ContactListParty in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    preferredContactMechId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContactListPartyInputType};
    