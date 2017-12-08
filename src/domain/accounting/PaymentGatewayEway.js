
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


const PaymentGatewayEwayType = new GraphQLObjectType({
  name: 'PaymentGatewayEwayType',
  description: 'Type for PaymentGatewayEway in accounting',

  fields: () => ({
    enableCvn: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayEway, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayEway.paymentGatewayConfigId}`)
    },
    testMode: {type: GraphQLString},
    enableBeagle: {type: GraphQLString},
    customerId: {type: GraphQLString},
    refundPwd: {type: GraphQLString}
  })
});

export {PaymentGatewayEwayType};
    




const PaymentGatewayEwayInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayEwayInputType',
  description: 'input type for PaymentGatewayEway in accounting',

  fields: () => ({
    enableCvn: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    testMode: {type: GraphQLString},
    enableBeagle: {type: GraphQLString},
    customerId: {type: GraphQLString},
    refundPwd: {type: GraphQLString}
  })
});

export {PaymentGatewayEwayInputType};
    