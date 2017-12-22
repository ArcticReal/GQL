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
import {MetaDataPredicateResponseType} from '../../content/MetaDataPredicate/MetaDataPredicateResponseType.js';
import {MetaDataPredicateInputType} from '../../content/MetaDataPredicate/MetaDataPredicateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMetaDataPredicate = {
  type: MetaDataPredicateResponseType,
  description: 'mutation for ofbiz createMetaDataPredicate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/metaDataPredicates/add?`, null, req);
  }
};
export {createMetaDataPredicate};


const updateMetaDataPredicate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMetaDataPredicate method',
  args:{metaDataPredicateToBeUpdated: {type: MetaDataPredicateInputType},metaDataPredicateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/metaDataPredicates/${args.metaDataPredicateId}?`, args.metaDataPredicateToBeUpdated, req);
  }
};
export {updateMetaDataPredicate};


const deleteMetaDataPredicateByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMetaDataPredicateByIdUpdated method',
  args:{metaDataPredicateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/metaDataPredicates/${args.metaDataPredicateId}?`, null, req);
  }
};
export {deleteMetaDataPredicateByIdUpdated};
