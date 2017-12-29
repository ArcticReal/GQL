
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

import {CostComponentAttributeType} from '../../product/CostComponentAttribute/CostComponentAttributeType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {CostComponentTypeType} from '../../product/CostComponentType/CostComponentTypeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {CostComponentCalcType} from '../../product/CostComponentCalc/CostComponentCalcType.js';
import {ProductFeatureType} from '../../product/ProductFeature/ProductFeatureType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


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
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${costComponent.productId}`)
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
      resolve: (costComponent, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${costComponent.partyId}`)
    },
    costComponentAttributes: {
      type: new GraphQLList(CostComponentAttributeType),
      args : {},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/costComponentAttributes/find?costComponentId=${costComponent.costComponentId}`)
    }
  })
});

export {CostComponentType};
    