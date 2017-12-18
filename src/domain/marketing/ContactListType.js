
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
    




const ContactListTypeInputType = new GraphQLInputObjectType({
  name: 'ContactListTypeInputType',
  description: 'input type for ContactListType',

  fields: () => ({
    contactListTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactListTypeInputType};
    