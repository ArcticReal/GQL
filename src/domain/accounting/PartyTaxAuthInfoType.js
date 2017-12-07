
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';


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
      resolve: (partyTaxAuthInfo, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${partyTaxAuthInfo.taxAuthGeoId}`)
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
    