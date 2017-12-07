
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {InventoryItemTypeAttrType} from '../product/InventoryItemTypeAttrType.js';
import {ProductType} from '../product/ProductType.js';
import {FacilityType} from '../product/FacilityType.js';


const InventoryItemTypeType = new GraphQLObjectType({
  name: 'InventoryItemTypeType',
  description: 'Type for InventoryItemType in product',

  fields: () => ({
    parentType: {
      type: InventoryItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbiz.load(`inventoryItemTypes/find?inventoryItemTypeId=${inventoryItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString},
    inventoryItemTypeAttr: {
      type: new GraphQLList(InventoryItemTypeAttrType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypeAttrs/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    facility: {
      type: new GraphQLList(FacilityType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    inventoryItemType: {
      type: new GraphQLList(InventoryItemTypeType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    product: {
      type: new GraphQLList(ProductType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`products/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    }
  })
});

export {InventoryItemTypeType};
    