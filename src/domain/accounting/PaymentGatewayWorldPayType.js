
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


const PaymentGatewayWorldPayType = new GraphQLObjectType({
  name: 'PaymentGatewayWorldPayType',
  description: 'Type for PaymentGatewayWorldPay in accounting',

  fields: () => ({
    authMode: {type: GraphQLBoolean},
    instId: {type: GraphQLInt},
    redirectUrl: {type: GraphQLInt},
    paymentGatewayConfig: {
      type: PaymentGatewayConfigType,
      args : {paymentGatewayConfigId: {type: GraphQLString}},
      resolve: (paymentGatewayWorldPay, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayConfigs/find?paymentGatewayConfigId=${paymentGatewayWorldPay.paymentGatewayConfigId}`)
    },
    hideContact: {type: GraphQLBoolean},
    testMode: {type: GraphQLInt},
    fixContact: {type: GraphQLBoolean},
    langId: {type: GraphQLString},
    hideCurrency: {type: GraphQLBoolean},
    noLanguageMenu: {type: GraphQLBoolean},
    withDelivery: {type: GraphQLBoolean}
  })
});

export {PaymentGatewayWorldPayType};
    