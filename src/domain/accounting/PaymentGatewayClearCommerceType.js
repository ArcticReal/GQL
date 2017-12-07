
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGatewayConfigType} from '../accounting/PaymentGatewayConfigType.js';


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
      resolve: (paymentGatewayClearCommerce, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayClearCommerce.paymentGatewayConfigId}`)
    },
    groupId: {type: GraphQLString},
    userAlias: {type: GraphQLString},
    serverURL: {type: GraphQLInt},
    pwd: {type: GraphQLInt},
    processMode: {type: GraphQLBoolean},
    enableCVM: {type: GraphQLBoolean},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayClearCommerceType};
    