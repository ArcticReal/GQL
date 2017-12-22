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

const PaymentGatewaySagePayResponseType = new GraphQLObjectType({
  name: 'PaymentGatewaySagePayResponseType',
  description: 'response type for PaymentGatewaySagePay',

  fields: () => ({
    authenticationTransType: {type: GraphQLString},
    authenticationUrl: {type: GraphQLString},
    authoriseTransType: {type: GraphQLString},
    authoriseUrl: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    productionHost: {type: GraphQLString},
    protocolVersion: {type: GraphQLString},
    refundUrl: {type: GraphQLString},
    releaseTransType: {type: GraphQLString},
    releaseUrl: {type: GraphQLString},
    sagePayMode: {type: GraphQLString},
    testingHost: {type: GraphQLString},
    vendor: {type: GraphQLString},
    voidUrl: {type: GraphQLString}
  })
});

export {PaymentGatewaySagePayResponseType};
    