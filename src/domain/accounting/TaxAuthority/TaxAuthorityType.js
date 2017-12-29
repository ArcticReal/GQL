
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

import {PartyTaxAuthInfoType} from '../../accounting/PartyTaxAuthInfo/PartyTaxAuthInfoType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {TaxAuthorityCategoryType} from '../../accounting/TaxAuthorityCategory/TaxAuthorityCategoryType.js';
import {OrderAdjustmentType} from '../../order/OrderAdjustment/OrderAdjustmentType.js';
import {TaxAuthorityAssocType} from '../../accounting/TaxAuthorityAssoc/TaxAuthorityAssocType.js';
import {QuoteAdjustmentType} from '../../order/QuoteAdjustment/QuoteAdjustmentType.js';
import {TaxAuthorityGlAccountType} from '../../accounting/TaxAuthorityGlAccount/TaxAuthorityGlAccountType.js';
import {ReturnAdjustmentType} from '../../order/ReturnAdjustment/ReturnAdjustmentType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';
import {TaxAuthorityRateProductType} from '../../accounting/TaxAuthorityRateProduct/TaxAuthorityRateProductType.js';


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
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityCategorys/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    productStores: {
      type: new GraphQLList(ProductStoreType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStores/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    partyTaxAuthInfos: {
      type: new GraphQLList(PartyTaxAuthInfoType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`accounting/partyTaxAuthInfos/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityAssocs: {
      type: new GraphQLList(TaxAuthorityAssocType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityAssocs/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityGlAccounts: {
      type: new GraphQLList(TaxAuthorityGlAccountType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/taxAuthorityGlAccounts/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    taxAuthorityRateProducts: {
      type: new GraphQLList(TaxAuthorityRateProductType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (taxAuthority, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?taxAuthGeoId=${taxAuthority.taxAuthGeoId}`)
    }
  })
});

export {TaxAuthorityType};
    