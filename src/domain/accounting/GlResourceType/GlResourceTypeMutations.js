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
import {GlResourceTypeInputType} from '../../accounting/GlResourceType/GlResourceTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlResourceType method',
  args:{glResourceTypeToBeAdded: {type: GlResourceTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glResourceTypes/add?`, args.glResourceTypeToBeAdded, req);
  }
};
export {createGlResourceType};


const updateGlResourceType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlResourceType method',
  args:{glResourceTypeToBeUpdated: {type: GlResourceTypeInputType},glResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glResourceTypes/${args.glResourceTypeId}?`, args.glResourceTypeToBeUpdated, req);
  }
};
export {updateGlResourceType};


const deleteGlResourceTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlResourceTypeByIdUpdated method',
  args:{glResourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glResourceTypes/${args.glResourceTypeId}?`, null, req);
  }
};
export {deleteGlResourceTypeByIdUpdated};
