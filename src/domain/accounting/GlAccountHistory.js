
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

import {PartyType} from '../party/Party.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const GlAccountHistoryType = new GraphQLObjectType({
  name: 'GlAccountHistoryType',
  description: 'Type for GlAccountHistory in accounting',

  fields: () => ({
    postedCredits: {type: GraphQLFloat},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountHistory, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccountHistory.glAccountId}`)
    },
    postedDebits: {type: GraphQLFloat},
    endingBalance: {type: GraphQLFloat},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glAccountHistory, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${glAccountHistory.organizationPartyId}`)
    },
    customTimePeriodId: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat}
  })
});

export {GlAccountHistoryType};
    




const GlAccountHistoryInputType = new GraphQLInputObjectType({
  name: 'GlAccountHistoryInputType',
  description: 'input type for GlAccountHistory in accounting',

  fields: () => ({
    postedCredits: {type: GraphQLFloat},
    glAccountId: {type: GraphQLString},
    postedDebits: {type: GraphQLFloat},
    endingBalance: {type: GraphQLFloat},
    organizationPartyId: {type: GraphQLString},
    customTimePeriodId: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat}
  })
});

export {GlAccountHistoryInputType};
    