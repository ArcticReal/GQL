
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
import {VarianceReasonType} from '../product/VarianceReason.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const VarianceReasonGlAccountType = new GraphQLObjectType({
  name: 'VarianceReasonGlAccountType',
  description: 'Type for VarianceReasonGlAccount in accounting',

  fields: () => ({
    varianceReason: {
      type: VarianceReasonType,
      args : {varianceReasonId: {type: GraphQLString}},
      resolve: (varianceReasonGlAccount, args, {loaders}) => loaders.ofbiz.load(`varianceReasons/find?varianceReasonId=${varianceReasonGlAccount.varianceReasonId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (varianceReasonGlAccount, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${varianceReasonGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (varianceReasonGlAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${varianceReasonGlAccount.organizationPartyId}`)
    }
  })
});

export {VarianceReasonGlAccountType};
    




const VarianceReasonGlAccountInputType = new GraphQLInputObjectType({
  name: 'VarianceReasonGlAccountInputType',
  description: 'input type for VarianceReasonGlAccount in accounting',

  fields: () => ({
    varianceReasonId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {VarianceReasonGlAccountInputType};
    