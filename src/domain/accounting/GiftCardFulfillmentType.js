
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {SurveyResponseType} from '../content/SurveyResponseType.js';


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
    