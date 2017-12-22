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
import {EmploymentAppInputType} from '../../humanres/EmploymentApp/EmploymentAppInputType.js';
import {EmploymentAppResponseType} from '../../humanres/EmploymentApp/EmploymentAppResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmploymentApp = {
  type: EmploymentAppResponseType,
  description: 'mutation for ofbiz createEmploymentApp method',
  args:{employmentAppToBeAdded: {type: EmploymentAppInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/employment/employmentApps/add?`, args.employmentAppToBeAdded, req);
  }
};
export {createEmploymentApp};


const updateEmploymentApp = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmploymentApp method',
  args:{employmentAppToBeUpdated: {type: EmploymentAppInputType},applicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/employment/employmentApps/${args.applicationId}?`, args.employmentAppToBeUpdated, req);
  }
};
export {updateEmploymentApp};


const deleteEmploymentAppByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmploymentAppByIdUpdated method',
  args:{employmentAppId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/employment/employmentApps/${args.employmentAppId}?`, null, req);
  }
};
export {deleteEmploymentAppByIdUpdated};
