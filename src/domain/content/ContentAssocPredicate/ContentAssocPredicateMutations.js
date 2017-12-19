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
import {ContentAssocPredicateInputType} from '../../content/ContentAssocPredicate/ContentAssocPredicateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContentAssocPredicate = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContentAssocPredicate method',
  args:{contentAssocPredicateToBeAdded: {type: ContentAssocPredicateInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAssocPredicates/add?`, args.contentAssocPredicateToBeAdded, req);
  }
};
export {createContentAssocPredicate};


const updateContentAssocPredicate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentAssocPredicate method',
  args:{contentAssocPredicateToBeUpdated: {type: ContentAssocPredicateInputType},contentAssocPredicateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentAssocPredicates/${args.contentAssocPredicateId}?`, args.contentAssocPredicateToBeUpdated, req);
  }
};
export {updateContentAssocPredicate};


const deleteContentAssocPredicateByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentAssocPredicateByIdUpdated method',
  args:{contentAssocPredicateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentAssocPredicates/${args.contentAssocPredicateId}?`, null, req);
  }
};
export {deleteContentAssocPredicateByIdUpdated};
