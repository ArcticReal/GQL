
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyClassificationType} from '../party/PartyClassificationType.js';
import {PartyClassificationTypeType} from '../party/PartyClassificationTypeType.js';
import {MarketInterestType} from '../product/MarketInterestType.js';
import {SegmentGroupClassificationType} from '../marketing/SegmentGroupClassificationType.js';


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
    partyClassification: {
      type: new GraphQLList(PartyClassificationType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`partyClassifications/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    partyClassificationGroup: {
      type: new GraphQLList(PartyClassificationGroupType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`partyClassificationGroups/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    segmentGroupClassification: {
      type: new GraphQLList(SegmentGroupClassificationType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupClassifications/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    marketInterest: {
      type: new GraphQLList(MarketInterestType),
      args : {partyClassificationGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`marketInterests/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    }
  })
});

export {PartyClassificationGroupType};
    