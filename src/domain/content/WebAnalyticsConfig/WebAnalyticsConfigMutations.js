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
import {WebAnalyticsConfigInputType} from '../../content/WebAnalyticsConfig/WebAnalyticsConfigInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebAnalyticsConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWebAnalyticsConfig method',
  args:{webAnalyticsConfigToBeAdded: {type: WebAnalyticsConfigInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webAnalyticsConfigs/add?`, args.webAnalyticsConfigToBeAdded, req);
  }
};
export {createWebAnalyticsConfig};


const updateWebAnalyticsConfig = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWebAnalyticsConfig method',
  args:{webAnalyticsConfigToBeUpdated: {type: WebAnalyticsConfigInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webAnalyticsConfigs/${args.nullVal}?`, args.webAnalyticsConfigToBeUpdated, req);
  }
};
export {updateWebAnalyticsConfig};


const deleteWebAnalyticsConfigByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWebAnalyticsConfigByIdUpdated method',
  args:{webAnalyticsConfigId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webAnalyticsConfigs/${args.webAnalyticsConfigId}?`, null, req);
  }
};
export {deleteWebAnalyticsConfigByIdUpdated};
