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
import {PartyClassificationInputType} from '../../party/PartyClassification/PartyClassificationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyClassification method',
  args:{partyClassificationToBeAdded: {type: PartyClassificationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyClassifications/add?`, args.partyClassificationToBeAdded, req);
  }
};
export {createPartyClassification};


const updatePartyClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyClassification method',
  args:{partyClassificationToBeUpdated: {type: PartyClassificationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyClassifications/${args.nullVal}?`, args.partyClassificationToBeUpdated, req);
  }
};
export {updatePartyClassification};


const deletePartyClassificationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyClassificationByIdUpdated method',
  args:{partyClassificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyClassifications/${args.partyClassificationId}?`, null, req);
  }
};
export {deletePartyClassificationByIdUpdated};
