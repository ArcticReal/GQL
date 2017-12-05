
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {GlAccountType} from '../product/GlAccountType.js';
import {GlAccount} from '../product/GlAccount.js';
import {Party} from '../product/Party.js';


const ProductGlAccount = new GraphQLObjectType({
  name: 'ProductGlAccountType',
  description: 'Type for ProductGlAccount in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccountTypes/find?=${args.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?=${args.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (productGlAccount, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.organizationPartyId}`)
    }
  })
});

export {ProductGlAccount};
    