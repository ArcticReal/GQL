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
import {ProductStoreSurveyApplInputType} from '../../product/ProductStoreSurveyAppl/ProductStoreSurveyApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreSurveyAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreSurveyAppl method',
  args:{productStoreSurveyApplToBeAdded: {type: ProductStoreSurveyApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreSurveyAppls/add?`, args.productStoreSurveyApplToBeAdded, req);
  }
};
export {createProductStoreSurveyAppl};


const deleteProductStoreSurveyApplByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreSurveyApplByIdUpdated method',
  args:{productStoreSurveyApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreSurveyAppls/${args.productStoreSurveyApplId}?`, null, req);
  }
};
export {deleteProductStoreSurveyApplByIdUpdated};


const updateProductStoreSurveyAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreSurveyAppl method',
  args:{productStoreSurveyApplToBeUpdated: {type: ProductStoreSurveyApplInputType},productStoreSurveyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreSurveyAppls/${args.productStoreSurveyId}?`, args.productStoreSurveyApplToBeUpdated, req);
  }
};
export {updateProductStoreSurveyAppl};
