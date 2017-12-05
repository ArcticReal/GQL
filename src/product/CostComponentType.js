
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffort} from '../product/WorkEffort.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {Product} from '../product/Product.js';
import {ProductFeature} from '../product/ProductFeature.js';
import {CostComponentCalc} from '../product/CostComponentCalc.js';
import {Geo} from '../product/Geo.js';
import {FixedAsset} from '../product/FixedAsset.js';
import {Party} from '../product/Party.js';


const CostComponent = new GraphQLObjectType({
  name: 'CostComponentType',
  description: 'Type for CostComponent in product',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?=${args.workEffortId}`)
    },
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`costComponentTypes/find?=${args.costComponentTypeId}`)
    },
    cost: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?=${args.productFeatureId}`)
    },
    costComponentId: {type: GraphQLString},
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`costComponentCalcs/find?=${args.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    geo: {
      type: GeoType,
      args : {geoId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`geos/find?=${args.geoId}`)
    },
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?=${args.fixedAssetId}`)
    },
    costUomId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (costComponent, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    }
  })
});

export {CostComponent};
    