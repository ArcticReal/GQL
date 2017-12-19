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
import {ContentRevisionInputType} from '../../content/ContentRevision/ContentRevisionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContentRevision = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContentRevision method',
  args:{contentRevisionToBeAdded: {type: ContentRevisionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentRevisions/add?`, args.contentRevisionToBeAdded, req);
  }
};
export {createContentRevision};


const deleteContentRevisionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentRevisionByIdUpdated method',
  args:{contentRevisionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentRevisions/${args.contentRevisionId}?`, null, req);
  }
};
export {deleteContentRevisionByIdUpdated};


const updateContentRevision = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentRevision method',
  args:{contentRevisionToBeUpdated: {type: ContentRevisionInputType},contentRevisionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentRevisions/${args.contentRevisionSeqId}?`, args.contentRevisionToBeUpdated, req);
  }
};
export {updateContentRevision};
