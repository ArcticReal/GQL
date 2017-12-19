
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

import {PartyAcctgPreferenceType} from '../../accounting/PartyAcctgPreference/PartyAcctgPreferenceType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';


const GlJournalType = new GraphQLObjectType({
  name: 'GlJournalType',
  description: 'Type for GlJournal in accounting',

  fields: () => ({
    isPosted: {type: GraphQLBoolean},
    glJournalName: {type: GraphQLString},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glJournal, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${glJournal.organizationPartyId}`)
    },
    glJournalId: {type: GraphQLString},
    postedDate: {type: GraphQLString},
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (glJournal, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?glJournalId=${glJournal.glJournalId}`)
    },
    partyAcctgPreferences: {
      type: new GraphQLList(PartyAcctgPreferenceType),
      args : {},
      resolve: (glJournal, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyAcctgPreferences/find?glJournalId=${glJournal.glJournalId}`)
    }
  })
});

export {GlJournalType};
    