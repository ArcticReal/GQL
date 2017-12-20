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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFacilityCarrierShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFacilityCarrierShipment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/facility/facilityCarrierShipments/add?`, null, req);
  }
};
export {createFacilityCarrierShipment};


const deleteFacilityCarrierShipmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFacilityCarrierShipmentByIdUpdated method',
  args:{facilityCarrierShipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/facility/facilityCarrierShipments/${args.facilityCarrierShipmentId}?`, null, req);
  }
};
export {deleteFacilityCarrierShipmentByIdUpdated};


const updateFacilityCarrierShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFacilityCarrierShipment method',
  args:{facilityCarrierShipmentToBeUpdated: {type: FacilityCarrierShipmentInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/facility/facilityCarrierShipments/${args.roleTypeId}?`, args.facilityCarrierShipmentToBeUpdated, req);
  }
};
export {updateFacilityCarrierShipment};
