
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuoteType} from '../order/QuoteType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {DeliverableTypeType} from '../workeffort/DeliverableTypeType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';
import {ProductType} from '../product/ProductType.js';
import {CustRequestItemType} from '../order/CustRequestItemType.js';
import {SkillTypeType} from '../humanres/SkillTypeType.js';


const QuoteItemType = new GraphQLObjectType({
  name: 'QuoteItemType',
  description: 'Type for QuoteItem in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${quoteItem.workEffortId}`)
    },
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${quoteItem.productId}`)
    },
    reservPersons: {type: GraphQLFloat},
    deliverableType: {
      type: DeliverableTypeType,
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`deliverableTypes/find?deliverableTypeId=${quoteItem.deliverableTypeId}`)
    },
    quoteItemSeqId: {type: GraphQLString},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${quoteItem.productFeatureId}`)
    },
    quoteUnitPrice: {type: GraphQLFloat},
    uomId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    isPromo: {type: GraphQLBoolean},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`quotes/find?quoteId=${quoteItem.quoteId}`)
    },
    custRequestItemSeqId: {type: GraphQLString},
    skillType: {
      type: SkillTypeType,
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`skillTypes/find?skillTypeId=${quoteItem.skillTypeId}`)
    },
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    custRequest: {
      type: CustRequestItemType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbiz.load(`custRequestItems/find?custRequestId=${quoteItem.custRequestId}`)
    },
    leadTimeDays: {type: GraphQLInt},
    selectedAmount: {type: GraphQLFloat},
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteItem, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?quoteId=${quoteItem.quoteId}`)
    }
  })
});

export {QuoteItemType};
    