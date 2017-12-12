
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

import {TaxAuthorityType} from '../accounting/TaxAuthority.js';
import {TaxAuthorityAssocTypeType} from '../accounting/TaxAuthorityAssocType.js';


const TaxAuthorityAssocType = new GraphQLObjectType({
  name: 'TaxAuthorityAssocType',
  description: 'Type for TaxAuthorityAssoc in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    taxAuthorityAssocType: {
      type: TaxAuthorityAssocTypeType,
      args : {taxAuthorityAssocTypeId: {type: GraphQLString}},
      resolve: (taxAuthorityAssoc, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthority/taxAuthorityAssocTypes/find?taxAuthorityAssocTypeId=${taxAuthorityAssoc.taxAuthorityAssocTypeId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityAssoc, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${taxAuthorityAssoc.taxAuthGeoId}`)
    },
    toTaxAuthPartyId: {type: GraphQLString},
    toTaxAuthGeo: {
      type: TaxAuthorityType,
      args : {toTaxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityAssoc, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthoritys/find?taxAuthGeoId=${taxAuthorityAssoc.toTaxAuthGeoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocType};
    




const TaxAuthorityAssocInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityAssocInputType',
  description: 'input type for TaxAuthorityAssoc in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    taxAuthorityAssocTypeId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    toTaxAuthPartyId: {type: GraphQLString},
    toTaxAuthGeoId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {TaxAuthorityAssocInputType};
    