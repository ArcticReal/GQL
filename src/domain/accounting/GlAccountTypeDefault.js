
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

import {GlAccountTypeType} from '../accounting/GlAccountType.js';
import {PartyType} from '../party/Party.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const GlAccountTypeDefaultType = new GraphQLObjectType({
  name: 'GlAccountTypeDefaultType',
  description: 'Type for GlAccountTypeDefault in accounting',

  fields: () => ({
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (glAccountTypeDefault, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${glAccountTypeDefault.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountTypeDefault, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccountTypeDefault.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glAccountTypeDefault, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${glAccountTypeDefault.organizationPartyId}`)
    }
  })
});

export {GlAccountTypeDefaultType};
    




const GlAccountTypeDefaultInputType = new GraphQLInputObjectType({
  name: 'GlAccountTypeDefaultInputType',
  description: 'input type for GlAccountTypeDefault',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {GlAccountTypeDefaultInputType};
    