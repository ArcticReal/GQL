
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

import {PartyClassificationGroupType} from '../party/PartyClassificationGroup.js';


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
    partyClassificationTypes: {
      type: new GraphQLList(PartyClassificationTypeType),
      args : {partyClassificationTypeId: {type: GraphQLString}},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationType.partyClassificationTypeId}`)
    },
    partyClassificationGroups: {
      type: new GraphQLList(PartyClassificationGroupType),
      args : {partyClassificationTypeId: {type: GraphQLString}},
      resolve: (partyClassificationType, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationGroups/find?partyClassificationTypeId=${partyClassificationType.partyClassificationTypeId}`)
    }
  })
});

export {PartyClassificationTypeType};
    




const PartyClassificationTypeInputType = new GraphQLInputObjectType({
  name: 'PartyClassificationTypeInputType',
  description: 'input type for PartyClassificationType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString}
  })
});

export {PartyClassificationTypeInputType};
    