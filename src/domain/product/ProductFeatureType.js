
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureDataResourceType} from '../product/ProductFeatureDataResourceType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {DesiredFeatureType} from '../order/DesiredFeatureType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {ProductFeatureTypeType} from '../product/ProductFeatureTypeType.js';
import {ProductFeatureApplAttrType} from '../product/ProductFeatureApplAttrType.js';
import {ProductManufacturingRuleType} from '../manufacturing/ProductManufacturingRuleType.js';
import {ProductFeatureApplType} from '../product/ProductFeatureApplType.js';
import {ProductFeatureCategoryType} from '../product/ProductFeatureCategoryType.js';
import {ProductFeatureGroupApplType} from '../product/ProductFeatureGroupApplType.js';
import {ShipmentItemFeatureType} from '../shipment/ShipmentItemFeatureType.js';
import {ProductFeatureIactnType} from '../product/ProductFeatureIactnType.js';


const ProductFeatureType = new GraphQLObjectType({
  name: 'ProductFeatureType',
  description: 'Type for ProductFeature in product',

  fields: () => ({
    productFeatureType: {
      type: ProductFeatureTypeType,
      args : {productFeatureTypeId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbiz.load(`productFeatureTypes/find?productFeatureTypeId=${productFeature.productFeatureTypeId}`)
    },
    defaultSequenceNum: {type: GraphQLInt},
    defaultAmount: {type: GraphQLFloat},
    idCode: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    numberSpecified: {type: GraphQLFloat},
    productFeatureCategory: {
      type: ProductFeatureCategoryType,
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbiz.load(`productFeatureCategorys/find?productFeatureCategoryId=${productFeature.productFeatureCategoryId}`)
    },
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    abbrev: {type: GraphQLString},
    productFeatureGroupAppl: {
      type: new GraphQLList(ProductFeatureGroupApplType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureGroupAppls/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureIactn: {
      type: new GraphQLList(ProductFeatureIactnType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactns/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureDataResource: {
      type: new GraphQLList(ProductFeatureDataResourceType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureDataResources/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureAppl: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureApplAttr: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplAttrs/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    shipmentItemFeature: {
      type: new GraphQLList(ShipmentItemFeatureType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemFeatures/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productManufacturingRule: {
      type: new GraphQLList(ProductManufacturingRuleType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productManufacturingRules/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    desiredFeature: {
      type: new GraphQLList(DesiredFeatureType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`desiredFeatures/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?productFeatureId=${productFeature.productFeatureId}`)
    }
  })
});

export {ProductFeatureType};
    