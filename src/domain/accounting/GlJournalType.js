
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyAcctgPreferenceType} from '../accounting/PartyAcctgPreferenceType.js';
import {PartyType} from '../party/PartyType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';


const GlJournalType = new GraphQLObjectType({
  name: 'GlJournalType',
  description: 'Type for GlJournal in accounting',

  fields: () => ({
    isPosted: {type: GraphQLBoolean},
    glJournalName: {type: GraphQLString},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glJournal, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${glJournal.organizationPartyId}`)
    },
    glJournalId: {type: GraphQLString},
    postedDate: {type: GraphQLString},
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {glJournalId: {type: GraphQLString}},
      resolve: (glJournal, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?glJournalId=${glJournal.glJournalId}`)
    },
    partyAcctgPreference: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {glJournalId: {type: GraphQLString}},
      resolve: (glJournal, args, {loaders}) => loaders.ofbizArray.load(`partyAcctgPreferences/find?glJournalId=${glJournal.glJournalId}`)
    }
  })
});

export {GlJournalType};
    