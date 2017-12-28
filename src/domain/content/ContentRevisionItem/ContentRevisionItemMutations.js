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
import {ContentRevisionItemInputType} from '../../content/ContentRevisionItem/ContentRevisionItemInputType.js';
import {ContentRevisionItemResponseType} from '../../content/ContentRevisionItem/ContentRevisionItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentRevisionItem = {
  type: ContentRevisionItemResponseType,
  description: 'mutation for ofbiz createContentRevisionItem method',
  args:{contentRevisionItemToBeAdded: {type: ContentRevisionItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentRevisionItems/add?`, args.contentRevisionItemToBeAdded, req);
  }
};
export {createContentRevisionItem};


const deleteContentRevisionItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentRevisionItemByIdUpdated method',
  args:{contentRevisionItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentRevisionItems/${args.contentRevisionItemId}?`, null, req);
  }
};
export {deleteContentRevisionItemByIdUpdated};


const updateContentRevisionItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentRevisionItem method',
  args:{contentRevisionItemToBeUpdated: {type: ContentRevisionItemInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentRevisionItems/${args.nullVal}?`, args.contentRevisionItemToBeUpdated, req);
  }
};
export {updateContentRevisionItem};
