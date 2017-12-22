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

const ShipmentAttributeResponseType = new GraphQLObjectType({
  name: 'ShipmentAttributeResponseType',
  description: 'response type for ShipmentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    shipmentId: {type: GraphQLString}
  })
});

export {ShipmentAttributeResponseType};
    