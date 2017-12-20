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
import {ContentInputType} from '../../content/Content/ContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContent method',
  args:{contentToBeAdded: {type: ContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`contents/add?`, args.contentToBeAdded, req);
  }
};
export {createContent};


const updateContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContent method',
  args:{contentToBeUpdated: {type: ContentInputType},contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`contents/${args.contentId}?`, args.contentToBeUpdated, req);
  }
};
export {updateContent};


const deleteContentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentByIdUpdated method',
  args:{contentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`contents/${args.contentId}?`, null, req);
  }
};
export {deleteContentByIdUpdated};
