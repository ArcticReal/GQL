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
import {TarpittedLoginViewInputType} from '../../login/TarpittedLoginView/TarpittedLoginViewInputType.js';
import {TarpittedLoginViewResponseType} from '../../login/TarpittedLoginView/TarpittedLoginViewResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTarpittedLoginView = {
  type: TarpittedLoginViewResponseType,
  description: 'mutation for ofbiz createTarpittedLoginView method',
  args:{tarpittedLoginViewToBeAdded: {type: TarpittedLoginViewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/tarpittedLoginViews/add?`, args.tarpittedLoginViewToBeAdded, req);
  }
};
export {createTarpittedLoginView};


const updateTarpittedLoginView = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTarpittedLoginView method',
  args:{tarpittedLoginViewToBeUpdated: {type: TarpittedLoginViewInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/tarpittedLoginViews/${args.nullVal}?`, args.tarpittedLoginViewToBeUpdated, req);
  }
};
export {updateTarpittedLoginView};


const deleteTarpittedLoginViewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTarpittedLoginViewByIdUpdated method',
  args:{tarpittedLoginViewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/tarpittedLoginViews/${args.tarpittedLoginViewId}?`, null, req);
  }
};
export {deleteTarpittedLoginViewByIdUpdated};
