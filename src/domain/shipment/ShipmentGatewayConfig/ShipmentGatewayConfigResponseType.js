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

const ShipmentGatewayConfigResponseType = new GraphQLObjectType({
  name: 'ShipmentGatewayConfigResponseType',
  description: 'response type for ShipmentGatewayConfig',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString}
  })
});

export {ShipmentGatewayConfigResponseType};
    