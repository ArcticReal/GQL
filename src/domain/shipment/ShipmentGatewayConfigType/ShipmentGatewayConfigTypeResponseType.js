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

const ShipmentGatewayConfigTypeResponseType = new GraphQLObjectType({
  name: 'ShipmentGatewayConfigTypeResponseType',
  description: 'response type for ShipmentGatewayConfigType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    shipmentGatewayConfTypeId: {type: GraphQLString}
  })
});

export {ShipmentGatewayConfigTypeResponseType};
    