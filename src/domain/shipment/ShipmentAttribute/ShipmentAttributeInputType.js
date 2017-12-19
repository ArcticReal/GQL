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

const ShipmentAttributeInputType = new GraphQLInputObjectType({
  name: 'ShipmentAttributeInputType',
  description: 'input type for ShipmentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    shipmentId: {type: GraphQLString}
  })
});

export {ShipmentAttributeInputType};
    