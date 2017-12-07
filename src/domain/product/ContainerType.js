
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
import {InventoryTransferType} from '../product/InventoryTransferType.js';
import {ContainerGeoPointType} from '../product/ContainerGeoPointType.js';
import {ContainerTypeType} from '../product/ContainerTypeType.js';
import {FacilityType} from '../product/FacilityType.js';


const ContainerType = new GraphQLObjectType({
  name: 'ContainerType',
  description: 'Type for Container in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${container.facilityId}`)
    },
    containerType: {
      type: ContainerTypeType,
      args : {containerTypeId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbiz.load(`containerTypes/find?containerTypeId=${container.containerTypeId}`)
    },
    description: {type: GraphQLString},
    containerId: {type: GraphQLString},
    inventoryItem: {
      type: new GraphQLList(InventoryItemType),
      args : {containerId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?containerId=${container.containerId}`)
    },
    inventoryTransfer: {
      type: new GraphQLList(InventoryTransferType),
      args : {containerId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`inventoryTransfers/find?containerId=${container.containerId}`)
    },
    containerGeoPoint: {
      type: new GraphQLList(ContainerGeoPointType),
      args : {containerId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`containerGeoPoints/find?containerId=${container.containerId}`)
    }
  })
});

export {ContainerType};
    