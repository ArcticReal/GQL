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

const GiftCardFulfillmentResponseType = new GraphQLObjectType({
  name: 'GiftCardFulfillmentResponseType',
  description: 'response type for GiftCardFulfillment',

  fields: () => ({
    amount: {type: GraphQLFloat},
    authCode: {type: GraphQLString},
    cardNumber: {type: GraphQLString},
    fulfillmentDate: {type: GraphQLString},
    fulfillmentId: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    pinNumber: {type: GraphQLString},
    referenceNum: {type: GraphQLString},
    responseCode: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    typeEnumId: {type: GraphQLString}
  })
});

export {GiftCardFulfillmentResponseType};
    