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

const PaymentGatewayClearCommerceInputType = new GraphQLInputObjectType({
  name: 'PaymentGatewayClearCommerceInputType',
  description: 'input type for PaymentGatewayClearCommerce',

  fields: () => ({
    clientId: {type: GraphQLString},
    effectiveAlias: {type: GraphQLString},
    enableCVM: {type: GraphQLBoolean},
    groupId: {type: GraphQLString},
    paymentGatewayConfigId: {type: GraphQLString},
    processMode: {type: GraphQLBoolean},
    pwd: {type: GraphQLString},
    serverURL: {type: GraphQLString},
    sourceId: {type: GraphQLString},
    userAlias: {type: GraphQLString},
    username: {type: GraphQLString}
  })
});

export {PaymentGatewayClearCommerceInputType};
    