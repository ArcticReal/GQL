
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

import {PartyRelationshipType} from '../party/PartyRelationship.js';


const PriorityTypeType = new GraphQLObjectType({
  name: 'PriorityTypeType',
  description: 'Type for PriorityType in party',

  fields: () => ({
    priorityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyRelationships: {
      type: new GraphQLList(PartyRelationshipType),
      args : {},
      resolve: (priorityType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationships/find?priorityTypeId=${priorityType.priorityTypeId}`)
    }
  })
});

export {PriorityTypeType};
    




const PriorityTypeInputType = new GraphQLInputObjectType({
  name: 'PriorityTypeInputType',
  description: 'input type for PriorityType',

  fields: () => ({
    description: {type: GraphQLString},
    priorityTypeId: {type: GraphQLString}
  })
});

export {PriorityTypeInputType};
    