
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

import {ContactListPartyType} from '../marketing/ContactListParty.js';


const ContactListPartyStatusType = new GraphQLObjectType({
  name: 'ContactListPartyStatusType',
  description: 'Type for ContactListPartyStatus in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    optInVerifyCode: {type: GraphQLString},
    statusId: {type: GraphQLString},
    contactList: {
      type: ContactListPartyType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (contactListPartyStatus, args, {loaders}) => loaders.ofbiz.load(`contactListPartys/find?contactListId=${contactListPartyStatus.contactListId}`)
    },
    setByUserLoginId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ContactListPartyStatusType};
    




const ContactListPartyStatusInputType = new GraphQLInputObjectType({
  name: 'ContactListPartyStatusInputType',
  description: 'input type for ContactListPartyStatus in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    optInVerifyCode: {type: GraphQLString},
    statusId: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    setByUserLoginId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ContactListPartyStatusInputType};
    