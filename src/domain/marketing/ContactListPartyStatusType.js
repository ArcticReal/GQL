
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContactListPartyType} from '../marketing/ContactListPartyType.js';


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
    