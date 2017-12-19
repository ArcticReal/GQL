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

const OrderAdjustmentBillingInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentBillingInputType',
  description: 'input type for OrderAdjustmentBilling',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    orderAdjustmentId: {type: GraphQLString}
  })
});

export {OrderAdjustmentBillingInputType};
    