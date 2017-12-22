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
import {DeductionTypeResponseType} from '../../accounting/DeductionType/DeductionTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDeductionType = {
  type: DeductionTypeResponseType,
  description: 'mutation for ofbiz createDeductionType method',
  args:{deductionTypeToBeAdded: {type: DeductionTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/deduction/deductionTypes/add?`, args.deductionTypeToBeAdded, req);
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
