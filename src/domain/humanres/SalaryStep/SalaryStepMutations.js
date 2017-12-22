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
import {SalaryStepResponseType} from '../../humanres/SalaryStep/SalaryStepResponseType.js';
import {SalaryStepInputType} from '../../humanres/SalaryStep/SalaryStepInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalaryStep = {
  type: SalaryStepResponseType,
  description: 'mutation for ofbiz createSalaryStep method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/salarySteps/add?`, null, req);
  }
};
export {createSalaryStep};


const deleteSalaryStepByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalaryStepByIdUpdated method',
  args:{salaryStepId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/salarySteps/${args.salaryStepId}?`, null, req);
  }
};
export {deleteSalaryStepByIdUpdated};


const updateSalaryStep = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalaryStep method',
  args:{salaryStepToBeUpdated: {type: SalaryStepInputType},salaryStepSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/salarySteps/${args.salaryStepSeqId}?`, args.salaryStepToBeUpdated, req);
  }
};
export {updateSalaryStep};
