
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CostComponentAttributeType} from '../product/CostComponentAttributeType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {CostComponentTypeType} from '../product/CostComponentTypeType.js';
import {PartyType} from '../party/PartyType.js';
import {CostComponentCalcType} from '../product/CostComponentCalcType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';
import {ProductType} from '../product/ProductType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';


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
    costComponentAttribute: {
      type: new GraphQLList(CostComponentAttributeType),
      args : {costComponentId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`costComponentAttributes/find?costComponentId=${costComponent.costComponentId}`)
    }
  })
});

export {CostComponentType};
    