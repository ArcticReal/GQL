
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';
import {TaxAuthorityAssocTypeType} from '../accounting/TaxAuthorityAssocTypeType.js';


const TaxAuthorityAssocType = new GraphQLObjectType({
  name: 'TaxAuthorityAssocType',
  description: 'Type for TaxAuthorityAssoc in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    taxAuthorityAssocType: {
      type: TaxAuthorityAssocTypeType,
      args : {taxAuthorityAssocTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityAssoc, args, {loaders}) => loaders.ofbiz.load(`taxAuthorityAssocTypes/find?taxAuthorityAssocTypeId=${taxAuthorityAssoc.taxAuthorityAssocTypeId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityAssoc, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${taxAuthorityAssoc.taxAuthGeoId}`)
    },
    toTaxAuthPartyId: {type: GraphQLString},
    toTaxAuthGeo: {
      type: TaxAuthorityType,
      args : {toTaxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityAssoc, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${taxAuthorityAssoc.toTaxAuthGeoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocType};
    