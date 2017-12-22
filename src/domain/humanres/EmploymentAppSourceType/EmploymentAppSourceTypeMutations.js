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
import {EmploymentAppSourceTypeInputType} from '../../humanres/EmploymentAppSourceType/EmploymentAppSourceTypeInputType.js';
import {EmploymentAppSourceTypeResponseType} from '../../humanres/EmploymentAppSourceType/EmploymentAppSourceTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmploymentAppSourceType = {
  type: EmploymentAppSourceTypeResponseType,
  description: 'mutation for ofbiz createEmploymentAppSourceType method',
  args:{employmentAppSourceTypeToBeAdded: {type: EmploymentAppSourceTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/employment/employmentAppSourceTypes/add?`, args.employmentAppSourceTypeToBeAdded, req);
  }
};
export {createEmploymentAppSourceType};


const updateEmploymentAppSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmploymentAppSourceType method',
  args:{employmentAppSourceTypeToBeUpdated: {type: EmploymentAppSourceTypeInputType},employmentAppSourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/employment/employmentAppSourceTypes/${args.employmentAppSourceTypeId}?`, args.employmentAppSourceTypeToBeUpdated, req);
  }
};
export {updateEmploymentAppSourceType};


const deleteEmploymentAppSourceTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmploymentAppSourceTypeByIdUpdated method',
  args:{employmentAppSourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/employment/employmentAppSourceTypes/${args.employmentAppSourceTypeId}?`, null, req);
  }
};
export {deleteEmploymentAppSourceTypeByIdUpdated};
