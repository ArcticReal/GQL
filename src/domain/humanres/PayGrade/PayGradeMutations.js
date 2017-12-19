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


const createPayGrade = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPayGrade method',
  args:{payGradeToBeAdded: {type: PayGradeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/payGrades/add?`, args.payGradeToBeAdded, req);
  }
};
export {createPayGrade};


const updatePayGrade = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePayGrade method',
  args:{payGradeToBeUpdated: {type: PayGradeInputType},payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/payGrades/${args.payGradeId}?`, args.payGradeToBeUpdated, req);
  }
};
export {updatePayGrade};


const deletePayGradeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePayGradeByIdUpdated method',
  args:{payGradeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/payGrades/${args.payGradeId}?`, null, req);
  }
};
export {deletePayGradeByIdUpdated};
