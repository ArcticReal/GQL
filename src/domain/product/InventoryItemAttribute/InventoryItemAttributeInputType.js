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

const InventoryItemAttributeInputType = new GraphQLInputObjectType({
  name: 'InventoryItemAttributeInputType',
  description: 'input type for InventoryItemAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString}
  })
});

export {InventoryItemAttributeInputType};
    