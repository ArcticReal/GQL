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

const ShipmentStatusInputType = new GraphQLInputObjectType({
  name: 'ShipmentStatusInputType',
  description: 'input type for ShipmentStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ShipmentStatusInputType};
    