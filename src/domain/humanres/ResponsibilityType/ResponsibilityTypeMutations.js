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
import {ResponsibilityTypeResponseType} from '../../humanres/ResponsibilityType/ResponsibilityTypeResponseType.js';
import {ResponsibilityTypeInputType} from '../../humanres/ResponsibilityType/ResponsibilityTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createResponsibilityType = {
  type: ResponsibilityTypeResponseType,
  description: 'mutation for ofbiz createResponsibilityType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/responsibilityTypes/add?`, null, req);
  }
};
export {createResponsibilityType};


const updateResponsibilityType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateResponsibilityType method',
  args:{responsibilityTypeToBeUpdated: {type: ResponsibilityTypeInputType},responsibilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/responsibilityTypes/${args.responsibilityTypeId}?`, args.responsibilityTypeToBeUpdated, req);
  }
};
export {updateResponsibilityType};


const deleteResponsibilityTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteResponsibilityTypeByIdUpdated method',
  args:{responsibilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/responsibilityTypes/${args.responsibilityTypeId}?`, null, req);
  }
};
export {deleteResponsibilityTypeByIdUpdated};
