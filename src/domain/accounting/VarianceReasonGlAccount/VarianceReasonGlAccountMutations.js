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
import {VarianceReasonGlAccountInputType} from '../../accounting/VarianceReasonGlAccount/VarianceReasonGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createVarianceReasonGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createVarianceReasonGlAccount method',
  args:{varianceReasonGlAccountToBeAdded: {type: VarianceReasonGlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/varianceReasonGlAccounts/add?`, args.varianceReasonGlAccountToBeAdded, req);
  }
};
export {createVarianceReasonGlAccount};


const updateVarianceReasonGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateVarianceReasonGlAccount method',
  args:{varianceReasonGlAccountToBeUpdated: {type: VarianceReasonGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/varianceReasonGlAccounts/${args.nullVal}?`, args.varianceReasonGlAccountToBeUpdated, req);
  }
};
export {updateVarianceReasonGlAccount};


const deleteVarianceReasonGlAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteVarianceReasonGlAccountByIdUpdated method',
  args:{varianceReasonGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/varianceReasonGlAccounts/${args.varianceReasonGlAccountId}?`, null, req);
  }
};
export {deleteVarianceReasonGlAccountByIdUpdated};
