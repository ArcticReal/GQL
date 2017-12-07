
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
import {ProductType} from '../product/ProductType.js';
import {FacilityType} from '../product/FacilityType.js';


const ReorderGuidelineType = new GraphQLObjectType({
  name: 'ReorderGuidelineType',
  description: 'Type for ReorderGuideline in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    reorderLevel: {type: GraphQLFloat},
    reorderGuidelineId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${reorderGuideline.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${reorderGuideline.productId}`)
    },
    geoId: {type: GraphQLString},
    reorderQuantity: {type: GraphQLFloat},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${reorderGuideline.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ReorderGuidelineType};
    