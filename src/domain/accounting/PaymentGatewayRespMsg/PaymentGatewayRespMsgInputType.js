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

const PaymentGatewayRespMsgInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayRespMsgInputType',
  description: 'input type for PaymentGatewayRespMsg',

  fields: () => ({
    paymentGatewayRespMsgId: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    pgrMessage: {type: GraphQLString}
  })
});

export {PaymentGatewayRespMsgInputType};
    