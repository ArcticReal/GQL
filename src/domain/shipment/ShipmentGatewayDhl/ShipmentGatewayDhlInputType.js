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

const ShipmentGatewayDhlInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayDhlInputType',
  description: 'input type for ShipmentGatewayDhl',

  fields: () => ({
    accessAccountNbr: {type: GraphQLString},
    accessPassword: {type: GraphQLString},
    accessShippingKey: {type: GraphQLString},
    accessUserId: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    connectUrl: {type: GraphQLString},
    headAction: {type: GraphQLString},
    headVersion: {type: GraphQLString},
    labelImageFormat: {type: GraphQLString},
    rateEstimateTemplate: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString}
  })
});

export {ShipmentGatewayDhlInputType};
    