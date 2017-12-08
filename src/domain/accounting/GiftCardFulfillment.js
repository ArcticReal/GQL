
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

import {PartyType} from '../party/Party.js';
import {OrderItemType} from '../order/OrderItem.js';
import {SurveyResponseType} from '../content/SurveyResponse.js';


const GiftCardFulfillmentType = new GraphQLObjectType({
  name: 'GiftCardFulfillmentType',
  description: 'Type for GiftCardFulfillment in accounting',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    fulfillmentId: {type: GraphQLString},
    fulfillmentDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    authCode: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (giftCardFulfillment, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${giftCardFulfillment.orderId}`)
    },
    pinNumber: {type: GraphQLString},
    typeEnumId: {type: GraphQLString},
    surveyResponse: {
      type: SurveyResponseType,
      args : {surveyResponseId: {type: GraphQLString}},
      resolve: (giftCardFulfillment, args, {loaders}) => loaders.ofbiz.load(`surveyResponses/find?surveyResponseId=${giftCardFulfillment.surveyResponseId}`)
    },
    responseCode: {type: GraphQLString},
    referenceNum: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (giftCardFulfillment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${giftCardFulfillment.partyId}`)
    },
    cardNumber: {type: GraphQLString}
  })
});

export {GiftCardFulfillmentType};
    




const GiftCardFulfillmentInputType = new GraphQLInputObjectType({
  name: 'GiftCardFulfillmentInputType',
  description: 'input type for GiftCardFulfillment in accounting',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    fulfillmentId: {type: GraphQLString},
    fulfillmentDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    authCode: {type: GraphQLString},
    orderId: {type: GraphQLString},
    pinNumber: {type: GraphQLString},
    typeEnumId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    responseCode: {type: GraphQLString},
    referenceNum: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    cardNumber: {type: GraphQLString}
  })
});

export {GiftCardFulfillmentInputType};
    