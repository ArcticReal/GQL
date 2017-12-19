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
import {PartyDataSourceInputType} from '../../party/PartyDataSource/PartyDataSourceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyDataSource method',
  args:{partyDataSourceToBeAdded: {type: PartyDataSourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyDataSources/add?`, args.partyDataSourceToBeAdded, req);
  }
};
export {createPartyDataSource};


const updatePartyDataSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyDataSource method',
  args:{partyDataSourceToBeUpdated: {type: PartyDataSourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyDataSources/${args.nullVal}?`, args.partyDataSourceToBeUpdated, req);
  }
};
export {updatePartyDataSource};


const deletePartyDataSourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyDataSourceByIdUpdated method',
  args:{partyDataSourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyDataSources/${args.partyDataSourceId}?`, null, req);
  }
};
export {deletePartyDataSourceByIdUpdated};
