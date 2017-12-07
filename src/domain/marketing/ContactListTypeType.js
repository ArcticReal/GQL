
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


const ContactListTypeType = new GraphQLObjectType({
  name: 'ContactListTypeType',
  description: 'Type for ContactListType in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    contactListTypeId: {type: GraphQLString},
    contactList: {
      type: new GraphQLList(ContactListType),
      args : {contactListTypeId: {type: GraphQLString}},
      resolve: (contactListType, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?contactListTypeId=${contactListType.contactListTypeId}`)
    }
  })
});

export {ContactListTypeType};
    