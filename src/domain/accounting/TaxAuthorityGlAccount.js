
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
import {TaxAuthorityType} from '../accounting/TaxAuthority.js';


const TaxAuthorityGlAccountType = new GraphQLObjectType({
  name: 'TaxAuthorityGlAccountType',
  description: 'Type for TaxAuthorityGlAccount in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (taxAuthorityGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${taxAuthorityGlAccount.glAccountId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${taxAuthorityGlAccount.taxAuthGeoId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (taxAuthorityGlAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${taxAuthorityGlAccount.organizationPartyId}`)
    }
  })
});

export {TaxAuthorityGlAccountType};
    




const TaxAuthorityGlAccountInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityGlAccountInputType',
  description: 'input type for TaxAuthorityGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString}
  })
});

export {TaxAuthorityGlAccountInputType};
    