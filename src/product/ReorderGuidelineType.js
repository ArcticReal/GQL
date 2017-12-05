
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';
import {Product} from '../product/Product.js';
import {Geo} from '../product/Geo.js';
import {Party} from '../product/Party.js';


const ReorderGuideline = new GraphQLObjectType({
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
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    geo: {
      type: GeoType,
      args : {geoId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbizArray.load(`geos/find?=${args.geoId}`)
    },
    reorderQuantity: {type: GraphQLFloat},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (reorderGuideline, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ReorderGuideline};
    