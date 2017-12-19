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

const ShipmentGatewayFedexInputType = new GraphQLInputObjectType({
  name: 'ShipmentGatewayFedexInputType',
  description: 'input type for ShipmentGatewayFedex',

  fields: () => ({
    accessAccountNbr: {type: GraphQLString},
    accessMeterNumber: {type: GraphQLString},
    accessUserKey: {type: GraphQLString},
    accessUserPwd: {type: GraphQLString},
    connectSoapUrl: {type: GraphQLString},
    connectTimeout: {type: GraphQLInt},
    connectUrl: {type: GraphQLString},
    defaultDropoffType: {type: GraphQLString},
    defaultPackagingType: {type: GraphQLString},
    labelImageType: {type: GraphQLString},
    rateEstimateTemplate: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    templateShipment: {type: GraphQLString},
    templateSubscription: {type: GraphQLString}
  })
});

export {ShipmentGatewayFedexInputType};
    