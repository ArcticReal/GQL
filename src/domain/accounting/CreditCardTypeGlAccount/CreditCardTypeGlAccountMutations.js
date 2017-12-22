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
import {CreditCardTypeGlAccountResponseType} from '../../accounting/CreditCardTypeGlAccount/CreditCardTypeGlAccountResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCreditCardTypeGlAccount = {
  type: CreditCardTypeGlAccountResponseType,
  description: 'mutation for ofbiz createCreditCardTypeGlAccount method',
  args:{creditCardTypeGlAccountToBeAdded: {type: CreditCardTypeGlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/creditCardTypeGlAccounts/add?`, args.creditCardTypeGlAccountToBeAdded, req);
  }
};
export {createCreditCardTypeGlAccount};


const deleteCreditCardTypeGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCreditCardTypeGlAccountByIdUpdated method',
  args:{creditCardTypeGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/creditCardTypeGlAccounts/${args.creditCardTypeGlAccountId}?`, null, req);
  }
};
export {deleteCreditCardTypeGlAccountByIdUpdated};


const updateCreditCardTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCreditCardTypeGlAccount method',
  args:{creditCardTypeGlAccountToBeUpdated: {type: CreditCardTypeGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/creditCardTypeGlAccounts/${args.nullVal}?`, args.creditCardTypeGlAccountToBeUpdated, req);
  }
};
export {updateCreditCardTypeGlAccount};
