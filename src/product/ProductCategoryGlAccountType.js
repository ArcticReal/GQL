
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategory} from '../product/ProductCategory.js';
import {GlAccountType} from '../product/GlAccountType.js';
import {GlAccount} from '../product/GlAccount.js';
import {Party} from '../product/Party.js';


const ProductCategoryGlAccount = new GraphQLObjectType({
  name: 'ProductCategoryGlAccountType',
  description: 'Type for ProductCategoryGlAccount in product',

  fields: () => ({
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypes/find?=${args.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?=${args.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (productCategoryGlAccount, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.organizationPartyId}`)
    }
  })
});

export {ProductCategoryGlAccount};
    