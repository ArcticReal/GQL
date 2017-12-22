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
import {OtherDataResourceResponseType} from '../../content/OtherDataResource/OtherDataResourceResponseType.js';
import {OtherDataResourceInputType} from '../../content/OtherDataResource/OtherDataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOtherDataResource = {
  type: OtherDataResourceResponseType,
  description: 'mutation for ofbiz createOtherDataResource method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/otherDataResources/add?`, null, req);
  }
};
export {createOtherDataResource};


const updateOtherDataResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOtherDataResource method',
  args:{otherDataResourceToBeUpdated: {type: OtherDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/otherDataResources/${args.nullVal}?`, args.otherDataResourceToBeUpdated, req);
  }
};
export {updateOtherDataResource};


const deleteOtherDataResourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOtherDataResourceByIdUpdated method',
  args:{otherDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/otherDataResources/${args.otherDataResourceId}?`, null, req);
  }
};
export {deleteOtherDataResourceByIdUpdated};
