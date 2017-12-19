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

const ContactDTOInputType = new GraphQLInputObjectType({
  name: 'ContactDTOInputType',
  description: 'input type for ContactDTO',

  fields: () => ({
    address1: {type: GraphQLString},
    addressContactMechId: {type: GraphQLString},
    city: {type: GraphQLString},
    countryGeoId: {type: GraphQLString},
    eMailAddress: {type: GraphQLString},
    eMailContactMechId: {type: GraphQLString},
    houseNumberExt: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    stateProvinceGeoId: {type: GraphQLString},
    toName: {type: GraphQLString}
  })
});

export {ContactDTOInputType};
    