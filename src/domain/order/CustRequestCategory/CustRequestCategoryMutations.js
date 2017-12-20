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
import {CustRequestCategoryInputType} from '../../order/CustRequestCategory/CustRequestCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCustRequestCategory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestCategorys/add?`, null, req);
  }
};
export {createCustRequestCategory};


const updateCustRequestCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCustRequestCategory method',
  args:{custRequestCategoryToBeUpdated: {type: CustRequestCategoryInputType},custRequestCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestCategorys/${args.custRequestCategoryId}?`, args.custRequestCategoryToBeUpdated, req);
  }
};
export {updateCustRequestCategory};


const deleteCustRequestCategoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCustRequestCategoryByIdUpdated method',
  args:{custRequestCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestCategorys/${args.custRequestCategoryId}?`, null, req);
  }
};
export {deleteCustRequestCategoryByIdUpdated};
