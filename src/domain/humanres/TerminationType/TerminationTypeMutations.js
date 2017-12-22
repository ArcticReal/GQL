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
import {TerminationTypeInputType} from '../../humanres/TerminationType/TerminationTypeInputType.js';
import {TerminationTypeResponseType} from '../../humanres/TerminationType/TerminationTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTerminationType = {
  type: TerminationTypeResponseType,
  description: 'mutation for ofbiz createTerminationType method',
  args:{terminationTypeToBeAdded: {type: TerminationTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/terminationTypes/add?`, args.terminationTypeToBeAdded, req);
  }
};
export {createTerminationType};


const updateTerminationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTerminationType method',
  args:{terminationTypeToBeUpdated: {type: TerminationTypeInputType},terminationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/terminationTypes/${args.terminationTypeId}?`, args.terminationTypeToBeUpdated, req);
  }
};
export {updateTerminationType};


const deleteTerminationTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTerminationTypeByIdUpdated method',
  args:{terminationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/terminationTypes/${args.terminationTypeId}?`, null, req);
  }
};
export {deleteTerminationTypeByIdUpdated};
