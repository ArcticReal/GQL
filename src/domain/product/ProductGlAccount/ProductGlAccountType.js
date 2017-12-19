
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

import {GlAccountTypeType} from '../../accounting/GlAccountType/GlAccountTypeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const ProductGlAccountType = new GraphQLObjectType({
  name: 'ProductGlAccountType',
  description: 'Type for ProductGlAccount in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productGlAccount.productId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${productGlAccount.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${productGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productGlAccount.organizationPartyId}`)
    }
  })
});

export {ProductGlAccountType};
    