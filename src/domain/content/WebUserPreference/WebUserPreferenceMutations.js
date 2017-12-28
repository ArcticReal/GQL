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
import {WebUserPreferenceInputType} from '../../content/WebUserPreference/WebUserPreferenceInputType.js';
import {WebUserPreferenceResponseType} from '../../content/WebUserPreference/WebUserPreferenceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebUserPreference = {
  type: WebUserPreferenceResponseType,
  description: 'mutation for ofbiz createWebUserPreference method',
  args:{webUserPreferenceToBeAdded: {type: WebUserPreferenceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webUserPreferences/add?`, args.webUserPreferenceToBeAdded, req);
  }
};
export {createWebUserPreference};


const updateWebUserPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebUserPreference method',
  args:{webUserPreferenceToBeUpdated: {type: WebUserPreferenceInputType},visitId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webUserPreferences/${args.visitId}?`, args.webUserPreferenceToBeUpdated, req);
  }
};
export {updateWebUserPreference};


const deleteWebUserPreferenceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebUserPreferenceByIdUpdated method',
  args:{webUserPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webUserPreferences/${args.webUserPreferenceId}?`, null, req);
  }
};
export {deleteWebUserPreferenceByIdUpdated};
