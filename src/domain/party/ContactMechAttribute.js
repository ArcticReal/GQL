
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

import {ContactMechType} from '../party/ContactMech.js';


const ContactMechAttributeType = new GraphQLObjectType({
  name: 'ContactMechAttributeType',
  description: 'Type for ContactMechAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (contactMechAttribute, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${contactMechAttribute.contactMechId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ContactMechAttributeType};
    




const ContactMechAttributeInputType = new GraphQLInputObjectType({
  name: 'ContactMechAttributeInputType',
  description: 'input type for ContactMechAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ContactMechAttributeInputType};
    