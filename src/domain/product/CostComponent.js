
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

import {CostComponentAttributeType} from '../product/CostComponentAttribute.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {CostComponentTypeType} from '../product/CostComponentType.js';
import {PartyType} from '../party/Party.js';
import {CostComponentCalcType} from '../product/CostComponentCalc.js';
import {ProductFeatureType} from '../product/ProductFeature.js';
import {ProductType} from '../product/Product.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const CostComponentType = new GraphQLObjectType({
  name: 'CostComponentType',
  description: 'Type for CostComponent in product',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${costComponent.workEffortId}`)
    },
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`costComponentTypes/find?costComponentTypeId=${costComponent.costComponentTypeId}`)
    },
    cost: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${costComponent.productId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${costComponent.productFeatureId}`)
    },
    costComponentId: {type: GraphQLString},
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`costComponentCalcs/find?costComponentCalcId=${costComponent.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${costComponent.fixedAssetId}`)
    },
    costUomId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${costComponent.partyId}`)
    },
    costComponentAttributes: {
      type: new GraphQLList(CostComponentAttributeType),
      args : {costComponentId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`costComponentAttributes/find?costComponentId=${costComponent.costComponentId}`)
    }
  })
});

export {CostComponentType};
    




const CostComponentInputType = new GraphQLInputObjectType({
  name: 'CostComponentInputType',
  description: 'input type for CostComponent in product',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    cost: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    costComponentId: {type: GraphQLString},
    costComponentCalcId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    costUomId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {CostComponentInputType};
    