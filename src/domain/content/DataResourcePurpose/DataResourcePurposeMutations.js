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
import {DataResourcePurposeResponseType} from '../../content/DataResourcePurpose/DataResourcePurposeResponseType.js';
import {DataResourcePurposeInputType} from '../../content/DataResourcePurpose/DataResourcePurposeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourcePurpose = {
  type: DataResourcePurposeResponseType,
  description: 'mutation for ofbiz createDataResourcePurpose method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourcePurposes/add?`, null, req);
  }
};
export {createDataResourcePurpose};


const deleteDataResourcePurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataResourcePurposeByIdUpdated method',
  args:{dataResourcePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourcePurposes/${args.dataResourcePurposeId}?`, null, req);
  }
};
export {deleteDataResourcePurposeByIdUpdated};


const updateDataResourcePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataResourcePurpose method',
  args:{dataResourcePurposeToBeUpdated: {type: DataResourcePurposeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourcePurposes/${args.nullVal}?`, args.dataResourcePurposeToBeUpdated, req);
  }
};
export {updateDataResourcePurpose};
