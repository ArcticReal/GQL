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
import {PartyContactMechInputType} from '../../party/PartyContactMech/PartyContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyContactMech method',
  args:{partyContactMechToBeAdded: {type: PartyContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/partyContactMechs/add?`, args.partyContactMechToBeAdded, req);
  }
};
export {createPartyContactMech};


const updatePartyContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyContactMech method',
  args:{partyContactMechToBeUpdated: {type: PartyContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/partyContactMechs/${args.nullVal}?`, args.partyContactMechToBeUpdated, req);
  }
};
export {updatePartyContactMech};


const deletePartyContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyContactMechByIdUpdated method',
  args:{partyContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/partyContactMechs/${args.partyContactMechId}?`, null, req);
  }
};
export {deletePartyContactMechByIdUpdated};
