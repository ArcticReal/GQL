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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentRevisionItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentRevisionItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentRevisionItems/add?`, null, req);
  }
};
export {createContentRevisionItem};


const deleteContentRevisionItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentRevisionItemByIdUpdated method',
  args:{contentRevisionItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentRevisionItems/${args.contentRevisionItemId}?`, null, req);
  }
};
export {deleteContentRevisionItemByIdUpdated};


const updateContentRevisionItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentRevisionItem method',
  args:{contentRevisionItemToBeUpdated: {type: ContentRevisionItemInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentRevisionItems/${args.nullVal}?`, args.contentRevisionItemToBeUpdated, req);
  }
};
export {updateContentRevisionItem};
