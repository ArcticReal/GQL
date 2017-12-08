
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

import {ProductFeatureDataResourceType} from '../product/ProductFeatureDataResource.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {CostComponentType} from '../product/CostComponent.js';
import {DesiredFeatureType} from '../order/DesiredFeature.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {ProductFeatureTypeType} from '../product/ProductFeatureType.js';
import {ProductFeatureApplAttrType} from '../product/ProductFeatureApplAttr.js';
import {ProductManufacturingRuleType} from '../manufacturing/ProductManufacturingRule.js';
import {ProductFeatureApplType} from '../product/ProductFeatureAppl.js';
import {ProductFeatureCategoryType} from '../product/ProductFeatureCategory.js';
import {ProductFeatureGroupApplType} from '../product/ProductFeatureGroupAppl.js';
import {ShipmentItemFeatureType} from '../shipment/ShipmentItemFeature.js';
import {ProductFeatureIactnType} from '../product/ProductFeatureIactn.js';


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
    productFeatureGroupAppls: {
      type: new GraphQLList(ProductFeatureGroupApplType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureGroupAppls/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureIactns: {
      type: new GraphQLList(ProductFeatureIactnType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactns/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureDataResources: {
      type: new GraphQLList(ProductFeatureDataResourceType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureDataResources/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureAppls: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productFeatureApplAttrs: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplAttrs/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    shipmentItemFeatures: {
      type: new GraphQLList(ShipmentItemFeatureType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemFeatures/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    productManufacturingRules: {
      type: new GraphQLList(ProductManufacturingRuleType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`productManufacturingRules/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    desiredFeatures: {
      type: new GraphQLList(DesiredFeatureType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`desiredFeatures/find?productFeatureId=${productFeature.productFeatureId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeature, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?productFeatureId=${productFeature.productFeatureId}`)
    }
  })
});

export {ProductFeatureType};
    




const ProductFeatureInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureInputType',
  description: 'input type for ProductFeature in product',

  fields: () => ({
    productFeatureTypeId: {type: GraphQLString},
    defaultSequenceNum: {type: GraphQLInt},
    defaultAmount: {type: GraphQLFloat},
    idCode: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    numberSpecified: {type: GraphQLFloat},
    productFeatureCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    abbrev: {type: GraphQLString}
  })
});

export {ProductFeatureInputType};
    