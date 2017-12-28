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
import {ShipmentContactMechInputType} from '../../shipment/ShipmentContactMech/ShipmentContactMechInputType.js';
import {ShipmentContactMechResponseType} from '../../shipment/ShipmentContactMech/ShipmentContactMechResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShipmentContactMech = {
  type: ShipmentContactMechResponseType,
  description: 'mutation for ofbiz createShipmentContactMech method',
  args:{shipmentContactMechToBeAdded: {type: ShipmentContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/shipmentContactMechs/add?`, args.shipmentContactMechToBeAdded, req);
  }
};
export {createShipmentContactMech};


const updateShipmentContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateShipmentContactMech method',
  args:{shipmentContactMechToBeUpdated: {type: ShipmentContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/shipmentContactMechs/${args.nullVal}?`, args.shipmentContactMechToBeUpdated, req);
  }
};
export {updateShipmentContactMech};


const deleteShipmentContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteShipmentContactMechByIdUpdated method',
  args:{shipmentContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/shipmentContactMechs/${args.shipmentContactMechId}?`, null, req);
  }
};
export {deleteShipmentContactMechByIdUpdated};
