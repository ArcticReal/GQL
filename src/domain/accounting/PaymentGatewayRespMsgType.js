
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponseType.js';


const PaymentGatewayRespMsgType = new GraphQLObjectType({
  name: 'PaymentGatewayRespMsgType',
  description: 'Type for PaymentGatewayRespMsg in accounting',

  fields: () => ({
    paymentGatewayRespMsgId: {type: GraphQLString},
    paymentGatewayResponse: {
      type: PaymentGatewayResponseType,
      args : {paymentGatewayResponseId: {type: GraphQLString}},
      resolve: (paymentGatewayRespMsg, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayResponses/find?paymentGatewayResponseId=${paymentGatewayRespMsg.paymentGatewayResponseId}`)
    },
    pgrMessage: {type: GraphQLString}
  })
});

export {PaymentGatewayRespMsgType};
    