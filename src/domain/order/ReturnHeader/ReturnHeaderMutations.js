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
import {ReturnHeaderInputType} from '../../order/ReturnHeader/ReturnHeaderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createReturnHeader = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReturnHeader method',
  args:{returnHeaderToBeAdded: {type: ReturnHeaderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnHeaders/add?`, args.returnHeaderToBeAdded, req);
  }
};
export {createReturnHeader};


const deleteReturnHeaderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnHeaderByIdUpdated method',
  args:{returnHeaderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnHeaders/${args.returnHeaderId}?`, null, req);
  }
};
export {deleteReturnHeaderByIdUpdated};


const updateReturnHeader = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnHeader method',
  args:{returnHeaderToBeUpdated: {type: ReturnHeaderInputType},returnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnHeaders/${args.returnId}?`, args.returnHeaderToBeUpdated, req);
  }
};
export {updateReturnHeader};
