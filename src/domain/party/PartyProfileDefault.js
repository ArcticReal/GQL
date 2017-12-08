
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
      resolve: (partyProfileDefault, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${partyProfileDefault.productStoreId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyProfileDefault, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyProfileDefault.partyId}`)
    },
    defaultBillAddr: {type: GraphQLString}
  })
});

export {PartyProfileDefaultType};
    




const PartyProfileDefaultInputType = new GraphQLInputObjectType({
  name: 'PartyProfileDefaultInputType',
  description: 'input type for PartyProfileDefault in party',

  fields: () => ({
    defaultPayMeth: {type: GraphQLString},
    defaultShipAddr: {type: GraphQLString},
    defaultShipMeth: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    defaultBillAddr: {type: GraphQLString}
  })
});

export {PartyProfileDefaultInputType};
    