
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Party} from '../product/Party.js';
import {UserLogin} from '../product/UserLogin.js';
import {UserLogin} from '../product/UserLogin.js';


const ProductPromo = new GraphQLObjectType({
  name: 'ProductPromoType',
  description: 'Type for ProductPromo in product',

  fields: () => ({
    showToCustomer: {type: GraphQLBoolean},
    lastModifiedDate: {type: GraphQLString},
    requireCode: {type: GraphQLBoolean},
    overrideOrgParty: {
      type: PartyType,
      args : {overrideOrgPartyId: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.overrideOrgPartyId}`)
    },
    productPromoId: {type: GraphQLString},
    useLimitPerCustomer: {type: GraphQLInt},
    useLimitPerOrder: {type: GraphQLInt},
    useLimitPerPromotion: {type: GraphQLInt},
    promoName: {type: GraphQLString},
    promoText: {type: GraphQLString},
    userEntered: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    billbackFactor: {type: GraphQLFloat},
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (productPromo, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.createdByUserLogin}`)
    }
  })
});

export {ProductPromo};
    