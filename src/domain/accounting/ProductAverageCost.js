
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

import {ProductAverageCostTypeType} from '../accounting/ProductAverageCostType.js';
import {PartyType} from '../party/Party.js';
import {ProductType} from '../product/Product.js';
import {FacilityType} from '../product/Facility.js';


const ProductAverageCostType = new GraphQLObjectType({
  name: 'ProductAverageCostType',
  description: 'Type for ProductAverageCost in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productAverageCost, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${productAverageCost.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productAverageCost, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productAverageCost.productId}`)
    },
    productAverageCostType: {
      type: ProductAverageCostTypeType,
      args : {productAverageCostTypeId: {type: GraphQLString}},
      resolve: (productAverageCost, args, {loaders}) => loaders.ofbiz.load(`accounting/productAverageCost/productAverageCostTypes/find?productAverageCostTypeId=${productAverageCost.productAverageCostTypeId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (productAverageCost, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${productAverageCost.organizationPartyId}`)
    },
    averageCost: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {ProductAverageCostType};
    




const ProductAverageCostInputType = new GraphQLInputObjectType({
  name: 'ProductAverageCostInputType',
  description: 'input type for ProductAverageCost',

  fields: () => ({
    averageCost: {type: GraphQLFloat},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    productAverageCostTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductAverageCostInputType};
    