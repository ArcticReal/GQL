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
import {CostComponentAttributeInputType} from '../../product/CostComponentAttribute/CostComponentAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCostComponentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCostComponentAttribute method',
  args:{costComponentAttributeToBeAdded: {type: CostComponentAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponent/costComponentAttributes/add?`, args.costComponentAttributeToBeAdded, req);
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
