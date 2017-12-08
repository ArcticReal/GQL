
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

import {PartyType} from '../party/Party.js';
import {PartyClassificationGroupType} from '../party/PartyClassificationGroup.js';


const PartyClassificationType = new GraphQLObjectType({
  name: 'PartyClassificationType',
  description: 'Type for PartyClassification in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroup: {
      type: PartyClassificationGroupType,
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassification, args, {loaders}) => loaders.ofbiz.load(`partyClassificationGroups/find?partyClassificationGroupId=${partyClassification.partyClassificationGroupId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyClassification, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyClassification.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyClassificationType};
    




const PartyClassificationInputType = new GraphQLInputObjectType({
  name: 'PartyClassificationInputType',
  description: 'input type for PartyClassification in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyClassificationInputType};
    