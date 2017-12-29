
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
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const GlAccountHistoryType = new GraphQLObjectType({
  name: 'GlAccountHistoryType',
  description: 'Type for GlAccountHistory in accounting',

  fields: () => ({
    postedCredits: {type: GraphQLFloat},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountHistory, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccountHistory.glAccountId}`)
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
    