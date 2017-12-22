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
import {WebPreferenceTypeResponseType} from '../../content/WebPreferenceType/WebPreferenceTypeResponseType.js';
import {WebPreferenceTypeInputType} from '../../content/WebPreferenceType/WebPreferenceTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebPreferenceType = {
  type: WebPreferenceTypeResponseType,
  description: 'mutation for ofbiz createWebPreferenceType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webPreferenceTypes/add?`, null, req);
  }
};
export {createWebPreferenceType};


const updateWebPreferenceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebPreferenceType method',
  args:{webPreferenceTypeToBeUpdated: {type: WebPreferenceTypeInputType},webPreferenceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webPreferenceTypes/${args.webPreferenceTypeId}?`, args.webPreferenceTypeToBeUpdated, req);
  }
};
export {updateWebPreferenceType};


const deleteWebPreferenceTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebPreferenceTypeByIdUpdated method',
  args:{webPreferenceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webPreferenceTypes/${args.webPreferenceTypeId}?`, null, req);
  }
};
export {deleteWebPreferenceTypeByIdUpdated};
