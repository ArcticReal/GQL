
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


const ContactMechTypeAttrType = new GraphQLObjectType({
  name: 'ContactMechTypeAttrType',
  description: 'Type for ContactMechTypeAttr in party',

  fields: () => ({
    description: {type: GraphQLString},
    contactMechType: {
      type: ContactMechTypeType,
      args : {contactMechTypeId: {type: GraphQLString}},
      resolve: (contactMechTypeAttr, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechTypes/find?contactMechTypeId=${contactMechTypeAttr.contactMechTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ContactMechTypeAttrType};
    