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

const ReturnItemResponseInputType = new GraphQLInputObjectType({
  name: 'ReturnItemResponseInputType',
  description: 'input type for ReturnItemResponse',

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

export {ReturnItemResponseInputType};
    