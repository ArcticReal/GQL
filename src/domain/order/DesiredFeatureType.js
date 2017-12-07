
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementType} from '../order/RequirementType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';


const DesiredFeatureType = new GraphQLObjectType({
  name: 'DesiredFeatureType',
  description: 'Type for DesiredFeature in order',

  fields: () => ({
    desiredFeatureId: {type: GraphQLString},
    optionalInd: {type: GraphQLBoolean},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (desiredFeature, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${desiredFeature.productFeatureId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (desiredFeature, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${desiredFeature.requirementId}`)
    }
  })
});

export {DesiredFeatureType};
    