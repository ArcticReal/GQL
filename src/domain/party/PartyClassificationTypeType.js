
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyClassificationGroupType} from '../party/PartyClassificationGroupType.js';


const PartyClassificationTypeType = new GraphQLObjectType({
  name: 'PartyClassificationTypeType',
  description: 'Type for PartyClassificationType in party',

  fields: () => ({
    parentType: {
      type: PartyClassificationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbiz.load(`partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString},
    partyClassificationType: {
      type: new GraphQLList(PartyClassificationTypeType),
      args : {partyClassificationTypeId: {type: GraphQLString}},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationType.partyClassificationTypeId}`)
    },
    partyClassificationGroup: {
      type: new GraphQLList(PartyClassificationGroupType),
      args : {partyClassificationTypeId: {type: GraphQLString}},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationGroups/find?partyClassificationTypeId=${partyClassificationType.partyClassificationTypeId}`)
    }
  })
});

export {PartyClassificationTypeType};
    