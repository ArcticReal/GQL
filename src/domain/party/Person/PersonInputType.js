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

const PersonInputType = new GraphQLInputObjectType({
  name: 'PersonInputType',
  description: 'input type for Person',

  fields: () => ({
    birthDate: {type: GraphQLString},
    cardId: {type: GraphQLString},
    comments: {type: GraphQLString},
    deceasedDate: {type: GraphQLString},
    employmentStatusEnumId: {type: GraphQLString},
    existingCustomer: {type: GraphQLBoolean},
    firstName: {type: GraphQLString},
    firstNameLocal: {type: GraphQLString},
    gender: {type: GraphQLBoolean},
    height: {type: GraphQLFloat},
    lastName: {type: GraphQLString},
    lastNameLocal: {type: GraphQLString},
    maritalStatus: {type: GraphQLBoolean},
    memberId: {type: GraphQLString},
    middleName: {type: GraphQLString},
    middleNameLocal: {type: GraphQLString},
    monthsWithEmployer: {type: GraphQLInt},
    mothersMaidenName: {type: GraphQLString},
    nickname: {type: GraphQLString},
    occupation: {type: GraphQLString},
    otherLocal: {type: GraphQLString},
    partyId: {type: GraphQLString},
    passportExpireDate: {type: GraphQLString},
    passportNumber: {type: GraphQLString},
    personalTitle: {type: GraphQLString},
    residenceStatusEnumId: {type: GraphQLString},
    salutation: {type: GraphQLString},
    socialSecurityNumber: {type: GraphQLString},
    suffix: {type: GraphQLString},
    totalYearsWorkExperience: {type: GraphQLFloat},
    weight: {type: GraphQLFloat},
    yearsWithEmployer: {type: GraphQLInt}
  })
});

export {PersonInputType};
    