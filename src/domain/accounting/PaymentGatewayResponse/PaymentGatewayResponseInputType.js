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

const PaymentGatewayResponseInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayResponseInputType',
  description: 'input type for PaymentGatewayResponse',

  fields: () => ({
    altReference: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    gatewayAvsResult: {type: GraphQLString},
    gatewayCode: {type: GraphQLString},
    gatewayCvResult: {type: GraphQLString},
    gatewayFlag: {type: GraphQLString},
    gatewayMessage: {type: GraphQLString},
    gatewayScoreResult: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    paymentServiceTypeEnumId: {type: GraphQLString},
    referenceNum: {type: GraphQLString},
    resultBadCardNumber: {type: GraphQLBoolean},
    resultBadExpire: {type: GraphQLBoolean},
    resultDeclined: {type: GraphQLBoolean},
    resultNsf: {type: GraphQLBoolean},
    subReference: {type: GraphQLString},
    transCodeEnumId: {type: GraphQLString},
    transactionDate: {type: GraphQLString}
  })
});

export {PaymentGatewayResponseInputType};
    