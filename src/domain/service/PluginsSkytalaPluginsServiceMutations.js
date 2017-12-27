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


const createOfbizDemoByJavaService = {
  type: ResponseType,
  description: 'mutation for ofbiz createOfbizDemoByJavaService method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsSkytalaPlugins/createOfbizDemoByJavaService?`, null, req);
  }
};
export {createOfbizDemoByJavaService};


const createSkytalaPlugin = {
  type: ResponseType,
  description: 'mutation for ofbiz createSkytalaPlugin method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsSkytalaPlugins/createSkytalaPlugin?`, null, req);
  }
};
export {createSkytalaPlugin};


const getallproducts = {
  type: ResponseType,
  description: 'mutation for ofbiz getallproducts method',
  args:{ID: {type: GraphQLString},Name: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsSkytalaPlugins/getallproducts?ID=${args.ID}&Name=${args.Name}&`, null, req);
  }
};
export {getallproducts};


const simplesoap = {
  type: ResponseType,
  description: 'mutation for ofbiz simplesoap method',
  args:{defaultValue: {type: GraphQLFloat},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsSkytalaPlugins/simplesoap?defaultValue=${args.defaultValue}&message=${args.message}&`, null, req);
  }
};
export {simplesoap};


const simpletest = {
  type: ResponseType,
  description: 'mutation for ofbiz simpletest method',
  args:{eingabe: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsSkytalaPlugins/simpletest?eingabe=${args.eingabe}&`, null, req);
  }
};
export {simpletest};


const testservicedie2te = {
  type: ResponseType,
  description: 'mutation for ofbiz testservicedie2te method',
  args:{name: {type: GraphQLString},Id: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/pluginsSkytalaPlugins/testservicedie2te?name=${args.name}&Id=${args.Id}&`, null, req);
  }
};
export {testservicedie2te};
