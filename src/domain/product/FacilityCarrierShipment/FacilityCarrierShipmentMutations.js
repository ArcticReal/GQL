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
import {FacilityCarrierShipmentInputType} from '../../product/FacilityCarrierShipment/FacilityCarrierShipmentInputType.js';
import {FacilityCarrierShipmentResponseType} from '../../product/FacilityCarrierShipment/FacilityCarrierShipmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityCarrierShipment = {
  type: FacilityCarrierShipmentResponseType,
  description: 'mutation for ofbiz createFacilityCarrierShipment method',
  args:{facilityCarrierShipmentToBeAdded: {type: FacilityCarrierShipmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityCarrierShipments/add?`, args.facilityCarrierShipmentToBeAdded, req);
  }
};
export {createFacilityCarrierShipment};


const deleteFacilityCarrierShipmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFacilityCarrierShipmentByIdUpdated method',
  args:{facilityCarrierShipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityCarrierShipments/${args.facilityCarrierShipmentId}?`, null, req);
  }
};
export {deleteFacilityCarrierShipmentByIdUpdated};


const updateFacilityCarrierShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFacilityCarrierShipment method',
  args:{facilityCarrierShipmentToBeUpdated: {type: FacilityCarrierShipmentInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityCarrierShipments/${args.roleTypeId}?`, args.facilityCarrierShipmentToBeUpdated, req);
  }
};
export {updateFacilityCarrierShipment};
