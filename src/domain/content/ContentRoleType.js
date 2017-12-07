
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {ContentType} from '../content/ContentType.js';


const ContentRoleType = new GraphQLObjectType({
  name: 'ContentRoleType',
  description: 'Type for ContentRole in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentRole, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${contentRole.contentId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (contentRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${contentRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ContentRoleType};
    