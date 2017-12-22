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
import {BillingAccountTermInputType} from '../../accounting/BillingAccountTerm/BillingAccountTermInputType.js';
import {BillingAccountTermResponseType} from '../../accounting/BillingAccountTerm/BillingAccountTermResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBillingAccountTerm = {
  type: BillingAccountTermResponseType,
  description: 'mutation for ofbiz createBillingAccountTerm method',
  args:{billingAccountTermToBeAdded: {type: BillingAccountTermInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/billingAccount/billingAccountTerms/add?`, args.billingAccountTermToBeAdded, req);
  }
};
export {createBillingAccountTerm};


const updateBillingAccountTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBillingAccountTerm method',
  args:{billingAccountTermToBeUpdated: {type: BillingAccountTermInputType},billingAccountTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/billingAccount/billingAccountTerms/${args.billingAccountTermId}?`, args.billingAccountTermToBeUpdated, req);
  }
};
export {updateBillingAccountTerm};


const deleteBillingAccountTermByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBillingAccountTermByIdUpdated method',
  args:{billingAccountTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/billingAccount/billingAccountTerms/${args.billingAccountTermId}?`, null, req);
  }
};
export {deleteBillingAccountTermByIdUpdated};
