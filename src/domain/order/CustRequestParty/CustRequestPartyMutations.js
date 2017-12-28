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
import {CustRequestPartyInputType} from '../../order/CustRequestParty/CustRequestPartyInputType.js';
import {CustRequestPartyResponseType} from '../../order/CustRequestParty/CustRequestPartyResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestParty = {
  type: CustRequestPartyResponseType,
  description: 'mutation for ofbiz createCustRequestParty method',
  args:{custRequestPartyToBeAdded: {type: CustRequestPartyInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestPartys/add?`, args.custRequestPartyToBeAdded, req);
  }
};
export {createCustRequestParty};


const deleteCustRequestPartyByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestPartyByIdUpdated method',
  args:{custRequestPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestPartys/${args.custRequestPartyId}?`, null, req);
  }
};
export {deleteCustRequestPartyByIdUpdated};


const updateCustRequestParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestParty method',
  args:{custRequestPartyToBeUpdated: {type: CustRequestPartyInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestPartys/${args.roleTypeId}?`, args.custRequestPartyToBeUpdated, req);
  }
};
export {updateCustRequestParty};
