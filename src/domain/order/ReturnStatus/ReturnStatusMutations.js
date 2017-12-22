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
import {ReturnStatusResponseType} from '../../order/ReturnStatus/ReturnStatusResponseType.js';
import {ReturnStatusInputType} from '../../order/ReturnStatus/ReturnStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnStatus = {
  type: ReturnStatusResponseType,
  description: 'mutation for ofbiz createReturnStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnStatuss/add?`, null, req);
  }
};
export {createReturnStatus};


const updateReturnStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnStatus method',
  args:{returnStatusToBeUpdated: {type: ReturnStatusInputType},returnStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnStatuss/${args.returnStatusId}?`, args.returnStatusToBeUpdated, req);
  }
};
export {updateReturnStatus};


const deleteReturnStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnStatusByIdUpdated method',
  args:{returnStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnStatuss/${args.returnStatusId}?`, null, req);
  }
};
export {deleteReturnStatusByIdUpdated};
