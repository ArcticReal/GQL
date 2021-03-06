
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

import {CustRequestItemWorkEffortType} from '../../order/CustRequestItemWorkEffort/CustRequestItemWorkEffortType.js';
import {CustRequestType} from '../../order/CustRequest/CustRequestType.js';
import {QuoteItemType} from '../../order/QuoteItem/QuoteItemType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {CustRequestResolutionType} from '../../order/CustRequestResolution/CustRequestResolutionType.js';
import {RequirementCustRequestType} from '../../order/RequirementCustRequest/RequirementCustRequestType.js';
import {CustRequestItemNoteType} from '../../order/CustRequestItemNote/CustRequestItemNoteType.js';


const CustRequestItemType = new GraphQLObjectType({
  name: 'CustRequestItemType',
  description: 'Type for CustRequestItem in order',

  fields: () => ({
    custRequestResolution: {
      type: CustRequestResolutionType,
      args : {custRequestResolutionId: {type: GraphQLString}},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestResolutions/find?custRequestResolutionId=${custRequestItem.custRequestResolutionId}`)
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
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbiz.load(`order/custRequests/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    selectedAmount: {type: GraphQLFloat},
    story: {type: GraphQLString},
    custRequestItemWorkEfforts: {
      type: new GraphQLList(CustRequestItemWorkEffortType),
      args : {},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestItemWorkEfforts/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    requirementCustRequests: {
      type: new GraphQLList(RequirementCustRequestType),
      args : {},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/requirementCustRequests/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?custRequestId=${custRequestItem.custRequestId}`)
    },
    custRequestItemNotes: {
      type: new GraphQLList(CustRequestItemNoteType),
      args : {},
      resolve: (custRequestItem, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestItemNotes/find?custRequestId=${custRequestItem.custRequestId}`)
    }
  })
});

export {CustRequestItemType};
    