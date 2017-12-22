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

const PaymentGatewayConfigResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayConfigResponseType',
  description: 'response type for PaymentGatewayConfig',

  fields: () => ({
    description: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    paymentGatewayConfigTypeId: {type: GraphQLString}
  })
});

export {PaymentGatewayConfigResponseType};
    