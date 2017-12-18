
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
      resolve: (partyIdentificationType, args, {loaders}) => loaders.ofbiz.load(`party/party/partyIdentificationTypes/find?partyIdentificationTypeId=${partyIdentificationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    partyIdentificationTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyIdentificationTypes: {
      type: new GraphQLList(PartyIdentificationTypeType),
      args : {},
      resolve: (partyIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyIdentificationTypes/find?partyIdentificationTypeId=${partyIdentificationType.partyIdentificationTypeId}`)
    },
    partyIdentifications: {
      type: new GraphQLList(PartyIdentificationType),
      args : {},
      resolve: (partyIdentificationType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyIdentifications/find?partyIdentificationTypeId=${partyIdentificationType.partyIdentificationTypeId}`)
    }
  })
});

export {PartyIdentificationTypeType};
    




const PartyIdentificationTypeInputType = new GraphQLInputObjectType({
  name: 'PartyIdentificationTypeInputType',
  description: 'input type for PartyIdentificationType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyIdentificationTypeId: {type: GraphQLString}
  })
});

export {PartyIdentificationTypeInputType};
    