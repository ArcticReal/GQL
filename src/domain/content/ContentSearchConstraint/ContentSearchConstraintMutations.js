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
import {ContentSearchConstraintInputType} from '../../content/ContentSearchConstraint/ContentSearchConstraintInputType.js';
import {ContentSearchConstraintResponseType} from '../../content/ContentSearchConstraint/ContentSearchConstraintResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentSearchConstraint = {
  type: ContentSearchConstraintResponseType,
  description: 'mutation for ofbiz createContentSearchConstraint method',
  args:{contentSearchConstraintToBeAdded: {type: ContentSearchConstraintInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentSearchConstraints/add?`, args.contentSearchConstraintToBeAdded, req);
  }
};
export {createContentSearchConstraint};


const updateContentSearchConstraint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentSearchConstraint method',
  args:{contentSearchConstraintToBeUpdated: {type: ContentSearchConstraintInputType},constraintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentSearchConstraints/${args.constraintSeqId}?`, args.contentSearchConstraintToBeUpdated, req);
  }
};
export {updateContentSearchConstraint};


const deleteContentSearchConstraintByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentSearchConstraintByIdUpdated method',
  args:{contentSearchConstraintId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentSearchConstraints/${args.contentSearchConstraintId}?`, null, req);
  }
};
export {deleteContentSearchConstraintByIdUpdated};
