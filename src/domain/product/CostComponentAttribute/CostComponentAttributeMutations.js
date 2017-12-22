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
import {CostComponentAttributeResponseType} from '../../product/CostComponentAttribute/CostComponentAttributeResponseType.js';
import {CostComponentAttributeInputType} from '../../product/CostComponentAttribute/CostComponentAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCostComponentAttribute = {
  type: CostComponentAttributeResponseType,
  description: 'mutation for ofbiz createCostComponentAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponent/costComponentAttributes/add?`, null, req);
  }
};
export {createCostComponentAttribute};


const updateCostComponentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCostComponentAttribute method',
  args:{costComponentAttributeToBeUpdated: {type: CostComponentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponent/costComponentAttributes/${args.attrName}?`, args.costComponentAttributeToBeUpdated, req);
  }
};
export {updateCostComponentAttribute};


const deleteCostComponentAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCostComponentAttributeByIdUpdated method',
  args:{costComponentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponent/costComponentAttributes/${args.costComponentAttributeId}?`, null, req);
  }
};
export {deleteCostComponentAttributeByIdUpdated};
