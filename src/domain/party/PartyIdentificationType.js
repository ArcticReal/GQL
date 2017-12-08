
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

import {PartyIdentificationType} from '../party/PartyIdentification.js';


const PartyIdentificationTypeType = new GraphQLObjectType({
  name: 'PartyIdentificationTypeType',
  description: 'Type for PartyIdentificationType in party',

  fields: () => ({
    parentType: {
      type: PartyIdentificationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyIdentificationType, args, {loaders}) => loaders.ofbiz.load(`partyIdentificationTypes/find?partyIdentificationTypeId=${partyIdentificationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    partyIdentificationTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyIdentificationTypes: {
      type: new GraphQLList(PartyIdentificationTypeType),
      args : {partyIdentificationTypeId: {type: GraphQLString}},
      resolve: (partyIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`partyIdentificationTypes/find?partyIdentificationTypeId=${partyIdentificationType.partyIdentificationTypeId}`)
    },
    partyIdentifications: {
      type: new GraphQLList(PartyIdentificationType),
      args : {partyIdentificationTypeId: {type: GraphQLString}},
      resolve: (partyIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`partyIdentifications/find?partyIdentificationTypeId=${partyIdentificationType.partyIdentificationTypeId}`)
    }
  })
});

export {PartyIdentificationTypeType};
    




const PartyIdentificationTypeInputType = new GraphQLInputObjectType({
  name: 'PartyIdentificationTypeInputType',
  description: 'input type for PartyIdentificationType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    partyIdentificationTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {PartyIdentificationTypeInputType};
    