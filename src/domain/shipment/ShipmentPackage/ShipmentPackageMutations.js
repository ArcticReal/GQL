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
import {ShipmentPackageInputType} from '../../shipment/ShipmentPackage/ShipmentPackageInputType.js';
import {ShipmentPackageResponseType} from '../../shipment/ShipmentPackage/ShipmentPackageResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentPackage = {
  type: ShipmentPackageResponseType,
  description: 'mutation for ofbiz createShipmentPackage method',
  args:{shipmentPackageToBeAdded: {type: ShipmentPackageInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentPackages/add?`, args.shipmentPackageToBeAdded, req);
  }
};
export {createShipmentPackage};


const deleteShipmentPackageByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentPackageByIdUpdated method',
  args:{shipmentPackageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentPackages/${args.shipmentPackageId}?`, null, req);
  }
};
export {deleteShipmentPackageByIdUpdated};


const updateShipmentPackage = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentPackage method',
  args:{shipmentPackageToBeUpdated: {type: ShipmentPackageInputType},shipmentPackageSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentPackages/${args.shipmentPackageSeqId}?`, args.shipmentPackageToBeUpdated, req);
  }
};
export {updateShipmentPackage};
