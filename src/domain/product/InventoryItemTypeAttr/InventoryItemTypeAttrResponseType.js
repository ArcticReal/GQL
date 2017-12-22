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

const InventoryItemTypeAttrResponseType = new GraphQLObjectType({
  name: 'InventoryItemTypeAttrResponseType',
  description: 'response type for InventoryItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString}
  })
});

export {InventoryItemTypeAttrResponseType};
    