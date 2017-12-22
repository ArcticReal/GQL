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

const PaymentGatewayConfigTypeResponseType = new GraphQLObjectType({
  name: 'PaymentGatewayConfigTypeResponseType',
  description: 'response type for PaymentGatewayConfigType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentGatewayConfigTypeId: {type: GraphQLString}
  })
});

export {PaymentGatewayConfigTypeResponseType};
    