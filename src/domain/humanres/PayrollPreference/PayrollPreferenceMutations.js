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
import {PayrollPreferenceInputType} from '../../humanres/PayrollPreference/PayrollPreferenceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayrollPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayrollPreference method',
  args:{payrollPreferenceToBeAdded: {type: PayrollPreferenceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/payrollPreferences/add?`, args.payrollPreferenceToBeAdded, req);
  }
};
export {createPayrollPreference};


const updatePayrollPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayrollPreference method',
  args:{payrollPreferenceToBeUpdated: {type: PayrollPreferenceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/payrollPreferences/${args.nullVal}?`, args.payrollPreferenceToBeUpdated, req);
  }
};
export {updatePayrollPreference};


const deletePayrollPreferenceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePayrollPreferenceByIdUpdated method',
  args:{payrollPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/payrollPreferences/${args.payrollPreferenceId}?`, null, req);
  }
};
export {deletePayrollPreferenceByIdUpdated};
