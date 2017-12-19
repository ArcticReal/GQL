
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

import {PartyClassificationType} from '../../party/PartyClassification/PartyClassificationType.js';
import {PartyClassificationTypeType} from '../../party/PartyClassificationType/PartyClassificationTypeType.js';
import {MarketInterestType} from '../../product/MarketInterest/MarketInterestType.js';
import {SegmentGroupClassificationType} from '../../marketing/SegmentGroupClassification/SegmentGroupClassificationType.js';


const PartyClassificationGroupType = new GraphQLObjectType({
  name: 'PartyClassificationGroupType',
  description: 'Type for PartyClassificationGroup in party',

  fields: () => ({
    partyClassificationGroupId: {type: GraphQLString},
    parentGroup: {
      type: PartyClassificationGroupType,
      args : {parentGroupId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbiz.load(`party/party/partyClassificationGroups/find?partyClassificationGroupId=${partyClassificationGroup.parentGroupId}`)
    },
    description: {type: GraphQLString},
    partyClassificationType: {
      type: PartyClassificationTypeType,
      args : {partyClassificationTypeId: {type: GraphQLString}},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbiz.load(`party/party/partyClassificationTypes/find?partyClassificationTypeId=${partyClassificationGroup.partyClassificationTypeId}`)
    },
    partyClassifications: {
      type: new GraphQLList(PartyClassificationType),
      args : {},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyClassifications/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    partyClassificationGroups: {
      type: new GraphQLList(PartyClassificationGroupType),
      args : {},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyClassificationGroups/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    segmentGroupClassifications: {
      type: new GraphQLList(SegmentGroupClassificationType),
      args : {},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroup/segmentGroupClassifications/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    },
    marketInterests: {
      type: new GraphQLList(MarketInterestType),
      args : {},
      resolve: (partyClassificationGroup, args, {loaders}) => loaders.ofbizArray.load(`product/marketInterests/find?partyClassificationGroupId=${partyClassificationGroup.partyClassificationGroupId}`)
    }
  })
});

export {PartyClassificationGroupType};
    