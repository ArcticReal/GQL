
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

import {GlAccountTypeType} from '../../accounting/GlAccountType/GlAccountTypeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


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
    