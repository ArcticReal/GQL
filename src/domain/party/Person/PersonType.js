
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

import {PartyType} from '../../party/Party/PartyType.js';
import {PersonTrainingType} from '../../humanres/PersonTraining/PersonTrainingType.js';


const PersonType = new GraphQLObjectType({
  name: 'PersonType',
  description: 'Type for Person in party',

  fields: () => ({
    yearsWithEmployer: {type: GraphQLInt},
    lastName: {type: GraphQLString},
    occupation: {type: GraphQLString},
    gender: {type: GraphQLBoolean},
    employmentStatusEnumId: {type: GraphQLString},
    socialSecurityNumber: {type: GraphQLString},
    suffix: {type: GraphQLString},
    mothersMaidenName: {type: GraphQLString},
    middleNameLocal: {type: GraphQLString},
    existingCustomer: {type: GraphQLBoolean},
    residenceStatusEnumId: {type: GraphQLString},
    nickname: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (person, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${person.partyId}`)
    },
    memberId: {type: GraphQLString},
    height: {type: GraphQLFloat},
    passportNumber: {type: GraphQLString},
    lastNameLocal: {type: GraphQLString},
    comments: {type: GraphQLString},
    monthsWithEmployer: {type: GraphQLInt},
    weight: {type: GraphQLFloat},
    birthDate: {type: GraphQLString},
    otherLocal: {type: GraphQLString},
    firstName: {type: GraphQLString},
    cardId: {type: GraphQLString},
    middleName: {type: GraphQLString},
    firstNameLocal: {type: GraphQLString},
    passportExpireDate: {type: GraphQLString},
    salutation: {type: GraphQLString},
    personalTitle: {type: GraphQLString},
    deceasedDate: {type: GraphQLString},
    totalYearsWorkExperience: {type: GraphQLFloat},
    maritalStatus: {type: GraphQLBoolean},
    personTrainings: {
      type: new GraphQLList(PersonTrainingType),
      args : {},
      resolve: (person, args, {loaders}) => loaders.ofbizArray.load(`humanres/personTrainings/find?partyId=${person.partyId}`)
    }
  })
});

export {PersonType};
    