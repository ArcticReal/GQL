
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

import {PartyClassificationGroupType} from '../../party/PartyClassificationGroup/PartyClassificationGroupType.js';


const PartyClassificationTypeType = new GraphQLObjectType({
  name: 'PartyClassificationTypeType',
  description: 'Type for PartyClassificationType in party',

  fields: () => ({
    parentType: {
      type: PartyClassificationTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbiz.load(`party/party/partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString},
    partyClassificationTypes: {
      type: new GraphQLList(PartyClassificationTypeType),
      args : {},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationType.partyClassificationTypeId}`)
    },
    partyClassificationGroups: {
      type: new GraphQLList(PartyClassificationGroupType),
      args : {},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyClassificationGroups/find?partyClassificationTypeId=${partyClassificationType.partyClassificationTypeId}`)
    }
  })
});

export {PartyClassificationTypeType};
    