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
import {ContentAssocPredicateResponseType} from '../../content/ContentAssocPredicate/ContentAssocPredicateResponseType.js';
import {ContentAssocPredicateInputType} from '../../content/ContentAssocPredicate/ContentAssocPredicateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentAssocPredicate = {
  type: ContentAssocPredicateResponseType,
  description: 'mutation for ofbiz createContentAssocPredicate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAssocPredicates/add?`, null, req);
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
