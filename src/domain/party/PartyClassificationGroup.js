
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

import {PartyClassificationType} from '../party/PartyClassification.js';
import {PartyClassificationTypeType} from '../party/PartyClassificationType.js';
import {MarketInterestType} from '../product/MarketInterest.js';
import {SegmentGroupClassificationType} from '../marketing/SegmentGroupClassification.js';


const PartyClassificationGroupType = new GraphQLObjectType({
  name: 'PartyClassificationGroupType',
  description: 'Type for PartyClassificationGroup in party',

  fields: () => ({
    partyClassificationGroupId: {type: GraphQLString},
    parentGroup: {
      type: PartyClassificationGroupType,
      args : {parentGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbiz.load(`partyClassificationGroups/find?partyClassificationGroupId=${partyClassificationGroup.parentGroupId}`)
    },
    description: {type: GraphQLString},
    partyClassificationType: {
      type: PartyClassificationTypeType,
      args : {partyClassificationTypeId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbiz.load(`partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationGroup.partyClassificationTypeId}`)
    },
    partyClassifications: {
      type: new GraphQLList(PartyClassificationType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`partyClassifications/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    partyClassificationGroups: {
      type: new GraphQLList(PartyClassificationGroupType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationGroups/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    segmentGroupClassifications: {
      type: new GraphQLList(SegmentGroupClassificationType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupClassifications/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    marketInterests: {
      type: new GraphQLList(MarketInterestType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`marketInterests/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    }
  })
});

export {PartyClassificationGroupType};
    




const PartyClassificationGroupInputType = new GraphQLInputObjectType({
  name: 'PartyClassificationGroupInputType',
  description: 'input type for PartyClassificationGroup in party',

  fields: () => ({
    partyClassificationGroupId: {type: GraphQLString},
    parentGroupId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString}
  })
});

export {PartyClassificationGroupInputType};
    