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
import {MimeTypeHtmlTemplateInputType} from '../../content/MimeTypeHtmlTemplate/MimeTypeHtmlTemplateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMimeTypeHtmlTemplate = {
  type: ResopnseType,
  description: 'mutation for ofbiz createMimeTypeHtmlTemplate method',
  args:{mimeTypeHtmlTemplateToBeAdded: {type: MimeTypeHtmlTemplateInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/mimeType/mimeTypeHtmlTemplates/add?`, args.mimeTypeHtmlTemplateToBeAdded, req);
  }
};
export {createMimeTypeHtmlTemplate};


const deleteMimeTypeHtmlTemplateByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteMimeTypeHtmlTemplateByIdUpdated method',
  args:{mimeTypeHtmlTemplateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/mimeType/mimeTypeHtmlTemplates/${args.mimeTypeHtmlTemplateId}?`, null, req);
  }
};
export {deleteMimeTypeHtmlTemplateByIdUpdated};


const updateMimeTypeHtmlTemplate = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateMimeTypeHtmlTemplate method',
  args:{mimeTypeHtmlTemplateToBeUpdated: {type: MimeTypeHtmlTemplateInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/mimeType/mimeTypeHtmlTemplates/${args.nullVal}?`, args.mimeTypeHtmlTemplateToBeUpdated, req);
  }
};
export {updateMimeTypeHtmlTemplate};
