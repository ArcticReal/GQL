
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

import {PartyRoleType} from '../party/PartyRole.js';
import {ContentType} from '../content/Content.js';


const ContentRoleType = new GraphQLObjectType({
  name: 'ContentRoleType',
  description: 'Type for ContentRole in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentRole, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${contentRole.contentId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contentRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${contentRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ContentRoleType};
    




const ContentRoleInputType = new GraphQLInputObjectType({
  name: 'ContentRoleInputType',
  description: 'input type for ContentRole in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ContentRoleInputType};
    