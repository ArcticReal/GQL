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
import {CostComponentResponseType} from '../../product/CostComponent/CostComponentResponseType.js';
import {CostComponentInputType} from '../../product/CostComponent/CostComponentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCostComponent = {
  type: CostComponentResponseType,
  description: 'mutation for ofbiz createCostComponent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponents/add?`, null, req);
  }
};
export {createCostComponent};


const updateCostComponent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCostComponent method',
  args:{costComponentToBeUpdated: {type: CostComponentInputType},costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponents/${args.costComponentId}?`, args.costComponentToBeUpdated, req);
  }
};
export {updateCostComponent};


const deleteCostComponentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCostComponentByIdUpdated method',
  args:{costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponents/${args.costComponentId}?`, null, req);
  }
};
export {deleteCostComponentByIdUpdated};
