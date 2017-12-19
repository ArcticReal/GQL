
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

import {PaymentGatewayConfigType} from '../../accounting/PaymentGatewayConfig/PaymentGatewayConfigType.js';


const PaymentGatewayEwayType = new GraphQLObjectType({
  name: 'PaymentGatewayEwayType',
  description: 'Type for PaymentGatewayEway in accounting',

  fields: () => ({
    enableCvn: {type: GraphQLString},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayEway, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayEway.paymentGatewayConfigId}`)
    },
    testMode: {type: GraphQLString},
    enableBeagle: {type: GraphQLString},
    customerId: {type: GraphQLString},
    refundPwd: {type: GraphQLString}
  })
});

export {PaymentGatewayEwayType};
    