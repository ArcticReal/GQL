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
import {ReturnContactMechInputType} from '../../order/ReturnContactMech/ReturnContactMechInputType.js';
import {ReturnContactMechResponseType} from '../../order/ReturnContactMech/ReturnContactMechResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnContactMech = {
  type: ReturnContactMechResponseType,
  description: 'mutation for ofbiz createReturnContactMech method',
  args:{returnContactMechToBeAdded: {type: ReturnContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnContactMechs/add?`, args.returnContactMechToBeAdded, req);
  }
};
export {createReturnContactMech};


const updateReturnContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnContactMech method',
  args:{returnContactMechToBeUpdated: {type: ReturnContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnContactMechs/${args.nullVal}?`, args.returnContactMechToBeUpdated, req);
  }
};
export {updateReturnContactMech};


const deleteReturnContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnContactMechByIdUpdated method',
  args:{returnContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnContactMechs/${args.returnContactMechId}?`, null, req);
  }
};
export {deleteReturnContactMechByIdUpdated};
