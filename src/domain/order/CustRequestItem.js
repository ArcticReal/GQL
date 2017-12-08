
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

import {CustRequestItemWorkEffortType} from '../order/CustRequestItemWorkEffort.js';
import {CustRequestType} from '../order/CustRequest.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {ProductType} from '../product/Product.js';
import {CustRequestResolutionType} from '../order/CustRequestResolution.js';
import {RequirementCustRequestType} from '../order/RequirementCustRequest.js';
import {CustRequestItemNoteType} from '../order/CustRequestItemNote.js';


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
    custRequestItemWorkEfforts: {
      type: new GraphQLList(CustRequestItemWorkEffortType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`custRequestItemWorkEfforts/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    requirementCustRequests: {
      type: new GraphQLList(RequirementCustRequestType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`requirementCustRequests/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    custRequestItemNotes: {
      type: new GraphQLList(CustRequestItemNoteType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`custRequestItemNotes/find?custRequestId=${custRequestItem.custRequestId}`)
    }
  })
});

export {CustRequestItemType};
    




const CustRequestItemInputType = new GraphQLInputObjectType({
  name: 'CustRequestItemInputType',
  description: 'input type for CustRequestItem in order',

  fields: () => ({
    custRequestResolutionId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    productId: {type: GraphQLString},
    reservPersons: {type: GraphQLFloat},
    maximumAmount: {type: GraphQLFloat},
    requiredByDate: {type: GraphQLString},
    description: {type: GraphQLString},
    priority: {type: GraphQLInt},
    custRequestItemSeqId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    selectedAmount: {type: GraphQLFloat},
    story: {type: GraphQLString}
  })
});

export {CustRequestItemInputType};
    