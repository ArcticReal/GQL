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
import {CustRequestTypeAttrResponseType} from '../../order/CustRequestTypeAttr/CustRequestTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestTypeAttr = {
  type: CustRequestTypeAttrResponseType,
  description: 'mutation for ofbiz createCustRequestTypeAttr method',
  args:{custRequestTypeAttrToBeAdded: {type: CustRequestTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestTypeAttrs/add?`, args.custRequestTypeAttrToBeAdded, req);
  }
};
export {createCustRequestTypeAttr};


const updateCustRequestTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestTypeAttr method',
  args:{custRequestTypeAttrToBeUpdated: {type: CustRequestTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestTypeAttrs/${args.attrName}?`, args.custRequestTypeAttrToBeUpdated, req);
  }
};
export {updateCustRequestTypeAttr};


const deleteCustRequestTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestTypeAttrByIdUpdated method',
  args:{custRequestTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestTypeAttrs/${args.custRequestTypeAttrId}?`, null, req);
  }
};
export {deleteCustRequestTypeAttrByIdUpdated};
