
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';


const PerformanceNoteType = new GraphQLObjectType({
  name: 'PerformanceNoteType',
  description: 'Type for PerformanceNote in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    communicationDate: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (performanceNote, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${performanceNote.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PerformanceNoteType};
    