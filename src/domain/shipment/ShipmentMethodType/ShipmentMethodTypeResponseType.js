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

const ShipmentMethodTypeResponseType = new GraphQLObjectType({
  name: 'ShipmentMethodTypeResponseType',
  description: 'response type for ShipmentMethodType',

  fields: () => ({
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {ShipmentMethodTypeResponseType};
    