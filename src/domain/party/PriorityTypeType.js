
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRelationshipType} from '../party/PartyRelationshipType.js';


const PriorityTypeType = new GraphQLObjectType({
  name: 'PriorityTypeType',
  description: 'Type for PriorityType in party',

  fields: () => ({
    priorityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyRelationship: {
      type: new GraphQLList(PartyRelationshipType),
      args : {priorityTypeId: {type: GraphQLString}},
      resolve: (priorityType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?priorityTypeId=${priorityType.priorityTypeId}`)
    }
  })
});

export {PriorityTypeType};
    