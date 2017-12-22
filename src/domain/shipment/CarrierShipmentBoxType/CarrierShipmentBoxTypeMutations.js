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
import {CarrierShipmentBoxTypeInputType} from '../../shipment/CarrierShipmentBoxType/CarrierShipmentBoxTypeInputType.js';
import {CarrierShipmentBoxTypeResponseType} from '../../shipment/CarrierShipmentBoxType/CarrierShipmentBoxTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCarrierShipmentBoxType = {
  type: CarrierShipmentBoxTypeResponseType,
  description: 'mutation for ofbiz createCarrierShipmentBoxType method',
  args:{carrierShipmentBoxTypeToBeAdded: {type: CarrierShipmentBoxTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shipment/carrierShipmentBoxTypes/add?`, args.carrierShipmentBoxTypeToBeAdded, req);
  }
};
export {createCarrierShipmentBoxType};


const deleteCarrierShipmentBoxTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCarrierShipmentBoxTypeByIdUpdated method',
  args:{carrierShipmentBoxTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shipment/carrierShipmentBoxTypes/${args.carrierShipmentBoxTypeId}?`, null, req);
  }
};
export {deleteCarrierShipmentBoxTypeByIdUpdated};


const updateCarrierShipmentBoxType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCarrierShipmentBoxType method',
  args:{carrierShipmentBoxTypeToBeUpdated: {type: CarrierShipmentBoxTypeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shipment/carrierShipmentBoxTypes/${args.nullVal}?`, args.carrierShipmentBoxTypeToBeUpdated, req);
  }
};
export {updateCarrierShipmentBoxType};
