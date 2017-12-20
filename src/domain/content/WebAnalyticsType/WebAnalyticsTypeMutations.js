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
import {WebAnalyticsTypeInputType} from '../../content/WebAnalyticsType/WebAnalyticsTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebAnalyticsType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWebAnalyticsType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webAnalyticsTypes/add?`, null, req);
  }
};
export {createWebAnalyticsType};


const updateWebAnalyticsType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWebAnalyticsType method',
  args:{webAnalyticsTypeToBeUpdated: {type: WebAnalyticsTypeInputType},webAnalyticsTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webAnalyticsTypes/${args.webAnalyticsTypeId}?`, args.webAnalyticsTypeToBeUpdated, req);
  }
};
export {updateWebAnalyticsType};


const deleteWebAnalyticsTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWebAnalyticsTypeByIdUpdated method',
  args:{webAnalyticsTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webAnalyticsTypes/${args.webAnalyticsTypeId}?`, null, req);
  }
};
export {deleteWebAnalyticsTypeByIdUpdated};
