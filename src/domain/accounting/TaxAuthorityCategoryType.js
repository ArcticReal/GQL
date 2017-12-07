
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {TaxAuthorityType} from '../accounting/TaxAuthorityType.js';


const TaxAuthorityCategoryType = new GraphQLObjectType({
  name: 'TaxAuthorityCategoryType',
  description: 'Type for TaxAuthorityCategory in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (taxAuthorityCategory, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${taxAuthorityCategory.productCategoryId}`)
    },
    taxAuthGeo: {
      type: TaxAuthorityType,
      args : {taxAuthGeoId: {type: GraphQLString}},
      resolve: (taxAuthorityCategory, args, {loaders}) => loaders.ofbiz.load(`taxAuthoritys/find?taxAuthGeoId=${taxAuthorityCategory.taxAuthGeoId}`)
    }
  })
});

export {TaxAuthorityCategoryType};
    