
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountTypeType} from '../accounting/GlAccountTypeType.js';
import {PartyType} from '../party/PartyType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';


const GlAccountTypeDefaultType = new GraphQLObjectType({
  name: 'GlAccountTypeDefaultType',
  description: 'Type for GlAccountTypeDefault in accounting',

  fields: () => ({
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountTypeDefault, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${glAccountTypeDefault.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountTypeDefault, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccountTypeDefault.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glAccountTypeDefault, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${glAccountTypeDefault.organizationPartyId}`)
    }
  })
});

export {GlAccountTypeDefaultType};
    