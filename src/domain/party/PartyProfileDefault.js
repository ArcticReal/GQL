
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
import {ProductStoreType} from '../product/ProductStore.js';


const PartyProfileDefaultType = new GraphQLObjectType({
  name: 'PartyProfileDefaultType',
  description: 'Type for PartyProfileDefault in party',

  fields: () => ({
    defaultPayMeth: {type: GraphQLString},
    defaultShipAddr: {type: GraphQLString},
    defaultShipMeth: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (partyProfileDefault, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${partyProfileDefault.productStoreId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyProfileDefault, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyProfileDefault.partyId}`)
    },
    defaultBillAddr: {type: GraphQLString}
  })
});

export {PartyProfileDefaultType};
    




const PartyProfileDefaultInputType = new GraphQLInputObjectType({
  name: 'PartyProfileDefaultInputType',
  description: 'input type for PartyProfileDefault',

  fields: () => ({
    defaultBillAddr: {type: GraphQLString},
    defaultPayMeth: {type: GraphQLString},
    defaultShipAddr: {type: GraphQLString},
    defaultShipMeth: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString}
  })
});

export {PartyProfileDefaultInputType};
    