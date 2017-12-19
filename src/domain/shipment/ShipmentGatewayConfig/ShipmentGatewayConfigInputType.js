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

const ShipmentGatewayConfigInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayConfigInputType',
  description: 'input type for ShipmentGatewayConfig',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString}
  })
});

export {ShipmentGatewayConfigInputType};
    