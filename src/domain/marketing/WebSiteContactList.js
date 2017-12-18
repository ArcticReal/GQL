
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

import {ContactListType} from '../marketing/ContactList.js';


const WebSiteContactListType = new GraphQLObjectType({
  name: 'WebSiteContactListType',
  description: 'Type for WebSiteContactList in marketing',

  fields: () => ({
    fromDate: {type: GraphQLString},
    contactList: {
      type: ContactListType,
      args : {contactListId: {type: GraphQLString}},
      resolve: (webSiteContactList, args, {loaders}) => loaders.ofbiz.load(`marketing/contactLists/find?contactListId=${webSiteContactList.contactListId}`)
    },
    webSiteId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WebSiteContactListType};
    




const WebSiteContactListInputType = new GraphQLInputObjectType({
  name: 'WebSiteContactListInputType',
  description: 'input type for WebSiteContactList',

  fields: () => ({
    contactListId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSiteContactListInputType};
    