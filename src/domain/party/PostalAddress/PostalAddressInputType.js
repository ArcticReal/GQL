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

const PostalAddressInputType = new GraphQLInputObjectType({
  name: 'PostalAddressInputType',
  description: 'input type for PostalAddress',

  fields: () => ({
    address1: {type: GraphQLString},
    address2: {type: GraphQLString},
    attnName: {type: GraphQLString},
    city: {type: GraphQLString},
    cityGeoId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    countryGeoId: {type: GraphQLString},
    countyGeoId: {type: GraphQLString},
    directions: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    houseNumber: {type: GraphQLInt},
    houseNumberExt: {type: GraphQLString},
    municipalityGeoId: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    postalCodeExt: {type: GraphQLString},
    postalCodeGeoId: {type: GraphQLString},
    stateProvinceGeoId: {type: GraphQLString},
    toName: {type: GraphQLString},
    valid: {type: GraphQLBoolean}
  })
});

export {PostalAddressInputType};
    