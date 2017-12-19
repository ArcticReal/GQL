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

const PaymentGatewayConfigInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayConfigInputType',
  description: 'input type for PaymentGatewayConfig',

  fields: () => ({
    description: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    paymentGatewayConfigTypeId: {type: GraphQLString}
  })
});

export {PaymentGatewayConfigInputType};
    