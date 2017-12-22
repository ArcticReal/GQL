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
import {CommContentAssocTypeInputType} from '../../party/CommContentAssocType/CommContentAssocTypeInputType.js';
import {CommContentAssocTypeResponseType} from '../../party/CommContentAssocType/CommContentAssocTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommContentAssocType = {
  type: CommContentAssocTypeResponseType,
  description: 'mutation for ofbiz createCommContentAssocType method',
  args:{commContentAssocTypeToBeAdded: {type: CommContentAssocTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/commContentAssocTypes/add?`, args.commContentAssocTypeToBeAdded, req);
  }
};
export {createCommContentAssocType};


const updateCommContentAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommContentAssocType method',
  args:{commContentAssocTypeToBeUpdated: {type: CommContentAssocTypeInputType},commContentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/commContentAssocTypes/${args.commContentAssocTypeId}?`, args.commContentAssocTypeToBeUpdated, req);
  }
};
export {updateCommContentAssocType};


const deleteCommContentAssocTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommContentAssocTypeByIdUpdated method',
  args:{commContentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/commContentAssocTypes/${args.commContentAssocTypeId}?`, null, req);
  }
};
export {deleteCommContentAssocTypeByIdUpdated};
