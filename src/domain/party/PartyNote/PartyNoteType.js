
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


const PartyNoteType = new GraphQLObjectType({
  name: 'PartyNoteType',
  description: 'Type for PartyNote in party',

  fields: () => ({
    noteId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyNote, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyNote.partyId}`)
    }
  })
});

export {PartyNoteType};
    