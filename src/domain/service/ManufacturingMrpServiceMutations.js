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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createMrpEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMrpEvent method',
  args:{mrpEventTypeId: {type: GraphQLString},mrpId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},eventDate: {type: GraphQLString},facilityId: {type: GraphQLString},eventName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/createMrpEvent?mrpEventTypeId=${args.mrpEventTypeId}mrpId=${args.mrpId}quantity=${args.quantity}productId=${args.productId}eventDate=${args.eventDate}facilityId=${args.facilityId}eventName=${args.eventName}`, null, req);
  }
};
export {createMrpEvent};


const createMrpEventType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMrpEventType method',
  args:{mrpEventTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/createMrpEventType?mrpEventTypeId=${args.mrpEventTypeId}description=${args.description}`, null, req);
  }
};
export {createMrpEventType};


const deleteMrpEventType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMrpEventType method',
  args:{mrpEventTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/deleteMrpEventType?mrpEventTypeId=${args.mrpEventTypeId}`, null, req);
  }
};
export {deleteMrpEventType};


const executeMrp = {
  type: GraphQLString,
  description: 'mutation for ofbiz executeMrp method',
  args:{facilityId: {type: GraphQLString},defaultYearsOffset: {type: GraphQLInt},facilityGroupId: {type: GraphQLString},mrpName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/executeMrp?facilityId=${args.facilityId}defaultYearsOffset=${args.defaultYearsOffset}facilityGroupId=${args.facilityGroupId}mrpName=${args.mrpName}`, null, req);
  }
};
export {executeMrp};


const findProductMrpQoh = {
  type: GraphQLString,
  description: 'mutation for ofbiz findProductMrpQoh method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/findProductMrpQoh?productId=${args.productId}`, null, req);
  }
};
export {findProductMrpQoh};


const initMrpEvents = {
  type: GraphQLString,
  description: 'mutation for ofbiz initMrpEvents method',
  args:{reInitialize: {type: GraphQLBoolean},manufacturingFacilityId: {type: GraphQLString},mrpId: {type: GraphQLString},facilityId: {type: GraphQLString},defaultYearsOffset: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/initMrpEvents?reInitialize=${args.reInitialize}manufacturingFacilityId=${args.manufacturingFacilityId}mrpId=${args.mrpId}facilityId=${args.facilityId}defaultYearsOffset=${args.defaultYearsOffset}`, null, req);
  }
};
export {initMrpEvents};


const setEstimatedDeliveryDates = {
  type: GraphQLString,
  description: 'mutation for ofbiz setEstimatedDeliveryDates method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/setEstimatedDeliveryDates?`, null, req);
  }
};
export {setEstimatedDeliveryDates};


const updateMrpEventType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMrpEventType method',
  args:{mrpEventTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingMrp/updateMrpEventType?mrpEventTypeId=${args.mrpEventTypeId}description=${args.description}`, null, req);
  }
};
export {updateMrpEventType};
