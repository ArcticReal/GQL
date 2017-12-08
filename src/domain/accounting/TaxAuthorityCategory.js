
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

import {ProductCategoryType} from '../product/ProductCategory.js';
import {TaxAuthorityType} from '../accounting/TaxAuthority.js';


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
    




const TaxAuthorityCategoryInputType = new GraphQLInputObjectType({
  name: 'TaxAuthorityCategoryInputType',
  description: 'input type for TaxAuthorityCategory in accounting',

  fields: () => ({
    taxAuthPartyId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString}
  })
});

export {TaxAuthorityCategoryInputType};
    