
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

import {ProductFeatureType} from '../product/ProductFeature.js';
import {ProductType} from '../product/Product.js';


const ProductManufacturingRuleType = new GraphQLObjectType({
  name: 'ProductManufacturingRuleType',
  description: 'Type for ProductManufacturingRule in manufacturing',

  fields: () => ({
    ruleSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    ruleOperator: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productManufacturingRule, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productManufacturingRule.productId}`)
    },
    productFor: {
      type: ProductType,
      args : {productIdFor: {type: GraphQLString}},
      resolve: (productManufacturingRule, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productManufacturingRule.productIdFor}`)
    },
    productInSubst: {
      type: ProductType,
      args : {productIdInSubst: {type: GraphQLString}},
      resolve: (productManufacturingRule, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productManufacturingRule.productIdInSubst}`)
    },
    description: {type: GraphQLString},
    ruleId: {type: GraphQLString},
    productIn: {
      type: ProductType,
      args : {productIdIn: {type: GraphQLString}},
      resolve: (productManufacturingRule, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productManufacturingRule.productIdIn}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeature: {type: GraphQLString}},
      resolve: (productManufacturingRule, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productManufacturingRule.productFeature}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductManufacturingRuleType};
    




const ProductManufacturingRuleInputType = new GraphQLInputObjectType({
  name: 'ProductManufacturingRuleInputType',
  description: 'input type for ProductManufacturingRule in manufacturing',

  fields: () => ({
    ruleSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    ruleOperator: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productIdFor: {type: GraphQLString},
    productIdInSubst: {type: GraphQLString},
    description: {type: GraphQLString},
    ruleId: {type: GraphQLString},
    productIdIn: {type: GraphQLString},
    productFeature: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductManufacturingRuleInputType};
    