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


const createCustomMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustomMethod method',
  args:{customMethodTypeId: {type: GraphQLString},customMethodName: {type: GraphQLString},description: {type: GraphQLString},customMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonMethod/createCustomMethod?customMethodTypeId=${args.customMethodTypeId}customMethodName=${args.customMethodName}description=${args.description}customMethodId=${args.customMethodId}`, null, req);
  }
};
export {createCustomMethod};


const createCustomMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustomMethodType method',
  args:{customMethodTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonMethod/createCustomMethodType?customMethodTypeId=${args.customMethodTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createCustomMethodType};


const deleteCustomMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustomMethod method',
  args:{customMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonMethod/deleteCustomMethod?customMethodId=${args.customMethodId}`, null, req);
  }
};
export {deleteCustomMethod};


const deleteCustomMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustomMethodType method',
  args:{customMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonMethod/deleteCustomMethodType?customMethodTypeId=${args.customMethodTypeId}`, null, req);
  }
};
export {deleteCustomMethodType};


const updateCustomMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustomMethod method',
  args:{customMethodId: {type: GraphQLString},customMethodTypeId: {type: GraphQLString},customMethodName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonMethod/updateCustomMethod?customMethodId=${args.customMethodId}customMethodTypeId=${args.customMethodTypeId}customMethodName=${args.customMethodName}description=${args.description}`, null, req);
  }
};
export {updateCustomMethod};


const updateCustomMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustomMethodType method',
  args:{customMethodTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonMethod/updateCustomMethodType?customMethodTypeId=${args.customMethodTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateCustomMethodType};
