
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemLabelType} from '../product/InventoryItemLabelType.js';
import {InventoryItemLabelApplType} from '../product/InventoryItemLabelApplType.js';


const InventoryItemLabelTypeType = new GraphQLObjectType({
  name: 'InventoryItemLabelTypeType',
  description: 'Type for InventoryItemLabelType in product',

  fields: () => ({
    parentType: {
      type: InventoryItemLabelTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbiz.load(`inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabelType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    inventoryItemLabelTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    inventoryItemLabelType: {
      type: new GraphQLList(InventoryItemLabelTypeType),
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabelType.inventoryItemLabelTypeId}`)
    },
    inventoryItemLabelAppl: {
      type: new GraphQLList(InventoryItemLabelApplType),
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabelAppls/find?inventoryItemLabelTypeId=${inventoryItemLabelType.inventoryItemLabelTypeId}`)
    },
    inventoryItemLabel: {
      type: new GraphQLList(InventoryItemLabelType),
      args : {inventoryItemLabelTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemLabels/find?inventoryItemLabelTypeId=${inventoryItemLabelType.inventoryItemLabelTypeId}`)
    }
  })
});

export {InventoryItemLabelTypeType};
    