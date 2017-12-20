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
import {PayGradeInputType} from '../../humanres/PayGrade/PayGradeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayGrade = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPayGrade method',
  args:{payGradeToBeAdded: {type: PayGradeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/payGrades/add?`, args.payGradeToBeAdded, req);
  }
};
export {createPayGrade};


const updatePayGrade = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePayGrade method',
  args:{payGradeToBeUpdated: {type: PayGradeInputType},payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/payGrades/${args.payGradeId}?`, args.payGradeToBeUpdated, req);
  }
};
export {updatePayGrade};


const deletePayGradeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePayGradeByIdUpdated method',
  args:{payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/payGrades/${args.payGradeId}?`, null, req);
  }
};
export {deletePayGradeByIdUpdated};
