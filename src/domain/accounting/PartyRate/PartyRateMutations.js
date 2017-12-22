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
import {PartyRateResponseType} from '../../accounting/PartyRate/PartyRateResponseType.js';
import {PartyRateInputType} from '../../accounting/PartyRate/PartyRateInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyRate = {
  type: PartyRateResponseType,
  description: 'mutation for ofbiz createPartyRate method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/partyRates/add?`, null, req);
  }
};
export {createPartyRate};


const updatePartyRate = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyRate method',
  args:{partyRateToBeUpdated: {type: PartyRateInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/partyRates/${args.nullVal}?`, args.partyRateToBeUpdated, req);
  }
};
export {updatePartyRate};


const deletePartyRateByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyRateByIdUpdated method',
  args:{partyRateId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/partyRates/${args.partyRateId}?`, null, req);
  }
};
export {deletePartyRateByIdUpdated};
