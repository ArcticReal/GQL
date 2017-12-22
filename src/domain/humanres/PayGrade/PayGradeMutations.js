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
import {PayGradeResponseType} from '../../humanres/PayGrade/PayGradeResponseType.js';
import {PayGradeInputType} from '../../humanres/PayGrade/PayGradeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPayGrade = {
  type: PayGradeResponseType,
  description: 'mutation for ofbiz createPayGrade method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/payGrades/add?`, null, req);
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
