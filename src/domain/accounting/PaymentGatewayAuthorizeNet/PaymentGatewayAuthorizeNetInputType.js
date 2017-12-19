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

const PaymentGatewayAuthorizeNetInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayAuthorizeNetInputType',
  description: 'input type for PaymentGatewayAuthorizeNet',

  fields: () => ({
    apiVersion: {type: GraphQLString},
    certificateAlias: {type: GraphQLString},
    cpDeviceType: {type: GraphQLString},
    cpMarketType: {type: GraphQLString},
    cpVersion: {type: GraphQLString},
    delimitedData: {type: GraphQLString},
    delimiterChar: {type: GraphQLString},
    duplicateWindow: {type: GraphQLInt},
    emailCustomer: {type: GraphQLString},
    emailMerchant: {type: GraphQLString},
    method: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    pwd: {type: GraphQLString},
    relayResponse: {type: GraphQLString},
    testMode: {type: GraphQLString},
    tranKey: {type: GraphQLString},
    transDescription: {type: GraphQLString},
    transactionUrl: {type: GraphQLString},
    userId: {type: GraphQLString}
  })
});

export {PaymentGatewayAuthorizeNetInputType};
    