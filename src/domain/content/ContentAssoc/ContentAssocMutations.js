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
import {ContentAssocInputType} from '../../content/ContentAssoc/ContentAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContentAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContentAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAssocs/add?`, null, req);
  }
};
export {createContentAssoc};


const deleteContentAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentAssocByIdUpdated method',
  args:{contentAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentAssocs/${args.contentAssocId}?`, null, req);
  }
};
export {deleteContentAssocByIdUpdated};


const updateContentAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentAssoc method',
  args:{contentAssocToBeUpdated: {type: ContentAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentAssocs/${args.nullVal}?`, args.contentAssocToBeUpdated, req);
  }
};
export {updateContentAssoc};
