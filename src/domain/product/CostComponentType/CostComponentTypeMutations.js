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
import {CostComponentTypeInputType} from '../../product/CostComponentType/CostComponentTypeInputType.js';
import {CostComponentTypeResponseType} from '../../product/CostComponentType/CostComponentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCostComponentType = {
  type: CostComponentTypeResponseType,
  description: 'mutation for ofbiz createCostComponentType method',
  args:{costComponentTypeToBeAdded: {type: CostComponentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponent/costComponentTypes/add?`, args.costComponentTypeToBeAdded, req);
  }
};
export {createCostComponentType};


const updateCostComponentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCostComponentType method',
  args:{costComponentTypeToBeUpdated: {type: CostComponentTypeInputType},costComponentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponent/costComponentTypes/${args.costComponentTypeId}?`, args.costComponentTypeToBeUpdated, req);
  }
};
export {updateCostComponentType};


const deleteCostComponentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCostComponentTypeByIdUpdated method',
  args:{costComponentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponent/costComponentTypes/${args.costComponentTypeId}?`, null, req);
  }
};
export {deleteCostComponentTypeByIdUpdated};
