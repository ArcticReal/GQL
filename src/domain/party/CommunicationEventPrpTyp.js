
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

import {CommunicationEventPurposeType} from '../party/CommunicationEventPurpose.js';


const CommunicationEventPrpTypType = new GraphQLObjectType({
  name: 'CommunicationEventPrpTypType',
  description: 'Type for CommunicationEventPrpTyp in party',

  fields: () => ({
    communicationEventPrpTypId: {type: GraphQLString},
    parentType: {
      type: CommunicationEventPrpTypType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (communicationEventPrpTyp, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvent/communicationEventPrpTyps/find?communicationEventPrpTypId=${communicationEventPrpTyp.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    communicationEventPrpTyps: {
      type: new GraphQLList(CommunicationEventPrpTypType),
      args : {},
      resolve: (communicationEventPrpTyp, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventPrpTyps/find?communicationEventPrpTypId=${communicationEventPrpTyp.communicationEventPrpTypId}`)
    },
    communicationEventPurposes: {
      type: new GraphQLList(CommunicationEventPurposeType),
      args : {},
      resolve: (communicationEventPrpTyp, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvent/communicationEventPurposes/find?communicationEventPrpTypId=${communicationEventPrpTyp.communicationEventPrpTypId}`)
    }
  })
});

export {CommunicationEventPrpTypType};
    




const CommunicationEventPrpTypInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventPrpTypInputType',
  description: 'input type for CommunicationEventPrpTyp in party',

  fields: () => ({
    communicationEventPrpTypId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {CommunicationEventPrpTypInputType};
    