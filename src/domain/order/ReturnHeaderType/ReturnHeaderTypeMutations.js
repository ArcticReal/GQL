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
import {ReturnHeaderTypeResponseType} from '../../order/ReturnHeaderType/ReturnHeaderTypeResponseType.js';
import {ReturnHeaderTypeInputType} from '../../order/ReturnHeaderType/ReturnHeaderTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnHeaderType = {
  type: ReturnHeaderTypeResponseType,
  description: 'mutation for ofbiz createReturnHeaderType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnHeader/returnHeaderTypes/add?`, null, req);
  }
};
export {createReturnHeaderType};


const updateReturnHeaderType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnHeaderType method',
  args:{returnHeaderTypeToBeUpdated: {type: ReturnHeaderTypeInputType},returnHeaderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnHeader/returnHeaderTypes/${args.returnHeaderTypeId}?`, args.returnHeaderTypeToBeUpdated, req);
  }
};
export {updateReturnHeaderType};


const deleteReturnHeaderTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnHeaderTypeByIdUpdated method',
  args:{returnHeaderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnHeader/returnHeaderTypes/${args.returnHeaderTypeId}?`, null, req);
  }
};
export {deleteReturnHeaderTypeByIdUpdated};
