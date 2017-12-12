
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

import {QuoteType} from '../order/Quote.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {OrderItemType} from '../order/OrderItem.js';
import {DeliverableTypeType} from '../workeffort/DeliverableType.js';
import {ProductFeatureType} from '../product/ProductFeature.js';
import {ProductType} from '../product/Product.js';
import {CustRequestItemType} from '../order/CustRequestItem.js';
import {SkillTypeType} from '../humanres/SkillType.js';


const QuoteItemType = new GraphQLObjectType({
  name: 'QuoteItemType',
  description: 'Type for QuoteItem in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${quoteItem.workEffortId}`)
    },
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${quoteItem.productId}`)
    },
    reservPersons: {type: GraphQLFloat},
    deliverableType: {
      type: DeliverableTypeType,
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`workeffort/deliverable/deliverableTypes/find?deliverableTypeId=${quoteItem.deliverableTypeId}`)
    },
    quoteItemSeqId: {type: GraphQLString},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${quoteItem.productFeatureId}`)
    },
    quoteUnitPrice: {type: GraphQLFloat},
    uomId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    isPromo: {type: GraphQLBoolean},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteItem.quoteId}`)
    },
    custRequestItemSeqId: {type: GraphQLString},
    skillType: {
      type: SkillTypeType,
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`humanres/skillTypes/find?skillTypeId=${quoteItem.skillTypeId}`)
    },
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    custRequest: {
      type: CustRequestItemType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestItems/find?custRequestId=${quoteItem.custRequestId}`)
    },
    leadTimeDays: {type: GraphQLInt},
    selectedAmount: {type: GraphQLFloat},
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?quoteId=${quoteItem.quoteId}`)
    }
  })
});

export {QuoteItemType};
    




const QuoteItemInputType = new GraphQLInputObjectType({
  name: 'QuoteItemInputType',
  description: 'input type for QuoteItem in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    productId: {type: GraphQLString},
    reservPersons: {type: GraphQLFloat},
    deliverableTypeId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    quoteUnitPrice: {type: GraphQLFloat},
    uomId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    isPromo: {type: GraphQLBoolean},
    quoteId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    skillTypeId: {type: GraphQLString},
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    leadTimeDays: {type: GraphQLInt},
    selectedAmount: {type: GraphQLFloat}
  })
});

export {QuoteItemInputType};
    