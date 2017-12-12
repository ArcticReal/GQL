
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

import {PartyType} from '../party/Party.js';
import {ProductPromoCodeType} from '../product/ProductPromoCode.js';


const ProductPromoCodePartyType = new GraphQLObjectType({
  name: 'ProductPromoCodePartyType',
  description: 'Type for ProductPromoCodeParty in product',

  fields: () => ({
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCodeParty, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromoCodes/find?productPromoCodeId=${productPromoCodeParty.productPromoCodeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productPromoCodeParty, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productPromoCodeParty.partyId}`)
    }
  })
});

export {ProductPromoCodePartyType};
    




const ProductPromoCodePartyInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCodePartyInputType',
  description: 'input type for ProductPromoCodeParty in product',

  fields: () => ({
    productPromoCodeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ProductPromoCodePartyInputType};
    