
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

import {RequirementType} from '../order/Requirement.js';
import {ProductFeatureType} from '../product/ProductFeature.js';


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
    




const DesiredFeatureInputType = new GraphQLInputObjectType({
  name: 'DesiredFeatureInputType',
  description: 'input type for DesiredFeature in order',

  fields: () => ({
    desiredFeatureId: {type: GraphQLString},
    optionalInd: {type: GraphQLBoolean},
    productFeatureId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {DesiredFeatureInputType};
    