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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTerminationReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTerminationReason method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/terminationReasons/add?`, null, req);
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
