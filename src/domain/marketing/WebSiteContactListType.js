
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContactListType} from '../marketing/ContactListType.js';


const WebSiteContactListType = new GraphQLObjectType({
  name: 'WebSiteContactListType',
  description: 'Type for WebSiteContactList in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (webSiteContactList, args, {loaders}) => loaders.ofbiz.load(`contactLists/find?contactListId=${webSiteContactList.contactListId}`)
    },
    webSiteId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WebSiteContactListType};
    