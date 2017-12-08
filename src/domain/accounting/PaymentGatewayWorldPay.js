
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


const PaymentGatewayWorldPayType = new GraphQLObjectType({
  name: 'PaymentGatewayWorldPayType',
  description: 'Type for PaymentGatewayWorldPay in accounting',

  fields: () => ({
    authMode: {type: GraphQLBoolean},
    instId: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
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
    




const PaymentGatewayWorldPayInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayWorldPayInputType',
  description: 'input type for PaymentGatewayWorldPay in accounting',

  fields: () => ({
    authMode: {type: GraphQLBoolean},
    instId: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    hideContact: {type: GraphQLBoolean},
    testMode: {type: GraphQLInt},
    fixContact: {type: GraphQLBoolean},
    langId: {type: GraphQLString},
    hideCurrency: {type: GraphQLBoolean},
    noLanguageMenu: {type: GraphQLBoolean},
    withDelivery: {type: GraphQLBoolean}
  })
});

export {PaymentGatewayWorldPayInputType};
    