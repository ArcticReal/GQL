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

const ShipmentStatusResponseType = new GraphQLObjectType({
  name: 'ShipmentStatusResponseType',
  description: 'response type for ShipmentStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ShipmentStatusResponseType};
    