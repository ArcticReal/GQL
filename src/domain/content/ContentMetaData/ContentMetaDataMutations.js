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
import {ContentMetaDataInputType} from '../../content/ContentMetaData/ContentMetaDataInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentMetaData = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentMetaData method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentMetaDatas/add?`, null, req);
  }
};
export {createContentMetaData};


const deleteContentMetaDataByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentMetaDataByIdUpdated method',
  args:{contentMetaDataId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentMetaDatas/${args.contentMetaDataId}?`, null, req);
  }
};
export {deleteContentMetaDataByIdUpdated};


const updateContentMetaData = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentMetaData method',
  args:{contentMetaDataToBeUpdated: {type: ContentMetaDataInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentMetaDatas/${args.nullVal}?`, args.contentMetaDataToBeUpdated, req);
  }
};
export {updateContentMetaData};
