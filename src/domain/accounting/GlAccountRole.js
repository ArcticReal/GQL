
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

import {PartyRoleType} from '../party/PartyRole.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const GlAccountRoleType = new GraphQLObjectType({
  name: 'GlAccountRoleType',
  description: 'Type for GlAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountRole, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccountRole.glAccountId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (glAccountRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${glAccountRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountRoleType};
    




const GlAccountRoleInputType = new GraphQLInputObjectType({
  name: 'GlAccountRoleInputType',
  description: 'input type for GlAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountRoleInputType};
    