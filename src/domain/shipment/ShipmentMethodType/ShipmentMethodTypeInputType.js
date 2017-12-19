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

const ShipmentMethodTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentMethodTypeInputType',
  description: 'input type for ShipmentMethodType',

  fields: () => ({
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {ShipmentMethodTypeInputType};
    