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

const ShipmentGatewayConfigTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayConfigTypeInputType',
  description: 'input type for ShipmentGatewayConfigType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString}
  })
});

export {ShipmentGatewayConfigTypeInputType};
    