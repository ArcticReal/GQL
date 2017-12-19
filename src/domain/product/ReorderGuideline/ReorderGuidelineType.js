
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

import {PartyType} from '../../party/Party/PartyType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


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
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${reorderGuideline.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${reorderGuideline.productId}`)
    },
    geoId: {type: GraphQLString},
    reorderQuantity: {type: GraphQLFloat},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${reorderGuideline.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ReorderGuidelineType};
    