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
import {CreditCardInputType} from '../../accounting/CreditCard/CreditCardInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCreditCard = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCreditCard method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/creditCards/add?`, null, req);
  }
};
export {createCreditCard};


const deleteCreditCardByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCreditCardByIdUpdated method',
  args:{creditCardId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/creditCards/${args.creditCardId}?`, null, req);
  }
};
export {deleteCreditCardByIdUpdated};


const updateCreditCard = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCreditCard method',
  args:{creditCardToBeUpdated: {type: CreditCardInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/creditCards/${args.nullVal}?`, args.creditCardToBeUpdated, req);
  }
};
export {updateCreditCard};
