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


const convertUomProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz convertUomProduct method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUom/convertUomProduct?arguments=${args.arguments}`, null, req);
  }
};
export {convertUomProduct};


const interfaceUomFormula = {
  type: ResopnseType,
  description: 'mutation for ofbiz interfaceUomFormula method',
  args:{arguments: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productUom/interfaceUomFormula?arguments=${args.arguments}`, null, req);
  }
};
export {interfaceUomFormula};
