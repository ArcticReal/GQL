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
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createComponent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createComponent method',
  args:{componentName: {type: GraphQLString},rootLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextTenant/createComponent?componentName=${args.componentName}rootLocation=${args.rootLocation}`, null, req);
  }
};
export {createComponent};


const deleteComponent = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteComponent method',
  args:{componentName: {type: GraphQLString},rootLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextTenant/deleteComponent?componentName=${args.componentName}rootLocation=${args.rootLocation}`, null, req);
  }
};
export {deleteComponent};


const updateComponent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateComponent method',
  args:{componentName: {type: GraphQLString},rootLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextTenant/updateComponent?componentName=${args.componentName}rootLocation=${args.rootLocation}`, null, req);
  }
};
export {updateComponent};
