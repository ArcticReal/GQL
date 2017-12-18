
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


const ContactMechLinkType = new GraphQLObjectType({
  name: 'ContactMechLinkType',
  description: 'Type for ContactMechLink in party',

  fields: () => ({
    contactMechFrom: {
      type: ContactMechType,
      args : {contactMechIdFrom: {type: GraphQLString}},
      resolve: (contactMechLink, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${contactMechLink.contactMechIdFrom}`)
    },
    contactMechTo: {
      type: ContactMechType,
      args : {contactMechIdTo: {type: GraphQLString}},
      resolve: (contactMechLink, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${contactMechLink.contactMechIdTo}`)
    }
  })
});

export {ContactMechLinkType};
    




const ContactMechLinkInputType = new GraphQLInputObjectType({
  name: 'ContactMechLinkInputType',
  description: 'input type for ContactMechLink',

  fields: () => ({
    contactMechIdFrom: {type: GraphQLString},
    contactMechIdTo: {type: GraphQLString}
  })
});

export {ContactMechLinkInputType};
    