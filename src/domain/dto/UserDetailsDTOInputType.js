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

const UserDetailsDTOInputType = new GraphQLInputObjectType({
  name: 'UserDetailsDTOInputType',
  description: 'input type for UserDetailsDTO',

  fields: () => ({
    address1: {type: GraphQLString},
    addressContactMechId: {type: GraphQLString},
    authorities: {type: new GraphQLList(GraphQLString)},
    birthDate: {type: GraphQLString},
    city: {type: GraphQLString},
    countryGeoId: {type: GraphQLString},
    currentPassword: {type: GraphQLString},
    emailAddress: {type: GraphQLString},
    emailContactMechId: {type: GraphQLString},
    firstName: {type: GraphQLString},
    gender: {type: GraphQLBoolean},
    houseNumberExt: {type: GraphQLString},
    lastName: {type: GraphQLString},
    middleName: {type: GraphQLString},
    nickname: {type: GraphQLString},
    oldPassword: {type: GraphQLString},
    partyId: {type: GraphQLString},
    passwordRetype: {type: GraphQLString},
    personalTitle: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    stateProvinceGeoId: {type: GraphQLString},
    toName: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserDetailsDTOInputType};
    