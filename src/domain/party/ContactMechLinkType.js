
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContactMechType} from '../party/ContactMechType.js';


const ContactMechLinkType = new GraphQLObjectType({
  name: 'ContactMechLinkType',
  description: 'Type for ContactMechLink in party',

  fields: () => ({
    contactMechFrom: {
      type: ContactMechType,
      args : {contactMechIdFrom: {type: GraphQLString}},
      resolve: (contactMechLink, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${contactMechLink.contactMechIdFrom}`)
    },
    contactMechTo: {
      type: ContactMechType,
      args : {contactMechIdTo: {type: GraphQLString}},
      resolve: (contactMechLink, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${contactMechLink.contactMechIdTo}`)
    }
  })
});

export {ContactMechLinkType};
    