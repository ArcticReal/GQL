
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoCode} from '../product/ProductPromoCode.js';
import {Party} from '../product/Party.js';


const ProductPromoCodeParty = new GraphQLObjectType({
  name: 'ProductPromoCodePartyType',
  description: 'Type for ProductPromoCodeParty in product',

  fields: () => ({
    productPromoCode: {
      type: ProductPromoCodeType,
      args : {productPromoCodeId: {type: GraphQLString}},
      resolve: (productPromoCodeParty, args, {loaders}) => loaders.ofbizArray.load(`productPromoCodes/find?=${args.productPromoCodeId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productPromoCodeParty, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    }
  })
});

export {ProductPromoCodeParty};
    