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
import {DataResourceMetaDataInputType} from '../../content/DataResourceMetaData/DataResourceMetaDataInputType.js';
import {DataResourceMetaDataResponseType} from '../../content/DataResourceMetaData/DataResourceMetaDataResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceMetaData = {
  type: DataResourceMetaDataResponseType,
  description: 'mutation for ofbiz createDataResourceMetaData method',
  args:{dataResourceMetaDataToBeAdded: {type: DataResourceMetaDataInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceMetaDatas/add?`, args.dataResourceMetaDataToBeAdded, req);
  }
};
export {createDataResourceMetaData};


const deleteDataResourceMetaDataByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataResourceMetaDataByIdUpdated method',
  args:{dataResourceMetaDataId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceMetaDatas/${args.dataResourceMetaDataId}?`, null, req);
  }
};
export {deleteDataResourceMetaDataByIdUpdated};


const updateDataResourceMetaData = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataResourceMetaData method',
  args:{dataResourceMetaDataToBeUpdated: {type: DataResourceMetaDataInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceMetaDatas/${args.nullVal}?`, args.dataResourceMetaDataToBeUpdated, req);
  }
};
export {updateDataResourceMetaData};
