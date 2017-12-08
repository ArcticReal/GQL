
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
      args : {priorityTypeId: {type: GraphQLString}},
      resolve: (priorityType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?priorityTypeId=${priorityType.priorityTypeId}`)
    }
  })
});

export {PriorityTypeType};
    




const PriorityTypeInputType = new GraphQLInputObjectType({
  name: 'PriorityTypeInputType',
  description: 'input type for PriorityType in party',

  fields: () => ({
    priorityTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {PriorityTypeInputType};
    