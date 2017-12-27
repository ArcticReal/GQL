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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createEmplPositionClassType = {
  type: ResponseType,
  description: 'mutation for ofbiz createEmplPositionClassType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresPosition/createEmplPositionClassType?parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&emplPositionClassTypeId=${args.emplPositionClassTypeId}&`, null, req);
  }
};
export {createEmplPositionClassType};


const createEmplPositionTypeClass = {
  type: ResponseType,
  description: 'mutation for ofbiz createEmplPositionTypeClass method',
  args:{fromDate: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},emplPositionClassTypeId: {type: GraphQLString},standardHoursPerWeek: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresPosition/createEmplPositionTypeClass?fromDate=${args.fromDate}&emplPositionTypeId=${args.emplPositionTypeId}&emplPositionClassTypeId=${args.emplPositionClassTypeId}&standardHoursPerWeek=${args.standardHoursPerWeek}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {createEmplPositionTypeClass};


const deleteEmplPositionClassType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteEmplPositionClassType method',
  args:{emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresPosition/deleteEmplPositionClassType?emplPositionClassTypeId=${args.emplPositionClassTypeId}&`, null, req);
  }
};
export {deleteEmplPositionClassType};


const expireEmplPositionTypeClass = {
  type: ResponseType,
  description: 'mutation for ofbiz expireEmplPositionTypeClass method',
  args:{fromDate: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresPosition/expireEmplPositionTypeClass?fromDate=${args.fromDate}&emplPositionTypeId=${args.emplPositionTypeId}&emplPositionClassTypeId=${args.emplPositionClassTypeId}&`, null, req);
  }
};
export {expireEmplPositionTypeClass};


const updateEmplPositionClassType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEmplPositionClassType method',
  args:{emplPositionClassTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresPosition/updateEmplPositionClassType?emplPositionClassTypeId=${args.emplPositionClassTypeId}&parentTypeId=${args.parentTypeId}&hasTable=${args.hasTable}&description=${args.description}&`, null, req);
  }
};
export {updateEmplPositionClassType};


const updateEmplPositionTypeClass = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEmplPositionTypeClass method',
  args:{fromDate: {type: GraphQLString},emplPositionTypeId: {type: GraphQLString},emplPositionClassTypeId: {type: GraphQLString},standardHoursPerWeek: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresPosition/updateEmplPositionTypeClass?fromDate=${args.fromDate}&emplPositionTypeId=${args.emplPositionTypeId}&emplPositionClassTypeId=${args.emplPositionClassTypeId}&standardHoursPerWeek=${args.standardHoursPerWeek}&thruDate=${args.thruDate}&`, null, req);
  }
};
export {updateEmplPositionTypeClass};
