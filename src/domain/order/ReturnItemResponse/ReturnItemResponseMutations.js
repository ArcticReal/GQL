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
import {ReturnItemResponseInputType} from '../../order/ReturnItemResponse/ReturnItemResponseInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createReturnItemResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReturnItemResponse method',
  args:{returnItemResponseToBeAdded: {type: ReturnItemResponseInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItem/returnItemResponses/add?`, args.returnItemResponseToBeAdded, req);
  }
};
export {createReturnItemResponse};


const updateReturnItemResponse = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnItemResponse method',
  args:{returnItemResponseToBeUpdated: {type: ReturnItemResponseInputType},returnItemResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnItem/returnItemResponses/${args.returnItemResponseId}?`, args.returnItemResponseToBeUpdated, req);
  }
};
export {updateReturnItemResponse};


const deleteReturnItemResponseByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnItemResponseByIdUpdated method',
  args:{returnItemResponseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnItem/returnItemResponses/${args.returnItemResponseId}?`, null, req);
  }
};
export {deleteReturnItemResponseByIdUpdated};
