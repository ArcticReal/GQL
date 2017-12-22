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

const OrderAdjustmentBillingResponseType = new GraphQLObjectType({
  name: 'OrderAdjustmentBillingResponseType',
  description: 'response type for OrderAdjustmentBilling',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    orderAdjustmentId: {type: GraphQLString}
  })
});

export {OrderAdjustmentBillingResponseType};
    