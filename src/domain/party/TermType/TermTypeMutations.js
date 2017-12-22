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
import {TermTypeResponseType} from '../../party/TermType/TermTypeResponseType.js';
import {TermTypeInputType} from '../../party/TermType/TermTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTermType = {
  type: TermTypeResponseType,
  description: 'mutation for ofbiz createTermType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/termTypes/add?`, null, req);
  }
};
export {createTermType};


const updateTermType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTermType method',
  args:{termTypeToBeUpdated: {type: TermTypeInputType},termTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/termTypes/${args.termTypeId}?`, args.termTypeToBeUpdated, req);
  }
};
export {updateTermType};


const deleteTermTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTermTypeByIdUpdated method',
  args:{termTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/termTypes/${args.termTypeId}?`, null, req);
  }
};
export {deleteTermTypeByIdUpdated};
