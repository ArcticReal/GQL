
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
import {TaxAuthorityType} from '../../accounting/TaxAuthority/TaxAuthorityType.js';


const PartyTaxAuthInfoType = new GraphQLObjectType({
  name: 'PartyTaxAuthInfoType',
  description: 'Type for PartyTaxAuthInfo in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyTaxId: {type: GraphQLString},
    isNexus: {type: GraphQLBoolean},
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (partyTaxAuthInfo, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${partyTaxAuthInfo.taxAuthGeoId}`)
    },
    isExempt: {type: GraphQLBoolean},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyTaxAuthInfo, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyTaxAuthInfo.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyTaxAuthInfoType};
    