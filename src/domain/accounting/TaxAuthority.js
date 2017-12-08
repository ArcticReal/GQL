
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

import {PartyTaxAuthInfoType} from '../accounting/PartyTaxAuthInfo.js';
import {PartyType} from '../party/Party.js';
import {TaxAuthorityCategoryType} from '../accounting/TaxAuthorityCategory.js';
import {OrderAdjustmentType} from '../order/OrderAdjustment.js';
import {TaxAuthorityAssocType} from '../accounting/TaxAuthorityAssoc.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustment.js';
import {TaxAuthorityGlAccountType} from '../accounting/TaxAuthorityGlAccount.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProduct.js';


const TaxAuthorityType = new GraphQLObjectType({
  name: 'TaxAuthorityType',
  description: 'Type for TaxAuthority in accounting',

  fields: () => ({
    taxAuthParty: {
      type: PartyType,
      args : {taxAuthPartyId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${taxAuthority.taxAuthPartyId}`)
    },
    requireTaxIdForExemption: {type: GraphQLBoolean},
    includeTaxInPrice: {type: GraphQLBoolean},
    taxAuthGeoId: {type: GraphQLString},
    taxIdFormatPattern: {type: GraphQLString},
    taxAuthorityCategories: {
      type: new GraphQLList(TaxAuthorityCategoryType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityCategorys/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    partyTaxAuthInfos: {
      type: new GraphQLList(PartyTaxAuthInfoType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`partyTaxAuthInfos/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityAssocs: {
      type: new GraphQLList(TaxAuthorityAssocType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityAssocs/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityGlAccounts: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityGlAccounts/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityRateProducts/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    }
  })
});

export {TaxAuthorityType};
    




const TaxAuthorityInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityInputType',
  description: 'input type for TaxAuthority in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    requireTaxIdForExemption: {type: GraphQLBoolean},
    includeTaxInPrice: {type: GraphQLBoolean},
    taxAuthGeoId: {type: GraphQLString},
    taxIdFormatPattern: {type: GraphQLString}
  })
});

export {TaxAuthorityInputType};
    