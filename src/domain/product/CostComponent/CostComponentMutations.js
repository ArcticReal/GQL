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
import {CostComponentInputType} from '../../product/CostComponent/CostComponentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCostComponent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCostComponent method',
  args:{costComponentToBeAdded: {type: CostComponentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponents/add?`, args.costComponentToBeAdded, req);
  }
};
export {createCostComponent};


const updateCostComponent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCostComponent method',
  args:{costComponentToBeUpdated: {type: CostComponentInputType},costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponents/${args.costComponentId}?`, args.costComponentToBeUpdated, req);
  }
};
export {updateCostComponent};


const deleteCostComponentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCostComponentByIdUpdated method',
  args:{costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponents/${args.costComponentId}?`, null, req);
  }
};
export {deleteCostComponentByIdUpdated};
