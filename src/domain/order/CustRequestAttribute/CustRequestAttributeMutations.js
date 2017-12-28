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
import {CustRequestAttributeInputType} from '../../order/CustRequestAttribute/CustRequestAttributeInputType.js';
import {CustRequestAttributeResponseType} from '../../order/CustRequestAttribute/CustRequestAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestAttribute = {
  type: CustRequestAttributeResponseType,
  description: 'mutation for ofbiz createCustRequestAttribute method',
  args:{custRequestAttributeToBeAdded: {type: CustRequestAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestAttributes/add?`, args.custRequestAttributeToBeAdded, req);
  }
};
export {createCustRequestAttribute};


const updateCustRequestAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestAttribute method',
  args:{custRequestAttributeToBeUpdated: {type: CustRequestAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestAttributes/${args.attrName}?`, args.custRequestAttributeToBeUpdated, req);
  }
};
export {updateCustRequestAttribute};


const deleteCustRequestAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestAttributeByIdUpdated method',
  args:{custRequestAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestAttributes/${args.custRequestAttributeId}?`, null, req);
  }
};
export {deleteCustRequestAttributeByIdUpdated};
