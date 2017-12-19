
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

import {ContactMechType} from '../../party/ContactMech/ContactMechType.js';


const ContactMechAttributeType = new GraphQLObjectType({
  name: 'ContactMechAttributeType',
  description: 'Type for ContactMechAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMechAttribute, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${contactMechAttribute.contactMechId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ContactMechAttributeType};
    