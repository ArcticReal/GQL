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

const InventoryItemAttributeResponseType = new GraphQLObjectType({
  name: 'InventoryItemAttributeResponseType',
  description: 'response type for InventoryItemAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString}
  })
});

export {InventoryItemAttributeResponseType};
    