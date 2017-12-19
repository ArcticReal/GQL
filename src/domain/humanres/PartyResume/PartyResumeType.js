
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

import {PartyType} from '../../party/Party/PartyType.js';
import {ContentType} from '../../content/Content/ContentType.js';


const PartyResumeType = new GraphQLObjectType({
  name: 'PartyResumeType',
  description: 'Type for PartyResume in humanres',

  fields: () => ({
    resumeText: {type: GraphQLString},
    resumeId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (partyResume, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${partyResume.contentId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyResume, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyResume.partyId}`)
    },
    resumeDate: {type: GraphQLString}
  })
});

export {PartyResumeType};
    