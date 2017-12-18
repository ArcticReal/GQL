
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


const PartyAttributeType = new GraphQLObjectType({
  name: 'PartyAttributeType',
  description: 'Type for PartyAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyAttribute, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyAttribute.partyId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {PartyAttributeType};
    




const PartyAttributeInputType = new GraphQLInputObjectType({
  name: 'PartyAttributeInputType',
  description: 'input type for PartyAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyAttributeInputType};
    