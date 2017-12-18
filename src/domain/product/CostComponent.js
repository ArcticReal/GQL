
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
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${costComponent.workEffortId}`)
    },
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentTypes/find?costComponentTypeId=${costComponent.costComponentTypeId}`)
    },
    cost: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${costComponent.productId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${costComponent.productFeatureId}`)
    },
    costComponentId: {type: GraphQLString},
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentCalcs/find?costComponentCalcId=${costComponent.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${costComponent.fixedAssetId}`)
    },
    costUomId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${costComponent.partyId}`)
    },
    costComponentAttributes: {
      type: new GraphQLList(CostComponentAttributeType),
      args : {},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/costComponentAttributes/find?costComponentId=${costComponent.costComponentId}`)
    }
  })
});

export {CostComponentType};
    




const CostComponentInputType = new GraphQLInputObjectType({
  name: 'CostComponentInputType',
  description: 'input type for CostComponent',

  fields: () => ({
    cost: {type: GraphQLFloat},
    costComponentCalcId: {type: GraphQLString},
    costComponentId: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    costUomId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geoId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CostComponentInputType};
    