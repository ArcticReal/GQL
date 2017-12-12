
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

import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfig.js';


const PaymentGatewayClearCommerceType = new GraphQLObjectType({
  name: 'PaymentGatewayClearCommerceType',
  description: 'Type for PaymentGatewayClearCommerce in accounting',

  fields: () => ({
    sourceId: {type: GraphQLString},
    effectiveAlias: {type: GraphQLString},
    clientId: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayClearCommerce, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayClearCommerce.paymentGatewayConfigId}`)
    },
    groupId: {type: GraphQLString},
    userAlias: {type: GraphQLString},
    serverURL: {type: GraphQLString},
    pwd: {type: GraphQLString},
    processMode: {type: GraphQLBoolean},
    enableCVM: {type: GraphQLBoolean},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayClearCommerceType};
    




const PaymentGatewayClearCommerceInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayClearCommerceInputType',
  description: 'input type for PaymentGatewayClearCommerce in accounting',

  fields: () => ({
    sourceId: {type: GraphQLString},
    effectiveAlias: {type: GraphQLString},
    clientId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    groupId: {type: GraphQLString},
    userAlias: {type: GraphQLString},
    serverURL: {type: GraphQLString},
    pwd: {type: GraphQLString},
    processMode: {type: GraphQLBoolean},
    enableCVM: {type: GraphQLBoolean},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayClearCommerceInputType};
    