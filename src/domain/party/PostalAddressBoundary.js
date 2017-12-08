
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

import {PostalAddressType} from '../party/PostalAddress.js';


const PostalAddressBoundaryType = new GraphQLObjectType({
  name: 'PostalAddressBoundaryType',
  description: 'Type for PostalAddressBoundary in party',

  fields: () => ({
    geoId: {type: GraphQLString},
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddressBoundary, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${postalAddressBoundary.contactMechId}`)
    }
  })
});

export {PostalAddressBoundaryType};
    




const PostalAddressBoundaryInputType = new GraphQLInputObjectType({
  name: 'PostalAddressBoundaryInputType',
  description: 'input type for PostalAddressBoundary in party',

  fields: () => ({
    geoId: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {PostalAddressBoundaryInputType};
    