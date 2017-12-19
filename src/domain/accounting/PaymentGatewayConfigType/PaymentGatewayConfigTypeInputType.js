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

const PaymentGatewayConfigTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayConfigTypeInputType',
  description: 'input type for PaymentGatewayConfigType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentGatewayConfigTypeId: {type: GraphQLString}
  })
});

export {PaymentGatewayConfigTypeInputType};
    