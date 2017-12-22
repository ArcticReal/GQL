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

const ReturnItemResponseResponseType = new GraphQLObjectType({
  name: 'ReturnItemResponseResponseType',
  description: 'response type for ReturnItemResponse',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    replacementOrderId: {type: GraphQLString},
    responseAmount: {type: GraphQLFloat},
    responseDate: {type: GraphQLString},
    returnItemResponseId: {type: GraphQLString}
  })
});

export {ReturnItemResponseResponseType};
    