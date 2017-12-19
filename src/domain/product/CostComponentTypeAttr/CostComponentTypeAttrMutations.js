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
import {CostComponentTypeAttrInputType} from '../../product/CostComponentTypeAttr/CostComponentTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCostComponentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCostComponentTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponent/costComponentTypeAttrs/add?`, null, req);
  }
};
export {createCostComponentTypeAttr};


const updateCostComponentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCostComponentTypeAttr method',
  args:{costComponentTypeAttrToBeUpdated: {type: CostComponentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponent/costComponentTypeAttrs/${args.attrName}?`, args.costComponentTypeAttrToBeUpdated, req);
  }
};
export {updateCostComponentTypeAttr};


const deleteCostComponentTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCostComponentTypeAttrByIdUpdated method',
  args:{costComponentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponent/costComponentTypeAttrs/${args.costComponentTypeAttrId}?`, null, req);
  }
};
export {deleteCostComponentTypeAttrByIdUpdated};
