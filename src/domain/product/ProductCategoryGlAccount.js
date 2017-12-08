
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

import {GlAccountTypeType} from '../accounting/GlAccountType.js';
import {PartyType} from '../party/Party.js';
import {ProductCategoryType} from '../product/ProductCategory.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const ProductCategoryGlAccountType = new GraphQLObjectType({
  name: 'ProductCategoryGlAccountType',
  description: 'Type for ProductCategoryGlAccount in product',

  fields: () => ({
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryGlAccount.productCategoryId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${productCategoryGlAccount.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${productCategoryGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productCategoryGlAccount.organizationPartyId}`)
    }
  })
});

export {ProductCategoryGlAccountType};
    




const ProductCategoryGlAccountInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryGlAccountInputType',
  description: 'input type for ProductCategoryGlAccount in product',

  fields: () => ({
    productCategoryId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {ProductCategoryGlAccountInputType};
    