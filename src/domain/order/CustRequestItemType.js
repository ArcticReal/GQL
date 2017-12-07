
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestItemWorkEffortType} from '../order/CustRequestItemWorkEffortType.js';
import {CustRequestType} from '../order/CustRequestType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {ProductType} from '../product/ProductType.js';
import {CustRequestResolutionType} from '../order/CustRequestResolutionType.js';
import {RequirementCustRequestType} from '../order/RequirementCustRequestType.js';
import {CustRequestItemNoteType} from '../order/CustRequestItemNoteType.js';


const CustRequestItemType = new GraphQLObjectType({
  name: 'CustRequestItemType',
  description: 'Type for CustRequestItem in order',

  fields: () => ({
    custRequestResolution: {
      type: CustRequestResolutionType,
      args : {custRequestResolutionId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbiz.load(`custRequestResolutions/find?custRequestResolutionId=${custRequestItem.custRequestResolutionId}`)
    },
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${custRequestItem.productId}`)
    },
    reservPersons: {type: GraphQLFloat},
    maximumAmount: {type: GraphQLFloat},
    requiredByDate: {type: GraphQLString},
    description: {type: GraphQLString},
    priority: {type: GraphQLInt},
    custRequestItemSeqId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    selectedAmount: {type: GraphQLFloat},
    story: {type: GraphQLString},
    custRequestItemWorkEffort: {
      type: new GraphQLList(CustRequestItemWorkEffortType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`custRequestItemWorkEfforts/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    requirementCustRequest: {
      type: new GraphQLList(RequirementCustRequestType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`requirementCustRequests/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    custRequestItemNote: {
      type: new GraphQLList(CustRequestItemNoteType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`custRequestItemNotes/find?custRequestId=${custRequestItem.custRequestId}`)
    }
  })
});

export {CustRequestItemType};
    