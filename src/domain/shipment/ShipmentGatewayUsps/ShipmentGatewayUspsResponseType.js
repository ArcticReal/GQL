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

const ShipmentGatewayUspsResponseType = new GraphQLObjectType({
  name: 'ShipmentGatewayUspsResponseType',
  description: 'response type for ShipmentGatewayUsps',

  fields: () => ({
    accessPassword: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    connectUrl: {type: GraphQLString},
    connectUrlLabels: {type: GraphQLString},
    maxEstimateWeight: {type: GraphQLInt},
    shipmentGatewayConfigId: {type: GraphQLString},
    test: {type: GraphQLString}
  })
});

export {ShipmentGatewayUspsResponseType};
    