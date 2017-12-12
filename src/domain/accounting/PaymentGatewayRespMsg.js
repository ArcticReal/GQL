
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

import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponse.js';


const PaymentGatewayRespMsgType = new GraphQLObjectType({
  name: 'PaymentGatewayRespMsgType',
  description: 'Type for PaymentGatewayRespMsg in accounting',

  fields: () => ({
    paymentGatewayRespMsgId: {type: GraphQLString},
    paymentGatewayResponse: {
      type: PaymentGatewayResponseType,
      args : {paymentGatewayResponseId: {type: GraphQLString}},
      resolve: (paymentGatewayRespMsg, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayResponses/find?paymentGatewayResponseId=${paymentGatewayRespMsg.paymentGatewayResponseId}`)
    },
    pgrMessage: {type: GraphQLString}
  })
});

export {PaymentGatewayRespMsgType};
    




const PaymentGatewayRespMsgInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayRespMsgInputType',
  description: 'input type for PaymentGatewayRespMsg in accounting',

  fields: () => ({
    paymentGatewayRespMsgId: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    pgrMessage: {type: GraphQLString}
  })
});

export {PaymentGatewayRespMsgInputType};
    