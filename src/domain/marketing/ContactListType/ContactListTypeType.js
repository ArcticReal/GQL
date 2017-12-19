
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

import {ContactListType} from '../../marketing/ContactList/ContactListType.js';


const ContactListTypeType = new GraphQLObjectType({
  name: 'ContactListTypeType',
  description: 'Type for ContactListType in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    contactListTypeId: {type: GraphQLString},
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {},
      resolve: (contactListType, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactLists/find?contactListTypeId=${contactListType.contactListTypeId}`)
    }
  })
});

export {ContactListTypeType};
    