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

const PaymentApplicationInputType = new GraphQLInputObjectType({
  name: 'PaymentApplicationInputType',
  description: 'input type for PaymentApplication',

  fields: () => ({
    amountApplied: {type: GraphQLFloat},
    billingAccountId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    paymentApplicationId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    toPaymentId: {type: GraphQLString}
  })
});

export {PaymentApplicationInputType};
    