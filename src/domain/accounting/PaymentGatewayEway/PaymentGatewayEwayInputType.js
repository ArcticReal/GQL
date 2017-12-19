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

const PaymentGatewayEwayInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayEwayInputType',
  description: 'input type for PaymentGatewayEway',

  fields: () => ({
    customerId: {type: GraphQLString},
    enableBeagle: {type: GraphQLString},
    enableCvn: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    refundPwd: {type: GraphQLString},
    testMode: {type: GraphQLString}
  })
});

export {PaymentGatewayEwayInputType};
    