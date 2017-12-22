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

const PaymentResponseType = new GraphQLObjectType({
  name: 'PaymentResponseType',
  description: 'response type for Payment',

  fields: () => ({
    actualCurrencyAmount: {type: GraphQLFloat},
    actualCurrencyUomId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    effectiveDate: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentPreferenceId: {type: GraphQLString},
    paymentRefNum: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {PaymentResponseType};
    