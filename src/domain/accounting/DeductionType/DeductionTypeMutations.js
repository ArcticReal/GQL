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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeductionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createDeductionType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/deduction/deductionTypes/add?`, null, req);
  }
};
export {createDeductionType};


const updateDeductionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateDeductionType method',
  args:{deductionTypeToBeUpdated: {type: DeductionTypeInputType},deductionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/deduction/deductionTypes/${args.deductionTypeId}?`, args.deductionTypeToBeUpdated, req);
  }
};
export {updateDeductionType};


const deleteDeductionTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteDeductionTypeByIdUpdated method',
  args:{deductionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/deduction/deductionTypes/${args.deductionTypeId}?`, null, req);
  }
};
export {deleteDeductionTypeByIdUpdated};
