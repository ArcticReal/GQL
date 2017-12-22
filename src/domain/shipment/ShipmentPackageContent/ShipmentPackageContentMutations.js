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
import {ShipmentPackageContentResponseType} from '../../shipment/ShipmentPackageContent/ShipmentPackageContentResponseType.js';
import {ShipmentPackageContentInputType} from '../../shipment/ShipmentPackageContent/ShipmentPackageContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentPackageContent = {
  type: ShipmentPackageContentResponseType,
  description: 'mutation for ofbiz createShipmentPackageContent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentPackageContents/add?`, null, req);
  }
};
export {createShipmentPackageContent};


const updateShipmentPackageContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentPackageContent method',
  args:{shipmentPackageContentToBeUpdated: {type: ShipmentPackageContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentPackageContents/${args.nullVal}?`, args.shipmentPackageContentToBeUpdated, req);
  }
};
export {updateShipmentPackageContent};


const deleteShipmentPackageContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentPackageContentByIdUpdated method',
  args:{shipmentPackageContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentPackageContents/${args.shipmentPackageContentId}?`, null, req);
  }
};
export {deleteShipmentPackageContentByIdUpdated};
