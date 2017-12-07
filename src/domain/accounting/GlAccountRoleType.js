
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
import {GlAccountType} from '../accounting/GlAccountType.js';


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
    