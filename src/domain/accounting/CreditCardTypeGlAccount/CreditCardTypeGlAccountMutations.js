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
import {CreditCardTypeGlAccountInputType} from '../../accounting/CreditCardTypeGlAccount/CreditCardTypeGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCreditCardTypeGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCreditCardTypeGlAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/creditCardTypeGlAccounts/add?`, null, req);
  }
};
export {createCreditCardTypeGlAccount};


const deleteCreditCardTypeGlAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCreditCardTypeGlAccountByIdUpdated method',
  args:{creditCardTypeGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/creditCardTypeGlAccounts/${args.creditCardTypeGlAccountId}?`, null, req);
  }
};
export {deleteCreditCardTypeGlAccountByIdUpdated};


const updateCreditCardTypeGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCreditCardTypeGlAccount method',
  args:{creditCardTypeGlAccountToBeUpdated: {type: CreditCardTypeGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/creditCardTypeGlAccounts/${args.nullVal}?`, args.creditCardTypeGlAccountToBeUpdated, req);
  }
};
export {updateCreditCardTypeGlAccount};
