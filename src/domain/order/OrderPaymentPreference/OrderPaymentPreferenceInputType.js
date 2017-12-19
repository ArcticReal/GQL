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

const OrderPaymentPreferenceInputType = new GraphQLInputObjectType({
  name: 'OrderPaymentPreferenceInputType',
  description: 'input type for OrderPaymentPreference',

  fields: () => ({
    billingPostalCode: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    manualAuthCode: {type: GraphQLString},
    manualRefNum: {type: GraphQLString},
    maxAmount: {type: GraphQLFloat},
    needsNsfRetry: {type: GraphQLBoolean},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    overflowFlag: {type: GraphQLBoolean},
    paymentMethodId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    presentFlag: {type: GraphQLBoolean},
    processAttempt: {type: GraphQLInt},
    productPricePurposeId: {type: GraphQLString},
    securityCode: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    swipedFlag: {type: GraphQLBoolean},
    track2: {type: GraphQLString}
  })
});

export {OrderPaymentPreferenceInputType};
    