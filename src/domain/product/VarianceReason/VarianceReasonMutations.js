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
import {VarianceReasonInputType} from '../../product/VarianceReason/VarianceReasonInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createVarianceReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVarianceReason method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/varianceReasons/add?`, null, req);
  }
};
export {createVarianceReason};


const updateVarianceReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVarianceReason method',
  args:{varianceReasonToBeUpdated: {type: VarianceReasonInputType},varianceReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/varianceReasons/${args.varianceReasonId}?`, args.varianceReasonToBeUpdated, req);
  }
};
export {updateVarianceReason};


const deleteVarianceReasonByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVarianceReasonByIdUpdated method',
  args:{varianceReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/varianceReasons/${args.varianceReasonId}?`, null, req);
  }
};
export {deleteVarianceReasonByIdUpdated};
