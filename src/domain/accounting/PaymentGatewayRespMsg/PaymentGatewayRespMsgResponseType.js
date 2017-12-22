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

const PaymentGatewayRespMsgResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayRespMsgResponseType',
  description: 'response type for PaymentGatewayRespMsg',

  fields: () => ({
    paymentGatewayRespMsgId: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    pgrMessage: {type: GraphQLString}
  })
});

export {PaymentGatewayRespMsgResponseType};
    