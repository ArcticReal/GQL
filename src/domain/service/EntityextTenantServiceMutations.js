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


const createComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createComponent method',
  args:{componentName: {type: GraphQLString},rootLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextTenant/createComponent?componentName=${args.componentName}rootLocation=${args.rootLocation}`, null, req);
  }
};
export {createComponent};


const deleteComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteComponent method',
  args:{componentName: {type: GraphQLString},rootLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextTenant/deleteComponent?componentName=${args.componentName}rootLocation=${args.rootLocation}`, null, req);
  }
};
export {deleteComponent};


const updateComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateComponent method',
  args:{componentName: {type: GraphQLString},rootLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextTenant/updateComponent?componentName=${args.componentName}rootLocation=${args.rootLocation}`, null, req);
  }
};
export {updateComponent};
