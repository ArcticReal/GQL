
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyTaxAuthInfoType} from '../accounting/PartyTaxAuthInfoType.js';
import {PartyType} from '../party/PartyType.js';
import {TaxAuthorityCategoryType} from '../accounting/TaxAuthorityCategoryType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {TaxAuthorityAssocType} from '../accounting/TaxAuthorityAssocType.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustmentType.js';
import {TaxAuthorityGlAccountType} from '../accounting/TaxAuthorityGlAccountType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProductType.js';


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
    taxAuthorityCategory: {
      type: new GraphQLList(TaxAuthorityCategoryType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityCategorys/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    quoteAdjustment: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    productStore: {
      type: new GraphQLList(ProductStoreType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    partyTaxAuthInfo: {
      type: new GraphQLList(PartyTaxAuthInfoType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`partyTaxAuthInfos/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityAssoc: {
      type: new GraphQLList(TaxAuthorityAssocType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityAssocs/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityGlAccount: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityGlAccounts/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityRateProduct: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`taxAuthorityRateProducts/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    }
  })
});

export {TaxAuthorityType};
    