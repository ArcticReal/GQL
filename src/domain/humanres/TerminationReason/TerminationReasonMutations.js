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
import {TerminationReasonInputType} from '../../humanres/TerminationReason/TerminationReasonInputType.js';
import {TerminationReasonResponseType} from '../../humanres/TerminationReason/TerminationReasonResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTerminationReason = {
  type: TerminationReasonResponseType,
  description: 'mutation for ofbiz createTerminationReason method',
  args:{terminationReasonToBeAdded: {type: TerminationReasonInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/terminationReasons/add?`, args.terminationReasonToBeAdded, req);
  }
};
export {createTerminationReason};


const updateTerminationReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTerminationReason method',
  args:{terminationReasonToBeUpdated: {type: TerminationReasonInputType},terminationReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/terminationReasons/${args.terminationReasonId}?`, args.terminationReasonToBeUpdated, req);
  }
};
export {updateTerminationReason};


const deleteTerminationReasonByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTerminationReasonByIdUpdated method',
  args:{terminationReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/terminationReasons/${args.terminationReasonId}?`, null, req);
  }
};
export {deleteTerminationReasonByIdUpdated};
