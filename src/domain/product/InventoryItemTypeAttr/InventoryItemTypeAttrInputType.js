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

const InventoryItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'InventoryItemTypeAttrInputType',
  description: 'input type for InventoryItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString}
  })
});

export {InventoryItemTypeAttrInputType};
    