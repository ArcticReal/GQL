
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyIdentificationTypeType} from '../party/PartyIdentificationTypeType.js';
import {PartyType} from '../party/PartyType.js';


const PartyIdentificationType = new GraphQLObjectType({
  name: 'PartyIdentificationType',
  description: 'Type for PartyIdentification in party',

  fields: () => ({
    partyentificationType: {
      type: PartyIdentificationTypeType,
      args : {partyIdentificationTypeId: {type: GraphQLString}},
      resolve: (partyIdentification, args, {loaders}) => loaders.ofbiz.load(`partyIdentificationTypes/find?partyIdentificationTypeId=${partyIdentification.partyIdentificationTypeId}`)
    },
    idValue: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyIdentification, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyIdentification.partyId}`)
    }
  })
});

export {PartyIdentificationType};
    