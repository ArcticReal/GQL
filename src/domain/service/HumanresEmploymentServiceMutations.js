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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createBenefitType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBenefitType method',
  args:{parentTypeId: {type: GraphQLString},employerPaidPercentage: {type: GraphQLFloat},hasTable: {type: GraphQLString},benefitName: {type: GraphQLString},benefitTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresEmployment/createBenefitType?parentTypeId=${args.parentTypeId}employerPaidPercentage=${args.employerPaidPercentage}hasTable=${args.hasTable}benefitName=${args.benefitName}benefitTypeId=${args.benefitTypeId}description=${args.description}`, null, req);
  }
};
export {createBenefitType};


const createEmploymentAppSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmploymentAppSourceType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},employmentAppSourceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresEmployment/createEmploymentAppSourceType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}employmentAppSourceTypeId=${args.employmentAppSourceTypeId}description=${args.description}`, null, req);
  }
};
export {createEmploymentAppSourceType};


const deleteBenefitType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBenefitType method',
  args:{benefitTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresEmployment/deleteBenefitType?benefitTypeId=${args.benefitTypeId}`, null, req);
  }
};
export {deleteBenefitType};


const deleteEmploymentAppSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmploymentAppSourceType method',
  args:{employmentAppSourceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresEmployment/deleteEmploymentAppSourceType?employmentAppSourceTypeId=${args.employmentAppSourceTypeId}`, null, req);
  }
};
export {deleteEmploymentAppSourceType};


const updateBenefitType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBenefitType method',
  args:{benefitTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},employerPaidPercentage: {type: GraphQLFloat},hasTable: {type: GraphQLString},benefitName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresEmployment/updateBenefitType?benefitTypeId=${args.benefitTypeId}parentTypeId=${args.parentTypeId}employerPaidPercentage=${args.employerPaidPercentage}hasTable=${args.hasTable}benefitName=${args.benefitName}description=${args.description}`, null, req);
  }
};
export {updateBenefitType};


const updateEmploymentAppSourceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmploymentAppSourceType method',
  args:{employmentAppSourceTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresEmployment/updateEmploymentAppSourceType?employmentAppSourceTypeId=${args.employmentAppSourceTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateEmploymentAppSourceType};
