
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureType} from '../product/ProductFeatureType.js';
import {ProductFeatureCategory} from '../product/ProductFeatureCategory.js';
import {Uom} from '../product/Uom.js';


const ProductFeature = new GraphQLObjectType({
  name: 'ProductFeatureType',
  description: 'Type for ProductFeature in product',

  fields: () => ({
    productFeatureType: {
      type: ProductFeatureTypeType,
      args : {productFeatureTypeId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureTypes/find?=${args.productFeatureTypeId}`)
    },
    defaultSequenceNum: {type: GraphQLInt},
    defaultAmount: {type: GraphQLFloat},
    idCode: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    numberSpecified: {type: GraphQLFloat},
    productFeatureCategory: {
      type: ProductFeatureCategoryType,
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategorys/find?=${args.productFeatureCategoryId}`)
    },
    description: {type: GraphQLString},
    uom: {
      type: UomType,
      args : {uomId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`uoms/find?=${args.uomId}`)
    },
    abbrev: {type: GraphQLString}
  })
});

export {ProductFeature};
    