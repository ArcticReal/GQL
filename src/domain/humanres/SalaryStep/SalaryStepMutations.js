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
import {SalaryStepInputType} from '../../humanres/SalaryStep/SalaryStepInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalaryStep = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalaryStep method',
  args:{salaryStepToBeAdded: {type: SalaryStepInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/salarySteps/add?`, args.salaryStepToBeAdded, req);
  }
};
export {createSalaryStep};


const deleteSalaryStepByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalaryStepByIdUpdated method',
  args:{salaryStepId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/salarySteps/${args.salaryStepId}?`, null, req);
  }
};
export {deleteSalaryStepByIdUpdated};


const updateSalaryStep = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalaryStep method',
  args:{salaryStepToBeUpdated: {type: SalaryStepInputType},salaryStepSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/salarySteps/${args.salaryStepSeqId}?`, args.salaryStepToBeUpdated, req);
  }
};
export {updateSalaryStep};
