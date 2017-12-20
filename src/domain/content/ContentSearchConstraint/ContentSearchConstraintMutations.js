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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentSearchConstraint = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentSearchConstraint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentSearchConstraints/add?`, null, req);
  }
};
export {createContentSearchConstraint};


const updateContentSearchConstraint = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentSearchConstraint method',
  args:{contentSearchConstraintToBeUpdated: {type: ContentSearchConstraintInputType},constraintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentSearchConstraints/${args.constraintSeqId}?`, args.contentSearchConstraintToBeUpdated, req);
  }
};
export {updateContentSearchConstraint};


const deleteContentSearchConstraintByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentSearchConstraintByIdUpdated method',
  args:{contentSearchConstraintId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentSearchConstraints/${args.contentSearchConstraintId}?`, null, req);
  }
};
export {deleteContentSearchConstraintByIdUpdated};
