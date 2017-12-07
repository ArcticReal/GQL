
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {ProductPromoCodeType} from '../product/ProductPromoCodeType.js';


const ProductPromoCodePartyType = new GraphQLObjectType({
  name: 'ProductPromoCodePartyType',
  description: 'Type for ProductPromoCodeParty in product',

  fields: () => ({
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCodeParty, args, {loaders}) => loaders.ofbiz.load(`productPromoCodes/find?productPromoCodeId=${productPromoCodeParty.productPromoCodeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productPromoCodeParty, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productPromoCodeParty.partyId}`)
    }
  })
});

export {ProductPromoCodePartyType};
    