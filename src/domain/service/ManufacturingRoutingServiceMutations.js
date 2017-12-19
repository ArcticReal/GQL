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


const checkRoutingTaskAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz checkRoutingTaskAssoc method',
  args:{workEffortIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},create: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingRouting/checkRoutingTaskAssoc?workEffortIdTo=${args.workEffortIdTo}fromDate=${args.fromDate}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}sequenceNum=${args.sequenceNum}create=${args.create}thruDate=${args.thruDate}`, null, req);
  }
};
export {checkRoutingTaskAssoc};


const getEstimatedTaskTime = {
  type: GraphQLString,
  description: 'mutation for ofbiz getEstimatedTaskTime method',
  args:{taskId: {type: GraphQLString},routingId: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingRouting/getEstimatedTaskTime?taskId=${args.taskId}routingId=${args.routingId}quantity=${args.quantity}productId=${args.productId}`, null, req);
  }
};
export {getEstimatedTaskTime};


const getProductRouting = {
  type: GraphQLString,
  description: 'mutation for ofbiz getProductRouting method',
  args:{productId: {type: GraphQLString},workEffortId: {type: GraphQLString},applicableDate: {type: GraphQLString},ignoreDefaultRouting: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingRouting/getProductRouting?productId=${args.productId}workEffortId=${args.workEffortId}applicableDate=${args.applicableDate}ignoreDefaultRouting=${args.ignoreDefaultRouting}`, null, req);
  }
};
export {getProductRouting};


const getRoutingTaskAssocs = {
  type: GraphQLString,
  description: 'mutation for ofbiz getRoutingTaskAssocs method',
  args:{workEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingRouting/getRoutingTaskAssocs?workEffortId=${args.workEffortId}`, null, req);
  }
};
export {getRoutingTaskAssocs};


const lookupRoutingTask = {
  type: GraphQLString,
  description: 'mutation for ofbiz lookupRoutingTask method',
  args:{fixedAssetId: {type: GraphQLString},workEffortName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingRouting/lookupRoutingTask?fixedAssetId=${args.fixedAssetId}workEffortName=${args.workEffortName}`, null, req);
  }
};
export {lookupRoutingTask};
