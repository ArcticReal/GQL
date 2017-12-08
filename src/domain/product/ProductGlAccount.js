
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
import {ProductType} from '../product/Product.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const ProductGlAccountType = new GraphQLObjectType({
  name: 'ProductGlAccountType',
  description: 'Type for ProductGlAccount in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productGlAccount.productId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${productGlAccount.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${productGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productGlAccount.organizationPartyId}`)
    }
  })
});

export {ProductGlAccountType};
    




const ProductGlAccountInputType = new GraphQLInputObjectType({
  name: 'ProductGlAccountInputType',
  description: 'input type for ProductGlAccount in product',

  fields: () => ({
    productId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {ProductGlAccountInputType};
    