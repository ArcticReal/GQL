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
import {ShipmentPackageRouteSegInputType} from '../../shipment/ShipmentPackageRouteSeg/ShipmentPackageRouteSegInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentPackageRouteSeg = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShipmentPackageRouteSeg method',
  args:{shipmentPackageRouteSegToBeAdded: {type: ShipmentPackageRouteSegInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentPackageRouteSegs/add?`, args.shipmentPackageRouteSegToBeAdded, req);
  }
};
export {createShipmentPackageRouteSeg};


const updateShipmentPackageRouteSeg = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShipmentPackageRouteSeg method',
  args:{shipmentPackageRouteSegToBeUpdated: {type: ShipmentPackageRouteSegInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentPackageRouteSegs/${args.nullVal}?`, args.shipmentPackageRouteSegToBeUpdated, req);
  }
};
export {updateShipmentPackageRouteSeg};


const deleteShipmentPackageRouteSegByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShipmentPackageRouteSegByIdUpdated method',
  args:{shipmentPackageRouteSegId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentPackageRouteSegs/${args.shipmentPackageRouteSegId}?`, null, req);
  }
};
export {deleteShipmentPackageRouteSegByIdUpdated};
