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


const exampleComponentFormula = {
  type: ResopnseType,
  description: 'mutation for ofbiz exampleComponentFormula method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingFormula/exampleComponentFormula?arguments=${args.arguments}`, null, req);
  }
};
export {exampleComponentFormula};


const exampleTaskFormula = {
  type: ResopnseType,
  description: 'mutation for ofbiz exampleTaskFormula method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingFormula/exampleTaskFormula?arguments=${args.arguments}`, null, req);
  }
};
export {exampleTaskFormula};


const interfaceBomFormula = {
  type: ResopnseType,
  description: 'mutation for ofbiz interfaceBomFormula method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingFormula/interfaceBomFormula?arguments=${args.arguments}`, null, req);
  }
};
export {interfaceBomFormula};


const interfaceTaskFormula = {
  type: ResopnseType,
  description: 'mutation for ofbiz interfaceTaskFormula method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingFormula/interfaceTaskFormula?arguments=${args.arguments}`, null, req);
  }
};
export {interfaceTaskFormula};


const linearComponentFormula = {
  type: ResopnseType,
  description: 'mutation for ofbiz linearComponentFormula method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingFormula/linearComponentFormula?arguments=${args.arguments}`, null, req);
  }
};
export {linearComponentFormula};
