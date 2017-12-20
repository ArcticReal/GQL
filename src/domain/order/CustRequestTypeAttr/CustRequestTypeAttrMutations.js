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
import {CustRequestTypeAttrInputType} from '../../order/CustRequestTypeAttr/CustRequestTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCustRequestTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestTypeAttrs/add?`, null, req);
  }
};
export {createCustRequestTypeAttr};


const updateCustRequestTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCustRequestTypeAttr method',
  args:{custRequestTypeAttrToBeUpdated: {type: CustRequestTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestTypeAttrs/${args.attrName}?`, args.custRequestTypeAttrToBeUpdated, req);
  }
};
export {updateCustRequestTypeAttr};


const deleteCustRequestTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCustRequestTypeAttrByIdUpdated method',
  args:{custRequestTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestTypeAttrs/${args.custRequestTypeAttrId}?`, null, req);
  }
};
export {deleteCustRequestTypeAttrByIdUpdated};
