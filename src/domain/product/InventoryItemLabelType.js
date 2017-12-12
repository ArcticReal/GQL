
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

import {InventoryItemLabelType} from '../product/InventoryItemLabel.js';
import {InventoryItemLabelApplType} from '../product/InventoryItemLabelAppl.js';


const InventoryItemLabelTypeType = new GraphQLObjectType({
  name: 'InventoryItemLabelTypeType',
  description: 'Type for InventoryItemLabelType in product',

  fields: () => ({
    parentType: {
      type: InventoryItemLabelTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabelType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    inventoryItemLabelTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    inventoryItemLabelTypes: {
      type: new GraphQLList(InventoryItemLabelTypeType),
      args : {},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemLabelTypes/find?inventoryItemLabelTypeId=${inventoryItemLabelType.inventoryItemLabelTypeId}`)
    },
    inventoryItemLabelAppls: {
      type: new GraphQLList(InventoryItemLabelApplType),
      args : {},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemLabelAppls/find?inventoryItemLabelTypeId=${inventoryItemLabelType.inventoryItemLabelTypeId}`)
    },
    inventoryItemLabels: {
      type: new GraphQLList(InventoryItemLabelType),
      args : {},
      resolve: (inventoryItemLabelType, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemLabels/find?inventoryItemLabelTypeId=${inventoryItemLabelType.inventoryItemLabelTypeId}`)
    }
  })
});

export {InventoryItemLabelTypeType};
    




const InventoryItemLabelTypeInputType = new GraphQLInputObjectType({
  name: 'InventoryItemLabelTypeInputType',
  description: 'input type for InventoryItemLabelType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    inventoryItemLabelTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {InventoryItemLabelTypeInputType};
    