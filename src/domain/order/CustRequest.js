
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

import {CustRequestAttributeType} from '../order/CustRequestAttribute.js';
import {CustRequestStatusType} from '../order/CustRequestStatus.js';
import {CustRequestContentType} from '../order/CustRequestContent.js';
import {CustRequestWorkEffortType} from '../order/CustRequestWorkEffort.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {RespondingPartyType} from '../order/RespondingParty.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {ContactMechType} from '../party/ContactMech.js';
import {CustRequestCategoryType} from '../order/CustRequestCategory.js';
import {CustRequestTypeType} from '../order/CustRequestType.js';
import {CustRequestCommEventType} from '../order/CustRequestCommEvent.js';
import {PartyType} from '../party/Party.js';
import {CustRequestNoteType} from '../order/CustRequestNote.js';
import {CustRequestPartyType} from '../order/CustRequestParty.js';
import {CustRequestItemType} from '../order/CustRequestItem.js';


const CustRequestType = new GraphQLObjectType({
  name: 'CustRequestType',
  description: 'Type for CustRequest in order',

  fields: () => ({
    reason: {type: GraphQLString},
    fromParty: {
      type: PartyType,
      args : {fromPartyId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${custRequest.fromPartyId}`)
    },
    custRequestName: {type: GraphQLString},
    responseRequiredDate: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    fulfillContactMech: {
      type: ContactMechType,
      args : {fulfillContactMechId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${custRequest.fulfillContactMechId}`)
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
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestTypes/find?custRequestTypeId=${custRequest.custRequestTypeId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${custRequest.productStoreId}`)
    },
    custRequestCategory: {
      type: CustRequestCategoryType,
      args : {custRequestCategoryId: {type: GraphQLString}},
      resolve: (custRequest, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestCategorys/find?custRequestCategoryId=${custRequest.custRequestCategoryId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    closedDateTime: {type: GraphQLString},
    custRequestAttributes: {
      type: new GraphQLList(CustRequestAttributeType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestAttributes/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestStatuses: {
      type: new GraphQLList(CustRequestStatusType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestStatuss/find?custRequestId=${custRequest.custRequestId}`)
    },
    respondingParties: {
      type: new GraphQLList(RespondingPartyType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/respondingPartys/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestNotes: {
      type: new GraphQLList(CustRequestNoteType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestNotes/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestWorkEfforts: {
      type: new GraphQLList(CustRequestWorkEffortType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestWorkEfforts/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestItems: {
      type: new GraphQLList(CustRequestItemType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestItems/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestParties: {
      type: new GraphQLList(CustRequestPartyType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestPartys/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestContents: {
      type: new GraphQLList(CustRequestContentType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestContents/find?custRequestId=${custRequest.custRequestId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?custRequestId=${custRequest.custRequestId}`)
    },
    custRequestCommEvents: {
      type: new GraphQLList(CustRequestCommEventType),
      args : {},
      resolve: (custRequest, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestCommEvents/find?custRequestId=${custRequest.custRequestId}`)
    }
  })
});

export {CustRequestType};
    




const CustRequestInputType = new GraphQLInputObjectType({
  name: 'CustRequestInputType',
  description: 'input type for CustRequest in order',

  fields: () => ({
    reason: {type: GraphQLString},
    fromPartyId: {type: GraphQLString},
    custRequestName: {type: GraphQLString},
    responseRequiredDate: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    fulfillContactMechId: {type: GraphQLString},
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
    custRequestTypeId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    custRequestCategoryId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    closedDateTime: {type: GraphQLString}
  })
});

export {CustRequestInputType};
    