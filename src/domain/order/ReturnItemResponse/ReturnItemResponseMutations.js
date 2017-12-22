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
import {ReturnItemResponseResponseType} from '../../order/ReturnItemResponse/ReturnItemResponseResponseType.js';
import {ReturnItemResponseInputType} from '../../order/ReturnItemResponse/ReturnItemResponseInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnItemResponse = {
  type: ReturnItemResponseResponseType,
  description: 'mutation for ofbiz createReturnItemResponse method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItem/returnItemResponses/add?`, null, req);
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
