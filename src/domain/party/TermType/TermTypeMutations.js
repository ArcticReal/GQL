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
import {TermTypeInputType} from '../../party/TermType/TermTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTermType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTermType method',
  args:{termTypeToBeAdded: {type: TermTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/termTypes/add?`, args.termTypeToBeAdded, req);
  }
};
export {createTermType};


const updateTermType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTermType method',
  args:{termTypeToBeUpdated: {type: TermTypeInputType},termTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/termTypes/${args.termTypeId}?`, args.termTypeToBeUpdated, req);
  }
};
export {updateTermType};


const deleteTermTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTermTypeByIdUpdated method',
  args:{termTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/termTypes/${args.termTypeId}?`, null, req);
  }
};
export {deleteTermTypeByIdUpdated};
