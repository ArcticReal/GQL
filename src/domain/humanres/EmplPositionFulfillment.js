
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

import {EmplPositionType} from '../humanres/EmplPosition.js';
import {PartyType} from '../party/Party.js';


const EmplPositionFulfillmentType = new GraphQLObjectType({
  name: 'EmplPositionFulfillmentType',
  description: 'Type for EmplPositionFulfillment in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    emplPosition: {
      type: EmplPositionType,
      args : {emplPositionId: {type: GraphQLString}},
      resolve: (emplPositionFulfillment, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPositions/find?emplPositionId=${emplPositionFulfillment.emplPositionId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (emplPositionFulfillment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${emplPositionFulfillment.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionFulfillmentType};
    




const EmplPositionFulfillmentInputType = new GraphQLInputObjectType({
  name: 'EmplPositionFulfillmentInputType',
  description: 'input type for EmplPositionFulfillment in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionFulfillmentInputType};
    