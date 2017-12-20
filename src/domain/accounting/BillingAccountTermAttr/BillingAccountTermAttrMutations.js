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
import {BillingAccountTermAttrInputType} from '../../accounting/BillingAccountTermAttr/BillingAccountTermAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBillingAccountTermAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createBillingAccountTermAttr method',
  args:{billingAccountTermAttrToBeAdded: {type: BillingAccountTermAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/billingAccount/billingAccountTermAttrs/add?`, args.billingAccountTermAttrToBeAdded, req);
  }
};
export {createBillingAccountTermAttr};


const updateBillingAccountTermAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateBillingAccountTermAttr method',
  args:{billingAccountTermAttrToBeUpdated: {type: BillingAccountTermAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/billingAccount/billingAccountTermAttrs/${args.attrName}?`, args.billingAccountTermAttrToBeUpdated, req);
  }
};
export {updateBillingAccountTermAttr};


const deleteBillingAccountTermAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteBillingAccountTermAttrByIdUpdated method',
  args:{billingAccountTermAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/billingAccount/billingAccountTermAttrs/${args.billingAccountTermAttrId}?`, null, req);
  }
};
export {deleteBillingAccountTermAttrByIdUpdated};
