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
import {EmploymentInputType} from '../../humanres/Employment/EmploymentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmployment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmployment method',
  args:{employmentToBeAdded: {type: EmploymentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/employments/add?`, args.employmentToBeAdded, req);
  }
};
export {createEmployment};


const deleteEmploymentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmploymentByIdUpdated method',
  args:{employmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/employments/${args.employmentId}?`, null, req);
  }
};
export {deleteEmploymentByIdUpdated};


const updateEmployment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmployment method',
  args:{employmentToBeUpdated: {type: EmploymentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/employments/${args.nullVal}?`, args.employmentToBeUpdated, req);
  }
};
export {updateEmployment};
