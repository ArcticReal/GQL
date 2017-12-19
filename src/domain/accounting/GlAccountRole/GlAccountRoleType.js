
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const GlAccountRoleType = new GraphQLObjectType({
  name: 'GlAccountRoleType',
  description: 'Type for GlAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountRole, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccountRole.glAccountId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (glAccountRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${glAccountRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountRoleType};
    