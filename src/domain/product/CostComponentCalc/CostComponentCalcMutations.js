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
import {CostComponentCalcInputType} from '../../product/CostComponentCalc/CostComponentCalcInputType.js';
import {CostComponentCalcResponseType} from '../../product/CostComponentCalc/CostComponentCalcResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCostComponentCalc = {
  type: CostComponentCalcResponseType,
  description: 'mutation for ofbiz createCostComponentCalc method',
  args:{costComponentCalcToBeAdded: {type: CostComponentCalcInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponent/costComponentCalcs/add?`, args.costComponentCalcToBeAdded, req);
  }
};
export {createCostComponentCalc};


const updateCostComponentCalc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCostComponentCalc method',
  args:{costComponentCalcToBeUpdated: {type: CostComponentCalcInputType},costComponentCalcId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponent/costComponentCalcs/${args.costComponentCalcId}?`, args.costComponentCalcToBeUpdated, req);
  }
};
export {updateCostComponentCalc};


const deleteCostComponentCalcByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCostComponentCalcByIdUpdated method',
  args:{costComponentCalcId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponent/costComponentCalcs/${args.costComponentCalcId}?`, null, req);
  }
};
export {deleteCostComponentCalcByIdUpdated};
