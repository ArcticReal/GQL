
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestAttributeType} from '../order/CustRequestAttributeType.js';
import {CustRequestStatusType} from '../order/CustRequestStatusType.js';
import {CustRequestContentType} from '../order/CustRequestContentType.js';
import {CustRequestWorkEffortType} from '../order/CustRequestWorkEffortType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {RespondingPartyType} from '../order/RespondingPartyType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {CustRequestCategoryType} from '../order/CustRequestCategoryType.js';
import {CustRequestTypeType} from '../order/CustRequestTypeType.js';
import {CustRequestCommEventType} from '../order/CustRequestCommEventType.js';
import {PartyType} from '../party/PartyType.js';
import {CustRequestNoteType} from '../order/CustRequestNoteType.js';
import {CustRequestPartyType} from '../order/CustRequestPartyType.js';
import {CustRequestItemType} from '../order/CustRequestItemType.js';


const CustRequestType = new GraphQLObjectType({
  name: 'CustRequestType',
  description: 'Type for CustRequest in order',

  fields: () => ({
    reason: {type: GraphQLString},
    fromParty: {
      type: PartyType,
      args : {fromPartyId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${custRequest.fromPartyId}`)
    },
    custRequestName: {type: GraphQLString},
    responseRequiredDate: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    fulfillContactMech: {
      type: ContactMechType,
      args : {fulfillContactMechId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${custRequest.fulfillContactMechId}`)
    },
    description: {type: GraphQLString},
    custRequestDate: {type: GraphQLString},
    priority: {type: GraphQLInt},
    maximumAmountUomId: {type: GraphQLString},
    openDateTime: {type: GraphQLString},
    internalComment: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`custRequestTypes/find?custRequestTypeId=${custRequest.custRequestTypeId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${custRequest.productStoreId}`)
    },
    custRequestCategory: {
      type: CustRequestCategoryType,
      args : {custRequestCategoryId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`custRequestCategorys/find?custRequestCategoryId=${custRequest.custRequestCategoryId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    closedDateTime: {type: GraphQLString},
    custRequestAttribute: {
      type: new GraphQLList(CustRequestAttributeType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestAttributes/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestStatus: {
      type: new GraphQLList(CustRequestStatusType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestStatuss/find?custRequestId=${custRequest.custRequestId}`)
    },
    respondingParty: {
      type: new GraphQLList(RespondingPartyType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`respondingPartys/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestNote: {
      type: new GraphQLList(CustRequestNoteType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestNotes/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestWorkEffort: {
      type: new GraphQLList(CustRequestWorkEffortType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestWorkEfforts/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestItem: {
      type: new GraphQLList(CustRequestItemType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestItems/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestParty: {
      type: new GraphQLList(CustRequestPartyType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestPartys/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestContent: {
      type: new GraphQLList(CustRequestContentType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestContents/find?custRequestId=${custRequest.custRequestId}`)
    },
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestCommEvent: {
      type: new GraphQLList(CustRequestCommEventType),
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`custRequestCommEvents/find?custRequestId=${custRequest.custRequestId}`)
    }
  })
});

export {CustRequestType};
    