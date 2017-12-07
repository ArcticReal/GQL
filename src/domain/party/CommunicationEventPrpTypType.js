
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEventPurposeType} from '../party/CommunicationEventPurposeType.js';


const CommunicationEventPrpTypType = new GraphQLObjectType({
  name: 'CommunicationEventPrpTypType',
  description: 'Type for CommunicationEventPrpTyp in party',

  fields: () => ({
    communicationEventPrpTypId: {type: GraphQLString},
    parentType: {
      type: CommunicationEventPrpTypType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (communicationEventPrpTyp, args, {loaders}) => loaders.ofbiz.load(`communicationEventPrpTyps/find?communicationEventPrpTypId=${communicationEventPrpTyp.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    communicationEventPrpTyp: {
      type: new GraphQLList(CommunicationEventPrpTypType),
      args : {communicationEventPrpTypId: {type: GraphQLString}},
      resolve: (communicationEventPrpTyp, args, {loaders}) => loaders.ofbizArray.load(`communicationEventPrpTyps/find?communicationEventPrpTypId=${communicationEventPrpTyp.communicationEventPrpTypId}`)
    },
    communicationEventPurpose: {
      type: new GraphQLList(CommunicationEventPurposeType),
      args : {communicationEventPrpTypId: {type: GraphQLString}},
      resolve: (communicationEventPrpTyp, args, {loaders}) => loaders.ofbizArray.load(`communicationEventPurposes/find?communicationEventPrpTypId=${communicationEventPrpTyp.communicationEventPrpTypId}`)
    }
  })
});

export {CommunicationEventPrpTypType};
    