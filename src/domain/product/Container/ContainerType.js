
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {InventoryTransferType} from '../../product/InventoryTransfer/InventoryTransferType.js';
import {ContainerGeoPointType} from '../../product/ContainerGeoPoint/ContainerGeoPointType.js';
import {ContainerTypeType} from '../../product/ContainerType/ContainerTypeType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


const ContainerType = new GraphQLObjectType({
  name: 'ContainerType',
  description: 'Type for Container in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${container.facilityId}`)
    },
    containerType: {
      type: ContainerTypeType,
      args : {containerTypeId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbiz.load(`product/container/containerTypes/find?containerTypeId=${container.containerTypeId}`)
    },
    description: {type: GraphQLString},
    containerId: {type: GraphQLString},
    inventoryItems: {
      type: new GraphQLList(InventoryItemType),
      args : {},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItems/find?containerId=${container.containerId}`)
    },
    inventoryTransfers: {
      type: new GraphQLList(InventoryTransferType),
      args : {},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryTransfers/find?containerId=${container.containerId}`)
    },
    containerGeoPoints: {
      type: new GraphQLList(ContainerGeoPointType),
      args : {},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`product/container/containerGeoPoints/find?containerId=${container.containerId}`)
    }
  })
});

export {ContainerType};
    