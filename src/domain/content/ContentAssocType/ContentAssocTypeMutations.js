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
import {ContentAssocTypeInputType} from '../../content/ContentAssocType/ContentAssocTypeInputType.js';
import {ContentAssocTypeResponseType} from '../../content/ContentAssocType/ContentAssocTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentAssocType = {
  type: ContentAssocTypeResponseType,
  description: 'mutation for ofbiz createContentAssocType method',
  args:{contentAssocTypeToBeAdded: {type: ContentAssocTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAssocTypes/add?`, args.contentAssocTypeToBeAdded, req);
  }
};
export {createContentAssocType};


const updateContentAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentAssocType method',
  args:{contentAssocTypeToBeUpdated: {type: ContentAssocTypeInputType},contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentAssocTypes/${args.contentAssocTypeId}?`, args.contentAssocTypeToBeUpdated, req);
  }
};
export {updateContentAssocType};


const deleteContentAssocTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentAssocTypeByIdUpdated method',
  args:{contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentAssocTypes/${args.contentAssocTypeId}?`, null, req);
  }
};
export {deleteContentAssocTypeByIdUpdated};
