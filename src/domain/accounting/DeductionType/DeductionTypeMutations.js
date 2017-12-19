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
import {DeductionTypeInputType} from '../../accounting/DeductionType/DeductionTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createDeductionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createDeductionType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/deduction/deductionTypes/add?`, null, req);
  }
};
export {createDeductionType};


const updateDeductionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDeductionType method',
  args:{deductionTypeToBeUpdated: {type: DeductionTypeInputType},deductionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/deduction/deductionTypes/${args.deductionTypeId}?`, args.deductionTypeToBeUpdated, req);
  }
};
export {updateDeductionType};


const deleteDeductionTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDeductionTypeByIdUpdated method',
  args:{deductionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/deduction/deductionTypes/${args.deductionTypeId}?`, null, req);
  }
};
export {deleteDeductionTypeByIdUpdated};
