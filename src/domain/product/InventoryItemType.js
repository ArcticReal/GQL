
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

import {InventoryItemType} from '../product/InventoryItem.js';
import {InventoryItemTypeAttrType} from '../product/InventoryItemTypeAttr.js';
import {ProductType} from '../product/Product.js';
import {FacilityType} from '../product/Facility.js';


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
    inventoryItemTypeAttrs: {
      type: new GraphQLList(InventoryItemTypeAttrType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypeAttrs/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    inventoryItemTypes: {
      type: new GraphQLList(InventoryItemTypeType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemTypes/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    products: {
      type: new GraphQLList(ProductType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`products/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    },
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {inventoryItemTypeId: {type: GraphQLString}},
      resolve: (inventoryItemType, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?inventoryItemTypeId=${inventoryItemType.inventoryItemTypeId}`)
    }
  })
});

export {InventoryItemTypeType};
    




const InventoryItemTypeInputType = new GraphQLInputObjectType({
  name: 'InventoryItemTypeInputType',
  description: 'input type for InventoryItemType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString}
  })
});

export {InventoryItemTypeInputType};
    