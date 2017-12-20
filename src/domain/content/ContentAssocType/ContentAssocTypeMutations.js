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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentAssocType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAssocTypes/add?`, null, req);
  }
};
export {createContentAssocType};


const updateContentAssocType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAssocType method',
  args:{contentAssocTypeToBeUpdated: {type: ContentAssocTypeInputType},contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentAssocTypes/${args.contentAssocTypeId}?`, args.contentAssocTypeToBeUpdated, req);
  }
};
export {updateContentAssocType};


const deleteContentAssocTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentAssocTypeByIdUpdated method',
  args:{contentAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentAssocTypes/${args.contentAssocTypeId}?`, null, req);
  }
};
export {deleteContentAssocTypeByIdUpdated};
