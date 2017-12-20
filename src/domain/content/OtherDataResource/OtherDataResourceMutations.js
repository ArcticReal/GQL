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
import {OtherDataResourceInputType} from '../../content/OtherDataResource/OtherDataResourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOtherDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOtherDataResource method',
  args:{otherDataResourceToBeAdded: {type: OtherDataResourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/otherDataResources/add?`, args.otherDataResourceToBeAdded, req);
  }
};
export {createOtherDataResource};


const updateOtherDataResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOtherDataResource method',
  args:{otherDataResourceToBeUpdated: {type: OtherDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/otherDataResources/${args.nullVal}?`, args.otherDataResourceToBeUpdated, req);
  }
};
export {updateOtherDataResource};


const deleteOtherDataResourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOtherDataResourceByIdUpdated method',
  args:{otherDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/otherDataResources/${args.otherDataResourceId}?`, null, req);
  }
};
export {deleteOtherDataResourceByIdUpdated};
